import Link from 'next/link'
import type { Project } from '@/data/projects'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full transition-all hover:shadow-glow hover:-translate-y-0.5 hover:border-accent/50 bg-card/50 backdrop-blur border-border/50">
        <CardHeader>
          <div className="flex items-baseline justify-between gap-3">
            <CardTitle className="text-lg font-medium group-hover:text-accent transition-colors">{project.title}</CardTitle>
            <span className="text-xs text-muted-foreground font-medium">{project.year}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{project.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 6).map((t) => (
              <Badge key={t} variant="secondary" className="hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-colors">
                {t}
              </Badge>
            ))}
            {project.tags.length > 6 && (
              <Badge variant="outline" className="hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-colors">
                +{project.tags.length - 6}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-accent font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            View details <ArrowRight className="h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
