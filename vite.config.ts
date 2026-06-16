import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import multer from 'multer';
import nodemailer from 'nodemailer';
import { generateCandidateEmailHTML } from './src/utils/emailTemplate';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'email-api-server',
        configureServer(server) {
          const upload = multer({ limits: { fileSize: 100 * 1024 * 1024 } }); // 100MB
          
          server.middlewares.use('/api/send-email', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end('Method Not Allowed');
              return;
            }
            
            upload.single('videoApresentacao')(req as any, res as any, async (err: any) => {
              if (err) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
                return;
              }

              try {
                const body = (req as any).body;
                const file = (req as any).file;

                // Parse arrays sent as JSON strings or raw arrays
                const parseField = (field: any) => {
                  try {
                    return typeof field === 'string' ? JSON.parse(field) : field;
                  } catch {
                    return field ? [field] : [];
                  }
                };

                const cnhCategoria = parseField(body.cnhCategoria);
                const servicosExecutar = parseField(body.servicosExecutar);
                const experienciaEquipamentos = parseField(body.experienciaEquipamentos);

                const candidateData = {
                  ...body,
                  cnhCategoria,
                  servicosExecutar,
                  experienciaEquipamentos
                };

                const html = generateCandidateEmailHTML(candidateData);

                const host = env.SMTP_HOST || process.env.SMTP_HOST;
                const port = Number(env.SMTP_PORT || process.env.SMTP_PORT || 587);
                const user = env.SMTP_USER || process.env.SMTP_USER;
                const pass = env.SMTP_PASS || process.env.SMTP_PASS;
                const from = env.SMTP_FROM || process.env.SMTP_FROM || user;

                if (!host || !user || !pass) {
                  console.log('--- CURRÍCULO RECEBIDO (SMTP NÃO CONFIGURADO NO .env) ---');
                  console.log(candidateData);
                  console.log('--- FIM ---');
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ 
                    success: true, 
                    message: 'Currículo recebido localmente com sucesso! (SMTP não configurado - confira o console)' 
                  }));
                  return;
                }

                const transporter = nodemailer.createTransport({
                  host,
                  port,
                  secure: port === 465,
                  auth: { user, pass }
                });

                const attachments: any[] = [];
                if (file) {
                  attachments.push({
                    filename: file.originalname,
                    content: file.buffer
                  });
                }

                await transporter.sendMail({
                  from,
                  to: 'contato@danieledaianepinturas.com.br',
                  subject: `Trabalhe Conosco - Currículo de ${candidateData.nome}`,
                  html,
                  attachments
                });

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              } catch (error: any) {
                console.error('Erro no processamento do e-mail:', error);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: error.message }));
              }
            });
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
