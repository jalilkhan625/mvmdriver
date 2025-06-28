// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get('lang') || 'en';
  const response = NextResponse.next();
  response.headers.set('x-language', lang);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
