'use client'

import { useState } from 'react'
import { FiUser, FiCreditCard, FiCheckCircle } from 'react-icons/fi'

export default function TabSteppers() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 0,
      label: 'Seus Dados',
      icon: FiUser
    },
    {
      id: 1,
      label: 'Pagamento',
      icon: FiCreditCard
    },
    {
      id: 2,
      label: 'Confirmação',
      icon: FiCheckCircle
    }
  ]

  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="py-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold">
              Conteúdo: Seus Dados
            </h2>
            <p className="text-gray-600">
              Preencha suas informações pessoais para continuar.
            </p>
          </div>
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
    <div className="mx-auto w-full max-w-4xl p-8">
      {/* Stepper Container */}
      <div className="mb-8 rounded-lg bg-black p-6">
        <div
          role="tablist"
          aria-label="Progresso do checkout"
          className="relative flex items-center justify-between"
        >
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-1 items-center">
              {/* Step Item */}
              <div className="relative z-10 flex flex-1 flex-col items-center">
                {/* Icon Circle */}
                <button
                  role="tab"
                  aria-selected={activeStep === step.id}
                  aria-controls={`panel-${step.id}`}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-red-600'
                      : 'bg-gray-100 hover:bg-gray-200'
                  } `}
                >
                  <step.icon
                    className={`h-6 w-6 transition-colors duration-300 ${activeStep === step.id ? 'text-white' : 'text-gray-400'} `}
                  />
                </button>

                {/* Label */}
                <span
                  onClick={() => setActiveStep(step.id)}
                  className={`mt-3 cursor-pointer text-sm font-medium transition-colors duration-300 ${
                    activeStep === step.id
                      ? 'text-red-600'
                      : 'text-gray-400 hover:text-gray-300'
                  } `}
                >
                  {step.label}
                </span>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="relative -top-6 mx-4 h-0.5 flex-1">
                  <div
                    className={`h-full transition-colors duration-300 ${
                      activeStep > index ? 'bg-red-600' : 'bg-gray-700'
                    } `}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div
        id={`panel-${activeStep}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeStep}`}
        className="min-h-[300px] rounded-lg bg-white p-8 shadow-md"
      >
        {renderContent()}
      </div>

      {/* Navigation Buttons */}
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

        <button
          onClick={() =>
            setActiveStep(Math.min(steps.length - 1, activeStep + 1))
          }
          disabled={activeStep === steps.length - 1}
          className={`rounded-lg px-6 py-2 font-medium transition-all ${
            activeStep === steps.length - 1
              ? 'cursor-not-allowed bg-gray-200 text-gray-400'
              : 'bg-red-600 text-white hover:bg-red-700'
          } `}
        >
          Próximo
        </button>
      </div>
    </div>
  )
}
