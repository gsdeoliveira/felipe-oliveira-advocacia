import { twMerge } from 'tailwind-merge'

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center text-[18px] font-semibold bg-goldGradient hover:brightness-110 transition-all rounded-[5px] w-fit px-16 py-3',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
