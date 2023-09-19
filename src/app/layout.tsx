import { Footer, GridBackground, Header } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/Providers'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'dpnunez',
  description: 'Daniel P. Núñez personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <GridBackground />
          <Header />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}
