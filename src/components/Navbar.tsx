'use client'

import Image from 'next/image'

import logo from '@/assets/logo.png'
import menu from '@/assets/menu.svg'
import close from '@/assets/close.svg'
import whatsapp from '@/assets/whatsapp.svg'
import instagram from '@/assets/instagram.svg'
import facebook from '@/assets/facebook.svg'
import twitter from '@/assets/twitter.svg'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <nav className="px-[20px] lg:px-[50px] py-[20px] lg:py-[30px] w-full flex items-center justify-between text-white">
      <Image
        src={logo}
        width={187}
        height={45}
        alt="logo"
        className="lg:w-[267px] lg:h-[64px]"
      />
      <div className="hidden md:flex">
        <ul className="flex items-center gap-[20px]">
          <li className="hover:text-gold transition-all">
            <Link href="/">Página Inicial</Link>
          </li>
          <li className="hover:text-gold transition-all">
            <Link href="/servicos">Nossos Serviços</Link>
          </li>
          <li className="hover:text-gold transition-all">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-gold transition-all">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </div>

      <Image
        src={menu}
        width={30}
        height={30}
        alt="Abrir menu"
        className="md:hidden"
        onClick={() => setMenuIsOpen(true)}
      />
      <div
        className={`${
          menuIsOpen ? 'fixed' : 'hidden'
        } z-30 w-full h-screen top-0 left-0 bg-darkGray p-[20px]`}
      >
        <div className="flex justify-between">
          <Image src={logo} width={187} height={45} alt="logo" />
          <Image
            src={close}
            width={30}
            height={30}
            alt="Fechar menu"
            className="lg:hidden"
            onClick={() => setMenuIsOpen(false)}
          />
        </div>
        <div className="flex flex-col justify-between h-full py-[100px]">
          <div>
            <ul className="flex flex-col text-[30px] justify-center items-center gap-[20px]">
              <li className="hover:text-gold transition-all">
                <a href="#">Página Inicial</a>
              </li>
              <li className="hover:text-gold transition-all">
                <a href="#">Nossos Serviços</a>
              </li>
              <li className="hover:text-gold transition-all">
                <a href="#">Blog</a>
              </li>
              <li className="hover:text-gold transition-all">
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-[30px]">
            <Image src={whatsapp} width={50} height={50} alt="whatsapp" />
            <Image src={facebook} width={50} height={50} alt="facebook" />
            <Image src={instagram} width={50} height={50} alt="instagram" />
            <Image src={twitter} width={50} height={50} alt="twitter" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
