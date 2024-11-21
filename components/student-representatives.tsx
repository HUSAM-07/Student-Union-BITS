import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const representatives = [
  {
    name: "Sivaa B",
    role: "President",
    image: "/team/husam.jpg",
    description: "Senior, passionate about student advocacy and school improvement."
  },
  {
    name: "Mohammed Shamsuddin",
    role: "Vice President",
    image: "/team/husam.jpg",
    description: "Junior, focused on promoting diversity and inclusion in our school."
  },
  {
    name: "Shaikh Anas",
    role: "HR 4th Year",
    image: "/team/husam.jpg",
    description: "Sophomore, dedicated to improving communication between students and faculty."
  },
  {
    name: "Udhay Jhohar",
    role: "Ex-Officio",
    image: "/team/husam.jpg",
    description: "Junior, committed to responsible management of student council funds."
  }
]

export function StudentRepresentatives() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Meet Your Student Representatives
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {representatives.map((rep) => (
            <Card key={rep.name} className="flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={rep.image}
                  alt={rep.name}
                  width={400}
                  height={400}
                  className="rounded-t-lg object-cover w-full h-[200px]"
                />
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <CardTitle className="text-xl mb-2">{rep.name}</CardTitle>
                <p className="font-semibold text-primary mb-2">{rep.role}</p>
                <p className="text-sm text-muted-foreground">{rep.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

