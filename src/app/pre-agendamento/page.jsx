'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { CurrentStep } from '~/view/pages/pre-agendamento/CurrentStep'
import { Steps } from '~/view/pages/pre-agendamento/Steps'
import { store } from './store'
import HeroSection from '~/components/HeroSection'
import CallToActionSections from '~/components/CallToAction'
import Link from 'next/link'

export default function PreAgendamento() {
  return (
    <ReduxProvider store={store}>
      <HeroSection
        subtitle="Pré-agendamento SUS"
        title="Já realizou o seu pré-agendamento?"
        description="O pré-agendamento só está disponível através do SUS, para agendar uma consulta particular clique no botão abaixo."
        banner="/images/hero-section-banner.svg"
      >
        <div className="flex gap-4 flex-col lg:flex-row text-center pr-0 md:pr-8 lg:pr-0">
          <Link
            href="/consultar-agendamento"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar agendamento do SUS"
            className="rounded-full bg-[#FD0003] px-8 h-8.75 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-red-700 hover:shadow-lg flex items-center justify-center"
          >
            <span className='text-[14px]'> Consultar agendamento</span>
          </Link>

          <Link
            href="/agendar-consulta-particular"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar uma consulta particular"
            className="rounded-full border-2 border-[#FD0003] bg-transparent px-8 h-8.75 font-semibold text-[#FD0003] transition-colors duration-200 hover:bg-red-50 flex items-center justify-center"
          >
            <span className='text-[14px]'>Agendar consulta particular</span>
          </Link>
        </div>
      </HeroSection>

      <div className="container mx-auto mt-15 max-sm:mt-8 px-6 md:px-8 lg:px-5">
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
              <Steps />
              <CurrentStep />
            </div>
          </div>
        </div>
      </div>

      <CallToActionSections />
    </ReduxProvider>
  )
}
