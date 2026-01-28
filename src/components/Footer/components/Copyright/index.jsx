import Image from 'next/image'

export default function Copyright() {
  const date = new Date()
  return (
    <div className="flex h-18 items-center border-t border-gray-300 bg-[#EDECEC]">
      <div className="container mx-auto flex max-w-285 items-center justify-between">
        <p className="text-[#727070]">
          Copyright © {date.getFullYear()} Hospital Santa Casa de Misericórdia
          de Goiânia
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
    </div>
  )
}
