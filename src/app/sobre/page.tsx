import { ChevronRight, ArrowRight, Fingerprint, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Sobre() {
    const pilares = [
        {
            icon: Fingerprint,
            title: "Biometria 3D Nativa",
            desc: "Autenticação via FaceMap com detecção ativa de vivacidade em milissegundos."
        },
        {
            icon: Zap,
            title: "Tokenização de Sessão",
            desc: "Sessões efêmeras e criptografia militar de ponta a ponta sem senhas vulneráveis."
        },
        {
            icon: Shield,
            title: "KYC Universal Portável",
            desc: "Onboarding definitivo que viaja com o usuário por toda a rede de parcerias da MyPass."
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
                        Sobre a MyPass
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium text-cyan-400 mb-6 leading-snug">
                        Infraestrutura de identidade soberana para o mercado brasileiro.
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                        Nascemos para erradicar fraudes de injeção em massa, vazamentos de documentos e senhas copiáveis. Construímos o barramento definitivo de prova de vida em território americano, mas desenhado para as complexidades institucionais, geográficas e regulatórias do Brasil.
                    </p>
                </div>

                {/* Pilares */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {pilares.map((pilar, idx) => {
                        const Icon = pilar.icon;
                        return (
                            <div key={idx} className="bg-[#0f172a]/50 border border-[#1e293b] p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{pilar.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{pilar.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/20 p-12 rounded-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-3">Junte-se ao ecossistema.</h2>
                        <p className="text-slate-400 text-lg">Descubra como blindar a sua operação financeira.</p>
                    </div>
                    <a shrink-0
                        href="mailto:contato@mypass.com.br"
                        className="flex-shrink-0 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 flex items-center justify-center gap-2"
                    >
                        Falar com a equipe <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </div>
    );
}
