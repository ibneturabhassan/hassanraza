"use client"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

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
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-purple-500/5 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,209,197,0.15),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)] -z-10" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b2026_1px,transparent_1px),linear-gradient(to_bottom,#1b2026_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 -z-10" />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            Malik Hassan Raza
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 h-8 sm:h-10 md:h-12"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/90 font-medium">
            <span className="text-accent">{displayedText}</span>
            <span className="animate-pulse text-accent">|</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          Building intelligent systems and scalable AI solutions. Passionate about leveraging data and generative AI to solve complex problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="/malik-hassan-raza-resume.pdf" target="_blank" rel="noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-accent/20 hover:bg-accent/10 hover:text-accent"
          >
            <a href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
