import HeroSection from '~/components/HeroSection'
import CallToActionSections from '~/components/CallToAction'
import '~/app/globals.css'

export const metadata = {
  title: 'Santa casa | Notícias',
  description: ''
}

export default function Layout({ children }) {
  return (
    <main>
      <HeroSection
        subtitle="Na Mídia"
        title="Santa Casa em destaque"
        description="Acompanhe reportagens, entrevistas e conteúdos publicados sobre a Santa Casa de Goiânia em TV, rádio e jornais impressos. Aqui você encontra vídeos, áudios, PDFs e matérias que registram nossa atuação, projetos e impacto na saúde de Goiás."
        banner="/images/banner-section-midia.svg"
      />
      {children}
      <CallToActionSections />
    </main>
  )
}
