import Image from 'next/image'

import Button from '@/components/Button'
import balanca from '@/assets/balanca.png'
import CardServicos from '@/components/CardServicos'

const NossosServiços = () => {
  return (
    <section className=" relative flex gap-[20px] p-[50px] pb-0 text-white">
      <div className="w-[40%] flex flex-col gap-[30px]">
        <h2 className="text-[30px] bg-text">Nossos Serviços</h2>
        <p>
          Em um mundo jurídico dinâmico e desafiador, nosso compromisso é
          oferecer uma assessoria jurídica abrangente e especializada.
        </p>
        <p>
          Conheça alguns dos principais serviços que prestamos, cada um deles
          refletindo nosso comprometimento em proporcionar soluções jurídicas
          eficazes e personalizadas.
        </p>
        <Button>Quero Saber Mais</Button>
        <Image
          src={balanca}
          width={434}
          height={284}
          alt="Balança Símbolo da Justiça"
          className="absolute bottom-0 left-[50px] w-[30%] xl:w-[434px] xl:h-[284px]"
        />
      </div>
      <div className="w-[60%] grid grid-cols-2 gap-[20px]">
        <CardServicos
          title="Direito Empresarial"
          description="No campo complexo do Direito Empresarial, orientamos nossos clientes em questões contratuais, transações comerciais e litígios corporativos."
        />
        <CardServicos
          title="Direito Empresarial"
          description="No campo complexo do Direito Empresarial, orientamos nossos clientes em questões contratuais, transações comerciais e litígios corporativos."
        />
        <CardServicos
          title="Direito Empresarial"
          description="No campo complexo do Direito Empresarial, orientamos nossos clientes em questões contratuais, transações comerciais e litígios corporativos."
        />
        <CardServicos
          title="Direito Empresarial"
          description="No campo complexo do Direito Empresarial, orientamos nossos clientes em questões contratuais, transações comerciais e litígios corporativos."
        />
      </div>
    </section>
  )
}

export default NossosServiços
