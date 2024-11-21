'use client'
import { EMCLayout } from '@/components/emc-layout'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EMCPage() {
  return (
    <EMCLayout>
      <div className="space-y-6">
        <section id="overview">
          <h2 className="text-3xl font-bold">Event Management Committee Overview</h2>
          <p className="mt-2">
            The Event Management Committee (EMC) is responsible for planning, organizing, and executing all student council events. We work tirelessly to ensure that each event is memorable, engaging, and aligns with the goals of our student body.
          </p>
        </section>

        <section id="responsibilities">
          <h2 className="text-3xl font-bold">Our Responsibilities</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Conceptualize and plan diverse events throughout the academic year</li>
            <li>Coordinate with other committees and school administration</li>
            <li>Manage event budgets and resources effectively</li>
            <li>Promote events and handle ticket sales when applicable</li>
            <li>Oversee event setup, execution, and cleanup</li>
          </ul>
        </section>

        <section id="team-heads">
          <h2 className="text-3xl font-bold">Meet the Team Heads</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Mohammed Husamuddin", role: "EMC Technical Head", image: "/team/husam.jpg" },
              { name: "Rushil Sharma", role: "Logistics Coordinator", image: "/team/husam.jpg" },
              { name: "Charvik", role: "Creative Director", image: "/team/husam.jpg" },
            ].map((head) => (
              <Card key={head.name}>
                <CardHeader className="text-center">
                  <Image
                    src={head.image}
                    alt={head.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-2">{head.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{head.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="teams-departments">
          <h2 className="text-3xl font-bold">Teams/Departments and their Responsibilities</h2>
          <div className="mt-4 space-y-4">
            {[
              {
                name: "Event Planning Team",
                responsibilities: [
                  "Conceptualize event themes and formats",
                  "Create detailed event timelines and schedules",
                  "Coordinate with other teams to ensure smooth execution"
                ]
              },
              {
                name: "Logistics Team",
                responsibilities: [
                  "Manage venue selection and setup",
                  "Coordinate equipment and supplies",
                  "Oversee event day operations"
                ]
              },
              {
                name: "Marketing and Promotions Team",
                responsibilities: [
                  "Develop marketing strategies for events",
                  "Create and distribute promotional materials",
                  "Manage social media campaigns"
                ]
              },
              {
                name: "Budget and Finance Team",
                responsibilities: [
                  "Prepare and manage event budgets",
                  "Handle ticket sales and financial transactions",
                  "Prepare financial reports post-event"
                ]
              }
            ].map((team) => (
              <Card key={team.name}>
                <CardHeader>
                  <CardTitle>{team.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    {team.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="upcoming-events">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <p className="mt-2">
            Stay tuned for our exciting lineup of events! Check back here or on our Events page for the latest updates.
          </p>
        </section>

        <section id="past-events">
          <h2 className="text-3xl font-bold">Past Events Highlights</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <Image src="/placeholder.svg?height=200&width=300" alt="Spring Fling" width={300} height={200} className="mb-2" />
              <h3 className="text-xl font-semibold">Spring Fling</h3>
              <p>Our annual celebration of the season with music, games, and food.</p>
            </div>
            <div className="border p-4 rounded-lg">
              <Image src="/placeholder.svg?height=200&width=300" alt="Winter Formal" width={300} height={200} className="mb-2" />
              <h3 className="text-xl font-semibold">Winter Formal</h3>
              <p>A magical evening of dancing and celebration for all students.</p>
            </div>
          </div>
        </section>

        <section id="join-emc">
          <h2 className="text-3xl font-bold">Join the EMC</h2>
          <p className="mt-2">
            Interested in being part of the team that brings exciting events to life? We&apos;re always looking for creative and enthusiastic students to join the Event Management Committee!
          </p>
          <Button className="mt-4">Apply to Join EMC</Button>
        </section>
      </div>
    </EMCLayout>
  )
}

