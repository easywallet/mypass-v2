GUARDIAN CONTRACT — MYPASS v1.0
DATA: 21/03/2026

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
MAPA DE COMPONENTES — ESTADO VALIDADO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ROTAS EXISTENTES E APROVADAS:
/ ..................... Landing page principal (aprovada e no ar)
/sobre ................. Página institucional
/compliance ............ Página de certificações
/carreiras ............. Página de carreiras
/docs .................. Página pública de overview da API (APROVADA EM PRODUÇÃO)
/docs/api-reference .... Swagger UI embutido com tema dark e rota protegida
/legal/politica-privacidade
/legal/privacidade-resumida
/legal/direitos-dos-titulares
/legal/seguranca-dados
/legal/cookies
/legal/termos-de-uso

COMPONENTES GLOBAIS:
src/components/Navbar.tsx ...... Navbar extraída (componente dedicado)
src/components/Footer.tsx ...... Footer extraído (componente dedicado)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENTES CRÍTICOS — NÃO ALTERAR SEM APROVAÇÃO EXPLÍCITA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Navbar: links COMO FUNCIONA (#jornada) · CASOS DE USO (#casos-de-uso) · DESENVOLVEDORES (#developer-portal) · CERTIFICAÇÕES (#compliance) · DOCS (/docs) · CTA PORTAL

Hero headline: "Seu Rosto. Seu Token. Seu Controle." — IMUTÁVEL
Badge hero: "IDENTIDADE DIGITAL SOBERANA" — IMUTÁVEL

Seção Compliance — 4 certificados EXATOS:
  Praetorian Level 4 · Praetorian Pentest · iBeta Level 2 · iBeta Level 1
  NÃO adicionar, remover ou renomear.

Footer coluna LEGAL/COMPLIANCE: 6 links para rotas /legal/* — NÃO regredir para href="#"
Footer coluna CERTIFICAÇÕES: 4 itens com onClick abrindo modais — NÃO converter para texto puro
Copyright: "© 2026 MyPass. Todos os direitos reservados." — EXATAMENTE ASSIM
Texto LGPD no rodapé: NUNCA substituir "LGPD" por "GDPR"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FORMULÁRIOS — CAMPOS OBRIGATÓRIOS IMUTÁVEIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Aba ENTERPRISE B2B:
  Nome completo · E-mail corporativo · Empresa
  CARGO (dropdown): CEO, CTO, CISO, Head de Produto, Diretor, Outro
  SEGMENTO (dropdown): Fintech, Saúde, Eventos, Varejo, Educação, GovTech, Outro
  Mensagem
  Botão: "SOLICITAR DEMO ENTERPRISE" → POST /api/enterprise-contact → Supabase + SMTP Hostinger

Aba DEVELOPERS:
  Nome completo · E-mail corporativo · Empresa · GitHub username (opcional)
  SEGMENTO (dropdown): Fintech, Saúde, Eventos, Varejo, Educação, GovTech, Outro
  TIPO DE INTEGRAÇÃO (checkboxes): KYC, Pagamento Facial, Controle de Acesso, Onboarding
  Texto: "Acesso aprovado em até 1 dia útil. Sem cartão de crédito."
  Botão: "SOLICITAR ACESSO AO SANDBOX" → POST /api/developer-signup → Supabase + SMTP Hostinger

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BANCO DE DADOS SUPABASE — TABELAS EXISTENTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tabela: developer_signups
  Colunas: id, nome, email, empresa, github, segmento, tipos_integracao, created_at
  PENDENTE (ADD COLUMN aprovado):
    sandbox_token TEXT
    approved_at TIMESTAMP WITH TIME ZONE

Tabela: enterprise_leads
  Leads do formulário B2B Enterprise

⚠️ NUNCA executar DROP TABLE, DELETE sem WHERE, ou ALTER COLUMN sem SQL mostrado e aprovado previamente.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFRAESTRUTURA DE E-MAIL — SMTP HOSTINGER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Host: smtp.hostinger.com | Porta: 465 | Segurança: SSL/TLS
Contas: noreply@mypass.com.br (confirmações ao usuário)
        sandbox@mypass.com.br (alertas internos de novos leads)

Variáveis de ambiente Vercel configuradas:
  SMTP_HOST · SMTP_PORT · SMTP_SECURE
  SMTP_USER_NOREPLY · SMTP_PASS_NOREPLY
  SMTP_USER_SANDBOX · SMTP_PASS_SANDBOX
  NOTIFY_EMAIL

⚠️ NUNCA hardcodar credenciais. Sempre usar process.env.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VARIÁVEIS DE AMBIENTE VERCEL EXISTENTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
(+ todas as SMTP vars acima)

⚠️ NUNCA remover ou renomear variáveis existentes.
Novas variáveis devem ser documentadas e listadas na entrega.

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

Os itens abaixo NÃO podem ser tocados sem o texto "AUTORIZO ALTERAÇÃO EM [nome]":
  middleware.ts
  app/layout.tsx
  Qualquer arquivo dentro de /legal
  Qualquer API route existente (apenas adição de novas é permitida)
  Schema do Supabase (apenas ADD COLUMN sem aprovação)
  Configurações de SMTP


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ATENCAO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Salve esse texto como GUARDIAN_CONTRACT_MYPASS_v1.0.md no repositório local e online
