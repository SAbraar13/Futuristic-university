'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Stats />
      <Testimonials />
      <Gallery />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
