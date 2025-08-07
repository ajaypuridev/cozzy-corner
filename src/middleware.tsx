import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {
  if (process.env.ENVIROMENT === 'development') {
    return NextResponse.next();
  }
  const cookie = request.cookies.get('hash');
  if (cookie?.value === "ajay123321") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/', request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
