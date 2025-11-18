import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
      </main>
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Olivrr Media</p>
          <div className="text-zinc-500 text-sm">Modern • Minimal • Film & Foto</div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

export function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Contact />
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Olivrr Media</p>
          <div className="text-zinc-500 text-sm">Modern • Minimal • Film & Foto</div>
        </div>
      </footer>
    </div>
  )
}
