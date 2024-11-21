import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const merchItems = [
  {
    id: 1,
    name: "School Logo T-Shirt",
    price: 20,
    image: "/placeholder.svg?height=300&width=300",
    description: "Show your school pride with our official logo t-shirt."
  },
  {
    id: 2,
    name: "Student Council Hoodie",
    price: 35,
    image: "/placeholder.svg?height=300&width=300",
    description: "Stay warm and represent your student council with this cozy hoodie."
  },
  {
    id: 3,
    name: "School Spirit Water Bottle",
    price: 15,
    image: "/placeholder.svg?height=300&width=300",
    description: "Stay hydrated in style with our school-themed water bottle."
  },
  {
    id: 4,
    name: "Mascot Plush Toy",
    price: 25,
    image: "/placeholder.svg?height=300&width=300",
    description: "Take home a cuddly version of our school mascot."
  },
  {
    id: 5,
    name: "School Pennant",
    price: 10,
    image: "/placeholder.svg?height=300&width=300",
    description: "Decorate your room with our colorful school pennant."
  },
  {
    id: 6,
    name: "Student Council Notebook",
    price: 8,
    image: "/placeholder.svg?height=300&width=300",
    description: "Take notes in style with our official student council notebook."
  }
]

export function MerchGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {merchItems.map((item) => (
        <Card key={item.id} className="flex flex-col">
          <CardHeader>
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </CardHeader>
          <CardContent className="flex-grow">
            <CardTitle>{item.name}</CardTitle>
            <p className="text-muted-foreground mt-2">{item.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <span className="text-lg font-bold">${item.price}</span>
            <Button>Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

