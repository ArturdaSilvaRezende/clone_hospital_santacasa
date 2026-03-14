'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useFieldArray, Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMaskInput } from 'react-imask'
import { SyncLoader } from 'react-spinners'
import * as yup from 'yup'

import {
  changeReportStep,
  fetchCreateReport,
  saveThirdStepData
} from '~/app/canal-de-denuncia/store'

import { IoIosArrowBack, IoMdCloseCircleOutline } from 'react-icons/io'
import { MdAddCircleOutline } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'

const MAX_FILE_SIZE = 1024

const validFileExtensions = ['jpg', 'png', 'pdf', 'jpeg']

function isValidFileType(fileName) {
  return fileName && validFileExtensions.indexOf(fileName.split('.').pop()) > -1
}

const objFields = {
  report: 'report',
  local: 'local',
  date_occurred: 'date_occurred',
  knowledge_about: 'knowledge_about',
  people_involved: 'people_involved',
  responsible: 'responsible',
  witnesses: 'witnesses'
}

const schema = yup.object({
  report: yup.string().required('Campo obrigatório'),
  local: yup.string().required('Campo obrigatório'),
  date_occurred: yup.string().required('Campo obrigatório'),
  knowledge_about: yup.string().required('Campo obrigatório'),
  people_involved: yup.string().required('Campo obrigatório'),
  responsible: yup.string(),
  // witnesses: yup.string(),
  attachment: yup
    .mixed()
    .nullable()
    .test('is-valid-type', 'Tipo de arquivo inválido!', files => {
      if (!files || files.length === 0) return true

      const file = files[0]
      return isValidFileType(file.name.toLowerCase())
    }),
  witnesses: yup.array().of(
    yup.object({
      name: yup.string().required('Nome obrigatório'),
      phone: yup.string().required('Telefone obrigatório')
    })
  )
})

export function FormComplaintInformation({ setCurrentTab }) {
  const {
    report_type: reportType,
    current_step: currentStep,
    second_step_data: secondStepData,
    success_registred,
    third_step_data: dataSaved,
    create_report_status
  } = useSelector(store => store.report)

  const dispatch = useDispatch()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    setValue,
    watch
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: dataSaved || { witnesses: [] },
    mode: 'onChange'
  })

  const attachmentFile = watch('attachment')

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'witnesses'
  })

  const getFieldClass = name => {
    const baseClass =
      'h-[46px] w-full rounded-md border px-4 py-3 font-normal text-[#262626] transition-all outline-none placeholder:text-[#6C7C92] placeholder:text-[12px] placeholder:font-normal focus:outline-none'

    const getValueByPath = (obj, path) => {
      return path
        .split(/[.[\]]+/)
        .filter(Boolean)
        .reduce((prev, curr) => prev?.[curr], obj)
    }

    const fieldError = getValueByPath(errors, name)
    const fieldDirty = getValueByPath(dirtyFields, name)

    const fieldValue = getValueByPath(control._formValues, name)

    if (fieldError) {
      return `${baseClass} border-[#FD0003] text-[#FD0003] placeholder:text-[#FD0003]`
    }

    if (fieldDirty && fieldValue && String(fieldValue).trim() !== '') {
      return `${baseClass} border-[#20A36C] text-[#262626]`
    }

    return `${baseClass} border-[#D3DAE4] text-[#262626]`
  }

  const onSubmit = data => {
    if (create_report_status == 'loading') return

    const { attachment, ...restOfData } = data
    dispatch(saveThirdStepData(restOfData))

    const formData = new FormData()

    if (reportType !== 'anonymous') {
      formData.append('fullname', secondStepData?.fullname)
      formData.append('email', secondStepData?.email)
      formData.append('tel_phone', secondStepData?.tel_phone)
      formData.append('sector_actuation', secondStepData?.sector_actuation)
      formData.append('work_bond', secondStepData?.work_bond)
    }

    formData.append('report', data?.report)
    formData.append('local', data?.local)
    formData.append('date_occurred', data?.date_occurred)
    formData.append('knowledge_about', data?.knowledge_about)
    formData.append('people_involved', data?.people_involved)
    formData.append('responsible', data?.responsible)
    formData.append('witnesses', JSON.stringify(data?.witnesses))
    formData.append('is_anonymous', reportType == 'anonymous')

    if (data?.attachment?.length > 0) {
      formData.append('attachment', data?.attachment[0])
    }

    dispatch(
      fetchCreateReport({
        content: formData
      })
    )
  }

  function handleBackStep() {
    setCurrentTab('Informações de Contato')
  }

  const handleOpenFile = () => {
    document.querySelector('.input-file').click()
  }

  useEffect(() => {
    if (success_registred) {
      dispatch(changeReportStep('final'))
    }
  }, [success_registred])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-10 flex flex-col gap-y-5 max-sm:gap-y-1 md:hidden">
        <span className="text-[12px] font-medium text-[#A3A3A3]">Etapa 2</span>

        <p className="text-[16px] font-bold text-[#727070]">
          Informações de Contato
        </p>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            Relato sobre o ocorrido
            <span className="ml-1 text-[#FD0003]">*</span>
          </label>
          <textarea
            {...register(objFields.report)}
            className={`min-h-20.5 ${getFieldClass('report')}`}
            placeholder="Fale sobre os detalhes do ocorrido"
          />
          <span className="text-[#FD0003]">{errors?.report?.message}</span>
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            Local da Ocorrência <span className="ml-1 text-[#FD0003]">*</span>
          </label>
          <input
            {...register(objFields.local)}
            className={getFieldClass('local')}
            placeholder="Informe o local do ocorrido"
          />
          <span className="text-[#FD0003]">{errors?.local?.message}</span>
        </div>

        <div className="flex w-full flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            Data do Ocorrido<span className="ml-1 text-[#FD0003]">*</span>
          </label>
          <Controller
            name="date_occurred"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <IMaskInput
                  {...field}
                  mask="00/00/0000"
                  className={getFieldClass('date_occurred')}
                  placeholder="00/00/0000"
                  onAccept={value => field.onChange(value)}
                />
                <Image
                  src="/icons/calendar-month-icon-gray.svg"
                  alt="Data do Ocorrido"
                  height={25}
                  width={25}
                  className="absolute top-1/2 right-3 -translate-y-1/2 transform"
                />
              </div>
            )}
          />
          {errors.date_occurred && (
            <span className="text-[#FD0003]">
              {errors.date_occurred.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            Como você tomou conhecimento do assunto?
            <span className="ml-1 text-[#FD0003]">*</span>
          </label>
          <input
            {...register(objFields.knowledge_about)}
            className={getFieldClass('knowledge_about')}
            placeholder="Informe como você tomou conhecimento do assunto"
          />
          <span className="text-[#FD0003]">
            {errors?.knowledge_about?.message}
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            Pessoas Envolvidas<span className="ml-1 text-[#FD0003]">*</span>
          </label>
          <input
            {...register(objFields.people_involved)}
            className={getFieldClass('people_involved')}
            placeholder="Informe o nome da Testemunha"
          />
          <span className="text-[#FD0003]">
            {errors?.people_involved?.message}
          </span>
        </div>

        <div className="flex flex-col gap-y-4">
          <label className="text-[14px] font-bold text-black">
            Testemunhas
            <span className="ml-2 text-[14px] font-normal text-[#727070]">
              ( Opcional )
            </span>
          </label>

          {fields.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-row items-center gap-x-3 max-sm:flex-col"
            >
              <div className="grid flex-1 grid-cols-1 gap-4 max-sm:order-2 max-sm:w-full md:grid-cols-2">
                <div className="flex flex-col">
                  <input
                    {...register(`witnesses.${index}.name`)}
                    placeholder="Informe o nome da Testemunha"
                    className={`max-sm:col-span-3 ${getFieldClass(`witnesses.${index}.name`)}`}
                  />
                  <span className="text-[10px] text-[#FD0003]">
                    {errors?.witnesses?.[index]?.name?.message}
                  </span>
                </div>

                <div className="flex flex-col">
                  <Controller
                    name={`witnesses.${index}.phone`}
                    control={control}
                    render={({ field }) => (
                      <IMaskInput
                        {...field}
                        mask="(00) 00000-0000"
                        className={getFieldClass(`witnesses.${index}.phone`)}
                        placeholder="Informe o telefone da testemunha"
                        onAccept={value => field.onChange(value)}
                      />
                    )}
                  />
                  <span className="text-[10px] text-[#FD0003]">
                    {errors?.witnesses?.[index]?.phone?.message}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between max-sm:w-full md:block">
                <span className="text-[14px] font-normal text-[#54585D] md:hidden">
                  Testemunha {index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="flex h-11.5 items-center justify-center rounded-md border border-[#D3DAE4] px-3 text-[#CE4747] hover:bg-gray-100 hover:text-gray-700 max-sm:order-1 max-sm:mb-5 max-sm:gap-2"
                >
                  <span className="text-black md:hidden">Remover</span>
                  <IoMdCloseCircleOutline size={24} />
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ name: '', phone: '' })}
            className="flex w-full items-center justify-between rounded-md bg-[#F2F2F2] px-4 py-4 transition-colors hover:bg-[#E8E8E8] max-sm:gap-3 max-sm:text-left"
          >
            <span className="text-[14px] font-medium text-[#54585D] max-sm:order-2 max-sm:text-[12px]">
              Clique aqui para adicionar uma nova testemunha
            </span>
            <MdAddCircleOutline size={24} color="#6C7C92" />
          </button>
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black md:w-[80%] lg:w-full">
            Há algum responsável ciente sobre o assunto? Se sim, informe o nome
            do responsável
            <span className="ml-2 text-[14px] font-normal text-[#727070]">
              ( Opcional )
            </span>
          </label>
          <input
            {...register(objFields.responsible)}
            className={getFieldClass('responsible')}
            placeholder="Informe o responsável, caso tenha"
          />
          <span className="text-[#FD0003]">{errors?.responsible?.message}</span>
        </div>

        {/* <div className="flex flex-col gap-y-2">
              <label className="text-[14px] font-bold text-black">
                Testemunhas
                <span className="ml-2 text-[14px] font-normal text-[#727070]">
                  ( Opcional )
                </span>
              </label>
              <input
                {...register(objFields.witnesses)}
                className={getFieldClass('witnesses')}
                placeholder="Informe o nome da Testemunha"
              />
              <span className="text-[#FD0003]">
                {errors?.witnesses?.message}
              </span>
            </div> */}

        <input
          type="file"
          className="input-file"
          hidden
          onChange={e => {
            const files = e.target.files
            if (files && files.length > 0) {
              setValue('attachment', files, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true
              })
            }
          }}
        />

        <div className="flex flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            Deseja anexar um ou mais documentos à sua denúncia?
          </label>

          <div
            onClick={handleOpenFile}
            className={`mt-4 w-full cursor-pointer rounded-md border-2 border-dashed px-4 py-6 transition-all ${
              attachmentFile && attachmentFile.length > 0
                ? 'border-[#20A36C] bg-[#F0FDF4]'
                : 'border-[#D3DAE4]'
            }`}
          >
            <div className="flex flex-col items-center gap-y-2.5">
              {attachmentFile && attachmentFile.length > 0 ? (
                <FaCheck size={22} color="#20A36C" />
              ) : (
                <Image
                  width={22}
                  height={22}
                  alt="Upload"
                  src="/icons/cloud-upload.svg"
                />
              )}

              <div className="text-center">
                {attachmentFile && attachmentFile.length > 0 ? (
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] font-bold text-[#20A36C]">
                      Arquivo selecionado:
                    </span>
                    <span className="text-[12px] font-medium break-all text-[#262626]">
                      {attachmentFile[0]?.name}
                    </span>
                    <button
                      type="button"
                      className="mt-2 text-[11px] text-[#FD0003] underline"
                      onClick={e => {
                        e.stopPropagation()
                        setValue('attachment', null)
                      }}
                    >
                      Remover arquivo
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="text-[12px] font-bold text-black">
                      Arraste ou Clique para Enviar
                      <span className="ml-2 font-normal text-[#727070]">
                        {' '}
                        ( Opcional ){' '}
                      </span>
                    </span>
                    <br />
                    <span className="text-[12px] font-normal text-[#6C7C92]">
                      Envie por aqui imagens referente a denúncia
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {errors.attachment && (
            <span className="text-[12px] text-[#FD0003]">
              {errors.attachment.message}
            </span>
          )}
        </div>
      </div>

      <div className="mt-12 flex w-full flex-row justify-between gap-4 max-sm:flex-col">
        {currentStep !== 'first' && (
          <button
            onClick={handleBackStep}
            className="flex w-41.75 items-center justify-center gap-2 rounded-full border border-[#CBCBCB] py-2.75 text-[#171425] hover:border-[#171425] max-sm:order-2 max-sm:w-full"
          >
            <IoIosArrowBack />
            <span>Voltar</span>
          </button>
        )}
        <button
          type="submit"
          className="flex w-41.75 items-center justify-center gap-2 rounded-full bg-[#262626] py-2.75 text-white hover:bg-[#20A36C] max-sm:w-full"
        >
          <SyncLoader
            color="#E6E6E6"
            loading={create_report_status == 'loading'}
            size={3}
          />
          {create_report_status == 'loading' ? (
            'Enviando'
          ) : (
            <span>Confirmar</span>
          )}
        </button>
      </div>
    </form>
  )
}
