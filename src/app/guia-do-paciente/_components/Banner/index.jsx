import { useId } from 'react'
import Image from 'next/image'


const guidelines = [
  {
    id: 1,
    text: 'Traga documento de identificação com foto.'
  },
  {
    id: 2,
    text: 'Cartão do convênio (se aplicável).'
  },
  {
    id: 3,
    text: 'Exames anteriores e receitas médicas.'
  },
  {
    id: 4,
    text: 'Lista de medicamentos em uso.'
  }
]

export default function Banner() {
  const id = useId()
  return (
    <section
      className="lg:auto relative w-full bg-white max-sm:h-max md:h-auto md:py-16 lg:py-16 xl:py-0"
      aria-labelledby={`${id}-patient-guide`}
    >
      <div className="flex items-center justify-center max-sm:flex-col md:container md:mx-auto xl:mx-0 xl:max-w-none">
        <div className="z-10 container mx-auto max-sm:order-2 max-sm:mt-5 max-sm:mb-8 max-sm:w-full max-sm:px-6 md:w-[90%] lg:w-[90%] xl:w-[42%]">
          <h2 className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase" id={`${id}-patient-guide`}>
            Guia do Paciente
          </h2>

          <h1 className="mb-2 leading-tight font-medium max-sm:w-full max-sm:text-[28px] max-sm:text-black md:w-[70%] md:text-[20px] md:text-white lg:w-[80%] lg:text-[32px] lg:text-white xl:text-black">
            Guia para o paciente
          </h1>

          <h3 className="my-3 text-[22px] font-normal text-[#FD0003]">
            Informações importantes:
          </h3>

          <ul className="space-y-4">
            {guidelines.map(item => (
              <li
                key={item.id}
                className="flex items-center max-sm:gap-2 md:gap-3"
              >
                <Image
                  width={13}
                  height={22}
                  src="/icons/small-caret-red-right-icon.svg"
                  alt="indicador da lista de orientações"
                />
                <span className="leading-tight font-normal max-sm:text-[14px] max-sm:text-[#727070] md:text-[14px] md:text-white lg:text-[18px] lg:text-white xl:text-[#727070]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden bg-[#BE3131] max-sm:hidden xl:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('/images/banner-section-guia-do-paciente.svg')"
            }}
            role="img"
            aria-label="Médica sorrindo segurando uma prancheta vermelha"
          />

          <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        </div>

        <div className="relative w-175 max-sm:block max-sm:h-75 max-sm:w-full md:hidden md:h-85 lg:hidden lg:h-100 xl:block">
          <Image
            src="/images/banner-section-guia-do-paciente.svg"
            alt="Guia do Paciente"
            fill
            className="rounded-tl-[60px] object-cover object-center max-sm:h-auto max-sm:w-full max-sm:rounded-tl-none max-sm:rounded-bl-[60px]"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
