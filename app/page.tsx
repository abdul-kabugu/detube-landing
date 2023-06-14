import { Creators, Hero, Quote, TopNav } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="">
        <TopNav  />
        <Hero />
        <Quote />
        <Creators />
      </div>
    </main>
  )
}
