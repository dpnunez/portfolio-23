'use client'
import { motion } from 'framer-motion'

export function Signature() {
  return (
    <svg viewBox="0 0 494 194" className="w-[260px] lg:w-[490px]">
      <motion.path
        fill="none"
        animate={{
          pathLength: 1,
          opacity: [0, 1, 1, 1],
        }}
        opacity={0}
        pathLength={0}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          delay: 2.5,
        }}
        d="M62.4893 182.072C73.723 141.909 95.9753 58.2818 95.1149 45.0852C83.0685 53.4048 78.3838 61.7005 77.5472 64.8085C82.0885 52.8549 101.64 29.0914 143.516 29.6651C185.391 30.2389 171.241 64.3303 158.932 81.3043C138.377 103.657 88.2312 153.169 52.0921 172.39C15.953 191.611 4.04999 193.309 2.6159 191.396C1.54033 190.918 1.1101 188.742 7.99374 183.865C16.5983 177.769 73.962 142.626 128.816 134.019C183.67 125.413 476.584 94.9313 492 93.8555C414.918 101.506 236.014 119.388 137.062 129.716C158.932 111.427 143.617 125.771 161.184 116.089C178.752 106.407 188.331 88.0652 189.765 84.1206C187.255 90.5755 182.236 101.386 181.877 112.144C181.591 120.751 187.016 118.36 189.765 116.089C197.414 109.275 215.077 95.2899 224.542 93.8555C236.373 92.0624 232.071 98.8759 240.317 99.9518C248.563 101.028 255.733 98.1587 263.262 98.1587C270.791 98.1587 295.529 89.5522 302.7 94.2141C309.87 98.8759 316.682 100.669 321.702 98.1587C326.721 95.6485 335.684 90.2694 348.232 89.1936C360.781 88.1178 385.519 79.5113 388.028 77.7182C390.538 75.9252 427.824 54.7675 451.845 27.5135C471.062 5.71032 468.696 1.45487 465.111 2.05255C461.406 3.60651 445.392 16.4685 410.974 55.4847C367.951 104.255 319.55 172.749 317.758 177.769"
        className="stroke-gray-900 dark:stroke-gray-100"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
