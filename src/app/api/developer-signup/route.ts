import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nome, email, empresa, github, segmento, tipos_integracao } = body;

        // Basic validation
        if (!nome || !email || !empresa || !segmento || !tipos_integracao) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await supabaseAdmin
            .from('developer_signups')
            .insert([
                {
                    nome,
                    email,
                    empresa,
                    github: github || null,
                    segmento,
                    tipos_integracao
                }
            ]);

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // --- SILENT EMAIL HANDLING ---
        try {
            const { noreplyTransporter, sandboxTransporter, NOTIFY_EMAIL } = await import('@/lib/mailer');
            const { getDeveloperConfirmationEmail, getDeveloperInternalAlertEmail } = await import('@/lib/email-templates');

            const confirmationHtml = getDeveloperConfirmationEmail({ nome });
            const alertHtml = getDeveloperInternalAlertEmail({
                nome,
                email,
                empresa,
                github: github || null,
                segmento,
                tipos_integracao,
                created_at: new Date().toISOString()
            });

            // Disparo A: Confirmação ao Dev
            await noreplyTransporter.sendMail({
                from: `"MyPass Sandbox" <${process.env.SMTP_USER_NOREPLY}>`,
                to: email,
                subject: "Seu acesso ao Sandbox MyPass foi recebido 🚀",
                html: confirmationHtml
            });

            // Disparo B: Alerta Interno
            await sandboxTransporter.sendMail({
                from: `"MyPass Sandbox Alert" <${process.env.SMTP_USER_SANDBOX}>`,
                to: NOTIFY_EMAIL,
                subject: `🔔 Novo Dev Cadastrado — ${empresa} | ${segmento}`,
                html: alertHtml
            });
        } catch (emailError: any) {
            console.error('Email dispatch failed (silent error):', emailError);
            // DO NOT THROW, DO NOT RETURN 500
        }
        // -----------------------------

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
