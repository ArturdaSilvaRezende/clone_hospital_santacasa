'use client'

import { Provider as ReduxProvider } from 'react-redux'

import { store } from './store'
import { Steps } from '~/pages/pre-agendamento/Steps'
import { CurrentStep } from '~/pages/pre-agendamento/CurrentStep'
import { Banner } from '~/pages/pre-agendamento/Banner'

export default function PreAgendamento() {
  return (
    <ReduxProvider store={store}>
      <div className="flex flex-col items-center">
        <Banner />
        <div className="relative mt-[1.5rem] mb-[5rem] flex w-full flex-col items-center justify-center">
          <div className="flex w-[82%] flex-row items-center justify-between xl:w-[1120px]">
            <div className="mt-[0.5rem] flex w-full flex-col gap-x-[4rem] xl:mt-[3rem] xl:flex-row">
              <Steps />
              <div className="flex w-full flex-col">
                <CurrentStep />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReduxProvider>
  )
}
