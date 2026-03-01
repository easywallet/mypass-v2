const BASE_EMAIL_TEMPLATE = (heroIcon: string, title: string, subtitle: string, bodyContent: string, ctaText: string, ctaLink: string) => `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0a0a0f;
      color: #ffffff;
      font-family: 'Inter', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .email-wrapper {
      width: 100%;
      background-color: #0a0a0f;
      padding: 40px 20px;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0f1117;
      border: 1px solid #1e293b;
      border-radius: 12px;
      overflow: hidden;
    }
    .header {
      text-align: center;
      padding: 30px;
      border-bottom: 1px solid #1e293b;
    }
    .header h2 {
      margin: 0;
      color: #00d4ff;
      font-size: 24px;
      letter-spacing: 1px;
    }
    .header p {
      margin: 5px 0 0;
      color: #94a3b8;
      font-size: 14px;
    }
    .hero {
      text-align: center;
      padding: 40px 30px 20px;
    }
    .hero-icon {
      font-size: 48px;
      margin-bottom: 16px;
      line-height: 1;
    }
    .hero h1 {
      margin: 0 0 10px;
      color: #ffffff;
      font-size: 28px;
      font-weight: 700;
    }
    .hero p {
      margin: 0;
      color: #00d4ff;
      font-size: 18px;
      font-weight: 500;
    }
    .body-content {
      padding: 20px 40px;
      color: #94a3b8;
      font-size: 16px;
      line-height: 1.6;
    }
    .cta-container {
      text-align: center;
      padding: 30px;
    }
    .cta-button {
      display: inline-block;
      background-color: #00d4ff;
      color: #0f1117 !important;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      transition: background-color 0.2s;
    }
    .badges {
      text-align: center;
      padding: 20px;
      border-top: 1px solid #1e293b;
      border-bottom: 1px solid #1e293b;
      color: #7c3aed;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .footer {
      text-align: center;
      padding: 30px;
      color: #94a3b8;
      font-size: 12px;
      line-height: 1.5;
    }
    .footer a {
      color: #00d4ff;
      text-decoration: none;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    .data-table th, .data-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #1e293b;
    }
    .data-table th {
      color: #ffffff;
      font-weight: 600;
      width: 35%;
    }
    .data-table td {
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      
      <!-- HEADER -->
      <div class="header">
        <h2>MyPass</h2>
        <p>Identidade Digital Soberana</p>
      </div>

      <!-- HERO -->
      <div class="hero">
        <div class="hero-icon">${heroIcon}</div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>

      <!-- BODY -->
      <div class="body-content">
        ${bodyContent}
      </div>

      <!-- CTA -->
      <div class="cta-container">
        <a href="${ctaLink}" class="cta-button">${ctaText}</a>
      </div>

      <!-- BADGES -->
      <div class="badges">
        FACETEC &middot; PRAETORIAN L4 &middot; LGPD
      </div>

      <!-- FOOTER -->
      <div class="footer">
        <p>Infraestrutura de Identidade Soberana para o mercado brasileiro.</p>
        <p>
          <a href="https://mypass-v2.vercel.app">Site</a> &middot; 
          <a href="https://mypass-v2.vercel.app/#developer-portal">Documentação</a>
        </p>
        <p style="margin-top: 15px; font-size: 10px; opacity: 0.7;">
          Este e-mail e seus anexos são confidenciais. <br/>
          Aviso LGPD: Seus dados estão protegidos conforme a Lei Geral de Proteção de Dados.
        </p>
      </div>

    </div>
  </div>
</body>
</html>
`;

export function getDeveloperConfirmationEmail(data: { nome: string }) {
    const bodyContent = `
    <p>Em até 1 dia útil, você receberá as credenciais de acesso ao ambiente de homologação da MyPass.</p>
    <p>Seu ambiente incluirá:</p>
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 8px;"><span style="color: #10b981; margin-right: 8px;">✅</span> API Keys de desenvolvimento</li>
      <li style="margin-bottom: 8px;"><span style="color: #10b981; margin-right: 8px;">✅</span> Documentação técnica completa</li>
      <li style="margin-bottom: 8px;"><span style="color: #10b981; margin-right: 8px;">✅</span> Dados sintéticos para testes</li>
      <li style="margin-bottom: 8px;"><span style="color: #10b981; margin-right: 8px;">✅</span> Suporte via e-mail prioritário</li>
    </ul>
    <p style="margin-top: 30px; font-size: 14px; text-align: center;">
      Dúvidas? Responda este e-mail ou acesse <a href="https://mypass-v2.vercel.app" style="color: #00d4ff; text-decoration: none;">mypass-v2.vercel.app</a>
    </p>
  `;

    return BASE_EMAIL_TEMPLATE(
        '🚀',
        'Seu acesso ao Sandbox foi solicitado!',
        `Olá, ${data.nome}. Recebemos seu cadastro.`,
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
    <table class="data-table">
      <tr><th>Nome</th><td>${data.nome}</td></tr>
      <tr><th>E-mail</th><td>${data.email}</td></tr>
      <tr><th>Empresa</th><td>${data.empresa}</td></tr>
      <tr><th>GitHub</th><td>${data.github || '-'}</td></tr>
      <tr><th>Segmento</th><td>${data.segmento}</td></tr>
      <tr><th>Tipos Integração</th><td>${data.tipos_integracao.join(', ')}</td></tr>
      <tr><th>Data/Hora</th><td>${data.created_at}</td></tr>
    </table>
  `;

    return BASE_EMAIL_TEMPLATE(
        '🔔',
        'Novo Desenvolvedor Cadastrado',
        `${data.empresa} quer integrar a MyPass`,
        bodyContent,
        'Ver no Supabase',
        'https://supabase.com'
    );
}

export function getEnterpriseConfirmationEmail(data: { nome: string; segmento: string }) {
    const bodyContent = `
    <p>Nossa equipe de especialistas analisará seu perfil e entrará em contato em até 24 horas úteis.</p>
    <p>O que esperar da Demo:</p>
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 8px;"><span style="margin-right: 8px;">💎</span> Apresentação personalizada para ${data.segmento}</li>
      <li style="margin-bottom: 8px;"><span style="margin-right: 8px;">🔐</span> Demonstração ao vivo do Liveness 3D</li>
      <li style="margin-bottom: 8px;"><span style="margin-right: 8px;">📊</span> ROI estimado para o seu caso de uso</li>
      <li style="margin-bottom: 8px;"><span style="margin-right: 8px;">🇧🇷</span> Alinhamento com PIX BACEN 2026 e LGPD</li>
    </ul>
  `;

    return BASE_EMAIL_TEMPLATE(
        '💎',
        'Solicitação de Demo recebida!',
        `Olá, ${data.nome}. Obrigado pelo interesse.`,
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
    <table class="data-table">
      <tr><th>Nome</th><td>${data.nome}</td></tr>
      <tr><th>E-mail</th><td>${data.email}</td></tr>
      <tr><th>Empresa</th><td>${data.empresa}</td></tr>
      <tr><th>Cargo</th><td>${data.cargo}</td></tr>
      <tr><th>Segmento</th><td>${data.segmento}</td></tr>
      <tr><th>Mensagem</th><td>${data.mensagem || '-'}</td></tr>
      <tr><th>Data/Hora</th><td>${data.created_at}</td></tr>
    </table>
  `;

    return BASE_EMAIL_TEMPLATE(
        '🎯',
        'Novo Lead Enterprise Qualificado',
        `${data.cargo} de ${data.empresa} quer uma Demo`,
        bodyContent,
        'Responder Lead',
        `mailto:${data.email}`
    );
}
