import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-amber-300' : 'text-zinc-300 hover:text-white'}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/70 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600" />
          <span className="text-zinc-100 font-semibold tracking-wide">Olivrr Media</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <a href="#leistungen" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white">Leistungen</a>
          <a href="#portfolio" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white">Portfolio</a>
          <a href="#ueber" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white">Über mich</a>
          {navItem('/kontakt', 'Kontakt')}
        </nav>

        <button className="md:hidden text-zinc-200" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-800/60 bg-zinc-900/95">
          <div className="px-4 py-3 flex flex-col">
            <a href="#leistungen" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white" onClick={() => setOpen(false)}>Leistungen</a>
            <a href="#portfolio" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white" onClick={() => setOpen(false)}>Portfolio</a>
            <a href="#ueber" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white" onClick={() => setOpen(false)}>Über mich</a>
            {navItem('/kontakt', 'Kontakt')}
          </div>
        </div>
      )}
    </header>
  )
}
