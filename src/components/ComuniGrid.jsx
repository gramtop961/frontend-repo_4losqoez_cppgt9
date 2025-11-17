import ComuneCard from './ComuneCard'
import { comuni } from '../data/comuni'

export default function ComuniGrid() {
  return (
    <section id="comuni" className="relative py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">I 12 comuni della Provincia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comuni.map((c) => (
            <ComuneCard key={c.slug} comune={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
