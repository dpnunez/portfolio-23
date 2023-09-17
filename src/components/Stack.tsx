'use client'
import { animationStackCardsVariants } from '@/constants'
import { useNavigation } from '@/global/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function Stack() {
  const addNavigationStack = useNavigation((state) => state.pushActiveStack)
  const removeNavigationStack = useNavigation(
    (state) => state.removeFromActiveStack,
  )

  return (
    <motion.section
      onViewportEnter={() => addNavigationStack('stack')}
      onViewportLeave={() => removeNavigationStack('stack')}
      id="stack"
      className="container grid grid-cols-12 mb-32"
    >
      <div className="overflow-hidden col-span-12">
        <motion.h2
          layout
          initial={{ y: 32 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-150px 0px -150px 0px' }}
          className="opacity-0"
        >
          Stack
        </motion.h2>
      </div>

      <p className="col-span-12 lg:col-span-6 mt-8 mb-14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="col-span-12 flex flex-col lg:flex-row gap-14 lg:gap-6 mb-14 lg:mb-6">
        <CardList
          kindBadge={() => (
            <CardBadge className="bg-primary-main bg-opacity-20 -top-10 right-0">
              base/framework
            </CardBadge>
          )}
          className="grid-cols-2 border-[1px] border-primary-low-opacity bg-primary-light bg-opacity-20 col-span-1"
          data={Array.from({ length: 4 })}
          gridComponent={() => (
            <GridComponent className="bg-primary-low-opacity" />
          )}
        />
        <CardList
          kindBadge={() => (
            <CardBadge className="bg-green bg-opacity-20 right-0 -top-10">
              libs/tools
            </CardBadge>
          )}
          className="grid-cols-2 lg:grid-cols-3 border-[1px] border-green-low-opacity bg-green bg-opacity-20 col-span-1"
          data={Array.from({ length: 6 })}
          gridComponent={() => (
            <GridComponent className="bg-green-low-opacity" />
          )}
        />
      </div>
      <div className="col-span-12 flex gap-14 lg:gap-6 flex-col lg:flex-row">
        <CardList
          kindBadge={() => (
            <CardBadge className="bg-purple bg-opacity-20 -top-10 lg:top-auto lg:-bottom-10 right-0">
              design/prototyping
            </CardBadge>
          )}
          className="grid-cols-2 border-[1px] border-purple-low-opacity bg-purple bg-opacity-20 col-span-1"
          data={Array.from({ length: 2 })}
          gridComponent={() => (
            <GridComponent className="bg-purple-low-opacity" />
          )}
        />
        <div>
          <div className="max-w-[550px] overflow-hidden">
            <motion.h3
              layout
              transition={{
                duration: 0.75,
                delay: 0.5,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 'all' }}
              className="text-h1 font-bold max-w-[550px] mb-4 opacity-0"
            >
              Experience with many other tools
            </motion.h3>
          </div>
          <motion.p
            className="text-h3 opacity-0"
            layout
            transition={{
              duration: 0.75,
              delay: 0.5,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 'all' }}
          >
            feel free to reach out and ask about a specific tool
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

interface CardListProps {
  data: any[]
  kindBadge: () => JSX.Element
  className?: string
  gridComponent: () => JSX.Element
}

function CardList({
  data,
  className,
  gridComponent: GridComponent,
  kindBadge: KindBadge,
}: CardListProps) {
  const [trigger, setTrigger] = useState(false)

  return (
    <motion.div
      initial={trigger ? 'visible' : 'hidden'}
      animate={trigger ? 'visible' : 'hidden'}
      variants={animationStackCardsVariants}
      onViewportEnter={() => setTrigger(true)}
      className={`relative grid rounded-2xl ring-prim p-5 gap-4 ${className}`}
    >
      <KindBadge />
      <div className="top-0 right-0 left-0 bottom-0 absolute overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute w-full h-screen flex">
          {Array.from({ length: 100 }).map((_, i) => (
            <GridComponent key={i} />
          ))}
        </div>
        <div className="top-0 right-0 left-0 bottom-0 absolute flex rotate-90">
          {Array.from({ length: 100 }).map((_, i) => (
            <GridComponent key={i} />
          ))}
        </div>
      </div>
      {data.map((item, i) => {
        return <Card key={i} />
      })}
    </motion.div>
  )
}

function GridComponent({ className }: { className?: string }) {
  return (
    <div
      className={`min-w-[1px] h-full mr-5 bg-primary-low-opacity ${className}`}
    />
  )
}

function CardBadge({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <span
      className={`text-gray-100 absolute rounded-md px-2 py-1 text-caption ${className}`}
    >
      {children}
    </span>
  )
}

function Card() {
  return (
    <motion.div
      variants={animationStackCardsVariants}
      className="w-full lg:w-[164px] rounded-2xl aspect-square bg-slate-50 z-10 opacity-0"
    ></motion.div>
  )
}
