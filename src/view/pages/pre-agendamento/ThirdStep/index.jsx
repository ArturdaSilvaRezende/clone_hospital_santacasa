'use client'

const MAX_FILE_SIZE = 1024

const validFileExtensions = ['jpg', 'png', 'pdf', 'jpeg']

function isValidFileType(fileName) {
  return fileName && validFileExtensions.indexOf(fileName.split('.').pop()) > -1
}

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMaskInput } from 'react-imask'
import * as yup from 'yup'
import { MdOutlineFileUpload } from 'react-icons/md'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { IoCheckmark } from 'react-icons/io5'

import {
  changeScheduleStep,
  saveThirdStepData
} from '~/app/pre-agendamento/store'
import { colourStyles } from '~/utils/select'

import { fetchDataMedicalSpecialities } from '~/app/pre-agendamento/store'
import Image from 'next/image'

const optionsVacancyTypeList = [
  { value: 'Vaga Disponível', label: 'Vaga Disponível' },
  { value: 'Encaixe', label: 'Encaixe' }
]

const objFields = {
  doctor_name: 'doctor_name',
  files: 'files',
  tipo_marca: 'tipo_marca',
  type_confirm: 'type_confirm',
  vacancy_type: 'vacancy_type',
  new_speciality: 'new_speciality',
  imagem_pedido: 'imagem_pedido',
  add_to_calendar: 'add_to_calendar'
}

const schema = yup.object({
  doctor_name: yup.string().required('Campo obrigatório'),
  vacancy_type: yup.string().required('Campo obrigatório'),
  speciality: yup.string().required('Campo obrigatório'),
  type_confirm: yup.string().required('Campo obrigatório'),
  add_to_calendar: yup.boolean().default(false),
  new_speciality: yup.string(),
  tipo_marca: yup.string(),
  imagem_pedido: yup
    .mixed()
    .nullable()
    .test('is-valid-type', 'Tipo de arquivo inválido!', files => {
      if (!files[0]) return true
      return isValidFileType(files[0] && files[0].name.toLowerCase())
    })
})

const confirmScheduleInObj = {
  cel_phone: 'Celular',
  email: 'E-mail'
}

export function ThirdStep() {
  const dispatch = useDispatch()
  const {
    return_type: returnType,
    current_step: currentStep,
    speciality_list: specialityList,
    third_step_data: dataSaved
  } = useSelector(store => store.schedule)

  const specilitySaved = specialityList?.find(item => {
    if (item.id == dataSaved?.speciality) {
      return {
        label: item.name,
        value: item.id
      }
    } else return false
  })

  const vacancyTypeSaved = optionsVacancyTypeList?.find(
    item => item.value == dataSaved?.vacancy_type
  )

  const [specialityOption, setSpecialityOption] = useState(
    specilitySaved
      ? { label: specilitySaved.name, value: specilitySaved.id }
      : null
  )
  const [newSpecialityOption, setNewSpecialityOption] = useState({})
  const [vacancyTypeOption, setVacancyTypeOption] = useState(
    vacancyTypeSaved || null
  )
  const [confirmScheduleIn, setConfirmScheduleIn] = useState(
    dataSaved?.type_confirm || null
  )
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    watch,
    setValue,
    setError
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: dataSaved
  })
  const [marcaPassoList, setMarcaPassoList] = useState([])
  const [showMarcaPasso, setShowMarcaPasso] = useState(false)
  const [marcaPassoOption, setMarcaPassoOption] = useState(null)

  const files = watch('imagem_pedido')
  const hasFile = files && files.length > 0
  const fileError = errors?.imagem_pedido

  const uploadBoxClass = `group flex w-full cursor-pointer flex-col items-center justify-center rounded-[12px] border-[1px] py-[1.5rem] duration-200 ease-in-out ${
    fileError
      ? 'border-[#FD0003] bg-[#ffe1e1] hover:bg-[#ffbfbf]' // Estado de Erro
      : hasFile
        ? 'border-[#20A36C] bg-[#eafff5] hover:bg-[#d7f7e8]' // Estado Sucesso (Verde)
        : 'border-[#7D7D7D] bg-gray-50 hover:bg-gray-100' // Estado Inicial
  }`

  function handleChangeConfirmSchedule(value) {
    setConfirmScheduleIn(value)
    setValue('type_confirm', value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  const getFieldClass = name => {
    const baseClass =
      'h-[46px] w-full rounded-[10px] border px-4 transition-all outline-none'
    const value = watch(name) // Monitora o valor atual

    // Se houver erro, fica vermelho
    if (errors[name]) {
      return `${baseClass} border-[#FD0003] text-[#FD0003] placeholder:text-[#FD0003]`
    }

    // Se tiver valor e NÃO tiver erro, fica verde
    if (value && value !== '' && value !== null) {
      return `${baseClass} border-[#20A36C] text-[#262626]`
    }

    // Padrão cinza
    return `${baseClass} border-[#7D7D7D] text-[#262626]`
  }

  const getSelectStyles = name => {
    const fieldValue = watch(name)

    return {
      control: base => ({
        ...base,
        backgroundColor: 'transparent',
        padding: '0 12px',
        // Lógica de cores: Erro (vermelho) > Tem Valor (verde) > Padrão (cinza)
        borderColor: errors[name]
          ? '#FD0003'
          : fieldValue && fieldValue !== ''
            ? '#20A36C'
            : '#7D7D7D',
        borderRadius: '10px',
        boxShadow: 'none',
        cursor: 'pointer',
        minHeight: '46px',
        '&:hover': {
          // No hover, mantemos a lógica de cores
          borderColor: errors[name]
            ? '#FD0003'
            : fieldValue && fieldValue !== ''
              ? '#20A36C'
              : '#262626'
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
    }
  }

  const onSubmit = data => {
    const objData = {
      doctor_name: data?.doctor_name,
      vacancy_type: data?.vacancy_type,
      tipo_marca: data?.tipo_marca,
      speciality: data?.speciality,
      new_speciality: data?.new_speciality,
      type_confirm: data?.type_confirm,
      // imagem_pedido: data?.imagem_pedido
      imagem_pedido: data?.imagem_pedido?.[0]
        ? {
            name: data.imagem_pedido[0].name,
            size: data.imagem_pedido[0].size,
            type: data.imagem_pedido[0].type
          }
        : null
    }

    if (showMarcaPasso && !data?.tipo_marca) {
      setError('tipo_marca', {
        message: 'Campo obrigatório'
      })
      return
    }

    dispatch(saveThirdStepData(objData))
    dispatch(changeScheduleStep('fourth'))
  }

  function handleBackStep() {
    dispatch(changeScheduleStep('second'))
  }

  function onChangeSpeciality(e) {
    setSpecialityOption(e)
    setValue('tipo_marca', '', { shouldValidate: true })
    setMarcaPassoOption({})
    setValue('speciality', e.value, { shouldValidate: true, shouldDirty: true })

    const specialityItem = specialityList?.find(item => item.id == e.value)
    const marcaPassoOptions = specialityItem?.marca_passo_list?.map(item => ({
      label: item,
      value: item
    }))

    setShowMarcaPasso(specialityItem?.allow_marca_passo)
    setMarcaPassoList(marcaPassoOptions || [])
  }

  function onChangeMarcaPasso(e) {
    setMarcaPassoOption(e)
    setValue('tipo_marca', e.value)
  }

  function onChangeNewSpeciality(e) {
    setNewSpecialityOption(e)
    setValue('new_speciality', e.value)
  }

  function onChangeVacancyType(e) {
    setVacancyTypeOption(e)

    setValue('vacancy_type', e.value)
  }

  async function loadSpecialities() {
    dispatch(fetchDataMedicalSpecialities())
  }

  useEffect(() => {
    loadSpecialities()
  }, [])

  useEffect(() => {
    if (specialityList?.length < 0 && !dataSaved?.speciality) return

    const specialityItem = specialityList?.find(
      item => item.id == dataSaved?.speciality
    )

    const marcaPassoOptions = specialityItem?.marca_passo_list?.map(item => ({
      label: item,
      value: item
    }))

    setShowMarcaPasso(specialityItem?.allow_marca_passo)
    setMarcaPassoList(marcaPassoOptions || [])

    const marcaPassoItem = marcaPassoOptions?.find(
      item => item.value == dataSaved?.tipo_marca
    )

    setMarcaPassoOption(marcaPassoItem || {})
  }, [!!specialityList.length])

  const handleOpenFile = () => {
    document.querySelector('.input-file').click()
  }

  return (
    <div className="mt-[2rem] flex w-full flex-col xl:mt-0">
      <div className="flex flex-col gap-y-5 xl:hidden">
        <div className="flex flex-col gap-y-1">
          <span className="text-[1rem] font-[400] text-[#A3A3A3]">Passo 3</span>
          <span className="text-[1.2rem] font-[600] text-[#727070]">
            Dados Pré Agendamento
          </span>
        </div>
      </div>
      <div className="mt-[1rem] xl:mt-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Nome do médico<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields.doctor_name)}
                className={getFieldClass('doctor_name')}
                placeholder="Nome Completo"
              />
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.doctor_name?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Tipo Vaga<span className="text-[#FD0003]">*</span>
              </label>
              <Select
                placeholder="Selecione"
                value={vacancyTypeOption}
                options={optionsVacancyTypeList}
                styles={getSelectStyles('vacancy_type')}
                onChange={onChangeVacancyType}
              />
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.vacancy_type?.message}
              </span>
            </div>

            <input
              {...register('imagem_pedido')}
              type="file"
              className="input-file"
              hidden
            />

            {vacancyTypeOption?.value == 'Encaixe' && (
              <div onClick={handleOpenFile} className={uploadBoxClass}>
                <div className="flex flex-col items-center gap-y-2 text-center">
                  {!hasFile ? (
                    <>
                      <MdOutlineFileUpload
                        color={fileError ? '#FD0003' : '#000'}
                        size={50}
                      />
                      <p className={fileError ? 'text-[#FD0003]' : ''}>
                        Enviar comprovante
                      </p>
                    </>
                  ) : (
                    <>
                      <IoMdCheckmarkCircleOutline color="#20A36C" size={50} />
                      <p className="font-medium text-[#20A36C]">
                        Arquivo anexado
                      </p>
                    </>
                  )}
                  <div className="rounded-[5px] bg-black p-[0.5rem] text-[0.8rem] font-[400] text-white">
                    <p>
                      {hasFile
                        ? 'Clique para substituir'
                        : 'Limite 10MB, arquivos .pdf, .png, .jpeg, .jpg'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between gap-10">
              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  Data da ultima consulta
                  <span className="text-[#FD0003]">*</span>
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
                  Data da alta internação
                  <span className="text-[#FD0003]">*</span>
                </label>
                <Controller
                  name="discharge_date"
                  control={control}
                  render={({ field }) => (
                    <div className="relative">
                      <IMaskInput
                        {...field}
                        mask="00/00/0000"
                        className={getFieldClass('discharge_date')}
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
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Especialidade<span className="text-[#FD0003]">*</span>
              </label>
              <Select
                // isLoading={loading_specialities}
                placeholder="Selecione"
                value={specialityOption}
                options={
                  specialityList.length === 0
                    ? []
                    : specialityList?.map(item => ({
                        label: item.name,
                        value: item.id
                      }))
                }
                styles={getSelectStyles('speciality')}
                onChange={onChangeSpeciality}
              />
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.speciality?.message}
              </span>
            </div>
            {showMarcaPasso && (
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Marca passo<span className="text-[#FD0003]">*</span>
                </label>
                <Select
                  // isLoading={loading_specialities}
                  placeholder="Selecione"
                  value={marcaPassoOption}
                  options={marcaPassoList}
                  styles={getSelectStyles('tipo_marca')}
                  onChange={onChangeMarcaPasso}
                />
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.tipo_marca?.message}
                </span>
              </div>
            )}
            {returnType == 'internal_routing' && (
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Nova especialidade
                </label>
                <Select
                  // isLoading={loading_specialities}
                  placeholder="Selecione"
                  value={newSpecialityOption}
                  options={
                    !specialityOption?.value
                      ? []
                      : specialityList
                          ?.filter(item => item.id !== specialityOption.value)
                          ?.map(item => ({ label: item.name, value: item.id }))
                  }
                  styles={getSelectStyles('new_speciality')}
                  onChange={onChangeNewSpeciality}
                />
                <span className="text-[16px] font-semibold text-[#FD0003]">
                  {errors?.new_speciality?.message}
                </span>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Você prefere a confirmação do agendamento por qual meio?
              </label>
              <div className="flex flex-col items-center gap-y-3 xl:flex-row xl:gap-x-10 xl:gap-y-0">
                <div
                  onClick={() =>
                    handleChangeConfirmSchedule(confirmScheduleInObj.cel_phone)
                  }
                  className="flex cursor-pointer flex-row items-center gap-x-3"
                >
                  <div
                    className={`h-[30px] w-[30px] ${confirmScheduleIn == confirmScheduleInObj.cel_phone ? 'bg-[#262626]' : 'bg-[#D9D9D9]'} rounded-full`}
                  ></div>
                  <span>Celular</span>
                </div>
                <div
                  onClick={() =>
                    handleChangeConfirmSchedule(confirmScheduleInObj.tel_phone)
                  }
                  className="flex cursor-pointer flex-row items-center gap-x-3"
                >
                  <div
                    className={`h-[30px] w-[30px] ${confirmScheduleIn == confirmScheduleInObj.tel_phone ? 'bg-[#262626]' : 'bg-[#D9D9D9]'} rounded-full`}
                  ></div>
                  <span>Telefone Fixo</span>
                </div>
                <div
                  onClick={() =>
                    handleChangeConfirmSchedule(confirmScheduleInObj.email)
                  }
                  className="flex cursor-pointer flex-row items-center gap-x-3"
                >
                  <div
                    className={`h-[30px] w-[30px] ${confirmScheduleIn == confirmScheduleInObj.email ? 'bg-[#262626]' : 'bg-[#D9D9D9]'} rounded-full`}
                  ></div>
                  <span>E-mail</span>
                </div>
              </div>
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.type_confirm?.message}
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-y-2">
            <Controller
              name="add_to_calendar"
              control={control}
              render={({ field }) => (
                <div
                  className="group flex w-fit cursor-pointer items-center gap-x-3"
                  onClick={() => field.onChange(!field.value)}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 ${field.value ? 'bg-[#20A36C]' : 'bg-[#D9D9D9] group-hover:bg-[#ccc]'} `}
                  >
                    {field.value && <IoCheckmark size={21} color="#fff" />}
                  </div>

                  <span className="text-[1rem] font-[500] text-[#262626]">
                    Adicionar compromisso no Google Agenda.
                  </span>
                </div>
              )}
            />
          </div>

          <div className="mt-[3rem] flex w-full flex-row justify-end gap-x-[1rem]">
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
