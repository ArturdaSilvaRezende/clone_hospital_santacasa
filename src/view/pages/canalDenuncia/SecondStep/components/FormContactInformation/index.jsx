'use client'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  changeReportStep,
  saveSecondStepData
} from '~/app/canal-de-denuncia/store'

import { IMaskInput } from 'react-imask'
import { IoIosArrowBack } from 'react-icons/io'

const optionsSectorActuationList = [
  { value: 'ALMOXARIFADO DE MATERIAIS', label: 'ALMOXARIFADO DE MATERIAIS' },
  { value: 'AMBULATORIO-SUS', label: 'AMBULATORIO-SUS' },
  { value: 'ARQUITETURA E ENGENHARIA', label: 'ARQUITETURA E ENGENHARIA' },
  { value: 'BANCO DE SANGUE', label: 'BANCO DE SANGUE' },
  { value: 'CENTRAL DE MAQUEIRO', label: 'CENTRAL DE MAQUEIRO' },
  { value: 'CENTRO CIRÚRGICO', label: 'CENTRO CIRÚRGICO' },
  { value: 'CENTRO DE DIAGNOSE', label: 'CENTRO DE DIAGNOSE' },
  { value: 'CENTRO MÉDICO', label: 'CENTRO MÉDICO' },
  {
    value: 'CME - CENTRAL MATERIAL ESTERILIZAÇÃO',
    label: 'CME - CENTRAL MATERIAL ESTERILIZAÇÃO'
  },
  { value: 'COLETA', label: 'COLETA' },
  { value: 'COSTURA', label: 'COSTURA' },
  { value: 'CUIDADOS PALIATIVOS', label: 'CUIDADOS PALIATIVOS' },
  { value: 'FARMÁCIA E MANIPULAÇÃO', label: 'FARMÁCIA E MANIPULAÇÃO' },
  { value: 'FATURAMENTO', label: 'FATURAMENTO' },
  { value: 'FINANCEIRO', label: 'FINANCEIRO' },
  { value: 'FISIOTERAPIA', label: 'FISIOTERAPIA' },
  { value: 'FONOAUDIOLOGIA', label: 'FONOAUDIOLOGIA' },
  { value: 'GERÊNCIA ADM FINANCEIRA', label: 'GERÊNCIA ADM FINANCEIRA' },
  { value: 'HEMODIÁLISE', label: 'HEMODIÁLISE' },
  { value: 'HEMODINÂMICA', label: 'HEMODINÂMICA' },
  { value: 'LAVANDERIA', label: 'LAVANDERIA' },
  { value: 'LIMPEZA E HIGIENIZAÇÃO', label: 'LIMPEZA E HIGIENIZAÇÃO' },
  { value: 'MANUTENÇÃO E REPAROS', label: 'MANUTENÇÃO E REPAROS' },
  {
    value: 'NÚCLEO DE REGULAÇÃO INTERNA - NIR',
    label: 'NÚCLEO DE REGULAÇÃO INTERNA - NIR'
  },
  { value: 'NUTRIÇÃO CLÍNICA', label: 'NUTRIÇÃO CLÍNICA' },
  { value: 'OUVIDORIA', label: 'OUVIDORIA' },
  { value: 'PATRIMÔNIO', label: 'PATRIMÔNIO' },
  { value: 'POSTOS DE ENFERMAGEM', label: 'POSTOS DE ENFERMAGEM' },
  { value: 'PSICOLOGIA HOSPITALAR', label: 'PSICOLOGIA HOSPITALAR' },
  { value: 'QUIMIOTERAPIA', label: 'QUIMIOTERAPIA' },
  { value: 'RAIO-X', label: 'RAIO-X' },
  {
    value: 'RECEPÇÃO INTERNAÇÃO-CONVÊNIO/PARTICULAR',
    label: 'RECEPÇÃO INTERNAÇÃO-CONVÊNIO/PARTICULAR'
  },
  { value: 'RECEPÇÃO INTERNAÇÃO-SUS', label: 'RECEPÇÃO INTERNAÇÃO-SUS' },
  { value: 'RECURSOS HUMANOS', label: 'RECURSOS HUMANOS' },
  {
    value: 'SERVIÇO DE CONTROLE DE INFECCAO HOSPITALAR',
    label: 'SERVIÇO DE CONTROLE DE INFECCAO HOSPITALAR'
  },
  { value: 'SERVIÇO SOCIAL', label: 'SERVIÇO SOCIAL' },
  {
    value: 'SETOR DE NUTRIÇÃO E DIETÉTICA',
    label: 'SETOR DE NUTRIÇÃO E DIETÉTICA'
  },
  { value: 'SUPERINTENDÊNCIA', label: 'SUPERINTENDÊNCIA' },
  { value: 'SUPRIMENTOS', label: 'SUPRIMENTOS' },
  { value: 'TECNOLOGIA DA INFORMAÇÃO', label: 'TECNOLOGIA DA INFORMAÇÃO' },
  { value: 'TRANSPORTE', label: 'TRANSPORTE' },
  {
    value: 'UTI - UNIDADE DE TERAPIA INTENSIVA',
    label: 'UTI - UNIDADE DE TERAPIA INTENSIVA'
  },
  { value: 'VOLUNTARIADO', label: 'VOLUNTARIADO' }
]

const optionsWorkBondList = [
  { value: 'Autônomo', label: 'Autônomo' },
  { value: 'Celetista', label: 'Celetista' },
  { value: 'Estagiário', label: 'Estagiário' },
  { value: 'Fornecedor', label: 'Fornecedor' },
  { value: 'Jovem aprendiz', label: 'Jovem aprendiz' },
  { value: 'Residente', label: 'Residente' },
  { value: 'Terceirizado', label: 'Terceirizado' },
  { value: 'Voluntário', label: 'Voluntário' }
]

const objFields = {
  fullname: 'fullname',
  email: 'email',
  tel_phone: 'tel_phone',
  sector_actuation: 'sector_actuation',
  work_bond: 'work_bond'
}

const schema = yup.object({
  fullname: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
  tel_phone: yup.string().ensure().required('Telefone é obrigatório'),
  sector_actuation: yup.string().required('Campo obrigatório'),
  work_bond: yup.string().required('Campo obrigatório')
})

export default function FormContactInformation({ setCurrentTab }) {
  const { current_step: currentStep, second_step_data: dataSaved } =
    useSelector(store => store.report)
  // const genderSavedOption = optionsPeopleGenderList?.find(item => item.value == dataSaved?.gender)
  // const [optionWorkBond, setOptionWorkBond] = useState(null)
  // const [optionSectorActuation, setOptionSectorActuation] = useState(null)

  const dispatch = useDispatch()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: dataSaved,
    mode: 'onChange'
  })

  const getFieldClass = name => {
    const baseClass =
      'h-[46px] w-full rounded-md hover:border-[#7D7D7D] border px-4 py-3 font-normal text-[#262626] transition-all outline-none placeholder:text-[#6C7C92] placeholder:text-[12px] placeholder:font-normal focus:outline-none'
    if (errors[name])
      return `${baseClass} border-[#FD0003] text-[#FD0003] placeholder:text-[#FD0003]`
    if (dirtyFields[name]) return `${baseClass} border-[#20A36C] text-[#262626]`
    return `${baseClass} border-[#D3DAE4] text-[#262626]`
  }

  const getSelectStyles = name => ({
    control: base => ({
      ...base,
      backgroundColor: 'transparent',
      fontSize: '14px',
      padding: '0 12px',
      borderColor: errors[name]
        ? '#FD0003'
        : dirtyFields[name]
          ? '#20A36C'
          : '#E5E7EB',
      borderRadius: '8px',
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
      fullname: data?.fullname,
      email: data?.email,
      tel_phone: data?.tel_phone?.replace(/\D/g, '') || '',
      work_bond: data?.work_bond,
      sector_actuation: data?.sector_actuation
    }

    dispatch(saveSecondStepData(objData))
    setCurrentTab('Informações da Denúncia')
  }

  function handleBackStep() {
    // dispatch(saveSecondStepData(objData))
    dispatch(changeReportStep('first'))
  }

  // function onChangeWorkBond(e) {
  //   setOptionWorkBond(e)
  //   setValue('work_bond', e.value)
  // }

  // function onChangeSectorActuation(e) {
  //   setOptionSectorActuation(e)
  //   setValue('sector_actuation', e.value)
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-5 max-sm:gap-y-1 mb-10 md:hidden">
        <span className="text-[#A3A3A3] text-[12px] font-medium">Etapa 1</span>

        <p className="text-[16px] font-bold text-[#727070]">
          Informações de Contato
        </p>
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            Nome Completo<span className="ml-1 text-[#FD0003]">*</span>
          </label>
          <input
            {...register(objFields.fullname)}
            className={getFieldClass('fullname')}
            placeholder="Escrevendo nome do Paciente"
          />
          <span className="text-[14px] text-[#FD0003]">
            {errors?.fullname?.message}
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            E-mail<span className="ml-1 text-[#FD0003]">*</span>
          </label>
          <input
            {...register(objFields.email)}
            className={getFieldClass('email')}
            placeholder="seuemail@gmail.com"
          />
          <span className="text-[14px] text-[#FD0003]">
            {errors?.email?.message}
          </span>
        </div>
        <div className="flex w-full flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            Telefone<span className="ml-1 text-[#FD0003]">*</span>
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
            <span className="text-[14px] text-[#FD0003]">
              {errors.tel_phone.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            Setor Atuação<span className="ml-1 text-[#FD0003]">*</span>
          </label>
          <Controller
            name="sector_actuation"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={optionsSectorActuationList}
                placeholder="Selecione"
                styles={getSelectStyles('sector_actuation')}
                value={optionsSectorActuationList.find(
                  c => c.value === field.value
                )}
                onChange={val => field.onChange(val.value)}
              />
            )}
          />
          {errors?.sector_actuation && (
            <span className="text-[14px] text-[#FD0003]">
              {errors?.sector_actuation?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-[14px] font-bold text-black">
            Tipo de Vinculo<span className="ml-1 text-[#FD0003]">*</span>
          </label>
          <Controller
            name="work_bond"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={optionsWorkBondList}
                placeholder="Selecione"
                styles={getSelectStyles('work_bond')}
                value={optionsWorkBondList.find(c => c.value === field.value)}
                onChange={val => field.onChange(val.value)}
              />
            )}
          />
          {errors?.work_bond && (
            <span className="text-[14px] text-[#FD0003]">
              {errors?.work_bond?.message}
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
          Avançar
        </button>
      </div>
    </form>
  )
}
