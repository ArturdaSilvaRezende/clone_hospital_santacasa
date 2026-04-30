'use client'

import React from 'react'
import { useScheduleStore } from '../../_store'
import { LuArrowLeftRight } from 'react-icons/lu'
import { BiUser } from 'react-icons/bi'
import { LiaCubeSolid } from 'react-icons/lia'
import { IoDocumentTextOutline, IoCheckmark } from 'react-icons/io5'
import { MdOutlineCelebration } from 'react-icons/md'

export default function Aside() {
  const currentStep = useScheduleStore(state => state.current_step)

  const stepsConfig = [
    {
      id: 'first',
      label: 'Passo 1',
      title: 'Tipo de Retorno',
      icon: LuArrowLeftRight
    },
    { id: 'second', label: 'Passo 2', title: 'Dados Paciente', icon: BiUser },
    {
      id: 'third',
      label: 'Passo 3',
      title: 'Dados Pré-agendamento',
      icon: LiaCubeSolid
    },
    {
      id: 'fourth',
      label: 'Passo 4',
      title: 'Observação e Confirmação',
      icon: IoDocumentTextOutline
    },
    {
      id: 'final',
      label: 'Final',
      title: 'Anote o Protocolo',
      icon: MdOutlineCelebration
    }
  ]

  const currentIndex = stepsConfig.findIndex(s => s.id === currentStep)

  return (
    <nav className="w-full xl:w-auto" aria-label="Progresso do agendamento">
      <ol className="relative hidden w-62.5 flex-col max-sm:w-full xl:flex">
        {stepsConfig.map((step, index) => {
          const isCompleted = currentIndex > index
          const isActive = currentIndex === index
          const isLast = index === stepsConfig.length - 1
          const Icon = step.icon

          return (
            <li
              key={step.id}
              className="relative flex flex-col pb-16 last:pb-0"
              // Informa ao leitor de tela se este é o passo atual
              aria-current={isActive ? 'step' : undefined}
            >
              {!isLast && (
                <div
                  className={`absolute top-10 right-0 h-full w-px ${isCompleted ? 'bg-[#20A36C]' : 'bg-[#BCBBBB]'}`}
                  aria-hidden="true" // Elementos decorativos devem ser ocultados
                />
              )}

              <div className="relative pr-10">
                <div className="flex flex-col items-end">
                  <span className="text-[12px] font-normal text-[#727070]">
                    {step.label}
                    {isCompleted && (
                      <span className="sr-only"> - Concluído</span>
                    )}
                  </span>
                  <p
                    className={`text-end text-[1rem] font-semibold ${isActive ? 'text-[#1A1A1A]' : 'text-[#727070]'}`}
                  >
                    {step.title}
                  </p>
                </div>

                <div
                  className={`absolute top-0 right-0 -mr-[1.2rem] flex h-9.5 w-9.5 items-center justify-center rounded-full border-[5px] border-white transition-colors duration-300 ${isActive ? 'bg-[#727070]' : isCompleted ? 'bg-[#20A36C]' : 'bg-[#BCBBBB]'}`}
                  aria-hidden="true"
                >
                  {isCompleted ? (
                    <IoCheckmark size={18} color="#fff" />
                  ) : (
                    <Icon size={15} color="#fff" />
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="flex w-full xl:hidden">
        <ol className="flex w-full items-center">
          {stepsConfig.slice(0, 4).map((step, index) => {
            const isCompleted = currentIndex > index
            const isActive = currentIndex === index
            const isLastMobile = index === 3
            const Icon = step.icon

            return (
              <li
                key={`mobile-${step.id}`}
                className={`flex w-full items-center ${!isLastMobile ? "after:inline-block after:h-1 after:w-13.75 after:border-4 after:border-b after:content-[''] after:md:w-45.25" : ''} ${isCompleted ? 'after:border-[#20A36C]' : 'after:border-[#BCBBBB]'}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full lg:h-12 lg:w-12 ${currentIndex >= index ? 'bg-[#20A36C]' : 'bg-[#BCBBBB]'}`}
                >
                  <span className="sr-only">
                    {step.title} {isCompleted ? '(Concluído)' : ''}
                  </span>
                  {isCompleted ? (
                    <IoCheckmark size={18} color="#fff" aria-hidden="true" />
                  ) : (
                    <Icon size={20} color="#fff" aria-hidden="true" />
                  )}
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
