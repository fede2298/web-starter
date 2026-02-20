import Header from '../components/Header'
import Footer from '../components/Footer'
import FeatureCard from '../components/FeatureCard'
import { useEffect, useState } from 'react'

type Feature = { id: string; title: string; description: string }

export default function Home() {
  const [features, setFeatures] = useState<Feature[]>([])
  useEffect(()=>{
    fetch('/api/features').then(r=>r.json()).then(data=>setFeatures(data))
  },[])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Pagina Moderna</h1>
              <p className="mt-4 text-slate-600">Una singola pagina moderna, responsive e dinamica.</p>
            </div>

            <div id="features" className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
              {features.map(f=> (
                <FeatureCard key={f.id} title={f.title} description={f.description} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
