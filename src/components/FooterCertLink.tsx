"use client";

import { useState } from "react";
import { CertificationModal } from "./CertificationModal";

export function FooterCertLink({ certId, label }: { certId: string, label: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li style={{ marginBottom: '8px' }}>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '13px',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                {label}
            </button>
            <CertificationModal certId={certId} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </li>
    );
}
