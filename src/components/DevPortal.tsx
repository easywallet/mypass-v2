"use client";

import React from 'react';

const CodeSnippet = () => (
    <div className="bg-[#0d1117] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[10px] text-slate-500 font-mono">auth-handler.ts</span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed">
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">1</span>
                <span className="text-purple-400">import</span> {"{"} <span className="text-blue-300">MyPassClient</span> {"}"} <span className="text-purple-400">from</span> <span className="text-emerald-400">'@mypass/sdk'</span>;
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">2</span>
                <span>&nbsp;</span>
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">3</span>
                <span className="text-purple-400">const</span> <span className="text-blue-300">mypass</span> = <span className="text-purple-400">new</span> <span className="text-yellow-200">MyPassClient</span>({"{"}
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">4</span>
                <span>&nbsp;&nbsp;<span className="text-blue-300">apiKey</span>: <span className="text-purple-400">process</span>.<span className="text-blue-300">env</span>.<span className="text-blue-300">MYPASS_KEY</span>,</span>
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">5</span>
                <span>{"}"});</span>
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">6</span>
                <span>&nbsp;</span>
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">7</span>
                <span className="text-purple-400">export const</span> <span className="text-blue-300">verifySession</span> = <span className="text-purple-400">async</span> () ={">"} {"{"}
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">8</span>
                <span>&nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-slate-300">session</span> = <span className="text-purple-400">await</span> <span className="text-blue-300">mypass</span>.<span className="text-yellow-200">authenticate</span>({"{"}</span>
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">9</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">liveness</span>: <span className="text-emerald-400">'3D_TOPOLOGICAL'</span>,</span>
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">10</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">complexity</span>: <span className="text-purple-400">5</span></span>
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">11</span>
                <span>&nbsp;&nbsp;{"}"});</span>
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">12</span>
                <span>&nbsp;</span>
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">13</span>
                <span>&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-slate-300">session</span>.<span className="text-blue-300">isValid</span>;</span>
            </div>
            <div className="flex gap-4">
                <span className="text-slate-600 select-none">14</span>
                <span>{"}"};</span>
            </div>
        </div>
    </div>
);

export const DevPortal = () => {
    return (
        <section className="py-24 px-6 relative">
            {/* Background accent */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-[10px] font-black uppercase tracking-[.4em] text-cyan-400 mb-6">
                            Developer Experience (DevEx)
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-8 max-w-lg">
                            Integração via API em menos de 10 linhas.
                        </h3>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
                            Nossa SDK foi desenhada para desenvolvedores que exigem performance e segurança
                            sem sacrificar a simplicidade. Zero-Trust de ponta a ponta.
                        </p>

                        <ul className="space-y-6 mb-12">
                            {[
                                { title: 'RESTful APIs', desc: 'Endpoints modernos para gestão de sessões e usuários.' },
                                { title: 'SDKs Nativos', desc: 'Bibliotecas otimizadas para iOS, Android e Web.' },
                                { title: 'Zero-Trust Architecture', desc: 'Validação mútua de certificados em cada chamada.' },
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                        <p className="text-slate-500 text-xs">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="p-1 glass rounded-2xl inline-block group">
                            <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center gap-3">
                                Solicitar API Keys de Sandbox
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                        <p className="mt-4 text-[10px] text-slate-600 font-bold uppercase tracking-widest pl-2">
                            Requer e-mail corporativo & Perfil GitHub
                        </p>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl -z-10 animate-pulse" />
                            <CodeSnippet />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl shadow-2xl animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center">
                                        <span className="text-emerald-400 font-mono text-xs font-bold">ms</span>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Latency</div>
                                        <div className="text-sm font-black text-white">{"<"} 240ms</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
