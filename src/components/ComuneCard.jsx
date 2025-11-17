import { Link } from 'react-router-dom'

export default function ComuneCard({ comune }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-sky-400/40 transition">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={comune.image}
          alt={comune.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{comune.name}</h3>
        <p className="text-sky-100/80 text-sm mt-1">{comune.tagline}</p>
        <div className="mt-4 flex items-center gap-3">
          <Link
            to={`/comune/${comune.slug}`}
            className="inline-flex items-center text-sky-300 hover:text-white transition font-semibold"
          >
            Scopri di più →
          </Link>
          <a
            href={`http://www.ragusaweb.com/maltese16`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sky-300 hover:text-white transition font-semibold"
          >
            Maltese16
          </a>
          <a
            href={`http://ragusaweb.com/correri125`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sky-300 hover:text-white transition font-semibold"
          >
            Correri125
          </a>
        </div>
      </div>
    </div>
  )
}
