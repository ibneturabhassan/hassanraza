export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-border/60">
      <div className="section py-10 flex flex-col items-center gap-3 text-sm text-foreground/80">
        <div className="font-medium">Malik Hassan Raza</div>
        <div className="text-xs text-muted">© {year} Malik Hassan Raza. All rights reserved.</div>
      </div>
    </footer>
  )
}
