'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import pedro from '@/assets/pedro.webp'
import joana from '@/assets/joana.png'
import guilherme from '@/assets/guilherme.webp'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const CasosDeSucesso = () => {
  return (
    <section className="mt-[120px] lg:mt-[90px] lg:p-[50px]">
      <h2 className="text-[30px] px-[20px] lg:px-0 bg-text text-center">
        Casos de Sucesso
      </h2>
      <p className="text-white text-center px-[20px] lg:px-0 pb-[20px]">
        Conheça alguns dos casos de sucesso que ilustram nossa dedicação,
        experiência e habilidades excepcionais em diversas áreas do direito.
      </p>
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
        <SwiperSlide className="text-center text-white lg:mr-[20px] px-[20px] lg:px-0 h-full md:max-w-[50%] lg:max-w-[32.3%]">
          <div className="pt-[100px] lg:h-[437px] xl:h-[365px] 2xl:h-[340px] pb-[30px] px-[20px] rounded-[5px] bg-gray mt-[100px] relative">
            <Image
              src={pedro}
              width={150}
              height={150}
              alt="Pedro Santos"
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <h3 className="text-[18px] font-bold my-[20px]">Pedro Santos</h3>
            <p>
              Auxiliamos Pedro Santos em um processo de divórcio amigável,
              destacando nossa capacidade de facilitar acordos justos e
              equitativos. Nossa abordagem sensível permitiu que o cliente
              enfrentasse uma transição suave para o próximo capítulo de sua
              vida.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-white lg:mr-[20px] px-[20px] lg:px-0 md:max-w-[50%] lg:max-w-[32.3%]">
          <div className="pt-[100px] lg:h-[437px] xl:h-[365px] 2xl:h-[340px] pb-[30px] px-[20px] rounded-[5px] bg-gray mt-[100px] relative">
            <Image
              src={joana}
              width={150}
              height={150}
              alt="Pedro Santos"
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <h3 className="text-[18px] font-bold my-[20px]">Joana Silva</h3>
            <p>
              Representamos com sucesso Joana Silva em uma disputa trabalhista,
              alcançando uma resolução favorável de forma eficiente. Nossa
              abordagem centrada no cliente garantiu que suas preocupações
              fossem abordadas de maneira satisfatória, proporcionando uma
              solução rápida e equitativa.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-white lg:mr-[20px] px-[20px] lg:px-0 md:max-w-[50%] lg:max-w-[32.3%]">
          <div className="pt-[100px] lg:h-[437px] xl:h-[365px] 2xl:h-[340px] pb-[30px] px-[20px] rounded-[5px] bg-gray mt-[100px] relative">
            <Image
              src={guilherme}
              width={150}
              height={150}
              alt="Pedro Santos"
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <h3 className="text-[18px] font-bold my-[20px]">Guilherme Lopes</h3>
            <p>
              Conduzimos uma defesa robusta em um caso criminal para Guilherme
              Lopes, obtendo um veredicto favorável. Essa vitória não apenas
              protegeu a reputação de nossa cliente, mas também demonstrou nossa
              habilidade em lidar com casos complexos no sistema legal.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-white lg:mr-[20px] px-[20px] lg:px-0 md:max-w-[50%] lg:max-w-[32.3%]">
          <div className="pt-[100px] lg:h-[437px] xl:h-[365px] 2xl:h-[340px] pb-[30px] px-[20px] rounded-[5px] bg-gray mt-[100px] relative">
            <Image
              src={pedro}
              width={150}
              height={150}
              alt="Pedro Santos"
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <h3 className="text-[18px] font-bold my-[20px]">Pedro Santos</h3>
            <p>
              Auxiliamos Pedro Santos em um processo de divórcio amigável,
              destacando nossa capacidade de facilitar acordos justos e
              equitativos. Nossa abordagem sensível permitiu que o client1
              enfrentasse uma transição suave para o próximo capítulo de sua
              vida.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default CasosDeSucesso
