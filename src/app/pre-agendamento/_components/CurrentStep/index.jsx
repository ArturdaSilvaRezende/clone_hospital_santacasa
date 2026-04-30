'use client'

import React from 'react'
import { useScheduleStore } from '../../_store'
import { FirstStep } from '../Steps/FirstStep'
import { SecondStep } from '../Steps/SecondStep'
import { ThirdStep } from '../Steps/ThirdStep'
import { FourthStep } from '../Steps/FourthStep'
import { FinalStep } from '../Steps/FinalStep'

export default function CurrentStep() {
  const currentStep = useScheduleStore(state => state.current_step)

  const StepMapping = {
    first: <FirstStep />,
    second: <SecondStep />,
    third: <ThirdStep />,
    fourth: <FourthStep />,
    final: <FinalStep />
  }

  return <>{StepMapping[currentStep] || <FirstStep />}</>
}
