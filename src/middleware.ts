// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // 예시: 인증이 필요한 경로에 대해 로그인 페이지로 리다이렉션
  if (pathname.startsWith('/main') && !request.cookies.get('auth')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 예시: 기타 사용자 정의 처리
  return NextResponse.next();
}

// 미들웨어가 작동할 경로 설정 (선택 사항)
export const config = {
  matcher: ['/:path*', '/main/:path*'],
};
