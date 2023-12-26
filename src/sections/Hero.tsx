import Image from 'next/image'

import HeroImg from '@/assets/advogado-hero.png'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar'

const Hero = () => {
  return (
    <section className="relative hero-bg flex flex-col text-white">
      <Navbar />
      <div className="flex items-center p-[50px] pr-0 pb-0">
        <div className="w-1/2 flex flex-col gap-[30px]">
          <h1 className="bg-text text-[60px] font-bold leading-tight">
            Defenda seus Direitos com Experiência e Comprometimento
          </h1>
          <p>
            Seja para questões jurídicas complexas ou assuntos cotidianos, nosso
            escritório está aqui para oferecer a representação legal que você
            merece. Confie em nossa expertise para guiá-lo através do labirinto
            legal com dedicação e eficiência.
          </p>
          <Button>
            <a href="#">Entrar em Contato</a>
          </Button>
        </div>
        <div className="w-1/2 self-end">
          <Image src={HeroImg} width={635} height={817} alt="Felipe Oliveira" />
        </div>
      </div>
      <div className="w-full h-[150px]  items-center absolute overflow-x-hidden -bottom-[100px]">
        <div className="blur-hero w-[150%] mt-[25px] -ml-[100px] h-[100px]"></div>
      </div>
    </section>
  )
}

export default Hero
