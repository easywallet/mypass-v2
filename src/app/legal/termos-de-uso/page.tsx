import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function Termos() {
    return (
        <LegalPageLayout
            topic="Termos de Uso"
            title="Termos de Uso"
            lastUpdated="01 de março de 2026"
        >
            <h2>1. Aceitação dos Termos</h2>
            <p>
                Ao acessar e utilizar a plataforma MyPass, você concorda com os presentes Termos de Uso.
            </p>

            <h2>2. Descrição do Serviço</h2>
            <p>
                A MyPass é uma plataforma de infraestrutura de identidade biométrica que oferece serviços de KYC, autenticação 3D e tokenização de identidade para o mercado brasileiro.
            </p>

            <h2>3. Responsabilidades do Usuário</h2>
            <p>O usuário se compromete a:</p>
            <ul>
                <li>Fornecer informações verdadeiras no cadastro</li>
                <li>Não compartilhar credenciais de acesso</li>
                <li>Não tentar burlar os mecanismos de segurança biométrica</li>
                <li>Utilizar a plataforma dentro dos limites legais brasileiros</li>
            </ul>

            <h2>4. Limitações de Uso</h2>
            <p>É vedada a utilização da plataforma para:</p>
            <ul>
                <li>Fins fraudulentos ou ilegais</li>
                <li>Engenharia reversa do SDK</li>
                <li>Tentativa de bypass de liveness detection</li>
                <li>Uso fora do território brasileiro sem autorização prévia</li>
            </ul>

            <h2>5. Propriedade Intelectual</h2>
            <p>
                Todo o conteúdo, tecnologia e marca MyPass são protegidos por direitos de propriedade intelectual. A tecnologia FaceTec é licenciada pela FaceTec, Inc., com autorização formal para uso pela MyPass.
            </p>

            <h2>6. Foro</h2>
            <p>
                Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias oriundas dos presentes termos, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>

            <h2>7. Contato</h2>
            <p>
                Para questões relacionadas a estes termos: <a href="mailto:contato@mypass.com.br">contato@mypass.com.br</a>
            </p>
        </LegalPageLayout>
    );
}
