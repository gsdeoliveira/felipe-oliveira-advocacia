import localizacao from '@/assets/localizacao.webp'
import telefone from '@/assets/telefone.webp'
import email from '@/assets/email.webp'
import Image from 'next/image'

const EntreEmContato = () => {
  return (
    <section className="mt-[120px] flex justify-center lg:mt-[90px] p-[20px] lg:p-[50px] text-white">
      <div className="flex flex-col lg:flex-row gap-[30px] bg-gray rounded-[5px] w-fit p-[20px]">
        <div className="lg:w-[40%] text-center lg:text-start">
          <h2 className="text-[30px] font-bold bg-text">Entre em Contato</h2>
          <p>
            Estamos aqui para ajudar! entre em contato e deixe-nos resolver suas
            questões jurídicas ou para tirar dúvidas.
          </p>
          <div className="flex items-center gap-[20px] mt-[20px] text-start">
            <Image
              src={localizacao}
              width={30}
              height={30}
              alt="localização"
              className="w-[30px] h-[30px]"
            />
            <p>Rua dos Advogados, 5030 Fortaleza - CE</p>
          </div>
          <div className="flex gap-[20px] my-[10px] text-start">
            <Image src={telefone} width={30} height={30} alt="telefone" />
            <p>(85) 98663-8595</p>
          </div>
          <div className="flex gap-[20px] text-start">
            <Image src={email} width={30} height={30} alt="email" />
            <p>felipeoliveira@contato.com.br</p>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254789.0595699926!2d-38.68477600263021!3d-3.7929561190181142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f464c783f%3A0x4661c60a0c6b37ca!2sFortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1703718407515!5m2!1spt-BR!2sbr"
            width="570"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full lg:w-[570px] xl:w-[750px] h-[300px] sm:h-[400px]"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default EntreEmContato
