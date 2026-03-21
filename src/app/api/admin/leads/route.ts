import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: Request) {
    const token = request.cookies.get('admin_session')?.value;
    const secret = new TextEncoder().encode(process.env.ADMIN_SESSION_SECRET);
    if (!token) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });

    try {
        await jwtVerify(token, secret);
        const { data, error } = await supabaseAdmin
            .from('developer_signups')
            .select('*')
            .order('created_at', { ascending: false });
        if (error) throw error;
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: 'Sessão inválida' }, { status: 401 });
    }
}
