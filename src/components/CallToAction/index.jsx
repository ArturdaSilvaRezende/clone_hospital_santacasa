import Image from 'next/image'
import Link from 'next/link'

export default function CallToActionSections() {
  return (
    <section
      className="mt-5 mb-15 w-full max-sm:px-5 md:px-8 lg:px-0"
      aria-label="Chamadas para ação de voluntariado e doação"
    >
      <div className="container mx-auto flex max-sm:flex-col md:flex-col lg:flex-row items-center justify-between rounded-[20px] bg-white px-28 py-10 max-sm:px-5">
        <div
          className="flex flex-col gap-5"
          aria-labelledby="volunteer-heading"
        >
          <h2
            id="volunteer-heading"
            className="text-[28px] max-sm:text-[24px] max-sm:w-[80%] leading-relaxed font-medium"
          >
            Junte-se à nossa corrente do bem
          </h2>
          <p className="w-122.75 max-sm:w-full text-[18px] font-normal text-[#727070]">
            Existem várias formas de apoiar a Santa Casa. Escolha como você quer
            fazer a diferença na vida dos pacientes
          </p>
        </div>

        <div className="flex flex-col gap-5 max-sm:mt-7 md:mt-9 lg:mt-0 md:flex-row lg:flex-col" aria-labelledby="donation-heading">
          <Link
            href="/volunteer"
            rel="noopener noreferrer"
            target='_blank'
            className="group flex h-12.5 w-64.75 items-center justify-center gap-2 rounded-3xl border border-[#FD0003] font-normal text-[#FD0003] transition-colors hover:bg-red-50"
            aria-label="Quero ser voluntário"
          >
            <span>Quero ser voluntário</span>
            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <Image
                src="/icons/arrow-top-left-icon-red.svg"
                alt="ícone de seta para indicar link"
                width={16}
                height={16}
              />
            </span>
          </Link>

          <Link
            href="/doacao"
            className="group flex h-12.5 w-75.75 items-center justify-center gap-2 rounded-3xl border border-[#FD0003] font-normal text-[#FD0003] transition-colors hover:bg-red-50"
            aria-label="Quero fazer uma doação"
            rel="noopener noreferrer"
            target='_blank'
          >
            <span>Quero fazer uma doação</span>
            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <Image
                src="/icons/arrow-top-left-icon-red.svg"
                alt="ícone de seta para indicar link"
                width={16}
                height={16}
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
