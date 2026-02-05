import Image from 'next/image'

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
      className="my-24 bg-[#FAFAFA] pt-10 pb-22"
      aria-label="Total de Procedimentos Realizados"
    >
      <div className="container mx-auto max-w-285">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative order-1">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/total-number-procedures-banner.svg"
                alt="Profissionais de saúde da Santa Casa em atendimento"
                className="object-cover"
                width={555}
                height={333}
              />
            </div>

            <nav className="absolute -bottom-14 left-8 max-w-59.75 rounded-2xl bg-[#FD0003] p-2 text-white">
              <ul className="rounded-2xl bg-red-50/25 p-3">
                <li className="text-3xl font-bold">99,86%</li>
                <li className="mb-2 text-[20px] font-medium">
                  Atendimento SUS
                </li>
                <li className="text-[16px] leading-relaxed opacity-95">
                  Hospital Filantrópico
                  <span className="font-bold"> Tipo 1</span> pelo
                  <span className="font-bold"> Ministério da Saúde</span>
                </li>
              </ul>
            </nav>
          </div>

          <div className="order-2">
            <div>
              <h2 className="mb-1 text-[22px] leading-tight font-medium text-gray-800">
                O que há de melhor para você
              </h2>

              <p className="text-[14px] leading-relaxed font-normal text-[#727070]">
                Compromisso com a excelência no atendimento à saúde, oferecendo
                serviços de qualidade e acolhimento humanizado para toda a
                comunidade.
              </p>

              <p className="mt-5 mb-2 text-[22px] font-semibold text-[#FD0003]">
                Em 2024 a Santa Casa realizou:
              </p>
            </div>

            <ul
              className="flex flex-wrap gap-2"
              role="list"
              aria-label="Estatísticas de atendimento 2024"
            >
              {statistics.map((stat, index) => (
                <li key={index}>
                  <div
                    className={`flex h-10.5 w-${stat.width} items-center gap-1 rounded-full border border-[#FD0003] px-2 transition-colors duration-200 hover:bg-red-50`}
                  >
                    <span className="text-[18px] font-bold whitespace-nowrap text-[#FD0003]">
                      {stat.number}
                    </span>
                    <span className="text-sm leading-tight text-[#111032]">
                      {stat.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
