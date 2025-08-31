
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Next.js Social Login' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
