'use client'

import React from 'react'
import { TbHeartHandshake } from 'react-icons/tb'

export function Banner() {
  function handleConsultSchedule() {
    window.location.href = '/consultar-agendamento'
  }

  return (
    <div className="relative flex h-[230px] w-full flex-col items-center justify-center bg-[#FFE2E2]">
      <div className="flex w-full flex-row items-center justify-between p-5 xl:w-[1120px] xl:p-0">
        <div className="flex flex-col">
          <h1 className="text-[1.2rem] font-[500] text-black xl:text-[1.7rem]">
            Já realizou seu pré-agendamento?{' '}
          </h1>
          <button
            onClick={handleConsultSchedule}
            className="mt-5 h-[38px] w-max rounded-full bg-black px-[1.5rem] text-white"
          >
            Clique aqui para consultar
          </button>
        </div>
        <img
          src="/images/schedule-banner.svg"
          className="absolute right-0 bottom-0 hidden xl:block"
        />
      </div>
    </div>
  )
}
