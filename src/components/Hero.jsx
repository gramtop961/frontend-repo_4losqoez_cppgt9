import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-cyan-500/10 to-indigo-600/20" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
          RagusaWeb.com
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl text-sky-100">
          Il portale che valorizza i 12 comuni della Provincia di Ragusa: storie, luoghi,
          sapori e mare. Scopri ogni territorio e trova dove alloggiare.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="#comuni"
            className="inline-flex items-center rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-3 shadow-lg shadow-sky-900/30 transition"
          >
            Esplora i comuni
          </Link>
          <a
            href="http://www.ragusaweb.com/maltese16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 ring-1 ring-white/30"
          >
            Casa vacanza Maltese16
          </a>
        </div>
      </div>
    </section>
  )
}
