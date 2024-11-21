import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MerchGrid } from '@/components/merch-grid'

export default function MerchStorePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
            Student Council Merch Store
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Show your school spirit with our official merchandise!
          </p>
          <MerchGrid />
        </div>
      </section>
      <Footer />
    </main>
  )
}

