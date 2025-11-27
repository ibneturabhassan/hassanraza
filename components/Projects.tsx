"use client"
import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects as allProjects } from '@/data/projects'
import { Button } from '@/components/ui/button'

const filters = ['All', 'LLM', 'Data Engineering', 'Analytics', 'Research'] as const

type Filter = typeof filters[number]

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return allProjects
    return allProjects.filter((p) => p.type === filter)
  }, [filter])

  return (
    <section id="projects" className="container py-16 sm:py-24">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="hidden sm:flex gap-2">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setFilter(f)}
              className={filter === f ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}
            >
              {f}
            </Button>
          ))}
        </div>
      </div>
      <div className="sm:hidden mt-4">
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setFilter(f)}
              className={filter === f ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}
            >
              {f}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
