"use client";

import { useState } from "react";
import { certifications } from "@/data/certifications";
import { ShieldCheck, Lock, FileText, ChevronRight } from "lucide-react";
import { CertificationModal } from "./CertificationModal";

interface CertificationBadgeProps {
    certId: string;
    variant?: "badge" | "card" | "link";
    className?: string;
}

export function CertificationBadge({ certId, variant = "badge", className = "" }: CertificationBadgeProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cert = certifications[certId];

    if (!cert) return null;

    const Icon = cert.icon === "Lock" ? Lock : cert.icon === "ShieldCheck" ? ShieldCheck : FileText;

    // Variantes visuais (usado na navbar, footer, etc)
    if (variant === "link") {
        return (
            <>
                <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className={`text-slate-400 hover:text-emerald-400 transition-colors text-sm text-left flex items-center gap-2 cursor-pointer ${className}`}
                >
                    <Icon className="w-4 h-4" style={{ color: cert.accentColor }} />
                    {cert.badge}
                </button >
                <CertificationModal certId={certId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </>
        );
    }

    // Variante Card para a Seção de Compliance
    if (variant === "card") {
        return (
            <>
                <div
                    className={`group relative p-6 bg-[#0a0a14] border border-[#1e293b] rounded-2xl hover:border-slate-700 transition cursor-pointer flex flex-col overflow-hidden ${className}`}
                    onClick={() => setIsModalOpen(true)}
                >
                    {/* Subtle gradient glow effect on absolute background */}
                    <div
                        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{ backgroundColor: cert.accentColor }}
                    />

                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${cert.accentColor}15`, border: `1px solid ${cert.accentColor}30` }}
                    >
                        <Icon className="w-6 h-6" style={{ color: cert.accentColor }} />
                    </div >

                    <h4 className="text-xl font-bold text-white mb-2">{cert.badge}</h4>
                    <p className="text-sm text-slate-400 card-description prose-body mt-3 mb-6 flex-1 line-clamp-3">
                        {cert.resumoExecutivo.split('\n')[0]} {/* Pega apenas primeiro paragrafo para o card */}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium mt-auto transition-colors" style={{ color: cert.accentColor }}>
                        Ver Certificado <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div >
                <CertificationModal certId={certId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </>
        );
    }

    // Variante Badge padrão
    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a14] border border-[#1e293b] hover:border-slate-600 transition group ${className}`}
            >
                <Icon className="w-4 h-4" style={{ color: cert.accentColor }} />
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{cert.badge}</span>
            </button >
            <CertificationModal certId={certId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
