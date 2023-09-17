'use client'
import { motion } from 'framer-motion'

interface IndicatorProps {
  x: number
  y: number
  width: number
  height: number
  bottomBadge?: boolean
}

export function HeroSelectionIndicator({
  x,
  y,
  width = 0,
  height = 0,
  bottomBadge,
}: IndicatorProps) {
  const transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return (
    <motion.div
      className="opacity-0"
      animate={{ opacity: 1 }}
      transition={{ delay: 6, duration: 1 }}
    >
      <motion.div
        layout
        animate={{
          width,
          height,
          x,
          y,
        }}
        transition={transition}
        className="ring-1 ring-primary-main pointer-events-none absolute left-0 top-0"
      />

      {/* Corners */}
      <motion.div
        layout
        animate={{
          x: x - 2,
          y: y - 2,
        }}
        transition={transition}
        className="absolute left-0 top-0 ring-1 ring-primary-main bg-gray-100 w-[5px] h-[5px]"
      />
      <motion.div
        layout
        animate={{
          x: x + width - 2,
          y: y - 2,
        }}
        transition={transition}
        className="absolute left-0 top-0 ring-1 ring-primary-main bg-gray-100 w-[5px] h-[5px]"
      />
      <motion.div
        layout
        animate={{
          x: x - 2,
          y: y + height - 2,
        }}
        transition={transition}
        className="absolute left-0 top-0 ring-1 ring-primary-main bg-gray-100 w-[5px] h-[5px]"
      />
      <motion.div
        layout
        animate={{
          x: x + width - 2,
          y: y + height - 2,
        }}
        transition={transition}
        className="absolute left-0 top-0 ring-1 ring-primary-main bg-gray-100 w-[5px] h-[5px]"
      />

      {/* badge */}
      <motion.div
        layout
        transition={transition}
        animate={{
          x,
          y: bottomBadge ? y + height + 12 : y - 32,
        }}
        className="text-gray-100 absolute left-0 top-0 text-caption bg-primary-main bg-opacity-30 px-2 rounded-lg"
      >
        {(Number(width.toFixed(0)) / 8) * 8} x{' '}
        {(Number(height.toFixed(0)) / 8) * 8}
      </motion.div>
    </motion.div>
  )
}
