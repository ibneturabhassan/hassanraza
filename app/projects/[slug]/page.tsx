import { projects } from '@/data/projects'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const proj = projects.find((p) => p.slug === params.slug)
  if (!proj) return notFound()

  return (
    <main className="section py-16 sm:py-24">
      <Link href="/" className="text-sm text-accent">← Back to Projects</Link>
      <header className="mt-4">
        <h1 className="text-3xl font-semibold">{proj.title}</h1>
        <p className="mt-2 text-sm text-muted">{proj.year} • {proj.type}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {proj.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </header>

      <section className="mt-8 grid gap-6">
        <div className="card p-5">
          <h2 className="text-lg font-medium">Overview</h2>
          <p className="mt-2 text-foreground/85">{proj.detailedDescription}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card p-5 sm:col-span-2">
            <h3 className="text-base font-medium">Problem</h3>
            <p className="mt-2 text-foreground/85">{proj.problem}</p>
          </div>
          <div className="card p-5">
            <h3 className="text-base font-medium">Impact</h3>
            <p className="mt-2 text-foreground/85">{proj.impact}</p>
          </div>
        </div>

        <div className="card p-5">
          <h3 className="text-base font-medium">Solution</h3>
          <p className="mt-2 text-foreground/85">{proj.solution}</p>
        </div>

        <div className="card p-5">
          <h3 className="text-base font-medium">Responsibilities</h3>
          <ul className="mt-2 list-disc pl-5 text-foreground/85 space-y-1">
            {proj.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        {proj.links && (proj.links.github || proj.links.demo) && (
          <div className="flex gap-3">
            {proj.links.github && (
              <a href={proj.links.github} className="btn btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
            )}
            {proj.links.demo && (
              <a href={proj.links.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
            )}
          </div>
        )}
      </section>
    </main>
  )
}
