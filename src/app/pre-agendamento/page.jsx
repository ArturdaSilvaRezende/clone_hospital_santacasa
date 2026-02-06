'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { CurrentStep } from '~/view/pages/pre-agendamento/CurrentStep'
import { Steps } from '~/view/pages/pre-agendamento/Steps'
import { store } from './store'
import HeroSection from '~/components/HeroSection'

export default function PreAgendamento() {
  return (
    <ReduxProvider store={store}>
      <HeroSection
        subtitle="Pré-agendamento SUS"
        title="Já realizou o seu pré-agendamento?"
        description="O pré-agendamento só está disponível através do SUS, para agendar uma consulta particular clique no botão abaixo."
        banner="/images/hero-section-banner.svg"
      >
        <div className="flex gap-4">
          <button
            aria-label="Consultar agendamento do SUS"
            className="rounded-full bg-[#FD0003] px-8 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-red-700 hover:shadow-lg"
          >
            <span> Consultar agendamento</span>
          </button>

          <button
            aria-label="Agendar uma consulta particular"
            className="rounded-full border-2 border-[#FD0003] bg-transparent px-8 py-3 font-semibold text-[#FD0003] transition-colors duration-200 hover:bg-red-50"
          >
            Agendar consulta particular
          </button>
        </div>
      </HeroSection>

      <div className="container mx-auto flex max-w-285 flex-col items-center">
        <div className="relative mt-[1.5rem] mb-[5rem] flex w-full flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-between">
            <div className="mt-[0.5rem] flex w-full flex-col gap-x-[4rem] xl:mt-[3rem] xl:flex-row">
              <Steps />
              <CurrentStep />
            </div>
          </div>
        </div>
      </div>
    </ReduxProvider>
  )
}
