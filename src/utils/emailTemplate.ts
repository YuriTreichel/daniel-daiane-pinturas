export function generateCandidateEmailHTML(data: any): string {
  // Safe helpers
  const getVal = (val: any) => val || 'Não informado';
  const getArrayVal = (arr: any) => {
    if (Array.isArray(arr) && arr.length > 0) return arr.join(', ');
    return 'Nenhum';
  };

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Novo Candidato - Trabalhe Conosco</title>
      <style>
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background-color: #F4F6F9;
          color: #333333;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }
        .container {
          max-width: 680px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          border: 1px solid #E2E8F0;
        }
        .header {
          background-color: #0B1221;
          color: #ffffff;
          padding: 40px 30px;
          text-align: center;
          position: relative;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .header p {
          margin: 10px 0 0 0;
          color: #A0AEC0;
          font-size: 16px;
        }
        .accent-bar {
          height: 4px;
          background-color: #F14A29;
          width: 100%;
        }
        .content {
          padding: 40px 30px;
        }
        .section-card {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
        }
        .section-title {
          font-size: 18px;
          font-weight: 700;
          color: #0B1221;
          margin-top: 0;
          margin-bottom: 16px;
          border-bottom: 2px solid #E2E8F0;
          padding-bottom: 8px;
          display: flex;
          align-items: center;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .field-group {
          margin-bottom: 14px;
        }
        .field-label {
          font-size: 12px;
          font-weight: 700;
          color: #718096;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .field-value {
          font-size: 15px;
          color: #1A202C;
          font-weight: 500;
        }
        .badge {
          display: inline-block;
          background-color: #F14A29;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
        }
        .list-items {
          margin: 0;
          padding-left: 20px;
          font-size: 14px;
          color: #2D3748;
        }
        .list-items li {
          margin-bottom: 6px;
        }
        .footer {
          background-color: #F8FAFC;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #718096;
          border-top: 1px solid #E2E8F0;
        }
        .footer a {
          color: #F14A29;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Daniel & Daiane Pinturas</h1>
          <p>Novo Currículo Recebido pelo Trabalhe Conosco</p>
        </div>
        <div class="accent-bar"></div>
        
        <div class="content">
          
          <!-- ETAPA 1 -->
          <div class="section-card">
            <h3 class="section-title">👤 Etapa 1 – Dados Básicos</h3>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Nome Completo</div>
                  <div class="field-value">${getVal(data.nome)}</div>
                </td>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">CPF</div>
                  <div class="field-value">${getVal(data.cpf)}</div>
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Data de Nascimento</div>
                  <div class="field-value">${getVal(data.dataNascimento)}</div>
                </td>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Idade</div>
                  <div class="field-value">${getVal(data.idade)} anos</div>
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Telefone / WhatsApp</div>
                  <div class="field-value">${getVal(data.telefone)}</div>
                </td>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">E-mail</div>
                  <div class="field-value">${getVal(data.email)}</div>
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Cidade / Bairro</div>
                  <div class="field-value">${getVal(data.cidade)} - ${getVal(data.bairro)}</div>
                </td>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Redes Sociais</div>
                  <div class="field-value">${getVal(data.socialMedia)}</div>
                </td>
              </tr>
              <tr>
                <td width="100%" colspan="2" valign="top">
                  <div class="field-label">Escolaridade</div>
                  <div class="field-value">${getVal(data.escolaridade)}</div>
                </td>
              </tr>
            </table>
          </div>

          <!-- ETAPA 2 -->
          <div class="section-card">
            <h3 class="section-title">📋 Etapa 2 – Informações Pessoais</h3>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Possui CNH?</div>
                  <div class="field-value">${getVal(data.possuiCnh)} ${data.possuiCnh === 'Sim' ? `<span class="badge">Cat. ${getArrayVal(data.cnhCategoria)}</span>` : ''}</div>
                </td>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Veículo Próprio</div>
                  <div class="field-value">${getVal(data.veiculoProprio)}</div>
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Fuma?</div>
                  <div class="field-value">${getVal(data.fuma)}</div>
                </td>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Disponibilidade para Viajar?</div>
                  <div class="field-value">${getVal(data.disponibilidadeViajar)}</div>
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top">
                  <div class="field-label">Trabalha aos Sábados?</div>
                  <div class="field-value">${getVal(data.disponibilidadeSabados)}</div>
                </td>
                <td width="50%" valign="top">
                  <div class="field-label">Limitação Física em Altura?</div>
                  <div class="field-value">${getVal(data.limitacaoFisica)} ${data.limitacaoFisica === 'Sim' ? `(${getVal(data.limitacaoFisicaQual)})` : ''}</div>
                </td>
              </tr>
            </table>
          </div>

          <!-- ETAPA 3 -->
          <div class="section-card">
            <h3 class="section-title">💼 Etapa 3 – Experiência Profissional</h3>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Anos na Construção Civil</div>
                  <div class="field-value">${getVal(data.anosConstrucaoCivil)}</div>
                </td>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Anos Trabalhando com Pintura</div>
                  <div class="field-value">${getVal(data.anosPintura)}</div>
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Função Principal</div>
                  <div class="field-value">${getVal(data.funcaoPrincipal)}</div>
                </td>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Pretensão Salarial</div>
                  <div class="field-value">${getVal(data.pretensaoSalarial)}</div>
                </td>
              </tr>
              <tr>
                <td width="100%" colspan="2" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Empresas do Ramo em que já Trabalhou</div>
                  <div class="field-value" style="font-style: italic;">${getVal(data.empresasRamo)}</div>
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top">
                  <div class="field-label">Última Empresa</div>
                  <div class="field-value">${getVal(data.ultimaEmpresa)} (${getVal(data.tempoUltimaEmpresa)})</div>
                </td>
                <td width="50%" valign="top">
                  <div class="field-label">Atualmente Empregado?</div>
                  <div class="field-value">${getVal(data.estaEmpregado)}</div>
                </td>
              </tr>
              <tr>
                <td width="100%" colspan="2" valign="top" style="padding-top: 12px;">
                  <div class="field-label">Por que saiu da última empresa?</div>
                  <div class="field-value">${getVal(data.motivoSaida)}</div>
                </td>
              </tr>
            </table>
          </div>

          <!-- ETAPA 4 -->
          <div class="section-card">
            <h3 class="section-title">🔧 Etapa 4 – Experiência Técnica e Especialidades</h3>
            
            <div style="margin-bottom: 12px;">
              <div class="field-label">Serviços Gerais de Pintura que Sabe Executar</div>
              <div class="field-value">${getArrayVal(data.servicosExecutar)}</div>
            </div>

            <div style="margin-bottom: 12px;">
              <div class="field-label">Experiência em Revestimentos de Fachada</div>
              <div class="field-value">${getArrayVal(data.experienciaRevestimentoFachada)}</div>
            </div>

            <div style="margin-bottom: 12px;">
              <div class="field-label">Inspeção e Diagnóstico</div>
              <div class="field-value">${getArrayVal(data.inspecaoDiagnostico)}</div>
            </div>

            <div style="margin-bottom: 12px;">
              <div class="field-label">Recuperação de Fachadas (Especialidades)</div>
              <div class="field-value">${getArrayVal(data.recuperacaoFachadaEspecialidades)}</div>
            </div>

            <div style="margin-bottom: 0;">
              <div class="field-label">Experiência Prática (Atuação em Fachadas)</div>
              <div class="field-value">${getArrayVal(data.experienciaPraticaFachada)}</div>
            </div>
          </div>

          <!-- ETAPA 5 -->
          <div class="section-card">
            <h3 class="section-title">🪜 Etapa 5 – Trabalho em Altura</h3>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
              <tr>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Tem experiência com Altura?</div>
                  <div class="field-value">${getVal(data.experienciaAltura)}</div>
                </td>
                <td width="50%" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Possui Certificado NR-35?</div>
                  <div class="field-value">${getVal(data.certificadoNr35)}</div>
                </td>
              </tr>
              <tr>
                <td width="100%" colspan="2" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Equipamentos Gerais com Experiência</div>
                  <div class="field-value">${getArrayVal(data.experienciaEquipamentos)}</div>
                </td>
              </tr>
              <tr>
                <td width="100%" colspan="2" valign="top" style="padding-bottom: 12px;">
                  <div class="field-label">Equipamentos de Altura para Revestimento Utilizados</div>
                  <div class="field-value">${getArrayVal(data.alturaRevestimentoEquipamentos)}</div>
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top">
                  <div class="field-label">Já sofreu acidente em altura?</div>
                  <div class="field-value">${getVal(data.acidenteAltura)} ${data.acidenteAltura === 'Sim' ? `(${getVal(data.acidenteAlturaExplique)})` : ''}</div>
                </td>
                <td width="50%" valign="top">
                  <div class="field-label">Confiança para Trabalho em Altura</div>
                  <div class="field-value" style="font-weight: 800; color: #F14A29; font-size: 18px;">${data.nivelSegurancaAltura || 5} / 10</div>
                </td>
              </tr>
            </table>
            <div class="field-group" style="margin-bottom: 0;">
              <div class="field-label">Participação e relato de obra com risco de desprendimento de revestimento</div>
              <div class="field-value" style="background-color: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #E2E8F0; margin-top: 4px; font-style: italic;">
                ${getVal(data.obraRiscoDesprendimentoExplique)}
              </div>
            </div>
          </div>

          <!-- ETAPA 6 -->
          <div class="section-card">
            <h3 class="section-title">🧠 Etapa 6 – Perfil Comportamental</h3>
            <div class="field-group">
              <div class="field-label">O que é mais importante em uma empresa?</div>
              <div class="field-value" style="background-color: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #E2E8F0; margin-top: 4px;">
                ${getVal(data.importanteEmpresa)}
              </div>
            </div>
            <div class="field-group">
              <div class="field-label">O que faz você pedir demissão?</div>
              <div class="field-value" style="background-color: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #E2E8F0; margin-top: 4px;">
                ${getVal(data.motivoDemissao)}
              </div>
            </div>
            <div class="field-group">
              <div class="field-label">Preferência de trabalho</div>
              <div class="field-value"><span class="badge" style="background-color: #0B1221;">${getVal(data.preferenciaTrabalho)}</span></div>
            </div>
            <div class="field-group">
              <div class="field-label">Como reage quando recebe correção de um líder?</div>
              <div class="field-value" style="background-color: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #E2E8F0; margin-top: 4px;">
                ${getVal(data.reacaoCorrecaoLider)}
              </div>
            </div>
            <div class="field-group">
              <div class="field-label">Qual foi seu maior aprendizado profissional?</div>
              <div class="field-value" style="background-color: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #E2E8F0; margin-top: 4px;">
                ${getVal(data.maiorAprendizado)}
              </div>
            </div>
            <div class="field-group" style="margin-bottom: 0;">
              <div class="field-label">O que acredita que pode agregar à nossa equipe?</div>
              <div class="field-value" style="background-color: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #E2E8F0; margin-top: 4px;">
                ${getVal(data.oQuePodeAgregar)}
              </div>
            </div>
          </div>

          <!-- ETAPA 7 -->
          <div class="section-card" style="margin-bottom: 0;">
            <h3 class="section-title">🏁 Etapa 7 – Filtro Final</h3>
            <div class="field-group">
              <div class="field-label">Por que deseja trabalhar na Daniel & Daiane?</div>
              <div class="field-value" style="background-color: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #E2E8F0; margin-top: 4px;">
                ${getVal(data.porqueTrabalharDaniel)}
              </div>
            </div>
            <div class="field-group">
              <div class="field-label">Situação difícil em obra e como resolveu</div>
              <div class="field-value" style="background-color: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #E2E8F0; margin-top: 4px;">
                ${getVal(data.situacaoDificilObra)}
              </div>
            </div>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="50%" valign="top">
                  <div class="field-label">Quando poderia começar?</div>
                  <div class="field-value">${getVal(data.quandoComecar)}</div>
                </td>
                <td width="50%" valign="top">
                  <div class="field-label">Possui Indicação?</div>
                  <div class="field-value">${getVal(data.possuiIndicacao)} ${data.possuiIndicacao === 'Sim' ? `(${getVal(data.indicacaoQuem)})` : ''}</div>
                </td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #E2E8F0;">
              <div class="field-label">Consentimento LGPD</div>
              <div class="field-value" style="color: #2D3748; font-weight: bold;">
                ✓ O candidato declarou estar ciente e de acordo com o tratamento de seus dados pessoais conforme as disposições da Lei nº 13.709/2018 (LGPD).
              </div>
            </div>
          </div>

        </div>
        
        <div class="footer">
          Este e-mail foi gerado automaticamente pelo portal de candidaturas da <br>
          <strong><a href="#">Daniel & Daiane Pinturas e Restaurações</a></strong>
        </div>
      </div>
    </body>
    </html>
  `;
}
