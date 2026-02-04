import React from 'react'
import { useSelector } from 'react-redux'
import { FirstStep } from '../FirstStep'
import { SecondStep } from '../SecondStep'
import { ThirdStep } from '../ThirdStep'
import { FourthStep } from '../FourthStep'
import { FinalStep } from '../FinalStep'

export function CurrentStep() {
  const { current_step: currentStep } = useSelector(store => store.schedule)

  const StepMapping = {
    first: <FirstStep />,
    second: <SecondStep />,
    third: <ThirdStep />,
    fourth: <FourthStep />,
    final: <FinalStep />
  }

  return <>{StepMapping[currentStep]}</>
}
