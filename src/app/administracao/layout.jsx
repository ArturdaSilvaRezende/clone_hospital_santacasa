import CallToActionSections from '~/components/CallToAction'
import Banner from './_components/Banner'
import '~/app/globals.css'

export const metadata = {
  title: 'Santa casa | Estrutura Administrativa',
  description: ''
}

export default function Layout({ children }) {
  return (
    <main>
      <Banner />
      {children}
      <CallToActionSections />
    </main>
  )
}
