'use client'

import { useId, useState } from 'react'
import Image from 'next/image'

import { MdAccessTime, MdCalendarToday, MdPerson } from 'react-icons/md'

const units = [
  {
    id: 'hemodialise',
    name: 'Hemodiálise',
    details: [
      {
        label: 'Grupo 1',
        days: 'Segunda, quarta e sexta',
        hours: '6h30 às 18h30'
      },
      { label: 'Grupo 2', days: 'Terça, quinta e sábado', hours: '6h às 18h30' }
    ],
    footer:
      'Atendimento 24 horas para pacientes agudos. Pacientes crônicos são atendidos conforme a agenda fixa do programa.'
  },
  {
    id: 'enfermaria',
    name: 'Leitos Enfermaria',
    days: 'Todos os dias',
    hours: '14h às 15h',
    visitors: 'Dois visitantes por paciente.'
  },
  {
    id: 'apartamentos',
    name: 'Apartamentos - Particulares e Convênios',
    days: 'Todos os dias',
    hours: '08h às 20h',
    visitors: 'Dois visitantes por paciente.'
  },

  {
    id: 'uti-2',
    name: 'Unidade de Terapia Intensiva (UTI 2) SUS - 3° Andar',
    days: 'Todos os dias',
    hours: '15h30 às 16h',
    visitors: 'Um visitante por paciente.'
  },
  {
    id: 'uti-terreo',
    name: 'Unidade de Terapia Intensiva (UTI) SUS e Particular - Térreo',
    days: 'Todos os dias',
    hours: '16h30 às 17h',
    visitors: 'Um visitante por paciente.'
  }
]

const guidelines = [
  {
    id: 1,
    text: 'É recomendado o uso de máscara em todas as áreas do hospital'
  },
  {
    id: 2,
    text: 'Respeite o número máximo de visitantes permitido por unidade.'
  },
  {
    id: 3,
    text: 'Visitantes com sintomas gripais devem evitar visitas.'
  },
  {
    id: 4,
    text: 'Mantenha o silêncio e respeite o descanso dos demais paciente.'
  }
]

export default function VisitingHours() {
  const [activeUnit, setActiveUnit] = useState(units[0])
  const id = useId()

  return (
    <section
      className="mb-16 bg-white py-16 max-sm:py-12"
      aria-labelledby={`${id}-visiting-hours-title`}
    >
      <div className="container mx-auto flex items-center lg:items-start xl:items-center justify-between max-sm:flex-col max-sm:px-6 md:flex-col md:px-8 lg:flex-row lg:px-8 xl:px-0">
        <div className="w-full lg:w-1/2">
          <span className="text-sm font-bold tracking-wider text-[#FD0003] uppercase">
            Horário de Visitas
          </span>
          <h2 className="mb-8 text-[32px] leading-tight font-medium text-black max-sm:text-[28px]" id={`${id}-visiting-hours-title`}>
            Selecione a unidade <br /> de internação
          </h2>

          <div
            className="flex flex-wrap gap-3 max-sm:mb-12 max-sm:justify-center md:mb-12 lg:mb-0"
            role="tablist"
            aria-label="Unidades de internação"
          >
            {units.map(unit => (
              <button
                key={unit.id}
                onClick={() => setActiveUnit(unit)}
                role="tab"
                aria-selected={activeUnit.id === unit.id}
                className={`rounded-full border px-6 py-3 text-sm font-medium transition-all duration-200 ${
                  activeUnit.id === unit.id
                    ? 'border-[#FD0003] bg-[#FD0003] text-white'
                    : 'border-[#727070] bg-white text-[#727070] hover:border-gray-400'
                }`}
              >
                {unit.name}
              </button>
            ))}
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-right-4 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white duration-500 lg:w-100 xl:w-134.75">
          <div className="border-b border-gray-100 bg-[#FAFAFA] p-4">
            <h3 className="font-medium text-black">Horário de visita</h3>
          </div>

          <div className="p-8">
            <h4 className="mb-6 text-[18px] font-medium text-[#FD0003]">
              {activeUnit.name}
            </h4>

            {activeUnit.details ? (
              <div className="space-y-8">
                {activeUnit.details.map((group, idx) => (
                  <div
                    key={idx}
                    className="relative space-y-3 border-l-2 border-[#FD0003] pl-6"
                  >
                    <span className="inline-block rounded bg-red-50 px-2 py-1 text-xs font-medium text-[#FD0003]">
                      {group.label}
                    </span>
                    <div className="flex items-center gap-3 text-[#535353]">
                      <MdCalendarToday size={20} className="shrink-0" />
                      <span className="text-sm">{group.days}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#535353]">
                      <MdAccessTime size={20} className="shrink-0" />
                      <span className="text-sm">{group.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 border-l-2 border-[#FD0003] pl-4">
                <div className="flex items-center gap-3 text-[#535353]">
                  <MdCalendarToday size={20} />
                  <span className="text-sm font-medium">{activeUnit.days}</span>
                </div>
                <div className="flex items-center gap-3 text-[#535353]">
                  <MdAccessTime size={20} />
                  <span className="text-sm font-medium">
                    {activeUnit.hours}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[#535353]">
                  <MdPerson size={20} />
                  <span className="text-sm font-medium">
                    {activeUnit.visitors}
                  </span>
                </div>
              </div>
            )}

            {activeUnit.footer && (
              <div className="mt-8 rounded-lg border border-gray-200 bg-[#FAFAFA] px-3 py-1.5">
                <p className="text-[12px] leading-relaxed">
                  <span className="block text-[#FD0003]">
                    Atendimento 24 horas para pacientes agudos.
                  </span>
                  <span className="text-[#727070]">
                    Pacientes crônicos são atendidos conforme a agenda fixa do
                    programa.
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center border border-[#7270701A]/10 max-sm:mt-10 max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <div className="w-full max-w-189.25 rounded-[48px] bg-[#FAFAFA] px-15 py-10 max-sm:rounded-3xl max-sm:px-5 max-sm:py-4">
          <h2 className="mb-5 text-center text-[32px] font-medium text-black max-sm:mb-3 max-sm:text-[22px]">
            Orientações Importantes
          </h2>

          <ul className="space-y-4">
            {guidelines.map(item => (
              <li
                key={item.id}
                className="flex items-center justify-center max-sm:gap-2 md:gap-3"
              >
                <Image
                  width={13}
                  height={22}
                  src="/icons/small-caret-red-right-icon.svg"
                  alt="indicador da lista de orientações"
                />
                <span className="text-[18px] leading-tight font-normal text-[#727070] max-sm:text-[14px]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
