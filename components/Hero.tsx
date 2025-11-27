"use client"
import { useEffect, useState } from 'react'

const titles = ['GenAI Engineer', 'Python Developer', 'Data Engineer', 'Data Analyst']

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const currentTitle = titles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Pause before deleting
          setIsPaused(true)
          setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, 2000)
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentTitle.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % titles.length)
          setCharIndex(0)
        }
      }
    }, isDeleting ? 50 : 100) // Faster when deleting

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentIndex, isPaused])

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,209,197,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b2026_1px,transparent_1px),linear-gradient(to_bottom,#1b2026_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
          Malik Hassan Raza
        </h1>
        <div className="mt-4 h-8 sm:h-10 md:h-12">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/90">
            <span className="text-accent">{displayedText}</span>
            <span className="animate-pulse text-accent">|</span>
          </p>
        </div>
        <p className="mt-8 text-sm sm:text-base text-foreground/70">
          Building intelligent systems and scalable AI solutions
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/malik-hassan-raza-resume.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
          <a href="mailto:raza.malikhassan55@gmail.com" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
