"use client";

import React from 'react';
import { FooterCertLink } from '@/components/FooterCertLink';

export const Footer = () => (
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
                    <div style={{ marginBottom: '12px' }}>
                        <img
                            src="/assets/logos/mypass-logo-new.png"
                            alt="MyPass Logo"
                            style={{ height: '42px', width: 'auto', display: 'block' }}
                        />
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
