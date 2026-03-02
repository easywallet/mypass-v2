import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function SegurancaDados() {
    return (
        <LegalPageLayout
            topic="Segurança de Dados"
            title="Segurança de Dados"
        >
            <h2>Arquitetura de Segurança</h2>
            <p>
                A MyPass foi construída com Privacy by Design nativo — segurança integrada na arquitetura, não adicionada depois.
            </p>

            <h2>FaceMap 3D — Como Funciona</h2>
            <p>
                A tecnologia FaceTec não captura uma foto. Ela cria um FaceMap: um vetor matemático 3D criptografado derivado de 50+ pontos de profundidade do rosto. Este mapa é:
            </p>
            <ul>
                <li>Matematicamente irreversível — não existe algoritmo que o converta de volta em imagem</li>
                <li>Criptografado em trânsito e em repouso</li>
                <li>Inútil para hackers sem o par criptográfico</li>
            </ul>

            <h2>Certificações de Segurança</h2>
            <p>
                Nossa tecnologia foi testada por laboratórios independentes acreditados:
            </p>
            <ul>
                <li>iBeta Quality Assurance (NIST/NVLAP) — PAD Level 1 & 2 — APCER 0%</li>
                <li>Praetorian Security — Level 4 Spoof Bypass & Blackbox Pentest — 200 horas — 0 vulnerabilidades críticas</li>
                <li>ISO/IEC 30107-3 — padrão internacional de liveness detection</li>
            </ul>

            <h2>Programa de Bug Bounty FaceTec</h2>
            <p>
                A FaceTec mantém um programa de Bug Bounty de USD 600.000, aberto a pesquisadores de segurança do mundo inteiro. Em mais de 5 anos, nenhum bounty foi reivindicado — o que confirma a robustez da tecnologia integrada à MyPass.
            </p>

            <h2>Infraestrutura</h2>
            <p>Nossa infraestrutura opera com:</p>
            <ul>
                <li>Criptografia TLS 1.3 em todos os canais</li>
                <li>Mutual TLS (mTLS) nas APIs</li>
                <li>Zero-trust architecture</li>
                <li>Logs de auditoria imutáveis</li>
            </ul>
        </LegalPageLayout>
    );
}
