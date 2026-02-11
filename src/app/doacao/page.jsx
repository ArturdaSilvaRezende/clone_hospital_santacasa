'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import Banner from '~/view/pages/doacao/Banner'
import CallToActionSections from '~/components/CallToAction'
import DonationSection from '~/view/pages/doacao/DonationSection'

export default function Doacao() {
  return (
    <ReduxProvider store={store}>
      <Banner />
      <DonationSection />
      <CallToActionSections />
    </ReduxProvider>
  )
}
