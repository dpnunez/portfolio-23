'use client'
import { motion } from 'framer-motion'

export function GridBackground() {
  return (
    <div className="relative pointer-events-none -z-10">
      <div className="fixed w-screen h-screen">
        <div className="container w-full h-full mx-auto flex px-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              animate={{
                height: '100vh',
              }}
              transition={{
                duration: 1,
                delay: i * 0.5,
              }}
              key={i}
              className="bg-gray-300 dark:bg-gray-800 opacity-30 min-w-[1px] h-0 mr-[138px] lg:mr-[208px] block"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
