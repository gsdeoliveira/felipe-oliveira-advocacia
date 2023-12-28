import Image from 'next/image'

import Button from '@/components/Button'
import justica from '@/assets/justica.png'

const CardServicos = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-col gap-[20px] p-[20px] rounded-[5px] bg-gray">
      <Image
        src={justica}
        width={40}
        height={40}
        alt="símbolo advocacia"
        className="self-center lg:self-start"
      />
      <h3 className="font-bold text-[20px]">{title}</h3>
      <p>{description}</p>
      <Button className="self-center lg:self-start">Saiba Mais</Button>
    </div>
  )
}

export default CardServicos
