import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="px-[50px] py-[30px] w-full flex items-center justify-between text-white">
      <Image src={logo} width={267} height={64} alt="logo" />
      <div>
        <ul className="flex items-center gap-[20px]">
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
    </nav>
  )
}

export default Navbar
