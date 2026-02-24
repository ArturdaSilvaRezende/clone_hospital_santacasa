import HeroSection from '~/components/HeroSection'
import '~/app/globals.css'

export const metadata = {
  title: 'Santa casa | Notícias',
  description: ''
}

export default function Layout({ children }) {
  return (
    <main>
      <HeroSection
        subtitle="Notícias"
        title="Confira as últimas notícias"
        description="Fique por dentro das últimas novidades, eventos e informações relevantes sobre a Santa Casa de Misericórdia de Goiânia."
        banner="/images/hero-section-banner.svg"
      />
      {children}
    </main>
  )
}
