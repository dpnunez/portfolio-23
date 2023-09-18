import { Signature } from '@/components'

export function Footer() {
  return (
    <footer className="container flex justify-center items-end relative">
      <div className="p-10 mb-40">
        <Signature />
      </div>
      <div className="w-full h-2/3	 absolute bottom-0 backdrop-blur-lg" />
    </footer>
  )
}
