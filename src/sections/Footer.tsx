import Image from 'next/image'

import localizacao from '@/assets/localizacao.png'
import telefone from '@/assets/telefone.png'
import email from '@/assets/email.png'
import whatsapp from '@/assets/whatsapp.svg'
import instagram from '@/assets/instagram.svg'
import facebook from '@/assets/facebook.svg'
import twitter from '@/assets/twitter.svg'
import logo from '@/assets/logo.png'
import arrow from '@/assets/arrow.svg'

const Footer = () => {
  return (
    <footer className="p-[20px] lg:p-[50px] text-white">
      <div className="flex flex-col lg:flex-row justify-center gap-[50px]">
        <div className="flex flex-col gap-[20px]">
          <Image src={logo} alt="logo" />
          <p>
            Defendendo seus direitos <br /> com paixão e comprometimento.
          </p>
          <div className="flex gap-[10px]">
            <Image src={whatsapp} alt="whatsapp" />
            <Image src={facebook} alt="facebook" />
            <Image src={instagram} alt="instagram" />
            <Image src={twitter} alt="twitter" />
          </div>
        </div>
        <div>
          <h3 className="text-[30px]">Links Úteis</h3>
          <div className="flex flex-col gap-[10px] mt-[20px]">
            <div className="flex items-center gap-[10px]">
              <Image width={20} height={20} src={arrow} alt="arrow" />
              <p>Página Inicial</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image width={20} height={20} src={arrow} alt="arrow" />
              <p>Nossos Serviços</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image width={20} height={20} src={arrow} alt="arrow" />
              <p>Blog</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image width={20} height={20} src={arrow} alt="arrow" />
              <p>Contato</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[30px]">Contato</h3>
          <div>
            <div className="flex gap-[20px] mt-[20px]">
              <Image
                src={localizacao}
                width={20}
                height={20}
                alt="localização"
                className="object-contain"
              />
              <p>Rua dos Advogados, 5030 Fortaleza - CE</p>
            </div>
            <div className="flex gap-[20px] my-[10px]">
              <Image src={telefone} width={20} height={20} alt="telefone" />
              <p>+55 (85) 99999-9999</p>
            </div>
            <div className="flex gap-[20px]">
              <Image src={email} width={20} height={20} alt="email" />
              <p>felipeoliveira@contato.com.br</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-[50px]">
        2023 © - Felipe Oliveira Advocacia - Todos os direitos reservados
      </p>
    </footer>
  )
}

export default Footer
