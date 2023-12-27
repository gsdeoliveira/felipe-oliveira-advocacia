'use client'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import postBlog1 from '@/assets/post-blog-1.png'
import Link from 'next/link'
import Button from '@/components/Button'

const BlogSection = () => {
  return (
    <section className="p-[50px]">
      <h2 className="text-[30px] font-bold bg-text text-center">Blog</h2>
      <p className="text-white text-center mb-[30px]">
        Fique Atualizado com Nossos Últimos Artigos e Notícias
      </p>
      <Swiper
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="text-start text-white mr-[20px] h-full max-w-[32.3%]">
          <div className="bg-gray pb-[20px] rounded-[5px]">
            <Image
              src={postBlog1}
              width={320}
              height={250}
              alt="Pedro Santos"
              className="w-full"
            />
            <h3 className="text-[18px] font-bold my-[20px] px-[20px]">
              Entendendo a Nova Lei de Licitações: O que Empresários Precisam
              Saber
            </h3>
            <p className="px-[20px] mb-[20px]">
              Saiba como as recentes mudanças na legislação de licitações
              impactam os negócios e como se preparar para esse novo cenário.
            </p>
            <Link href={'/'} className="bg-text uppercase px-[20px]">
              Continuar Lendo
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-white mr-[20px] h-full max-w-[32.3%]">
          <div className="bg-gray pb-[20px] rounded-[5px]">
            <Image
              src={postBlog1}
              width={320}
              height={250}
              alt="Pedro Santos"
              className="w-full"
            />
            <h3 className="text-[18px] font-bold my-[20px] px-[20px]">
              Entendendo a Nova Lei de Licitações: O que Empresários Precisam
              Saber
            </h3>
            <p className="px-[20px] mb-[20px]">
              Saiba como as recentes mudanças na legislação de licitações
              impactam os negócios e como se preparar para esse novo cenário.
            </p>
            <Link href={'/'} className="bg-text uppercase px-[20px]">
              Continuar Lendo
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-white mr-[20px] h-full max-w-[32.3%]">
          <div className="bg-gray pb-[20px] rounded-[5px]">
            <Image
              src={postBlog1}
              width={320}
              height={250}
              alt="Pedro Santos"
              className="w-full"
            />
            <h3 className="text-[18px] font-bold my-[20px] px-[20px]">
              Entendendo a Nova Lei de Licitações: O que Empresários Precisam
              Saber
            </h3>
            <p className="px-[20px] mb-[20px]">
              Saiba como as recentes mudanças na legislação de licitações
              impactam os negócios e como se preparar para esse novo cenário.
            </p>
            <Link href={'/'} className="bg-text uppercase px-[20px]">
              Continuar Lendo
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-white mr-[20px] h-full max-w-[32.3%]">
          <div className="bg-gray pb-[20px] rounded-[5px]">
            <Image
              src={postBlog1}
              width={420}
              height={350}
              alt="Pedro Santos"
              className="w-full object-fill"
            />
            <h3 className="text-[18px] font-bold my-[20px] px-[20px]">
              Entendendo a Nova Lei de Licitações: O que Empresários Precisam
              Saber
            </h3>
            <p className="px-[20px] mb-[20px]">
              Saiba como as recentes mudanças na legislação de licitações
              impactam os negócios e como se preparar para esse novo cenário.
            </p>
            <Link href={'/'} className="bg-text uppercase px-[20px]">
              Continuar Lendo
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
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
