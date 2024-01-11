import Button from '@/components/Button'
import Faq from '@/components/Faq'
import Link from 'next/link'
import React from 'react'

const PerguntasFrequentes = () => {
  return (
    <section className="mt-[120px] lg:mt-[90px] px-[20px] lg:px-[50px] text-white">
      <h2 className="bg-text text-[30px] text-center font-bold">
        Perguntas Frequentes
      </h2>
      <div className="flex flex-col gap-[10px] my-[50px]">
        <Faq
          question="Como posso agendar uma consulta?"
          answer="Agendar uma consulta é simples. Você pode ligar para nosso escritório durante o horário comercial ou entrar em contato pelo whatsapp."
        />
        <Faq
          question="Quais áreas do direito você cobre?"
          answer="Nosso escritório abrange diversas áreas do direito, incluindo direito empresarial, direito civil, direito de família e direito do trabalho. Nossos advogados são especializados em oferecer soluções jurídicas eficazes em várias frentes."
        />
        <Faq
          question="Quanto custa uma consulta inicial?"
          answer="O custo de uma consulta inicial pode variar com base na complexidade do caso. Recomendamos entrar em contato conosco para discutir os detalhes do seu caso e forneceremos informações detalhadas sobre os honorários associados à sua consulta."
        />
        <Faq
          question="Vocês oferecem consultas virtuais?"
          answer="Sim, oferecemos consultas virtuais para maior comodidade. Se preferir discutir seu caso remotamente, podemos agendar uma consulta por videoconferência para atender às suas necessidades."
        />
        <Faq
          question="Vocês oferecem serviços de representação legal em tribunal?"
          answer="Sim, nosso escritório oferece serviços de representação legal em tribunal. Nossos advogados têm experiência em litígios e estão preparados para defender seus interesses perante a justiça."
        />
      </div>
      <p className="text-center text-[20px] mt-[20px]">
        Ainda tem alguma dúvida?
      </p>
      <Button className="mx-auto mt-[20px]">
        <Link href="https://wa.me/5585986638595" target="_blank">
          Falar Com Um Especialista
        </Link>
      </Button>
    </section>
  )
}

export default PerguntasFrequentes
