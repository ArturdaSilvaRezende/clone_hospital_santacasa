'use client'

import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { RiCheckDoubleLine } from 'react-icons/ri'
import { HiOutlineCash } from 'react-icons/hi'
import { BsPerson } from 'react-icons/bs'
import DonationSummaryCard from './components/DonationSummaryCard'
import PersonalInfoForm from './components/PersonalInfoForm'

export default function TabSteppers() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 0,
      label: 'Seus Dados',
      icon: BsPerson
    },
    {
      id: 1,
      label: 'Pagamento',
      icon: HiOutlineCash
    },
    {
      id: 2,
      label: 'Confirmação',
      icon: RiCheckDoubleLine
    }
  ]

  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInfoForm
            setActiveStep={setActiveStep}
            steps={steps}
            activeStep={activeStep}
          />
        )
      case 1:
        return (
          <div className="py-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold">Conteúdo: Pagamento</h2>
            <p className="text-gray-600">
              Escolha a forma de pagamento desejada.
            </p>
          </div>
        )
      case 2:
        return (
          <div className="py-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold">
              Conteúdo: Confirmação
            </h2>
            <p className="text-gray-600">Revise e confirme suas informações.</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="">
      <div className="mb-8 bg-white py-7">
        <div
          role="tablist"
          aria-label="Progresso do checkout"
          className="relative container mx-auto flex items-start"
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-1 flex-col items-center"
            >
              <div className="relative z-10 flex flex-col items-center">
                <button
                  role="tab"
                  aria-selected={activeStep === step.id}
                  aria-controls={`panel-${step.id}`}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ${
                    activeStep >= step.id ? 'bg-[#FD0003]' : 'bg-[#EDECEC]'
                  } `}
                >
                  {activeStep > step.id ? (
                    <FaCheck className="h-5 w-5 text-white" />
                  ) : (
                    <step.icon
                      className={`h-6 w-6 transition-colors duration-300 ${
                        activeStep === step.id ? 'text-white' : 'text-[#535353]'
                      } `}
                    />
                  )}
                </button>

                <span
                  onClick={() => setActiveStep(step.id)}
                  className={`mt-3 cursor-pointer text-sm font-medium transition-colors duration-300 ${
                    activeStep >= step.id ? 'text-[#FD0003]' : 'text-[#727070]'
                  } `}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute top-6 left-1/2 w-full">
                  <div
                    className={`absolute left-12 h-0.5 w-[75%] ${
                      activeStep > index ? 'bg-[#FD0003]' : 'bg-[#D9D9D9]'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-20 flex max-w-285 gap-8">
        <div
          id={`panel-${activeStep}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeStep}`}
          className="w-full rounded-xl border border-[#7270701A] bg-white p-8"
        >
          {renderContent()}
        </div>
        <DonationSummaryCard />
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className={`rounded-lg px-6 py-2 font-medium transition-all ${
            activeStep === 0
              ? 'cursor-not-allowed bg-gray-200 text-gray-400'
              : 'bg-gray-800 text-white hover:bg-gray-900'
          } `}
        >
          Anterior
        </button>
      </div>
    </div>
  )
}
