'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { useScheduleStore } from '../../../_store'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Select from 'react-select'
import * as yup from 'yup'

import { MdOutlineFileUpload } from 'react-icons/md'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const isValidFileType = fileName => {
  return /\.(jpe?g|png|pdf)$/i.test(fileName)
}

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
  imagem_pedido: yup.mixed().when('vacancy_type', {
    is: 'Encaixe',
    then: schema =>
      schema
        .test('file-exists', 'Arquivo obrigatório para Encaixe', value => {
          return value && value instanceof FileList && value.length > 0
        })
        .test('is-valid-type', 'Tipo de arquivo inválido!', value => {
          if (!value || !value[0]) return false
          return isValidFileType(value[0].name)
        }),
    otherwise: schema => schema.nullable()
  })
})

const confirmScheduleInObj = {
  cel_phone: 'Celular',
  email: 'E-mail'
}

export function ThirdStep() {
  const returnType = useScheduleStore(state => state.return_type)
  const specialityList = useScheduleStore(state => state.speciality_list)
  const dataSaved = useScheduleStore(state => state.third_step_data)
  const currentStep = useScheduleStore(state => state.current_step)

  // Actions
  const changeScheduleStep = useScheduleStore(state => state.changeScheduleStep)
  const saveThirdStepData = useScheduleStore(state => state.saveThirdStepData)
  const fetchDataMedicalSpecialities = useScheduleStore(
    state => state.fetchDataMedicalSpecialities
  )

  const [marcaPassoList, setMarcaPassoList] = useState([])
  const [showMarcaPasso, setShowMarcaPasso] = useState(false)
  const [marcaPassoOption, setMarcaPassoOption] = useState(null)

  const id = useId()

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

  const specialtyOptions =
    specialityList?.map(item => ({
      label: item.name,
      value: item.id
    })) || []

  const files = watch('imagem_pedido')
  const hasFile = files && files.length > 0
  const fileError = errors?.imagem_pedido

  const uploadBoxClass = `group flex w-full cursor-pointer flex-col items-center justify-center rounded-[12px] border-[1px] py-[1.5rem] duration-200 ease-in-out ${
    fileError
      ? 'border-[#FD0003] bg-[#ffe1e1] hover:bg-[#ffbfbf]'
      : hasFile
        ? 'border-[#20A36C] bg-[#eafff5] hover:bg-[#d7f7e8]'
        : 'border-[#7D7D7D] bg-gray-50 hover:bg-gray-100'
  }`

  const handleChangeConfirmSchedule = value => {
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
    const value = watch(name)

    if (errors[name]) {
      return `${baseClass} border-[#FD0003] text-[#FD0003] placeholder:text-[#FD0003]`
    }

    if (value && value !== '' && value !== null) {
      return `${baseClass} border-[#20A36C] text-[#262626]`
    }

    return `${baseClass} border-[#7D7D7D] text-[#262626]`
  }

  const getSelectStyles = name => {
    const fieldValue = watch(name)

    return {
      control: base => ({
        ...base,
        backgroundColor: 'transparent',
        padding: '0 12px',

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

  const onChangeSpeciality = e => {
    setSpecialityOption(e)
    setValue('speciality', e.value, { shouldValidate: true })
    setValue('tipo_marca', '')

    const specItem = specialityList.find(item => item.id == e.value)
    setShowMarcaPasso(!!specItem?.allow_marca_passo)
    setMarcaPassoList(
      specItem?.marca_passo_list?.map(m => ({ label: m, value: m })) || []
    )
  }

  const onChangeMarcaPasso = e => {
    setMarcaPassoOption(e)
    setValue('tipo_marca', e.value)
  }

  const onChangeNewSpeciality = e => {
    setNewSpecialityOption(e)
    setValue('new_speciality', e.value)
  }

  const onChangeVacancyType = e => {
    setVacancyTypeOption(e)

    setValue('vacancy_type', e?.value || '', {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  const onSubmit = data => {
    const fileInfo = data.imagem_pedido?.[0]
      ? {
          name: data.imagem_pedido[0].name,
          size: data.imagem_pedido[0].size,
          type: data.imagem_pedido[0].type,
          rawFile: data.imagem_pedido[0]
        }
      : null

    const objData = {
      ...data,
      imagem_pedido: fileInfo
    }

    if (showMarcaPasso && !data.tipo_marca) {
      setError('tipo_marca', { message: 'Campo obrigatório' })
      return
    }

    saveThirdStepData(objData)
    changeScheduleStep('fourth')
  }

  const handleBackStep = () => {
    changeScheduleStep('second')
  }

  useEffect(() => {
    if (dataSaved?.speciality && specialityList.length > 0) {
      const selected = specialityList.find(s => s.id === dataSaved.speciality)
      if (selected?.allow_marca_passo) {
        setShowMarcaPasso(true)
        setMarcaPassoList(
          selected.marca_passo_list?.map(m => ({ label: m, value: m })) || []
        )
      }
    }
  }, [specialityList, dataSaved?.speciality])

  useEffect(() => {
    if (specialityList.length === 0) {
      fetchDataMedicalSpecialities()
    }
  }, [specialityList.length, fetchDataMedicalSpecialities])

  useEffect(() => {
    if (specialityList.length > 0 && dataSaved?.speciality) {
      const selectedSpec = specialityList.find(
        s => s.id == dataSaved.speciality
      )
      if (selectedSpec) {
        setSpecialityOption({
          label: selectedSpec.name,
          value: selectedSpec.id
        })

        if (selectedSpec.allow_marca_passo) {
          setShowMarcaPasso(true)
          const mList =
            selectedSpec.marca_passo_list?.map(m => ({ label: m, value: m })) ||
            []
          setMarcaPassoList(mList)

          const savedM = mList.find(item => item.value === dataSaved.tipo_marca)
          if (savedM) setMarcaPassoOption(savedM)
        }
      }
    }

    if (dataSaved?.vacancy_type) {
      const vType = optionsVacancyTypeList.find(
        v => v.value === dataSaved.vacancy_type
      )
      if (vType) setVacancyTypeOption(vType)
    }
  }, [specialityList, dataSaved])

  return (
    <section
      className="mt-8 flex w-full flex-col xl:mt-0"
      aria-labelledby={`${id}-title`}
    >
      <header className="flex flex-col gap-y-5 xl:hidden">
        <div className="flex flex-col gap-y-1">
          <span
            className="text-[1rem] font-normal text-[#727070]"
            aria-hidden="true"
          >
            Passo 3
          </span>
          <h2
            id={`${id}-title`}
            className="text-[1.2rem] font-semibold text-[#727070]"
          >
            Dados Pré Agendamento
          </h2>
        </div>
      </header>

      <div className="mt-4 xl:mt-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-2">
              <label
                className="text-[1rem] font-medium text-[#262626]"
                htmlFor={`${id}-doctor`}
              >
                Nome do médico<span className="text-[#FD0003]">*</span>
              </label>
              <input
                {...register(objFields.doctor_name)}
                id={`${id}-doctor`}
                className={getFieldClass('doctor_name')}
                placeholder="Nome Completo"
              />
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.doctor_name?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                className="text-[1rem] font-medium text-[#262626]"
                htmlFor={`${id}-vacancy`}
              >
                Tipo Vaga<span className="text-[#FD0003]">*</span>
              </label>
              <Select
                inputId={`${id}-vacancy`}
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
              type="file"
              id={`${id}-file-input`}
              className="hidden"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={e => {
                const files = e.target.files
                if (files && files.length > 0) {
                  setValue('imagem_pedido', files, {
                    shouldValidate: true,
                    shouldDirty: true
                  })
                }
              }}
            />

            {vacancyTypeOption?.value === 'Encaixe' && (
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  Comprovante de Encaixe{' '}
                  <span className="text-[#FD0003]">*</span>
                </label>
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById(`${id}-file-input`)?.click()
                  }
                  aria-controls={`${id}-file-input`}
                  className={uploadBoxClass}
                >
                  <div className="flex flex-col items-center gap-y-2 text-center">
                    {!hasFile ? (
                      <>
                        <MdOutlineFileUpload aria-hidden="true" size={50} />
                        <p>Enviar comprovante</p>
                      </>
                    ) : (
                      <>
                        <IoMdCheckmarkCircleOutline
                          color="#20A36C"
                          size={50}
                          aria-hidden="true"
                        />
                        <p className="font-medium text-[#20A36C]">
                          Arquivo anexado: {files[0]?.name}
                        </p>
                      </>
                    )}
                    <div className="rounded-[5px] bg-black p-2 text-[0.8rem] text-white">
                      {hasFile
                        ? 'Clique para substituir'
                        : 'Limite 10MB (PDF, PNG, JPG)'}
                    </div>
                  </div>
                </button>
                {/* Mensagem de Erro */}
                {errors.imagem_pedido && (
                  <span
                    role="alert"
                    className="text-[14px] font-semibold text-[#FD0003]"
                  >
                    {errors.imagem_pedido.message}
                  </span>
                )}
              </div>
            )}

            <div className="flex flex-col gap-y-2">
              <label
                htmlFor={`${id}-speciality`}
                className="text-[1rem] font-medium text-[#262626]"
              >
                Especialidade <span className="text-[#FD0003]">*</span>
              </label>
              <Controller
                name="speciality"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    inputId={`${id}-speciality`}
                    options={specialtyOptions}
                    value={specialtyOptions.find(o => o.value === field.value)}
                    onChange={onChangeSpeciality}
                    styles={getSelectStyles('speciality')}
                    placeholder="Selecione uma especialidade"
                  />
                )}
              />
              {errors.speciality && (
                <span
                  id={`${id}-speciality-error`}
                  role="alert"
                  className="text-[16px] font-semibold text-[#FD0003]"
                >
                  {errors.speciality.message}
                </span>
              )}
            </div>

            {showMarcaPasso && (
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-medium text-[#262626]">
                  Marca passo<span className="text-[#FD0003]">*</span>
                </label>
                <Select
                  // isLoading={loading_specialities}
                  placeholder="Selecione a nova modalidade"
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
                <label className="text-[1rem] font-medium text-[#262626]">
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

            <fieldset className="flex flex-col gap-y-3 border-none p-0">
              <legend className="mb-2 text-[1rem] font-medium text-[#262626]">
                Você prefere a confirmação do agendamento por qual meio?
              </legend>
              <div className="flex flex-col gap-y-3 xl:flex-row xl:gap-x-10">
                {[
                  {
                    id: 'cel',
                    label: 'Celular',
                    val: confirmScheduleInObj.cel_phone
                  },
                  {
                    id: 'mail',
                    label: 'E-mail',
                    val: confirmScheduleInObj.email
                  }
                ].map(option => (
                  <label
                    key={option.id}
                    className="flex cursor-pointer items-center gap-x-3 rounded-lg p-1 outline-none"
                  >
                    <input
                      type="radio"
                      name="type_confirm"
                      value={option.val}
                      checked={confirmScheduleIn === option.val}
                      onChange={() => handleChangeConfirmSchedule(option.val)}
                      className="sr-only"
                    />
                    <div
                      aria-hidden="true"
                      className={`flex h-7.5 w-7.5 items-center justify-center rounded-full border-2 border-gray-300 ${confirmScheduleIn === option.val ? 'bg-[#FD0003]' : 'bg-[#D9D9D9]'}`}
                    />

                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.type_confirm && (
                <span
                  id={`${id}-type_confirm-error`}
                  role="alert"
                  className="text-[16px] font-semibold text-[#FD0003]"
                >
                  {errors.type_confirm.message}
                </span>
              )}
            </fieldset>
          </div>

          <div className="mt-12 flex w-full flex-row justify-end gap-x-4">
            {currentStep !== 'first' && (
              <button
                onClick={handleBackStep}
                type="button"
                className="h-12.25 w-55.75 rounded-full border border-[#262626] px-6 text-[#262626] hover:bg-[#262626]/10"
              >
                Voltar
              </button>
            )}
            <button
              type="submit"
              className="rcursor-pointer h-12.25 w-55.75 rounded-full bg-[#FD0003] px-6 text-white transition-opacity hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-[#FD0003] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
