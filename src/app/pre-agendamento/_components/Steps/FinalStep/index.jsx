'use client'

import React, { useState, useEffect, useId, useRef } from 'react'
import { useScheduleStore } from '../../../_store'
import { FaRegCopy } from 'react-icons/fa6'
import ResponseSuccess from '~/components/CustomComponents/ResponseSuccess'

export function FinalStep() {
  const protocolo = useScheduleStore(state => state.protocolo)
  const [isCopied, setIsCopied] = useState(false)
  const id = useId()
  const successRef = useRef(null)

  useEffect(() => {
    successRef.current?.focus()
  }, [])

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isCopied])

  function copyProtocolo(value) {
    if (!value) return
    navigator.clipboard.writeText(value).then(() => setIsCopied(true))
  }

  return (
    <section
      className="animate-in fade-in mt-8 flex w-full flex-col duration-500 xl:mt-0"
      aria-labelledby={`${id}-final-title`}
    >
      <div className="flex flex-col gap-y-4">
        <header
          ref={successRef}
          tabIndex={-1}
          role="alert"
          className="mb-4 rounded-r-md border-l-4 border-[#20A36C] bg-green-50 p-4 outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <h2
            id={`${id}-final-title`}
            className="text-[1.2rem] font-bold text-green-800"
          >
            Agendamento Solicitado com Sucesso!
          </h2>
          <p className="mt-1 text-sm text-green-700">
            Seu pré-agendamento foi enviado para a equipe da Santa Casa.
          </p>
        </header>

        <div className="flex flex-col gap-y-2">
          <label
            htmlFor={`${id}-protocolo`}
            className="text-[1rem] font-medium text-[#262626]"
          >
            Guarde seu número de Protocolo:
          </label>

          <div className="flex flex-row gap-x-2">
            <input
              id={`${id}-protocolo`}
              value={protocolo || 'Gerando...'}
              readOnly
              className="h-11.5 w-full rounded-md border border-[#7D7D7D] bg-gray-50 px-4 font-mono text-[1.1rem] font-bold text-[#262626] outline-none select-all focus:ring-2 focus:ring-black"
              aria-describedby={`${id}-protocolo-hint`}
            />
            <button
              onClick={() => copyProtocolo(protocolo)}
              className="flex h-11.5 w-12 items-center justify-center rounded-md border border-[#7D7D7D] bg-white transition-all outline-none hover:bg-gray-100 hover:text-[#FD0003] focus:ring-2 focus:ring-black"
              title="Copiar Protocolo"
              aria-label="Copiar número do protocolo para a área de transferência"
            >
              <FaRegCopy size={22} aria-hidden="true" />
            </button>
          </div>
          <p id={`${id}-protocolo-hint`} className="sr-only">
            Este é o número de identificação do seu pedido. Você precisará dele
            para consultar o status futuramente.
          </p>
        </div>

        <div aria-live="polite" className="h-10">
          {isCopied && (
            <div className="mt-2">
              <ResponseSuccess responseMessage="Protocolo copiado com sucesso!" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 flex w-full flex-col justify-end gap-y-4 md:flex-row md:gap-x-4">
        <button
          onClick={() =>
            (window.location.href = `/consultar-agendamento?protocolo=${protocolo}`)
          }
          className="flex h-12 w-full flex-row items-center justify-center gap-x-2 rounded-full bg-black px-8 text-white transition-all hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-max"
        >
          Consultar Status
        </button>

        <button
          onClick={() => (window.location.href = '/pre-agendamento')}
          className="flex h-12 w-full flex-row items-center justify-center gap-x-2 rounded-full border-2 border-black px-8 text-black transition-all hover:bg-gray-100 focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-max"
        >
          Novo Agendamento
        </button>
      </div>
    </section>
  )
}
