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
    .required('Campo obrigatório')
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
    formData.append('nome_pai', secondStepData.father_name)
    formData.append('cpf', secondStepData.cpf)
    formData.append('cns', secondStepData.cns)
    formData.append('bairro', secondStepData.neighborhood)
    formData.append('logradouro', secondStepData.address)
    formData.append('numero', secondStepData.address_number)
    formData.append('complemento', secondStepData.complement)
    formData.append('cep', secondStepData.cep)
    formData.append('cidade', secondStepData.city)
    formData.append('estado', secondStepData.uf)
    formData.append('tipo_endereco', secondStepData.address_type)

    if (
      thirdStepData?.vacancy_type == 'Encaixe' &&
      thirdStepData?.imagem_pedido[0]
    ) {
      formData.append('imagem_pedido', thirdStepData?.imagem_pedido[0])
    }

    // console.log(thirdStepData?.vacancy_type)

    dispatch(
      fetchCreateSchedule({
        content: formData
      })
    )
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
    <div className="mt-[2rem] flex w-full flex-col xl:mt-0">
      <div className="flex flex-col gap-y-5 xl:hidden">
        <div className="flex flex-col gap-y-1">
          <span className="text-[1rem] font-[400] text-[#A3A3A3]">Passo 4</span>
          <span className="text-[1.2rem] font-[600] text-[#727070]">
            Observação e Confirmação
          </span>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Observações e Sugestões<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields?.obs)}
                className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                placeholder="Duvidas sobre o agendamento?"
              />
              <span className="text-[#ff5d5d]">{errors?.obs?.message}</span>
            </div>
            <div
              className="flex cursor-pointer flex-row gap-x-5"
              onClick={handleToggleAcceptTerm}
            >
              <div>
                <div
                  className={`flex h-[28px] w-[28px] flex-col items-center justify-center rounded-[8px] ${acceptTerms ? 'bg-[#20A36C]' : 'border-[1px] border-[#262626]'}`}
                >
                  <BiCheck size={27} color="#fff" />
                </div>
              </div>
              <div className="text-[1rem] text-[#2E2E2E] select-none">
                <span className="font-[600]">
                  Aceito o termo e afirmo que as informações são verdadeiras.
                </span>
                <p>
                  {'"'}Este termo visa registrar a manifestação livre, informada
                  e inequívoca pela qual o usuário concorda com o tratamento de
                  seus dados pessoais para finalidade específica, em
                  conformidade com a Lei nº 13.709 - Lei Geral de Proteção de
                  Dados Pessoais (LGPD){'"'}.
                </p>
              </div>
              <span className="text-[#ff5d5d]">{errors?.term?.message}</span>
            </div>
          </div>
          {error && (
            <div className="mt-[1rem]">
              {/* <Alert severity="error">{message}</Alert> */}
              !!!
            </div>
          )}
          <div className="mt-[3rem] flex w-full flex-row justify-end gap-x-[1rem]">
            {currentStep !== 'first' && (
              <button
                onClick={handleBackStep}
                className="h-[38px] w-max rounded-full border-[1px] border-[#262626] px-[1.5rem] text-[#262626]"
              >
                Voltar
              </button>
            )}
            <button
              type="submit"
              className="flex h-[38px] w-max flex-row items-center justify-center gap-x-2 rounded-full bg-black px-[1.5rem] text-white"
            >
              <SyncLoader
                color="#E6E6E6"
                loading={create_schedule_status == 'loading'}
                size={3}
              />
              {create_schedule_status == 'loading' ? (
                'Enviando'
              ) : (
                <span>Confirmar</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
