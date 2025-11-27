'use client'
import Script from 'next/script'

export default function Contact() {
  return (
    <section id="contact" className="relative section py-16 sm:py-24">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-purple-500/5" />
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Contact
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <a
            href="mailto:raza.malikhassan55@gmail.com"
            className="card p-6 hover:border-accent/50 transition-colors duration-300 group"
          >
            <div className="text-3xl mb-3">📧</div>
            <h3 className="text-lg font-medium text-accent mb-2">Email</h3>
            <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
              raza.malikhassan55@gmail.com
            </p>
          </a>

          <a
            href="tel:+4915210737287"
            className="card p-6 hover:border-accent/50 transition-colors duration-300 group"
          >
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-lg font-medium text-accent mb-2">Phone</h3>
            <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
              +49 152 10737287
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/malik-hassan-raza-2a6574153/"
            target="_blank"
            rel="noreferrer"
            className="card p-6 hover:border-accent/50 transition-colors duration-300 group"
          >
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-lg font-medium text-accent mb-2">LinkedIn</h3>
            <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
              Connect with me
            </p>
          </a>

          <a
            href="/malik-hassan-raza-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="card p-6 hover:border-accent/50 transition-colors duration-300 group"
          >
            <div className="text-3xl mb-3">📄</div>
            <h3 className="text-lg font-medium text-accent mb-2">Resume</h3>
            <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
              Download PDF
            </p>
          </a>
        </div>

        {/* Calendly Widget */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Schedule a Meeting
          </h3>
          <div className="card p-6">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hassan-malik-18/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
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

