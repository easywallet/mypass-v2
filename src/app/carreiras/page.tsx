import { ChevronRight, ArrowRight, Code2, Smartphone, Building2 } from "lucide-react";
import Link from "next/link";

export default function Carreiras() {
    const vagas = [
        {
            icon: Code2,
            id: "eng-sec",
            titulo: "Engenheiro(a) de Segurança",
            stack: "Node.js / TypeScript / EdDSA",
            tag: "Remoto (Brasil)"
        },
        {
            icon: Smartphone,
            id: "eng-mob",
            titulo: "Engenheiro(a) Mobile",
            stack: "iOS / Android / Capacitor",
            tag: "Híbrido (SP)"
        },
        {
            icon: Building2,
            id: "exec-contas",
            titulo: "Executivo(a) de Contas Enterprise",
            stack: "Vendas B2B / C-Level",
            tag: "Remoto (Brasil)"
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
                        Carreiras
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium text-cyan-400 mb-6 leading-snug">
                        Construa a infraestrutura de identidade do Brasil conosco.
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                        Procuramos talentos obcecados por segurança, arquiteturas resilientes e código impecável. Se você se recusa a entregar mediocridades e quer erradicar ataques de injeção e account takeover em escala nacional, o seu lugar é aqui.
                    </p>
                </div>

                {/* Glassmorphism Title */}
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">Vagas Abertas (Q1 2026)</h2>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-800 px-3 py-1 rounded-full">{vagas.length} posições</span>
                </div>

                {/* Vagas List */}
                <div className="space-y-4 mb-24">
                    {vagas.map((vaga) => {
                        const Icon = vaga.icon;
                        return (
                            <div key={vaga.id} className="bg-[#0f172a] hover:bg-[#1e293b] border border-[#1e293b] p-6 md:p-8 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-cyan-950 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">{vaga.titulo}</h3>
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="text-cyan-400 font-medium">{vaga.stack}</span>
                                            <span className="text-slate-600">&middot;</span>
                                            <span className="text-slate-400">{vaga.tag}</span>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={`mailto:carreiras@mypass.com.br?subject=Candidatura — ${vaga.titulo}`}
                                    className="w-full md:w-auto text-center md:opacity-0 group-hover:opacity-100 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 flex-shrink-0"
                                >
                                    Candidatar-se <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
