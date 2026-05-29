import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BlackDesire Platform',
  description: 'Immersive. Connected. Yours.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{backgroundColor: '#050508'}}>
      <body>{children}</body>
    </html>
  )
}
