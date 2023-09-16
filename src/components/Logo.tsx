'use client'
import { motion } from 'framer-motion'

export function Logo() {
  return (
    <svg fill="none" width="76" height="58" viewBox="0 0 76 58">
      <motion.path
        fill="none"
        animate={{
          pathLength: 1,
          opacity: [0, 1, 1, 1],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          delay: 1,
        }}
        pathLength={0}
        d="M41.7308 5.91611L27.4035 45.4115C24.3626 53.7467 13.4449 55.6755 7.7323 48.8866C1.41616 41.3803 6.75227 29.9164 16.5623 29.9164H60.0991C68.2838 29.9164 73.5096 19.2629 70.24 11.7597C66.1735 2.42794 52.4689 2.87211 48.8484 12.3857L34.4264 51.934"
        className="stroke-gray-100"
        strokeWidth={8}
        opacity={0}
        strokeLinecap="square"
      />
    </svg>
  )
}
