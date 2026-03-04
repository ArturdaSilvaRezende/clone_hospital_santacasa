import Image from 'next/image'
import { FiBook } from 'react-icons/fi'

export default function TabEssence() {
  const pillars = [
    {
      title: 'Missão',
      description:
        'Prestar serviços de saúde com qualidade, ética e responsabilidade social, oferecendo atendimento humanizado e eficiente às pessoas.',
      icon: <FiBook />
    },
    {
      title: 'Visão',
      description:
        'Consolidar-se em atendimento de saúde da região, através da excelência na prestação de serviços, se mantendo como referência para nossa comunidade.',
      icon: <FiBook />
    },
    {
      title: 'Valores',
      description:
        'Ética, Responsabilidade Social, Amor, Compaixão, Solidariedade e Respeito aos nossos colaboradores, pacientes e à comunidade.',
      icon: <FiBook />
    }
  ]
  return (
    <section className="container mx-auto max-sm:px-6 md:px-8 lg:px-8 xl:px-0" aria-label="Nossa Essência">
      <article className="flex flex-col items-center gap-8 py-8 lg:flex-row lg:gap-16">
        <Image
          src="/images/nossa-historia.svg"
          alt="Nossa História"
          width={548}
          height={306}
          className="h-auto w-auto object-cover"
        />

        <div className="w-full text-left lg:w-1/2">
          <header className="mb-4">
            <h3
              id="content-title"
              className="text-2xl font-bold text-slate-900 md:text-3xl"
            >
              Quem somos
            </h3>
          </header>

          <div className="space-y-6 max-sm:space-y-4 text-sm leading-relaxed text-gray-600 md:text-base">
            <p>
              A Santa Casa de Misericórdia de Goiânia (SCMG) atua na assistência
              hospitalar, ambulatorial e laboratorial e também no ensino, sendo
              credenciada pelo Ministério da Saúde como hospital de ensino tipo
              1. Sob coordenação da Coreme, oferece especializações médicas em
              18 áreas, com duração de 2 a 4 anos, e é associada à CMB. Fundada
              em 1936, é uma instituição filantrópica privada, administrada pela
              Igreja Católica por meio da Diocese de Goiânia.
            </p>

            <p>
              O trabalho segue até hoje sob administração de Ricardo e Rossana,
              mantendo foco em conhecimento, qualidade e confiança na prestação
              de serviços.
            </p>
          </div>
        </div>
      </article>

      <div className="lg:mt-20 mb-3 text-center max-sm:mt-14 md:mt-12">
        <span className="mb-1 block text-[20px] font-medium text-red-800/60">
          Nossos pilares
        </span>
        <h2
          id="pillars-title"
          className="text-[32px] max-sm:text-[28px] font-medium text-[#FD0003]"
        >
          Missão, visão e valores
        </h2>
      </div>

      <div
        className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {pillars.map((pillar, index) => (
          <article
            key={index}
            className="flex flex-col items-start rounded-xl border border-[#7270701A]/10 bg-white px-5 py-4 text-left"
          >
            <header className="flex items-center gap-2.5">
              <div
                className="mb-4 rounded-full bg-[#FD0003] p-3 text-2xl text-white"
                aria-hidden="true"
              >
                {pillar.icon}
              </div>
              <h4 className="mb-3 text-xl font-bold text-[#2F2E41]">
                {pillar.title}
              </h4>
            </header>

            <p className="text-sm leading-relaxed font-normal text-[#535353]">
              {pillar.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
