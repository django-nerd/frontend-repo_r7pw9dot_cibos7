import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-zinc-950" id="start">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/50 to-zinc-950 pointer-events-none" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center">
        <p className="text-amber-300/80 tracking-widest text-xs uppercase">Olivrr Media</p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-semibold text-zinc-50 tracking-tight">
          Moderne Film- und Fotoproduktion für Marken mit Anspruch
        </h1>
        <p className="mt-6 text-zinc-300 max-w-2xl mx-auto">
          Videoschnitt, Kameraführung, Foto-/Filmprojekte und Bildbearbeitung – präzise, kreativ und zuverlässig umgesetzt.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#portfolio" className="px-5 py-3 rounded-full bg-amber-500/90 hover:bg-amber-400 text-zinc-900 font-medium transition-colors">Portfolio ansehen</a>
          <a href="/kontakt" className="px-5 py-3 rounded-full border border-amber-400/40 text-amber-300 hover:border-amber-400 hover:text-amber-200 transition-colors">Projekt anfragen</a>
        </div>
      </div>
    </section>
  )
}
