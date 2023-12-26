import CasosDeSucesso from '@/sections/CasosDeSucesso'
import Hero from '@/sections/Hero'
import NossosServiços from '@/sections/NossosServiços'
import SobreMim from '@/sections/SobreMim'

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMim />
      <NossosServiços />
      <CasosDeSucesso />
    </>
  )
}
