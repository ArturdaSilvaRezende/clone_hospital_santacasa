'use client'

import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { colourStyles } from '~/utils/select'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import SyncLoader from 'react-spinners/SyncLoader'

import apiDonation from '~/services/apiDonation'

import {
  loadCartItems,
  changeMethodPayment,
  addPaymentInfo
} from '~/app/doacao/store'

const defaultEntityType = {
  label: 'Física',
  value: 'Física'
}

const entityTypeOptions = [
  {
    label: 'Física',
    value: 'Física'
  },
  {
    label: 'Jurídica',
    value: 'Jurídica'
  }
]

const objFields = {
  nome: 'nome',
  document: 'document',
  celular: 'celular',
  telefone: 'telefone',
  email: 'email',
  informacoes: 'informacoes'
  // bairro: 'bairro',
  // cidade: 'cidade',
  // pais: 'pais',
  // cep: 'cep',
  // endereco: 'endereco',
  // numero: 'numero',
  // complemento: 'complemento',
  // estado: 'estado',
}

const defaultValues = {
  nome: '',
  document: '',
  celular: '',
  telefone: '',
  email: '',
  informacoes: ''
  // bairro: '',
  // cidade: '',
  // pais: '',
  // cep: '',
  // endereco: '',
  // numero: '',
  // complemento: '',
  // estado: '',
}

const schema = yup.object({
  nome: yup.string().required('Campo obrigatório'),
  document: yup.string().required('Campo obrigatório'),
  celular: yup.string().required('Campo obrigatório'),
  telefone: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  informacoes: yup.string().required('Campo obrigatório')
  // bairro: yup.string(),
  // cidade: yup.string(),
  // pais: yup.string(),
  // cep: yup.string(),
  // endereco: yup.string(),
  // numero: yup.string(),
  // complemento: yup.string(),
  // estado: yup.string(),
})

export function Payment() {
  const dispatch = useDispatch()
  const {
    cart_items: cartItems,
    cart_total_price: cartTotalPrice,
    value_selected: valueSelected,
    method_paymennt: methodPayment
  } = useSelector(store => store.donate)

  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  })
  const [isSuccessSend, setIsSuccessSend] = useState(false)
  const [failSend, setFailSend] = useState({
    show: false,
    msg: ''
  })
  const [entityType, setEntityType] = useState(defaultEntityType)

  function handleChangeMethodPayment(value) {
    dispatch(changeMethodPayment(value))
  }

  function handleChangeEntityType(value) {
    setEntityType(value)
  }

  useEffect(() => {
    dispatch(loadCartItems())
  }, [])

  const onSubmit = async data => {
    const items = [...cartItems, valueSelected]

    const objData = {
      nome: data.nome,
      document: data.document.replace(/\D/g, ''),
      celular: data.celular.replace(/\D/g, ''),
      telefone: data.telefone.replace(/\D/g, ''),
      email: data.email,
      informacoes: data.informacoes,
      forma_pagamento: methodPayment,
      items,
      new_order: true,
      tipo_pessoa: entityType.value,
      generate_password: true
    }

    if (isLoading) return
    try {
      setIsLoading(true)

      const result = await apiDonation.post(`/donate`, objData)

      if (result.data.success && result.status == 200) {
        dispatch(
          addPaymentInfo({
            code_pix: result?.data?.code_pix,
            order_id: result?.data?.order_info?.id,
            method_payment: result?.data?.order_info?.method_payment,
            date: result?.data?.order_info?.date,
            total_price: result?.data?.order_info?.total
          })
        )

        reset(defaultValues)
        setIsSuccessSend(true)

        setFailSend({
          show: false,
          msg: ''
        })

        window.location.href = '/doacao-finalizacao'
      }
    } catch (err) {
      // console.log(err.response.data)
      setFailSend({
        show: true,
        msg: 'Falha ao enviar!'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative mt-[3rem] mb-[5rem] w-[1120px]">
      <div>
        <a className="cursor-pointer text-[#727070]" href="/doacao">
          Doação
        </a>{' '}
        {'>'} <a className="cursor-pointer text-[#000]">Pagamento</a>
      </div>
      <form className="mt-[4rem]" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-[1.4rem] font-[500]">Informações de pagamento</h1>
        <div className="mt-5">
          <div className="flex flex-row gap-x-[4rem]">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Nome<span className="text-red-500">*</span>
                </label>
                <input
                  {...register(objFields.nome)}
                  className="h-[46px] w-full rounded-[5px] border-[1px] border-[#7D7D7D] px-4 text-[16px] text-[#262626] outline-none"
                  placeholder="Nome completo"
                />
                <span className="text-[#ff5d5d]">{errors?.nome?.message}</span>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Tipo de etidade<span className="text-red-500">*</span>
                </label>
                <Select
                  defaultValue={defaultEntityType}
                  onChange={handleChangeEntityType}
                  value={entityType}
                  options={entityTypeOptions}
                  styles={colourStyles}
                />
              </div>
              {/* <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>{(entityType?.value == 'Física') ? 'CPF' : 'CNPJ'}<span className='text-red-500'>*</span></label>
                                <input {...register(objFields.document)} className='rounded-[5px] h-[46px] w-full border-[#7D7D7D] border-[1px] px-4 outline-none text-[#262626] text-[16px]' placeholder='0000000000' />
                                <span className='text-[#ff5d5d]'>{errors?.document?.message}</span>
                            </div> */}
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  {entityType?.value == 'Física' ? 'CPF' : 'CNPJ'}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="CPF"
                  {...register(objFields.document)}
                />
                {/* <InputMask
                  name="CPF"
                  mask={
                    entityType.value == 'Física'
                      ? '999.999.999-99'
                      : '99.999.999/9999-99'
                  }
                  maskChar=""
                  style={{
                    borderRadius: 5,
                    border: '1px solid #7D7D7D',
                    height: 46,
                    paddingLeft: 16,
                    paddingRight: 16,
                    fontSize: 16,
                    color: '#262626',
                    outline: 'none'
                  }}
                  {...register(objFields.document)}
                  // value={content.whatsapp}
                  // onChange={e =>
                  //     setContent(res => ({ ...res, whatsapp: e.target.value }))
                  // }
                /> */}
                <span className="text-[#ff5d5d]">
                  {errors?.document?.message}
                </span>
              </div>
              {/* <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>Rua<span className='text-red-500'>*</span></label>
                                <input {...register(objFields.endereco)} className='rounded-[5px] h-[46px] w-full border-[#7D7D7D] border-[1px] px-4 outline-none text-[#262626] text-[16px]' placeholder='Informe o endereço' />
                                <span className='text-[#ff5d5d]'>{errors?.endereco?.message}</span>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>Numero<span className='text-red-500'>*</span></label>
                                <input {...register(objFields.numero)} className='rounded-[5px] h-[46px] w-full border-[#7D7D7D] border-[1px] px-4 outline-none text-[#262626] text-[16px]' placeholder='Numero da casa' />
                                <span className='text-[#ff5d5d]'>{errors?.numero?.message}</span>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>Bairro<span className='text-red-500'>*</span></label>
                                <input {...register(objFields.bairro)} className='rounded-[5px] h-[46px] w-full border-[#7D7D7D] border-[1px] px-4 outline-none text-[#262626] text-[16px]' placeholder='Informe o bairro' />
                                <span className='text-[#ff5d5d]'>{errors?.bairro?.message}</span>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>Complemento</label>
                                <input {...register(objFields.complemento)} className='rounded-[5px] h-[46px] w-full border-[#7D7D7D] border-[1px] px-4 outline-none text-[#262626] text-[16px]' placeholder='Apartamento, Suite, Sala...' />
                                <span className='text-[#ff5d5d]'>{errors?.complemento?.message}</span>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>País<span className='text-red-500'>*</span></label>
                                <Select options={[]} styles={colourStyles} />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>Estado<span className='text-red-500'>*</span></label>
                                <input {...register(objFields.estado)} className='rounded-[5px] h-[46px] w-full border-[#7D7D7D] border-[1px] px-4 outline-none text-[#262626] text-[16px]' placeholder='Selecione' />
                                <span className='text-[#ff5d5d]'>{errors?.estado?.message}</span>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>Cidade<span className='text-red-500'>*</span></label>
                                <input {...register(objFields.cidade)} className='rounded-[5px] h-[46px] w-full border-[#7D7D7D] border-[1px] px-4 outline-none text-[#262626] text-[16px]' placeholder='Selecione' />
                                <span className='text-[#ff5d5d]'>{errors?.cidade?.message}</span>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='text-[#262626] text-[1rem] font-[500]'>CEP<span className='text-red-500'>*</span></label>
                                <input {...register(objFields.cep)} className='rounded-[5px] h-[46px] w-full border-[#7D7D7D] border-[1px] px-4 outline-none text-[#262626] text-[16px]' placeholder='Selecione' />
                                <span className='text-[#ff5d5d]'>{errors?.cep?.message}</span>
                            </div> */}
              <div className="grid grid-cols-2 gap-x-5">
                <div className="flex flex-col gap-y-2">
                  <label className="text-[1rem] font-[500] text-[#262626]">
                    Celular<span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register(objFields.celular)}
                    className="h-[46px] w-full rounded-[5px] border-[1px] border-[#7D7D7D] px-4 text-[16px] text-[#262626] outline-none"
                    placeholder="DDD + Número"
                  />

                  {/* <InputMask
                    mask={'(99) 99999-9999'}
                    maskChar=""
                    style={{
                      borderRadius: 5,
                      border: '1px solid #7D7D7D',
                      height: 46,
                      paddingLeft: 16,
                      paddingRight: 16,
                      fontSize: 16,
                      color: '#262626',
                      outline: 'none'
                    }}
                    {...register(objFields.celular)}
                  /> */}
                  <span className="text-[#ff5d5d]">
                    {errors?.celular?.message}
                  </span>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className="text-[1rem] font-[500] text-[#262626]">
                    Telefone (Opcional)
                  </label>
                  <input
                    {...register(objFields.telefone)}
                    className="h-[46px] w-full rounded-[5px] border-[1px] border-[#7D7D7D] px-4 text-[16px] text-[#262626] outline-none"
                    placeholder="DDD + Número"
                  />
                  {/* <InputMask
                    mask={'(99) 99999-9999'}
                    maskChar=""
                    style={{
                      borderRadius: 5,
                      border: '1px solid #7D7D7D',
                      height: 46,
                      paddingLeft: 16,
                      paddingRight: 16,
                      fontSize: 16,
                      color: '#262626',
                      outline: 'none'
                    }}
                    {...register(objFields.telefone)}
                  /> */}
                  <span className="text-[#ff5d5d]">
                    {errors?.telefone?.message}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  E-mail<span className="text-red-500">*</span>
                </label>
                <input
                  {...register(objFields.email)}
                  className="h-[46px] w-full rounded-[5px] border-[1px] border-[#7D7D7D] px-4 text-[16px] text-[#262626] outline-none"
                  placeholder="seuemail@gmail.com"
                />
                <span className="text-[#ff5d5d]">{errors?.email?.message}</span>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[1rem] font-[500] text-[#262626]">
                  Informação sobre o pedido
                </label>
                <textarea
                  {...register(objFields.informacoes)}
                  rows={4}
                  className="max-h-[230px] min-h-[46px] w-full rounded-[5px] border-[1px] border-[#7D7D7D] px-4 py-[10px] text-[16px] text-[#262626] outline-none"
                  placeholder="Notas sobre o pedido, caso deseje informar algo sobre o pedido"
                ></textarea>
                <span className="text-[#ff5d5d]">
                  {errors?.informacoes?.message}
                </span>
              </div>
              {isSuccessSend && (
                <div className="mt-[1rem]">
                  {/* <Alert severity="success">Enviado com sucesso!</Alert> */}
                  Enviado com sucesso!
                </div>
              )}
              {failSend.show && (
                <div className="mt-[1rem]">
                  {/* <Alert severity="error">{failSend.msg}</Alert> */}
                  {failSend.msg}
                </div>
              )}
            </div>
            <div className="flex h-min w-[324px] flex-col border-[1px] border-[#727070]">
              <div className="flex w-full flex-col justify-center bg-[#262626] px-5 py-2">
                <h1 className="text-[1rem] font-[500] text-white">
                  Seu pedido
                </h1>
              </div>
              {/* <div className='w-full px-5 py-2'>
                                <table width='100%'>
                                    <tbody>
                                        <tr>
                                            <th align='left'>Doação:</th>
                                            <td align='right'>R$ 200,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}
              <div className="w-full border-t-[1px] border-[#727070] px-5 py-2">
                <table width="100%">
                  <tbody>
                    <tr>
                      <th align="left">Total:</th>
                      <td align="right">
                        {new Intl.NumberFormat('pt-br', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(
                          Number(cartTotalPrice || 0) +
                            Number(valueSelected?.preco || 0)
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-y-3 px-5 py-2">
                {/* <div className='flex flex-col gap-y-3'>
                                    <div className='flex flex-row items-center gap-x-2'>
                                        <input checked type="radio" id="pix" name="payment" value="pix" />
                                        <label for="pix" className='flex flex-row items-center gap-x-2'>
                                            <span className='text-[1rem] font-[500] text-black'>Pagar com Pix</span>
                                            <img src='/icons/logo-pix-icone.svg' />
                                        </label>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='flex flex-row gap-x-2'>
                                            <input type="radio" id="pagseguro" name="payment" value="pagseguro" />
                                            <label for="pagseguro" className='text-[1rem] font-[500] text-black'>Pagar com Pagseguro</label>
                                        </div>
                                        <div className='w-full'>
                                            <img className='w-[150px]' src='/icons/logo-pagseguro.svg' />
                                        </div>
                                    </div>
                                </div> */}
                <div className="flex w-full flex-col items-center gap-y-3">
                  <div
                    onClick={() => handleChangeMethodPayment('pix')}
                    className="flex w-full cursor-pointer flex-row items-center gap-x-3"
                  >
                    <div
                      className={`min-h-[22px] min-w-[22px] ${methodPayment == 'pix' ? 'bg-[#262626]' : 'bg-[#D9D9D9]'} rounded-full`}
                    ></div>
                    <span>PIX</span>
                    <label
                      //   for="pix"
                      className="flex flex-row items-center gap-x-2"
                    >
                      <img src="/icons/logo-pix-icone.svg" />
                    </label>
                  </div>
                  <div
                    onClick={() => handleChangeMethodPayment('pagseguro')}
                    className="flex w-full cursor-pointer flex-row items-center gap-x-3"
                  >
                    <div
                      className={`min-h-[22px] min-w-[22px] ${methodPayment == 'pagseguro' ? 'bg-[#262626]' : 'bg-[#D9D9D9]'} rounded-full`}
                    ></div>
                    <span>Pagseguro</span>
                    <div className="w-full">
                      <img
                        className="w-[150px]"
                        src="/icons/logo-pagseguro.svg"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#FD0003] p-2 text-[1rem] font-[500] text-white"
                  >
                    <SyncLoader color="#E6E6E6" loading={isLoading} size={3} />
                    {isLoading ? 'Enviando' : <span>Finalizar doação</span>}
                  </button>
                </div>
                <div>
                  <p className="text-[13px] font-[400] text-[#727070]">
                    Os seus dados pessoais serão utilizados para processar a sua
                    compra, apoiar a sua experiência em todo este site e para
                    outros fins descritos na nossa{' '}
                    <a className="text-c-red">política de privacidade.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
