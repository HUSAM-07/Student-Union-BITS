import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

interface Event {
  date: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

interface EventTimelineProps {
  events: Event[];
  title: string;
}

export function EventTimeline({ events, title }: EventTimelineProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">{title}</h2>
      <div className="relative">
        {events.map((event: Event, index: number) => (
          <div key={index} className="mb-16 last:mb-0 relative">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-semibold mr-4 w-20 text-right text-gray-500">{event.year}</div>
              <div className="w-4 h-4 bg-primary rounded-full z-10"></div>
              <div className="text-lg ml-4 text-gray-600">{event.date}</div>
            </div>
            <Card className="ml-0 md:ml-32 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {index < events.length - 1 && (
              <div className="absolute left-[9px] md:left-24 top-4 bottom-0 w-px border-l border-dashed border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

