'use client'

import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Select from 'react-select'

import { updateContent } from '~/app/doacao/store'

const objFields = {
  nome: 'nome',
  document: 'document',
  celular: 'celular',
  telefone: 'telefone',
  email: 'email',
  informacoes: 'informacoes'
}

const defaultValues = {
  nome: '',
  document: '',
  celular: '',
  email: '',
  informacoes: ''
}

const optionsRecurrencePeriodList = [
  { value: '6 meses', label: '6 Meses' },
  { value: '12 meses', label: '12 Meses' }
]

const schema = yup.object({
  nome: yup.string().required('Campo obrigatório'),
  document: yup
    .string()
    .required('CPF é obrigatório')
    .min(11, 'CPF incompleto'),
  celular: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  informacoes: yup.string().required('Campo obrigatório')
})

export default function PersonalInfoForm({
  setActiveStep = () => {},
  steps = [],
  activeStep = 0
}) {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const handleNextStep = () => {
    setActiveStep(Math.min(steps.length - 1, activeStep + 1))
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  })

  const getFieldClass = name => {
    const baseClass =
      'h-[46px] w-full rounded-xl border p-3 text-gray-600 outline-none transition-all'

    if (errors[name]) {
      return `${baseClass} border-[#FD0003] text-[#FD0003] placeholder:text-[#FD0003]`
    }

    if (dirtyFields[name]) {
      return `${baseClass} border-[#20A36C] text-[#262626]`
    }

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

  const onSubmit = async data => {
    const objData = {
      nome: data.nome,
      document: data.document.replace(/\D/g, ''),
      celular: data.celular.replace(/\D/g, ''),
      email: data.email,
      informacoes: data.informacoes
    }

    if (isLoading) return
    try {
      setIsLoading(true)

      dispatch(updateContent(objData))
      handleNextStep()
    } catch (err) {
      console.log(err.response.data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-176 max-sm:w-full md:w-full">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">
        Informações pessoais
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-[1rem] font-medium text-[#262626]">
              CPF <span className="text-[#FF0909]">*</span>
            </label>
            <Controller
              name="document"
              control={control}
              render={({ field: { onChange, value, ...fieldRef } }) => (
                <IMaskInput
                  {...fieldRef}
                  mask="000.000.000-00"
                  value={value}
                  className={getFieldClass('document')}
                  placeholder="000.000.000-00"
                  onAccept={val => onChange(val)}
                />
              )}
            />
            {errors.document && (
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors.document.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Nome completo <span className="text-[#FF0909]">*</span>
            </label>
            <input
              type="text"
              placeholder="Insira seu nome completo"
              className={getFieldClass('nome')}
              {...register(objFields.nome)}
            />
            {errors?.nome && (
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.nome?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              E-mail <span className="text-[#FF0909]">*</span>
            </label>
            <input
              type="email"
              placeholder="email@exemplo.com.br"
              className={getFieldClass('email')}
              {...register(objFields.email)}
            />
            {errors?.email && (
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors?.email?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Telefone <span className="text-[#FF0909]">*</span>
            </label>
            <Controller
              name="celular"
              control={control}
              render={({ field }) => (
                <IMaskInput
                  {...field}
                  mask="(00) 00000-0000"
                  className={getFieldClass('celular')}
                  placeholder="DDD+números"
                  onAccept={value => field.onChange(value)}
                />
              )}
            />
            {errors.celular && (
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors.celular.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 md:col-span-1">
            <label className="text-sm font-semibold text-gray-700">
              Período da recorrência <span className="text-[#FF0909]">*</span>
            </label>
            <Controller
              name="recurrencePeriod"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={optionsRecurrencePeriodList}
                  placeholder="Selecione"
                  styles={getSelectStyles('recurrencePeriod')}
                  value={optionsRecurrencePeriodList.find(
                    c => c.value === field.value
                  )}
                  onChange={val => field.onChange(val.value)}
                />
              )}
            />
            {errors.recurrencePeriod && (
              <span className="text-[16px] font-semibold text-[#FD0003]">
                {errors.recurrencePeriod.message}
              </span>
            )}
          </div>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-gray-700 max-sm:text-[12px]">
            Nós adoraríamos poder entrar em contato com você sobre esta e outras
            campanhas.
          </p>
          <label className="flex items-center gap-2 text-sm text-gray-500 max-sm:text-[11px]">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-[#FF0909]"
            />
            Sim, por favor. Desejo receber essas comunicações.
          </label>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-gray-700 max-sm:text-[12px]">
              Deixe sua mensagem
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-500 max-sm:text-[11px]">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 accent-[#FF0909]"
              />
              Quero ser um doador anônimo.
            </label>
          </div>
          <textarea
            {...register(objFields.informacoes)}
            placeholder="Insira sua mensagem."
            rows={4}
            className={`w-full rounded-xl border p-3 text-gray-600 transition-all outline-none ${
              errors.informacoes
                ? 'border-[#FD0003] text-[#FD0003] placeholder:text-[#FD0003]'
                : dirtyFields.informacoes
                  ? 'border-[#20A36C] text-[#262626]'
                  : 'border-[#7D7D7D] text-[#262626] focus:border-gray-400'
            }`}
          />
          {errors.informacoes && (
            <span className="text-[16px] font-semibold text-[#FD0003]">
              {errors.informacoes.message}
            </span>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-500">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-gray-300 accent-[#FF0909]"
          />
          Li e aceito as{' '}
          <span className="cursor-pointer text-[#FD0003] hover:underline">
            Políticas de Privacidade.
          </span>
        </label>

        <button
          type="submit"
          className="group ml-auto flex h-13 w-75 items-center justify-center gap-2 rounded-full bg-[#FF0909] font-bold text-white transition-all hover:bg-red-700"
        >
          <span> Continuar para pagamento</span>

          <span
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <FaArrowRight className="text-lg" />
          </span>
        </button>
      </form>
    </div>
  )
}
