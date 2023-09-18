import { Hero, About, Stack, Navigation, Contact } from '@/components'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="sticky top-4 flex justify-center z-20">
        <Navigation />
      </div>
      <About />
      <Stack />
      <Contact />
    </main>
  )
}
