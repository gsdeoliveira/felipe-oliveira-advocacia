import Link from 'next/link'
import Button from '@/components/Button'
import SwiperSlider from '@/components/SwiperSlider'

const BlogSection = () => {
  return (
    <section className="lg:p-[50px] mt-[120px] lg:mt-[90px]">
      <h2 className="text-[30px] font-bold bg-text text-center px-[20px] lg:px-[50px]">
        Blog
      </h2>
      <p className="text-white text-center mb-[30px] px-[20px] lg:px-[50px]">
        Fique Atualizado com Nossos Últimos Artigos e Notícias
      </p>
      <SwiperSlider />
      <Link
        href={''}
        className="flex justify-center items-center mt-[50px] text-white"
      >
        <Button>Ir para o blog</Button>
      </Link>
    </section>
  )
}

export default BlogSection
