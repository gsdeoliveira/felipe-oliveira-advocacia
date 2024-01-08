import Image from 'next/image'

import HeroImg from '@/assets/advogado-hero.webp'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar'

const Hero = () => {
  return (
    <section className="relative hero-bg flex flex-col text-white">
      <Navbar />
      <div className="mt-[100px] flex flex-col lg:flex-row items-center p-[20px] md:pb-0 md:p-[50px] lg:pr-0">
        <div className="lg:w-1/2 flex flex-col gap-[30px] text-center lg:text-start">
          <h1 className="bg-text text-[32px] sm:text-[40px] md:text-[50px] xl:text-[60px] font-bold leading-tight">
            Defenda Seus Direitos Com Experiência e Comprometimento
          </h1>
          <p>
            Seja para questões jurídicas complexas ou assuntos cotidianos, nosso
            escritório está aqui para oferecer a representação legal que você
            merece. Confie em nossa expertise para guiá-lo através do labirinto
            legal com dedicação e eficiência.
          </p>
          <Button className="self-center lg:self-start">
            <a href="#">Entrar em Contato</a>
          </Button>
        </div>
        <div className="lg:w-1/2 self-center mt-[50px] lg:mt-0 lg:self-end">
          <Image src={HeroImg} width={635} height={817} alt="Felipe Oliveira" />
        </div>
      </div>
      <div className="w-full h-[150px]  items-center absolute overflow-x-hidden -bottom-[70px]">
        <div className="blur-hero w-[150%] mt-[25px] -ml-[100px] h-[100px]"></div>
      </div>
    </section>
  )
}

export default Hero
