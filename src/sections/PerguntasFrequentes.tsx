import Button from '@/components/Button'
import Faq from '@/components/Faq'
import React from 'react'

const PerguntasFrequentes = () => {
  return (
    <section className="mt-[120px] lg:mt-[90px] px-[20px] lg:px-[50px] text-white">
      <h2 className="bg-text text-[30px] text-center font-bold">
        Perguntas Frequentes
      </h2>
      <div className="flex flex-col gap-[20px] mt-[30px]">
        <Faq
          question="Como posso agendar uma consulta?"
          answer="Agendar uma consulta é simples. Você pode ligar para nosso escritório durante o horário comercial ou entrar em contato pelo whatsapp."
        />
        <Faq
          question="Como posso agendar uma consulta?"
          answer="Agendar uma consulta é simples. Você pode ligar para nosso escritório durante o horário comercial ou entrar em contato pelo whatsapp."
        />
        <Faq
          question="Como posso agendar uma consulta?"
          answer="Agendar uma consulta é simples. Você pode ligar para nosso escritório durante o horário comercial ou entrar em contato pelo whatsapp."
        />
        <Faq
          question="Como posso agendar uma consulta?"
          answer="Agendar uma consulta é simples. Você pode ligar para nosso escritório durante o horário comercial ou entrar em contato pelo whatsapp."
        />
        <Faq
          question="Como posso agendar uma consulta?"
          answer="Agendar uma consulta é simples. Você pode ligar para nosso escritório durante o horário comercial ou entrar em contato pelo whatsapp."
        />
      </div>
      <p className="text-center text-[20px] mt-[20px]">
        Ainda tem alguma dúvida?
      </p>
      <Button className="mx-auto mt-[20px]">Falar Com Um Especialista</Button>
    </section>
  )
}

export default PerguntasFrequentes
