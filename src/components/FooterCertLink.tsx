"use client";

import { useState } from "react";
import { CertificationModal } from "./CertificationModal";

export function FooterCertLink({ certId, label }: { certId: string, label: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="text-sm text-slate-400 cursor-pointer hover:text-cyan-400 transition-colors text-left"
            >
                {label}
            </button>
            <CertificationModal certId={certId} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </li>
    );
}
