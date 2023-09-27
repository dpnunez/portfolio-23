'use client'
import { Logo } from '@/components'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

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
      <div className="flex gap-6 items-center">
        <motion.button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          type="button"
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 3,
          }}
          className="bg-primary-low-opacity rounded-full aspect-square p-4 opacity-0 flex justify-center items-center hover:brightness-125 transition-all duration-300"
        >
          {theme === 'dark' ? (
            <MoonIcon width={16} height={16} />
          ) : (
            <SunIcon width={16} height={16} />
          )}
        </motion.button>
        <motion.a
          href="/resume.pdf"
          target="_blank"
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 3,
          }}
          className=" rounded-lg p-2 opacity-0 flex justify-center items-center hover:brightness-125 transition-all duration-300 ring-1 ring-primary-dark ring-opacity-40"
        >
          Resume
        </motion.a>
      </div>
    </header>
  )
}
