'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

import logo from '@/assets/logo.webp'
import menu from '@/assets/menu.svg'
import close from '@/assets/close.svg'
import whatsapp from '@/assets/whatsapp.svg'
import instagram from '@/assets/instagram.svg'
import facebook from '@/assets/facebook.svg'
import twitter from '@/assets/twitter.svg'

const Navbar = () => {
  const pathname = usePathname()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  console.log(pathname)

  const menuItems = [
    { href: '/', label: 'Página Inicial' },
    { href: '/servicos', label: 'Nossos Serviços' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ]

  const handleMenuToggle = () => setMenuIsOpen(!menuIsOpen)

  return (
    <nav className="fixed h-[70px] max-w-[1440px] bg-black/70 z-50 px-[20px] lg:px-[50px] py-[20px] lg:py-[30px] w-full flex items-center justify-between text-white">
      <Link href={'/'}>
        <Image src={logo} width={187} height={45} alt="logo" />
      </Link>
      <div className="hidden md:flex">
        <ul className="flex items-center gap-[20px]">
          {menuItems.map(({ href, label }) => (
            <li
              key={href}
              className={`hover:text-gold transition-all ${
                pathname === href ? 'text-gold' : ''
              }`}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={menu}
        width={30}
        height={30}
        alt="Abrir menu"
        className="md:hidden cursor-pointer"
        onClick={handleMenuToggle}
      />
      <div
        className={`${
          menuIsOpen ? 'fixed' : 'hidden'
        } z-30 w-full h-screen top-0 left-0 bg-darkGray p-[20px] pt-0`}
      >
        <div className="flex h-[100px] items-center justify-between">
          <Image src={logo} width={187} height={45} alt="logo" />
          <Image
            src={close}
            width={30}
            height={30}
            alt="Fechar menu"
            className="lg:hidden cursor-pointer"
            onClick={handleMenuToggle}
          />
        </div>
        <div className="flex flex-col justify-between h-full py-[100px]">
          <div>
            <ul className="flex flex-col text-[30px] justify-center items-center gap-[20px]">
              {menuItems.map(({ href, label }) => (
                <li
                  key={href}
                  className={`hover:text-gold transition-all ${
                    pathname === href ? 'text-gold' : ''
                  }`}
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
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
