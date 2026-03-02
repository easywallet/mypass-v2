import { LegalPageLayout } from "@/components/LegalPageLayout";
import { Cookie } from "lucide-react";

export default function CookiesPolicy() {
    return (
        <LegalPageLayout
            topic="Gestão de Cookies"
            title="Política de Cookies e Rastreamento Local"
            lastUpdated="01 de março de 2026"
        >
            <p className="text-xl text-slate-400 mb-12">
                Na MyPass, o uso inteligente de estado local e cookies é limitado ao funcionamento lógico da plataforma e à prevenção a abusos (DDoS, tentativas múltiplas de tokenização).
            </p>

            <div className="not-prose bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center mb-12">
                <Cookie className="w-10 h-10 text-emerald-400 flex-shrink-0" />
                <div>
                    <h3 className="text-white font-bold mb-1">Zero Cookies de Marketing</h3>
                    <p className="text-sm text-slate-400 legal-text">
                        Diferente das Big Techs, nós não monitoramos a sua navegação secundária, rastreadores cruzados institucionais (cross-site tracking), nem rodamos scripts do Facebook Pixel ou Google Ads.
                    </p>
                </div>
            </div>

            <h3>Categorias de Cookies Utilizados</h3>

            <div className="overflow-x-auto not-prose my-8">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                        <tr className="border-b border-[#1e293b] text-slate-400 uppercase tracking-widest text-[10px]">
                            <th className="py-4 px-4 font-bold">Categoria</th>
                            <th className="py-4 px-4 font-bold">Propósito</th>
                            <th className="py-4 px-4 font-bold">Duração (TTL)</th>
                            <th className="py-4 px-4 font-bold w-12 text-center">Essencial?</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-300">
                        <tr className="border-b border-[#1e293b]/50 hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4 font-medium text-white">Sessão da API (JWT)</td>
                            <td className="py-4 px-4">Autorização para acesso no Sandbox/B2B</td>
                            <td className="py-4 px-4">Encerramento do Browser</td>
                            <td className="py-4 px-4 text-center text-emerald-400">Sim</td>
                        </tr>
                        <tr className="border-b border-[#1e293b]/50 hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4 font-medium text-white">Consentimento (UI)</td>
                            <td className="py-4 px-4">Lembrar o fechamento do banner de cookies (mypass_cookie_consent)</td>
                            <td className="py-4 px-4">Persistente (6 Meses)</td>
                            <td className="py-4 px-4 text-center text-emerald-400">Sim</td>
                        </tr>
                        <tr className="border-b border-[#1e293b]/50 hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4 font-medium text-white">Device Fingerprint</td>
                            <td className="py-4 px-4">Identificação relacional para Anti-Spoofing de Hardware</td>
                            <td className="py-4 px-4">Sessão da Transação</td>
                            <td className="py-4 px-4 text-center text-emerald-400">Sim</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4 font-medium text-white">Analytics Básica (Vercel)</td>
                            <td className="py-4 px-4">Métricas anônimas de falhas HTTP (500s) e gargalos de UI</td>
                            <td className="py-4 px-4">Apenas Aggregation Node</td>
                            <td className="py-4 px-4 text-center text-slate-500">Opcional</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Como limpar o histórico ou opor autorização</h3>
            <p>
                Sendo a maioria dos cookies "Essenciais" por motivos de cibersegurança e Liveness, desabilitá-los causará falhas de processamento nos validadores FaceTec (Browser/WebView).
                Caso queira forçar a remoção das chaves da sessão, limpe o cache (`Local Storage` e `Cookies`) nativamente na aba de configurações de privacidade do seu navegador (Google Chrome, Firefox ou Safari).
            </p>
        </LegalPageLayout>
    );
}
