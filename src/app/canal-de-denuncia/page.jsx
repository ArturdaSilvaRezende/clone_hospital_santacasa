'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { CurrentStep } from '~/view/pages/canalDenuncia/CurrentStep'

export default function CanalDeDenuncia() {
  return (
    <ReduxProvider store={store}>
       <CurrentStep />
    </ReduxProvider>
  )
}
