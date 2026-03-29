'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { ConsultDetails } from '~/view/pages/consultar-agendamento/ConsultDetails'
import { FormSearchProtocol } from '~/view/pages/consultar-agendamento/FormSearchProtocol'
import HeroSection from '~/components/HeroSection'
import CallToActionSections from '~/components/CallToAction'

export default function ConsultarAgendamento() {
  return (
    <ReduxProvider store={store}>
      <HeroSection
        subtitle="Consultar agendamento"
        title="Consulte o seu agendamento"
        description="Consulte o seu agendamento inserindo o protocolo no formulário abaixo."
        banner="/images/hero-section-banner.svg"
      />
      <div className="md:my-0 lg:my-12 flex flex-col items-center max-sm:px-5 md:px-8 lg:px-8 xl:px-0 max-sm:mb-20 max-sm:mt-5">
        <FormSearchProtocol />
        <ConsultDetails />
      </div>
      <CallToActionSections />
    </ReduxProvider>
  )
}
