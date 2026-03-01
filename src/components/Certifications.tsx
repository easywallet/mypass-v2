"use client";

import React from 'react';
import Image from 'next/image';

const CertificationCard = ({ title, subtitle, badgePath, level }: { title: string, subtitle: string, badgePath: string, level?: string }) => (
    <div className="group relative glass p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:bg-white/10 border-white/10 hover:border-emerald-500/30">
        <div className="absolute top-0 right-0 p-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-ping" />
            </div>
        </div>

        <div className="mb-8 relative h-16 w-full flex items-center">
            {/* Fallback to text if image fails or path is wrong */}
            <Image
                src={badgePath}
                alt={title}
                width={200}
                height={60}
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
            />
        </div>

        <div className="space-y-3">
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
                {subtitle}
            </p>
            {level && (
                <div className="inline-block mt-4 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] uppercase font-black tracking-widest text-emerald-400">
                    Certified {level}
                </div>
            )}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
);

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <CertificationCard
                        title="Praetorian Security"
                        subtitle="Certificação máxima contra ataques de injeção e bypass biométrico (Level 4 & 5)."
                        badgePath="/assets/certificates/praetorian.png"
                        level="LEVEL 4 & 5"
                    />
                    <CertificationCard
                        title="iBeta Quality Assurance"
                        subtitle="Conformidade total com os padrões ISO 30107-3 para detecção de ataques de apresentação (PAD)."
                        badgePath="/assets/certificates/ibeta.png"
                        level="LEVEL 2 COMPLIANT"
                    />
                </div>

                <div className="mt-16 glass p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-emerald-500/10">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04logaM12 21.355r-1.188-1.108C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.75L12 21.35z" />
                            </svg>
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
