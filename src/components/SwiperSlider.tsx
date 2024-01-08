'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import postBlog1 from '@/assets/post-blog-1.webp'

const SwiperSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide className="text-start text-white lg:mr-[20px] px-[20px] lg:px-0 h-full md:max-w-[50%] lg:max-w-[32.3%]">
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
            Saiba como as recentes mudanças na legislação de licitações impactam
            os negócios e como se preparar para esse novo cenário.
          </p>
          <Link href={'/'} className="bg-text uppercase px-[20px]">
            Continuar Lendo
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-start text-white lg:mr-[20px] px-[20px] lg:px-0 h-full md:max-w-[50%] lg:max-w-[32.3%]">
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
            Saiba como as recentes mudanças na legislação de licitações impactam
            os negócios e como se preparar para esse novo cenário.
          </p>
          <Link href={'/'} className="bg-text uppercase px-[20px]">
            Continuar Lendo
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-start text-white lg:mr-[20px] px-[20px] lg:px-0 h-full md:max-w-[50%] lg:max-w-[32.3%]">
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
            Saiba como as recentes mudanças na legislação de licitações impactam
            os negócios e como se preparar para esse novo cenário.
          </p>
          <Link href={'/'} className="bg-text uppercase px-[20px]">
            Continuar Lendo
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-start text-white mr-[20px] lg:mr-[20px] px-[20px] lg:px-0 h-full md:max-w-[50%] lg:max-w-[32.3%]">
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
            Saiba como as recentes mudanças na legislação de licitações impactam
            os negócios e como se preparar para esse novo cenário.
          </p>
          <Link href={'/'} className="bg-text uppercase px-[20px]">
            Continuar Lendo
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperSlider
