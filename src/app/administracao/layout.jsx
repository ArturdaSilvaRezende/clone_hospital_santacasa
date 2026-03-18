import Banner from '~/view/pages/administracao/Content/components/Banner'
import CallToActionSections from '~/components/CallToAction'
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
