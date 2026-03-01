import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nome, email, empresa, cargo, segmento, mensagem } = body;

        // Basic validation
        if (!nome || !email || !empresa || !cargo || !segmento) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await supabaseAdmin
            .from('enterprise_leads')
            .insert([{ nome, email, empresa, cargo, segmento, mensagem: mensagem || null }]);

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // --- SILENT EMAIL HANDLING ---
        try {
            const { noreplyTransporter, sandboxTransporter, NOTIFY_EMAIL } = await import('@/lib/mailer');
            const { getEnterpriseConfirmationEmail, getEnterpriseInternalAlertEmail } = await import('@/lib/email-templates');

            const confirmationHtml = getEnterpriseConfirmationEmail({ nome, segmento });
            const alertHtml = getEnterpriseInternalAlertEmail({
                nome,
                email,
                empresa,
                cargo,
                segmento,
                mensagem: mensagem || null,
                created_at: new Date().toISOString()
            });

            // Disparo A: Confirmação ao Enterprise Lead
            await noreplyTransporter.sendMail({
                from: `"MyPass Enterprise" <${process.env.SMTP_USER_NOREPLY}>`,
                to: email,
                subject: "MyPass recebeu sua solicitação de Demo Empresarial 💎",
                html: confirmationHtml
            });

            // Disparo B: Alerta Interno
            await sandboxTransporter.sendMail({
                from: `"MyPass Lead Alert" <${process.env.SMTP_USER_SANDBOX}>`,
                to: NOTIFY_EMAIL,
                subject: `🔔 Novo Lead Enterprise — ${empresa} | ${cargo} | ${segmento}`,
                html: alertHtml
            });
        } catch (emailError) {
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
