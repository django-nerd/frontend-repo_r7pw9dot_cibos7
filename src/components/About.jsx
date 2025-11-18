export default function About() {
  return (
    <section id="ueber" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">Über mich</h2>
          <p className="mt-4 text-zinc-400">
            Ich bin Oliver – jung, neugierig und tief in der kreativen Medienarbeit verwurzelt. Ob Kamera, Schnitt
            oder Postproduktion: Ich kombiniere modernes Storytelling mit einem klaren, minimalistischen Look.
          </p>
          <p className="mt-3 text-zinc-400">
            Ich arbeite schnell, präzise und lösungsorientiert. Für Marken, die Qualität schätzen und Content wollen,
            der Wirkung zeigt.
          </p>
        </div>
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-zinc-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
