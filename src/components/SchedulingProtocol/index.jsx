'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { showToast } from 'nextjs-toast-notify'
import SyncLoader from 'react-spinners/SyncLoader'
import * as yup from 'yup'

import { useAppointmentStore } from '~/app/consultar-agendamento/_store'

const objFields = {
  protocolo: 'protocolo'
}

const schema = yup.object({
  protocolo: yup.string().required('Campo obrigatório')
})

export default function SchedulingProtocol() {
  const {
    request_status: requestStatus,
    fetchDataAppointmentOrder,
    recoverProtocols
  } = useAppointmentStore()

  const content = useAppointmentStore(state => state.content)

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

  const handleRecoverProtocols = async () => {
    const emailUsuario = content.email

    const result = await recoverProtocols({ email: emailUsuario })

    showToast.error(result.message, {
      duration: 12000,
      progress: true,
      position: 'top-left',
      transition: 'bounce',
      height: 200
    })

    if (result.success) {
      showToast.success(
        'Protocolos enviados! Verifique sua caixa de entrada (e também a pasta de SPAM).',
        {
          duration: 12000,
          progress: true,
          position: 'top-right',
          transition: 'bounce'
        }
      )
    }
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
    fetchDataAppointmentOrder(objFields.protocolo)
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

          <div className="mt-3 flex flex-row items-center justify-between max-sm:flex-col">
            <button
              type="button"
              onClick={handleRecoverProtocols}
              className="text-[1rem] font-semibold text-[#FD0003] max-sm:order-2 max-sm:mt-5"
            >
              Esqueci o Protocolo
            </button>

            <button
              type="submit"
              disabled={requestStatus === 'loading'}
              className="rcursor-pointer flex h-12.25 w-55.75 items-center justify-center gap-x-2 rounded-full bg-[#FD0003] px-6 text-white transition-opacity hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-[#FD0003] focus-visible:ring-offset-2 focus-visible:outline-none"
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
