'use client'

import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMaskInput } from 'react-imask'
import * as yup from 'yup'
import SyncLoader from 'react-spinners/SyncLoader'
import Alert from '@mui/material/Alert'
import { sendOmbudsmanAction } from './actions'
import { api } from '~/services/api'

import { GoArrowRight } from 'react-icons/go'
import { FaCheck, FaWhatsapp } from 'react-icons/fa6'

const objFields = {
  fullname: 'fullname',
  birth_date: 'birth_date',
  kinship_degree: 'kinship_degree',
  phone: 'phone',
  email: 'email',
  type: 'type',
  message: 'message',
  tipo: 'tipo'
}

const defaultValues = {
  fullname: '',
  birth_date: '',
  kinship_degree: '',
  phone: '',
  email: '',
  message: '',
  tipo: ''
}

const schema = yup.object({
  fullname: yup.string().required('Campo obrigatório'),
  birth_date: yup.string().required('Campo obrigatório'),
  // kinship_degree: yup.string().required('Campo obrigatório'),
  phone: yup.string().required('Campo obrigatório'),
  // email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
  // message: yup.string().required('Campo obrigatório'),
  tipo: yup.string().required('Escolha uma opção')
})

const selectTypeObj = {
  elogio: 'Elogio',
  duvida: 'Dúvida',
  reclamacao: 'Reclamação',
  solicitacao: 'Solicitação',
  sugestao: 'Sugestão'
}

export default function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectType, setSelectType] = useState(selectTypeObj.elogio)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
    setValue,
    watch
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  })

  const birthDateValue = watch('birth_date')
  const phoneValue = watch('phone')

  const [isSuccessSend, setIsSuccessSend] = useState(false)
  const [failSend, setFailSend] = useState({
    show: false,
    msg: ''
  })

  const getFieldClass = name => {
    const baseClass =
      'py-2.5 px-4 w-full rounded-[8px] border transition-all outline-none rounded-lg font-normal'

    if (errors[name]) {
      return `${baseClass} border-[#FD0003] text-[#FD0003] placeholder:text-[#FD0003]`
    }

    if (dirtyFields[name] && control._formValues[name]) {
      return `${baseClass} border-[#20A36C] text-[#262626] placeholder:text-[#262626]`
    }

    return `${baseClass} border-[#727070]/10 text-[#262626] placeholder:text-[#727070] placeholder:text-[12px]`
  }
  function handleChangeConfirmSchedule(value) {
    setSelectType(value)
    setValue('tipo', value)
  }

  const onSubmit = async data => {
    if (isLoading) return
    try {
      setIsLoading(true)
      const objData = {
        nome: data?.fullname,
        data_nascimento: data?.birth_date,
        grau_parentesco: data?.kinship_degree,
        telefone: data?.phone,
        email: data?.email,
        tipo: data?.tipo,
        mensagem: data?.message
      }

      const result = await sendOmbudsmanAction(objData)

      if (result.success) {
        reset(defaultValues, {
          keepDirty: false,
          keepErrors: false,
          keepTouched: false,
          keepValues: false
        })
        setSelectType(selectTypeObj.elogio)

        setIsSuccessSend(true)

        setFailSend({
          show: false,
          msg: ''
        })
      }
    } catch (err) {
      setFailSend({
        show: true,
        msg: 'Falha ao enviar!'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="my-16" aria-label="Formulário de Ouvidoria">
      <div className="container mx-auto flex flex-col max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <div className="flex flex-col items-center">
          <p className="text-[16px] font-semibold text-[#FD0003] uppercase">
            Fale Conosco
          </p>
          <h1 className="text-[32px] font-medium text-black max-sm:text-[26px]">
            Canal de Ouvidoria
          </h1>
          <p className="text-[14px] font-normal text-[#727070] max-sm:text-center">
            Preencha o formulário abaixo e registre elogios, dúvidas,
            reclamações, solicitações e sugestões.
          </p>
        </div>

        <form
          className="mx-auto mt-10 w-full rounded-[10px] border border-[#7270701A] bg-white px-6.25 py-5 xl:w-195"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="mb-6 text-[18px] font-medium text-black max-sm:text-center">
            Preencha o formulário
          </h2>

          <div className="flex flex-col gap-y-5">
            <div className="flex justify-between gap-4 max-sm:flex-col">
              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[14px] font-medium text-[#535353]">
                  Nome completo<span className="ml-1 text-[#FD0003]">*</span>
                </label>
                <input
                  {...register(objFields.fullname)}
                  className={getFieldClass('fullname')}
                  placeholder="Digitando o nome"
                />
                <span className="text-[#FD0003]">
                  {errors?.fullname?.message}
                </span>
              </div>

              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[14px] font-medium text-[#535353]">
                  Data nascimento<span className="ml-1 text-[#FD0003]">*</span>
                </label>
                <Controller
                  name="birth_date"
                  control={control}
                  render={({ field }) => (
                    <IMaskInput
                      {...register('birth_date')}
                      value={birthDateValue}
                      mask="00/00/0000"
                      className={getFieldClass('birth_date')}
                      placeholder="DD/MM/YYYY"
                      onAccept={value => {
                        setValue('birth_date', value)
                      }}
                    />
                  )}
                />
                {errors.birth_date && (
                  <span className="text-[16px] text-[#FD0003]">
                    {errors.birth_date.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-between gap-4 max-sm:flex-col">
              <div className="flex w-full flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                  <label className="text-[14px] font-medium text-[#535353]">
                    E-mail
                  </label>
                  <input
                    {...register(objFields.email)}
                    className={getFieldClass('email')}
                    placeholder="seuemail@gmail.com"
                  />
                  {/* <span className="text-[#FD0003]">
                    {errors?.email?.message}
                  </span> */}
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[14px] font-medium text-[#535353]">
                  Telefone<span className="ml-1 text-[#FD0003]">*</span>
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <IMaskInput
                      {...register('phone')}
                      value={phoneValue}
                      mask="(00) 00000-0000"
                      className={getFieldClass('phone')}
                      placeholder="DDD + números"
                      onAccept={value => {
                        setValue('phone', value)
                      }}
                    />
                  )}
                />
                {errors.phone && (
                  <span className="text-[16px] text-[#FD0003]">
                    {errors?.phone?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <label className="text-[14px] font-medium text-[#535353]">
                  Quem registra | Grau de parentesco com o paciente
                </label>
                <input
                  {...register(objFields.kinship_degree)}
                  className={getFieldClass('kinship_degree')}
                  placeholder="Ex: Primo, irmão, pai e etc."
                />
                {/* <span className="text-[#ff5d5d]">
                  {errors?.kinship_degree?.message}
                </span> */}
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-[14px] font-medium text-[#535353]">
                O que deseja registrar?{' '}
                <span className="text-[#FD0003]">*</span>
              </label>
              <div className="flex w-full items-center gap-y-3 max-sm:flex-col xl:flex-row xl:gap-x-3">
                <div
                  onClick={() =>
                    handleChangeConfirmSchedule(selectTypeObj.elogio)
                  }
                  className="flex w-full cursor-pointer flex-row items-center gap-x-3 xl:w-auto"
                >
                  <div
                    className={`h-4 w-4 ${selectType == selectTypeObj.elogio ? 'bg-[#FD0003]' : 'border border-[#727070]'} rounded-full`}
                  >
                    {selectType == selectTypeObj.elogio && (
                      <FaCheck
                        color="white"
                        size={10}
                        className="relative top-0.75 mx-auto"
                      />
                    )}
                  </div>
                  <span className="text-[14px] font-normal text-[#727070] max-sm:text-[16px]">
                    Elogio
                  </span>
                </div>
                <div
                  onClick={() =>
                    handleChangeConfirmSchedule(selectTypeObj.duvida)
                  }
                  className="flex w-full cursor-pointer flex-row items-center gap-x-3 xl:w-auto"
                >
                  <div
                    className={`h-4 w-4 ${selectType == selectTypeObj.duvida ? 'bg-[#FD0003]' : 'border border-[#727070]'} rounded-full`}
                  >
                    {selectType == selectTypeObj.duvida && (
                      <FaCheck
                        color="white"
                        size={10}
                        className="relative top-0.75 mx-auto"
                      />
                    )}
                  </div>
                  <span className="text-[14px] font-normal text-[#727070] max-sm:text-[16px]">
                    Dúvida
                  </span>
                </div>
                <div
                  onClick={() =>
                    handleChangeConfirmSchedule(selectTypeObj.reclamacao)
                  }
                  className="flex w-full cursor-pointer flex-row items-center gap-x-3 xl:w-auto"
                >
                  <div
                    className={`h-4 w-4 ${selectType == selectTypeObj.reclamacao ? 'bg-[#FD0003]' : 'border border-[#727070]'} rounded-full`}
                  >
                    {selectType == selectTypeObj.reclamacao && (
                      <FaCheck
                        color="white"
                        size={10}
                        className="relative top-0.75 mx-auto"
                      />
                    )}
                  </div>
                  <span className="text-[14px] font-normal text-[#727070] max-sm:text-[16px]">
                    Reclamação
                  </span>
                </div>
                <div
                  onClick={() =>
                    handleChangeConfirmSchedule(selectTypeObj.solicitacao)
                  }
                  className="flex w-full cursor-pointer flex-row items-center gap-x-3 xl:w-auto"
                >
                  <div
                    className={`h-4 w-4 ${selectType == selectTypeObj.solicitacao ? 'bg-[#FD0003]' : 'border border-[#727070]'} rounded-full`}
                  >
                    {selectType == selectTypeObj.solicitacao && (
                      <FaCheck
                        color="white"
                        size={10}
                        className="relative top-0.75 mx-auto"
                      />
                    )}
                  </div>
                  <span className="text-[14px] font-normal text-[#727070] max-sm:text-[16px]">
                    Solicitação
                  </span>
                </div>
                <div
                  onClick={() =>
                    handleChangeConfirmSchedule(selectTypeObj.sugestao)
                  }
                  className="flex w-full cursor-pointer flex-row items-center gap-x-3 xl:w-auto"
                >
                  <div
                    className={`h-4 w-4 ${selectType == selectTypeObj.sugestao ? 'bg-[#FD0003]' : 'border border-[#727070]'} rounded-full`}
                  >
                    {selectType == selectTypeObj.sugestao && (
                      <FaCheck
                        color="white"
                        size={10}
                        className="relative top-0.75 mx-auto"
                      />
                    )}
                  </div>
                  <span className="text-[14px] font-normal text-[#727070] max-sm:text-[16px]">
                    Sugestão
                  </span>
                </div>
              </div>
              <span className="text-[#FD0003]">{errors?.tipo?.message}</span>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <label className="text-[14px] font-medium text-[#535353]">
                  Comentário ou Mensagem
                </label>
                <textarea
                  rows={4}
                  {...register(objFields.message)}
                  className="max-h-75 min-h-11.5 w-full rounded-lg border border-[#727070]/10 px-4 py-[0.7rem] font-normal text-[#262626] outline-none placeholder:text-[12px] placeholder:font-normal placeholder:text-[#727070]"
                  placeholder="Digite seu comentario"
                ></textarea>
                <span className="text-[#ff5d5d]">
                  {errors?.message?.message}
                </span>
              </div>
            </div>
          </div>
          {isSuccessSend && (
            <div className="mt-4">
              <Alert severity="success">Enviado com sucesso!</Alert>
            </div>
          )}
          {failSend.show && (
            <div className="mt-4">
              <Alert severity="error">{failSend.msg}</Alert>
            </div>
          )}
          <div className="mt-12 flex w-full flex-row justify-end gap-x-4">
            <button
              type="submit"
              className="flex w-max flex-row items-center justify-center gap-x-2 rounded-full bg-[#FF0909] px-3.5 py-2 text-white transition-all hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-[#FF0909]/50"
            >
              <SyncLoader color="#E6E6E6" loading={isLoading} size={3} />
              {isLoading ? (
                'Enviando'
              ) : (
                <span className="flex items-center gap-x-2 text-[12px] font-medium">
                  Enviar <GoArrowRight size={18} />
                </span>
              )}
            </button>
          </div>
        </form>

        <div className="mt-10 flex flex-col items-center gap-y-2">
          <p className="text-[18px] font-normal text-[#FD0003] max-sm:text-center">
            Se preferir, fale diretamente com nossos ouvidores:
          </p>
          <p className="flex items-center gap-1 text-[16px] font-normal text-[#535353]">
            <FaWhatsapp size={23} />
            <span>(62) 3254-4270</span>
          </p>
        </div>
      </div>
    </section>
  )
}
