"use client";

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Scale, CheckCircle2 } from "lucide-react";

export function LGPDModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button className="text-sm text-slate-500 hover:text-emerald-400 transition-colors flex items-center gap-2 mt-2 cursor-pointer text-left">
                    LGPD Art. 46
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-[#0a0a14] border-[#1e293b] text-white p-0 overflow-hidden">
                <div className="p-8">
                    <DialogHeader className="mb-6">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                            <Scale className="w-6 h-6 text-emerald-400" />
                        </div>
                        <DialogTitle className="text-2xl font-bold text-white tracking-tight">
                            Diretrizes LGPD — Art. 46
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6 text-slate-400 text-sm leading-relaxed">
                        <div className="p-5 rounded-xl border border-white/5 bg-white/5 font-mono text-xs text-slate-300">
                            "Os agentes de tratamento devem adotar medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito."
                        </div>

                        <p>
                            A MyPass atende e excede o exigido pelo Artigo 46 da Lei Geral de Proteção de Dados (LGPD) ao implementar uma arquitetura em que dados biométricos sensíveis nunca são armazenados em sua forma original.
                        </p>

                        <div className="space-y-4 mt-6">
                            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Como a MyPass Implementa:</h4>

                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-white block mb-1">Criptografia One-Way (FaceMap 3D)</strong>
                                    Transformamos a biometria facial em um mapa tridimensional criptografado de forma irreversível. É matematicamente impossível recriar um rosto a partir do mapa armazenado.
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-white block mb-1">Prevenção Anti-Injeção (Liveness)</strong>
                                    O sistema atesta a presença humana em tempo real bloqueando o uso de fotos, vídeos (deepfakes) ou máscaras de silicone, anulando ataques de apresentação de Nível 4 e 5.
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-white block mb-1">Padrão Zero-Trust</strong>
                                    Todos os fluxos são baseados em autenticação mútua e revogação dinâmica sem a necessidade de expor credenciais primárias aos bancos de dados expostos.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1e293b]/30 p-4 border-t border-[#1e293b] flex justify-end">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-colors border border-white/10"
                    >
                        Compreendi
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
