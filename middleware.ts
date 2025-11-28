import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware to redirect all routes to maintenance page
export function middleware(request: NextRequest) {
  // Allow home page (maintenance page) to load
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  // Allow static files and Next.js internals
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/static') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to home (maintenance page)
  return NextResponse.redirect(new URL('/', request.url));
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
};
