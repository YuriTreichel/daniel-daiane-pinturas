<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// =========================================================================
// CONFIGURAÇÕES DE E-MAIL (SMTP)
// =========================================================================
// Se sua hospedagem bloquear a função mail() padrão (comum no Laragon e Hostinger),
// preencha as configurações de SMTP da Daniel & Daiane Pinturas abaixo:
define('SMTP_HOST', 'mail.danieledaianepinturas.com.br'); // Ex: mail.danieledaianepinturas.com.br
define('SMTP_PORT', 465); // Geralmente 587 ou 465
define('SMTP_USER', 'contato@danieledaianepinturas.com.br');
define('SMTP_PASS', '@DanielDaiane1020');  // Senha do e-mail acima
define('SMTP_SECURE', 'ssl'); // 'tls', 'ssl' ou '' (vazio)
// =========================================================================

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido"]);
    exit;
}

// Get POST values with fallbacks
$nome = $_POST['nome'] ?? 'Não informado';
$cpf = $_POST['cpf'] ?? 'Não informado';
$dataNascimento = $_POST['dataNascimento'] ?? 'Não informado';
$idade = $_POST['idade'] ?? 'Não informado';
$telefone = $_POST['telefone'] ?? 'Não informado';
$email = $_POST['email'] ?? 'Não informado';
$cidade = $_POST['cidade'] ?? 'Não informado';
$bairro = $_POST['bairro'] ?? 'Não informado';
$socialMedia = $_POST['socialMedia'] ?? 'Não informado';

$possuiCnh = $_POST['possuiCnh'] ?? 'Não informado';
$cnhCategoriaRaw = $_POST['cnhCategoria'] ?? '[]';
$cnhCategoria = implode(', ', json_decode($cnhCategoriaRaw, true) ?: []);

$veiculoProprio = $_POST['veiculoProprio'] ?? 'Não informado';
$fuma = $_POST['fuma'] ?? 'Não informado';
$disponibilidadeViajar = $_POST['disponibilidadeViajar'] ?? 'Não informado';
$disponibilidadeSabados = $_POST['disponibilidadeSabados'] ?? 'Não informado';
$limitacaoFisica = $_POST['limitacaoFisica'] ?? 'Não informado';
$limitacaoFisicaQual = $_POST['limitacaoFisicaQual'] ?? 'Não informado';

$anosConstrucaoCivil = $_POST['anosConstrucaoCivil'] ?? 'Não informado';
$anosPintura = $_POST['anosPintura'] ?? 'Não informado';
$funcaoPrincipal = $_POST['funcaoPrincipal'] ?? 'Não informado';
$pretensaoSalarial = $_POST['pretensaoSalarial'] ?? 'Não informado';
$empresasRamo = $_POST['empresasRamo'] ?? 'Não informado';
$ultimaEmpresa = $_POST['ultimaEmpresa'] ?? 'Não informado';
$tempoUltimaEmpresa = $_POST['tempoUltimaEmpresa'] ?? 'Não informado';
$estaEmpregado = $_POST['estaEmpregado'] ?? 'Não informado';
$motivoSaida = $_POST['motivoSaida'] ?? 'Não informado';

$servicosExecutarRaw = $_POST['servicosExecutar'] ?? '[]';
$servicosExecutar = json_decode($servicosExecutarRaw, true) ?: [];

$experienciaAltura = $_POST['experienciaAltura'] ?? 'Não informado';
$certificadoNr35 = $_POST['certificadoNr35'] ?? 'Não informado';
$experienciaEquipamentosRaw = $_POST['experienciaEquipamentos'] ?? '[]';
$experienciaEquipamentos = implode(', ', json_decode($experienciaEquipamentosRaw, true) ?: []);
$acidenteAltura = $_POST['acidenteAltura'] ?? 'Não informado';
$acidenteAlturaExplique = $_POST['acidenteAlturaExplique'] ?? 'Não informado';
$nivelSegurancaAltura = $_POST['nivelSegurancaAltura'] ?? '5';

$importanteEmpresa = $_POST['importanteEmpresa'] ?? 'Não informado';
$motivoDemissao = $_POST['motivoDemissao'] ?? 'Não informado';
$preferenciaTrabalho = $_POST['preferenciaTrabalho'] ?? 'Não informado';
$reacaoCorrecaoLider = $_POST['reacaoCorrecaoLider'] ?? 'Não informado';
$maiorAprendizado = $_POST['maiorAprendizado'] ?? 'Não informado';
$oQuePodeAgregar = $_POST['oQuePodeAgregar'] ?? 'Não informado';

$porqueTrabalharDaniel = $_POST['porqueTrabalharDaniel'] ?? 'Não informado';
$situacaoDificilObra = $_POST['situacaoDificilObra'] ?? 'Não informado';
$quandoComecar = $_POST['quandoComecar'] ?? 'Não informado';
$possuiIndicacao = $_POST['possuiIndicacao'] ?? 'Não informado';
$indicacaoQuem = $_POST['indicacaoQuem'] ?? 'Não informado';

// Build Services List HTML
$servicesHtml = '';
if (!empty($servicosExecutar)) {
    foreach ($servicosExecutar as $serv) {
        $servicesHtml .= '<li>' . htmlspecialchars($serv) . '</li>';
    }
} else {
    $servicesHtml = '<li>Nenhum serviço selecionado</li>';
}

$cnhBadge = $possuiCnh === 'Sim' ? '<span class="badge" style="background-color: #F14A29; color: #fff; font-size: 11px; font-weight: bold; padding: 2px 6px; border-radius: 4px;">Cat. ' . htmlspecialchars($cnhCategoria) . '</span>' : '';
$limitacaoDetail = $limitacaoFisica === 'Sim' ? '(' . htmlspecialchars($limitacaoFisicaQual) . ')' : '';
$acidenteDetail = $acidenteAltura === 'Sim' ? '(' . htmlspecialchars($acidenteAlturaExplique) . ')' : '';
$indicacaoDetail = $possuiIndicacao === 'Sim' ? '(' . htmlspecialchars($indicacaoQuem) . ')' : '';

$html = "
<!DOCTYPE html>
<html lang=\"pt-BR\">
<head>
  <meta charset=\"UTF-8\">
  <style>
    body { font-family: Arial, sans-serif; background-color: #F4F6F9; color: #333; margin: 0; padding: 0; }
    .container { max-width: 680px; margin: 40px auto; background: #fff; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid #E2E8F0; }
    .header { background-color: #0B1221; color: #fff; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 26px; font-weight: bold; }
    .header p { margin: 10px 0 0 0; color: #A0AEC0; font-size: 15px; }
    .accent-bar { height: 4px; background-color: #F14A29; }
    .content { padding: 40px 30px; }
    .section-card { background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px; margin-bottom: 24px; }
    .section-title { font-size: 17px; font-weight: bold; color: #0B1221; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #E2E8F0; padding-bottom: 8px; }
    .field-label { font-size: 11px; font-weight: bold; color: #718096; text-transform: uppercase; margin-bottom: 4px; }
    .field-value { font-size: 14px; color: #1A202C; font-weight: 500; margin-bottom: 12px; }
    .badge { display: inline-block; background-color: #F14A29; color: #fff; font-size: 11px; font-weight: bold; padding: 2px 6px; border-radius: 4px; }
    .list-items { margin: 0; padding-left: 20px; font-size: 14px; color: #2D3748; }
    .list-items li { margin-bottom: 6px; }
    .footer { background-color: #F8FAFC; padding: 20px; text-align: center; font-size: 12px; color: #718096; border-top: 1px solid #E2E8F0; }
    .footer a { color: #F14A29; text-decoration: none; }
  </style>
</head>
<body>
  <div class=\"container\">
    <div class=\"header\">
      <h1>Daniel & Daiane Pinturas</h1>
      <p>Novo Currículo Recebido pelo Trabalhe Conosco</p>
    </div>
    <div class=\"accent-bar\"></div>
    
    <div class=\"content\">
      
      <!-- ETAPA 1 -->
      <div class=\"section-card\">
        <h3 class=\"section-title\">👤 Etapa 1 – Dados Básicos</h3>
        <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Nome Completo</div>
              <div class=\"field-value\">" . htmlspecialchars($nome) . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">CPF</div>
              <div class=\"field-value\">" . htmlspecialchars($cpf) . "</div>
            </td>
          </tr>
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Data de Nascimento</div>
              <div class=\"field-value\">" . htmlspecialchars($dataNascimento) . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Idade</div>
              <div class=\"field-value\">" . htmlspecialchars($idade) . " anos</div>
            </td>
          </tr>
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Telefone / WhatsApp</div>
              <div class=\"field-value\">" . htmlspecialchars($telefone) . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">E-mail</div>
              <div class=\"field-value\">" . htmlspecialchars($email) . "</div>
            </td>
          </tr>
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Cidade / Bairro</div>
              <div class=\"field-value\">" . htmlspecialchars($cidade) . " - " . htmlspecialchars($bairro) . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Redes Sociais</div>
              <div class=\"field-value\">" . htmlspecialchars($socialMedia) . "</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- ETAPA 2 -->
      <div class=\"section-card\">
        <h3 class=\"section-title\">📋 Etapa 2 – Informações Pessoais</h3>
        <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Possui CNH?</div>
              <div class=\"field-value\">" . htmlspecialchars($possuiCnh) . " " . $cnhBadge . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Veículo Próprio</div>
              <div class=\"field-value\">" . htmlspecialchars($veiculoProprio) . "</div>
            </td>
          </tr>
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Fuma?</div>
              <div class=\"field-value\">" . htmlspecialchars($fuma) . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Disponibilidade para Viajar?</div>
              <div class=\"field-value\">" . htmlspecialchars($disponibilidadeViajar) . "</div>
            </td>
          </tr>
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Trabalha aos Sábados?</div>
              <div class=\"field-value\">" . htmlspecialchars($disponibilidadeSabados) . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Limitação Física em Altura?</div>
              <div class=\"field-value\">" . htmlspecialchars($limitacaoFisica) . " " . $limitacaoDetail . "</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- ETAPA 3 -->
      <div class=\"section-card\">
        <h3 class=\"section-title\">💼 Etapa 3 – Experiência Profissional</h3>
        <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Anos na Construção Civil</div>
              <div class=\"field-value\">" . htmlspecialchars($anosConstrucaoCivil) . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Anos Trabalhando com Pintura</div>
              <div class=\"field-value\">" . htmlspecialchars($anosPintura) . "</div>
            </td>
          </tr>
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Função Principal</div>
              <div class=\"field-value\">" . htmlspecialchars($funcaoPrincipal) . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Pretensão Salarial</div>
              <div class=\"field-value\">" . htmlspecialchars($pretensaoSalarial) . "</div>
            </td>
          </tr>
          <tr>
            <td width=\"100%\" colspan=\"2\" valign=\"top\">
              <div class=\"field-label\">Empresas do Ramo em que já Trabalhou</div>
              <div class=\"field-value\" style=\"font-style: italic;\">" . htmlspecialchars($empresasRamo) . "</div>
            </td>
          </tr>
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Última Empresa</div>
              <div class=\"field-value\">" . htmlspecialchars($ultimaEmpresa) . " (" . htmlspecialchars($tempoUltimaEmpresa) . ")</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Atualmente Empregado?</div>
              <div class=\"field-value\">" . htmlspecialchars($estaEmpregado) . "</div>
            </td>
          </tr>
          <tr>
            <td width=\"100%\" colspan=\"2\" valign=\"top\">
              <div class=\"field-label\">Por que saiu da última empresa?</div>
              <div class=\"field-value\">" . htmlspecialchars($motivoSaida) . "</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- ETAPA 4 -->
      <div class=\"section-card\">
        <h3 class=\"section-title\">🔧 Etapa 4 – Serviços que Sabe Executar</h3>
        <ul class=\"list-items\">
          " . $servicesHtml . "
        </ul>
      </div>

      <!-- ETAPA 5 -->
      <div class=\"section-card\">
        <h3 class=\"section-title\">🪜 Etapa 5 – Trabalho em Altura</h3>
        <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Tem experiência com Altura?</div>
              <div class=\"field-value\">" . htmlspecialchars($experienciaAltura) . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Possui Certificado NR-35?</div>
              <div class=\"field-value\">" . htmlspecialchars($certificadoNr35) . "</div>
            </td>
          </tr>
          <tr>
            <td width=\"100%\" colspan=\"2\" valign=\"top\">
              <div class=\"field-label\">Equipamentos com Experiência</div>
              <div class=\"field-value\">" . htmlspecialchars($experienciaEquipamentos) . "</div>
            </td>
          </tr>
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Já sofreu acidente em altura?</div>
              <div class=\"field-value\">" . htmlspecialchars($acidenteAltura) . " " . $acidenteDetail . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Confiança para Trabalho em Altura</div>
              <div class=\"field-value\" style=\"font-weight: bold; color: #F14A29; font-size: 16px;\">" . htmlspecialchars($nivelSegurancaAltura) . " / 10</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- ETAPA 6 -->
      <div class=\"section-card\">
        <h3 class=\"section-title\">🧠 Etapa 6 – Perfil Comportamental</h3>
        <div style=\"margin-bottom: 12px;\">
          <div class=\"field-label\">O que é mais importante em uma empresa?</div>
          <div style=\"background: #fff; padding: 10px; border-radius: 6px; border: 1px solid #E2E8F0;\">" . htmlspecialchars($importanteEmpresa) . "</div>
        </div>
        <div style=\"margin-bottom: 12px;\">
          <div class=\"field-label\">O que faz você pedir demissão?</div>
          <div style=\"background: #fff; padding: 10px; border-radius: 6px; border: 1px solid #E2E8F0;\">" . htmlspecialchars($motivoDemissao) . "</div>
        </div>
        <div style=\"margin-bottom: 12px;\">
          <div class=\"field-label\">Preferência de trabalho</div>
          <div><span class=\"badge\" style=\"background-color: #0B1221;\">" . htmlspecialchars($preferenciaTrabalho) . "</span></div>
        </div>
        <div style=\"margin-bottom: 12px;\">
          <div class=\"field-label\">Como reage quando recebe correção de um líder?</div>
          <div style=\"background: #fff; padding: 10px; border-radius: 6px; border: 1px solid #E2E8F0;\">" . htmlspecialchars($reacaoCorrecaoLider) . "</div>
        </div>
        <div style=\"margin-bottom: 12px;\">
          <div class=\"field-label\">Qual foi seu maior aprendizado profissional?</div>
          <div style=\"background: #fff; padding: 10px; border-radius: 6px; border: 1px solid #E2E8F0;\">" . htmlspecialchars($maiorAprendizado) . "</div>
        </div>
        <div>
          <div class=\"field-label\">O que acredita que pode agregar à nossa equipe?</div>
          <div style=\"background: #fff; padding: 10px; border-radius: 6px; border: 1px solid #E2E8F0;\">" . htmlspecialchars($oQuePodeAgregar) . "</div>
        </div>
      </div>

      <!-- ETAPA 7 -->
      <div class=\"section-card\">
        <h3 class=\"section-title\">🏁 Etapa 7 – Filtro Final</h3>
        <div style=\"margin-bottom: 12px;\">
          <div class=\"field-label\">Por que deseja trabalhar na Daniel & Daiane?</div>
          <div style=\"background: #fff; padding: 10px; border-radius: 6px; border: 1px solid #E2E8F0;\">" . htmlspecialchars($porqueTrabalharDaniel) . "</div>
        </div>
        <div style=\"margin-bottom: 12px;\">
          <div class=\"field-label\">Situação difícil em obra e como resolveu</div>
          <div style=\"background: #fff; padding: 10px; border-radius: 6px; border: 1px solid #E2E8F0;\">" . htmlspecialchars($situacaoDificilObra) . "</div>
        </div>
        <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">
          <tr>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Quando poderia começar?</div>
              <div class=\"field-value\">" . htmlspecialchars($quandoComecar) . "</div>
            </td>
            <td width=\"50%\" valign=\"top\">
              <div class=\"field-label\">Possui Indicação?</div>
              <div class=\"field-value\">" . htmlspecialchars($possuiIndicacao) . " " . $indicacaoDetail . "</div>
            </td>
          </tr>
        </table>
      </div>

    </div>
    
    <div class=\"footer\">
      Este e-mail foi gerado automaticamente pelo portal de candidaturas da <br>
      <strong>Daniel & Daiane Pinturas e Restaurações</strong>
    </div>
  </div>
</body>
</html>
";

$to = "contato@danieledaianepinturas.com.br";
$subject = "Trabalhe Conosco - Currículo de " . $nome;

// Load file attachment details
$attachments = [];
if (isset($_FILES['videoApresentacao']) && $_FILES['videoApresentacao']['error'] == UPLOAD_ERR_OK) {
    $attachments[] = [
        'name' => $_FILES['videoApresentacao']['name'],
        'type' => $_FILES['videoApresentacao']['type'],
        'content' => file_get_contents($_FILES['videoApresentacao']['tmp_name'])
    ];
}

// Check SMTP configuration. If SMTP_HOST is set, send via SMTP socket. Otherwise fallback to mail()
if (!empty(SMTP_HOST)) {
    try {
        $host = SMTP_HOST;
        $port = SMTP_PORT;
        $user = SMTP_USER;
        $pass = SMTP_PASS;
        $secure = SMTP_SECURE;

        $socket = fsockopen(($secure === 'ssl' ? 'ssl://' : '') . $host, $port, $errno, $errstr, 15);
        if (!$socket) {
            throw new Exception("Erro ao conectar ao SMTP: $errstr ($errno)");
        }

        $read = function() use ($socket) {
            $data = '';
            while (strpos($data, "\r\n") === false || $data[3] === '-') {
                $line = fgets($socket, 515);
                if ($line === false) break;
                $data .= $line;
            }
            return $data;
        };

        $send = function($cmd) use ($socket, $read) {
            fputs($socket, $cmd . "\r\n");
            return $read();
        };

        $read(); // Read greeting
        $send("EHLO " . ($_SERVER['SERVER_NAME'] ?: 'localhost'));

        if ($secure === 'tls') {
            $send("STARTTLS");
            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new Exception("Falha ao iniciar TLS");
            }
            $send("EHLO " . ($_SERVER['SERVER_NAME'] ?: 'localhost'));
        }

        if ($user && $pass) {
            $send("AUTH LOGIN");
            $send(base64_encode($user));
            $send(base64_encode($pass));
        }

        $send("MAIL FROM:<$user>");
        $send("RCPT TO:<$to>");
        $send("DATA");

        // Construct headers and body
        $boundary = "==Multipart_Boundary_x" . md5(time()) . "x";
        
        $headers_dict = [
            "To" => $to,
            "From" => $user,
            "Reply-To" => $email,
            "Subject" => $subject
        ];

        $headers = [];
        foreach ($headers_dict as $k => $v) {
            $headers[] = "$k: $v";
        }
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-Type: multipart/mixed; boundary=\"$boundary\"";

        $email_content = implode("\r\n", $headers) . "\r\n\r\n";
        $email_content .= "--$boundary\r\n";
        $email_content .= "Content-Type: text/html; charset=\"UTF-8\"\r\n";
        $email_content .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $email_content .= $html . "\r\n\r\n";

        foreach ($attachments as $att) {
            $email_content .= "--$boundary\r\n";
            $email_content .= "Content-Type: " . $att['type'] . "; name=\"" . $att['name'] . "\"\r\n";
            $email_content .= "Content-Disposition: attachment; filename=\"" . $att['name'] . "\"\r\n";
            $email_content .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $email_content .= chunk_split(base64_encode($att['content'])) . "\r\n\r\n";
        }
        $email_content .= "--$boundary--";
        $email_content = preg_replace('/^\./m', '..', $email_content);
        
        $send($email_content . "\r\n.");
        $send("QUIT");
        fclose($socket);

        echo json_encode(["success" => true]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => "Falha no SMTP: " . $e->getMessage()]);
    }
} else {
    // Fallback to local mail() function
    $semi_rand = md5(time()); 
    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 

    $headers = "MIME-Version: 1.0\n" . 
               "From: " . $to . "\n" . 
               "Reply-To: " . $email . "\n" . 
               "Content-Type: multipart/mixed;\n" . 
               " boundary=\"{$mime_boundary}\""; 

    $message = "--{$mime_boundary}\n" . 
               "Content-Type: text/html; charset=\"UTF-8\"\n" . 
               "Content-Transfer-Encoding: 7bit\n\n" . 
               $html . "\n\n"; 

    foreach ($attachments as $att) {
        $encoded_content = chunk_split(base64_encode($att['content']));
        $message .= "--{$mime_boundary}\n";
        $message .= "Content-Type: application/octet-stream; name=\"".$att['name']."\"\n";
        $message .= "Content-Description: ".$att['name']."\n";
        $message .= "Content-Disposition: attachment;\n" . " filename=\"".$att['name']."\"; size=".strlen($att['content']).";\n";
        $message .= "Content-Transfer-Encoding: base64\n\n" . $encoded_content . "\n\n";
    }

    $message .= "--{$mime_boundary}--";

    if (@mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Falha ao enviar e-mail. Verifique a configuração de e-mail do seu servidor local ou preencha as configurações de SMTP no topo de send-email.php."]);
    }
}
?>
