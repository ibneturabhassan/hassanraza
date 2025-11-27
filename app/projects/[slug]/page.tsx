import { projects } from '@/data/projects'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const proj = projects.find((p) => p.slug === slug)
  if (!proj) return notFound()

  return (
    <main className="container py-16 sm:py-24">
      <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
        <Link href="/#projects" className="flex items-center gap-2 text-muted-foreground hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">{proj.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
          <span className="font-medium text-accent">{proj.year}</span>
          <span>•</span>
          <span>{proj.type}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {proj.tags.map((t) => (
            <Badge key={t} variant="secondary" className="hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-colors">
              {t}
            </Badge>
          ))}
        </div>
      </header>

      <div className="grid gap-8">
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{proj.detailedDescription}</p>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="md:col-span-2 bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{proj.problem}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{proj.impact}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle>Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{proj.solution}</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle>Responsibilities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              {proj.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {proj.links && (proj.links.github || proj.links.demo) && (
          <div className="flex gap-4 mt-4">
            {proj.links.github && (
              <Button asChild variant="outline" className="gap-2">
                <a href={proj.links.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
            )}
            {proj.links.demo && (
              <Button asChild className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={proj.links.demo} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
