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
      <div className="my-20 flex flex-col items-center">
        <FormSearchProtocol />
        <ConsultDetails />
      </div>
      <CallToActionSections />
    </ReduxProvider>
  )
}
