'use client'

import { useState } from 'react'
import { MdPix } from 'react-icons/md'
import { FaRegCreditCard } from 'react-icons/fa6'
import { AiOutlineBarcode } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa6'
import Pix from './components/Pix'
import CreditCardForm from './components/CreditCardForm'
import BoletoAddressForm from './components/BoletoAddressForm'

export default function PaymentMethod({
  activeStep = 0,
  steps = [],
  setActiveStep = () => {}
}) {
  const [activeTab, setActiveTab] = useState('pix')

  const handleBack = () => {
    setActiveStep(Math.max(0, activeStep - 1))
  }

  const handleNextStep = () => {
    setActiveStep(Math.min(steps.length - 1, activeStep + 1))
  }

  const renderPaymentContent = () => {
    switch (activeTab) {
      case 'pix':
        return <Pix />
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

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-wrap gap-4">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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
          onClick={handleNextStep}
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
