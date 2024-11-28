import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GDG Gulzar Group',
  description: 'Google Developer Group - Gulzar Group of Institutes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}