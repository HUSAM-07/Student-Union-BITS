import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'

interface AboutLayoutProps {
  children: React.ReactNode
}

export function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 container flex-col md:flex-row flex md:gap-6 md:py-6">
        <Sidebar className="md:w-1/4" />
        <main className="flex-1 py-6 md:py-0">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

