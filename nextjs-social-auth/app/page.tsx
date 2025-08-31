
'use client'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <main><p>Loading…</p></main>

  if (!session) {
    return (
      <main>
        <h1>Sign in</h1>
        <p className="muted">Choose a provider to continue</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <button onClick={() => signIn('google')}>Continue with Google</button>
          <button onClick={() => signIn('microsoft-entra-id')}>Continue with Microsoft</button>
          <button onClick={() => signIn('linkedin')}>Continue with LinkedIn</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <h1>Welcome, {session.user?.name}</h1>
      {session.user?.image && <img src={session.user.image} alt="avatar" width={64} height={64} />}
      <p>{session.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </main>
  )
}
