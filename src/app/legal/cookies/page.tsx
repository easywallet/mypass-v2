import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function CookiesPolicy() {
    return (
        <LegalPageLayout
            topic="Política de Cookies"
            title="Política de Cookies"
        >
            <h2>O que são Cookies</h2>
            <p>
                Cookies são pequenos arquivos de texto armazenados pelo navegador para melhorar a experiência de navegação.
            </p>

            <h2>Cookies que Utilizamos</h2>
            <div className="overflow-x-auto mt-6 mb-12">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Nome</th>
                            <th>Finalidade</th>
                            <th>Duração</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Essencial</td>
                            <td>mypass_session</td>
                            <td>Autenticação de sessão</td>
                            <td>Sessão</td>
                        </tr>
                        <tr>
                            <td>Essencial</td>
                            <td>cookie_consent</td>
                            <td>Registro de consentimento</td>
                            <td>1 ano</td>
                        </tr>
                        <tr>
                            <td>Preferência</td>
                            <td>theme_pref</td>
                            <td>Preferência de tema</td>
                            <td>1 ano</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Zero Cookies de Marketing</h2>
            <p>
                A MyPass não utiliza cookies de rastreamento, publicidade ou analytics de terceiros. Não compartilhamos dados de navegação com nenhuma plataforma externa.
            </p>

            <h2>Como Gerenciar</h2>
            <p>
                Você pode limpar os cookies a qualquer momento nas configurações do seu navegador. Isso não afetará o funcionamento do site.
            </p>
        </LegalPageLayout>
    );
}
