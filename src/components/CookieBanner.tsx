"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem("mypass_cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("mypass_cookie_consent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 inset-x-0 z-[100] p-4 bg-slate-950/90 backdrop-blur-xl border-t border-white/10 sm:flex sm:items-center sm:justify-between px-6 py-5">
            <div className="flex-1 pr-6 mb-4 sm:mb-0">
                <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                    A MyPass utiliza estritamente cookies essenciais e de segurança para garantir a integridade da nossa plataforma e a sua experiência.
                    Nenhum dado biométrico é rastreado ou compartilhado. Ao continuar navegando, você concorda com a nossa{" "}
                    <Link href="/legal/cookies" className="text-emerald-400 hover:underline inline-block mt-1 sm:mt-0 font-medium">
                        Política de Cookies
                    </Link>
                    .
                </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
                <button
                    onClick={handleAccept}
                    className="bg-white text-slate-950 px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-colors w-full sm:w-auto"
                >
                    Aceitar
                </button>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-slate-400 hover:text-white p-2"
                    aria-label="Fechar"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
