'use client'

import { useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { showToast } from 'nextjs-toast-notify'
import SyncLoader from 'react-spinners/SyncLoader'
import * as yup from 'yup'

import { useAppointmentStore } from '~/app/consultar-agendamento/_store'

const schema = yup.object({
  protocolo: yup.string().required('O número do protocolo é obrigatório')
})

export default function SchedulingProtocol() {
  const inputId = useId()
  const errorId = useId()
  
  const {
    request_status: requestStatus,
    fetchDataAppointmentOrder,
    recoverProtocols,
    content
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

  const handleRecoverProtocols = async () => {
    const emailUsuario = content?.email
    if (!emailUsuario) {
        showToast.error("E-mail não encontrado para recuperação.", { position: 'top-left' });
        return;
    }

    const result = await recoverProtocols({ email: emailUsuario })

    if (result.success) {
      showToast.success('Protocolos enviados! Verifique sua caixa de entrada.', {
        position: 'top-right',
        transition: 'bounce'
      })
    } else {
      showToast.error(result.message || "Erro ao recuperar protocolos", { position: 'top-left' })
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const protocoloString = urlParams.get('protocolo')

    if (protocoloString) {
      setValue('protocolo', protocoloString)
      fetchDataAppointmentOrder(protocoloString)
    }
  }, [setValue, fetchDataAppointmentOrder])

  const isLoading = requestStatus === 'loading'

  return (
    <section className="container mx-auto mt-12 flex max-w-285 flex-col items-center px-4">
      <form 
        className="w-full" 
        onSubmit={handleSubmit(onSubmit)}
        noValidate 
      >
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2">
            <label 
              htmlFor={inputId}
              className="text-[1rem] font-bold text-[#262626]"
            >
              Protocolo
              <span className="ml-1 text-[#D90000]" aria-hidden="true">*</span>
            </label>
            
            <input
              {...register('protocolo')}
              id={inputId}
              type="text"
              autoComplete="off"
              aria-required="true"
              aria-invalid={errors.protocolo ? "true" : "false"}
              aria-describedby={errors.protocolo ? errorId : undefined}
              placeholder="Ex: 123456789"
              className={`h-11.5 w-full rounded-md border bg-white px-4 font-normal text-[#404040] transition-all
                placeholder:text-[#757575] focus:outline-none focus:ring-2 
                ${errors.protocolo 
                  ? 'border-[#D90000] focus:ring-[#D90000]' 
                  : 'border-[#EDECEC] focus:ring-gray-400'
                }`}
            />

            <div 
              id={errorId} 
              aria-live="assertive" 
              className="min-h-5 text-sm font-medium text-[#D90000]"
            >
              {errors.protocolo?.message}
            </div>
          </div>

          <div className="mt-3 flex flex-row items-center justify-between max-sm:flex-col gap-y-4">
            <button
              type="button"
              onClick={handleRecoverProtocols}
              className="text-[1rem] font-semibold text-[#D90000] hover:underline focus:outline-dotted focus:outline-2 focus:outline-offset-2 max-sm:order-2"
            >
              Esqueci o Protocolo
            </button>

            <button
              type="submit"
              disabled={isLoading}
              aria-busy={isLoading}
              className="flex h-12.25 w-full sm:w-55.75 items-center justify-center gap-x-2 rounded-full bg-[#D90000] px-6 text-white transition-all hover:bg-[#B30000] disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#D90000] focus:ring-offset-2"
            >
              {isLoading ? (
                <>
                  <SyncLoader color="#FFFFFF" loading={true} size={3} aria-hidden="true" />
                  <span className="ml-2">Enviando...</span>
                </>
              ) : (
                "Confirmar"
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}