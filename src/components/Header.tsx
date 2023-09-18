'use client'
import { Logo } from '@/components'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import { useTheme } from 'next-themes'

export function Header() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <header className="container h-24 flex items-center justify-between">
      <Logo />
      <button
        onClick={toggleTheme}
        type="button"
        className="bg-primary-low-opacity rounded-full aspect-square p-4 flex justify-center items-center hover:brightness-125 transition-all duration-300"
      >
        {theme === 'dark' ? (
          <MoonIcon width={16} height={16} />
        ) : (
          <SunIcon width={16} height={16} />
        )}
      </button>
    </header>
  )
}
