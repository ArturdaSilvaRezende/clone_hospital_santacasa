import React from 'react'

export default function Title({ title, description }) {
  return (
    <div className="flex flex-col gap-y-5 max-sm:gap-y-1 ">
      <h1 className="text-[36px] font-semibold text-black max-sm:text-[26px]">
        {title}
      </h1>
      <p className="text-[22px] font-semibold text-[#FD0003] max-sm:hidden">
        {description}
      </p>
      <p className="text-[22px] font-semibold text-[#FD0003] max-sm:text-[16px] md:hidden">
        Escolha uma Opção para prosseguir
      </p>
    </div>
  )
}
