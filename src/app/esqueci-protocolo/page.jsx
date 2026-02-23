'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { Form } from '~/view/pages/esqueci-protocolo/Form'
import HeroSection from '~/components/HeroSection'
import CallToActionSections from '~/components/CallToAction'

export default function EsqueciProtocolo() {
  return (
    <ReduxProvider store={store}>
      <HeroSection
        subtitle="Consultar agendamento"
        title="Consulte o seu agendamento"
        description="Consulte o seu agendamento inserindo o protocolo no formulário abaixo."
        banner="/images/hero-section-banner.svg"
      />

      <div className="max-w-274.5 mx-auto my-20 max-sm:mt-10 max-sm:mb-20 flex flex-col items-center max-sm:px-6 md:px-8 lg:px-0 md:mt-0">
        <Form />
      </div>
      <CallToActionSections />
    </ReduxProvider>
  )
}
