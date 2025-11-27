import Link from 'next/link'

export default function Home() {
  return (
    <main className="section py-16 sm:py-24">
      <header>
        <h1 className="text-3xl font-semibold">Hi — I'm Hassan Raza</h1>
        <p className="mt-3 text-muted">Welcome to my portfolio. Browse my projects below.</p>
      </header>

      <section className="mt-8">
        <Link href="/projects" className="btn btn-primary">View Projects</Link>
      </section>
    </main>
  )
}
