'use client'

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IMaskInput } from 'react-imask'
import axios from 'axios'
import { validateCPF } from '~/utils/validateCPF'

import {
  changeScheduleStep,
  saveSecondStepData
} from '~/app/pre-agendamento/store'
import { colourStyles } from '~/utils/select'

const optionsPeopleGenderList = [
  { value: 'Masculino', label: 'Masculino' },
  { value: 'Feminino', label: 'Feminino' },
  { value: 'Prefiro não responder', label: 'Prefiro não responder' }
]

const optionsBreedList = [
  { value: 'Amarela', label: 'Amarela' },
  { value: 'Branca', label: 'Branca' },
  { value: 'Indígena', label: 'Indígena' },
  { value: 'Parda', label: 'Parda' },
  { value: 'Preta', label: 'Preta' }
]

const optionsTipoEnderecoList = [
  { value: 'Rua', label: 'Rua' },
  { value: 'Avenida', label: 'Avenida' },
  { value: 'Via', label: 'Via' },
  { value: 'Viela', label: 'Viela' }
]

const objFields = {
  fullname: 'fullname',
  mother_name: 'mother_name',
  prontuario: 'prontuario',
  email: 'email',
  birth_date: 'birth_date',
  cel_phone: 'cel_phone',
  tel_phone: 'tel_phone',
  cpf: 'cpf',
  cns: 'cns',
  neighborhood: 'neighborhood',
  address: 'address',
  address_number: 'address_number',
  address_type: 'address_type',
  complement: 'complement',
  cep: 'cep',
  father_name: 'father_name',
  breed: 'breed',
  uf: 'uf',
  city: 'city'
}

const schema = yup.object({
  fullname: yup.string().required('Campo obrigatório'),
  mother_name: yup.string().required('Campo obrigatório'),
  father_name: yup.string(),
  prontuario: yup.string(),
  email: yup.string().email('E-mail inválido'),
  birth_date: yup.string().required('Campo obrigatório'),
  cel_phone: yup.string().required('Campo obrigatório'),
  tel_phone: yup.string(),
  cpf: yup
    .string()
    .required('Campo obrigatório')
    .test('test-invalid-cpf', 'CPF inválido', cpf => validateCPF(cpf)),
  cns: yup.string(),
  neighborhood: yup.string().required('Campo obrigatório'),
  address: yup.string().required('Campo obrigatório'),
  address_number: yup.string().required('Campo obrigatório'),
  address_type: yup.string().required('Campo obrigatório'),
  complement: yup.string(),
  cep: yup.string().required('Campo obrigatório'),
  city: yup.string().required('Campo obrigatório'),
  uf: yup.string().required('Campo obrigatório'),
  gender: yup.string().required('Campo obrigatório')
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
  const [genderOption, setGenderOption] = useState(genderSavedOption || null)

  const typeAddressSavedOption = optionsTipoEnderecoList?.find(
    item => item.value == dataSaved?.address_type
  )
  const [typeAddressOption, setTypeAddressOption] = useState(
    typeAddressSavedOption || null
  )

  const [breedOption, setBreedOption] = useState(genderSavedOption || null)
  const dispatch = useDispatch()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: dataSaved
  })

  const [optionsUfList, setOptionsUfList] = useState([])
  const [ufOption, setUfOption] = useState({})

  const [optionsCityList, setOptionsCityList] = useState([])
  const [cityOption, setCityOption] = useState({})

  const onLoadFilterUF = async inputValue => {
    try {
      const result = await axios.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      )

      const list = await Promise.all(
        result?.data?.map(item => ({ label: item.sigla, value: item.sigla }))
      )

      setOptionsUfList(list)

      return list
    } catch (err) {
      return []
    }
  }

  const onLoadFilterCities = async inputValue => {
    try {
      const result = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${inputValue}/municipios`
      )

      const list = await Promise.all(
        result?.data?.map(item => ({ label: item.nome, value: item.nome }))
      )

      setOptionsCityList(list)

      return list
    } catch (err) {
      return []
    }
  }

  useEffect(() => {
    onLoadFilterUF()

    if (dataSaved?.city) {
      setCityOption({
        label: dataSaved.city,
        value: dataSaved.city
      })
    }

    if (dataSaved?.uf) {
      setUfOption({
        label: dataSaved.uf,
        value: dataSaved.uf
      })
    }
  }, [])

  const onSubmit = data => {
    const objData = {
      fullname: data.fullname,
      mother_name: data.mother_name,
      prontuario: data.prontuario,
      email: data.email,
      birth_date: data.birth_date,

      cel_phone: data.cel_phone.replace(/\D/g, ''),

      tel_phone: data.tel_phone?.replace(/\D/g, '') || '',

      gender: genderOption?.value || null,

      father_name: data.father_name,

      cpf: data.cpf.replace(/\D/g, ''),

      cns: data.cns?.replace(/\D/g, '') || '',

      neighborhood: data.neighborhood,
      address: data.address,
      address_number: data.address_number,
      complement: data.complement,

      cep: data.cep.replace(/\D/g, ''),

      city: data.city,
      uf: data.uf,
      address_type: data.address_type
    }

    dispatch(saveSecondStepData(objData))
    dispatch(changeScheduleStep('third'))
  }

  function handleBackStep() {
    dispatch(changeScheduleStep('first'))
  }

  function onChangeGender(e) {
    setGenderOption(e)
    setValue('gender', e.value)
  }

  function onChangeBreed(e) {
    setBreedOption(e)
  }

  function onChangeTypeAddress(e) {
    setTypeAddressOption(e)

    setValue('address_type', e.value)
  }

  function onChangeUf(e) {
    setUfOption(e)
    onLoadFilterCities(e.value)

    setValue('uf', e.value)
  }

  function onChangeCity(e) {
    setCityOption(e)

    setValue('city', e.value)
  }

  return (
    <div className="mt-[2rem] flex w-full flex-col xl:mt-0">
      <div className="flex flex-col gap-y-5 xl:hidden">
        <div className="flex flex-col gap-y-1">
          <span className="text-[1rem] font-[400] text-[#A3A3A3]">Passo 2</span>
          <span className="text-[1.2rem] font-[600] text-[#727070]">
            Dados Paciente
          </span>
        </div>
      </div>
      <div className="mt-[1rem] xl:mt-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-5">
            <div className="mb-[1rem] hidden xl:block">
              <span className="text-[1.2rem] font-[500]">
                Dados do paciente
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Nome do Paciente<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields.fullname)}
                className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                placeholder="Escrevendo nome do Paciente"
              />
              <span className="text-[#ff5d5d]">
                {errors?.fullname?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Nome da Mãe<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields.mother_name)}
                className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                placeholder="Nome Completo"
              />
              <span className="text-[#ff5d5d]">
                {errors?.mother_name?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Nome do Pai
              </label>
              <input
                {...register(objFields.father_name)}
                className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                placeholder="Nome Completo"
              />
              <span className="text-[#ff5d5d]">
                {errors?.father_name?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Prontuário
              </label>
              <input
                {...register(objFields.prontuario)}
                type="number"
                className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                placeholder="12345"
              />
              <span className="text-[#ff5d5d]">
                {errors?.prontuario?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                E-mail
              </label>
              <input
                {...register(objFields.email)}
                className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                placeholder="seuemail@gmail.com"
              />
              <span className="text-[#ff5d5d]">{errors?.email?.message}</span>
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 xl:grid-cols-3 xl:gap-y-0">
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Data nascimento<span className="text-[#FD0003]">*</span>
                </label>

                <Controller
                  name={objFields.birth_date}
                  control={control}
                  rules={{
                    required: 'Data de nascimento é obrigatória',
                    validate: value => {
                      const digits = value.replace(/\D/g, '')
                      return digits.length === 8 || 'Data incompleta'
                    }
                  }}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="00/00/0000"
                      placeholder="00/00/0000"
                      className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                    />
                  )}
                />

                <span className="text-[#ff5d5d]">
                  {errors?.birth_date?.message}
                </span>
              </div>

              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Celular<span className="text-[#FD0003]">*</span>
                </label>

                <Controller
                  name={objFields.cel_phone}
                  control={control}
                  rules={{
                    required: 'Celular é obrigatório',
                    validate: value =>
                      value.replace(/\D/g, '').length === 11 ||
                      'Celular inválido'
                  }}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="(00) 00000-0000"
                      placeholder="(00) 00000-0000"
                      className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                    />
                  )}
                />

                <span className="text-[#ff5d5d]">
                  {errors?.cel_phone?.message}
                </span>
              </div>

              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Telefone (Opcional)
                </label>

                <Controller
                  name={objFields.tel_phone}
                  control={control}
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="(00) 0000-0000"
                      placeholder="(00) 0000-0000"
                      className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                    />
                  )}
                />

                <span className="text-[#ff5d5d]">
                  {errors?.tel_phone?.message}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 xl:grid-cols-2 xl:gap-y-0">
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Gênero<span className="text-[#FD0003]">*</span>
                </label>
                <Select
                  placeholder="Selecione"
                  value={genderOption}
                  options={optionsPeopleGenderList}
                  styles={colourStyles}
                  onChange={onChangeGender}
                />
                <span className="text-[#ff5d5d]">
                  {errors?.gender?.message}
                </span>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Raça<span className="text-[#FD0003]">*</span>
                </label>
                <Select
                  placeholder="Selecione"
                  value={breedOption}
                  options={optionsBreedList}
                  styles={colourStyles}
                  onChange={onChangeBreed}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 xl:grid-cols-2 xl:gap-y-0">
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
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
                      className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                    />
                  )}
                />

                <span className="text-[#ff5d5d]">{errors?.cpf?.message}</span>
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
                      className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                    />
                  )}
                />

                <span className="text-[#ff5d5d]">{errors?.cns?.message}</span>
              </div>
            </div>
            <div className="mt-[1rem] mb-[1rem]">
              <span className="text-[1.2rem] font-[500]">Endereço</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Tipo endereço<span className="text-[#FD0003]">*</span>
              </label>
              <Select
                placeholder="Selecione"
                value={typeAddressOption}
                options={optionsTipoEnderecoList}
                styles={colourStyles}
                onChange={onChangeTypeAddress}
              />
              <span className="text-[#ff5d5d]">
                {errors?.address_type?.message}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 xl:grid-cols-[auto_130px] xl:gap-y-0">
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Endereço<span className="text-[#FD0003]">*</span>
                </label>
                <input
                  {...register(objFields.address)}
                  className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                  placeholder=""
                />
                <span className="text-[#ff5d5d]">
                  {errors?.address?.message}
                </span>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Nr<span className="text-[#FD0003]">*</span>
                </label>
                <input
                  {...register(objFields.address_number)}
                  className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                  placeholder="S/N"
                />
                <span className="text-[#ff5d5d]">
                  {errors?.address_number?.message}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Bairro<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields.neighborhood)}
                className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                placeholder=""
              />
              <span className="text-[#ff5d5d]">
                {errors?.neighborhood?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Complemento
              </label>
              <input
                {...register(objFields.complement)}
                className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                placeholder=""
              />
              <span className="text-[#ff5d5d]">
                {errors?.complement?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
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
                    className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                  />
                )}
              />

              <span className="text-[#ff5d5d]">{errors?.cep?.message}</span>
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 xl:grid-cols-[120px_auto] xl:gap-y-0">
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Estado<span className="text-[#FD0003]">*</span>
                </label>
                <Select
                  placeholder="Selecione"
                  value={ufOption}
                  options={optionsUfList}
                  styles={colourStyles}
                  onChange={onChangeUf}
                />
                <span className="text-[#ff5d5d]">{errors?.uf?.message}</span>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Cidade<span className="text-[#FD0003]">*</span>
                </label>
                <Select
                  placeholder="Selecione"
                  value={cityOption}
                  options={optionsCityList}
                  styles={colourStyles}
                  onChange={onChangeCity}
                />
                <span className="text-[#ff5d5d]">{errors?.city?.message}</span>
              </div>
            </div>
          </div>
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
              className="h-[38px] w-max rounded-full bg-black px-[1.5rem] text-white"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
