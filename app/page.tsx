import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { StudentRepresentatives } from '@/components/student-representatives'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Features />
      <StudentRepresentatives />
      <Footer />
    </main>
  )
}

