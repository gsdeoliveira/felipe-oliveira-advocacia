'use client'
import { useState } from 'react'
import arrow from '@/assets/arrow.svg'
import Image from 'next/image'

const Faq = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setisOpen] = useState(false)

  return (
    <div
      className={`${
        isOpen ? 'bg-gray' : 'bg-[#CCC]/10'
      } flex flex-col px-[20px] py-[10px] rounded-[10px]`}
    >
      <div
        className="flex items-center gap-[10px] justify-between cursor-pointer"
        onClick={() => setisOpen((state) => !state)}
      >
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
          {question}
        </h3>
        <Image
          src={arrow}
          alt="arrow"
          className={`${
            isOpen ? 'rotate-[90deg]' : ''
          } scale-75 transition-all`}
        />
      </div>
      {isOpen && (
        <div className="pr-[50px] py-[10px]">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default Faq
