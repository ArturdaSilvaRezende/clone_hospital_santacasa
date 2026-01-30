import CallToActionSections from './components/CallToAction'
import CarouselHero from './components/CarouselHero'
import LatestNews from './components/LatestNews'
import ReferenceSection from './components/References'
import ServicesGrid from './components/Services'
import TeachingAndResearch from './components/TeachingAndResearch'
import SantaCasaStats from './components/TotalNumberProcedures'

export default function Home() {
  return (
    <>
      <CarouselHero />
      <LatestNews />
      <SantaCasaStats />
      <ServicesGrid />
      <TeachingAndResearch />
      <ReferenceSection />
      <CallToActionSections />
    </>
  )
}
