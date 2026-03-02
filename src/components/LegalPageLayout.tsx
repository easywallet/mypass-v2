"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, ChevronRight } from 'lucide-react';

interface LegalPageLayoutProps {
    children: React.ReactNode;
    topic: string;
    title: string;
    lastUpdated?: string;
}

const legalNavItems = [
    { label: "Política de Privacidade", href: "/legal/politica-privacidade" },
    { label: "Resumo de Privacidade", href: "/legal/privacidade-resumida" },
    { label: "Exercer Meus Direitos (LGPD)", href: "/legal/direitos-dos-titulares" },
    { label: "Segurança de Dados", href: "/legal/seguranca-dados" },
    { label: "Política de Cookies", href: "/legal/cookies" },
    { label: "Termos de Uso", href: "/legal/termos-de-uso" },
];

export function LegalPageLayout({ children, topic, title, lastUpdated }: LegalPageLayoutProps) {
    const pathname = usePathname();

    return (
        <>
            <div className="min-h-screen bg-slate-950 relative pt-32 pb-24 selection:bg-emerald-400/30">
                <div className="fixed inset-0 bg-radial-gradient opacity-40 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-12">

                    {/* Left Sidebar (Desktop) */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-8 md:mb-12">
                            <Link href="/" className="hover:text-white transition-colors">MyPass</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-slate-400 pointer-events-none">Legal</span>
                        </nav>

                        <div className="flex flex-col gap-1">
                            {legalNavItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link key={item.href} href={item.href} className={
                                        isActive
                                            ? 'block px-3 py-2 rounded-md text-sm font-medium text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-400'
                                            : 'block px-3 py-2 rounded-md text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors'
                                    }>
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 max-w-3xl">
                        <div className="legal-content">
                            <h1>{title}</h1>
                            {lastUpdated && (
                                <p style={{ margin: "4px 0 32px 0", fontSize: "14px", color: "#64748b" }}>
                                    Vigência: <span style={{ color: "#94a3b8" }}>{lastUpdated}</span>
                                </p>
                            )}

                            {children}
                        </div>
                    </main>

                </div>
            </div>

            {/* Floating Action Button (DPO) */}
            <a
                href="mailto:dpo@mypass.com.br"
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm px-4 py-2 rounded-full shadow-lg shadow-cyan-500/25 transition-colors"
                title="Falar com o DPO"
            >
                <ShieldCheck size={16} />
                Falar com DPO
            </a>
        </>
    );
}
