'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IMaskInput } from 'react-imask'

import {
  changeScheduleStep,
  saveSecondStepData
} from '~/app/pre-agendamento/store'

const optionsPeopleGenderList = [
  { value: 'Masculino', label: 'Masculino' },
  { value: 'Feminino', label: 'Feminino' },
  { value: 'Prefiro não responder', label: 'Prefiro não responder' }
]

const objFields = {
  fullname: 'fullname',
  mother_name: 'mother_name',
  prontuario: 'prontuario',
  email: 'email',
  birth_date: 'birth_date',
  cel_phone: 'cel_phone',
  tel_phone: 'tel_phone'
  // cpf: 'cpf',
  // cns: 'cns',
  // neighborhood: 'neighborhood',
  // address: 'address',
  // address_number: 'address_number',
  // address_type: 'address_type',
  // complement: 'complement',
  // cep: 'cep',
  // father_name: 'father_name',
  // breed: 'breed',
  // uf: 'uf',
  // city: 'city'
}

const schema = yup.object({
  fullname: yup.string().required('Esse Campo é obrigatorio'),
  mother_name: yup.string().required('Esse Campo é obrigatorio'),
  // father_name: yup.string(),
  prontuario: yup.string(),
  email: yup.string().email('E-mail inválido'),
  birth_date: yup.string().required('Esse Campo é obrigatorio'),
  cel_phone: yup.string().required('Esse Campo é obrigatorio'),
  tel_phone: yup.string(),
  // cpf: yup
  //   .string()
  //   .required('Esse Campo é obrigatorio')
  //   .test('test-invalid-cpf', 'CPF inválido', cpf => validateCPF(cpf)),
  // cns: yup.string(),
  // neighborhood: yup.string().required('Esse Campo é obrigatorio'),
  // address: yup.string().required('Esse Campo é obrigatorio'),
  // address_number: yup.string().required('Esse Campo é obrigatorio'),
  // address_type: yup.string().required('Esse Campo é obrigatorio'),
  // complement: yup.string(),
  // cep: yup.string().required('Esse Campo é obrigatorio'),
  // city: yup.string().required('Esse Campo é obrigatorio'),
  // uf: yup.string().required('Esse Campo é obrigatorio'),
  gender: yup.string().required('Esse Campo é obrigatorio')
})

export function SecondStep() {
  const {
    return_type: returnType,
    current_step: currentStep,
    second_step_data: dataSaved
  } = useSelector(store => store.schedule)
  const genderSavedOption = optionsPeopleGenderList?.find(
    item => item.value == dataSaved?.gender
  )

  const dispatch = useDispatch()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: dataSaved,
    mode: 'onChange'
  })

  const getFieldClass = name => {
    const baseClass =
      'h-[46px] w-full rounded-[10px] border px-4 transition-all outline-none'
    if (errors[name])
      return `${baseClass} border-[#FD0003] text-[#FD0003] placeholder:text-[#FD0003]`
    if (dirtyFields[name]) return `${baseClass} border-[#20A36C] text-[#262626]`
    return `${baseClass} border-[#7D7D7D] text-[#262626]`
  }

  const getSelectStyles = name => ({
    control: base => ({
      ...base,
      backgroundColor: 'transparent',
      padding: '0 12px',
      borderColor: errors[name]
        ? '#FD0003'
        : dirtyFields[name]
          ? '#20A36C'
          : '#E5E7EB',
      borderRadius: '10px',
      boxShadow: 'none',
      cursor: 'pointer',
      minHeight: '46px',
      '&:hover': {
        borderColor: errors[name] ? '#FD0003' : '#7D7D7D'
      }
    }),

    menu: base => ({
      ...base,
      borderRadius: '12px',
      overflow: 'hidden',
      marginTop: '4px',
      border: '1px solid #E5E7EB',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
    }),

    menuList: base => ({
      ...base,
      padding: 0
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#F3F4F6' : 'white',
      color: '#262626',
      padding: '12px 16px',
      cursor: 'pointer',

      borderBottom: '1px solid #F3F4F6',
      '&:last-child': {
        borderBottom: 'none'
      },
      '&:active': {
        backgroundColor: '#E5E7EB'
      },
      '&:hover': {
        backgroundColor: '#F9FAFB'
      }
    }),

    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: base => ({
      ...base,
      color: '#727070'
    }),
    valueContainer: base => ({
      ...base,
      paddingLeft: '0px'
    })
  })

  const onSubmit = data => {
    const objData = {
      fullname: data.fullname,
      mother_name: data.mother_name,
      prontuario: data.prontuario,
      email: data.email,
      birth_date: data.birth_date,

      cel_phone: data.cel_phone.replace(/\D/g, ''),

      tel_phone: data.tel_phone?.replace(/\D/g, '') || '',

      gender: data.gender || null

      // father_name: data.father_name,

      // cpf: data.cpf.replace(/\D/g, ''),

      // cns: data.cns?.replace(/\D/g, '') || '',

      // neighborhood: data.neighborhood,
      // address: data.address,
      // address_number: data.address_number,
      // complement: data.complement,

      // cep: data.cep.replace(/\D/g, ''),

      // city: data.city,
      // uf: data.uf,
      // address_type: data.address_type
    }

    dispatch(saveSecondStepData(objData))
    dispatch(changeScheduleStep('third'))
  }

  function handleBackStep() {
    dispatch(changeScheduleStep('first'))
  }

  return (
    <div className="mt-8 flex w-full flex-col xl:mt-0">
      <div className="flex flex-col gap-y-5 xl:hidden">
        <div className="flex flex-col gap-y-1">
          <span className="text-[1rem] font-normal text-[#A3A3A3]">
            Passo 2
          </span>
          <span className="text-[1.2rem] font-semibold text-[#727070]">
            Dados Paciente
          </span>
        </div>
      </div>
      <div className="mt-4 xl:mt-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-5">
            <div className="mb-4 hidden xl:block">
              <span className="text-[1.2rem] font-medium">
                Dados do paciente
              </span>
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                Nome do Paciente<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields.fullname)}
                className={getFieldClass('fullname')}
                placeholder="Nome do Paciente"
              />
              {errors?.fullname && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.fullname?.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                Nome da Mãe<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields.mother_name)}
                className={getFieldClass('mother_name')}
                placeholder="Nome da Mãe"
              />
              {errors?.mother_name && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.mother_name?.message}
                </span>
              )}
            </div>

            {/* <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                Nome do Pai
              </label>
              <input
                {...register(objFields.father_name)}
                className={getFieldClass('father_name')}
                placeholder="Nome do Pai"
              />
              {errors?.father_name && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.father_name?.message}
                </span>
              )}
            </div> */}

            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                Prontuário
              </label>
              <input
                {...register(objFields.prontuario)}
                className={getFieldClass('prontuario')}
                placeholder="Prontuário"
              />
              {errors?.prontuario && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.prontuario?.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                E-mail
              </label>
              <input
                {...register(objFields.email)}
                className={getFieldClass('email')}
                placeholder="seuemail@gmail.com"
              />
              {errors?.email && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.email?.message}
                </span>
              )}
            </div>

            <div className="flex justify-between gap-x-5">
              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  Data nascimento<span className="text-[#FD0003]">*</span>
                </label>
                <Controller
                  name="birth_date"
                  control={control}
                  render={({ field }) => (
                    <div className="relative">
                      <IMaskInput
                        {...field}
                        mask="00/00/0000"
                        className={getFieldClass('birth_date')}
                        placeholder="00/00/0000"
                        onAccept={value => field.onChange(value)}
                      />
                      <Image
                        src="/icons/calendar-month-icon-gray.svg"
                        alt="Data de nascimento"
                        height={25}
                        width={25}
                        className="absolute top-1/2 right-3 -translate-y-1/2 transform"
                      />
                    </div>
                  )}
                />
                {errors.birth_date && (
                  <span className="text-[16px] font-semibold text-[#FD0003]">
                    {errors.birth_date.message}
                  </span>
                )}
              </div>

              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  Celular<span className="text-[#FD0003]">*</span>
                </label>
                <Controller
                  name="cel_phone"
                  control={control}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="(00) 00000-0000"
                      className={getFieldClass('cel_phone')}
                      placeholder="DDD+números"
                      onAccept={value => field.onChange(value)}
                    />
                  )}
                />
                {errors.cel_phone && (
                  <span className="text-[16px] font-semibold text-[#FD0003]">
                    {errors.cel_phone.message}
                  </span>
                )}
              </div>

              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  Telefone
                </label>
                <Controller
                  name="tel_phone"
                  control={control}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="(00) 00000-0000"
                      className={getFieldClass('tel_phone')}
                      placeholder="DDD+números"
                      onAccept={value => field.onChange(value)}
                    />
                  )}
                />
                {errors.tel_phone && (
                  <span className="text-[16px] font-semibold text-[#FD0003]">
                    {errors.tel_phone.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                Gênero*
              </label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={optionsPeopleGenderList}
                    placeholder="Selecione"
                    styles={getSelectStyles('gender')}
                    value={optionsPeopleGenderList.find(
                      c => c.value === field.value
                    )}
                    onChange={val => field.onChange(val.value)}
                  />
                )}
              />
              {errors.gender && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors.gender.message}
                </span>
              )}
            </div>

            {/* <div className="grid grid-cols-1 gap-x-5 gap-y-5 xl:grid-cols-2 xl:gap-y-0">
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  CPF<span className="text-[#FD0003]">*</span>
                </label>

                <Controller
                  name={objFields.cpf}
                  control={control}
                  rules={{
                    required: 'CPF é obrigatório',
                    validate: value => {
                      const d = value.replace(/\D/g, '')
                      if (d.length !== 11) return 'CPF incompleto'
                      return validateCPF(d) || 'CPF inválido'
                    }
                  }}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="000.000.000-00"
                      placeholder="000.000.000-00"
                      className={getFieldClass('cpf')}
                    />
                  )}
                />

                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.cpf?.message}
                </span>
              </div>

             
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  CNS (Carteira Nacional do SUS)
                </label>
                <Controller
                  name={objFields.cns}
                  control={control}
                  rules={{
                    validate: value =>
                      !value ||
                      value.replace(/\D/g, '').length === 15 ||
                      'CNS inválido'
                  }}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="000000000000000"
                      placeholder="000000000000000"
                      className={getFieldClass('cns')}
                    />
                  )}
                />

                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.cns?.message}
                </span>
              </div>
            </div> */}

            {/* <div className="mt-4 mb-4">
              <span className="text-[1.2rem] font-medium">Endereço</span>
            </div> */}

            {/* <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                Tipo endereço*
              </label>
              <Controller
                name="address_type"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={optionsTipoEnderecoList}
                    placeholder="Selecione"
                    styles={getSelectStyles('address_type')}
                    value={optionsTipoEnderecoList.find(
                      c => c.value === field.value
                    )}
                    onChange={val => field.onChange(val.value)}
                  />
                )}
              />
              {errors.address_type && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.address_type?.message}
                </span>
              )}
            </div> */}

            {/* <div className="grid grid-cols-1 gap-x-5 gap-y-5 xl:grid-cols-[auto_130px] xl:gap-y-0">
            
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  Endereço<span className="text-[#FD0003]">*</span>
                </label>
                <input
                  {...register(objFields.address)}
                  className={getFieldClass('address')}
                  placeholder="Endereço"
                />
                {errors?.address && (
                  <span className="text-[16px] font-semibold text-[#FD0003]">
                    {errors?.address?.message}
                  </span>
                )}
              </div>

           
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  Nr<span className="text-[#FD0003]">*</span>
                </label>
                <input
                  {...register(objFields.address_number)}
                  className={getFieldClass('address_number')}
                  placeholder="S/N"
                />
                {errors?.address_number && (
                  <span className="text-[16px] font-semibold text-[#FD0003]">
                    {errors?.address_number?.message}
                  </span>
                )}
              </div>
            </div> */}

            {/* <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                Bairro<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields.neighborhood)}
                className={getFieldClass('neighborhood')}
                placeholder=""
              />
              {errors?.neighborhood && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.neighborhood?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                Complemento
              </label>
              <input
                {...register(objFields.complement)}
                className={getFieldClass('complement')}
                placeholder=""
              />
              {errors?.complement && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.complement?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                CEP<span className="text-[#FD0003]">*</span>
              </label>
              <Controller
                name={objFields.cep}
                control={control}
                rules={{
                  required: 'CEP é obrigatório',
                  validate: value =>
                    value.replace(/\D/g, '').length === 8 || 'CEP inválido'
                }}
                render={({ field }) => (
                  <IMaskInput
                    {...field}
                    mask="00000-000"
                    placeholder="00000-000"
                    className={getFieldClass('cep')}
                  />
                )}
              />

              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.cep?.message}
              </span>
            </div> */}

            {/* <div className="grid grid-cols-1 gap-x-5 gap-y-5 xl:grid-cols-[120px_auto] xl:gap-y-0">
             
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  Estado<span className="text-[#FD0003]">*</span>
                </label>
                <Controller
                  name="uf"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={optionsUfList}
                      placeholder="Selecione"
                      styles={getSelectStyles('uf')}
                      value={
                        optionsUfList.find(c => c.value === field.value) || null
                      }
                      onChange={val => {
                        field.onChange(val.value)
                        onLoadFilterCities(val.value)
                        setValue('city', '')
                      }}
                    />
                  )}
                />
                {errors.uf && (
                  <span className="text-[14px] font-semibold text-[#FD0003]">
                    {errors.uf.message}
                  </span>
                )}
              </div>

        
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  Cidade<span className="text-[#FD0003]">*</span>
                </label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={optionsCityList}
                      placeholder={
                        optionsCityList.length > 0
                          ? 'Selecione'
                          : 'Selecione um estado primeiro'
                      }
                      styles={getSelectStyles('city')}
                      value={
                        optionsCityList.find(c => c.value === field.value) ||
                        null
                      }
                      onChange={val => field.onChange(val.value)}
                      isDisabled={optionsCityList.length === 0}
                    />
                  )}
                />
                {errors.city && (
                  <span className="text-[14px] font-semibold text-[#FD0003]">
                    {errors.city.message}
                  </span>
                )}
              </div>
            </div> */}
          </div>
          <div className="mt-12 flex w-full flex-row justify-end gap-x-4">
            {currentStep !== 'first' && (
              <button
                onClick={handleBackStep}
                className="h-[49px] w-[223px] rounded-full border border-[#262626] px-6 text-[#262626] hover:bg-[#262626]/10"
              >
                Voltar
              </button>
            )}
            <button
              type="submit"
              className="h-[49px] w-[223px] rounded-full bg-black px-6 text-white hover:bg-[#20A36C] hover:text-white hover:transition-colors hover:duration-200 hover:ease-in-out"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
