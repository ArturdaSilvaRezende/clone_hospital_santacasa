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
  return (
    <section
      className="w-full bg-white max-sm:h-max md:h-80 lg:h-100"
      aria-label="Guia do Paciente"
    >
      <div className="flex items-center justify-center max-sm:flex-col">
        <div className="container mx-auto max-sm:order-2 max-sm:mt-5 max-sm:mb-8 max-sm:w-full max-sm:px-6 md:w-full md:pl-9 lg:w-150.5 lg:px-8 xl:pl-4">
          <h2 className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase">
            Guia do Paciente
          </h2>

          <h1 className="mb-2 leading-tight font-medium text-black max-sm:w-full max-sm:text-[28px] md:w-[70%] md:text-[20px] lg:w-[80%] lg:text-[32px]">
            Guia para o paciente
          </h1>

          <h3 className='text-[#FD0003] text-[22px] font-normal my-3'>Informações importantes:</h3>

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
                <span className="lg:text-[18px] leading-tight font-normal text-[#727070] md:text-[14px] max-sm:text-[14px]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-175 max-sm:h-75 max-sm:w-full md:h-80 lg:h-100">
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
