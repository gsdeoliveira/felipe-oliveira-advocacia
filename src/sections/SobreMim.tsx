import Image from 'next/image'

import advogado from '@/assets/advogado.png'

const SobreMim = () => {
  return (
    <section className="bg-sobremim flex items-center gap-[20px] mb-[120px] mx-[100px] mt-[120px] rounded-[5px]">
      <div className="w-1/2">
        <Image
          src={advogado}
          width={500}
          height={500}
          alt="Felipe Oliveira"
          className="w-full"
        />
      </div>
      <div className="w-1/2 p-[20px] flex flex-col gap-[20px] text-darkGray">
        <h2 className="text-[30px] font-bold">Sobre Mim</h2>
        <p className="">
          Olá, sou Felipe Oliveira, um advogado dedicado a proporcionar soluções
          jurídicas eficazes e personalizadas para meus clientes. Minha jornada
          na advocacia começou na renomada Universidade Federal do Ceará, onde
          obtive meu título de Bacharel em Direito. <br /> <br />
          Com mais de 10 anos de prática, adquiri experiência significativa
          trabalhando no renomado escritório &apos;JurisLegal&apos; e
          desenvolvendo minha especialização em áreas como direito empresarial,
          direito civil, direito do trabalho, entre outros. Estou comprometido
          em compreender as preocupações únicas de cada cliente e oferecer
          orientação jurídica adaptada às suas necessidades específicas.
        </p>
      </div>
    </section>
  )
}

export default SobreMim
