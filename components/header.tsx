import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <span className="sr-only">Student Council</span>
        <svg
          className="h-6 w-6"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
          <path d="M9 12v6" />
          <path d="M13 12v6" />
          <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
          <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
        </svg>
      </Link>
      <div className="ml-auto flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/events">
            Events
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/emc">
            EMC
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/merch">
            Merch Store
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
        <ThemeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
                Home
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
                About
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/events">
                Events
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/emc">
                EMC
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/merch">
                Merch Store
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

