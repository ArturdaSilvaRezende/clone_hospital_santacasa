import { Suspense } from 'react'
import CallToActionSections from '~/components/CallToAction'
import CarouselHero from './components/CarouselHero'
import LatestNews from './components/LatestNews'
import References from './components/References'
import ServicesGrid from './components/Services'
import TeachingAndResearch from './components/TeachingAndResearch'
import TotalNumberProcedures from './components/TotalNumberProcedures'

 async function getNews() {
  const res = await fetch('http://localhost:1337/api/noticias/?populate=*', {
    next: { revalidate: 60 }
  })
  const result = await res.json()
  return result.data || []
}

export default function Home() {

 const newsPromise = getNews()

  return (
    <>
     <Suspense fallback={<div className="h-125 bg-black animate-pulse" />}>
        <CarouselHero newsPromise={newsPromise} />
      </Suspense>
      <LatestNews newsPromise={newsPromise} />
      <TotalNumberProcedures />
      <ServicesGrid />
      <TeachingAndResearch />
      <References />
      <CallToActionSections />
    </>
  )
}
