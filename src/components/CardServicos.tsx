import Image from 'next/image'

import Button from '@/components/Button'
import justica from '@/assets/justica.png'
import Link from 'next/link'

const CardServicos = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-col justify-between gap-[20px] p-[20px] rounded-[5px] bg-gray">
      <div className="flex flex-col gap-[20px]">
        <Image
          src={justica}
          width={40}
          height={40}
          alt="símbolo advocacia"
          className="self-center lg:self-start"
        />
        <h3 className="font-bold text-[20px]">{title}</h3>
        <p>{description}</p>
      </div>
      <Link href={'/servicos'} className="self-center lg:self-start">
        <Button className="self-center lg:self-start bg-transparent border border-gold hover:bg-gold transition-all">
          Saiba Mais
        </Button>
      </Link>
    </div>
  )
}

export default CardServicos
