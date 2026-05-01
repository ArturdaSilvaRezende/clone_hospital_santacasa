import SchedulingProtocol from '~/components/SchedulingProtocol'
import HeroSection from '~/components/HeroSection'
import CallToActionSections from '~/components/CallToAction'
import SchedulingDetails from '~/components/SchedulingDetails'

export default function ConsultarAgendamento() {
  return (
    <>
      <HeroSection
        subtitle="Consultar agendamento"
        title="Consulte o seu agendamento"
        description="Consulte o seu agendamento inserindo o protocolo no formulário abaixo."
        banner="/images/hero-section-banner.svg"
      />
      <div className="flex flex-col items-center max-sm:mt-5 max-sm:mb-20 max-sm:px-5 md:my-0 md:px-8 lg:my-12 lg:px-8 xl:px-0">
        <SchedulingProtocol />
        <SchedulingDetails />
      </div>
      <CallToActionSections />
    </>
  )
}
