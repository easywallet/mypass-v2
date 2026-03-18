import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nome, email, empresa, cnpj, github, segmento, tipos_integracao } = body;

        // Basic validation
        if (!nome || !email || !empresa || !cnpj || !segmento || !tipos_integracao) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await supabaseAdmin
            .from('developer_signups')
            .insert([
                {
                    nome,
                    email,
                    empresa,
                    cnpj,
                    github: github || null,
                    segmento,
                    tipos_integracao,
                    status: 'pending'
                }
            ]);

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // --- SILENT EMAIL HANDLING ---
        // A falha no envio de e-mail NUNCA deve reverter o cadastro no Supabase.
        try {
            const { noreplyTransporter, sandboxTransporter, NOTIFY_EMAIL } = await import('@/lib/mailer');
            const { getDeveloperConfirmationEmail, getDeveloperInternalAlertEmail } = await import('@/lib/email-templates');

            const confirmationHtml = getDeveloperConfirmationEmail({ nome, empresa });
            const alertHtml = getDeveloperInternalAlertEmail({
                nome,
                email,
                empresa,
                cnpj,
                github: github || null,
                segmento,
                tipos_integracao,
                created_at: new Date().toISOString()
            });

            // Disparo A: Confirmação ao Dev (noreply@mypass.com.br → dev)
            await noreplyTransporter.sendMail({
                from: `"MyPass Sandbox" <${process.env.SMTP_USER_NOREPLY}>`,
                to: email,
                subject: "MyPass recebeu sua solicitação de acesso ao Sandbox",
                html: confirmationHtml
            });

            // Disparo B: Alerta Interno (sandbox@mypass.com.br → time MyPass)
            await sandboxTransporter.sendMail({
                from: `"MyPass Sandbox Alert" <${process.env.SMTP_USER_SANDBOX}>`,
                to: NOTIFY_EMAIL,
                subject: `Novo Dev Cadastrado — ${empresa} · ${segmento}`,
                html: alertHtml
            });
        } catch (emailError: unknown) {
            // Falha de e-mail: logar e continuar. Cadastro no Supabase é preservado.
            console.error('Email dispatch failed (silent error):', emailError);
        }
        // -----------------------------

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

