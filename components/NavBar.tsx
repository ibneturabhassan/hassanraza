"use client"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.2, 0.6] }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-wider bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent hover:from-accent hover:via-foreground hover:to-accent transition-all duration-300"
        >
          Malik Hassan Raza
        </a>
        <nav className="hidden gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-2 text-sm transition-all duration-200 relative ${active === s.id
                  ? 'text-accent font-medium'
                  : 'text-foreground/85 hover:text-accent'
                }`}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container py-2 flex flex-col">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-2 py-2 text-sm transition-colors rounded-md ${active === s.id
                    ? 'text-accent font-medium bg-accent/10'
                    : 'text-foreground/90 hover:text-accent hover:bg-accent/5'
                  }`}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
