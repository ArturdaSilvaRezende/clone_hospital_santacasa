import { useId } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  const id = useId()

  return (
    <section
      className="lg:auto relative w-full bg-white max-sm:h-max md:h-auto md:py-16 lg:py-16 xl:py-0"
      aria-labelledby={`${id}-private-consultation`}
    >
      <div className="flex items-center justify-center max-sm:flex-col md:container md:mx-auto xl:mx-0 xl:max-w-none">
        <div className="z-10 container mx-auto max-sm:order-2 max-sm:mt-5 max-sm:mb-8 max-sm:w-full max-sm:px-6 md:w-[90%] lg:w-[90%] xl:w-[42%]">
          <h2
            className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase"
            id={`${id}-private-consultation`}
          >
            Agendar Consulta Particular
          </h2>

          <h1 className="mb-2 w-full leading-tight font-medium max-sm:text-[21px] max-sm:text-black md:text-[20px] md:text-white lg:text-[32px] lg:text-white xl:text-black">
            Sua saúde em primeiro lugar, agende já sua consulta.
          </h1>

          <p className="leading-relaxed font-normal max-sm:w-full max-sm:text-[14px] max-sm:text-[#727070] md:w-[90%] md:text-[13px] md:text-white lg:w-full lg:text-[16px] lg:text-white xl:text-[#727070]">
            Com os melhores profissionais garantimos o que há de melhor para
            você e sua saúde. Conheça nosso corpo clínico logo abaixo:
          </p>

          <Link
            href="#"
            className="group mt-6 flex h-10.75 w-75.75 items-center justify-center gap-2 rounded-3xl bg-[#FD0003] font-normal text-white transition-colors hover:bg-red-800"
            aria-label="Conhecer corpo clínico"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Conhecer corpo clínico</span>
            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <Image
                src="/icons/arrow-top-left-icon-white.svg"
                alt="ícone de seta para indicar link"
                width={16}
                height={16}
              />
            </span>
          </Link>
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden bg-[#BE3131] max-sm:hidden xl:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('/images/banner-section-agendar-consulta.svg')"
            }}
            role="img"
            aria-label="Médica sorrindo segurando uma prancheta vermelha"
          />

          <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        </div>

        <div className="relative w-175 max-sm:block max-sm:h-75 max-sm:w-full md:hidden md:h-85 lg:hidden lg:h-100 xl:block">
          <Image
            src="/images/banner-section-agendar-consulta.svg"
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
