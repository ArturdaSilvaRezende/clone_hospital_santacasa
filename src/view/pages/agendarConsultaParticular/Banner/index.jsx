import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <section
      className="w-full bg-white max-sm:h-max md:h-80 lg:h-100"
      aria-label="Agendar Consulta Particular"
    >
      <div className="flex items-center justify-center max-sm:flex-col">
        <div className="container mx-auto max-sm:order-2 max-sm:mt-5 max-sm:mb-8 max-sm:w-full max-sm:px-6 md:w-150.5 md:px-8 lg:w-150.5 lg:px-8 xl:pl-4">
          <h2 className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase">
            Agendar Consulta Particular
          </h2>

          <h1 className="md:mb-5 max-sm:mb-5 leading-tight font-medium text-black max-sm:w-full max-sm:text-[28px] md:w-full md:text-[20px] lg:mb-2 lg:w-[90%] lg:text-[32px]">
            Sua saúde em primeiro lugar, agende já sua consulta.
          </h1>

          <p className="text-[16px] font-normal text-[#727070] max-sm:text-[14px]">
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

        <div className="relative w-175 max-sm:h-75 max-sm:w-full md:h-80 lg:h-100">
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
