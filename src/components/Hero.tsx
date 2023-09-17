'use client'
import { useLayoutEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Signature, HeroSelectionIndicator } from '@/components'
import { heroFocusableItemsIds } from '@/constants'
import { useNavigation } from '@/global/navigation'

interface coordinatesType {
  x: number
  y: number
  width: number
  height: number
}

interface coordinatesDictionary {
  [key: string]: coordinatesType
}

export function Hero() {
  const [coordinates, setCoordinates] = useState<coordinatesDictionary>({})
  const [currentCoordinateKey, setCurrentCoordinateKey] =
    useState<string>('hero-primary')
  const currentCoordinates = coordinates[currentCoordinateKey]

  const addNavigationStack = useNavigation((state) => state.pushActiveStack)
  const removeNavigationStack = useNavigation(
    (state) => state.removeFromActiveStack,
  )

  // Get focusable coordiantes and size
  useLayoutEffect(() => {
    function getInitialCoordinates() {
      const coordinates: coordinatesDictionary = {}
      heroFocusableItemsIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const { x, y, width, height } = element.getBoundingClientRect()
          coordinates[id] = { x, y, width, height }
        }
      })

      setCoordinates(coordinates)
    }

    getInitialCoordinates()
    const heroElement = document.getElementById('hero') as Element
    new ResizeObserver(getInitialCoordinates).observe(heroElement)

    // generate random focus change
    const changeFocusInterval = setInterval(() => {
      const keys = heroFocusableItemsIds
      const randomIndex = Math.floor(Math.random() * keys.length)
      const nextKey = keys[randomIndex]
      setCurrentCoordinateKey(nextKey)
    }, 4000)

    return () => {
      clearInterval(changeFocusInterval)
    }
  }, [])

  return (
    <motion.section
      onViewportLeave={() => removeNavigationStack('hero')}
      onViewportEnter={() => addNavigationStack('hero')}
      viewport={{ margin: '-150px 0px -150px 0px' }}
      id="hero"
      className="container flex flex-col items-center justify-center h-[calc(100vh-96px-32px-16px)]"
    >
      <div
        id="hero-signature"
        className="cursor-pointer"
        onClick={() => setCurrentCoordinateKey('hero-signature')}
      >
        <Signature />
      </div>
      <motion.h1
        transition={{ duration: 2, delay: 5 }}
        animate={{ opacity: 1 }}
        className="mt-10 font-thin opacity-0 cursor-pointer lg:text-h1 text-h3"
        onClick={() => setCurrentCoordinateKey('hero-primary')}
      >
        <span id="hero-primary" className="lg:text-h1 text-h3">
          Frontend Developer
        </span>{' '}
        &
      </motion.h1>
      <motion.h1
        id="hero-secondary"
        transition={{ duration: 2, delay: 5.5 }}
        animate={{ opacity: 1 }}
        className="font-thin opacity-0 cursor-pointer lg:text-h1 text-h3"
        onClick={() => setCurrentCoordinateKey('hero-secondary')}
      >
        Computer Science Enthusiast
      </motion.h1>
      <HeroSelectionIndicator
        {...currentCoordinates}
        bottomBadge={currentCoordinateKey === 'hero-secondary'}
      />
    </motion.section>
  )
}
