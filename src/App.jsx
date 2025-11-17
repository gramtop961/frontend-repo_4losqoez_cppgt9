import Hero from './components/Hero'
import ComuniGrid from './components/ComuniGrid'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.07),transparent_50%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <ComuniGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
