const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex items-center justify-center text-[18px] font-semibold bg-goldGradient hover:brightness-110 transition-all rounded-[5px] w-fit px-16 py-3">
      {children}
    </button>
  )
}

export default Button
