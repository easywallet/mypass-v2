import { NextResponse } from 'next/server';
import { noreplyTransporter, sandboxTransporter, NOTIFY_EMAIL } from '@/lib/mailer';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const results: any = {
            env: {
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: process.env.SMTP_SECURE,
                user_noreply: process.env.SMTP_USER_NOREPLY,
                user_sandbox: process.env.SMTP_USER_SANDBOX,
                notify: NOTIFY_EMAIL
            },
            noreply_verify: false,
            sandbox_verify: false,
            test_dispatch_internal: null,
        };

        // 1. Verificar Autenticação SMTP na Vercel
        try {
            results.noreply_verify = await noreplyTransporter.verify();
            results.sandbox_verify = await sandboxTransporter.verify();
        } catch (authErr: any) {
            results.auth_error = { message: authErr.message, code: authErr.code };
            return NextResponse.json(results, { status: 500 });
        }

        // 2. Tentar Disparo Simples (Sem HTML) Internamente
        try {
            const info = await sandboxTransporter.sendMail({
                from: `"MyPass Diagnostic" <${process.env.SMTP_USER_SANDBOX}>`,
                to: NOTIFY_EMAIL,
                subject: "Diagnostic Ping - MyPass SMTP",
                text: "Se você recebeu este e-mail, a rota de texto puro está funcionando."
            });
            results.test_dispatch_internal = info.messageId;
        } catch (dispatchErr: any) {
            results.test_dispatch_internal = { error: dispatchErr.message };
        }

        return NextResponse.json(results);
    } catch (e: any) {
        return NextResponse.json({ error: e.message, stack: e.stack }, { status: 500 });
    }
}
