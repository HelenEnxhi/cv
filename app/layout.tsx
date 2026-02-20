import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enxhi Helen Nikolla | CV',
  description: 'CV website for Enxhi Helen Nikolla, including experience, education, certifications, and mentoring work.',
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
