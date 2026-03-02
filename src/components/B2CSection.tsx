import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint } from "lucide-react";

export const B2CSection = () => {
    return (
        <section id="cidadão" className="py-24 px-6 relative overflow-hidden bg-slate-950">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-widest mb-4">
                    <Fingerprint className="w-3.5 h-3.5" />
                    Para o Cidadão
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight max-w-3xl mx-auto">
                    Senhas são roubadas. Documentos são falsificados. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                        Você é único.
                    </span>
                </h2>

                <p className="text-base text-slate-300 leading-relaxed text-justify max-w-2xl mx-auto pb-6">
                    A MyPass não guarda uma foto sua. Guarda um mapa matemático 3D criptografado — seu <strong className="text-white">FaceMap</strong>. Matematicamente inútil para hackers. Insubstituível para você.
                </p>

                <Button asChild className="bg-violet-600 hover:bg-violet-500 text-white font-black uppercase tracking-widest text-xs h-14 px-10 rounded-2xl shadow-[0_10px_30px_rgba(124,58,237,0.3)] transition-all hover:scale-105 active:scale-95 duration-300">
                    <a href="#jornada">
                        Entender Como Funciona
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </Button>
            </div>
        </section>
    );
};
