export default function SantaCasaStats() {
  const statsData = [
    {
      id: 1,
      value: '+593 mil',
      label: 'procedimentos exclusivamente SUS',
      ariaLabel:
        'Quinhentos e noventa e três mil procedimentos exclusivamente SUS'
    },
    {
      id: 2,
      value: '+747 mil',
      label: 'procedimentos diagnósticos',
      ariaLabel: 'Setecentos e quarenta e sete mil procedimentos diagnósticos'
    },
    {
      id: 3,
      value: '+35 mil',
      label: 'dispensações de órteses e próteses',
      ariaLabel: 'Trinta e cinco mil dispensações de órteses e próteses'
    },
    {
      id: 4,
      value: '+10 mil',
      label: 'sessões de hemodiálise',
      ariaLabel: 'Dez mil sessões de hemodiálise'
    },
    {
      id: 5,
      value: '+7 mil',
      label: 'internações',
      ariaLabel: 'Sete mil internações'
    }
  ]

  return (
    <section
      className="mb-14 w-full bg-[#FFE2E2] px-6 py-12"
      aria-labelledby="hospital-title"
    >
      <div className="container mx-auto max-w-285">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[16px] font-normal text-[#000000]">
            O que há de melhor para <span className="text-[#FD0003]">você</span>
          </p>

          <h2
            id="hospital-title"
            className="mb-1 text-2xl leading-tight font-normal text-[#FD0003] md:text-3xl lg:text-4xl"
          >
            Hospital Filantrópico Tipo 1 pelo
          </h2>
          <h2 className="text-2xl leading-tight font-normal text-[#FD0003] md:text-3xl lg:text-4xl">
            Ministério da Saúde{' '}
            <span className="font-bold whitespace-nowrap">
              99,86% de Atendimento SUS
            </span>
          </h2>

          <p className="mt-6 text-[16px] font-semibold text-[#A45757] md:text-base">
            Em 2024 a Santa Casa realizou:
          </p>
        </div>

        <dl
          className="flex justify-between gap-10"
          role="list"
          aria-label="Estatísticas de atendimento da Santa Casa em 2024"
        >
          {statsData.map(stat => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center"
              role="listitem"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <div
                  className="mb-2 text-4xl font-light text-[#FD0003] md:text-5xl"
                  aria-label={stat.ariaLabel}
                >
                  {stat.value}
                </div>
                <div className="mx-auto max-w-35 text-center text-sm leading-tight text-[#000000] md:text-base">
                  {stat.label}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
