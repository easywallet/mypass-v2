import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function PoliticaPrivacidade() {
    return (
        <LegalPageLayout
            topic="Política de Privacidade"
            title="Política de Privacidade"
            lastUpdated="01 de março de 2026"
        >
            <ol className="space-y-12 list-none pl-0">

                {/* Seção 1 */}
                <li>
                    <h2 className="flex items-center gap-3">
                        <span className="text-emerald-400 font-mono text-sm">01.</span>
                        Identificação do Controlador
                    </h2>
                    <p>
                        A <strong>MyPass Identidade Digital Ltda.</strong> atua como Controladora dos dados pessoais coletados durante a navegação e autenticação em nossa infraestrutura. Nosso compromisso é com o Privacy by Design, assegurando que o tratamento de dados ocorra de forma transparente e em estrita conformidade com a legislação vigente.
                    </p>
                    <ul className="list-disc pl-5 mt-4">
                        <li><strong>Contato Oficial (DPO):</strong> <a href="mailto:dpo@mypass.com.br">dpo@mypass.com.br</a></li>
                    </ul>
                </li>

                {/* Seção 2 */}
                <li>
                    <h2 className="flex items-center gap-3">
                        <span className="text-emerald-400 font-mono text-sm">02.</span>
                        Dados Coletados e Finalidade
                    </h2>
                    <p>
                        Coletamos estritamente o necessário para fornecimento da nossa infraestrutura ZTNA (Zero Trust Network Access) e validação de identidade:
                    </p>
                    <ul className="list-disc pl-5">
                        <li><strong>Dados de identificação:</strong> Nome completo, CPF e E-mail corporativo.</li>
                        <li><strong>Dados biométricos avançados:</strong> Leitura facial transformada em FaceMap 3D (criptografia irreversível).</li>
                        <li><strong>Dados de acesso:</strong> Logs de auditoria, metadados de dispositivo e verificação de vivacidade (Liveness).</li>
                    </ul>
                    <p className="mt-4 legal-text">
                        <strong>Finalidade:</strong> Execução de processos de KYC (Know Your Customer), autenticação contínua e prevenção massiva contra fraudes de injeção e Account Takeover.
                    </p>
                </li>

                {/* Seção 3 */}
                <li>
                    <h2 className="flex items-center gap-3">
                        <span className="text-emerald-400 font-mono text-sm">03.</span>
                        Base Legal (Art. 7º e Art. 11 da LGPD)
                    </h2>
                    <p>
                        O tratamento de dados, incluindo dados pessoais sensíveis (biometria), é fundamentado de forma inequívoca nos seguintes incisos legais:
                    </p>
                    <ul className="list-disc pl-5">
                        <li><strong>Consentimento (Art. 11, I):</strong> Autorização expressa e destacada pelo titular antes do processamento do FaceMap.</li>
                        <li><strong>Prevenção à Fraude (Art. 11, II, 'g'):</strong> Para garantia da segurança do titular e segurança sistêmica em processos de autenticação eletrônica.</li>
                        <li><strong>Obrigação Legal:</strong> Cumprimento de normativas de rastreabilidade (BACEN/SPI).</li>
                    </ul>
                </li>

                {/* Seção 4 - Card Destaque Ciano (Art. 46) */}
                <li>
                    <h2 className="flex items-center gap-3">
                        <span className="text-cyan-400 font-mono text-sm">04.</span>
                        Conformidade Estrita ao Artigo 46 (LGPD)
                    </h2>
                    <div className="bg-[#0f172a] border-l-4 border-cyan-400 p-6 rounded-r-xl my-6">
                        <p className="font-mono text-xs text-cyan-200/70 mb-4">
                            "Os agentes de tratamento devem adotar medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados..."
                        </p>
                        <p className="text-white font-medium mb-3">Como a MyPass executa esta exigência tecnicamente:</p>
                        <ul className="list-disc pl-5 text-sm space-y-2 text-slate-300 m-0">
                            <li><strong>(a) FaceMap 3D:</strong> O scan facial gera apenas um vetor matemático criptografado. É algoritmicamente irreversível para uma imagem original.</li>
                            <li><strong>(b) Autenticação Efêmera:</strong> Os tokens de sessão possuem TTL (Time-To-Live) ultracurto.</li>
                            <li><strong>(c) Zero Armazenamento de Imagem:</strong> Nenhuma imagem fotográfica em formato legível (plain text/JPEG/PNG) é salva em nossos clusters de dados.</li>
                            <li><strong>(d) Certificação iBeta/Praetorian:</strong> Motor certificado internacionalmente para PAD Level 4 & 5.</li>
                        </ul>
                    </div>
                </li>

                {/* Seção 5 */}
                <li>
                    <h2 className="flex items-center gap-3">
                        <span className="text-emerald-400 font-mono text-sm">05.</span>
                        Direitos do Titular (Art. 18)
                    </h2>
                    <p>
                        Garantimos o controle pleno sobre os seus dados. A qualquer momento, você pode requisitar:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Confirmação da existência de tratamento;</li>
                        <li>Acesso aos dados e portabilidade estruturada;</li>
                        <li>Correção de dados incompletos ou inexatos;</li>
                        <li>Anonimização, bloqueio ou eliminação do armazenamento ativo.</li>
                    </ul>
                    <p className="mt-4 legal-text">
                        Para exercer seus direitos instantaneamente, acesse nosso <a href="/legal/direitos-dos-titulares">Portal de Solicitações LGPD</a>.
                    </p>
                </li>

                {/* Seção 6 */}
                <li>
                    <h2 className="flex items-center gap-3">
                        <span className="text-emerald-400 font-mono text-sm">06.</span>
                        Compartilhamento de Dados
                    </h2>
                    <p>
                        Em premissa <strong>Zero-Trust</strong>, a MyPass não comercializa, alquila ou compartilha seus dados biométricos essenciais com terceiros. O compartilhamento ocorre apenas de forma transacional criptografada (status de aprovação/reprovação) com a instituição cliente final onde o acesso foi solicitado, ou mediante requisição judicial amparada pela lei brasileira.
                    </p>
                </li>

                {/* Seção 7 */}
                <li>
                    <h2 className="flex items-center gap-3">
                        <span className="text-emerald-400 font-mono text-sm">07.</span>
                        Retenção e Exclusão Segura
                    </h2>
                    <p>
                        Os vetores biométricos são retidos ativamente apenas enquanto houver base legal válida (contrato com a instituição parceira ou prevenção à fraude contínua). Após o termo temporal ou revogação de consentimento, os registros são purgados dos nós de armazenamento de forma segura (Wipe Criptográfico), impossibilitando sua restauração.
                    </p>
                </li>

            </ol>
        </LegalPageLayout>
    );
}
