import Image from 'next/image'
import Navbar from '@/components/Navbar'
import localizacao from '@/assets/localizacao.webp'
import telefone from '@/assets/telefone.webp'
import email from '@/assets/email.webp'
import Button from '@/components/Button'
import whatsapp from '@/assets/whatsapp-gold.svg'
import instagram from '@/assets/instagram-gold.svg'
import facebook from '@/assets/facebook-gold.svg'
import twitter from '@/assets/twitter-gold.svg'
import BlogSection from '@/sections/BlogSection'
import Footer from '@/sections/Footer'

const page = () => {
  return (
    <>
      <div className="bg-balanca h-[300px]">
        <Navbar />
        <div className="p-[20px] pt-[70px] lg:pt-[70px] lg:p-[50px] lg:w-1/2 text-center lg:text-start">
          <h1 className="bg-text text-[32px] sm:text-[40px] md:text-[50px] xl:text-[60px]">
            Contato
          </h1>
          <p className="text-white">
            Estamos aqui para ouvir você. Seja para esclarecer dúvidas, discutir
            seus desafios jurídicos ou iniciar uma parceria, entre em contato
            conosco.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-[90px] p-[20px] lg:p-[50px] justify-center">
        <div className="lg:w-1/2 text-center md:text-start text-white bg-gray p-[30px] rounded-s-[5px]">
          <h2 className="text-[30px] font-bold bg-text">Entre em Contato</h2>
          <p>
            Estamos aqui para ajudar! entre em contato e deixe-nos resolver suas
            questões jurídicas ou para tirar dúvidas.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-[20px] mt-[20px] text-start">
            <Image
              src={localizacao}
              width={30}
              height={30}
              alt="localização"
              className="w-[30px] h-[30px]"
            />
            <p>Rua dos Advogados, 5030 Fortaleza - CE</p>
          </div>
          <div className="flex gap-[20px] justify-center md:justify-start my-[10px] text-start">
            <Image src={telefone} width={30} height={30} alt="telefone" />
            <p>(85) 99999-9999</p>
          </div>
          <div className="flex gap-[20px] justify-center md:justify-start text-start">
            <Image src={email} width={30} height={30} alt="email" />
            <p>felipeoliveira@contato.com.br</p>
          </div>
          <div className="flex gap-[20px] justify-center md:justify-start mt-[10px]">
            <Image
              src={whatsapp}
              alt="whatsapp"
              className="w-[30px] h-[30px]"
            />
            <Image
              src={facebook}
              alt="facebook"
              className="w-[30px] h-[30px]"
            />
            <Image
              src={instagram}
              alt="instagram"
              className="w-[30px] h-[30px]"
            />
            <Image src={twitter} alt="twitter" className="w-[30px] h-[30px]" />
          </div>
        </div>
        <div className="bg-white text-center md:text-start p-[30px] rounded-e-[5px]">
          <h2 className="lg:w-1/2 text-[30px] font-bold text-darkGray md:whitespace-nowrap">
            Nos Envie Um Email
          </h2>
          <p className="mb-[10px]">Entraremos em contato assim que possível.</p>
          <form action="" className="flex flex-col gap-[10px]">
            <label htmlFor="nome">Nome:</label>
            <input
              required
              type="text"
              id="nome"
              placeholder="Seu nome"
              className="bg-darkGray p-[5px] rounded-[3px]"
            />
            <label htmlFor="email">Email:</label>
            <input
              required
              type="text"
              id="email"
              placeholder="Seu email"
              className="bg-darkGray p-[5px] rounded-[3px]"
            />
            <label htmlFor="assunto">Assunto:</label>
            <input
              required
              type="text"
              id="assunto"
              placeholder="Assunto"
              className="bg-darkGray p-[5px] rounded-[3px]"
            />
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              required
              name="mensagem"
              id="mensagem"
              cols={30}
              rows={10}
              className="bg-darkGray p-[5px] rounded-[3px]"
            ></textarea>
            <Button
              type="submit"
              className="bg-darkGray self-center text-white mt-[10px]"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254789.0595699926!2d-38.68477600263021!3d-3.7929561190181142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f464c783f%3A0x4661c60a0c6b37ca!2sFortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1703718407515!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full mt-[90px]"
        ></iframe>
      </div>
      <BlogSection />
      <Footer />
    </>
  )
}

export default page
