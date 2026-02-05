import Image from 'next/image'

export default function References() {
  const statistics = [
    { number: '+50', label: 'Especialidades Médicas' },
    { number: '+900', label: 'Colaboradores' },
    { number: '+380', label: 'Médicos' },
    { number: '+56', label: 'Consultórios SUS' },
    { number: '+246', label: 'Leitos SUS' },
    { number: '+27', label: 'Leitos UTI Adulto' },
    { number: '+08', label: 'Isolamentos' }
  ]

  const specialties = [
    'Cirurgia Cardíaca',
    'Cirurgia Vascular',
    'Cirurgia do Aparelho Digestivo e Urologia'
  ]

  return (
    <section
      className="w-full py-16"
      aria-labelledby="Referência no Estado de Goiás"
    >
      <div className="container mx-auto max-w-285">
        <div className="mb-5 text-center">
          <p className="mb-2 text-[20px] font-medium tracking-wide text-[#A45757]">
            O nosso propósito é salvar vidas!
          </p>
          <h2
            id="hospital-statistics-heading"
            className="text-[32px] font-bold text-[#FD0003]"
          >
            Referência no Estado de Goiás em:
          </h2>
        </div>

        <div className="mx-auto mb-10 flex w-190.25 items-center justify-between">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 shadow-lg transition-shadow duration-300 group-hover:shadow-red-600/50">
                <Image
                  src="/icons/border-check-icon-white.svg"
                  alt="Check icon"
                  height={18}
                  width={18}
                />
              </div>
              <span className="text-[16px] leading-tight font-normal text-[#535353]">
                {specialty}
              </span>
            </div>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-6 lg:grid-cols-7 lg:gap-4">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="group text-center"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="flex flex-col items-center">
                <span
                  className="text-[32px] font-normal tracking-tight text-red-600 transition-transform duration-300 group-hover:scale-110"
                  aria-label={`${stat.number.replace('+', 'mais de ')}`}
                >
                  {stat.number}
                </span>
                <span className="w-20 text-[14px] leading-tight font-normal text-neutral-600">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
