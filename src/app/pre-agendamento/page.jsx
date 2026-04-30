import Link from 'next/link'
import Aside from './_components/Aside'
import HeroSection from '~/components/HeroSection'
import CallToActionSections from '~/components/CallToAction'
import CurrentStep from './_components/CurrentStep'

export default function PreAgendamento() {
  return (
    <>
      <HeroSection
        subtitle="Pré-agendamento SUS"
        title="Já realizou o seu pré-agendamento?"
        description="O pré-agendamento só está disponível através do SUS, para agendar uma consulta particular clique no botão abaixo."
        banner="/images/hero-section-banner.svg"
      >
        <div className="flex flex-col gap-4 pr-0 text-center md:pr-8 lg:flex-row lg:pr-0">
          <Link
            href="/consultar-agendamento"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar agendamento do SUS"
            className="flex h-8.75 items-center justify-center rounded-full bg-[#FD0003] px-8 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-red-700 hover:shadow-lg"
          >
            <span className="text-[14px]"> Consultar agendamento</span>
          </Link>

          <Link
            href="/agendar-consulta-particular"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar uma consulta particular"
            className="flex h-8.75 items-center justify-center rounded-full border-2 border-[#FD0003] bg-transparent px-8 font-semibold text-[#FD0003] transition-colors duration-200 hover:bg-red-50"
          >
            <span className="text-[14px]">Agendar consulta particular</span>
          </Link>
        </div>
      </HeroSection>

      <div className="container mx-auto mt-15 px-6 max-sm:mt-8 md:px-8 lg:px-5">
        <h3 className="text-[32px] font-medium max-sm:text-[26px]">
          Formulário para realizar o pré-agendamento
        </h3>
        <p className="text-[16px] font-normal text-[#727070]">
          Preencha as informações abaixo para realizar o seu pré-agendamento.
        </p>
      </div>

      <div className="container mx-auto flex flex-col items-center px-5 md:px-8 lg:px-0">
        <div className="relative mt-6 mb-20 w-full max-sm:mb-8 md:mb-8">
          <div className="flex flex-row items-center justify-between">
            <div className="mt-2 flex w-full flex-col gap-x-16 xl:mt-12 xl:flex-row">
              <Aside />
              <CurrentStep />
            </div>
          </div>
        </div>
      </div>

      <CallToActionSections />
    </>
  )
}
