import Carousel from './components/Carousel'
import LatestNews from './components/LatestNews'
import ServicesGrid from './components/Services'
import TeachingAndResearch from './components/TeachingAndResearch'
import SantaCasaStats from './components/TotalNumberProcedures'

export default function Home() {
  return (
    <>
      <Carousel />
      <LatestNews />
      <SantaCasaStats />
      <ServicesGrid />
      <TeachingAndResearch />
    </>
  )
}
