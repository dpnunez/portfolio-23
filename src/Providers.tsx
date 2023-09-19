'use client'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: React.ReactNode }) {
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
