'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMaskInput } from 'react-imask'
import * as yup from 'yup'

import { useSelector, useDispatch } from 'react-redux'
import SyncLoader from 'react-spinners/SyncLoader'
import { fetchDataForgotProtocol } from '~/app/esqueci-protocolo/store'

import ResponseError from '~/components/CustomComponents/ResponseError'
import { SearchProtocol } from '~/components/SearchProtocol'

import { FaRegCopy } from 'react-icons/fa'
import { IoCheckmarkCircle } from 'react-icons/io5'

const objFields = {
  birth_date: 'birth_date',
  cel_phone: 'cel_phone',
  mother_name: 'mother_name'
}

const schema = yup.object({
  birth_date: yup.string().required('Campo obrigatório'),
  cel_phone: yup.string().required('Campo obrigatório'),
  mother_name: yup.string().required('Campo obrigatório')
})

export function Form() {
  const dispatch = useDispatch()
  const [copiedProtocol, setCopiedProtocol] = useState(null)

  const handleCopy = async protocolo => {
    await navigator.clipboard.writeText(protocolo)

    setCopiedProtocol(protocolo)

    setTimeout(() => {
      setCopiedProtocol(null)
    }, 2000)
  }

  const {
    list,
    request_status: requestStatus,
    response_message: responseMessage,
    response_error: responseError
  } = useSelector(store => store.scheduleForgotProtocol)

  const getFieldClass = name => {
    const baseClass =
      'h-11.5 h-[46px] w-full rounded-[10px] border px-4 transition-all outline-none border-[#EDECEC] bg-white font-normal text-[#6D6D6D] placeholder:text-[#6D6D6D] focus:border-gray-300 focus:outline-none'

    if (errors[name])
      return `${baseClass} border-[#FD0003] text-[#FD0003] placeholder:text-[#FD0003]`
    if (dirtyFields[name]) return `${baseClass} border-[#20A36C] text-[#262626]`
    return `${baseClass} border-[#7D7D7D] text-[#262626]`
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const objData = {
      birth_date: data.birth_date,
      cel_phone: data?.cel_phone.replace(/\D/g, ''),
      mother_name: data.mother_name
    }

    dispatch(fetchDataForgotProtocol(objData))
  }

  return (
    <div className="mt-12 flex flex-col items-center  w-full">
      <SearchProtocol />

      <div className="flex flex-col items-center xl:items-start">
        <div className="flex flex-row items-center gap-x-3">
          <h1 className="text-[24px] font-bold xl:text-[1.5rem]">
            Esqueci o Protocolo
          </h1>
        </div>
      </div>
      <form className="mt-7 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-x-5 gap-y-5 xl:flex-row xl:gap-y-0">
            <div className="flex flex-col gap-y-2">
              <label className="text-[1rem] font-medium text-[#262626]">
                Data Nascimento<span className="text-[#FD0003]">*</span>
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
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.birth_date?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
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
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.cel_phone?.message}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-[1rem] font-medium text-[#262626]">
              Nome da mãe <span className="text-[#FD0003]">*</span>
            </label>
            <input
              {...register(objFields.mother_name)}
              className={getFieldClass('mother_name')}
              placeholder="Nome Completo"
            />
            <span className="text-[16px] font-semibold text-[#FD0003]">
              {errors?.mother_name?.message}
            </span>
          </div>
          {responseError && <ResponseError responseMessage={responseMessage} />}
          <div className="flex flex-row items-center justify-end">
            <button
              type="submit"
              className="flex h-11 w-47 flex-row items-center justify-center gap-x-2 rounded-full bg-black px-6 text-white hover:bg-black/70 hover:transition-colors hover:duration-200 hover:ease-in-out"
            >
              <SyncLoader
                color="#E6E6E6"
                loading={requestStatus == 'loading'}
                size={3}
              />
              {requestStatus == 'loading' ? 'Enviando' : <span>Recuperar</span>}
            </button>
          </div>
        </div>
      </form>
      {requestStatus == 'succeeded' && (
        <div className="w-full max-sm:mt-10">
          <div className="flex w-full flex-col items-center xl:items-start">
            <div className="flex flex-row items-center gap-x-3">
              <h1 className="text-[24px] font-bold xl:text-[1.5rem]">
                Todos os protocolos
              </h1>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col gap-y-4">
            {list?.map((item, idx) => (
              <div
                key={idx}
                className="flex h-12.5 w-full flex-row items-center justify-between px-[1.2rem] shadow-md"
              >
                <span>{item.protocolo}</span>
                <div>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.protocolo)}
                    className="transition-all duration-200"
                  >
                    {copiedProtocol === item.protocolo ? (
                      <IoCheckmarkCircle size={22} className="text-[#20A36C]" />
                    ) : (
                      <FaRegCopy size={22} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
