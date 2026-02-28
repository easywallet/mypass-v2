"use client";

import React from 'react';

const FormField = ({ label, type = "text", placeholder }: { label: string, type?: string, placeholder: string }) => (
    <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
        />
    </div>
);

export const ContactForm = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

                    <div className="flex flex-col justify-center">
                        <h2 className="text-[10px] font-black uppercase tracking-[.4em] text-emerald-400 mb-6">
                            Enterprise Collaboration
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-8 max-w-lg">
                            Pronto para Escalar sua Segurança?
                        </h3>

                        <div className="space-y-12">
                            <div className="relative glass p-8 rounded-3xl border-l-4 border-l-emerald-400">
                                <p className="text-white text-lg italic mb-6 leading-relaxed">
                                    "A MyPass removeu completamente o risco de Account Takeover na nossa plataforma de Wealth Management. Em menos de 2 segundos, validamos identidades com precisão absoluta."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10" />
                                    <div>
                                        <div className="text-sm font-bold text-white">Chief Information Security Officer</div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-tight">Fintech Tier 1</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-3xl font-black text-white mb-1 tracking-tighter">{"<"} 2s</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Auth Speed</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white mb-1 tracking-tighter">0%</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Injection Bypass</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-10 md:p-12 rounded-3xl border-white/5 relative">
                        <div className="absolute top-0 right-0 p-8">
                            <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] uppercase font-black tracking-widest text-emerald-400">
                                Priority Queue
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField label="Nome Completo" placeholder="Ex: João Silva" />
                                <FormField label="E-mail Corporativo" placeholder="exemplo@empresa.com" type="email" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField label="Cargo / Função" placeholder="Ex: Head de Engenharia" />
                                <FormField label="Link LinkedIn ou GitHub" placeholder="linkedin.com/in/..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Escopo do Projeto</label>
                                <textarea
                                    rows={4}
                                    placeholder="Descreva brevemente o volume de usuários e requisitos de conformidade..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all resize-none"
                                />
                            </div>

                            <button className="w-full py-5 bg-emerald-500 text-slate-950 font-black rounded-xl hover:bg-emerald-400 transition-all shadow-[0_20px_40px_rgba(16,185,129,0.2)] uppercase tracking-widest text-sm">
                                Enviar Documentação de Integração
                            </button>

                            <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                                Ao enviar, você concorda com nossos termos de compliance e GDPR.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
