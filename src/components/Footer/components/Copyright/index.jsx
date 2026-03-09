import Image from 'next/image'

export default function Copyright() {
  const date = new Date()
  return (
    <div className="mx-auto my-5 flex container items-center justify-center gap-5 md:gap-2 lg:gap-5 max-sm:flex-col max-sm:text-center md:flex-col lg:flex-row">
      <p className="relative text-[#727070] after:absolute after:top-1/2 after:-right-3 after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-gray-500/50 last:after:hidden max-sm:after:hidden md:after:hidden lg:after:block">
        Copyright © {date.getFullYear()} Hospital Santa Casa de Misericórdia de
        Goiânia
      </p>
      <div className="flex items-center gap-3">
        <p className="text-[16px] text-[#727070]">Desenvolvido por</p>
        <Image
          src="/images/brand-hmo.svg"
          alt="logo HMO"
          width={32}
          height={32}
        />
      </div>
    </div>
  )
}
