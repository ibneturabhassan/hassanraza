import Link from 'next/link'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="card p-5 transition hover:shadow-glow hover:-translate-y-0.5 hover:border-accent/50">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-medium group-hover:text-accent transition-colors">{project.title}</h3>
          <span className="text-xs text-accent font-medium">{project.year}</span>
        </div>
        <p className="mt-2 text-sm text-foreground/85 line-clamp-3">{project.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 6).map((t) => (
            <span key={t} className="tag hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-colors">
              {t}
            </span>
          ))}
          {project.tags.length > 6 && (
            <span className="tag hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-colors">
              +{project.tags.length - 6}
            </span>
          )}
        </div>
        <div className="mt-4 text-sm text-accent font-medium group-hover:translate-x-1 transition-transform inline-block">
          View details →
        </div>
      </article>
    </Link>
  )
}
