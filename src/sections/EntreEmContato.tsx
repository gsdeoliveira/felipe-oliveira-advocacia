import localizacao from '@/assets/localizacao.png'
import telefone from '@/assets/telefone.png'
import email from '@/assets/email.png'
import Image from 'next/image'

const EntreEmContato = () => {
  return (
    <section className="p-[50px] text-white">
      <div className="flex gap-[30px] bg-gray rounded-[5px] w-fit p-[30px]">
        <div className="w-[40%]">
          <h2 className="text-[30px] font-bold bg-text">Entre em Contato</h2>
          <p>
            Estamos aqui para ajudar! entre em contato e deixe-nos resolver suas
            questões jurídicas ou para tirar dúvidas.
          </p>
          <div className="flex gap-[20px] mt-[20px]">
            <Image
              src={localizacao}
              width={30}
              height={30}
              alt="localização"
              className="object-contain"
            />
            <p>Rua dos Advogados, 5030 Fortaleza - CE</p>
          </div>
          <div className="flex gap-[20px] my-[10px]">
            <Image src={telefone} width={30} height={30} alt="telefone" />
            <p>+55 (85) 99999-9999</p>
          </div>
          <div className="flex gap-[20px]">
            <Image src={email} width={30} height={30} alt="email" />
            <p>felipeoliveira@contato.com.br</p>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254789.0595699926!2d-38.68477600263021!3d-3.7929561190181142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f464c783f%3A0x4661c60a0c6b37ca!2sFortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1703718407515!5m2!1spt-BR!2sbr"
            width="600"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="xl:w-[750px]"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default EntreEmContato
