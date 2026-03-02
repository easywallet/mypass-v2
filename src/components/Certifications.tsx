"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

import { CertificationBadge } from './CertificationBadge';

export const Certifications = () => {
    return (
        <section className="py-24 px-6 bg-slate-950/50 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-[10px] font-black uppercase tracking-[.4em] text-emerald-400 mb-6">
                        Compliance & Security Standards
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter max-w-2xl">
                            A Única Tecnologia do Mundo Certificada contra Ataques de Injeção Nível 4 e 5.
                        </h3>
                        <p className="text-slate-400 max-w-md text-lg leading-relaxed border-l-2 border-emerald-500/30 pl-6">
                            A MyPass é impulsionada pela tecnologia Praetorian Security com 0% APCER, estabelecendo o padrão ouro global.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    <CertificationBadge certId="praetorian-level-4" variant="card" className="h-full" />
                    <CertificationBadge certId="praetorian-blackbox" variant="card" className="h-full" />
                    <CertificationBadge certId="ibeta-level-2" variant="card" className="h-full" />
                    <CertificationBadge certId="ibeta-level-1" variant="card" className="h-full" />
                </div>

                <div className="mt-16 glass p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-emerald-500/10">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                            <ShieldCheck className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">Auditoria Praetorian Security</h4>
                            <p className="text-slate-400 text-sm">Resiliência absoluta contra ataques injetados de Nível 4 e 5.</p>
                        </div>
                    </div>
                    <a href="#contato-enterprise" className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold rounded-lg hover:bg-emerald-500/20 transition-all">
                        Solicitar Certificado via Demo
                    </a>
                </div>
            </div>
        </section>
    );
};
