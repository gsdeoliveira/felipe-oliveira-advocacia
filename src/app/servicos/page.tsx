import Image from 'next/image'

import Navbar from '@/components/Navbar'
import direitoEmpresarial from '@/assets/direito-empresarial.webp'
import direitoCivil from '@/assets/direito-civil.webp'
import direitoDaFamilia from '@/assets/direito-de-familia.webp'
import direitoDoTrabalho from '@/assets/direito-do-trabalho.webp'
import Button from '@/components/Button'
import BlogSection from '@/sections/BlogSection'
import Footer from '@/sections/Footer'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className="bg-balanca h-[300px]">
        <Navbar />
        <div className="p-[20px] pt-[70px] lg:pt-[70px] lg:p-[50px] lg:w-1/2 text-center lg:text-start">
          <h1 className="bg-text text-[32px] sm:text-[40px] md:text-[50px] xl:text-[60px]">
            Nossos Serviços
          </h1>
          <p className="text-white">
            Aqui, na Felipe Oliveira Advocacia, dedicamo-nos a oferecer
            assistência jurídica excepcional nas áreas de Direito Empresarial,
            Direito Civil, Direito de Família e Direito do Trabalho.
          </p>
        </div>
      </div>
      <div className="text-white p-[20px] lg:p-[50px]">
        <div className="flex flex-col lg:flex-row lg:text-start gap-[20px] bg-gray rounded-[5px] mt-[90px]">
          <Image
            src={direitoEmpresarial}
            alt="Direito Empresarial"
            className="w-full lg:w-1/2 object-cover"
          />
          <div className="flex flex-col gap-[20px] p-[20px] lg:w-1/2">
            <h2 className="bg-text text-[30px] font-bold">
              Direito Empresarial
            </h2>
            <p>
              Nossa equipe especializada em direito empresarial está aqui para
              orientar você em todas as etapas do desenvolvimento e operação do
              seu negócio. Desde a constituição da empresa até questões
              contratuais e litígios comerciais, estamos comprometidos em
              proteger seus interesses comerciais.
            </p>
            <h3 className="bg-text text-[20px] font-bold">
              Serviços Oferecidos:
            </h3>
            <ul className="list-disc pl-[20px]">
              <li>Constituição e Registro de Empresas</li>
              <li>Elaboração e Revisão de Contratos Comerciais</li>
              <li>Consultoria em Questões Tributárias</li>
              <li>Resolução de Conflitos Empresariais</li>
            </ul>
            <Button className="self-center lg:self-start">
              <Link href="https://wa.me/5585986638595" target="_blank">
                Falar Com Especialista
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:text-start gap-[20px] bg-gray rounded-[5px] mt-[50px]">
          <div className="flex flex-col gap-[20px] p-[20px] lg:w-1/2">
            <h2 className="bg-text text-[30px] font-bold">Direito Civil</h2>
            <p>
              Em questões relacionadas ao direito civil, nossa equipe oferece
              suporte abrangente para ajudá-lo a resolver conflitos e garantir
              seus direitos. Seja em questões contratuais, responsabilidade
              civil ou disputas de propriedade, estamos aqui para representar
              seus interesses.
            </p>
            <h3 className="bg-text text-[20px] font-bold">
              Serviços Oferecidos:
            </h3>
            <ul className="list-disc pl-[20px]">
              <li>Contratos Civis e Acordos</li>
              <li>Responsabilidade Civil</li>
              <li>Direito das Obrigações</li>
              <li>Posse e Propriedade</li>
            </ul>
            <Button className="self-center lg:self-start">
              <Link href="https://wa.me/5585986638595" target="_blank">
                Falar Com Especialista
              </Link>
            </Button>
          </div>
          <Image
            src={direitoCivil}
            alt="Direito Civil"
            className="w-full lg:w-1/2 object-cover"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:text-start gap-[20px] bg-gray rounded-[5px] mt-[50px]">
          <Image
            src={direitoDaFamilia}
            alt="Direito de Familia"
            className="w-full lg:w-1/2 object-cover"
          />
          <div className="flex flex-col gap-[20px] p-[20px] lg:w-1/2">
            <h2 className="bg-text text-[30px] font-bold">
              Direito de Familia
            </h2>
            <p>
              Entendemos a sensibilidade envolvida nas questões familiares.
              Nossa equipe de direito de família está comprometida em fornecer
              aconselhamento compassivo e soluções jurídicas eficazes para
              questões como divórcio, guarda de filhos, pensão alimentícia e
              muito mais.
            </p>
            <h3 className="bg-text text-[20px] font-bold">
              Serviços Oferecidos:
            </h3>
            <ul className="list-disc pl-[20px]">
              <li>Divórcio e Dissolução de União Estável</li>
              <li>Guarda de Menores</li>
              <li>Pensão Alimentícia</li>
              <li>Inventário e Partilha de Bens</li>
            </ul>
            <Button className="self-center lg:self-start">
              <Link href="https://wa.me/5585986638595" target="_blank">
                Falar Com Especialista
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:text-start gap-[20px] bg-gray rounded-[5px] mt-[50px]">
          <div className="flex flex-col gap-[20px] p-[20px] lg:w-1/2">
            <h2 className="bg-text text-[30px] font-bold">
              Direito do Trabalho
            </h2>
            <p>
              Protegemos seus direitos como trabalhador, oferecendo assistência
              em questões trabalhistas. Seja em negociações sindicais, rescisões
              contratuais ou assuntos relacionados à segurança no trabalho,
              nossa equipe está aqui para garantir seus direitos.
            </p>
            <h3 className="bg-text text-[20px] font-bold">
              Serviços Oferecidos:
            </h3>
            <ul className="list-disc pl-[20px]">
              <li>Orientação em Rescisões Contratuais</li>
              <li>Negociações Sindicais</li>
              <li>Assessoria em Questões de Segurança do Trabalho</li>
              <li>Litígios Trabalhistas</li>
            </ul>
            <Button className="self-center lg:self-start">
              <Link href="https://wa.me/5585986638595" target="_blank">
                Falar Com Especialista
              </Link>
            </Button>
          </div>
          <Image
            src={direitoDoTrabalho}
            alt="Direito do Trabalho"
            className="w-full lg:w-1/2 object-cover"
          />
        </div>
      </div>
      <BlogSection />
      <Footer />
    </>
  )
}

export default page
