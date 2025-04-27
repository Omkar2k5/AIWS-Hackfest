import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')

  // Public paths that don't require authentication
  const publicPaths = ['/', '/login']
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname)

  // If the user is not logged in and trying to access a protected route
  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If the user is logged in and trying to access login page
  if (session && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 