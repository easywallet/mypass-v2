import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

export async function POST(req: Request) {
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    const ADMIN_SESSION_SECRET = process.env.ADMIN_SESSION_SECRET;

    try {
        const { email, password } = await req.json();

        if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !ADMIN_SESSION_SECRET) {
            console.error("Missing Admin Auth environment variables.");
            return NextResponse.json({ error: "Configuração do servidor incompleta" }, { status: 500 });
        }

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            // Criar o token assinado via JWT (HS256)
            const secret = new TextEncoder().encode(ADMIN_SESSION_SECRET);
            const token = await new SignJWT({ admin: true })
                .setProtectedHeader({ alg: 'HS256' })
                .setIssuedAt()
                .setExpirationTime('8h')
                .sign(secret);

            const response = NextResponse.json({ success: true });

            // Configurar o cookie conforme especificações:
            // httpOnly, secure, sameSite: strict, maxAge: 8h (28800s)
            response.cookies.set('admin_session', token, {
                httpOnly: true,
                secure: true, // Forçado para conformidade, em dev Next.js lida se não for HTTPS
                sameSite: 'strict',
                maxAge: 28800,
                path: '/',
            });

            return response;
        }

        return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
    } catch (error) {
        console.error("Auth API Error:", error);
        return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
    }
}
