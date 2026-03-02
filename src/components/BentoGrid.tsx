"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight, Landmark, Hospital, ShoppingBag, Music, GraduationCap, ShieldCheck } from "lucide-react";

interface BentoCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    category: string;
    className?: string;
    ctaText?: string;
}

const BentoCard = ({ title, description, icon, category, className, ctaText = "Saber Mais" }: BentoCardProps) => (
    <div className={`group relative glass p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10 flex flex-col h-full ${className}`}>
        <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-3 text-emerald-400 mb-6 font-black uppercase tracking-[0.2em] text-[10px]">
                {icon}
                <span>{category}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{title}</h3>
            <p className="text-sm text-slate-400 card-description mt-2 mb-8 flex-grow">{description}</p>

            <Button
                variant="ghost"
                asChild
                className="group/btn w-fit p-0 h-auto text-emerald-400 hover:text-emerald-300 hover:bg-transparent font-bold text-sm flex items-center gap-2"
            >
                <a href="#contato-enterprise">
                    {ctaText}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
            </Button>
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
);

export const BentoGrid = () => {
    const cases = [
        {
            title: "Fintechs & Bancos",
            description: "Adequação total ao roadmap do PIX Biométrico 2026. Elimine o 'Account Takeover' com validação Nível 4.",
            category: "Setor Financeiro",
            icon: <Landmark className="w-4 h-4" />,
            className: "md:col-span-2",
            ctaText: "Solicitar Demo Enterprise"
        },
        {
            title: "Hospitais & Saúde",
            description: "KYC unificado para pacientes. Reduza fraudes em reembolsos e garanta a integridade do prontuário eletrônico.",
            category: "Healthcare",
            icon: <Hospital className="w-4 h-4" />,
            className: "md:col-span-2",
            ctaText: "Falar com Especialista"
        },
        {
            title: "Varejo & E-commerce",
            description: "Check-out biométrico sem fricção. Aumente a conversão eliminando senhas e reduza o chargeback em 99%.",
            category: "Varejo Digital",
            icon: <ShoppingBag className="w-4 h-4" />,
            className: "md:col-span-1 md:row-span-1",
            ctaText: "Saber Mais"
        },
        {
            title: "Grandes Eventos",
            description: "Acesso a estádios e festivais com 0% APCER. Elimine o cambismo e filas com o FaceMap 3D.",
            category: "Entretenimento",
            icon: <Music className="w-4 h-4" />,
            className: "md:col-span-2 md:row-span-1",
            ctaText: "Falar com Especialista"
        },
        {
            title: "Escolas & EdTechs",
            description: "Presença digital garantida e acesso físico controlado. Segurança máxima para alunos e professores.",
            category: "Educação",
            icon: <GraduationCap className="w-4 h-4" />,
            className: "md:col-span-1 md:row-span-1",
            ctaText: "Saber Mais"
        },
        {
            title: "Governo & GovTech",
            description: "Identidade Soberana para serviços públicos. Redução de custos operacionais e eliminação de duplicidades.",
            category: "Setor Público",
            icon: <ShieldCheck className="w-4 h-4" />,
            className: "md:col-span-4",
            ctaText: "Agendar Consultiva"
        }
    ];

    return (
        <section id="casos-de-uso" className="py-24 px-6 relative bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-[10px] font-black uppercase tracking-[.4em] text-emerald-400 mb-6">
                        Casos de Uso Enterprise
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-tight">
                        A Proteção que o seu <br className="hidden md:block" />
                        <span className="text-gradient">Segmento Exige.</span>
                    </h3>
                    <p className="max-w-2xl mx-auto text-slate-400">
                        A MyPass adapta-se às camadas de segurança mais críticas de cada indústria,
                        garantindo confiança onde a falha não é uma opção.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
                    {cases.map((item, index) => (
                        <BentoCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
