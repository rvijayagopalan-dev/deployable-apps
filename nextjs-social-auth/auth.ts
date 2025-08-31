
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import LinkedIn from 'next-auth/providers/linkedin'
import MicrosoftEntraID from 'next-auth/providers/microsoft-entra-id'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google, LinkedIn, MicrosoftEntraID],
  secret: process.env.AUTH_SECRET,
})

export const { GET, POST } = handlers
