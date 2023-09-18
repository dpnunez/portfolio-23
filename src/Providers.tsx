'use client'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--bg)',
            border: '1px solid var(--text-color)',
            color: 'var(--text-color)',
          },
        }}
      />
      {children}
    </ThemeProvider>
  )
}
