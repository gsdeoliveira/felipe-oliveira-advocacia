'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import pedro from '@/assets/pedro.webp'
import joana from '@/assets/joana.webp'
import guilherme from '@/assets/guilherme.webp'
import joao from '@/assets/joao.webp'
import carlos from '@/assets/carlos.webp'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const CasosDeSucesso = () => {
  return (
    <section className="mt-[120px] lg:mt-[90px] p-[20px] lg:p-[50px]">
      <h2 className="text-[30px] px-[20px] lg:px-0 bg-text text-center">
        Casos de Sucesso
      </h2>
      <p className="text-white text-center px-[20px] lg:px-0 pb-[20px]">
        Conheça alguns dos casos de sucesso que ilustram nossa dedicação,
        experiência e habilidades excepcionais em diversas áreas do direito.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
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
        <SwiperSlide className="text-center text-white lg:px-0 h-full md:max-w-[50%] lg:max-w-[32.3%]">
          <div className="pt-[100px] h-[390px] lg:h-[437px] xl:h-[365px] 2xl:h-[340px] pb-[30px] px-[20px] rounded-[5px] bg-gray mt-[100px] relative">
            <Image
              src={pedro}
              width={150}
              height={150}
              alt="Pedro Santos"
              className="absolute w-[150px] h-[150px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-full"
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
        <SwiperSlide className="text-center text-white lg:px-0 md:max-w-[50%] lg:max-w-[32.3%]">
          <div className="pt-[100px] h-[390px] lg:h-[437px] xl:h-[365px] 2xl:h-[340px] pb-[30px] px-[20px] rounded-[5px] bg-gray mt-[100px] relative">
            <Image
              src={joana}
              width={150}
              height={150}
              alt="Joana Silva"
              className="absolute w-[150px] h-[150px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-full"
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
        <SwiperSlide className="text-center text-white lg:px-0 md:max-w-[50%] lg:max-w-[32.3%]">
          <div className="pt-[100px] h-[390px] lg:h-[437px] xl:h-[365px] 2xl:h-[340px] pb-[30px] px-[20px] rounded-[5px] bg-gray mt-[100px] relative">
            <Image
              src={guilherme}
              width={150}
              height={150}
              alt="Guilherme Lopes"
              className="absolute w-[150px] h-[150px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-full"
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
        <SwiperSlide className="text-center text-white lg:px-0 md:max-w-[50%] lg:max-w-[32.3%]">
          <div className="pt-[100px] h-[390px] lg:h-[437px] xl:h-[365px] 2xl:h-[340px] pb-[30px] px-[20px] rounded-[5px] bg-gray mt-[100px] relative">
            <Image
              src={joao}
              width={150}
              height={150}
              alt="João Oliveira"
              className="absolute w-[150px] h-[150px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-full"
            />
            <h3 className="text-[18px] font-bold my-[20px]">João Oliveira</h3>
            <p>
              Recentemente, conduzimos com sucesso a defesa do trabalhador João
              Oliveira em uma disputa laboral. Nossa compreensão aprofundada da
              legislação trabalhista e nossa estratégia jurídica eficaz
              resultaram em uma vitória significativa no tribunal.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-white lg:px-0 md:max-w-[50%] lg:max-w-[32.3%]">
          <div className="pt-[100px] h-[390px] lg:h-[437px] xl:h-[365px] 2xl:h-[340px] pb-[30px] px-[20px] rounded-[5px] bg-gray mt-[100px] relative">
            <Image
              src={carlos}
              width={150}
              height={150}
              alt="Carlos Santos"
              className="absolute w-[150px] h-[150px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-full"
            />
            <h3 className="text-[18px] font-bold my-[20px]">Carlos Santos</h3>
            <p>
              Em um caso desafiador de direito criminal, nossa equipe demonstrou
              habilidade excepcional na defesa do cliente Carlos Santos. Com uma
              análise minuciosa das circunstâncias e uma estratégia legal
              sólida, conseguimos contestar com sucesso as acusações e garantir
              um resultado favorável para Carlos.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default CasosDeSucesso
