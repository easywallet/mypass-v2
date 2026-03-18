"use client";

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  ChevronRight, 
  ShieldCheck, 
  UserCheck, 
  Activity, 
  Code2, 
  Lock, 
  ArrowRight,
  Database,
  Cpu,
  HeartPulse
} from 'lucide-react';

const EndpointCard = ({ method, path, title, description }: { method: 'POST' | 'GET' | 'DELETE', path: string, title: string, description: string }) => {
  const methodStyles = {
    POST: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    GET: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    DELETE: "bg-red-500/10 text-red-500 border-red-500/20"
  };

  return (
    <div className="group glass p-6 rounded-2xl border-white/5 hover:border-cyan-500/30 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className={`text-[10px] font-black px-2 py-1 rounded border ${methodStyles[method]}`}>
          {method}
        </span>
        <code className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
          {path}
        </code>
      </div>
      <h4 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight text-sm">
        {title}
      </h4>
      <p className="text-xs text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

function DocsContent() {
  const searchParams = useSearchParams();
  const accessRequired = searchParams.get('access') === 'required';

  return (
    <main className="min-h-screen bg-slate-950 selection:bg-cyan-400/30">
      <div className="fixed inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
      <Navbar />

      <div className="relative pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-12">
            <Link href="/" className="hover:text-white transition-colors">MyPass</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cyan-400">Documentação</span>
          </nav>

          {/* Access Denied Banner (Etapa B) */}
          {accessRequired && (
            <div className="mb-12 p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 flex items-center gap-6 animate-in fade-in slide-in-from-top-6 duration-700">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight mb-1">Esta área requer token de acesso ativo.</h3>
                <p className="text-amber-500/70 text-sm">Solicite seu Sandbox abaixo para obter as credenciais de desenvolvedor e acessar a API Reference.</p>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column: Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
                  API Reference
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-tight">
                Documentação <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  API MyPass
                </span>
              </h1>

              <p className="text-slate-400 text-lg mb-16 leading-relaxed max-w-2xl">
                Integre biometria 3D de alta precisão em seu fluxo de autenticação. Nossa API oferece suporte a Liveness Check v4, processamento em borda e conformidade total com a LGPD.
              </p>

              {/* Endpoints Sections */}
              <div className="space-y-20">
                
                {/* Section 1: Biometria */}
                <section>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest">Onboarding & Biometria</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EndpointCard 
                      method="POST" 
                      path="/api/enrollment" 
                      title="Enrollment" 
                      description="Registra um novo usuário capturando o FaceMap 3D e audit trail." 
                    />
                    <EndpointCard 
                      method="POST" 
                      path="/api/liveness" 
                      title="Liveness Check" 
                      description="Valida se o usuário é real sem realizar o cadastro biométrico." 
                    />
                    <EndpointCard 
                      method="POST" 
                      path="/api/verify" 
                      title="Verificação" 
                      description="Compara biometria capturada com FaceMap previamente cadastrado." 
                    />
                  </div>
                </section>

                {/* Section 2: Gestão de Usuários */}
                <section>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest">Gestão de Identidade</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EndpointCard 
                      method="GET" 
                      path="/api/users/{id}" 
                      title="User Info" 
                      description="Retorna metadados e status de atividade de um usuário cadastrado." 
                    />
                    <EndpointCard 
                      method="DELETE" 
                      path="/api/users/{id}" 
                      title="Delete User" 
                      description="Remove permanentemente os dados biométricos (Direito ao Esquecimento LGPD)." 
                    />
                  </div>
                </section>

                {/* Section 3: Infraestrutura */}
                <section>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
                      <Database className="w-4 h-4" />
                    </div>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest">Utilidades & Configuração</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EndpointCard 
                      method="GET" 
                      path="/api/health" 
                      title="Health Check" 
                      description="Status operacional dos serviços de IA, Database e SDK Session." 
                    />
                    <EndpointCard 
                      method="POST" 
                      path="/api/facetec/process" 
                      title="Proxy Processor" 
                      description="Processamento seguro de blobs criptografados via FaceTec Server." 
                    />
                    <EndpointCard 
                      method="GET" 
                      path="/api/facetec/config" 
                      title="SDK Config" 
                      description="Configurações globais de DeviceKey e Public Encryption Key." 
                    />
                    <EndpointCard 
                      method="GET" 
                      path="/api/try/session-token" 
                      title="Session Token" 
                      description="Gera tokens temporários para sessões do Playground de desenvolvedor." 
                    />
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column: CTA & Sidebar */}
            <aside className="lg:w-80 space-y-8 w-full">
              
              <div className="glass p-8 rounded-3xl border-white/5 sticky top-32">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Integração Rápida
                </h3>
                
                <div className="bg-black/40 rounded-xl p-4 mb-8 font-mono text-[11px] leading-relaxed border border-white/5">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">auth</span> = <span className="text-purple-400">await</span> mypass.<span className="text-yellow-400">verify</span>(&#123;{"\n"}
                  {"  "}externalId: <span className="text-emerald-400">&quot;user_cpf&quot;</span>,{"\n"}
                  {"  "}faceScan: <span className="text-emerald-400">blob</span>{"\n"}
                  &#125;);{"\n"}
                  <span className="text-slate-500">// Result: true/false</span>
                </div>

                <div className="space-y-4">
                  <Link 
                    href="/#developer-portal" 
                    className="flex items-center justify-between group p-4 rounded-2xl bg-white text-slate-950 hover:bg-slate-200 transition-all font-black uppercase tracking-widest text-[10px]"
                  >
                    Solicitar Sandbox
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link 
                    href="/docs/api-reference" 
                    className="flex items-center justify-between group p-4 rounded-2xl glass hover:bg-white/5 transition-all text-white font-black uppercase tracking-widest text-[10px]"
                  >
                    API Reference
                    <div className="flex items-center gap-2">
                      <Lock className="w-3 h-3 text-cyan-400" />
                      <span className="text-cyan-400">🔒</span>
                    </div>
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3 text-slate-400 text-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Conformidade com a LGPD</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-xs mt-4">
                    <HeartPulse className="w-4 h-4 text-red-500" />
                    <span>SLA: 99.9% Uptime</span>
                  </div>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function DocsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    }>
      <DocsContent />
    </Suspense>
  );
}
