import CallToActionSections from '~/components/CallToAction'
import '../globals.css'

export const metadata = {
  title: 'Santa casa | Canal de Denúncia',
  description: ''
}

export default function Layout({ children }) {
  return (
    <main>
      {children}
      <CallToActionSections />
    </main>
  )
}
