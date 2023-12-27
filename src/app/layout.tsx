import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felipe Oliveira - Advogado',
  description: 'Felipe Oliveira - Advogado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
