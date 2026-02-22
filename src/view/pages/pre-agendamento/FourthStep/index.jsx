'use client'

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { BiCheck } from 'react-icons/bi'
import SyncLoader from 'react-spinners/SyncLoader'

import {
  changeScheduleStep,
  fetchCreateSchedule,
  saveFouthStepData
} from '~/app/pre-agendamento/store'

const objFields = {
  obs: 'obs',
  term: 'term'
}

const schema = yup.object({
  obs: yup.string(),
  term: yup
    .boolean()
    .required('Essa opção precisa ser marcada para prosseguir!')
    .isTrue('Essa opção precisa ser marcada para prosseguir!')
})
export function FourthStep() {
  const {
    return_type: returnType,
    current_step: currentStep,
    second_step_data: secondStepData,
    third_step_data: thirdStepData,
    fourth_step_data: fourthStepData,
    create_schedule_status,
    error,
    message
  } = useSelector(store => store.schedule)

  const [acceptTerms, setAcceptTerms] = useState(fourthStepData?.term || false)
  const [isRobot, setIsRobot] = useState(false)
  const dispatch = useDispatch()

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
    const objData = {
      obs: data?.obs,
      term: data?.term
    }

    dispatch(saveFouthStepData(objData))

    const return_type_obj = {
      return_consult: 'Retorno de Consulta',
      return_post_hospitalization: 'Retorno Pós-Internação',
      internal_routing: 'Encaminhamento Interno'
    }

    // const contentForCreate = {
    //     tipo_retorno: return_type_obj[returnType],
    //     nome_paciente: secondStepData?.fullname,
    //     data_nascimento: secondStepData?.birth_date,
    //     nome_mae: secondStepData?.mother_name,
    //     numero_celular: secondStepData?.cel_phone,
    //     genero: secondStepData?.gender,
    //     numero_telefone: secondStepData?.tel_phone,
    //     email: secondStepData?.email || 'sememail@email.com',
    //     prontuario: secondStepData?.prontuario,
    //     nome_medico: thirdStepData?.doctor_name,
    //     tipo_vaga: thirdStepData?.vacancy_type,
    //     tipo_marca: thirdStepData?.tipo_marca,
    //     especialidade_sus: thirdStepData?.speciality,
    //     nova_especialidade_sus: thirdStepData?.new_speciality,
    //     tipo_confirmacao_agendamento: thirdStepData?.type_confirm,
    //     imagem_pedido: thirdStepData?.imagem_pedido,
    //     observacao: fourthStepData?.obs || '',
    //     termo: fourthStepData.term || false,
    //     nome_pai: secondStepData.father_name,
    //     cpf: secondStepData.cpf,
    //     cns: secondStepData.cns,
    //     bairro: secondStepData.neighborhood,
    //     logradouro: secondStepData.address,
    //     numero: secondStepData.address_number,
    //     complemento: secondStepData.complement,
    //     cep: secondStepData.cep,
    //     cidade: secondStepData.city,
    //     estado: secondStepData.uf,
    //     tipo_endereco: secondStepData.address_type
    // }

    const formData = new FormData()

    formData.append('tipo_retorno', return_type_obj[returnType])
    formData.append('nome_paciente', secondStepData?.fullname)
    formData.append('data_nascimento', secondStepData?.birth_date)
    formData.append('nome_mae', secondStepData?.mother_name)
    formData.append('numero_celular', secondStepData?.cel_phone)
    formData.append('genero', secondStepData?.gender)
    formData.append('numero_telefone', secondStepData?.tel_phone)
    formData.append('email', secondStepData?.email || 'sememail@email.com')
    formData.append('prontuario', secondStepData?.prontuario)
    formData.append('nome_medico', thirdStepData?.doctor_name)
    formData.append('tipo_vaga', thirdStepData?.vacancy_type)
    formData.append('tipo_marca', thirdStepData?.tipo_marca)
    formData.append('especialidade_sus', thirdStepData?.speciality)
    formData.append('nova_especialidade_sus', thirdStepData?.new_speciality)
    formData.append('tipo_confirmacao_agendamento', thirdStepData?.type_confirm)
    formData.append('observacao', fourthStepData?.obs || objData?.obs || '')
    formData.append('termo', fourthStepData.term || objData.term || false)
    // formData.append('nome_pai', secondStepData.father_name)
    // formData.append('cpf', secondStepData.cpf)
    // formData.append('cns', secondStepData.cns)
    // formData.append('bairro', secondStepData.neighborhood)
    // formData.append('logradouro', secondStepData.address)
    // formData.append('numero', secondStepData.address_number)
    // formData.append('complemento', secondStepData.complement)
    // formData.append('cep', secondStepData.cep)
    // formData.append('cidade', secondStepData.city)
    // formData.append('estado', secondStepData.uf)
    // formData.append('tipo_endereco', secondStepData.address_type)

    if (
      thirdStepData?.vacancy_type == 'Encaixe' &&
      thirdStepData?.imagem_pedido[0]
    ) {
      formData.append('imagem_pedido', thirdStepData?.imagem_pedido[0])
    }

    dispatch(
      fetchCreateSchedule({
        content: formData
      })
    )
  }

  function handleToggleCaptcha() {
    const newValue = !isRobot
    setIsRobot(newValue)
    setValue('captcha', newValue, { shouldValidate: true })
  }

  function handleBackStep() {
    const objData = getValues()
    dispatch(saveFouthStepData(objData))

    if (create_schedule_status == 'loading') return
    dispatch(changeScheduleStep('third'))
  }

  function handleToggleAcceptTerm() {
    const newAccept = !acceptTerms
    setAcceptTerms(newAccept)

    setValue('term', newAccept)
  }

  return (
    <div className="mt-8 flex w-full flex-col xl:mt-0">
      <div className="flex flex-col gap-y-5 xl:hidden">
        <div className="flex flex-col gap-y-1">
          <span className="text-[1rem] font-normal text-[#A3A3A3]">
            Passo 4
          </span>
          <span className="text-[1.2rem] font-semibold text-[#727070]">
            Observação e Confirmação
          </span>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2 max-sm:mt-5">
              <label className="text-[1rem] font-medium text-[#262626]">
                Observações e Sugestões
              </label>
              <input
                {...register(objFields?.obs)}
                className="h-11.5 w-full rounded-md border border-[#7D7D7D] px-4 font-normal text-[#262626]"
                placeholder="Duvidas sobre o agendamento?"
              />
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.obs?.message}
              </span>
            </div>

            <div
              className="flex cursor-pointer gap-5 flex-col max-sm:items-start"
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
                  {'"'}"Este termo visa registrar a manifestação livre,
                  informada e inequívoca pela qual o usuário concorda com o
                  tratamento de seus dados pessoais para finalidade específica,
                  em conformidade com a Lei nº 13.709 - Lei Geral de Proteção de
                  Dados Pessoais (LGPD)".{'"'}
                </p>
                {errors?.term && (
                  <span className="text-[16px] font-semibold text-[#FD0003]">
                    {errors?.term?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-y-2">
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
            </div>
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
              disabled={create_schedule_status === 'loading'}
              className="hover:bg-opacity-90 flex h-12.25 w-55.75 flex-row items-center justify-center gap-x-2 rounded-full bg-black px-6 text-white transition-all hover:bg-[#20A36C] hover:text-white hover:transition-colors hover:duration-200 hover:ease-in-out disabled:bg-gray-400"
            >
              <SyncLoader
                color="#E6E6E6"
                loading={create_schedule_status === 'loading'}
                size={3}
              />
              {create_schedule_status === 'loading' ? 'Enviando' : 'Confirmar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
