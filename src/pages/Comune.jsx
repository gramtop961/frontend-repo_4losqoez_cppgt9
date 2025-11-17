import { Link, useParams } from 'react-router-dom'
import { comuniBySlug } from '../data/comuni'

export default function Comune() {
  const { slug } = useParams()
  const comune = comuniBySlug[slug]

  if (!comune) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-bold">Comune non trovato</h1>
          <Link className="mt-6 inline-block text-sky-300 hover:text-white" to="/">Torna alla home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/" className="text-sky-300 hover:text-white">← Torna indietro</Link>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img src={comune.image} alt={comune.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold">{comune.name}</h1>
            <p className="text-sky-100/80 mt-2">{comune.tagline}</p>
            <p className="mt-4 text-sky-100/90 leading-relaxed">{comune.description}</p>
            <ul className="mt-6 grid gap-2 text-sky-100/90 list-disc list-inside">
              {comune.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`http://www.ragusaweb.com/maltese16`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-3"
              >
                Alloggia con Maltese16
              </a>
              <a
                href={`http://ragusaweb.com/correri125`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 ring-1 ring-white/30"
              >
                Alloggia con Correri125
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
