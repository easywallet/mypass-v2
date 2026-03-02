import { NextResponse } from 'next/server';
import { sandboxTransporter } from '@/lib/mailer';
import { getLGPDSolicitationEmail } from '@/lib/email-templates';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { tipo, nome, email, cpf, descricao } = body;

        // Validations
        if (!tipo || !nome || !email || !cpf || !descricao) {
            return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 });
        }

        const notificationData = {
            tipo,
            nome,
            email,
            cpf,
            descricao,
            created_at: new Date().toISOString()
        };

        const mailHtml = getLGPDSolicitationEmail(notificationData);

        // Disparando email para o Sandbox (placeholder até conta do DPO ser criada)
        // Usamos await e try/catch isolado para tratamento de erro silencioso
        try {
            await sandboxTransporter.sendMail({
                from: '"MyPass DPO System" <noreply@mypass.com.br>',
                to: 'sandbox@mypass.com.br',
                subject: `LGPD Alert: Solicitação de ${tipo} - ${nome}`,
                html: mailHtml,
            });
            console.log("LGPD DPO email dispatched successfully.");
        } catch (emailError) {
            console.error("DPO LGPD Alert Mail Error: ", emailError);
            // Fail silently on email dispatch to ensure client still gets 200 HTTP response.
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (e: any) {
        console.error('LGPD Request Route Error:', e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
