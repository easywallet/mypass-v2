"use client";

import React from 'react';
import Image from 'next/image';

const BentoCard = ({ title, description, className, visual }: { title: string, description: string, className?: string, visual?: React.ReactNode }) => (
    <div className={`group relative glass p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10 ${className}`}>
        <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] mb-8">{description}</p>

            <div className="mt-auto relative w-full h-40 group-hover:scale-105 transition-transform duration-700">
                {visual}
            </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
);

const MockUI = ({ type }: { type: 'terminal' | 'flow' | 'shield' }) => {
    if (type === 'terminal') return (
        <div className="bg-black/80 rounded-t-xl p-4 border border-white/10 h-full font-mono text-[10px]">
            <div className="flex gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <div className="text-emerald-400">mypass auth --start</div>
            <div className="text-slate-500 mt-1">Initializing topological scan...</div>
            <div className="text-slate-300 mt-1">[OK] Hash valid: 0x82...f9a</div>
        </div>
    );
    if (type === 'flow') return (
        <div className="flex items-center justify-center h-full">
            <div className="relative w-32 h-32">
                <div className="absolute inset-0 border-2 border-dashed border-emerald-500/30 rounded-full animate-spin-slow" />
                <div className="absolute inset-4 border-2 border-emerald-400/50 rounded-full animate-pulse" />
                <div className="absolute inset-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    );
    return (
        <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full translate-y-24" />
            <div className="relative w-40 h-56 bg-slate-900 rounded-2xl border border-white/20 p-4 shadow-2xl translate-y-4">
                <div className="h-2 w-12 bg-white/10 rounded-full mb-6 mx-auto" />
                <div className="space-y-3">
                    <div className="h-1 bg-white/10 rounded-full w-full" />
                    <div className="h-1 bg-white/10 rounded-full w-3/4" />
                    <div className="h-1 bg-white/20 rounded-full w-1/2" />
                </div>
                <div className="mt-12 text-center text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Verified</div>
            </div>
        </div>
    );
};

export const BentoGrid = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-[10px] font-black uppercase tracking-[.4em] text-emerald-400 mb-6">
                        Casos de Uso Enterprise
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                        Onde a Falha não é Opção.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
                    <BentoCard
                        title="Sistemas Financeiros"
                        description="Prevenção de fraudes em transações de alto valor com latência sub-segundo."
                        className="md:col-span-2 md:row-span-1"
                        visual={<MockUI type="shield" />}
                    />
                    <BentoCard
                        title="Infra Crítica"
                        description="Controle de acesso físico e digital em ambientes de segurança nível 4."
                        className="md:col-span-2 md:row-span-2"
                        visual={
                            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-1000 ease-out">
                                <Image
                                    src="/assets/images/trusted-core.png"
                                    alt="Trusted Core Infrastructure"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />
                            </div>
                        }
                    />
                    <BentoCard
                        title="Desenvolvedores"
                        description="Integração via SDKs nativos e APIs REST com documentação abrangente."
                        className="md:col-span-2 md:row-span-1"
                        visual={<MockUI type="terminal" />}
                    />
                </div>
            </div>
        </section>
    );
};
