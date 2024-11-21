import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EventTimeline } from '@/components/event-timeline'

interface Event {
  date: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

const upcomingEvents: Event[] = [
  {
    date: "Apr 2024",
    year: "2024",
    title: "Student Council Elections",
    description: "Cast your vote for the next student council representatives.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    date: "Sep 2024",
    year: "2024",
    title: "Fall Festival",
    description: "Join us for a day of fun activities, food, and music to celebrate the fall season.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    date: "Jan 2025",
    year: "2025",
    title: "Winter Formal Dance",
    description: "Get ready for a magical night of dancing and celebration.",
    image: "/placeholder.svg?height=200&width=300"
  }
];

const archivedEvents: Event[] = [
  {
    date: "Nov 2023",
    year: "2023",
    title: "Thanksgiving Food Drive",
    description: "We collected over 1000 pounds of food for local families in need.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    date: "May 2023",
    year: "2023",
    title: "Spring Talent Show",
    description: "Students showcased their amazing talents and raised funds for the arts program.",
    image: "/placeholder.svg?height=200&width=300"
  }
];

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-center">
            Events
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Stay updated with our latest events and activities
          </p>
          <EventTimeline events={upcomingEvents} title="Upcoming Events" />
          <div className="mt-24">
            <EventTimeline events={archivedEvents} title="Archived Events" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

