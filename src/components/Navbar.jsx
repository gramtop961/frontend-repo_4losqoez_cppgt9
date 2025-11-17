import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-semibold transition ${
      isActive ? 'bg-white/10 text-white' : 'text-sky-100/80 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-white text-lg tracking-tight">
          RagusaWeb.com
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <a href="http://www.ragusaweb.com/maltese16" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg text-sm font-semibold text-sky-100/80 hover:text-white">
            Maltese16
          </a>
          <a href="http://ragusaweb.com/correri125" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg text-sm font-semibold text-sky-100/80 hover:text-white">
            Correri125
          </a>
        </nav>
      </div>
    </header>
  )
}
