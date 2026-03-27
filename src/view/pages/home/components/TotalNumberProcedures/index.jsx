import BannerSection from '~/components/BannerSection'

export default function TotalNumberProcedures() {
  const statistics = [
    {
      number: '+593 mil',
      width: 88.5,
      description: 'procedimentos exclusivamente SUS'
    },
    { number: '+7 mil', width: 44.75, description: 'internações' },
    {
      number: '+747 mil',
      width: 83.75,
      description: 'procedimentos diagnósticos'
    },
    { number: '+10 mil', width: 60.75, description: 'sessões de hemodiálise' },

    {
      number: '+35 mil',
      width: 95.75,
      description: 'dispensações de órteses e próteses'
    }
  ]

  return (
    <section
      className="max-sm:mt-14 max-sm:mb-14 md:mt-14 md:mb-14 lg:mt-16 lg:mb-24"
      aria-label="Total de Procedimentos Realizados"
    >
      <BannerSection
        image="/images/total-number-procedures-banner.svg"
        alt="Profissionais de saúde da Santa Casa em atendimento"
        title="99,86%"
        subtitle="Atendimento SUS"
        description={
          <li className="text-[16px] leading-relaxed opacity-95">
            Hospital Filantrópico
            <span className="font-bold"> Tipo 1</span> pelo
            <span className="font-bold"> Ministério da Saúde</span>
          </li>
        }
      >
        <div>
          <h2 className="mb-1 text-[22px] leading-tight font-medium text-gray-800 max-sm:mb-6 max-sm:mt-6 max-sm:text-[20px]">
            O que há de melhor para você
          </h2>

          <p className="text-[14px] leading-relaxed font-normal text-[#727070]">
            Compromisso com a excelência no atendimento à saúde, oferecendo
            serviços de qualidade e acolhimento humanizado para toda a
            comunidade.
          </p>

          <p className="mt-5 mb-2 text-[22px] font-semibold text-[#FD0003] max-sm:mb-6 max-sm:text-[20px]">
            Em 2025 a Santa Casa realizou:
          </p>
        </div>

        <ul
          className="flex flex-wrap gap-2"
          role="list"
          aria-label="Estatísticas de atendimento 2025"
        >
          {statistics.map((stat, index) => (
            <li key={index}>
              <div
                className={`flex h-10.5 max-sm:w-max md:w-max lg:w-${stat.width} items-center gap-1 rounded-full border border-[#FD0003] px-2`}
              >
                <span className="text-[18px] font-bold whitespace-nowrap text-[#FD0003] max-sm:text-[14px]">
                  {stat.number}
                </span>
                <span className="text-sm leading-tight text-[#111032]">
                  {stat.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </BannerSection>
    </section>
  )
}
