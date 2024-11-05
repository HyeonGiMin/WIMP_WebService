// pages/protected.tsx
"use client";
import { useSession, signIn, signOut } from 'next-auth/react';

import { getServerSession } from 'next-auth';

// import { authOptions } from '../api/auth/[...nextauth]/route';


export default function ProtectedPage() {
  const { data: session } = useSession();
	// getServerSession(authOptions).then((session) => {
  // console.log(session);
  // });

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
