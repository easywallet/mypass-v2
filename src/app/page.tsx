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
          height={38}
          width={0}
          style={{ width: 'auto', height: '38px' }}
          className="drop-shadow-[0_0_13px_rgba(52,211,153,0.2)]"
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
  <footer style={{
    backgroundColor: '#05050a',
    padding: '64px 40px 32px'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* UM ÚNICO ROW — logo + 4 colunas lado a lado */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '0',
        paddingBottom: '48px',
        borderBottom: '1px solid #1e293b'
      }}>

        {/* ELEMENTO 1 — LOGO (largura fixa, isolada) */}
        <div style={{
          width: '200px',
          minWidth: '200px',
          flexShrink: 0,
          paddingRight: '40px',
          marginRight: '40px',
          borderRight: '1px solid #1e293b'
        }}>
          <div style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#00d4ff',
            marginBottom: '12px'
          }}>
            MyPass
          </div>
          <p style={{
            fontSize: '13px',
            color: '#94a3b8',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}>
            Infraestrutura de Identidade Soberana
            para o mercado brasileiro.
          </p>
          <span style={{
            fontSize: '10px',
            color: '#475569',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            LGPD COMPLIANT · BACEN 2026 READY
          </span>
        </div>

        {/* ELEMENTOS 2-5 — 4 COLUNAS MATEMATICAMENTE IGUAIS */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px'
        }}>

          {/* COLUNA 2 — EMPRESA */}
          <div>
            <h4 style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#f8fafc',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              Empresa
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="/sobre" style={{
                  fontSize: '13px', color: '#94a3b8',
                  textDecoration: 'none'
                }}>Sobre Nós</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="/compliance" style={{
                  fontSize: '13px', color: '#94a3b8',
                  textDecoration: 'none'
                }}>Compliance</a>
              </li>
              <li>
                <a href="/carreiras" style={{
                  fontSize: '13px', color: '#94a3b8',
                  textDecoration: 'none'
                }}>Carreiras</a>
              </li>
            </ul>
          </div>

          {/* COLUNA 3 — DESENVOLVEDORES */}
          <div>
            <h4 style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#f8fafc',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              Desenvolvedores
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="mailto:sandbox@mypass.com.br"
                  style={{
                    fontSize: '13px', color: '#94a3b8',
                    textDecoration: 'none'
                  }}>
                  Documentação API
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#developer-portal"
                  style={{
                    fontSize: '13px', color: '#94a3b8',
                    textDecoration: 'none'
                  }}>
                  Acessar Sandbox
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#casos-de-uso"
                  style={{
                    fontSize: '13px', color: '#94a3b8',
                    textDecoration: 'none'
                  }}>
                  Casos de Uso
                </a>
              </li>
              <li>
                <span style={{ fontSize: '13px', color: '#475569' }}>
                  Parceiro: FaceTec
                </span>
              </li>
            </ul>
          </div>

          {/* COLUNA 4 — LEGAL & COMPLIANCE */}
          <div>
            <h4 style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#f8fafc',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              Legal & Compliance
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                ['Política de Privacidade',
                  '/legal/politica-privacidade'],
                ['Resumo de Privacidade',
                  '/legal/privacidade-resumida'],
                ['Exercer Meus Direitos',
                  '/legal/direitos-dos-titulares'],
                ['Segurança de Dados',
                  '/legal/seguranca-dados'],
                ['Política de Cookies',
                  '/legal/cookies'],
                ['Termos de Uso',
                  '/legal/termos-de-uso'],
              ].map(([label, href]) => (
                <li key={href} style={{ marginBottom: '8px' }}>
                  <a href={href} style={{
                    fontSize: '13px', color: '#94a3b8',
                    textDecoration: 'none'
                  }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 5 — CERTIFICAÇÕES */}
          <div>
            <h4 style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#f8fafc',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              Certificações
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <FooterCertLink certId="ibeta-level-1" label="iBeta PAD Level 1" />
              <FooterCertLink certId="ibeta-level-2" label="iBeta PAD Level 2" />
              <FooterCertLink certId="praetorian-level-4" label="Praetorian Level 4" />
              <FooterCertLink certId="praetorian-blackbox" label="Praetorian Pentest" />
            </ul>
          </div>

        </div>
      </div>

      {/* BLOCO JURÍDICO */}
      <div style={{
        paddingTop: '32px',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '11px',
          color: '#475569',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto 16px'
        }}>
          LGPD COMPLIANT · PRAETORIAN CERTIFIED
        </p>
        <p style={{
          fontSize: '12px',
          color: '#334155',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto 24px'
        }}>
          A MyPass opera em total conformidade com a
          Lei Geral de Proteção de Dados
          (Lei nº 13.709/2018). Nossa infraestrutura
          biométrica é certificada pelos laboratórios
          independentes iBeta (NIST/NVLAP) e Praetorian
          Security, com APCER de 0% em todos os níveis
          de teste. O tratamento de dados biométricos
          segue rigorosamente os Arts. 11 e 46 da LGPD,
          com Privacy by Design nativo — nenhuma imagem
          facial é armazenada em texto plano.
        </p>
        <p style={{
          fontSize: '12px',
          color: '#475569'
        }}>
          © 2026 MyPass · Todos os direitos reservados.
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
