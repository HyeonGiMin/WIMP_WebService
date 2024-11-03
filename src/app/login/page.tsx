'use client';

import { signIn, signOut} from 'next-auth/react';

import { NextAuthSession } from '../api/auth/[...nextauth]/route';

export default function Login({
	session,
}: {
	session: NextAuthSession | null;
}) {
	if (session?.error) {
		signOut();
	}
	if (session) {
		return (
			<div>
				<button onClick={() => signOut()}>Sign out</button>
				<div>
					<h1>Session</h1>
					<pre>{JSON.stringify(session, null, 2)}</pre>
				</div>
			</div>
		);
	}

	return (
		<button
			onClick={() => {
				signIn('keycloak');
			}}
		>
			Sign in
		</button>
	);
}