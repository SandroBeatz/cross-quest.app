import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get auth status from cookie (we'll set this in the client)
  const isAuthenticated = request.cookies.get('umnyaut_authenticated')?.value === 'true';

  // Auth pages - allow access
  if (pathname.startsWith('/auth')) {
    // If authenticated and trying to access onboarding, redirect to dashboard
    if (isAuthenticated && pathname === '/auth/onboarding') {
      return NextResponse.redirect(new URL('/p/dashboard', request.url));
    }
    return NextResponse.next();
  }

  // Dashboard routes (/p/*) - require authentication
  if (pathname.startsWith('/p')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/auth/onboarding', request.url));
    }
    // Redirect /p to /p/dashboard
    if (pathname === '/p' || pathname === '/p/') {
      return NextResponse.redirect(new URL('/p/dashboard', request.url));
    }
    return NextResponse.next();
  }

  // Public routes - redirect if authenticated
  const publicRoutes = ['/', '/about', '/games', '/privacy', '/contacts'];
  if (publicRoutes.includes(pathname)) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/p/dashboard', request.url));
    }
    return NextResponse.next();
  }

  // Allow other routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.svg|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp).*)',
  ],
};
