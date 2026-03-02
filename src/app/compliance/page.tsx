import { ChevronRight, FileText, ArrowRight, ShieldCheck, Landmark, GlobeLock, BookX } from "lucide-react";
import Link from "next/link";

export default function ComplianceGeral() {
    const cards = [
        {
            icon: Landmark,
            color: "text-amber-400",
            bg: "bg-amber-400/10 border-amber-400/20",
            title: "BACEN / SPI",
            desc: "Adequação estrita às normas do Banco Central do Brasil para operação do PIX Biométrico em 2026."
        },
        {
            icon: ShieldCheck,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10 border-emerald-400/20",
            title: "LGPD - Lei 13.709/18",
            desc: "Tratamento de dados sensíveis amparado pelos arts. 11 e 46, com eliminação de vazamentos via hash irreversível."
        },
        {
            icon: GlobeLock,
            color: "text-blue-400",
            bg: "bg-blue-400/10 border-blue-400/20",
            title: "Open Finance (Res. 32/BCB)",
            desc: "Certificação de identidade para compartilhamento autorizado de dados do cliente entre instituições."
        },
        {
            icon: BookX,
            color: "text-purple-400",
            bg: "bg-purple-400/10 border-purple-400/20",
            title: "ISO/IEC 27001",
            desc: "Estrutura nativa balizada no padrão global de Segurança da Informação e Gestão de Risco."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 pt-32 pb-24 relative overflow-hidden selection:bg-cyan-400/30">
            <div className="absolute inset-0 bg-radial-gradient opacity-30" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-12">
                    <Link href="/" className="hover:text-white transition-colors">MyPass</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-cyan-400 pointer-events-none">Institucional</span>
                </nav>

                {/* Hero Section */}
                <div className="max-w-3xl mb-24">
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-8">
                        Compliance e Governança
                    </h1>
                    <p className="text-2xl font-medium text-slate-300 leading-snug">
                        Em identidade digital unificada, trust não é promessa comercial; trust é prova criptográfica e conformidade legal irreversível.
                    </p>
                </div>

                {/* Regulatory Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                    {cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div key={idx} className="bg-[#0a0a14] border border-[#1e293b] p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${card.bg}`}>
                                    <Icon className={`w-7 h-7 ${card.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="bg-[#1e293b]/30 border border-[#1e293b] p-12 rounded-3xl text-center flex flex-col items-center justify-center space-y-8">
                    <FileText className="w-16 h-16 text-cyan-400 opacity-80" />
                    <div className="max-w-xl">
                        <h2 className="text-2xl font-bold text-white mb-3">Relatório Extensivo de Conformidade</h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8">
                            Nossa documentação detalha a criptografia de vetor 3D, armazenamento on-shore de auditoria, certificação Praetorian Level 4/5 e os laudos independentes do PAD Testing NIST. Material restrito para C-Level e DPOs.
                        </p>
                        <a
                            href="mailto:compliance@mypass.com.br"
                            className="inline-flex bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all items-center gap-2"
                        >
                            Solicitar Relatório de Compliance <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
