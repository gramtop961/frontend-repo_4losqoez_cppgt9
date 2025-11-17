export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-sky-100/70 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} RagusaWeb.com — Guida ai comuni della Provincia di Ragusa</p>
        <div className="flex items-center gap-4">
          <a href="http://www.ragusaweb.com/maltese16" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Maltese16</a>
          <span className="opacity-40">•</span>
          <a href="http://ragusaweb.com/correri125" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Correri125</a>
        </div>
      </div>
    </footer>
  )
}
