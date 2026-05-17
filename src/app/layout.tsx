import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JG University — Shape the Future',
  description: 'A premier institution of higher learning. Discover world-class programs, cutting-edge research, and a vibrant campus community.',
  keywords: 'university, education, programs, research, campus, JG University',
  openGraph: {
    title: 'JG University — Shape the Future',
    description: 'Premier higher education. World-class programs, research, and community.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-white font-body antialiased">
        {children}
      </body>
    </html>
  )
}
