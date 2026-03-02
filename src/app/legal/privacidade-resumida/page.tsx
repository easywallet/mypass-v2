import { LegalPageLayout } from "@/components/LegalPageLayout";
import { ShieldCheck, Lock, User, Server } from "lucide-react";

export default function PrivacidadeResumida() {
    return (
        <LegalPageLayout
            topic="Resumo de Privacidade"
            title="Resumo de Privacidade"
        >
            <p>
                Versão simplificada da nossa Política de Privacidade. Para a versão completa, acesse <a href="/legal/politica-privacidade">Política de Privacidade</a>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12">

                {/* Card 1 */}
                <div className="p-6 bg-[#0a0a14] border border-[#1e293b] rounded-2xl">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">O que coletamos</h3>
                    <p className="text-slate-400 text-sm m-0">
                        Nome, e-mail, CPF e FaceMap 3D criptografado. Nunca uma foto.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-[#0a0a14] border border-[#1e293b] rounded-2xl">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-violet-500/10 border border-violet-500/30 text-violet-400">
                        <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Por que usamos</h3>
                    <p className="text-slate-400 text-sm m-0">
                        Para verificar sua identidade com segurança em cada autenticação.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-[#0a0a14] border border-[#1e293b] rounded-2xl">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        <User className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Seus direitos</h3>
                    <p className="text-slate-400 text-sm m-0">
                        Acesso, correção, exclusão e portabilidade dos seus dados. Contato: <a href="mailto:dpo@mypass.com.br" className="text-emerald-400">dpo@mypass.com.br</a>
                    </p>
                </div>

                {/* Card 4 */}
                <div className="p-6 bg-[#0a0a14] border border-[#1e293b] rounded-2xl">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-amber-500/10 border border-amber-500/30 text-amber-400">
                        <Server className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Como protegemos</h3>
                    <p className="text-slate-400 text-sm m-0">
                        FaceMap 3D criptografado, certificação Praetorian Level 4 & 5, APCER 0%.
                    </p>
                </div>

            </div>
        </LegalPageLayout>
    );
}
