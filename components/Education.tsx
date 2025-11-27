export default function Education() {
  return (
    <section id="education" className="section py-16 sm:py-24">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
        Education
      </h2>
      <div className="mt-6 grid gap-4">
        <article className="card p-5 hover:border-accent/50 transition-colors duration-300">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-medium text-accent">BS in Computer Science</h3>
            <span className="text-xs text-muted">Graduated Jun 2021</span>
          </div>
          <p className="mt-1 text-sm text-muted">National University of Sciences and Technology · Islamabad, Pakistan</p>
          <ul className="mt-3 list-disc pl-5 text-sm text-foreground/85 space-y-1">
            <li>Final Year Project: Sleep Quality Analysis using Deep Learning (LSTM models with 98% accuracy).</li>
            <li>Explored AI, data warehousing, and large-scale software design.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
