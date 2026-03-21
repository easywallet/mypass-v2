import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Proteção das rotas /admin
  if (pathname.startsWith('/admin')) {
    // Permitir acesso à página de login sem restrição (evita loop)
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    const token = request.cookies.get('admin_session')?.value;

    if (!token) {
      // Redireciona para login administrativo se não houver token
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      const secret = new TextEncoder().encode(process.env.ADMIN_SESSION_SECRET);
      await jwtVerify(token, secret);
      // Token válido, permitir acesso às rotas /admin/*
      return NextResponse.next();
    } catch (error) {
      // Token inválido, expirado ou adulterado -> Limpa o cookie e redireciona
      console.error('Erro de autenticação admin:', error);
      const loginUrl = new URL('/admin/login', request.url);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.set('admin_session', '', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 0,
        path: '/',
      });
      return response;
    }
  }

  // 2. Proteção da rota /docs/api-reference (Existente)
  if (pathname.startsWith('/docs/api-reference')) {
    const token = request.cookies.get('mypass-doc-token')?.value;

    if (!token) {
      // Redireciona para /docs?access=required
      const url = request.nextUrl.clone();
      url.pathname = '/docs';
      url.searchParams.set('access', 'required');
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Matcher atualizado para incluir /admin e sub-rotas
export const config = {
  matcher: [
    '/admin/:path*',
    '/docs/api-reference/:path*'
  ],
};
