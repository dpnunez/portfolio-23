'use client'
import { aboutCards } from '@/constants'
import Image from 'next/image'
import { BackpackIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

interface CardProps {
  title: string
  description: string
  location: string
  Icon: typeof BackpackIcon
}

export function About() {
  return (
    <section className="container grid grid-cols-12 gap-x-8 mb-32">
      <div className="overflow-hidden col-span-12">
        <motion.h2
          initial={{ y: 32 }}
          layout
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-150px 0px -150px 0px' }}
          className="opacity-0"
        >
          About
        </motion.h2>
      </div>
      <div className="col-span-12 lg:col-span-6 mb-20 mt-8">
        <motion.p
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-150px 0px -150px 0px' }}
          className="mb-6 opacity-0"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-150px 0px -150px 0px' }}
          className="opacity-0"
        >
          Eea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </motion.p>
      </div>
      <Cards />
    </section>
  )
}

function Cards() {
  return (
    <motion.ul className="grid col-span-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {aboutCards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </motion.ul>
  )
}

function Card({ title, description, location, Icon }: CardProps) {
  return (
    <motion.li
      className="col-span-1 w-full rounded-3xl h-[434px] ring-1 ring-gray-500 p-4 relative cursor-pointer opacity-0"
      initial={{ y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        opacity: { duration: 0.5, delay: 0.1 },
        layout: { duration: 0.5 },
      }}
    >
      <Image
        src="https://source.unsplash.com/random"
        alt="lorem"
        width={500}
        height={500}
        style={{
          objectFit: 'cover',
          height: '322px',
          position: 'absolute',
          width: 'calc(100% - 32px)',
        }}
        className="blur-2xl opacity-50 -z-10"
      />
      <Image
        src="https://source.unsplash.com/random/"
        alt="lorem"
        width={500}
        height={500}
        style={{
          objectFit: 'cover',
          height: '322px',
          width: '100%',
        }}
        className="z-10 rounded-2xl hover:bg-[120%] brightness-75 hover:brightness-100 transition-all duration-300"
      />
      <div className="flex flex-col gap-4 mt-3">
        <h3 className="col-span-2 flex items-center gap-4">
          <Icon className="w-6 h-6" /> {title}
        </h3>
        <div className="flex">
          <span className="flex-1 text-caption">{description}</span>
          <span className="text-caption">{location}</span>
        </div>
      </div>
    </motion.li>
  )
}
