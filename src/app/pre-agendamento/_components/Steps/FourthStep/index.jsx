'use client'

import React, { useId, useState } from 'react'
import { useScheduleStore } from '../../../_store'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import SyncLoader from 'react-spinners/SyncLoader'
import * as yup from 'yup'

import { BiCheck } from 'react-icons/bi'

const objFields = {
  obs: 'obs',
  term: 'term'
}

const schema = yup.object({
  obs: yup.string(),
  term: yup
    .boolean()
    .oneOf([true], 'Você precisa aceitar os termos para prosseguir!')
    .required()
})

export function FourthStep() {
  const currentStep = useScheduleStore(state => state.current_step)
  const returnType = useScheduleStore(state => state.return_type)
  const secondStepData = useScheduleStore(state => state.second_step_data)
  const thirdStepData = useScheduleStore(state => state.third_step_data)
  const fourthStepData = useScheduleStore(state => state.fourth_step_data)
  const error = useScheduleStore(state => state.error)
  const createScheduleStatus = useScheduleStore(
    state => state.create_schedule_status
  )

  // Actions
  const saveFourthStepData = useScheduleStore(state => state.saveFourthStepData)
  const changeScheduleStep = useScheduleStore(state => state.changeScheduleStep)
  const fetchCreateSchedule = useScheduleStore(
    state => state.fetchCreateSchedule
  )

  const [acceptTerms, setAcceptTerms] = useState(fourthStepData?.term || false)
  const [isRobot, setIsRobot] = useState(false)
  const id = useId()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: fourthStepData
  })

  const onSubmit = async data => {
    const return_type_translation = {
      return_consult: 'Retorno de Consulta',
      return_post_hospitalization: 'Retorno Pós-Internação',
      internal_routing: 'Encaminhamento Interno'
    }

    const formData = new FormData()

    formData.append(
      'tipo_retorno',
      return_type_translation[returnType] || returnType
    )
    formData.append('nome_paciente', secondStepData?.fullname)
    formData.append('data_nascimento', secondStepData?.birth_date)
    formData.append('nome_mae', secondStepData?.mother_name)
    formData.append('numero_celular', secondStepData?.cel_phone)
    formData.append('genero', secondStepData?.gender)
    formData.append('numero_telefone', secondStepData?.tel_phone || '')
    formData.append('email', secondStepData?.email || '')
    formData.append('prontuario', secondStepData?.prontuario || '')

    formData.append('nome_medico', thirdStepData?.doctor_name || '')
    formData.append('tipo_vaga', thirdStepData?.vacancy_type)
    formData.append('especialidade_sus', thirdStepData?.speciality)
    formData.append('tipo_confirmacao_agendamento', thirdStepData?.type_confirm)

    if (
      thirdStepData?.vacancy_type === 'Encaixe' &&
      thirdStepData?.imagem_pedido
    ) {
      const file =
        thirdStepData.imagem_pedido.rawFile || thirdStepData.imagem_pedido
      formData.append('imagem_pedido', file)
    }

    formData.append('observacao', data.obs || '')
    formData.append('termo', String(data.term))

    const sanitizedData = {
      obs: data.obs || '',
      term: data.term || false
    }
    saveFourthStepData(sanitizedData)

    await fetchCreateSchedule({ content: formData })
  }

  function handleBackStep() {
    if (createScheduleStatus === 'loading') return

    const objData = getValues()
    saveFourthStepData(objData)
    changeScheduleStep('third')
  }

  function handleToggleAcceptTerm() {
    const newAccept = !acceptTerms
    setAcceptTerms(newAccept)
    setValue('term', newAccept, { shouldValidate: true })
  }

  return (
    <section
      className="mt-8 flex w-full flex-col xl:mt-0"
      aria-labelledby={`${id}-review-title`}
    >
      <header className="flex flex-col gap-y-5 xl:hidden">
        <div className="flex flex-col gap-y-1">
          <span
            className="text-[1rem] font-normal text-[#727070]"
            aria-hidden="true"
          >
            Passo 4
          </span>
          <h2
            id={`${id}-review-title`}
            className="text-[1.2rem] font-semibold text-[#727070]"
          >
            Observação e Confirmação
          </h2>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2 max-sm:mt-5">
            <label
              htmlFor={`${id}-obs`}
              className="text-[1rem] font-medium text-[#262626]"
            >
              Observações e Sugestões
            </label>
            <input
              {...register(objFields?.obs)}
              id={`${id}-obs`}
              className="h-11.5 w-full rounded-md border border-[#7D7D7D] px-4 font-normal text-[#262626]"
              placeholder="Duvidas sobre o agendamento?"
            />
            <span className="text-[16px] font-semibold text-[#FD0003]">
              {errors?.obs?.message}
            </span>
          </div>

          <div
            className="flex cursor-pointer flex-col gap-5 max-sm:items-start"
            onClick={handleToggleAcceptTerm}
          >
            <div className="flex items-center gap-5">
              <div
                className={`flex h-7 w-7 flex-col items-center justify-center rounded-lg transition-colors ${acceptTerms ? 'bg-[#20A36C]' : 'border border-[#262626]'}`}
              >
                <BiCheck size={27} color="#fff" />
              </div>

              <span className="font-semibold">
                Aceito o termo e afirmo que as informações são verdadeiras.
              </span>
            </div>
            <div className="text-[1rem] text-[#2E2E2E] select-none">
              <p className="mt-1 mb-5 text-[0.9rem] leading-tight text-[#727070]">
                {'"'}"Este termo visa registrar a manifestação livre, informada
                e inequívoca pela qual o usuário concorda com o tratamento de
                seus dados pessoais para finalidade específica, em conformidade
                com a Lei nº 13.709 - Lei Geral de Proteção de Dados Pessoais
                (LGPD)".{'"'}
              </p>
              {errors?.term && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.term?.message}
                </span>
              )}
            </div>
          </div>

          {/* <div className="mt-2 flex flex-col gap-y-2">
              <div className="flex w-full max-w-76.25 items-center justify-between rounded-sm border border-[#d3d3d3] bg-[#f9f9f9] p-2.5 shadow-sm">
                <div
                  className="flex cursor-pointer items-center gap-x-3 select-none"
                  onClick={handleToggleCaptcha}
                >
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-[3px] border-2 bg-white transition-all ${isRobot ? 'border-[#20A36C]' : 'border-[#c1c1c1]'}`}
                  >
                    {isRobot && <BiCheck size={24} color="#20A36C" />}
                  </div>
                  <span className="text-[14px] font-normal text-[#2e2e2e]">
                    Não sou Robô
                  </span>
                </div>

                <div className="ml-4 flex flex-col items-center">
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="reCAPTCHA"
                    className="h-8 w-8 object-contain opacity-80"
                  />
                  <span className="text-[9px] font-medium text-[#7d7d7d]">
                    reCAPTCHA
                  </span>
                  <div className="flex gap-x-1 text-[8px] text-[#9b9b9b]">
                    <span>Privacidade</span>
                    <span>-</span>
                    <span>Termos</span>
                  </div>
                </div>
              </div>
              {errors?.captcha && (
                <span className="text-xs font-semibold text-[#ff5d5d]">
                  {errors?.captcha?.message}
                </span>
              )}
            </div> */}
        </div>

        {error && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            Ocorreu um erro ao processar o agendamento. Tente novamente.
          </div>
        )}

        <div className="mt-12 flex w-full flex-row justify-end gap-x-4">
          {currentStep !== 'first' && (
            <button
              type="button"
              onClick={handleBackStep}
              className="h-12.25 w-55.75 rounded-full border border-[#262626] px-6 text-[#262626] hover:bg-[#262626]/10"
            >
              Voltar
            </button>
          )}
          <button
            type="submit"
            disabled={createScheduleStatus === 'loading'}
            className="rcursor-pointer flex h-12.25 w-55.75 items-center justify-center gap-x-2 rounded-full bg-[#FD0003] px-6 text-white transition-opacity hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-[#FD0003] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <SyncLoader
              color="#E6E6E6"
              loading={createScheduleStatus === 'loading'}
              size={3}
            />
            {createScheduleStatus === 'loading' ? 'Enviando' : 'Confirmar'}
          </button>
        </div>
      </form>
    </section>
  )
}
