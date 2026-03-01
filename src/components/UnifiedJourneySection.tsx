"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScanFace, KeyRound, ShieldCheck, XCircle, CheckCircle2 } from "lucide-react";

export const UnifiedJourneySection = () => {
    return (
        <section id="jornada" className="py-24 px-6 relative overflow-hidden bg-slate-950">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                        Uma Identidade. <span className="text-emerald-400">Infinitas Portas.</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
                        Hoje, você repete o mesmo processo de verificação a cada nova instituição.
                        Com a MyPass, você valida uma vez. O resto é automático — e impenetrável.
                    </p>
                </div>

                {/* Comparison Panels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {/* Painel Esquerdo - Como é Hoje */}
                    <Card className="bg-red-950/20 border-red-500/20 backdrop-blur-sm group hover:border-red-500/40 transition-all duration-500">
                        <CardHeader>
                            <div className="flex items-center gap-3 text-red-400 mb-2">
                                <XCircle className="w-6 h-6" />
                                <span className="text-xs font-black uppercase tracking-[0.2em]">Como é Hoje</span>
                            </div>
                            <CardTitle className="text-2xl text-white">Fragmentação e Risco</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {[
                                    "Foto do RG enviada para cada instituição",
                                    "Nova selfie a cada onboarding",
                                    "Dados expostos em múltiplos bancos de dados",
                                    "Processo repetido no banco, hospital, escola, seguradora"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Painel Direito - Com MyPass */}
                    <Card className="bg-emerald-950/20 border-emerald-500/20 backdrop-blur-sm group hover:border-emerald-500/40 transition-all duration-500 shadow-[0_0_50px_rgba(16,185,129,0.05)]">
                        <CardHeader>
                            <div className="flex items-center gap-3 text-emerald-400 mb-2">
                                <CheckCircle2 className="w-6 h-6" />
                                <span className="text-xs font-black uppercase tracking-[0.2em]">Com MyPass</span>
                            </div>
                            <CardTitle className="text-2xl text-white">Soberania e Agilidade</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {[
                                    "Uma validação biométrica 3D única",
                                    "FaceMap criptografado — nunca uma foto",
                                    "Token compartilhado com consentimento expresso",
                                    "Reconhecido em qualquer instituição parceira"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-emerald-100/80 text-sm">
                                        <CheckCircle2 className="mt-1 w-4 h-4 text-emerald-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Timeline Flow */}
                <div className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connection Lines (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-[34px] glass border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_13px_34px_rgba(16,185,129,0.1)]">
                                <ScanFace className="w-10 h-10 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Valide Uma Vez</h3>
                            <p className="text-sm text-slate-500 leading-relaxed px-4">
                                Selfie 3D + documentos no app MyPass
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-[34px] glass border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_13px_34px_rgba(16,185,129,0.1)]">
                                <KeyRound className="w-10 h-10 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Gere Seu Token</h3>
                            <p className="text-sm text-slate-500 leading-relaxed px-4">
                                Mapa matemático criptografado. Zero dado exposto.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-[34px] glass border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_13px_34px_rgba(16,185,129,0.1)]">
                                <ShieldCheck className="w-10 h-10 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Use em Qualquer Lugar</h3>
                            <p className="text-sm text-slate-500 leading-relaxed px-4">
                                Banco · Hospital · Evento · Escola · Varejo
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="flex justify-center">
                    <Button
                        asChild
                        size="lg"
                        className="h-auto py-5 px-10 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base rounded-xl transition-all duration-300 shadow-[0_20px_50px_rgba(16,185,129,0.2)] hover:scale-105"
                    >
                        <a href="#contato-enterprise">Quero Eliminar a Fricção do Meu Negócio</a>
                    </Button>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
        </section>
    );
};
