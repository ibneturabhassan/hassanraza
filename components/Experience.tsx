export default function Experience() {
  return (
    <section id="experience" className="section py-16 sm:py-24">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="mt-6 grid gap-4">
        <article className="card p-5 hover:border-accent/50 transition-colors duration-300">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-medium text-accent">Software Engineer · AI & LLM</h3>
            <span className="text-xs text-muted">Jan 2023 - Oct 2025</span>
          </div>
          <p className="mt-1 text-sm text-muted">Turing · Remote</p>
          <ul className="mt-3 list-disc pl-5 text-sm text-foreground/85 space-y-1">
            <li>
              Led a pod of 9 AI engineers within a 600-person org, consistently shipping 70-80 curated trajectories
              per week across code generation, reasoning, and conversational LLM tracks.
            </li>
            <li>
              Formalized SOPs, validation workflows, and reviewer playbooks that drove 100% compliance and drastically
              reduced delivery defects.
            </li>
            <li>
              Standardized task taxonomies and benchmarking rubrics, enabling smoother cross-functional handoffs and
              measurable model improvements.
            </li>
            <li>
              Produced high-signal datasets for supervised fine-tuning and RLHF, delivered detailed evaluation rationales,
              and earned "Rising Star", "Top Trainer", and "Top Lead" recognition.
            </li>
          </ul>
        </article>
        <article className="card p-5 hover:border-accent/50 transition-colors duration-300">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-medium text-accent">Junior Consultant · Data Analytics</h3>
            <span className="text-xs text-muted">Jul 2021 - Jan 2023</span>
          </div>
          <p className="mt-1 text-sm text-muted">Systems Limited · Islamabad, Pakistan</p>
          <ul className="mt-3 list-disc pl-5 text-sm text-foreground/85 space-y-1">
            <li>
              Built high-performance IBM DataStage ETL pipelines that improved ingestion efficiency by 30% for a major
              telecom client while protecting end-to-end data quality.
            </li>
            <li>
              Developed Power BI dashboards and optimized SQL, cutting reporting cycles by 40% and accelerating
              decision-making across business units.
            </li>
            <li>
              Automated post-migration validation with Python and Alteryx, sustaining 98%+ data accuracy and strengthening
              internal controls.
            </li>
            <li>
              Coordinated closely with cross-functional stakeholders to unblock migrations and translate analytics needs
              into actionable engineering tasks.
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
