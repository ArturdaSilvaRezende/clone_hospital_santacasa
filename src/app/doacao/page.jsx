'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { Donation } from '~/view/pages/doacao/Donation'
import { Project } from '~/view/pages/doacao/Project'

export default function Doacao() {
  return (
    <ReduxProvider store={store}>
      <div className="flex flex-col items-center">
        <Donation />
        <Project />
      </div>
    </ReduxProvider>
  )
}
