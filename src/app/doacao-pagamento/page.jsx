'use client'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../doacao/store'
import { Payment } from '~/view/pages/doacaoPagamento/Payment'
import TabSteppers from '~/view/pages/doacaoPagamento/TabSteppers'

export default function DoacaoPagamento() {
  return (
    <ReduxProvider store={store}>
      <TabSteppers />
      <Payment />
    </ReduxProvider>
  )
}
