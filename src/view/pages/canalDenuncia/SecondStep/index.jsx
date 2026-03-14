'use client'

import { useState } from 'react'
import Title from '../components/Title'
import FormContactInformation from './components/FormContactInformation'
import { FormComplaintInformation } from './components/FormComplaintInformation'
import { FaUser, FaRegFileAlt } from 'react-icons/fa'

export function SecondStep() {
  const [currentTab, setCurrentTab] = useState('Informações de Contato')
  const isFirstStepActive = currentTab === 'Informações de Contato'
  const isSecondStepActive = currentTab === 'Informações da Denúncia'

  const renderContent = () => {
    switch (currentTab) {
      case 'Informações de Contato':
        return <FormContactInformation setCurrentTab={setCurrentTab} />
      case 'Informações da Denúncia':
        return <FormComplaintInformation setCurrentTab={setCurrentTab} />
      default:
        return null
    }
  }

  return (
    <section
      className="mb-16 bg-white py-16 max-sm:py-10"
      aria-label="Canal de Denúncia"
    >
      <div className="container mx-auto space-y-4 max-sm:px-6 md:px-8 xl:px-0">
        <Title
          title="Canal de Denúncia"
          description="Preencha o formulário abaixo e registre sua denúncia"
        />

        <div className="flex w-full items-center justify-center py-4 md:hidden">
          <div className="relative flex w-full max-w-md items-center justify-between">
            <div className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-[#727070]" />

            <div
              className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 bg-[#20A36C] transition-all duration-300"
              style={{ width: isSecondStepActive ? '100%' : '0%' }}
            />

            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                  isFirstStepActive || isSecondStepActive
                    ? 'border-[#20A36C] bg-[#20A36C] text-white'
                    : 'border-gray-400 bg-gray-400 text-white'
                }`}
              >
                <FaUser size={20} />
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                  isSecondStepActive
                    ? 'border-[#20A36C] bg-[#20A36C] text-white'
                    : 'border-gray-500 bg-gray-500 text-white'
                }`}
              >
                <FaRegFileAlt size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 flex grow justify-between gap-2 max-sm:hidden">
          <p
            className={`w-full pb-5 text-[16px] font-bold ${isFirstStepActive ? 'border-b-2 border-black text-black' : 'border-b-2 border-[#6C7C92] text-[#727070]'}`}
          >
            Informações da Contato
          </p>
          <p
            className={`w-full pb-5 text-[16px] font-bold ${isSecondStepActive ? 'border-b-2 border-black text-black' : 'border-b-2 border-[#6C7C92] text-[#727070]'}`}
          >
            Informações da Denúncia
          </p>
        </div>

        {renderContent()}
      </div>
    </section>
  )
}
