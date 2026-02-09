'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import SyncLoader from 'react-spinners/SyncLoader'
import { RiErrorWarningLine } from 'react-icons/ri'

import { fetchDataAppointmentOrder } from '~/app/consultar-agendamento/store'

const objFields = {
  protocolo: 'protocolo'
}

const schema = yup.object({
  protocolo: yup.string().required('Campo obrigatório')
})

export function FormSearchProtocol() {
  const dispatch = useDispatch()
  const {
    content,
    request_status: requestStatus,
    response_message: responseMessage,
    response_error: responseError
  } = useSelector(store => store.appointmmentOrder)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const objData = {
      protocolo: data.protocolo
    }

    dispatch(fetchDataAppointmentOrder(objData))
  }

  async function load() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const protocoloString = urlParams.get('protocolo')

    if (protocoloString) {
      setValue('protocolo', protocoloString)

      dispatch(
        fetchDataAppointmentOrder({
          protocolo: protocoloString
        })
      )
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
            <label className="text-[1rem] font-[500] text-[#262626]">
              Protocolo<span className="text-[#FD0003]">*</span>
            </label>
            <input
              {...register(objFields.protocolo)}
              className="h-11.5 w-full rounded-md border border-[#EDECEC] px-4 font-normal text-[#6D6D6D]"
              placeholder="Digite seu protocolo"
            />
            <span className="text-[#FD0003]">{errors?.protocolo?.message}</span>
          </div>
          {responseError && (
            <div className="mt-4 flex h-11.5 flex-row items-center gap-x-2 rounded-md bg-[#FDEDED] px-4 font-normal">
              <RiErrorWarningLine size={20} className="text-[#FD0003]" />
              <span className="text-[14px]">{responseMessage}</span>
            </div>
          )}
          <div className="mt-3 flex flex-row items-center justify-between">
            <button
              onClick={() => (window.location.href = '/esqueci-protocolo')}
              className="text-[1rem] font-semibold text-[#FD0003]"
            >
              Esqueci o Protocolo
            </button>
            <button
              type="submit"
              className="flex h-11 w-40.75 flex-row items-center justify-center gap-x-2 rounded-full bg-black px-6 text-white hover:bg-[#20A36C] hover:transition-colors hover:duration-200 hover:ease-in-out"
            >
              <SyncLoader
                color="#E6E6E6"
                loading={requestStatus == 'loading'}
                size={3}
              />
              {requestStatus == 'loading' ? 'Enviando' : <span>Confirmar</span>}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
