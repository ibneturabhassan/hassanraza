export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-500/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,209,197,0.08),transparent_70%)]" />

      <div className="relative z-10 section grid gap-10 sm:grid-cols-2 sm:items-center">
        <div>
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            About
          </h2>
          <p className="mt-3 text-foreground/85 max-w-prose">
            I'm an AI & LLM engineer with 4 years of experience leading data pods, curating training datasets,
            and building analytics platforms that make model quality measurable.
          </p>
          <p className="mt-3 text-foreground/85 max-w-prose">
            Recently I led a 9-person pod inside Turing's 600-engineer program, scaling throughput to 70-80
            high-quality trajectories per week while keeping compliance at 100%. I still love rolling up my sleeves
            to write Python, enforce SOPs, and close the loop between model experimentation and business needs.
          </p>
        </div>
        <div className="flex justify-center sm:justify-end">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full border-2 border-accent/30 overflow-hidden shadow-lg shadow-accent/10">
            <img
              src="/profile.png"
              alt="Malik Hassan Raza"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
