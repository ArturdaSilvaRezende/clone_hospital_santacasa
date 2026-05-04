import React, { useId } from 'react'
import Image from 'next/image'
import { FaHeartbeat, FaUserGraduate } from 'react-icons/fa'
import {
  FaHandshake,
  FaHospital,
  FaLeaf,
  FaMicrochip,
} from 'react-icons/fa6'

const pillars = [
  {
    title: 'Humanização',
    description: 'Ambientes acolhedores e atendimento centrado no paciente.',
    icon: <FaHeartbeat className="text-xl text-white" />
  },
  {
    title: 'Sustentabilidade',
    description:
      'Hospital verde com eficiência energética e gestão responsável.',
    icon: <FaLeaf className="text-xl text-white" />
  },
  {
    title: 'Infraestrutura Moderna',
    description:
      'Novos blocos e ambientes projetados para conforto e segurança.',
    icon: <FaHospital className="text-xl text-white" />
  },
  {
    title: 'Tecnologia de Ponta',
    description:
      'IA, telemedicina e sistemas integrados para diagnósticos mais precisos.',
    icon: <FaMicrochip className="text-xl text-white" />
  },
  {
    title: 'Capacitação',
    description:
      'Formação contínua de profissionais para excelência no atendimento.',
    icon: <FaUserGraduate className="text-xl text-white" />
  },
  {
    title: 'Parcerias',
    description: 'Colaborações estratégicas para inovação e pesquisa contínua.',
    icon: <FaHandshake className="text-xl text-white" />
  }
]

export default function InnovationAndFuture() {
  const id = useId()
  const fundacao = 1936
  const anoAtual = new Date().getFullYear()
  const idade = anoAtual - fundacao

  return (
    <section
      className="container mx-auto mt-16 mb-14 max-sm:px-6 md:px-8 xl:px-0"
      aria-labelledby={`${id}-innovation-title`}
    >
      <header className="mb-16 text-center">
        <h1 className="text-[28px] font-medium text-black" id={`${id}-innovation-title`}>
          O amanhã que construímos hoje
        </h1>
        <p className="text-[16px] text-[#727070] md:w-[80%] lg:w-full mx-auto">
          Inovação, tecnologia e humanização moldando a próxima geração de
          cuidados e saúde
        </p>
      </header>

      <div className="lg:mb-24 grid items-center lg:gap-100 lg:grid-cols-3 max-sm:mb-15 md:mb-15">
        <div className="text-left md:w-100.75 max-sm:mb-8 md:mb-10 lg:mb-0">
          <span className="text-sm font-semibold text-[#FD0003] uppercase">
            Projeto Especial
          </span>

          <Image
            src="/images/brand-santa-casa.svg"
            alt="Logo Santa Casa"
            width={128}
            height={64}
            className="my-3 object-cover w-auto h-auto"
          />

          <p className="text-[16px] leading-relaxed font-normal text-[#727070]">
            Uma jornada rumo aos 90 anos de excelência, inovação e compromisso
            com a saúde.
          </p>

          <div
            className="flex items-center gap-4 pt-4"
            aria-label={`Linha do tempo: ${idade} anos`}
          >
            <div className="text-center">
              <span className="block text-[22px] font-medium text-[#2F2E41]">
                {fundacao}
              </span>
              <span className="text-xs text-gray-400 uppercase">Fundação</span>
            </div>

            <div className="-mt-3.75 h-px flex-1 bg-gray-200"></div>

            <div className="text-center">
              <span className="block text-[22px] font-medium text-[#2F2E41]">
                {anoAtual}
              </span>
              <span className="text-[14px] text-[#727070] uppercase">
                {idade} anos
              </span>
            </div>
          </div>
        </div>

        <article className="w-full space-y-4 text-left lg:col-span-2">
          <h2 className="text-[22px] font-medium text-[#535353]">
            O que é o projeto 90+?
          </h2>
          <div className="space-y-4 leading-relaxed text-[#535353]">
            <p>
              O Projeto 90+ é uma iniciativa estratégica e colaborativa que visa
              identificar e implementar propostas inovadoras para a Santa Casa
              do futuro. Pensando em uma instituição mais moderna, tecnológica e
              humanizada.
            </p>
            <p>
              Este projeto reúne colaboradores, médicos, pacientes e a
              comunidade em geral para co-criar soluções que transformarão a
              experiência de cuidado à saúde nos próximos anos.
            </p>
          </div>
        </article>
      </div>

      <div className="mb-10 text-center">
        <span className="text-[16px] font-semibold tracking-widest text-[#FD0003] uppercase">
          Pilares da Transformação
        </span>
        <h3 className="text-[28px] font-medium text-black">
          Ideias para a inovação e o futuro
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pilar, index) => (
          <article
            key={index}
            className="flex flex-col items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div
                className="flex items-center justify-center rounded-full bg-[#FD0003] p-3"
                aria-hidden="true"
              >
                {pilar.icon}
              </div>
              <h4 className="font-mendium mb-2 text-lg text-[#2F2E41]">
                {pilar.title}
              </h4>
            </div>

            <p className="text-left text-[14px] leading-relaxed text-[#535353]">
              {pilar.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
