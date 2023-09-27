import { GridBackground, Header } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/Providers'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  display: 'swap',
})

const description = `I am a software engineer with a passion for creating beautiful, performant, and accessible experiences.`
export const metadata: Metadata = {
  title: 'Daniel P. Núñez | Software Engineer',
  icons: '/favicon.ico',
  openGraph: {
    type: 'website',
    url: 'https://dpnunez.tech',
    title: 'Daniel P. Núñez | Software Engineer',
    description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Daniel P. Núñez | Software Engineer',
      },
    ],
  },
  description,
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
