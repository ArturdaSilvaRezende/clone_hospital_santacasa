import Link from 'next/link'
import HeroSection from '~/components/HeroSection'

export function Banner() {
  return (
    <HeroSection
      subtitle="Serviços"
      title="Mais de 30 especialidades e mais de 100 exames"
      description="Logo abaixo você pode consultar todas nossas especialidades e nossos exames e todos os nossos profissionais do corpo clínico."
      banner="/images/banner-section-especialidades.svg"
    >
      <Link
        href="https://wa.me/556232544008"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9.75 w-74.5 items-center justify-center rounded-[40px] bg-[#FD0003] px-6 font-bold text-white transition-all hover:bg-red-700"
      >
        <span>Agendar consulta particular</span>
      </Link>
    </HeroSection>
  )
}
