const BIOMETRIC_FACE_HTML = `
<img src="https://mypass-v2.vercel.app/assets/images/hero-face.png"
     width="144" 
     height="144"
     alt="MyPass Biometric Face Scan"
     style="display:block; margin:0 auto; border-radius:50%;" />
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto; text-align: center;">
  <tr><td height="13" style="font-size:13px; line-height:13px;">&nbsp;</td></tr>
  <tr>
    <td align="center">
      <span style="display:inline-block; 
        font-family:'Inter',sans-serif;
        font-size:10px; font-weight:600;
        text-transform:uppercase; letter-spacing:2px;
        color:#00d4ff; background-color:#00d4ff10;
        border:1px solid #00d4ff30;
        border-radius:20px; padding:4px 12px;">
        LIVENESS VERIFIED &middot; 99.99%
      </span>
    </td>
  </tr>
</table>
`;

const BASE_EMAIL_TEMPLATE = (
  accentColor: string,
  accentColorDark: string,
  title: string,
  subtitle: string,
  subtitleColor: string,
  bodyContent: string,
  ctaText: string,
  ctaLink: string
) => `
<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${title}</title>
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #05050a; }
    a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
    
    /* Font setup */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    
    .font-sans {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
  </style>
</head>
<body style="margin: 0 !important; padding: 0 !important; background-color: #05050a; -webkit-font-smoothing: antialiased;">

  <!-- Outer wrapper -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #05050a;">
    <tr>
      <td align="center" style="padding: 55px 21px;">
        
        <!-- Max width 610px Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 610px; border-radius: 21px; overflow: hidden; border: 1px solid #1e293b; background-color: #0a0a14;">
          
          <!-- BLOCO 1 - HEADER -->
          <tr>
            <td align="center" style="height: 89px; background: #0a0a14; background: linear-gradient(135deg, #0a0a14 0%, #0f0f1f 100%); border-bottom: 1px solid #1e293b;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" class="font-sans" style="padding: 21px 0;">
                    <div style="font-size: 22px; font-weight: 700; color: #00d4ff; margin: 0; line-height: 1;">MyPass</div>
                    <div style="font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 3px; margin-top: 8px;">Identidade Digital Soberana</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BLOCO 2 - HERO -->
          <tr>
            <td align="center" style="padding: 55px; background: #0a0a14; background: linear-gradient(180deg, #0a0a14 0%, #050510 100%);">
              ${BIOMETRIC_FACE_HTML}
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr><td height="34" style="font-size:34px; line-height:34px;">&nbsp;</td></tr>
                <tr>
                  <td align="center" class="font-sans">
                    <h1 style="margin: 0 0 13px 0; font-size: 28px; font-weight: 700; color: #f8fafc; line-height: 1.2;">${title}</h1>
                    <h2 style="margin: 0; font-size: 16px; font-weight: 400; color: ${subtitleColor}; line-height: 1.4;">${subtitle}</h2>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BLOCO 3 - CORPO -->
          <tr>
            <td align="left" style="padding: 34px 55px; background-color: #0f0f1f; border-left: 3px solid ${accentColor};">
              <div class="font-sans" style="font-size: 15px; font-weight: 400; color: #94a3b8; line-height: 1.6;">
                ${bodyContent}
              </div>
            </td>
          </tr>

          <!-- BLOCO 4 - CTA BUTTON -->
          <tr>
            <td align="center" style="padding: 0 55px 34px 55px; background-color: #0f0f1f; border-left: 3px solid ${accentColor};">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" bgcolor="${accentColor}" style="border-radius: 13px; background: ${accentColor}; background: linear-gradient(135deg, ${accentColor}, ${accentColorDark});">
                    <a href="${ctaLink}" target="_blank" class="font-sans" style="display: inline-block; padding: 18px 0; width: 233px; font-size: 15px; font-weight: 700; color: #05050a; text-decoration: none; text-align: center; border-radius: 13px;">
                      ${ctaText}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BLOCO 5 - BADGES DE CERTIFICAÇÃO -->
          <tr>
            <td align="center" style="padding: 21px; background-color: #050510; border-top: 1px solid #1e293b;">
              <div class="font-sans" style="font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; color: #94a3b8;">
                FACETEC CERTIFIED &middot; PRAETORIAN L4 &amp; L5 &middot; LGPD COMPLIANT
              </div>
            </td>
          </tr>

          <!-- BLOCO 6 - FOOTER -->
          <tr>
            <td align="center" style="padding: 21px; background-color: #05050a; border-top: 1px solid #1e293b;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" class="font-sans" style="padding-bottom: 13px;">
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #475569; line-height: 1.5;">
                      Infraestrutura de Identidade Soberana<br/>para o mercado brasileiro.
                    </p>
                    <p style="margin: 0; font-size: 12px;">
                      <a href="https://mypass-v2.vercel.app" style="color: #00d4ff; text-decoration: none;">Site</a>
                      <span style="color: #475569; margin: 0 4px;">&middot;</span>
                      <a href="https://mypass-v2.vercel.app/#developer-portal" style="color: #00d4ff; text-decoration: none;">Documentação</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" class="font-sans" style="padding-top: 13px; border-top: 1px solid #1e293b;">
                    <p style="margin: 0; font-size: 11px; color: #334155; line-height: 1.5;">
                      Este e-mail e seus anexos são confidenciais.<br/>
                      Seus dados estão protegidos conforme a LGPD.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export function getDeveloperConfirmationEmail(data: { nome: string }) {
  const bodyContent = `
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="padding-bottom: 21px;">
          Nossa equipe está configurando o seu ambiente. Em até 1 dia útil, você receberá as credenciais de acesso oficiais.
        </td>
      </tr>
      <tr>
        <td style="padding-bottom: 34px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <!-- Item 1 -->
            <tr>
              <td width="34" valign="top" style="padding-bottom: 13px;">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="21" height="21" align="center" valign="middle" style="background-color: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px;">
                      <span style="color:#10b981; font-weight:bold; font-size:14px; line-height:1;">&#10003;</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="top" style="padding-bottom: 13px; font-size: 15px; color: #94a3b8; line-height: 21px;">
                API Keys de desenvolvimento
              </td>
            </tr>
            <!-- Item 2 -->
            <tr>
              <td width="34" valign="top" style="padding-bottom: 13px;">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="21" height="21" align="center" valign="middle" style="background-color: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px;">
                      <span style="color:#10b981; font-weight:bold; font-size:14px; line-height:1;">&#10003;</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="top" style="padding-bottom: 13px; font-size: 15px; color: #94a3b8; line-height: 21px;">
                Documentação técnica completa
              </td>
            </tr>
            <!-- Item 3 -->
            <tr>
              <td width="34" valign="top" style="padding-bottom: 13px;">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="21" height="21" align="center" valign="middle" style="background-color: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px;">
                      <span style="color:#10b981; font-weight:bold; font-size:14px; line-height:1;">&#10003;</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="top" style="padding-bottom: 13px; font-size: 15px; color: #94a3b8; line-height: 21px;">
                Dados sintéticos para testes
              </td>
            </tr>
            <!-- Item 4 -->
            <tr>
              <td width="34" valign="top">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="21" height="21" align="center" valign="middle" style="background-color: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px;">
                      <span style="color:#10b981; font-weight:bold; font-size:14px; line-height:1;">&#10003;</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="top" style="font-size: 15px; color: #94a3b8; line-height: 21px;">
                Suporte via e-mail prioritário
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0f0f1f; border: 1px solid #1e293b; border-radius: 13px;">
            <tr>
              <td align="center" style="padding: 21px; font-size: 13px; color: #64748b; line-height: 1.5;">
                Dúvidas? Responda este e-mail ou acesse <a href="https://mypass-v2.vercel.app" style="color: #64748b; text-decoration: underline;">mypass.com.br</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;

  return BASE_EMAIL_TEMPLATE(
    '#00d4ff', // accent (ciano)
    '#0099cc', // accent dark
    'Acesso ao Sandbox Solicitado',
    `Olá, ${data.nome}. Recebemos seu cadastro.`,
    '#00d4ff',
    bodyContent,
    'Explorar Documentação',
    'https://mypass-v2.vercel.app/#developer-portal'
  );
}

export function getDeveloperInternalAlertEmail(data: {
  nome: string;
  email: string;
  empresa: string;
  github: string | null;
  segmento: string;
  tipos_integracao: string[];
  created_at: string;
}) {
  const bodyContent = `
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0f0f1f; border: 1px solid #1e293b; border-radius: 13px;">
      <tr>
        <td width="35%" valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Nome
        </td>
        <td width="65%" valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.nome}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          E-mail
        </td>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.email}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Empresa
        </td>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.empresa}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          GitHub
        </td>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.github || '-'}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Segmento
        </td>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.segmento}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Integrações
        </td>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.tipos_integracao.join(', ')}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Data/Hora
        </td>
        <td valign="top" style="padding: 13px 21px; font-size: 14px; color: #94a3b8;">
          ${new Date(data.created_at).toLocaleString('pt-BR')}
        </td>
      </tr>
    </table>
  `;

  return BASE_EMAIL_TEMPLATE(
    '#f59e0b', // accent (âmbar para alerta interno)
    '#d97706', // accent dark
    'Novo Dev Cadastrado',
    `${data.empresa} quer integrar a MyPass`,
    '#f59e0b',
    bodyContent,
    'Ver no Supabase',
    'https://supabase.com/dashboard'
  );
}

export function getEnterpriseConfirmationEmail(data: { nome: string; segmento: string }) {
  const bodyContent = `
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="padding-bottom: 21px;">
          Nossa equipe de especialistas analisará o perfil da sua operação e entrará em contato em até 24 horas úteis.
        </td>
      </tr>
      <tr>
        <td style="padding-bottom: 34px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <!-- Item 1 -->
            <tr>
              <td width="34" valign="top" style="padding-bottom: 13px;">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="21" height="21" align="center" valign="middle" style="background-color: rgba(124, 58, 237, 0.12); border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 8px;">
                      <span style="color:#7c3aed; font-weight:bold; font-size:14px; line-height:1;">&#10003;</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="top" style="padding-bottom: 13px; font-size: 15px; color: #94a3b8; line-height: 21px;">
                Apresentação personalizada para ${data.segmento}
              </td>
            </tr>
            <!-- Item 2 -->
            <tr>
              <td width="34" valign="top" style="padding-bottom: 13px;">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="21" height="21" align="center" valign="middle" style="background-color: rgba(124, 58, 237, 0.12); border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 8px;">
                      <span style="color:#7c3aed; font-weight:bold; font-size:14px; line-height:1;">&#10003;</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="top" style="padding-bottom: 13px; font-size: 15px; color: #94a3b8; line-height: 21px;">
                Demonstração ao vivo do Liveness 3D
              </td>
            </tr>
            <!-- Item 3 -->
            <tr>
              <td width="34" valign="top" style="padding-bottom: 13px;">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="21" height="21" align="center" valign="middle" style="background-color: rgba(124, 58, 237, 0.12); border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 8px;">
                      <span style="color:#7c3aed; font-weight:bold; font-size:14px; line-height:1;">&#10003;</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="top" style="padding-bottom: 13px; font-size: 15px; color: #94a3b8; line-height: 21px;">
                ROI estimado para o seu caso de uso
              </td>
            </tr>
            <!-- Item 4 -->
            <tr>
              <td width="34" valign="top">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="21" height="21" align="center" valign="middle" style="background-color: rgba(124, 58, 237, 0.12); border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 8px;">
                      <span style="color:#7c3aed; font-weight:bold; font-size:14px; line-height:1;">&#10003;</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="top" style="font-size: 15px; color: #94a3b8; line-height: 21px;">
                Alinhamento com PIX BACEN 2026 e LGPD
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0f0f1f; border: 1px solid #1e293b; border-radius: 13px;">
            <tr>
              <td align="center" style="padding: 21px; font-size: 13px; color: #64748b; line-height: 1.5;">
                Dúvidas urgentes? Responda este e-mail ou acesse <a href="https://mypass-v2.vercel.app" style="color: #64748b; text-decoration: underline;">mypass.com.br</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;

  return BASE_EMAIL_TEMPLATE(
    '#7c3aed', // accent (violeta premium)
    '#6d28d9', // accent dark
    'Solicitação de Demo recebida!',
    `Olá, ${data.nome}. Obrigado pelo interesse.`,
    '#7c3aed',
    bodyContent,
    'Explorar Casos de Uso',
    'https://mypass-v2.vercel.app/#casos-de-uso'
  );
}

export function getEnterpriseInternalAlertEmail(data: {
  nome: string;
  email: string;
  empresa: string;
  cargo: string;
  segmento: string;
  mensagem: string | null;
  created_at: string;
}) {
  const bodyContent = `
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0f0f1f; border: 1px solid #1e293b; border-radius: 13px;">
      <tr>
        <td width="35%" valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Nome
        </td>
        <td width="65%" valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.nome}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          E-mail
        </td>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.email}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Empresa
        </td>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.empresa}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Cargo
        </td>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.cargo}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Segmento
        </td>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.segmento}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Mensagem
        </td>
        <td valign="top" style="padding: 13px 21px; border-bottom: 1px solid #1e293b; font-size: 14px; color: #94a3b8;">
          ${data.mensagem || '-'}
        </td>
      </tr>
      <tr>
        <td valign="top" style="padding: 13px 21px; font-size: 13px; font-weight: 600; color: #f8fafc; text-transform: uppercase;">
          Data/Hora
        </td>
        <td valign="top" style="padding: 13px 21px; font-size: 14px; color: #94a3b8;">
          ${new Date(data.created_at).toLocaleString('pt-BR')}
        </td>
      </tr>
    </table>
  `;

  return BASE_EMAIL_TEMPLATE(
    '#10b981', // accent (esmeralda para lead qualificado)
    '#059669', // accent dark
    'Novo Lead Qualificado',
    `${data.cargo} de ${data.empresa} quer uma Demo`,
    '#10b981',
    bodyContent,
    'Responder Lead',
    `mailto:${data.email}`
  );
}
