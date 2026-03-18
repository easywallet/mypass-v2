import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Proteção da rota /docs/api-reference
  if (pathname.startsWith('/docs/api-reference')) {
    const token = request.cookies.get('mypass-doc-token');

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

// Matcher para garantir que o middleware rode apenas nas rotas necessárias
export const config = {
  matcher: ['/docs/api-reference/:path*'],
};
