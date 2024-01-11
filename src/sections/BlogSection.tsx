import Link from 'next/link'
import Button from '@/components/Button'
import SwiperSlider from '@/components/SwiperSlider'

async function getData() {
  const res = await fetch(
    `https://felipe-oliveira-blog.onrender.com/api/blog-posts?populate=*&pagination[page]=1&pagination[pageSize]=10`,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const BlogSection = async () => {
  const posts = await getData()

  return (
    <section className="p-[20px] lg:p-[50px] mt-[120px] lg:mt-[90px]">
      <h2 className="text-[30px] font-bold bg-text text-center px-[20px] lg:px-[50px]">
        Blog
      </h2>
      <p className="text-white text-center mb-[30px] px-[20px] lg:px-[50px]">
        Fique Atualizado com Nossos Últimos Artigos e Notícias
      </p>
      <SwiperSlider posts={posts.data} />
      <Link
        href={'/blog'}
        className="flex justify-center items-center mt-[50px] text-white"
      >
        <Button>Ir para o blog</Button>
      </Link>
    </section>
  )
}

export default BlogSection
