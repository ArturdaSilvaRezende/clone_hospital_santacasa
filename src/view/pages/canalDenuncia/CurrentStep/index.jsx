import { useSelector } from 'react-redux'
import { FirstStep } from '../FirstStep'
import { SecondStep } from '../SecondStep'
import { ThirdStep } from '../ThirdStep'
import { FinalStep } from '../FinalStep'

export function CurrentStep() {
  const { current_step: currentStep } = useSelector(store => store.report)

  const StepMapping = {
    first: <FirstStep />,
    second: <SecondStep />,
    third: <ThirdStep />,
    final: <FinalStep />
  }

  return <>{StepMapping[currentStep]}</>
}
