import { Camera, Scissors, Image as ImageIcon, Film } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Videoschnitt',
    desc: 'Dynamischer Schnitt, Sounddesign und Color Grading für starke Geschichten.'
  },
  {
    icon: Camera,
    title: 'Kameraführung',
    desc: 'Sichere, kreative Kamerarbeit – von Run-and-Gun bis Studio-Setup.'
  },
  {
    icon: Film,
    title: 'Foto-/Filmprojekte',
    desc: 'Konzeption, Produktion und Umsetzung für Content, Ads und Image.'
  },
  {
    icon: ImageIcon,
    title: 'Bildbearbeitung',
    desc: 'Retusche, Farblook und Export – präzise auf dein Brand-Design abgestimmt.'
  }
]

export default function Services() {
  return (
    <section id="leistungen" className="relative py-20 bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_20%_0%,rgba(219,180,99,0.15),transparent),radial-gradient(400px_200px_at_80%_0%,rgba(219,180,99,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">Leistungen</h2>
        <p className="mt-2 text-zinc-400 max-w-2xl">Klar strukturiert, flexibel buchbar – exakt das, was dein Projekt benötigt.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600/90 flex items-center justify-center text-zinc-900 shadow">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-zinc-50 font-medium">{title}</h3>
              <p className="mt-2 text-zinc-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
