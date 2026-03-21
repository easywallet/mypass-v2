GUARDIAN CONTRACT — MYPASS v1.1
DATA: 21/03/2026
CHANGELOG v1.1: Adicionadas rotas /guia, /admin/login, /admin/sandbox;
                DB atualizado (colunas confirmadas em produção, incluindo cnpj);
                Novas variáveis de ambiente (SERVICE_ROLE_KEY, ADMIN_*, JWT_SECRET);
                Novas API routes admin documentadas;
                Comportamento do middleware documentado;
                Footer "Powered by FaceTec" e link /guia adicionados;
                Fluxo de e-mail SMTP Hostinger validado em produção;
                Campo CNPJ e validação de e-mail corporativo no formulário Developer;
                Pipeline de sandbox token (admin panel) documentado.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IDENTIDADE DO PROJETO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Produto: MyPass — Infraestrutura de Identidade Soberana
Stack: Next.js App Router · TypeScript · Tailwind · shadcn/ui · Supabase · Vercel
Domínio produção: https://www.mypass.com.br
Swagger externo: https://facetec.easypay.com.br/docs (OAS 3.0, v1.0.0)
Repositório: mypass-v2 (Vercel)
Tema: dark premium | Primária: #00d4ff (ciano) | Background: #0a0f1e

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MAPA DE COMPONENTES — ESTADO VALIDADO EM PRODUÇÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ROTAS PÚBLICAS:
/ .......................... Landing page principal
/sobre ..................... Página institucional
/compliance ................ Página de certificações
/carreiras ................. Página de carreiras
/guia ...................... Guia de Integração (React estático, 12 seções) ← v1.1
/docs ...................... Overview público da API (9 endpoint cards)
/docs/api-reference ........ Swagger UI com tema dark — ROTA PROTEGIDA por middleware
/legal/politica-privacidade
/legal/privacidade-resumida
/legal/direitos-dos-titulares
/legal/seguranca-dados
/legal/cookies
/legal/termos-de-uso

ROTAS ADMIN (isoladas — sem Navbar/Footer público):
/admin/login ............... Login do painel admin (credenciais via env) ← v1.1
/admin/sandbox ............. Dashboard de aprovação de tokens sandbox ← v1.1

API ROUTES PÚBLICAS:
POST /api/enterprise-contact ... Leads B2B → Supabase + SMTP Hostinger
POST /api/developer-signup ..... Cadastro dev → Supabase + SMTP Hostinger

API ROUTES ADMIN (protegidas por cookie admin_session):
POST /api/admin/auth ........... Login admin → gera JWT cookie admin_session ← v1.1
POST /api/admin/logout ......... Invalida cookie admin_session ← v1.1
GET  /api/admin/leads .......... Lista developer_signups com filtros ← v1.1
POST /api/admin/approve-sandbox  Aprova lead → gera token mpx_ + envia e-mail ← v1.1
POST /api/admin/revoke-sandbox   Revoga token → limpa sandbox_token e approved_at ← v1.1

COMPONENTES GLOBAIS:
src/components/Navbar.tsx ...... Componente dedicado (extraído de page.tsx)
src/components/Footer.tsx ...... Componente dedicado (extraído de page.tsx)

ARQUIVOS DE INFRAESTRUTURA:
src/lib/mailer.ts .............. Dois transporters: noreplyTransporter + sandboxTransporter
src/lib/email-templates.ts ..... getDeveloperConfirmationEmail, getDeveloperInternalAlertEmail,
                                   getAdminApprovalEmail
src/middleware.ts .............. ZONA PROIBIDA (ver seção específica abaixo)
public/openapi.json ............ Spec OAS 3.0 da FaceTec API (cópia local, evita CORS)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MIDDLEWARE — COMPORTAMENTO ATUAL (ZONA PROIBIDA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⛔ NÃO ALTERAR middleware.ts SEM "AUTORIZO ALTERAÇÃO EM middleware.ts"

Proteção /docs/api-reference:
  1. Verifica cookie sb_token OU query param ?token=
  2. Valida token na tabela developer_signups usando SUPABASE_SERVICE_ROLE_KEY
     (obrigatório — ANON_KEY é bloqueada por RLS e retornaria 0 rows)
  3. Token válido + chegou via ?token= → redireciona para URL limpa (sem query),
     seta cookie sb_token (httpOnly, secure, sameSite=strict, maxAge=7 dias)
  4. Token inválido ou ausente → redireciona para /docs?access=required

Proteção /admin/*:
  1. Verifica cookie admin_session
  2. Valida JWT com jwtVerify (biblioteca: jose) usando JWT_SECRET
  3. Inválido ou ausente → redireciona para /admin/login
  4. /admin/login é excluída da proteção (rota pública do admin)

Matcher atual:
  /docs/api-reference/:path*
  /admin/:path* (exceto /admin/login)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENTES CRÍTICOS — NÃO ALTERAR SEM APROVAÇÃO EXPLÍCITA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Navbar: links COMO FUNCIONA (#jornada) · CASOS DE USO (#casos-de-uso)
        · DESENVOLVEDORES (#developer-portal) · CERTIFICAÇÕES (#compliance)
        · DOCS (/docs) · CTA PORTAL
        ⚠️ onClick handler with router.push('/#section') for rotas fora de /

Hero headline: "Seu Rosto. Seu Token. Seu Controle." — IMUTÁVEL
Badge hero: "IDENTIDADE DIGITAL SOBERANA" — IMUTÁVEL

Seção Compliance — 4 certificados EXATOS (não adicionar, remover ou renomear):
  Praetorian Level 4 · Praetorian Pentest · iBeta Level 2 · iBeta Level 1

Footer coluna LEGAL & COMPLIANCE: 6 links para rotas /legal/* — NÃO regredir para href="#"
Footer coluna CERTIFICAÇÕES: 4 itens com onClick abrindo modais — NÃO converter para texto puro
Footer coluna DESENVOLVEDORES: contém links para /docs, /guia, "Acessar Sandbox" ← v1.1
Footer badge: "Powered by FaceTec" com link externo https://facetec.com ← v1.1
Copyright: "© 2026 MyPass. Todos os direitos reservados." — EXATAMENTE ASSIM
Texto LGPD no rodapé: NUNCA substituir "LGPD" por "GDPR"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FORMULÁRIOS — CAMPOS OBRIGATÓRIOS IMUTÁVEIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Aba ENTERPRISE B2B:
  Nome completo · E-mail corporativo (com validação de domínio) · Empresa
  CARGO (dropdown): CEO, CTO, CISO, Head de Produto, Diretor, Outro
  SEGMENTO (dropdown): Fintech, Saúde, Eventos, Varejo, Educação, GovTech, Outro
  Mensagem
  Botão: "SOLICITAR DEMO ENTERPRISE" → POST /api/enterprise-contact

Aba DEVELOPERS:
  Nome completo · E-mail corporativo (com validação de domínio) · Empresa
  CNPJ DA EMPRESA (com máscara XX.XXX.XXXX/XXXX-XX e validação módulo 11) ← v1.1
  GitHub username (opcional)
  SEGMENTO (dropdown): Fintech, Saúde, Eventos, Varejo, Educação, GovTech, Outro
  TIPO DE INTEGRAÇÃO (checkboxes): KYC, Pagamento Facial, Controle de Acesso, Onboarding
  Texto: "Acesso aprovado em até 1 dia útil. Sem cartão de crédito."
  Botão: "SOLICITAR ACESSO AO SANDBOX" → POST /api/developer-signup

Validação de e-mail corporativo (AMBAS as abas):
  Domínios bloqueados: gmail.com, hotmail.com, outlook.com, yahoo.com, yahoo.com.br,
  hotmail.com.br, live.com, icloud.com, bol.com.br, uol.com.br, terra.com.br, ig.com.br
  Mensagem: "Use um e-mail corporativo. E-mails pessoais não são aceitos."
  Validação em: onBlur (UX) + handleSubmit (barreira real)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BANCO DE DADOS SUPABASE — ESTADO ATUAL CONFIRMADO EM PRODUÇÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tabela: developer_signups
  id                 UUID PRIMARY KEY
  nome               TEXT
  email              TEXT
  empresa            TEXT
  cnpj               TEXT                     ← adicionado v1.1
  github             TEXT (opcional)
  segmento           TEXT
  tipos_integracao   TEXT[]
  created_at         TIMESTAMP WITH TIME ZONE
  status             TEXT DEFAULT 'pending'   ← adicionado v1.1
  aprovado           BOOLEAN DEFAULT false    ← adicionado Sprint 1
  sandbox_token      TEXT                     ← adicionado Sprint 1 (prefixo mpx_)
  approved_at        TIMESTAMP WITH TIME ZONE ← adicionado Sprint 1
  approved_by        TEXT                     ← adicionado Sprint 1

Tabela: enterprise_leads
  Leads do formulário B2B Enterprise

Padrão de token sandbox: prefixo mpx_ + 32 chars hex
  Exemplo: mpx_820678d61cc140198fe282409a6cbc2d
  Gerado em: POST /api/admin/approve-sandbox
  Validado em: middleware.ts via SUPABASE_SERVICE_ROLE_KEY

Fluxo de aprovação:
  1. Dev preenche formulário → status='pending', aprovado=false
  2. Admin acessa /admin/sandbox → visualiza leads pendentes
  3. Admin clica "Aprovar" → gera token mpx_, seta aprovado=true, approved_at, approved_by
  4. E-mail enviado ao dev com o token via noreply@mypass.com.br
  5. Dev acessa /docs/api-reference?token=mpx_... → middleware valida → cookie sb_token setado

⚠️ NUNCA executar DROP TABLE, DELETE sem WHERE, ou ALTER COLUMN sem
   SQL mostrado e aprovado previamente.
⚠️ Colunas novas: sempre ADD COLUMN IF NOT EXISTS (idempotente).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFRAESTRUTURA DE E-MAIL — SMTP HOSTINGER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Host: smtp.hostinger.com | Porta: 465 | Segurança: SSL/TLS
Biblioteca: nodemailer (createTransport)

Transporters em src/lib/mailer.ts:
  noreplyTransporter  → noreply@mypass.com.br  (confirmações ao usuário)
  sandboxTransporter  → sandbox@mypass.com.br  (alertas internos)

Templates em src/lib/email-templates.ts:
  getDeveloperConfirmationEmail(nome, empresa)
    → Enviado ao dev após submit do formulário
    → Tom formal, sem emojis, compatível com Outlook
    → Checklist: CNPJ verificado · Perfil técnico analisado · Conformidade com Política de Uso
    → CTA: "Explorar Documentação" → https://www.mypass.com.br/docs

  getDeveloperInternalAlertEmail(nome, email, empresa, cnpj, github, segmento, tiposIntegracao, createdAt)
    → Enviado para NOTIFY_EMAIL após cada novo cadastro
    → Inclui tabela com todos os dados + seção "PRÓXIMOS PASSOS" com 4 itens:
      1. Verificar CNPJ na Receita Federal
      2. Verificar domínio do e-mail vs. site da empresa
      3. Se aprovado: acessar Supabase → preencher sandbox_token e approved_at
      4. Enviar token manualmente para o dev

  getAdminApprovalEmail(nome, token)
    → Enviado ao dev quando admin aprova via /admin/sandbox
    → Inclui o token mpx_ e instrução de acesso

⚠️ NUNCA hardcodar credenciais. Sempre usar process.env.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VARIÁVEIS DE AMBIENTE VERCEL — ESTADO COMPLETO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Supabase:
  NEXT_PUBLIC_SUPABASE_URL         (frontend + backend)
  NEXT_PUBLIC_SUPABASE_ANON_KEY    (frontend + backend)
  SUPABASE_SERVICE_ROLE_KEY        (middleware apenas — NUNCA expor com NEXT_PUBLIC_) ← v1.1

Admin:
  ADMIN_EMAIL      (credencial de login do painel /admin/login) ← v1.1
  ADMIN_PASSWORD   (credencial de login do painel /admin/login) ← v1.1
  JWT_SECRET       (assina e verifica cookie admin_session via jose) ← v1.1

SMTP:
  SMTP_HOST        (smtp.hostinger.com)
  SMTP_PORT        (465)
  SMTP_SECURE      (true)
  SMTP_USER_NOREPLY
  SMTP_PASS_NOREPLY
  SMTP_USER_SANDBOX
  SMTP_PASS_SANDBOX
  NOTIFY_EMAIL     (destinatário dos alertas internos)

⚠️ NUNCA remover ou renomear variáveis existentes.
⚠️ SUPABASE_SERVICE_ROLE_KEY nunca deve ter prefixo NEXT_PUBLIC_.
⚠️ Novas variáveis: documentar nome, onde obter, e formato antes do deploy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REGRAS DE OURO — OBRIGATÓRIAS EM TODO PROMPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REGRA 1 — PRESERVAÇÃO
Nunca altere, remova ou refatore componente não mencionado explicitamente na tarefa.
Se identificar melhoria, reporte ao usuário ANTES de implementar.

REGRA 2 — ENTREGA INCREMENTAL
Entregue uma seção por vez. Aguarde confirmação visual antes de avançar.
Nunca encadeie múltiplas mudanças estruturais em um único deploy.

REGRA 3 — SQL SEGURO
Mostrar o SQL completo ao usuário e aguardar aprovação antes de qualquer operação no Supabase.
Nunca executar migrações destrutivas sem confirmação.
Usar sempre ADD COLUMN IF NOT EXISTS (idempotente).

REGRA 4 — VARIÁVEIS DE AMBIENTE
Ao criar funcionalidade que exija nova variável, entregar lista completa:
  nome da variável · onde obter o valor · formato esperado.
Nunca prosseguir com build sem documentar isso.

REGRA 5 — IDENTIDADE VISUAL
Paleta imutável: background #0a0f1e · primário #00d4ff · texto #e2e8f0
Tipografia consistente com shadcn/ui tema dark em todas as páginas.
NUNCA introduzir fundo branco, tema claro ou cores fora da paleta sem aprovação.

REGRA 6 — CHECKLIST DE VALIDAÇÃO
Toda entrega deve incluir checklist explícito:
  [ ] Rota/componente entregue renderiza sem erros no Vercel
  [ ] Responsividade validada (mobile + desktop)
  [ ] Links e CTAs apontam para destinos corretos
  [ ] Nenhum componente existente foi alterado indevidamente
  [ ] Variáveis de ambiente documentadas (se aplicável)

REGRA 7 — ZONA PROIBIDA SEM APROVAÇÃO EXPLÍCITA
Os itens abaixo NÃO podem ser tocados sem o texto exato
"AUTORIZO ALTERAÇÃO EM [nome do arquivo]":
  middleware.ts
  app/layout.tsx
  Qualquer arquivo dentro de /legal/*
  Qualquer API route existente (apenas adição de novas é permitida)
  Schema do Supabase (apenas ADD COLUMN IF NOT EXISTS sem aprovação)
  src/lib/mailer.ts
  Configurações de SMTP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADMIN PANEL — ESPECIFICAÇÃO OPERACIONAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/admin/login:
  - Formulário simples: e-mail + senha
  - Credenciais validadas contra ADMIN_EMAIL e ADMIN_PASSWORD (env)
  - Sucesso: gera JWT assinado com JWT_SECRET via jose, seta cookie admin_session
    (httpOnly, secure, sameSite=strict, maxAge=8h)
  - Layout isolado: sem Navbar/Footer público

/admin/sandbox:
  - KPI cards: Total de leads · Pendentes · Aprovados · Revogados
  - Tabela de leads com colunas: Nome, Empresa, CNPJ, Segmento, Status, Data, Ações
  - Ações por lead: Aprovar (gera token mpx_ + e-mail) · Copiar Token · Revogar
  - Token exibido truncado na lista (segurança)
  - Tabs: Todos · Pendentes · Aprovados
  - Layout isolado: sem Navbar/Footer público

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSTRUÇÃO DE USO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cole este documento INTEGRALMENTE no início de qualquer nova sessão com o
agente, ANTES de qualquer prompt de tarefa.

Em sessões longas (>15 trocas), cole novamente como reancoragem de contexto.

Situação                         → Ação
Início de nova sessão            → Colar Guardian Contract ANTES de qualquer prompt
Sessão longa (>15 trocas)        → Colar novamente como reancoragem
Agente entregou algo inesperado  → Colar Guardian Contract + descrever o desvio
Nova funcionalidade concluída    → Atualizar este documento (Mapa de Componentes + DB)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ATENÇÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Salve este arquivo como GUARDIAN_CONTRACT_MYPASS_v1.1.md
no repositório local e no repositório online (mypass-v2).
