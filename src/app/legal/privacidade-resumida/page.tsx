import { LegalPageLayout } from "@/components/LegalPageLayout";
import { ShieldCheck, Eye, Search, Lock } from "lucide-react";

export default function PrivacidadeResumida() {
    const cards = [
        {
            icon: Eye,
            title: "O Ponto Inicial",
            desc: "Nós precisamos de permissão. Só analisamos seu rosto e comparamos com seus documentos se você clicar ativamente e nos conceder essa atribuição durante o fluxo (KYC)."
        },
        {
            icon: Search,
            title: "Por que usamos?",
            desc: "Para proteger você. Garantimos que robôs, deepfakes ou dados fotográficos roubados nunca se passem por você nas plataformas das instituições protegidas pela MyPass."
        },
        {
            icon: ShieldCheck,
            title: "Como protegemos?",
            desc: "Quando você tira a 'selfie 3D', nós transformamos as milhões de métricas do seu rosto numa hash cifrada inquebrável. Não guardamos fotos suas em pastas vulneráveis."
        },
        {
            icon: Lock,
            title: "Seus Direitos",
            desc: "Seus dados, suas regras. Você pode nos cobrar auditoria, solicitar portabilidade em JSON ou requerer o seu Direito ao Esquecimento quando quiser via DPO."
        }
    ];

    return (
        <LegalPageLayout
            topic="Privacidade Resumida"
            title="O Essencial Sobre Seus Dados"
            lastUpdated="01 de março de 2026"
        >
            <p className="text-xl text-slate-400 mb-12">
                Nós odiamos juridiquês tanto quanto você. Entenda exatamente como tratamos a sua biometria e a sua identidade, sem jargões.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                {cards.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                        <div key={idx} className="bg-[#0f0f1f] border border-[#1e293b] p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                                <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {card.desc}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-16 text-center border-t border-white/10 pt-12">
                <p className="text-slate-400 text-sm">
                    Acha que precisa de mais detalhes? Sem problemas. <br />
                    Leia nossa <a href="/legal/politica-privacidade" className="text-emerald-400 hover:text-emerald-300 font-bold">Política de Privacidade Jurídica Completa</a>.
                </p>
            </div>

        </LegalPageLayout>
    );
}
