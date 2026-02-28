import { Hero } from '@/components/Hero';
import { Certifications } from '@/components/Certifications';
import { BentoGrid } from '@/components/BentoGrid';
import { DevPortal } from '@/components/DevPortal';
import { ContactForm } from '@/components/ContactForm';

const Navbar = () => (
  <nav className="fixed top-0 inset-x-0 z-50 px-6 py-6">
    <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-4 rounded-2xl border-white/5 shadow-2xl">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-slate-950 text-xl tracking-tighter">MP</div>
        <span className="text-xl font-bold tracking-tighter text-white">MyPass</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Produtos</a>
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Segurança</a>
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Documentação</a>
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Preços</a>
      </div>

      <button className="px-5 py-2.5 bg-white text-slate-950 text-xs font-black uppercase tracking-widest rounded-lg hover:bg-slate-200 transition-colors">
        Portal
      </button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-slate-950">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-slate-950 text-xl tracking-tighter">MP</div>
          <span className="text-xl font-bold tracking-tighter text-white">MyPass</span>
        </div>
        <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
          Líder global em infraestrutura de identidade determinística 3D.
          Protegendo ativos críticos com tecnologia certificada pela Praetorian.
        </p>
      </div>

      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Empresa</h4>
        <ul className="space-y-4">
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Sobre Nós</a></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Carreiras</a></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Compliance</a></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Privacidade</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Legal</h4>
        <ul className="space-y-4">
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">iBeta Level 1 & 2</a></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">ISO 30107-3</a></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Praetorian Level 4/5</a></li>
          <li><a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">SOC 2 Type II</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
        © 2026 MyPass Identity Systems. All Rights Reserved.
      </p>
      <div className="flex gap-6">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Built for Nasdaq Standards</span>
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
      <Certifications />
      <BentoGrid />
      <DevPortal />
      <ContactForm />
      <Footer />
    </main>
  );
}
