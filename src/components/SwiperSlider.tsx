'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import { BlogPost } from '@/utils/getPosts'
import Button from './Button'

const SwiperSlider = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      navigation={true}
      modules={[Navigation]}
    >
      {posts.map((post: BlogPost) => (
        <SwiperSlide
          className="text-start text-white lg:px-0 md:max-w-[50%] lg:max-w-[32.3%]"
          key={post.id}
        >
          <div className="bg-gray pb-[20px] rounded-[5px] h-[640px] relative">
            <Image
              src={post.attributes.imagemBg.data.attributes.url}
              width={320}
              height={250}
              alt="Post Imagem"
              className="w-full h-[350px] object-cover rounded-t-[5px]"
            />
            <Button className="absolute top-0 left-0 z-50 px-[10px] sm:px-[10px]">
              {post.attributes.categoria}
            </Button>
            <div className="flex flex-col justify-between h-[290px] py-[20px]">
              <div>
                <h3 className="text-[18px] font-bold mb-[10px] px-[20px]">
                  {post.attributes.titulo}
                </h3>
                <p className="px-[20px] mb-[20px] h-[100px] line-clamp-4">
                  {post.attributes.descricao}
                </p>
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="bg-text uppercase px-[20px]"
              >
                Continuar Lendo
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperSlider
