"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Terminal, Code2, Globe, Cpu, Smartphone, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

const CodeSnippet = ({ lang }: { lang: 'js' | 'swift' | 'kotlin' }) => {
    const code = {
        js: {
            file: "auth-handler.ts",
            lines: [
                { l: 1, c: "import { MyPassClient } from '@mypass/sdk';", color: "text-purple-400" },
                { l: 2, c: "" },
                { l: 3, c: "const mypass = new MyPassClient({", color: "text-blue-300" },
                { l: 4, c: "  apiKey: process.env.MYPASS_KEY,", color: "text-blue-300" },
                { l: 5, c: "});", color: "text-blue-300" },
                { l: 6, c: "" },
                { l: 7, c: "export const verify = async () => {", color: "text-purple-400" },
                { l: 8, c: "  const session = await mypass.authenticate({", color: "text-slate-300" },
                { l: 9, c: "    liveness: '3D_TOPOLOGICAL',", color: "text-emerald-400" },
                { l: 10, c: "    complexity: 5", color: "text-purple-400" },
                { l: 11, c: "  });", color: "text-slate-300" },
                { l: 12, c: "  return session.isValid;", color: "text-slate-300" },
                { l: 13, c: "};", color: "text-purple-400" }
            ]
        },
        swift: {
            file: "AuthView.swift",
            lines: [
                { l: 1, c: "import MyPassSDK", color: "text-purple-400" },
                { l: 2, c: "" },
                { l: 3, c: "let session = MyPass.Session()", color: "text-blue-300" },
                { l: 4, c: "session.configure { config in", color: "text-blue-300" },
                { l: 5, c: "  config.mode = .faceMap3D", color: "text-emerald-400" },
                { l: 6, c: "  config.vocalAuth = true", color: "text-blue-300" },
                { l: 7, c: "}", color: "text-blue-300" },
                { l: 8, c: "" },
                { l: 9, c: "session.start { result in", color: "text-purple-400" },
                { l: 10, c: "  guard result.isSuccess else { return }", color: "text-slate-300" },
                { l: 11, c: "  self.navigateToDashboard()", color: "text-slate-300" },
                { l: 12, c: "}", color: "text-purple-400" }
            ]
        },
        kotlin: {
            file: "LoginActivity.kt",
            lines: [
                { l: 1, c: "import com.mypass.android.sdk.*", color: "text-purple-400" },
                { l: 2, c: "" },
                { l: 3, c: "val mypass = MyPass.Builder(this)", color: "text-blue-300" },
                { l: 4, c: "  .with3DLiveness()", color: "text-blue-300" },
                { l: 5, c: "  .build()", color: "text-blue-300" },
                { l: 6, c: "" },
                { l: 7, c: "mypass.authenticate { status ->", color: "text-purple-400" },
                { l: 8, c: "  when(status) {", color: "text-slate-300" },
                { l: 9, c: "    is Success -> grantAccess()", color: "text-emerald-400" },
                { l: 10, c: "    is Failure -> showRetry()", color: "text-slate-300" },
                { l: 11, c: "  }", color: "text-slate-300" },
                { l: 12, c: "}", color: "text-purple-400" }
            ]
        }
    };

    const current = code[lang];

    return (
        <div className="bg-[#0d1117] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{current.file}</span>
            </div>
            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                {current.lines.map((line) => (
                    <div key={line.l} className="flex gap-4">
                        <span className="text-slate-600 select-none w-4 text-right">{line.l}</span>
                        <span className={line.color || "text-slate-300"}>{line.c}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const DevPortal = () => {
    const [activeTab, setActiveTab] = useState<'js' | 'swift' | 'kotlin'>('js');

    return (
        <section id="developer-portal" className="py-34 px-6 relative bg-slate-950 overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[140px] -z-10" />
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-21 items-center">

                    <div className="relative">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-8 flex items-center gap-3">
                            <Code2 className="w-4 h-4" />
                            Developer Experience
                        </h2>

                        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-tight">
                            A SDK que os <br />
                            <span className="text-cyan-400">Devs Amam.</span>
                        </h3>

                        <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl">
                            Elimine a complexidade da biometria 3D. Nossa arquitetura foi desenhada por engenheiros, para engenheiros. Integre segurança de nível bancário em minutos.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-13">
                            {[
                                { icon: <Globe className="w-4 h-4" />, title: "Web (React/Vue/TS)", desc: "SDK completa com hooks e gerenciamento de estado." },
                                { icon: <Smartphone className="w-4 h-4" />, title: "Native iOS & Android", desc: "Aproveite 100% da performance do hardware facial." },
                                { icon: <Cpu className="w-4 h-4" />, title: "Edge Processing", desc: "Criptografia local antes de qualquer envio de dados." },
                                { icon: <Lock className="w-4 h-4" />, title: "Mutual Auth (mTLS)", desc: "Segurança total no canal de comunicação." },
                            ].map((item, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Button asChild className="bg-white text-slate-950 hover:bg-slate-200 font-black uppercase tracking-widest text-xs h-14 px-10 rounded-2xl w-full sm:w-auto mt-4 sm:mt-0">
                                <a href="#contato-enterprise">
                                    Acessar Sandbox Dev
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5 font-black uppercase tracking-widest text-xs h-14 px-10 rounded-2xl w-full sm:w-auto mt-4 sm:mt-0">
                                <a href="#">
                                    Documentação API
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-cyan-500/10 blur-[80px] -z-10 animate-pulse" />

                        {/* Tabbed Terminal Interface */}
                        <div className="relative glass rounded-[34px] border-white/10 overflow-hidden shadow-2xl">
                            <div className="flex items-center bg-white/5 border-b border-white/10 px-6 py-4">
                                <div className="flex gap-5 mr-auto">
                                    {(['js', 'swift', 'kotlin'] as const).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-500 hover:text-white'
                                                }`}
                                        >
                                            {tab === 'js' ? 'TypeScript' : tab === 'swift' ? 'Swift (iOS)' : 'Kotlin (Android)'}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                                    <Terminal className="w-3 h-3" />
                                    <span>Interactive Playground</span>
                                </div>
                            </div>

                            <div className="p-1">
                                <CodeSnippet lang={activeTab} />
                            </div>

                            {/* Status Bar */}
                            <div className="px-6 py-4 bg-black/40 border-t border-white/5 flex flex-wrap gap-6 items-center">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">v2.4.0 Stable</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sandbox Online</span>
                                </div>
                                <a href="#developer-portal" className="ml-auto text-cyan-400 text-[10px] font-bold italic hover:underline">
                                    #developer-portal
                                </a>
                            </div>
                        </div>

                        {/* Floating Fibonacci Badge */}
                        <div className="absolute top-1/2 -right-8 glass p-6 rounded-3xl shadow-2xl border-white/10 backdrop-blur-xl translate-y-12 animate-float hidden md:block">
                            <div className="space-y-5">
                                <div className="text-[8px] font-black text-cyan-400 uppercase tracking-[0.2em]">Security Audit</div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="text-xs font-bold text-white tracking-tight">Zero-Trust Verified</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="text-xs font-bold text-white tracking-tight">ISO 30107-3 compliant</span>
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
