import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Certifications } from '@/components/Certifications';
import { BentoGrid } from '@/components/BentoGrid';
import { DevPortal } from '@/components/DevPortal';
import { ContactForm } from '@/components/ContactForm';
import { UnifiedJourneySection } from '@/components/UnifiedJourneySection';
import { B2CSection } from '@/components/B2CSection';
import { CertificationBadge } from '@/components/CertificationBadge';
import { LGPDModal } from '@/components/LGPDModal';

const Navbar = () => (
  <nav className="fixed top-0 inset-x-0 z-50 px-5 py-5 md:px-8">
    <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-5 rounded-[21px] border-white/5 shadow-[0_13px_34px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/logos/mypass-logo.png"
          alt="MyPass Logo - Identidade Digital Soberana"
          width={350}
          height={82}
          className="h-[82px] w-auto drop-shadow-[0_0_13px_rgba(52,211,153,0.2)]"
          priority
          loading="eager"
        />
      </div>

      <div className="hidden md:flex items-center gap-13">
        <a href="#jornada" className="text-[10px] font-black uppercase tracking-[0.21em] text-slate-400 hover:text-white transition-colors duration-300">Como Funciona</a>
        <a href="#casos-de-uso" className="text-[10px] font-black uppercase tracking-[0.21em] text-slate-400 hover:text-white transition-colors duration-300">Casos de Uso</a>
        <a href="#developer-portal" className="text-[10px] font-black uppercase tracking-[0.21em] text-slate-400 hover:text-white transition-colors duration-300">Desenvolvedores</a>
        <a href="#compliance" className="text-[10px] font-black uppercase tracking-[0.21em] text-slate-400 hover:text-white transition-colors duration-300">Certificações</a>
      </div>

      <button className="px-8 py-3 bg-white text-slate-950 text-[10px] font-black uppercase tracking-[0.13em] rounded-xl hover:bg-slate-200 transition-all shadow-[0_5px_13px_rgba(255,255,255,0.1)]">
        Portal
      </button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="relative z-20 pt-24 pb-12 px-5 md:px-8 border-t border-white/10 bg-[#05050a]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16 mb-24">

      {/* Coluna 1 — MYPASS */}
      <div className="lg:pr-8">
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="/assets/logos/mypass-logo.png"
            alt="MyPass Logo Footer - Infraestrutura de Identidade"
            width={350}
            height={82}
            className="h-[60px] w-auto opacity-90 transition-opacity"
            loading="lazy"
          />
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          Infraestrutura de Identidade Soberana para o mercado brasileiro.
        </p>
        <div className="inline-flex items-center border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 rounded-full">
          <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
            LGPD COMPLIANT &middot; BACEN 2026 READY
          </span>
        </div>
      </div>

      {/* Coluna 2 — EMPRESA */}
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-6">Empresa</h4>
        <ul className="space-y-4">
          <li><Link href="/sobre" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Sobre Nós</Link></li>
          <li><Link href="/compliance" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Compliance</Link></li>
          <li><a href="#compliance" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Certificações</a></li>
          <li><Link href="/carreiras" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Carreiras</Link></li>
        </ul>
      </div>

      {/* Coluna 3 — DESENVOLVEDORES */}
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-6">Desenvolvedores</h4>
        <ul className="space-y-4">
          <li><a href="mailto:sandbox@mypass.com.br" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Documentação API</a></li>
          <li><a href="#developer-portal" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Acessar Sandbox</a></li>
          <li><a href="#casos-de-uso" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Casos de Uso</a></li>
          <li><span className="text-sm text-slate-600 block mt-2">Parceiro Tecnológico: FaceTec</span></li>
        </ul>
      </div>

      {/* Coluna 4 — LEGAL & COMPLIANCE */}
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-6">Legal & Compliance</h4>
        <ul className="space-y-4">
          <li><Link href="/legal/politica-privacidade" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Política de Privacidade</Link></li>
          <li><Link href="/legal/privacidade-resumida" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Resumo de Privacidade</Link></li>
          <li><Link href="/legal/direitos-dos-titulares" className="text-sm text-emerald-400 font-medium hover:text-emerald-300 transition-colors bg-emerald-400/10 px-2 py-0.5 rounded -ml-2">Exercer Meus Direitos (LGPD)</Link></li>
          <li><Link href="/legal/seguranca-dados" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Segurança de Dados</Link></li>
          <li><Link href="/legal/cookies" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Política de Cookies</Link></li>
          <li><Link href="/legal/termos-de-uso" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Termos de Uso</Link></li>
        </ul>
      </div>

    </div>

    {/* Rodapé Inferior (Bloco de Conformidade) */}
    <div className="max-w-7xl mx-auto pt-10 border-t border-[#1e293b]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">

        {/* Textos Jurídigos */}
        <div className="flex-1 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
              LGPD COMPLIANT &middot; PRAETORIAN CERTIFIED
            </span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed text-justify max-w-3xl mx-auto mt-4">
            A MyPass opera em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            Nossa infraestrutura biométrica é certificada pelos laboratórios independentes iBeta (NIST/NVLAP)
            e Praetorian Security, com APCER de 0% em todos os níveis de teste. O tratamento de dados
            biométricos segue rigorosamente os Arts. 11 e 46 da LGPD, com Privacy by Design nativo —
            nenhuma imagem facial é armazenada em texto plano.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex-shrink-0 text-left lg:text-right">
          <p className="text-[11px] text-slate-400 font-medium">
            © 2026 MyPass <br className="hidden lg:block" />
            <span className="lg:hidden">&middot;</span> Todos os direitos reservados.
          </p>
        </div>

      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-emerald-400/30">
      <div className="fixed inset-0 bg-radial-gradient opacity-50 pointer-events-none" />
      <Navbar />
      <Hero />
      <UnifiedJourneySection />
      <B2CSection />
      <Certifications />
      <BentoGrid />
      <DevPortal />
      <ContactForm />
      <Footer />
    </main>
  );
}
