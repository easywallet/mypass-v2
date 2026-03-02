import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { Certifications } from '@/components/Certifications';
import { BentoGrid } from '@/components/BentoGrid';
import { DevPortal } from '@/components/DevPortal';
import { ContactForm } from '@/components/ContactForm';
import { UnifiedJourneySection } from '@/components/UnifiedJourneySection';
import { CertificationBadge } from '@/components/CertificationBadge';

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
  <footer className="py-34 px-8 border-t border-white/5 bg-slate-950">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-13">
      <div className="col-span-2">
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/assets/logos/mypass-logo.png"
            alt="MyPass Logo Footer - Infraestrutura de Identidade"
            width={350}
            height={82}
            className="h-[82px] w-auto opacity-80 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>
        <p className="text-slate-500 max-w-sm text-sm leading-relaxed mb-8">
          Infraestrutura de Identidade Soberana para o mercado brasileiro.
          Protegendo ativos críticos com tecnologia certificada pela Praetorian.
        </p>
      </div>

      <div>
        <h4 className="text-[10px] font-black uppercase tracking-[0.21em] text-white mb-8">Empresa</h4>
        <ul className="space-y-5">
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Sobre Nós</a></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Carreiras</a></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Compliance</a></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Privacidade</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-[10px] font-black uppercase tracking-[0.21em] text-white mb-8">Legal</h4>
        <ul className="space-y-5">
          <li><CertificationBadge certId="ibeta-level-1" variant="link" /></li>
          <li><CertificationBadge certId="ibeta-level-2" variant="link" /></li>
          <li><CertificationBadge certId="praetorian-level-4" variant="link" /></li>
          <li><CertificationBadge certId="praetorian-blackbox" variant="link" /></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors flex items-center gap-2 mt-2">LGPD Art. 46</a></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">LGPD Art. 46</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-21 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5">
      <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.13em]">
        © 2026 MyPass Identity Systems. All Rights Reserved.
      </p>
      <div className="flex gap-8">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.13em]">CONSTRUÍDA PARA O MERCADO BRASILEIRO</span>
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
      <Certifications />
      <BentoGrid />
      <DevPortal />
      <ContactForm />
      <Footer />
    </main>
  );
}
