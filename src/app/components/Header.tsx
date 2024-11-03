// components/Header.tsx
"use client";
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header>
      {session ? (
        <>
          <p>안녕하세요, {session.user?.name}님!</p>
          <button onClick={() => signOut()}>로그아웃</button>
        </>
      ) : (
        <button onClick={() => signIn('keycloak')}>로그인</button>
      )}
    </header>
  );
}