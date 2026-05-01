'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import SyncLoader from 'react-spinners/SyncLoader'
import * as yup from 'yup'

import { useAppointmentStore } from '~/app/consultar-agendamento/_store'
import ResponseError from '~/components/CustomComponents/ResponseError'

const objFields = {
  protocolo: 'protocolo'
}

const schema = yup.object({
  protocolo: yup.string().required('Campo obrigatório')
})

export default function SchedulingProtocol() {
  const {
    request_status: requestStatus,
    response_message: responseMessage,
    response_error: responseError,
    fetchDataAppointmentOrder
  } = useAppointmentStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    fetchDataAppointmentOrder(data.protocolo)
  }

  async function load() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const protocoloString = urlParams.get('protocolo')

    if (protocoloString) {
      setValue('protocolo', protocoloString)
      fetchDataAppointmentOrder(protocoloString)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="container mx-auto mt-12 flex max-w-285 flex-col items-center">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2">
            <label className="text-[1rem] font-medium text-[#262626]">
              Protocolo<span className="text-[#FD0003]">*</span>
            </label>
            <input
              {...register(objFields.protocolo)}
              className="h-11.5 w-full rounded-md border border-[#EDECEC] bg-white px-4 font-normal text-[#6D6D6D] placeholder:text-[#6D6D6D] focus:border-gray-300 focus:outline-none"
              placeholder="Digite seu protocolo"
            />
            <span className="text-[#FD0003]">{errors?.protocolo?.message}</span>
          </div>

          {/* O componente de erro reage automaticamente ao estado da store */}
          {responseError && <ResponseError responseMessage={responseMessage} />}

          <div className="mt-3 flex flex-row items-center justify-between max-sm:flex-col">
            <button
              type="button" // Importante: mudei para button para não submeter o form
              onClick={() => (window.location.href = '/esqueci-protocolo')}
              className="text-[1rem] font-semibold text-[#FD0003] max-sm:order-2 max-sm:mt-5"
            >
              Esqueci o Protocolo
            </button>

            <button
              type="submit"
              disabled={requestStatus === 'loading'}
              className="flex h-11 w-40.75 flex-row items-center justify-center gap-x-2 rounded-full bg-black px-6 text-white hover:bg-[#20A36C] hover:transition-colors hover:duration-200 hover:ease-in-out disabled:opacity-70 max-sm:w-full"
            >
              <SyncLoader
                color="#E6E6E6"
                loading={requestStatus === 'loading'}
                size={3}
              />
              {requestStatus === 'loading' ? (
                'Enviando'
              ) : (
                <span>Confirmar</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
