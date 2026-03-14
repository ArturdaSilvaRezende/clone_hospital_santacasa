'use client'

import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeReportType,
  changeReportStep
} from '~/app/canal-de-denuncia/store'
import Title from '../components/Title'

export function FirstStep() {
  const { report_type: reportType, current_step: currentStep } = useSelector(
    store => store.report
  )
  const dispatch = useDispatch()

  function handleChangeReturnType(type) {
    dispatch(changeReportType(type))
  }

  function handleGoNextStep() {
    if (reportType == 'anonymous') {
      dispatch(changeReportStep('third'))
    } else {
      dispatch(changeReportStep('second'))
    }
  }

  return (
    <section
      className="mb-16 bg-white py-16 max-sm:py-10"
      aria-label="Canal de Denúncia"
    >
      <div className="container mx-auto space-y-4 max-sm:px-6 md:px-8 xl:px-0">
        <Title
          title="Canal de Denúncia"
          description="Escolha uma Opção para prosseguir"
        />

        <div className="mt-10 flex justify-between max-sm:flex-col max-sm:space-y-8 lg:flex-row">
          <div
            onClick={() => handleChangeReturnType('anonymous')}
            className={`cursor-pointer rounded-xl border ${reportType == 'anonymous' ? 'border-[#FD0003]' : 'border-[#727070]/10'} flex h-59.25 w-[47%] flex-col items-center justify-center max-sm:h-full max-sm:w-full max-sm:p-5 md:h-full md:p-5 xl:h-104.75`}
          >
            <Image
              src="/images/denuncia-anonima.svg"
              alt="Denúncia Anônima"
              width={314}
              height={260}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
            <div className="text-center">
              <p className="text-[16px] font-semibold">Denúncia Anônima</p>
              <p className="text-[14px] font-normal text-[#645858]">
                Suas informações pessoais não são solicitadas
              </p>
            </div>
          </div>

          <div
            onClick={() => handleChangeReturnType('identified')}
            className={`cursor-pointer rounded-xl border ${reportType == 'identified' ? 'border-[#FD0003]' : 'border-[#727070]/10'} flex h-59.25 w-[47%] flex-col items-center justify-center max-sm:h-full max-sm:w-full max-sm:p-5 md:h-full md:p-5 xl:h-104.75`}
          >
            <Image
              src="/images/denuncia-identificada.svg"
              alt="Denúncia Identificada"
              width={201}
              height={260}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
            <div className="text-center">
              <p className="text-[16px] font-semibold">Denúncia Identificada</p>
              <p className="text-[14px] font-normal text-[#645858]">
                Suas informações pessoais não são solicitadas
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col xl:mt-0">
          <div className="mt-10 flex w-full flex-row justify-end gap-x-4">
            {currentStep !== 'first' && (
              <button className="h-12.25 w-41.75 rounded-full border border-[#262626] px-6 text-[#262626]">
                Voltar
              </button>
            )}
            <button
              onClick={handleGoNextStep}
              className="flex h-12.25 w-41.75 items-center justify-center rounded-full bg-black px-6 text-white hover:bg-[#20A36C]"
            >
              <span>Confirmar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
