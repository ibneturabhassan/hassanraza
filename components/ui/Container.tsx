export default function Container({ children, id, className }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`section py-16 sm:py-24 ${className ?? ''}`}>
      {children}
    </section>
  )
}
