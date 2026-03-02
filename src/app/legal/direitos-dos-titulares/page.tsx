import { LegalPageLayout } from "@/components/LegalPageLayout";
import { DireitosTitularesForm } from "./_components/DireitosTitularesForm";

export default function DireitosDosTitulares() {
    return (
        <LegalPageLayout
            topic="Exercer Meus Direitos"
            title="Exercer Meus Direitos (LGPD)"
        >
            <p>
                Em conformidade com o Art. 18 da LGPD, você pode exercer seus direitos como titular de dados pessoais tratados pela MyPass.
            </p>
            <p>
                Prazo de resposta: até 15 dias úteis.
            </p>

            <div className="mt-12 mb-16">
                <DireitosTitularesForm />
            </div>

            <h2>Base Legal</h2>
            <p>
                Art. 18 da Lei nº 13.709/2018 (LGPD) garante ao titular os direitos de confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação e revogação do consentimento.
            </p>
        </LegalPageLayout>
    );
}
