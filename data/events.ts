export interface Event {
  date: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

export const upcomingEvents: Event[] = [
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

export const archivedEvents: Event[] = [
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