import React from 'react';
import Link from 'next/link';
import { Mail, ChevronRight } from 'lucide-react';

interface LegalPageLayoutProps {
    children: React.ReactNode;
    topic: string;
    title: string;
    lastUpdated?: string;
}

export function LegalPageLayout({ children, topic, title, lastUpdated }: LegalPageLayoutProps) {
    return (
        <>
            <div className="min-h-screen bg-slate-950 relative pt-32 pb-24 selection:bg-emerald-400/30">
                <div className="fixed inset-0 bg-radial-gradient opacity-40 pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">

                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-12">
                        <Link href="/" className="hover:text-white transition-colors">MyPass</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-400 pointer-events-none">Legal</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-emerald-400 pointer-events-none">{topic}</span>
                    </nav>

                    {/* Header */}
                    <div className="mb-16 border-b border-white/10 pb-12">
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                            {title}
                        </h1>
                        {lastUpdated && (
                            <p className="text-slate-400 text-sm font-medium">
                                Vigência: <span className="text-white">{lastUpdated}</span>
                            </p>
                        )}
                    </div>

                    {/* Content (Prose Wrapper) */}
                    <div className="prose prose-invert prose-emerald max-w-none 
                          prose-headings:font-bold prose-headings:tracking-tight 
                          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 
                          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 
                          prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                          prose-ul:text-slate-300 prose-li:mb-2
                          prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
                          prose-strong:text-white">
                        {children}
                    </div>

                </div>
            </div>

            {/* Floating Action Button (DPO) */}
            <a
                href="mailto:dpo@mypass.com.br"
                className="fixed bottom-8 right-8 z-50 bg-[#0a0a14] border border-[#1e293b] hover:border-emerald-500 hover:bg-[#1e293b] text-white p-4 rounded-full flex items-center justify-center gap-3 shadow-2xl transition-all group duration-300"
                title="Falar com o DPO"
            >
                <Mail className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest pr-2 hidden md:block">
                    DPO
                </span>
            </a>
        </>
    );
}
