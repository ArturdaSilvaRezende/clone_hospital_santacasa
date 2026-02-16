'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  addPaymentInfo,
  changeMethodPayment,
  loadPaymentInfo
} from '~/app/doacao/store'
import apiDonation from '~/services/apiDonation'

import Pix from './components/Pix'
import CreditCardForm from './components/CreditCardForm'
import BoletoAddressForm from './components/BoletoAddressForm'

import { MdPix } from 'react-icons/md'
import { FaRegCreditCard } from 'react-icons/fa6'
import { AiOutlineBarcode } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa6'

export default function PaymentMethod({
  activeStep = 0,
  steps = [],
  setActiveStep = () => {},
  setIsShowConfirmation = () => {}
}) {
  const dispatch = useDispatch()
  const {
    cart_items: cartItems,
    cart_total_price: cartTotalPrice,
    value_selected: valueSelected,
    method_paymennt: methodPayment,
    content,
    payment_info
  } = useSelector(store => store.donate)

  const [activeTab, setActiveTab] = useState('pix')
  const [isLoading, setIsLoading] = useState(false)

  console.log(payment_info)

  const handleBack = () => {
    setActiveStep(Math.max(0, activeStep - 1))
  }

  const handleNextStep = () => {
    setActiveStep(Math.min(steps.length - 1, activeStep + 1))
    setIsShowConfirmation(false)
  }

  function handleChangeMethodPayment(value) {
    dispatch(changeMethodPayment(value))
  }

  const handleConfirmDonation = async () => {
    if (isLoading) return

    const items = [...cartItems, valueSelected]

    const objData = {
      ...content,
      forma_pagamento: methodPayment || activeTab,
      items,
      new_order: true,
      generate_password: true,
      tipo_pessoa: 'Física'
    }

    try {
      setIsLoading(true)

      const result = await apiDonation.post(`/donate`, objData)

      if (result.data.success) {
        dispatch(
          addPaymentInfo({
            code_pix: result?.data?.code_pix,
            order_id: result?.data?.order_info?.id,
            method_payment: result?.data?.order_info?.method_payment,
            date: result?.data?.order_info?.date,
            total_price: result?.data?.order_info?.total
          })
        )
        console.error('funcionou', result.data)
        handleNextStep()
      }
    } catch (err) {
      console.error('Erro ao processar doação:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const renderPaymentContent = () => {
    switch (activeTab) {
      case 'pix':
        return <Pix payment={payment_info} />
      case 'card':
        return <CreditCardForm />
      case 'boleto':
        return <BoletoAddressForm />
      default:
        return null
    }
  }

  const tabs = [
    { id: 'pix', label: 'PIX', icon: MdPix },
    { id: 'card', label: 'Cartão de Crédito', icon: FaRegCreditCard },
    { id: 'boleto', label: 'Boleto', icon: AiOutlineBarcode }
  ]

  useEffect(() => {
    dispatch(loadPaymentInfo())
  }, [])

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-wrap gap-4">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                dispatch(changeMethodPayment(tab.id))
              }}
              className={`flex items-center gap-3 rounded-xl border px-6 py-3 font-bold transition-all duration-200 ${
                isActive
                  ? 'border-[#FE0908] bg-[#FE0908] text-white shadow-md'
                  : 'border-gray-100 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              <tab.icon
                className={`text-2xl ${isActive ? 'text-white' : 'text-gray-400'}`}
              />
              <span className="text-sm tracking-wide uppercase">
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>

      <div className="transition-all duration-300">
        {renderPaymentContent()}
      </div>

      <div className="mt-5 flex justify-between">
        <button
          className="group flex h-10 w-26.75 items-center justify-center gap-2 rounded-3xl border border-[#B4B4B4] font-normal text-[#535353] transition-colors hover:bg-gray-50"
          aria-label="Voltar"
          onClick={handleBack}
        >
          <span
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <BsArrowLeft className="text-lg" />
          </span>

          <span>Voltar</span>
        </button>

        <button
          type="button"
          onClick={handleConfirmDonation}
          className="group flex h-10 w-50 items-center justify-center gap-2 rounded-full bg-[#FF0909] font-bold text-white transition-all hover:bg-red-700"
        >
          <span> Confirmar doação</span>

          <span
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <FaArrowRight className="text-lg" />
          </span>
        </button>
      </div>
    </div>
  )
}
