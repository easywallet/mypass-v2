import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function Termos() {
    return (
        <LegalPageLayout
            topic="Termos de Uso"
            title="Termos e Condições de Operação"
            lastUpdated="01 de março de 2026"
        >
            <p>
                O presente Termo de Uso estabelece os vínculos legais e responsabilidades restritivas ao utilizar a infraestrutura de prova de vivacidade e identidade da MyPass (B2B, Institucional e APIs de Sandbox). Leia-os integralmente antes de efetuar chamadas a nossa suíte de microsserviços.
            </p>

            <h3>1. Aceite Consolidado</h3>
            <p>
                Ao navegar pelo site <code>mypass.com.br</code> ou por suas extensões (subdomínios de API), o acesso representa sua concordância tácita às disposições listadas. Instituições integradas possuem Acordos de Nível de Serviço (SLAs) sob contratos B2B paralelos.
            </p>

            <h3>2. Especificidade da Licença do SDK</h3>
            <p>
                O código-fonte derivado das telas e do SDK FaceTec embarcado provido pela MyPass não sofre transferência de Propriedade Intelectual. A licença B2B é estritamente transacional. É plenamente vedado ao Desenvolvedor e à Integradora tentar contornar métodos de Anti-Reverse Engineering, debuggers nativos em runtime ou atachar manipuladores de câmera virtual (OBS/Emuladores) aos pacotes em implantação oficial.
                Violações resultam no descredenciamento sumário dos tokens API sem notificação prévia.
            </p>

            <h3>3. Responsabilidades do Usuário B2B (Tokens e Credentials)</h3>
            <p>
                O Desenvolvedor (Tenant) é integralmente responsável por:
            </p>
            <ul>
                <li>Manter e rodar as Storage Keys em backends seguros próprios (Servidor-a-Servidor), sendo vetada a exposição de Secret Keys em aplicações Frontend (SPA) ou dispositivos mobile, para evitar vazamentos de tráfego injetado e Spoofing de origens corrompidas.</li>
                <li>Submeter a aprovação das UIs ao comitê de segurança da MyPass (para avaliação do Workflow Biométrico e isenção de fricção) antes de migração para <em>Production Keys</em>.</li>
            </ul>

            <h3>4. Limitações de SLA e Disponibilidade</h3>
            <p>
                Garantimos a métrica de tolerância de Liveness <strong>{"< 2s"}</strong> de resposta média. Todavia, a MyPass se exime de degradações provenientes do Edge provedor de ISP local, operadora móvel ou oscilações graves na malha FaceTec Server se comprovado ataque de negação de serviço distribuído (DDoS) superior à capacidade da matriz.
            </p>

            <h3>5. Condições de Integração Legítima (Sandbox vs Prod)</h3>
            <p>
                O ambiente Sandbox Development não possui custódia persistente com as autoridades certificadoras parceiras governamentais e financeiras (Open Finance). Nenhum resultado biométrico verificado como TRUE em Sandbox tem validade em balcão legal.
            </p>

            <h3>6. Foro Especializado e Legislação</h3>
            <p>
                Apesar da operação descentralizada para resiliência na nuvem, fica eleito inequivocamente o Foro de <strong>São Paulo, Estado de São Paulo — Brasil</strong>, para dirimir contenciosos procedentes, limitados por cláusulas de governança do Marco Civil da Internet Brasileira.
            </p>
        </LegalPageLayout>
    );
}
