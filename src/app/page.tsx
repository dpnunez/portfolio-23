import {
  GridBackground,
  Header,
  Hero,
  About,
  Stack,
  Navigation,
  Contact,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      <GridBackground />
      <Header />
      <main>
        <Hero />
        <div className="sticky top-4 flex justify-center z-20">
          <Navigation />
        </div>
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
