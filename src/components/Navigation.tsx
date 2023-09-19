'use client'
import { navigationItems } from '@/constants'
import { useNavigation } from '@/global/navigation'
import { motion } from 'framer-motion'
import { useLayoutEffect, useState } from 'react'

interface coordinatesType {
  x: number
  y: number
  width: number
  height: number
}

interface coordinatesDictionary {
  [key: string]: coordinatesType
}

export function Navigation() {
  const [itemsCoordinates, setItemsCoordinates] =
    useState<coordinatesDictionary>({})

  const activeStack = useNavigation((state) => state.activeStack)
  const activeItem = activeStack.slice(-1)[0]
  const activeCoordinate = itemsCoordinates[activeItem]

  useLayoutEffect(() => {
    function getInitialCoordinates() {
      const coordinates: coordinatesDictionary = {}
      navigationItems.forEach((item) => {
        const element = document.getElementById(`nav-${item.id}`)

        // get relative coordinates
        if (element) {
          const offSetWidth = element.offsetWidth
          const offSetHeight = element.offsetHeight
          const offSetLeft = element.offsetLeft
          const offSetTop = element.offsetTop

          coordinates[item.id] = {
            x: offSetLeft,
            y: offSetTop,
            width: offSetWidth,
            height: offSetHeight,
          }
        }
      })

      setItemsCoordinates(coordinates)
    }

    getInitialCoordinates()
  }, [])

  return (
    <motion.nav
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 1,
      }}
      id="navigation"
      className="bg-gray-800 h-8 rounded-lg opacity-0 drop-shadow-2xl"
    >
      <div className="p-1">
        <div className="relative flex w-full h-full items-center box-content">
          {activeCoordinate && <NavigationIndicator {...activeCoordinate} />}
          {navigationItems.map((item, i) => (
            <motion.a
              animate={{
                opacity: 1,
                filter:
                  item.id === activeItem
                    ? 'brightness(100%)'
                    : 'brightness(50%)',
              }}
              transition={{
                opacity: {
                  delay: 1.5 + i * 0.25,
                  duration: 0.5,
                },
              }}
              href={`#${item.id}`}
              key={item.id}
              id={`nav-${item.id}`}
              className="px-4 z-10 h-full text-gray-100 opacity-0"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

function NavigationIndicator({ x, width, height }: coordinatesType) {
  return (
    <motion.div
      animate={{
        width,
        x,
        y: 0,
        height,
        opacity: 1,
      }}
      transition={{
        opacity: {
          delay: 1.5,
        },
      }}
      id="indicator"
      className="h-full absolute bg-gray-700 box-content rounded-lg opacity-0"
    />
  )
}
