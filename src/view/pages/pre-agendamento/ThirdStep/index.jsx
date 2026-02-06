'use client'

const MAX_FILE_SIZE = 1024

const validFileExtensions = ['jpg', 'png', 'pdf', 'jpeg']

function isValidFileType(fileName) {
  return fileName && validFileExtensions.indexOf(fileName.split('.').pop()) > -1
}

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MdOutlineFileUpload } from 'react-icons/md'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

import {
  changeScheduleStep,
  saveThirdStepData
} from '~/app/pre-agendamento/store'
import { colourStyles } from '~/utils/select'

import { fetchDataMedicalSpecialities } from '~/app/pre-agendamento/store'

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
  imagem_pedido: 'imagem_pedido'
}

const schema = yup.object({
  vacancy_type: yup.string().required('Campo obrigatório'),
  doctor_name: yup.string(),
  speciality: yup.string().required('Campo obrigatório'),
  type_confirm: yup.string().required('Campo obrigatório'),
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
    register,
    handleSubmit,
    formState: { errors },
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

  function handleChangeConfirmSchedule(value) {
    setConfirmScheduleIn(value)
    setValue('type_confirm', value)
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
    setValue('tipo_marca', '')
    setMarcaPassoOption({})
    setValue('speciality', e.value)

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
                Nome do médico
              </label>
              <input
                {...register(objFields.doctor_name)}
                className="h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]"
                placeholder="Nome Completo"
              />
              <span className="text-[#ff5d5d]">
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
                styles={colourStyles}
                onChange={onChangeVacancyType}
              />
              <span className="text-[#ff5d5d]">
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
              <>
                {files?.length <= 0 ? (
                  <div
                    onClick={handleOpenFile}
                    className="group flex w-full cursor-pointer flex-col items-center justify-center rounded-[12px] border-[1px] border-[#FD0003] bg-[#ffe1e1] py-[1.5rem] duration-200 ease-in-out hover:bg-[#ffbfbf]"
                  >
                    <div className="flex flex-col items-center gap-y-2 text-center">
                      <MdOutlineFileUpload color="#000" size={50} />
                      <p>Enviar comprovante</p>
                      <div className="rounded-[5px] bg-black p-[0.5rem] text-[0.8rem] font-[400] text-white">
                        <p>Limite 10MB, arquivos .pdf, .png, .jpeg, .jpg</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={handleOpenFile}
                    className="group flex w-full cursor-pointer flex-col items-center justify-center rounded-[12px] border-[1px] border-[#FD0003] bg-[#ffe1e1] py-[1.5rem] duration-200 ease-in-out hover:bg-[#ffbfbf]"
                  >
                    <div className="flex flex-col items-center gap-y-2 text-center">
                      <IoMdCheckmarkCircleOutline color="#000" size={50} />
                      <p>Arquivo anexado</p>
                      <div className="rounded-[5px] bg-black p-[0.5rem] text-[0.8rem] font-[400] text-white">
                        <p>Click para subistituir</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            {/* <div className='grid grid-cols-3 gap-x-5'>
                            <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>Data da ultima consulta <span className='text-[#FD0003]'>*</span></label>
                                <input {...register(objFields.date_last_consult)} type="date" className='h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]' placeholder='' />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>Data da alta internação <span className='text-[#FD0003]'>*</span></label>
                                <input {...register(objFields.date_last_hospitalization)} type="date" className='h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]' placeholder='' />
                            </div>
                        </div> */}
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
                styles={colourStyles}
                onChange={onChangeSpeciality}
              />
              <span className="text-[#ff5d5d]">
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
                  styles={colourStyles}
                  onChange={onChangeMarcaPasso}
                />
                <span className="text-[#ff5d5d]">
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
                  styles={colourStyles}
                  onChange={onChangeNewSpeciality}
                />
                <span className="text-[#ff5d5d]">
                  {errors?.new_speciality?.message}
                </span>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-[500] text-[#262626]">
                Você prefere a confirmação do agendamento por qual meio?
              </label>
              <div className="flex flex-col items-center gap-y-3 xl:flex-row xl:gap-x-3 xl:gap-y-0">
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
                {/* <div onClick={() => handleChangeConfirmSchedule(confirmScheduleInObj.tel_phone)} className='flex flex-row items-center gap-x-3 cursor-pointer'>
                                    <div className={`h-[30px] w-[30px] ${confirmScheduleIn == confirmScheduleInObj.tel_phone ? 'bg-[#262626]' : 'bg-[#D9D9D9]'} rounded-full`}></div>
                                    <span>Telefone Fixo</span>
                                </div> */}
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
              <span className="text-[#ff5d5d]">
                {errors?.type_confirm?.message}
              </span>
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
