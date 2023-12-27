import BlogSection from '@/sections/BlogSection'
import CasosDeSucesso from '@/sections/CasosDeSucesso'
import EntreEmContato from '@/sections/EntreEmContato'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import NossosServiços from '@/sections/NossosServiços'
import PerguntasFrequentes from '@/sections/PerguntasFrequentes'
import SobreMim from '@/sections/SobreMim'

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMim />
      <NossosServiços />
      <CasosDeSucesso />
      <BlogSection />
      <PerguntasFrequentes />
      <EntreEmContato />
      <Footer />
    </>
  )
}
