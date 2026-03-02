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
import { FooterCertLink } from '@/components/FooterCertLink';

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
  <footer style={{ backgroundColor: '#05050a', padding: '64px 40px 32px' }}>
    {/* CSS Isolado e Imutável para Garantia Matemática do Grid */}
    <style dangerouslySetInnerHTML={{
      __html: `
        .footer-linha {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
          padding-bottom: 48px;
          border-bottom: 1px solid #1e293b;
        }
        .footer-logo {
          width: 100%;
          margin-bottom: 32px;
        }
        .footer-matematico {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .footer-linha {
            flex-direction: row;
          }
          .footer-logo {
            width: 220px;
            min-width: 220px;
            padding-right: 48px;
            border-right: 1px solid #1e293b;
            margin-right: 48px;
            margin-bottom: 0;
          }
          .footer-matematico {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `
    }} />

    {/* WRAPPER PRINCIPAL */}
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* LINHA DAS COLUNAS */}
      <div className="footer-linha">

        {/* COLUNA A — MYPASS (largura fixa) */}
        <div className="footer-logo">
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#00d4ff', marginBottom: '12px' }}>
            MyPass
          </div>
          <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '16px' }}>
            Infraestrutura de Identidade Soberana para o mercado brasileiro.
          </p>
          <span style={{ fontSize: '10px', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
            LGPD COMPLIANT &middot; BACEN 2026 READY
          </span>
        </div>

        {/* 4 COLUNAS SIMÉTRICAS — flex-1 igual para todas */}
        <div className="footer-matematico">

          {/* COLUNA B — EMPRESA */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              Empresa
            </h4>
            <ul className="space-y-4">
              <li><Link href="/sobre" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Sobre Nós</Link></li>
              <li><Link href="/compliance" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Compliance</Link></li>
              <li><Link href="/carreiras" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Carreiras</Link></li>
            </ul>
          </div>

          {/* COLUNA C — DESENVOLVEDORES */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              Desenvolvedores
            </h4>
            <ul className="space-y-4">
              <li><a href="mailto:sandbox@mypass.com.br" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Documentação API</a></li>
              <li><a href="#developer-portal" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Acessar Sandbox</a></li>
              <li><a href="#casos-de-uso" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Casos de Uso</a></li>
              <li><span className="text-sm text-slate-600 block mt-2">Parceiro Tecnológico: FaceTec</span></li>
            </ul>
          </div>

          {/* COLUNA D — LEGAL & COMPLIANCE */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              Legal & Compliance
            </h4>
            <ul className="space-y-4">
              <li><Link href="/legal/politica-privacidade" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/legal/privacidade-resumida" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Resumo de Privacidade</Link></li>
              <li><Link href="/legal/direitos-dos-titulares" className="text-sm text-emerald-400 font-medium hover:text-emerald-300 transition-colors bg-emerald-400/10 px-2 py-0.5 rounded -ml-2">Exercer Meus Direitos (LGPD)</Link></li>
              <li><Link href="/legal/seguranca-dados" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Segurança de Dados</Link></li>
              <li><Link href="/legal/cookies" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Política de Cookies</Link></li>
              <li><Link href="/legal/termos-de-uso" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* COLUNA E — CERTIFICAÇÕES */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              Certificações
            </h4>
            <ul className="space-y-4">
              <FooterCertLink certId="ibeta-level-1" label="iBeta PAD Level 1" />
              <FooterCertLink certId="ibeta-level-2" label="iBeta PAD Level 2" />
              <FooterCertLink certId="praetorian-level-4" label="Praetorian Level 4" />
              <FooterCertLink certId="praetorian-blackbox" label="Praetorian Pentest" />
            </ul>
          </div>

        </div>
      </div>

      {/* BLOCO JURÍDICO */}
      <div style={{ paddingTop: '32px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            LGPD COMPLIANT &middot; PRAETORIAN CERTIFIED
          </span>
        </div>
        <p style={{ fontSize: '12px', color: '#64748b', maxWidth: '768px', margin: '0 auto 16px', lineHeight: '1.6', textAlign: 'justify', textJustify: 'inter-word' }}>
          A MyPass opera em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          Nossa infraestrutura biométrica é certificada pelos laboratórios independentes iBeta (NIST/NVLAP)
          e Praetorian Security, com APCER de 0% em todos os níveis de teste. O tratamento de dados
          biométricos segue rigorosamente os Arts. 11 e 46 da LGPD, com Privacy by Design nativo —
          nenhuma imagem facial é armazenada em texto plano.
        </p>
        <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>
          © 2026 MyPass &middot; Todos os direitos reservados.
        </p>
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
