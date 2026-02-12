'use client'

import { useState } from 'react'
import { MdPix } from 'react-icons/md'
import { FaRegCreditCard } from 'react-icons/fa6'
import { AiOutlineBarcode } from 'react-icons/ai'
import Pix from './components/Pix'

export default function PaymentMethod({
  activeStep = 0,
  setActiveStep = () => {}
}) {
  const [activeTab, setActiveTab] = useState('pix')

  const renderPaymentContent = () => {
    switch (activeTab) {
      case 'pix':
        return <Pix activeStep={activeStep} setActiveStep={setActiveStep} />
        return <Pix />
      case 'card':
        return (
          <div className="rounded-xl border-2 border-dashed border-gray-200 py-8 text-center">
            <p className="font-medium text-gray-600">
              Conteúdo: Formulário de Cartão de Crédito
            </p>
          </div>
        )
      case 'boleto':
        return (
          <div className="rounded-xl border-2 border-dashed border-gray-200 py-8 text-center">
            <p className="font-medium text-gray-600">
              Conteúdo: Gerador de Boleto Bancário
            </p>
          </div>
        )
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

      {/* Tab Content Area */}
      <div className="transition-all duration-300">
        {renderPaymentContent()}
      </div>
    </div>
  )
}
