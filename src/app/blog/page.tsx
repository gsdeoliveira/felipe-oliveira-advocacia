import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import calendario from '@/assets/calendario.png'
import Button from '@/components/Button'
import direito from '@/assets/direito-do-trabalho.png'
import arrow from '@/assets/arrow.svg'
import Footer from '@/sections/Footer'

const page = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      <div className="bg-balanca h-[444px]">
        <Navbar />
        <div className="p-[20px] lg:p-[50px] lg:w-1/2 text-center lg:text-start">
          <h1 className="bg-text text-[32px] sm:text-[40px] md:text-[50px] xl:text-[60px]">
            Blog
          </h1>
          <p className="text-white">
            Explore o universo jurídico e além em nosso Blog. Aqui,
            compartilhamos insights, análises e artigos informativos sobre uma
            variedade de tópicos legais.
          </p>
        </div>
      </div>
      <h2 className="bg-text text-[30px] p-[20px] pb-0 lg:pb-0 mb-[10px] mt-[90px] lg:p-[50px]">
        Últimas Postagens
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[20px] lg:p-[50px] pt-0 lg:pt-0 text-white">
        {arr.map((post, index) => (
          <div key={index} className="bg-gray pb-[20px] rounded-[5px]">
            <div className="relative">
              <Image
                src={direito}
                width={320}
                height={250}
                alt="Pedro Santos"
                className="w-full rounded-t-[5px]"
              />
              <div className="absolute bottom-0 left-0">
                <Button className="text-base px-2 py-1 rounded-bl-none">
                  Leis Trabalhistas
                </Button>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex gap-[10px] items-center p-[20px] pb-0">
                <Image src={calendario} width={20} height={20} alt="Data" />
                <p>21/12/2023</p>
              </div>
            </div>
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
        ))}
      </div>
      <div className="flex gap-[5px] my-[20px] justify-center items-center">
        <div className="px-2 py-2 rounded-[5px] border border-gray">
          <Image src={arrow} width={20} alt="Anterior" className="rotate-180" />
        </div>
        <div className="px-3 py-2 text-white rounded-[5px] border border-gray bg-gold">
          1
        </div>
        <div className="px-3 py-2 text-white rounded-[5px] border border-gray">
          2
        </div>
        <div className="px-3 py-2 text-white rounded-[5px] border border-gray">
          3
        </div>
        <div className="px-3 py-2 text-white rounded-[5px] border border-gray">
          4
        </div>
        <div className="px-3 py-2 text-white rounded-[5px] border border-gray">
          5
        </div>
        <div className="px-2 py-2 rounded-[5px] border border-gray">
          <Image src={arrow} width={20} alt="Anterior" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page
