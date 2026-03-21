import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { createClient } from '@supabase/supabase-js';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Proteção das rotas /admin (PRESERVADO)
  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    const token = request.cookies.get('admin_session')?.value;

    if (!token) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      const secret = new TextEncoder().encode(process.env.ADMIN_SESSION_SECRET);
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
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

  // 2. Proteção da rota /docs/api-reference (NOVA LÓGICA SPRINT 4)
  if (pathname.startsWith('/docs/api-reference')) {
    const sbTokenCookie = request.cookies.get('sb_token')?.value;
    const urlToken = request.nextUrl.searchParams.get('token');

    // Instância inline do Supabase para compatibilidade com Edge Runtime
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // CASO A: Existe cookie -> Validar no Supabase
    if (sbTokenCookie) {
      const { data, error } = await supabase
        .from('developer_signups')
        .select('id')
        .eq('sandbox_token', sbTokenCookie)
        .eq('aprovado', true)
        .single();

      console.log('[MIDDLEWARE] sbTokenCookie:', sbTokenCookie?.substring(0, 12));
      console.log('[MIDDLEWARE] supabase data (Case A):', data);
      console.log('[MIDDLEWARE] supabase error (Case A):', error);

      if (data && !error) {
        return NextResponse.next(); // Acesso liberado via cookie válido
      } else {
        // Cookie inválido ou revogado -> Limpar e redirecionar
        const url = new URL('/docs', request.url);
        url.searchParams.set('access', 'required');
        const response = NextResponse.redirect(url);
        response.cookies.set('sb_token', '', { maxAge: 0, path: '/' });
        return response;
      }
    }

    // CASO B: Não existe cookie, verificar ?token= na URL
    if (urlToken) {
      const { data, error } = await supabase
        .from('developer_signups')
        .select('id')
        .eq('sandbox_token', urlToken)
        .eq('aprovado', true)
        .single();

      console.log('[MIDDLEWARE] urlToken:', urlToken?.substring(0, 12));
      console.log('[MIDDLEWARE] supabase data (Case B):', data);
      console.log('[MIDDLEWARE] supabase error (Case B):', error);

      if (data && !error) {
        // Token válido -> Setar cookie e redirecionar para URL limpa (sem o ?token=)
        const url = new URL('/docs/api-reference', request.url);
        const response = NextResponse.redirect(url);
        response.cookies.set('sb_token', urlToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 7, // 7 dias
          path: '/',
        });
        return response;
      } else {
        // Token na URL inválido ou não aprovado
        const url = new URL('/docs', request.url);
        url.searchParams.set('access', 'required');
        return NextResponse.redirect(url);
      }
    }

    // CASO C: Sem cookie e sem token na URL -> Bloquear
    const url = new URL('/docs', request.url);
    url.searchParams.set('access', 'required');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Configuração do Matcher
export const config = {
  matcher: [
    '/admin/:path*',
    '/docs/api-reference/:path*'
  ],
};
