"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Code2, ArrowRight } from "lucide-react";

const FormField = ({ label, type = "text", placeholder, options }: { label: string, type?: string, placeholder?: string, options?: string[] }) => (
    <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</label>
        {options ? (
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                <option value="" disabled selected className="bg-slate-900">{placeholder}</option>
                {options.map(opt => <option key={opt} value={opt} className="bg-slate-900">{opt}</option>)}
            </select>
        ) : (
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all font-medium"
            />
        )}
    </div>
);

const CheckboxField = ({ label }: { label: string }) => (
    <label className="flex items-center gap-3 group cursor-pointer">
        <div className="w-5 h-5 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <div className="w-2.5 h-2.5 rounded-sm bg-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity" />
        </div>
        <span className="text-xs text-slate-400 group-hover:text-white transition-colors">{label}</span>
    </label>
);

export const ContactForm = () => {
    const [activeForm, setActiveForm] = useState<'b2b' | 'dev'>('b2b');

    return (
        <section id="contato-enterprise" className="py-34 px-6 relative overflow-hidden bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[10px] font-black uppercase tracking-[.4em] text-emerald-400 mb-6">
                        Get in touch
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                        Vamos Iniciar a Jornada.
                    </h3>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Escolha o canal de atendimento ideal para a sua necessidade e fale com nosso time de especialistas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

                    {/* Left Side: Context & Testimonial */}
                    <div className="flex flex-col justify-center">
                        <div className="space-y-12">
                            <div className="relative glass p-8 rounded-3xl border-l-4 border-l-emerald-400">
                                <p className="text-white text-lg italic mb-8 leading-relaxed">
                                    "A MyPass removeu completamente o risco de Account Takeover na nossa plataforma de Wealth Management. Em menos de 2 segundos, validamos identidades com precisão absoluta."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-emerald-400">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Case disponível mediante NDA</div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-tight">Fintech Tier 1, Brasil</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-3xl font-black text-white mb-2 tracking-tighter flex items-baseline gap-1">
                                        {"<"} 2 <span className="text-sm text-slate-500 uppercase">s</span>
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Auth Speed</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white mb-2 tracking-tighter">100%</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Anti-Injection</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Dual Forms */}
                    <div className="relative group">
                        {/* Form Selection Tabs */}
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => setActiveForm('b2b')}
                                className={`flex-1 py-4 px-6 rounded-2xl border transition-all flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[10px] ${activeForm === 'b2b'
                                        ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-[0_10px_20px_rgba(16,185,129,0.2)]'
                                        : 'bg-white/5 border-white/10 text-slate-500 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <ShieldCheck className="w-4 h-4" />
                                Enterprise (B2B)
                            </button>
                            <button
                                onClick={() => setActiveForm('dev')}
                                className={`flex-1 py-4 px-6 rounded-2xl border transition-all flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[10px] ${activeForm === 'dev'
                                        ? 'bg-cyan-500 border-cyan-400 text-slate-950 shadow-[0_10px_20px_rgba(6,182,212,0.2)]'
                                        : 'bg-white/5 border-white/10 text-slate-500 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <Code2 className="w-4 h-4" />
                                Developers
                            </button>
                        </div>

                        <div className="glass p-10 md:p-12 rounded-[34px] border-white/5 relative">
                            {activeForm === 'b2b' ? (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField label="Nome Completo" placeholder="Ex: João Silva" />
                                        <FormField label="E-mail Corporativo" placeholder="exemplo@empresa.com" type="email" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField label="Empresa" placeholder="Sua organização" />
                                        <FormField label="Cargo" placeholder="Ex: Diretor de Compliance" />
                                    </div>
                                    <FormField
                                        label="Segmento"
                                        placeholder="Selecione o setor"
                                        options={["Fintech", "Saúde", "Eventos", "Varejo", "Educação", "GovTech", "Outro"]}
                                    />
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Mensagem</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Como podemos ajudar sua operação?"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all resize-none"
                                        />
                                    </div>
                                    <Button className="w-full h-14 bg-emerald-500 text-slate-950 font-black rounded-xl hover:bg-emerald-400 transition-all shadow-[0_20px_px_rgba(16,185,129,0.2)] uppercase tracking-widest text-xs">
                                        Solicitar Demo Enterprise
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField label="Nome Completo" placeholder="Ex: João Silva" />
                                        <FormField label="E-mail Corporativo" placeholder="exemplo@empresa.com" type="email" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField label="Empresa" placeholder="Sua organização" />
                                        <FormField label="GitHub Username" placeholder="@username" />
                                    </div>
                                    <FormField
                                        label="Segmento de Aplicação"
                                        placeholder="Setor da aplicação"
                                        options={["Web App", "Mobile Native", "IoT", "Fintech", "Enterprise Internal"]}
                                    />

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Tipo de Integração</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <CheckboxField label="KYC (Onboarding)" />
                                            <CheckboxField label="Pagamento Facial" />
                                            <CheckboxField label="Controle de Acesso" />
                                            <CheckboxField label="Login s/ Senha" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Button className="w-full h-14 bg-cyan-500 text-slate-950 font-black rounded-xl hover:bg-cyan-400 transition-all shadow-[0_20px_40px_rgba(6,182,212,0.2)] uppercase tracking-widest text-xs">
                                            Solicitar Acesso ao Sandbox
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                        <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                            Acesso aprovado em até 1 dia útil. Sem cartão de crédito.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <p className="mt-8 text-center text-[9px] text-slate-600 font-bold uppercase tracking-widest leading-relaxed">
                                Ao enviar, você concorda com nossos Termos de Compliance e <span className="text-emerald-400">LGPD</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
