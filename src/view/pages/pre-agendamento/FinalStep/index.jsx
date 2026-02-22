'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCopy } from 'react-icons/fa6'
import ResponseSuccess from '~/components/CustomComponents/ResponseSuccess'

export function FinalStep() {
  const { protocolo } = useSelector(store => store.schedule)
  const [isCopied, setIsCopied] = useState(false)

  function copyProtocolo(value) {
    navigator.clipboard.writeText(value).then(() => setIsCopied(true))
  }

  return (
    <div className="mt-8 flex w-full flex-col xl:mt-0">
      <div className="flex flex-col gap-y-2">
        <label className="text-[1rem] font-medium text-[#262626]">
          Protocolo
        </label>
        <div className="flex flex-row gap-x-4">
          <input
            value={protocolo}
            readOnly
            className="h-11.5 w-full rounded-md border border-[#7D7D7D] px-4 font-normal text-[#262626]"
          />
          <button onClick={() => copyProtocolo(protocolo)}>
            <FaRegCopy size={22} />
          </button>
        </div>
        {isCopied && (
          <ResponseSuccess responseMessage="Protocolo copiado com sucesso!" />
        )}
      </div>
      <div className="mt-12 flex w-full flex-col justify-end gap-y-4 md:flex-row md:gap-x-4 lg:gap-x-4 lg:flex-row xl:flex-row xl:gap-x-4">
        <button
          onClick={() =>
            (window.location.href =
              '/consultar-agendamento?protocolo=' + protocolo)
          }
          type="submit"
          className="flex h-9.5 w-full flex-row items-center justify-center gap-x-2 rounded-full bg-black px-6 text-white xl:w-max"
        >
          Consultar
        </button>
        <button
          onClick={() => (window.location.href = '/pre-agendamento')}
          type="submit"
          className="flex h-9.5 w-full flex-row items-center justify-center gap-x-2 rounded-full border border-black px-6 text-black xl:w-max"
        >
          Novo agendamento
        </button>
      </div>
    </div>
  )
}
