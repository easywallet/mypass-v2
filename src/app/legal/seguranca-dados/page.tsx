import { LegalPageLayout } from "@/components/LegalPageLayout";
import { ShieldAlert, Bug, Cpu, Server } from "lucide-react";

export default function SegurancaDados() {
    return (
        <LegalPageLayout
            topic="Segurança de Dados"
            title="Arquitetura de Defesa e Criptografia MyPass"
            lastUpdated="01 de março de 2026"
        >
            <p className="text-xl text-slate-400 mb-12">
                A MyPass não é apenas uma interface; é uma infraestrutura criptográfica militar. Entenda as camadas técnicas que garantem a segurança do maior sistema de identidade soberana do país.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                <div className="bg-[#0f0f1f] border border-[#1e293b] p-8 rounded-2xl relative overflow-hidden">
                    <Cpu className="w-10 h-10 text-emerald-400 mb-6 relative z-10" />
                    <h3 className="text-xl font-bold text-white mb-3 relative z-10">O Motor FaceMap 3D™</h3>
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10 legal-text">
                        A FaceTec abstrai a imagem da câmera em tempo real para uma malha 3D. O processamento gera um vetor alfanumérico irreversível. A engenharia reversa para obter um rosto plano a partir de um FaceMap é matematicamente impossível.
                    </p>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
                </div>

                <div className="bg-[#0f0f1f] border border-[#1e293b] p-8 rounded-2xl relative overflow-hidden">
                    <Bug className="w-10 h-10 text-emerald-400 mb-6 relative z-10" />
                    <h3 className="text-xl font-bold text-white mb-3 relative z-10">Programa de Anti-Spoofing ($600k)</h3>
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10 legal-text">
                        Nossa suíte herda o robusto programa de Bug Bounty da FaceTec de 600 mil dólares. Hackers globais testam a barreira Liveness diariamente. A taxa de PAD (Presentation Attack Detection) da MyPass é certificadamente zero para artefatos 2D e 3D.
                    </p>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
                </div>
            </div>

            <div className="prose-h3:mt-0">
                <h3>Certificações de Laboratório Independente (iBeta NVLAP)</h3>
                <p>
                    O core biométrico utilizado pela MyPass foi testado conclusivamente pelas baterias NIST (National Institute of Standards and Technology). No iBeta Level 1 e Level 2, os testes envolveram ataques passivos, vídeos de alta resolução, máscaras flexíveis e avatares hiper-realistas. A taxa False Acceptance Rate (FAR) para injeções foi comprovadamente de 0%.
                </p>

                <h3>Isolamento de Infraestrutura Nacional (Data Residency)</h3>
                <div className="not-prose bg-[#1e293b]/30 border border-[#1e293b] rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center my-8">
                    <div className="flex-shrink-0">
                        <Server className="w-12 h-12 text-slate-500" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-2">Cluster 100% On-Shore (Brasil)</h4>
                        <p className="text-slate-400 text-sm legal-text">
                            Toda a malha de autenticação API da MyPass, as tabelas de referência temporal e o processamento de Liveness Active Edge ocorrem em data centers em território nacional, erradicando o risco de soberania e obedecendo o princípio de territorialidade exigido por instituições governamentais e financeiras de altíssimo bloqueio.
                        </p>
                    </div>
                </div>

                <h3>Gestão de Sessão Ephemera</h3>
                <p>
                    Os tokens de autenticação gerados pelo Sandbox e pelo cluster Enterprise são <em>JWT (JSON Web Tokens)</em> assinados em curvas elípticas EdDSA. As sessões têm "Time-to-Live" restrito, e processos contínuos de verificação de revogação monitoram qualquer anomalia originária dos IP's cliente, garantindo encerramento severo ao detectar exfiltração lateral ou mudança abrupta de Fingerprint de Dispositivo.
                </p>
            </div>

        </LegalPageLayout>
    );
}
