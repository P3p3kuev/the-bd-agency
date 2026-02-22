import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BD Agency | Enterprise Revenue Architecture',
  description: 'Enterprise Revenue Architecture for Fortune 500 and mid-market B2B organizations.',
  openGraph: {
    title: 'BD Agency | Enterprise Revenue Architecture',
    description: 'Enterprise Revenue Architecture for Fortune 500 and mid-market B2B organizations.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
