import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { supabaseAdmin } from '@/lib/supabase';
import { noreplyTransporter } from '@/lib/mailer';
import { getAdminApprovalEmail } from '@/lib/email-templates';
import crypto from 'crypto';

export async function POST(request: Request) {
    const token = request.cookies.get('admin_session')?.value;
    const secret = new TextEncoder().encode(process.env.ADMIN_SESSION_SECRET);
    if (!token) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });

    try {
        await jwtVerify(token, secret);
        const { id } = await request.json();
        const sandboxToken = `mpx_${crypto.randomUUID().replace(/-/g, '')}`;
        const { data: lead, error: fetchError } = await supabaseAdmin
            .from('developer_signups').select('*').eq('id', id).single();
        
        if (fetchError || !lead) throw new Error('Lead não encontrado');

        // BLOCO 1: BANCO DE DADOS (CRÍTICO)
        const { error: updateError } = await supabaseAdmin
            .from('developer_signups').update({
                aprovado: true,
                sandbox_token: sandboxToken,
                approved_at: new Date().toISOString(),
                approved_by: process.env.ADMIN_EMAIL
            }).eq('id', id);

        if (updateError) {
            console.error('Erro crítico no banco:', updateError);
            return NextResponse.json({ error: 'Falha no banco de dados' }, { status: 500 });
        }

        // BLOCO 2: E-MAIL (SILENCIOSO)
        try {
            const html = getAdminApprovalEmail({ nome: lead.nome, sandboxToken });
            await noreplyTransporter.sendMail({
                from: `"MyPass" <${process.env.SMTP_USER_NOREPLY}>`,
                to: lead.email,
                subject: 'Seu acesso ao Sandbox MyPass foi aprovado',
                html
            });
        } catch (emailErr) {
            console.error('Falha silenciosa ao disparar e-mail de aprovação:', emailErr);
        }

        return NextResponse.json({ success: true, token: sandboxToken });
    } catch (err) {
        console.error('Erro de autorização ou parsing:', err);
        return NextResponse.json({ error: 'Sessão inválida ou erro interno' }, { status: 401 });
    }
}
