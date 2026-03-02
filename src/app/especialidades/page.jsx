import Link from 'next/link'
import HeroSection from '~/components/HeroSection'
import { List } from '~/view/pages/especialidades/List'

export default function Especialidades() {
  return (
    <>
      <HeroSection
        subtitle="Serviços"
        title="Mais de 30 especialidades e mais de 100 exames"
        description="Logo abaixo você pode consultar todas nossas especialidades e nossos exames e todos os nossos profissionais do corpo clínico."
        banner="/images/banner-section-especialidades.svg"
      >
        <Link href="/especialidades" className="bg-[#FD0003] h-8.75 flex items-center justify-center px-6 font-bold text-white transition-all hover:bg-red-700 rounded-[40px] w-64.5">
          <span>Agendar consulta particular</span>
        </Link>
      </HeroSection>

      <List />
    </>
  )
}
