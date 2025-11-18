import { useState } from 'react'

const items = [
  { type: 'video', title: 'Brand Reel', src: 'https://cdn.coverr.co/videos/coverr-man-filming-a-video-6530/1080p.mp4' },
  { type: 'image', title: 'Portrait Series', src: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop' },
  { type: 'video', title: 'Product Teaser', src: 'https://cdn.coverr.co/videos/coverr-using-a-camera-6718/1080p.mp4' },
  { type: 'image', title: 'Analog Vibes', src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' },
  { type: 'video', title: 'Event Recap', src: 'https://cdn.coverr.co/videos/coverr-a-detailed-shot-of-a-film-reel-11010/1080p.mp4' },
  { type: 'image', title: 'Lifestyle Set', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const filtered = items.filter(i => filter === 'all' ? true : i.type === filter)

  return (
    <section id="portfolio" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">Portfolio</h2>
            <p className="mt-2 text-zinc-400">Ein Auszug aus aktuellen Foto- und Filmprojekten.</p>
          </div>
          <div className="flex items-center gap-2">
            {['all','video','image'].map(v => (
              <button key={v} onClick={() => setFilter(v)} className={`px-4 py-2 rounded-full text-sm border transition-colors ${filter===v ? 'bg-amber-500 text-zinc-900 border-amber-400' : 'border-zinc-800 text-zinc-300 hover:text-white'}`}>
                {v === 'all' ? 'Alle' : v === 'video' ? 'Video' : 'Foto'}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, idx) => (
            <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/40">
              {item.type === 'image' ? (
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <video src={item.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                <span className="text-zinc-100 text-sm">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
