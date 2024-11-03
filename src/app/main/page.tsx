// pages/protected.tsx
"use client";
import { useSession, signIn, signOut } from 'next-auth/react';

export default function ProtectedPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>접근이 제한된 페이지입니다. 로그인이 필요합니다.</p>
        <button onClick={() => signIn('keycloak')}>로그인</button>
      </div>
    );
  }

  return (
    <div>
      <p>안녕하세요, {session.user?.name}님!</p>
      <button onClick={() => signOut()}>로그아웃</button>
    </div>
  );
}