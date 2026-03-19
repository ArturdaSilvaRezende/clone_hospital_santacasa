'use client'

import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { RiCheckDoubleLine } from 'react-icons/ri'
import { HiOutlineCash } from 'react-icons/hi'
import { BsPerson } from 'react-icons/bs'
import DonationSummaryCard from './components/DonationSummaryCard'
import PersonalInfoForm from './components/PersonalInfoForm'
import PaymentMethod from './components/PaymentMethod'
import Confirmation from './components/Confirmation'

export default function TabSteppers() {
  const [activeStep, setActiveStep] = useState(0)
  const [isShowConfirmation, setIsShowConfirmation] = useState(true)

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
          <PaymentMethod
            activeStep={activeStep}
            steps={steps}
            setActiveStep={setActiveStep}
            setIsShowConfirmation={setIsShowConfirmation}
          />
        )
      case 2:
        return <Confirmation />
      default:
        return null
    }
  }

  return (
    <section aria-label="resumo da doação">
      <div className="mb-8 bg-white py-5 max-sm:py-8 md:py-8">
        <div
          role="tablist"
          aria-label="Progresso do checkout"
          className="relative flex items-start"
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-1 flex-col items-center justify-between"
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
                  {activeStep >= step.id ? (
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
                    className={`absolute h-0.5 w-full max-sm:left-5 md:left-6 lg:left-0 ${
                      activeStep > index ? 'bg-[#FD0003]' : 'bg-[#D9D9D9]'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto flex gap-8 max-sm:mt-4 max-sm:mb-10 max-sm:px-5 md:my-10 md:flex-col md:px-8 lg:my-20 max-sm:flex-col lg:flex-col xl:flex-row xl:px-0">
        <div
          id={`panel-${activeStep}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeStep}`}
          className={`rounded-xl border border-[#7270701A] bg-white max-sm:order-2 md:order-2 xl:-order-1 ${activeStep >= 2 ? 'mx-auto p-2 max-sm:w-full md:w-full lg:w-200' : 'p-8 max-sm:w-full max-sm:p-5 md:w-full lg:w-full'} `}
        >
          {renderContent()}
        </div>

        {isShowConfirmation && <DonationSummaryCard />}
      </div>
    </section>
  )
}
