'use client'
import Script from 'next/script'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, FileText, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative container py-16 sm:py-24">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-purple-500/5 -z-10" />
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Contact
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <a
            href="mailto:raza.malikhassan55@gmail.com"
            className="group block"
          >
            <Card className="h-full transition-all hover:shadow-glow hover:-translate-y-0.5 hover:border-accent/50 bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Mail className="h-8 w-8 mb-3 text-accent" />
                <h3 className="text-lg font-medium text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                  raza.malikhassan55@gmail.com
                </p>
              </CardContent>
            </Card>
          </a>

          <a
            href="tel:+4915210737287"
            className="group block"
          >
            <Card className="h-full transition-all hover:shadow-glow hover:-translate-y-0.5 hover:border-accent/50 bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="h-8 w-8 mb-3 text-accent" />
                <h3 className="text-lg font-medium text-foreground mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                  +49 152 10737287
                </p>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://www.linkedin.com/in/malik-hassan-raza-2a6574153/"
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <Card className="h-full transition-all hover:shadow-glow hover:-translate-y-0.5 hover:border-accent/50 bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Linkedin className="h-8 w-8 mb-3 text-accent" />
                <h3 className="text-lg font-medium text-foreground mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                  Connect with me
                </p>
              </CardContent>
            </Card>
          </a>

          <a
            href="/malik-hassan-raza-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <Card className="h-full transition-all hover:shadow-glow hover:-translate-y-0.5 hover:border-accent/50 bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <FileText className="h-8 w-8 mb-3 text-accent" />
                <h3 className="text-lg font-medium text-foreground mb-2">Resume</h3>
                <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                  Download PDF
                </p>
              </CardContent>
            </Card>
          </a>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Schedule a Meeting
            </h3>
            <Card className="bg-card/50 backdrop-blur border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div
                  className="calendly-inline-widget w-full"
                  data-url="https://calendly.com/hassan-malik-18/30min"
                  style={{ minWidth: '320px', height: '1000px' }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  )
}

