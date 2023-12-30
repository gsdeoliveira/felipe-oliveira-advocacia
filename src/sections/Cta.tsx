import Button from '@/components/Button'

const Cta = () => {
  return (
    <section className="mt-[90px] relative bg-cta h-[360px] w-full flex flex-col items-center justify-center pb-[70px]">
      <h2 className="p-[20px] md:pl-0 relative z-10 md:ml-[300px] text-center md:text-start text-white text-[30px] sm:text-[40px] py-[20px]">
        Defendendo Seus Direitos com{' '}
        <span className="text-darkGray font-bold">Excelência</span> e{' '}
        <span className="text-darkGray font-bold">Comprometimento</span>
      </h2>
      <div className="absolute top-0 w-full h-full bg-black/30"></div>
      <Button className="text-white self-center md:self-start bg-darkGray md:ml-[300px] relative z-10">
        Falar Com Advogado
      </Button>
    </section>
  )
}

export default Cta
