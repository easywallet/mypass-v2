const BIOMETRIC_FACE_HTML = `
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto; text-align: center;">
  <tr>
    <td align="center">
      <div style="position: relative; width: 120px; height: 120px; margin: 0 auto;">
        <!-- Círculo Externo -->
        <div style="box-sizing: border-box; position: absolute; top: 0; left: 0; width: 120px; height: 120px; border: 2px solid rgba(0, 212, 255, 0.25); border-radius: 50%; box-shadow: 0 0 30px rgba(0, 212, 255, 0.12);"></div>
        
        <!-- Círculo Médio -->
        <div style="box-sizing: border-box; position: absolute; top: 15px; left: 15px; width: 90px; height: 90px; border: 1px solid rgba(0, 212, 255, 0.38); border-radius: 50%;"></div>
        
        <!-- Ícone Central SVG -->
        <div style="position: absolute; top: 36px; left: 36px; width: 48px; height: 48px;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7.5 9.5C7.5 8.11929 8.61929 7 10 7C11.3807 7 12.5 8.11929 12.5 9.5C12.5 10.8807 11.3807 12 10 12C8.61929 12 7.5 10.8807 7.5 9.5ZM16.5 9.5C16.5 10.8807 15.3807 12 14 12C12.6193 12 11.5 10.8807 11.5 9.5C11.5 8.11929 12.6193 7 14 7C15.3807 7 16.5 8.11929 16.5 9.5ZM6.53609 16.993C7.23469 15.2289 8.95551 14 11 14C11.0504 14 11.1005 14.001 11.1503 14.0029C11.666 14.3725 12.2982 14.5938 12.9785 14.5938C13.6823 14.5938 14.3351 14.3582 14.8604 13.9719C14.9067 13.9905 14.9531 14 15 14C17.0445 14 18.7653 15.2289 19.4639 16.993C18.1065 19.4294 15.311 21 12 21C8.689 21 5.89346 19.4294 4.53609 16.993H6.53609Z" fill="#00d4ff"/>
          </svg>
        </div>

        <!-- Scanning Corners -->
        <div style="position: absolute; top: 0; left: 0; width: 12px; height: 12px; border-top: 2px solid #00d4ff; border-left: 2px solid #00d4ff;"></div>
        <div style="position: absolute; top: 0; right: 0; width: 12px; height: 12px; border-top: 2px solid #00d4ff; border-right: 2px solid #00d4ff;"></div>
        <div style="position: absolute; bottom: 0; left: 0; width: 12px; height: 12px; border-bottom: 2px solid #00d4ff; border-left: 2px solid #00d4ff;"></div>
        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; border-bottom: 2px solid #00d4ff; border-right: 2px solid #00d4ff;"></div>
      </div>
      
      <div style="margin-top: 21px;">
        <span style="display: inline-block; font-family: 'Inter', -apple-system, sans-serif; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; color: #00d4ff; background-color: rgba(0, 212, 255, 0.06); border: 1px solid rgba(0, 212, 255, 0.19); border-radius: 20px; padding: 4px 12px;">
          LIVENESS VERIFIED &middot; 99.99%
        </span>
      </div>
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
            <td align="left" style="padding: 34px 55px; background-color: #0a0a14; border-left: 3px solid ${accentColor};">
              <div class="font-sans" style="font-size: 15px; font-weight: 400; color: #94a3b8; line-height: 1.6;">
                ${bodyContent}
              </div>
            </td>
          </tr>

          <!-- BLOCO 4 - CTA BUTTON -->
          <tr>
            <td align="center" style="padding: 0 55px 34px 55px; background-color: #0a0a14; border-left: 3px solid ${accentColor};">
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
    'https://gpmybyndpzpcumcoyvnq.supabase.co'
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
