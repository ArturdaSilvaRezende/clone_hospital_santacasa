'use client'

import React, { useEffect, useId, useRef } from 'react'
import { useScheduleStore } from '../../../_store'

const RETURN_TYPES = [
  {
    value: 'return_consult',
    label: 'Retorno de Consulta',
    icon: selected => (
      <svg
        className="w-15.75"
        width="89"
        height="89"
        viewBox="0 0 89 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_47_436)">
          <path
            fill={selected ? '#fff' : '#878787'}
            d="M16.7119 81.0628C15.2481 81.0628 13.9674 80.5139 12.8696 79.4161C11.7718 78.3183 11.2229 77.0376 11.2229 75.5738V18.8546C11.2229 17.3909 11.7718 16.1101 12.8696 15.0124C13.9674 13.9146 15.2481 13.3657 16.7119 13.3657H22.6582V7.87671H28.6046V13.3657H59.7087V7.87671H65.655V13.3657H71.6014C73.0651 13.3657 74.3459 13.9146 75.4437 15.0124C76.5415 16.1101 77.0904 17.3909 77.0904 18.8546V46.2994H71.6014V36.2363H16.7119V75.5738H46.3522V81.0628H16.7119ZM69.7718 88.3814C65.3196 88.3814 61.4316 86.9939 58.1077 84.2189C54.7839 81.444 52.695 77.9524 51.8412 73.7442H57.5131C58.3059 76.4277 59.8154 78.6233 62.0415 80.3309C64.2676 82.0386 66.8443 82.8924 69.7718 82.8924C73.3091 82.8924 76.328 81.6422 78.8285 79.1417C81.3291 76.6411 82.5793 73.6222 82.5793 70.0849C82.5793 66.5476 81.3291 63.5286 78.8285 61.0281C76.328 58.5276 73.3091 57.2773 69.7718 57.2773C68.0031 57.2773 66.3564 57.5975 64.8317 58.2379C63.307 58.8783 61.9653 59.7778 60.8065 60.9366H66.1125V66.4256H51.4752V51.7884H56.9642V57.0029C58.6109 55.4172 60.532 54.1517 62.7276 53.2063C64.9232 52.261 67.2712 51.7884 69.7718 51.7884C74.8338 51.7884 79.1487 53.5723 82.7166 57.1401C86.2844 60.7079 88.0683 65.0228 88.0683 70.0849C88.0683 75.1469 86.2844 79.4618 82.7166 83.0297C79.1487 86.5975 74.8338 88.3814 69.7718 88.3814ZM16.7119 30.7474H71.6014V18.8546H16.7119V30.7474Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_47_436">
            <rect
              width="87.8233"
              height="87.8233"
              fill="white"
              transform="translate(0.245117 0.558105)"
            />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    value: 'return_post_hospitalization',
    label: 'Retorno Pós-Internação',
    icon: selected => (
      <svg
        className="w-15.75"
        width="102"
        height="69"
        viewBox="0 0 102 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={selected ? '#fff' : '#878787'}
          d="M0.54126 68.1599V0.741943H7.45592V46.1482H48.1372V10.5377H85.2458C89.8412 10.5377 93.7751 12.1739 97.0475 15.4464C100.32 18.7189 101.956 22.6528 101.956 27.2481V68.1599H95.0416V53.0629H7.45592V68.1599H0.54126ZM27.0475 39.464C23.5901 39.464 20.6898 38.2924 18.3465 35.9491C16.0032 33.6058 14.8316 30.7055 14.8316 27.2481C14.8316 23.7908 16.0032 20.8905 18.3465 18.5472C20.6898 16.2039 23.5901 15.0322 27.0475 15.0322C30.5048 15.0322 33.4051 16.2039 35.7484 18.5472C38.0917 20.8905 39.2633 23.7908 39.2633 27.2481C39.2633 30.7055 38.0917 33.6058 35.7484 35.9491C33.4051 38.2924 30.5048 39.464 27.0475 39.464ZM55.0518 46.1482H95.0416V27.2481C95.0416 24.5543 94.0824 22.2483 92.1641 20.3299C90.2457 18.4115 87.9396 17.4524 85.2458 17.4524H55.0518V46.1482ZM27.0475 32.5494C28.5072 32.5494 29.7557 32.0308 30.7929 30.9936C31.8301 29.9564 32.3487 28.7079 32.3487 27.2481C32.3487 25.7884 31.8301 24.5399 30.7929 23.5027C29.7557 22.4655 28.5072 21.9469 27.0475 21.9469C25.5877 21.9469 24.3392 22.4655 23.302 23.5027C22.2648 24.5399 21.7462 25.7884 21.7462 27.2481C21.7462 28.7079 22.2648 29.9564 23.302 30.9936C24.3392 32.0308 25.5877 32.5494 27.0475 32.5494Z"
        />
      </svg>
    )
  },
  {
    value: 'internal_routing',
    label: 'Encaminhamento Interno',
    icon: selected => (
      <svg
        className="h-15.75 w-15.75"
        width="55px"
        height="55px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4V20M4 12H16M16 12L12 8M16 12L12 16"
          stroke={selected ? '#fff' : '#878787'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
]

export function FirstStep() {
  const returnType = useScheduleStore(state => state.return_type)
  const currentStep = useScheduleStore(state => state.current_step)

  const changeReturnType = useScheduleStore(state => state.changeReturnType)
  const changeScheduleStep = useScheduleStore(state => state.changeScheduleStep)
  const fetchDataMedicalSpecialities = useScheduleStore(
    state => state.fetchDataMedicalSpecialities
  )

  const groupLabelId = useId()
  const stepLabelId = useId()

  const confirmRef = useRef(null)

  useEffect(() => {
    fetchDataMedicalSpecialities()
  }, [fetchDataMedicalSpecialities])

  function handleChangeReturnType(type) {
    changeReturnType(type)
  }

  function handleGoNextStep() {
    if (!returnType) return
    changeScheduleStep('second')
  }

  const hasSelection = Boolean(returnType)

  return (
    <section className="mt-8 flex w-full flex-col xl:mt-0">
      <div aria-live="polite" aria-atomic="true" className="sr-only" />

      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-1 xl:hidden">
          <span
            id={stepLabelId}
            className="text-[1rem] font-normal text-[#767676]"
          >
            Passo 1
          </span>
          <span className="text-[1.2rem] font-semibold text-[#5f5f5f]">
            Tipo de Retorno
          </span>
        </div>

        <h2
          id={groupLabelId}
          className="text-[1.1rem] font-semibold text-black"
        >
          Selecione o tipo de retorno:
        </h2>
      </div>

      <div
        role="radiogroup"
        aria-labelledby={groupLabelId}
        aria-required="true"
        className="mt-4 flex flex-col justify-center gap-x-4 gap-y-8 md:flex-row lg:flex-row xl:mt-12 xl:flex-row xl:gap-x-8 xl:gap-y-0"
      >
        {RETURN_TYPES.map(({ value, label, icon }) => {
          const selected = returnType === value

          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={
                selected || (!returnType && value === RETURN_TYPES[0].value)
                  ? 0
                  : -1
              }
              onClick={() => handleChangeReturnType(value)}
              onKeyDown={e => {
                const idx = RETURN_TYPES.findIndex(t => t.value === value)
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                  e.preventDefault()
                  const next = RETURN_TYPES[(idx + 1) % RETURN_TYPES.length]
                  handleChangeReturnType(next.value)
                  document.getElementById(`radio-${next.value}`)?.focus()
                }
                if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                  e.preventDefault()
                  const prev =
                    RETURN_TYPES[
                      (idx - 1 + RETURN_TYPES.length) % RETURN_TYPES.length
                    ]
                  handleChangeReturnType(prev.value)
                  document.getElementById(`radio-${prev.value}`)?.focus()
                }
              }}
              id={`radio-${value}`}
              className="flex cursor-pointer flex-col items-center gap-y-2 rounded-lg text-center focus-visible:ring-2 focus-visible:ring-[#FD0003] focus-visible:ring-offset-2 focus-visible:outline-none xl:text-start"
            >
              <div
                className={`rounded-2xl border ${
                  selected
                    ? 'border-[#FD0003] bg-[#FD0003]'
                    : 'border-[#878787]'
                } flex h-40 w-63.75 flex-col items-center justify-center md:w-50 lg:w-63.75`}
              >
                {icon(selected)}
              </div>
              <p
                className={`${
                  selected ? 'text-[#FD0003]' : 'text-[#878787]'
                } text-[0.9rem] font-medium xl:text-[1rem]`}
              >
                {label}
              </p>
            </button>
          )
        })}
      </div>

      <div className="mt-12 flex w-full flex-row justify-end gap-x-4">
        {currentStep !== 'first' && (
          <button
            type="button"
            className="h-9.5 w-max rounded-full border border-[#262626] px-6 text-[#262626] focus-visible:ring-2 focus-visible:ring-[#262626] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Voltar
          </button>
        )}

        <button
          ref={confirmRef}
          type="button"
          onClick={handleGoNextStep}
          disabled={!hasSelection}
          aria-disabled={!hasSelection}
          className={`h-9.5 w-32.5 rounded-full px-6 text-white transition-opacity focus-visible:ring-2 focus-visible:ring-[#FD0003] focus-visible:ring-offset-2 focus-visible:outline-none ${
            hasSelection
              ? 'cursor-pointer bg-[#FD0003] hover:bg-red-700'
              : 'cursor-not-allowed bg-[#FD0003] opacity-40'
          }`}
        >
          Confirmar
        </button>
      </div>
    </section>
  )
}
