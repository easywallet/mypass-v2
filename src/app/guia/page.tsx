"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ShieldCheck, 
  Code2, 
  Lock, 
  ArrowRight,
  Database,
  Cpu,
  HeartPulse,
  UserCheck,
  Activity,
  Zap,
  Layout,
  FileCode,
  Terminal,
  AlertCircle,
  HelpCircle,
  Smartphone,
  Globe,
  Settings,
  Trash2
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// --- Sub-components ---

const SectionBadge = ({ number }: { number: string }) => (
  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-black text-xs mr-4">
    {number}
  </span>
);

const HttpBadge = ({ method }: { method: 'GET' | 'POST' | 'DELETE' }) => {
  const styles = {
    GET: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    POST: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    DELETE: "bg-red-500/10 text-red-500 border-red-500/20"
  };
  return (
    <span className={`px-2 py-0.5 rounded border text-[10px] font-black uppercase tracking-wider ${styles[method]}`}>
      {method}
    </span>
  );
};

const CodeBlock = ({ code, language = 'javascript' }: { code: string, language?: string }) => (
  <div className="relative group my-6">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
    <pre className="relative bg-[#0d1117] p-6 rounded-xl border border-white/5 font-mono text-sm leading-relaxed overflow-x-auto">
      <code className="text-slate-300">
        {code}
      </code>
    </pre>
  </div>
);

const Callout = ({ type, children }: { type: 'info' | 'warning', children: React.ReactNode }) => {
  const styles = {
    info: "bg-cyan-500/5 border-cyan-500/20 text-cyan-400/90",
    warning: "bg-amber-500/5 border-amber-500/20 text-amber-500/90"
  };
  const icon = type === 'info' ? <Zap className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />;
  
  return (
    <div className={`p-4 rounded-xl border flex gap-4 my-6 items-start ${styles[type]}`}>
      {icon}
      <div className="text-sm leading-relaxed font-medium">
        {children}
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function GuiaPage() {
  const [activeSection, setActiveSection] = useState('introducao');

  const navItems = [
    { id: 'introducao', label: '1. Introdução' },
    { id: 'api-key', label: '2. Obter sua API Key' },
    { id: 'sdk', label: '3. Baixar o SDK' },
    { id: 'inicializar', label: '4. Inicializar o SDK' },
    { id: 'enrollment', label: '5. Cadastro Facial' },
    { id: 'verify', label: '6. Verificação' },
    { id: 'liveness', label: '7. Prova de Vida' },
    { id: 'users', label: '8. Consultar / Excluir' },
    { id: 'auth', label: '9. Autenticação' },
    { id: 'errors', label: '10. Códigos de Erro' },
    { id: 'sdk-flow', label: '11. Fluxo via SDK' },
    { id: 'base-url', label: '12. Base URL' },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1e] text-[#e2e8f0] selection:bg-cyan-500/30">
      <div className="fixed inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
      <Navbar />

      <div className="relative pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-12">
            <Link href="/" className="hover:text-white transition-colors">MyPass</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/docs" className="hover:text-white transition-colors">Documentação</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cyan-400">Guia de Integração</span>
          </nav>

          {/* Hero */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
                Guia de Integração
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight max-w-3xl">
              Guia de Integração <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                MyPass v1.0
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Autenticação biométrica 3D determinística. Integração documentada. Conformidade LGPD garantida.
            </p>
          </div>

          {/* Mobile Navigation Dropdown */}
          <div className="lg:hidden mb-12 sticky top-24 z-40">
            <div className="glass p-4 rounded-2xl border-white/10 shadow-xl">
              <label htmlFor="mobile-nav" className="block text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-2">Pular para seção:</label>
              <select 
                id="mobile-nav"
                className="w-full bg-slate-900/50 text-sm border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all appearance-none cursor-pointer"
                value={activeSection}
                onChange={(e) => {
                    const id = e.target.value;
                    setActiveSection(id);
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {navItems.map(item => (
                  <option key={item.id} value={item.id}>{item.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Sidebar (Desktop) */}
            <aside className="hidden lg:block w-80 sticky top-24 shrink-0">
              <div className="glass p-8 rounded-3xl border-white/5 space-y-2">
                <nav className="space-y-1">
                  {navItems.map(item => (
                    <a 
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                        activeSection === item.id 
                        ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400' 
                        : 'text-slate-500 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                  <Link 
                    href="/#developer-portal" 
                    className="flex items-center justify-between group p-4 rounded-2xl bg-white text-slate-950 hover:bg-slate-200 transition-all font-black uppercase tracking-widest text-[10px]"
                  >
                    Solicitar Sandbox
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-emerald-400/80">
                    <ShieldCheck className="w-3 h-3" />
                    🔒 LGPD Compliant
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-32">
              
              {/* SEÇÃO 1: Introdução */}
              <section id="introducao" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="01" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Introdução</h2>
                </div>
                <p className="text-slate-400 leading-relaxed mb-10">
                  A MyPass API fornece verificação biométrica facial 3D para suas aplicações. 
                  Através dela, você pode confirmar a identidade de usuários com alta precisão e segurança.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: <UserCheck className="w-5 h-5 text-cyan-400"/>, title: "Cadastro Facial", desc: "Registra o rosto de um usuário para futuras comparações." },
                    { icon: <ShieldCheck className="w-5 h-5 text-emerald-400"/>, title: "Verificação", desc: "Compara o rosto capturado com um cadastro existente." },
                    { icon: <Activity className="w-5 h-5 text-red-400"/>, title: "Prova de Vida", desc: "Confirma que a captura é de uma pessoa real, sem comparar com cadastro." }
                  ].map((card, i) => (
                    <div key={i} className="p-6 rounded-2xl glass border-white/5 hover:border-cyan-500/20 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                        {card.icon}
                      </div>
                      <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">{card.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SEÇÃO 2: API Key */}
              <section id="api-key" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="02" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Obter sua API Key</h2>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    "O desenvolvedor acessa o formulário de cadastro em mypass.com.br",
                    "Preenche os dados da empresa, incluindo CNPJ",
                    "A solicitação passa por processo de aprovação",
                    "Após aprovação, um token mpx_ é gerado e enviado ao desenvolvedor",
                    "Este token é a API Key utilizada em todas as chamadas autenticadas"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-cyan-400 font-bold">{i+1}.</span>
                      <p className="text-sm text-slate-400">{item}</p>
                    </div>
                  ))}
                </div>
                <Callout type="warning">
                  A API Key não pode ser recuperada depois. Se perder, será necessário solicitar uma nova via painel administrativo.
                </Callout>
              </section>

              {/* SEÇÃO 3: Baixar o SDK */}
              <section id="sdk" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="03" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Baixar o SDK</h2>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  O FaceTec SDK roda no dispositivo do usuário e captura os dados biométricos (face scan, imagens de auditoria).
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                   <span className="px-3 py-1 rounded-full bg-slate-800 text-[10px] font-bold text-slate-400 border border-white/5 uppercase tracking-widest">Browser SDK (Web)</span>
                   <span className="px-3 py-1 rounded-full bg-slate-800 text-[10px] font-bold text-slate-400 border border-white/5 uppercase tracking-widest">Android SDK</span>
                   <span className="px-3 py-1 rounded-full bg-slate-800 text-[10px] font-bold text-slate-400 border border-white/5 uppercase tracking-widest">iOS SDK</span>
                </div>

                <Link 
                  href="https://dev.facetec.com/downloads" 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold text-sm transition-colors mb-10"
                >
                  dev.facetec.com/downloads <ArrowRight className="w-4 h-4"/>
                </Link>

                <div className="p-6 rounded-2xl glass border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <Smartphone className="w-6 h-6 text-slate-400" />
                    <h4 className="text-white font-bold text-sm uppercase">O Papel do SDK</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    O SDK é responsável por guiar o usuário na captura facial e gerar os dados (faceScan, auditTrailImage, etc) que serão enviados para a API.
                  </p>
                </div>
              </section>

              {/* SEÇÃO 4: Inicializar o SDK */}
              <section id="inicializar" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="04" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Inicializar o SDK</h2>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <HttpBadge method="GET" />
                  <code className="text-xs font-mono text-cyan-400">/api/facetec/config</code>
                </div>
                
                <div className="bg-[#0b0f1a] rounded-xl border border-white/5 overflow-hidden">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-slate-500">Resposta do Servidor</span>
                    <FileCode className="w-3 h-3 text-slate-500" />
                  </div>
                  <CodeBlock code={`{\n  "deviceKeyIdentifier": "abc123...",\n  "publicFaceMapEncryptionKey": "-----BEGIN PUBLIC KEY-----\\n..."\n}`} />
                </div>

                <div className="mt-12 bg-[#0b0f1a] rounded-xl border border-white/5 overflow-hidden">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-slate-500">Exemplo Browser SDK</span>
                    <Terminal className="w-3 h-3 text-slate-500" />
                  </div>
                  <CodeBlock code={`// Buscar configuração do servidor\nconst resp = await fetch('/api/facetec/config');\nconst config = await resp.json();\n\n// Inicializar o SDK\nFaceTecSDK.initializeInProductionMode(\n  config.productionKeyText,\n  config.deviceKeyIdentifier,\n  config.publicFaceMapEncryptionKey,\n  function(success) {\n    if (success) { console.log('SDK inicializado com sucesso'); }\n  }\n);`} />
                </div>
              </section>

              {/* SEÇÃO 5: Enrollment */}
              <section id="enrollment" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="05" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Cadastro Facial (Enrollment)</h2>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <HttpBadge method="POST" />
                  <code className="text-xs font-mono text-cyan-400">/api/enrollment</code>
                </div>
                <p className="text-slate-400 text-sm mb-10">Registra o rosto de um usuário para futuras verificações.</p>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Headers</h4>
                    <div className="overflow-x-auto rounded-xl border border-white/10">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-white/5 text-slate-300 font-black uppercase tracking-wider">
                          <tr>
                            <th className="px-6 py-4">Header</th>
                            <th className="px-6 py-4">Valor</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-slate-400">
                          <tr>
                            <td className="px-6 py-4">Content-Type</td>
                            <td className="px-6 py-4">application/json</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">X-API-Key</td>
                            <td className="px-6 py-4 italic text-cyan-400">sua-chave-api</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Body (JSON)</h4>
                    <div className="overflow-x-auto rounded-xl border border-white/10">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-white/5 text-slate-300 font-black uppercase tracking-wider">
                          <tr>
                            <th className="px-6 py-4">Campo</th>
                            <th className="px-6 py-4">Tipo</th>
                            <th className="px-6 py-4">Descrição</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-slate-400">
                          {[
                            { f: 'externalId', t: 'string', d: 'ID do usuário no seu sistema (CPF, UUID)' },
                            { f: 'sessionId', t: 'string', d: 'ID da sessão do FaceTec SDK' },
                            { f: 'faceScan', t: 'string', d: 'Dados do face scan (gerado pelo SDK)' },
                            { f: 'auditTrailImage', t: 'string', d: 'Imagem de auditoria (base64)' },
                            { f: 'lowQualityAuditTrailImage', t: 'string', d: 'Imagem de auditoria low-res' },
                          ].map((row, i) => (
                            <tr key={i}>
                              <td className="px-6 py-4 font-mono text-cyan-400">{row.f}</td>
                              <td className="px-6 py-4 text-slate-500">{row.t}</td>
                              <td className="px-6 py-4">{row.d}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                   <CodeBlock code={`POST /api/enrollment\nContent-Type: application/json\nX-API-Key: sua-chave-api\n{\n  "externalId": "12345678900",\n  "sessionId": "session-uuid-aqui",\n  "faceScan": "dados-do-sdk...",\n  "auditTrailImage": "base64...",\n  "lowQualityAuditTrailImage": "base64..."\n}`} />
                </div>

                <Callout type="info">
                  O <strong>externalId</strong> é o identificador único do usuário no seu ecossistema. Use-o para vincular o cadastro facial de forma definitiva à sua base de dados.
                </Callout>
              </section>

              {/* SEÇÃO 6: Verify */}
              <section id="verify" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="06" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Verificação (Verify)</h2>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <HttpBadge method="POST" />
                  <code className="text-xs font-mono text-cyan-400">/api/verify</code>
                </div>
                <p className="text-slate-400 text-sm mb-10">Compara o rosto capturado com o cadastro existente do usuário.</p>
                <CodeBlock code={`{\n  "success": true,\n  "match": true,\n  "matchLevel": 8,\n  "isLive": true\n}`} />
                
                <div className="overflow-x-auto rounded-xl border border-white/10 mt-8">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white/5 text-slate-300 font-black uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Campo</th>
                        <th className="px-6 py-4">Descrição</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-400">
                      <tr>
                        <td className="px-6 py-4 font-mono text-cyan-400">match</td>
                        <td className="px-6 py-4">true se o rosto corresponde ao cadastro</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-cyan-400">matchLevel</td>
                        <td className="px-6 py-4">Nível de correspondência de 0 a 10 (mínimo recomendado: 6)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-cyan-400">isLive</td>
                        <td className="px-6 py-4">true se a prova de vida foi aprovada</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SEÇÃO 7: Liveness */}
              <section id="liveness" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="07" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Prova de Vida (Liveness)</h2>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <HttpBadge method="POST" />
                  <code className="text-xs font-mono text-cyan-400">/api/liveness</code>
                </div>
                <p className="text-slate-400 text-sm mb-10">Apenas confirma que a captura é de uma pessoa física real.</p>
                <CodeBlock code={`{\n  "success": true,\n  "isLive": true,\n  "confidence": 99.7\n}`} />
                <Callout type="info">
                  Não é necessário enviar externalId para liveness. Apenas os dados biométricos da sessão atual.
                </Callout>
              </section>

              {/* SEÇÃO 8: Consultar/Excluir */}
              <section id="users" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="08" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Consultar / Excluir Usuário</h2>
                </div>
                
                <div className="space-y-12">
                   <div>
                     <h4 className="text-sm font-bold text-white mb-4">Consultar</h4>
                     <div className="flex items-center gap-3 mb-4">
                        <HttpBadge method="GET" />
                        <code className="text-xs font-mono text-cyan-400">/api/users/&#123;externalId&#125;</code>
                     </div>
                     <CodeBlock code={`GET /api/users/12345678900\nX-API-Key: sua-chave-api`} />
                   </div>

                   <div className="pt-8 border-t border-white/5">
                     <h4 className="text-sm font-bold text-white mb-4">Excluir (LGPD)</h4>
                     <div className="flex items-center gap-3 mb-4">
                        <HttpBadge method="DELETE" />
                        <code className="text-xs font-mono text-red-400">/api/users/&#123;externalId&#125;</code>
                     </div>
                     <p className="text-slate-500 text-xs mb-4">Remove permanentemente os dados biométricos. Resposta de conformidade com o Direito ao Esquecimento.</p>
                     <CodeBlock code={`DELETE /api/users/12345678900\nX-API-Key: sua-chave-api`} />
                   </div>
                </div>
              </section>

              {/* SEÇÃO 9: Autenticação */}
              <section id="auth" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="09" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Autenticação</h2>
                </div>
                
                <div className="space-y-6 mb-10">
                  {/* Nível 1 — Sandbox Token */}
                  <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                    <h4 className="text-cyan-400 font-bold text-sm mb-3 uppercase tracking-wider flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4" />
                       Nível 1 — Sandbox Token (Acesso ao Portal)
                    </h4>
                    <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                      <li>Para acessar o portal de desenvolvedores e a documentação interativa, utilize o sb_token fornecido durante o cadastro.</li>
                      <li>Este token é exclusivo para autenticação no portal, <strong>NÃO</strong> deve ser usado em chamadas à API de produção.</li>
                    </ul>
                  </div>

                  {/* Nível 2 — Chamadas de API (X-API-Key) */}
                  <div className="p-6 rounded-2xl glass border-white/5">
                    <h4 className="text-slate-300 font-bold text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
                       <Lock className="w-4 h-4" />
                       Nível 2 — Chamadas de API (X-API-Key)
                    </h4>
                    <p className="text-slate-400 text-xs mb-6">Todas as chamadas operacionais à API precisam de autenticação via API Key (mpx_).</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 font-mono">
                        <h5 className="text-[10px] font-black uppercase text-cyan-400/70 mb-2">Via Header</h5>
                        <code className="text-[11px] text-slate-300">X-API-Key: sua-mpx-key</code>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 font-mono">
                        <h5 className="text-[10px] font-black uppercase text-cyan-400/70 mb-2">Via Query</h5>
                        <code className="text-[11px] text-slate-300">?key=sua-mpx-key</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                   <Callout type="warning">
                      O query parameter é necessário para o Browser SDK, que não permite configurar headers customizados no XHR interno.
                   </Callout>
                   <Callout type="info">
                      Os recursos habilitados dependem da configuração do seu contrato. O sistema retornará 403 Forbidden para módulos não ativos.
                   </Callout>
                </div>
              </section>

              {/* SEÇÃO 10: Códigos de Erro */}
              <section id="errors" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="10" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Códigos de Erro</h2>
                </div>
                <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white/5 text-slate-300 font-black uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Erro</th>
                        <th className="px-6 py-4">Descrição</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-400">
                      {[
                        { c: '400', e: 'Bad Request', d: 'Campos ausentes ou dados inválidos' },
                        { c: '401', e: 'Unauthorized', d: 'API Key ausente ou expirada' },
                        { c: '403', e: 'Forbidden', d: 'Recurso não permitido no contrato' },
                        { c: '404', e: 'Not Found', d: 'Usuário (externalId) não localizado' },
                        { c: '409', e: 'Conflict', d: 'Usuário já cadastrado no Enrollment' },
                        { c: '500', e: 'Internal Error', d: 'Falha crítica no processamento biométrico' }
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="px-6 py-4 font-bold text-white">{row.c}</td>
                          <td className="px-6 py-4 font-mono text-red-400">{row.e}</td>
                          <td className="px-6 py-4">{row.d}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <CodeBlock code={`{\n  "success": false,\n  "error": "Descrição detalhada do erro"\n}`} />
              </section>

              {/* SEÇÃO 11: Fluxo via SDK */}
              <section id="sdk-flow" className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="11" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Fluxo via SDK</h2>
                </div>
                <p className="text-slate-400 text-sm mb-10">Encapsulamento total da comunicação biométrica via proxy processor.</p>
                <div className="space-y-6 mb-12">
                   {[
                     "O SDK captura os dados biométricos e gera o requestBlob criptografado.",
                     "Você envia o blob para /api/facetec/process.",
                     "O servidor processa a requisição com o motor central e devolve um responseBlob.",
                     "Você repassa o responseBlob ao SDK, que finaliza a operação de interface."
                   ].map((step, i) => (
                     <div key={i} className="flex gap-4">
                       <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[10px] font-black text-cyan-400 shrink-0 mt-0.5">{i+1}</div>
                       <p className="text-sm text-slate-400">{step}</p>
                     </div>
                   ))}
                </div>
                <CodeBlock code={`// Configurar o SDK com o endpoint MyPass\n// Configure esta variável em seu .env.local para apontar ao servidor correto\nFaceTecSDK.setServerBaseURL(process.env.NEXT_PUBLIC_MYPASS_API_URL || 'https://facetec.easypay.com.br/api/facetec');\n\n// O SDK gerencia os POSTs e payloads criptografados`} />
                <Callout type="info">
                  Neste fluxo, o SDK gerencia toda a complexidade criptográfica. O desenvolvedor apenas trata o callback final.
                </Callout>
              </section>

              {/* SEÇÃO 12: Base URL */}
              <section id="base-url" className="scroll-mt-32 pb-32">
                <div className="flex items-center mb-8">
                  <SectionBadge number="12" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Base URL</h2>
                </div>
                <p className="text-slate-400 text-sm mb-6">Endereço operacional de produção para todas as chamadas:</p>
                <div className="p-6 rounded-2xl bg-cyan-400/5 border border-cyan-400/20 font-mono text-xl text-cyan-400 font-bold text-center mb-6">
                   https://facetec.easypay.com.br
                </div>
                
                <div className="p-6 rounded-2xl glass border-white/5 mb-10">
                  <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest text-center">Recomendação</h4>
                  <p className="text-xs text-slate-500 leading-relaxed text-center">
                    Boas práticas: em ambientes de desenvolvimento, recomendamos configurar esta URL via variável de ambiente 
                    <span className="text-cyan-400 font-mono mx-1">NEXT_PUBLIC_MYPASS_API_URL</span> 
                    para evitar exposição no código-fonte e facilitar a troca entre ambientes.
                  </p>
                </div>

                <CodeBlock code={`POST https://facetec.easypay.com.br/api/enrollment\nContent-Type: application/json\nX-API-Key: sua-chave-api\n{\n  "externalId": "12345678900",\n  ...\n}`} />
              </section>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
