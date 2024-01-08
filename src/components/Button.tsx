import { twMerge } from 'tailwind-merge'

const Button = ({
  children,
  className,
  type,
}: {
  children: React.ReactNode
  className?: string
  type?: 'submit' | 'reset' | 'button' | undefined
}) => {
  return (
    <button
      type={type}
      className={twMerge(
        'flex items-center justify-center text-[18px] font-semibold bg-goldGradient hover:brightness-110 transition-all rounded-[5px] w-fit px-10 sm:px-16 py-3',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
