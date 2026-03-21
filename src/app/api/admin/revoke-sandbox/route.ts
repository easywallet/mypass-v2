import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
    const token = request.cookies.get('admin_session')?.value;
    const secret = new TextEncoder().encode(process.env.ADMIN_SESSION_SECRET);
    if (!token) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });

    try {
        await jwtVerify(token, secret);
        const { id } = await request.json();
        const { error } = await supabaseAdmin
            .from('developer_signups')
            .update({ aprovado: false, sandbox_token: null, approved_at: null, approved_by: null })
            .eq('id', id);
        if (error) throw error;
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: 'Erro ao revogar' }, { status: 500 });
    }
}
