import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function PoliticaPrivacidade() {
    return (
        <LegalPageLayout
            topic="Política de Privacidade"
            title="Política de Privacidade"
            lastUpdated="01 de março de 2026"
        >
            <h2>1. Identificação do Controlador</h2>
            <p>
                MyPass Identidade Digital Ltda., com sede no Brasil. Contato: <a href="mailto:dpo@mypass.com.br">dpo@mypass.com.br</a>
            </p>

            <h2>2. Dados Coletados e Finalidade</h2>
            <p>Coletamos os seguintes dados para as finalidades descritas:</p>
            <ul>
                <li>Dados de identificação: nome completo, CPF, e-mail — para autenticação e KYC</li>
                <li>Dados biométricos: FaceMap 3D criptografado — para verificação de identidade</li>
                <li>Dados de acesso: logs, endereço IP, dispositivo — para segurança e auditoria</li>
            </ul>

            <h2>3. Base Legal</h2>
            <p>O tratamento é fundamentado nos seguintes artigos da LGPD (Lei nº 13.709/2018):</p>
            <ul>
                <li>Art. 7º, II — Consentimento expresso do titular</li>
                <li>Art. 7º, IX — Legítimo interesse</li>
                <li>Art. 11, II — Dados sensíveis com consentimento específico</li>
            </ul>

            <h2>4. Medidas de Segurança (Art. 46 LGPD)</h2>
            <div style={{ borderLeft: "3px solid #00d4ff", background: "#00d4ff08", padding: "20px", borderRadius: "8px", marginBottom: "32px" }}>
                <p style={{ marginTop: 0 }}>
                    O Art. 46 da LGPD determina que os agentes de tratamento devem adotar medidas de segurança técnicas e administrativas aptas a proteger os dados pessoais. A MyPass implementa o Art. 46 através de:
                </p>
                <ul style={{ marginBottom: 0 }}>
                    <li>FaceMap 3D criptografado — vetor matemático não reversível para imagem facial</li>
                    <li>Tokens de sessão com expiração automática</li>
                    <li>Zero armazenamento de imagem biométrica em texto plano</li>
                    <li>Certificação Praetorian Level 4 & 5 — APCER 0% (2025)</li>
                </ul>
            </div>

            <h2>5. Direitos do Titular (Art. 18)</h2>
            <p>Você tem direito a:</p>
            <ul>
                <li>Acesso aos seus dados</li>
                <li>Correção de dados incompletos ou inexatos</li>
                <li>Exclusão dos dados pessoais</li>
                <li>Portabilidade dos dados</li>
                <li>Revogação do consentimento</li>
            </ul>
            <p>
                Para exercer seus direitos: <a href="mailto:dpo@mypass.com.br">dpo@mypass.com.br</a> ou acessar a página <a href="/legal/direitos-dos-titulares">Exercer Meus Direitos</a>.
            </p>

            <h2>6. Compartilhamento de Dados</h2>
            <p>
                Não vendemos dados pessoais. O compartilhamento ocorre apenas com: (a) parceiros tecnológicos certificados, sob contrato de processamento de dados; (b) autoridades regulatórias, quando exigido por lei.
            </p>

            <h2>7. Retenção e Exclusão</h2>
            <p>
                Os dados são retidos pelo período necessário à finalidade declarada. Após o encerramento da relação, os dados são excluídos em até 30 dias, salvo obrigação legal de retenção.
            </p>

            <h2>8. Contato do DPO</h2>
            <p>
                Data Protection Officer (DPO):<br />
                <a href="mailto:dpo@mypass.com.br">dpo@mypass.com.br</a>
            </p>
            <p>
                Prazo de resposta: até 15 dias úteis (conforme Art. 18, §5º da LGPD).
            </p>
        </LegalPageLayout>
    );
}
