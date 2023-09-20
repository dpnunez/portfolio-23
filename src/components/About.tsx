'use client'
import { aboutCards } from '@/constants'
import Image from 'next/image'
import { BackpackIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { useNavigation } from '@/global/navigation'

interface CardProps {
  title: string
  description: string
  location: string
  Icon: typeof BackpackIcon
  image: string
}

export function About() {
  const addNavigationStack = useNavigation((state) => state.pushActiveStack)
  const removeNavigationStack = useNavigation(
    (state) => state.removeFromActiveStack,
  )

  return (
    <motion.section
      onViewportLeave={() => removeNavigationStack('about')}
      onViewportEnter={() => addNavigationStack('about')}
      viewport={{ margin: '-150px 0px -150px 0px' }}
      id="about"
      className="container grid grid-cols-12 gap-x-8 mb-32 mt-48"
    >
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
          I&apos;m an experienced front-end developer with a passion for
          crafting outstanding web experiences. With 4+ years in the field,
          I&apos;ve honed my skills in turning creative designs into functional
          and responsive web interfaces.
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-150px 0px -150px 0px' }}
          className="opacity-0"
        >
          Throughout my career, I&apos;ve built a track record of successful
          collaborations with design teams, bringing visually captivating web
          solutions to life. My toolkit includes JavaScript, React and Next.js,
          and I&apos;ve consistently improved website performance and SEO
          strategies.
        </motion.p>
      </div>
      <Cards />
    </motion.section>
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

function Card({ title, description, location, Icon, image }: CardProps) {
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
        src={image}
        alt={title}
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
        src={image}
        alt={title}
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
