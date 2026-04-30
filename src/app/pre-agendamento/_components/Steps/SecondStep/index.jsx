'use client'

import React, { useId } from 'react'
import Image from 'next/image'
import { useScheduleStore } from '../../../_store'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMaskInput } from 'react-imask'
import Select from 'react-select'
import * as yup from 'yup'

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
}

const schema = yup.object({
  fullname: yup.string().required('Esse Campo é obrigatório'),
  mother_name: yup.string().required('Esse Campo é obrigatório'),
  birth_date: yup.string().required('Esse Campo é obrigatório'),
  cel_phone: yup.string().required('Esse Campo é obrigatório'),
  gender: yup.string().required('Esse Campo é obrigatório')
})

export function SecondStep() {
  const dataSaved = useScheduleStore(state => state.second_step_data)
  const currentStep = useScheduleStore(state => state.current_step)

  const saveSecondStepData = useScheduleStore(state => state.saveSecondStepData)
  const changeScheduleStep = useScheduleStore(state => state.changeScheduleStep)

  const id = useId()

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

  const getErrorProps = fieldName => ({
    'aria-invalid': errors[fieldName] ? 'true' : 'false',
    'aria-describedby': errors[fieldName]
      ? `${id}-${fieldName}-error`
      : undefined
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
    const birthDateRaw = data.birth_date
    let formattedBirthDate = birthDateRaw

    if (birthDateRaw && birthDateRaw.includes('/')) {
      const [day, month, year] = birthDateRaw.split('/')
      formattedBirthDate = `${year}-${month}-${day}`
    }

    const objData = {
      ...data,
      birth_date: formattedBirthDate,
      cel_phone: data.cel_phone.replace(/\D/g, ''),
      tel_phone: data.tel_phone?.replace(/\D/g, '') || ''
    }

    saveSecondStepData(objData)
    changeScheduleStep('third')
  }

  function handleBackStep() {
    changeScheduleStep('first')
  }

  return (
    <section
      className="mt-8 flex w-full flex-col xl:mt-0"
      aria-labelledby={`${id}-step-title`}
    >
      <header className="flex flex-col gap-y-5 xl:hidden">
        <div className="flex flex-col gap-y-1">
          <span
            className="text-[1rem] font-normal text-[#A3A3A3]"
            aria-hidden="true"
          >
            Passo 2
          </span>
          <span className="text-[1.2rem] font-semibold text-[#727070]">
            Dados Paciente
          </span>
        </div>
      </header>

      <div className="mt-4 xl:mt-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-5">
            <div className="mb-4 hidden xl:block">
              <h2
                id={`${id}-step-title-desktop`}
                className="text-[1.2rem] font-medium"
              >
                Dados do paciente
              </h2>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                htmlFor={`${id}-fullname`}
                className="text-[1rem] font-medium text-[#262626]"
              >
                Nome do Paciente<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields.fullname)}
                {...getErrorProps('fullname')}
                className={getFieldClass('fullname')}
                placeholder="Nome do Paciente"
                id={`${id}-fullname`}
              />
              {errors?.fullname && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.fullname?.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                htmlFor={`${id}-mother_name`}
                className="text-[1rem] font-medium text-[#262626]"
              >
                Nome da Mãe<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields.mother_name)}
                {...getErrorProps('mother_name')}
                className={getFieldClass('mother_name')}
                placeholder="Nome da Mãe"
                id={`${id}-mother_name`}
              />
              {errors?.mother_name && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.mother_name?.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                htmlFor={`${id}-prontuario`}
                className="text-[1rem] font-medium text-[#262626]"
              >
                Prontuário
              </label>
              <input
                {...register(objFields.prontuario)}
                className={getFieldClass('prontuario')}
                placeholder="Prontuário"
                type="number"
                id={`${id}-prontuario`}
              />
              {errors?.prontuario && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.prontuario?.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                htmlFor={`${id}-email`}
                className="text-[1rem] font-medium text-[#262626]"
              >
                E-mail
              </label>
              <input
                {...register(objFields.email)}
                className={getFieldClass('email')}
                placeholder="seuemail@gmail.com"
                id={`${id}-email`}
              />
              {errors?.email && (
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.email?.message}
                </span>
              )}
            </div>

            <div className="flex justify-between gap-x-5 max-sm:flex-col max-sm:gap-y-5">
              <div className="flex w-full flex-col gap-y-2">
                <label
                  htmlFor={`${id}-birth_date`}
                  className="text-[1rem] font-medium text-[#262626]"
                >
                  Data nascimento<span className="text-[#FD0003]">*</span>
                </label>
                <Controller
                  name="birth_date"
                  control={control}
                  render={({ field }) => (
                    <div className="relative">
                      <IMaskInput
                        {...field}
                        {...getErrorProps('birth_date')}
                        mask="00/00/0000"
                        className={getFieldClass('birth_date')}
                        placeholder="00/00/0000"
                        onAccept={value => field.onChange(value)}
                        id={`${id}-birth_date`}
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
                <label
                  htmlFor={`${id}-cel_phone`}
                  className="text-[1rem] font-medium text-[#262626]"
                >
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
                      id={`${id}-cel_phone`}
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
                <label
                  htmlFor={`${id}-tel_phone`}
                  className="text-[1rem] font-medium text-[#262626]"
                >
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
                      id={`${id}-tel_phone`}
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
          </div>
          <div className="mt-12 flex w-full flex-row justify-end gap-x-4">
            {currentStep !== 'first' && (
              <button
                onClick={handleBackStep}
                className="h-12.25 w-55.75 rounded-full border border-[#262626] px-6 text-[#262626] hover:bg-[#262626]/10"
                type="button"
              >
                Voltar
              </button>
            )}
            <button
              type="submit"
              className="h-12.25 w-55.75 rounded-full bg-black px-6 text-white hover:bg-[#20A36C] hover:text-white hover:transition-colors hover:duration-200 hover:ease-in-out"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
