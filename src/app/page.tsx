import { GridBackground, Logo, Signature } from '@/components'

export default function Home() {
  return (
    <main>
      <GridBackground />
      <header className="container">
        <Logo />
      </header>
      <Signature />
    </main>
  )
}
