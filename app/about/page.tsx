'use client'
import { AboutLayout } from '@/components/about-layout'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function AboutPage() {
  return (
    <AboutLayout>
      <div className="space-y-6">
        <section id="mission">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-2">
            Our mission is to foster a vibrant and inclusive school environment where every student's voice is heard and valued. We strive to represent student interests, organize engaging events, promote leadership development, and facilitate open communication between students, faculty, and administration.
          </p>
        </section>

        <section id="history">
          <h2 className="text-3xl font-bold">Our History</h2>
          <p className="mt-2">
            Founded in 1985, the Student Council has been a cornerstone of student representation and school improvement for over three decades. From its humble beginnings as a small group of passionate students, we have grown into a robust organization that plays a crucial role in shaping the school experience for all.
          </p>
        </section>

        <section id="achievements">
          <h2 className="text-3xl font-bold">Achievements</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Implemented a successful recycling program, reducing school waste by 30%</li>
            <li>Organized annual charity drives, raising over $50,000 for local causes</li>
            <li>Established a peer tutoring program, helping hundreds of students improve their grades</li>
            <li>Successfully advocated for healthier lunch options in the school cafeteria</li>
          </ul>
        </section>

        <section id="team">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="mt-2">
            Our Student Council is made up of dedicated students from all grade levels. Led by an elected executive board, we work collaboratively to address student concerns and organize school-wide initiatives. Our diverse team brings a wide range of perspectives and ideas to the table.
          </p>
        </section>

        <section id="committees">
          <h2 className="text-3xl font-bold">Committees and Functions</h2>
          <p className="mt-2">
            Our Student Council operates through several committees, each focused on specific areas of student life and school improvement:
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li><strong>Events Committee:</strong> Plans and executes school-wide events and activities</li>
            <li><strong>Academic Affairs Committee:</strong> Addresses academic concerns and promotes educational initiatives</li>
            <li><strong>Community Outreach Committee:</strong> Organizes volunteer opportunities and charity drives</li>
            <li><strong>Student Welfare Committee:</strong> Focuses on student health, safety, and well-being</li>
            <li><strong>Communications Committee:</strong> Manages internal and external communications, including social media</li>
          </ul>
        </section>

        <section id="resources">
          <h2 className="text-3xl font-bold">Resources and Brand Assets</h2>
          <p className="mt-2">
            Download our official logos and brand assets for use in school-approved projects and communications:
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <Image src="/placeholder.svg?height=100&width=200" alt="Student Council Logo" width={200} height={100} className="mb-2" />
              <Button asChild className="w-full">
                <a href="/brand-assets/emc.png" download>Download Logo (PNG)</a>
              </Button>
            </div>
            <div className="border p-4 rounded-lg">
              <Image src="/placeholder.svg?height=100&width=200" alt="Student Council Banner" width={200} height={100} className="mb-2" />
              <Button asChild className="w-full">
                <a href="/brand-assets/sc-logo.png" download>Download Banner (JPG)</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="get-involved">
          <h2 className="text-3xl font-bold">Get Involved</h2>
          <p className="mt-2">
            We encourage all students to get involved with the Student Council. Whether you want to run for a position, volunteer for events, or simply share your ideas, there's a place for you in our organization. Join us in our efforts to create positive change and lasting memories during our time here.
          </p>
        </section>
      </div>
    </AboutLayout>
  )
}

