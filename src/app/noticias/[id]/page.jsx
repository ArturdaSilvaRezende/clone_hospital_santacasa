import Image from 'next/image'
import styles from './styles.module.css'
import ListCards from '~/components/ListCards'
import DataTime from '~/components/CustomComponents/DataTime'
// import { BlocksRenderer } from '@strapi/block-react-render' // Se você usar o novo editor do Strapi

export default async function Page({ params }) {
  const { id } = await params
  const STRAPI_URL = 'http://localhost:1337'

  const res = await fetch(`${STRAPI_URL}/api/noticias/${id}?populate=*`, {
    next: { revalidate: 60 }
  })

  const allRes = await fetch(`${STRAPI_URL}/api/noticias?populate=*&pagination[limit]=4`, {
    next: { revalidate: 60 }
  })

  if (!res.ok || !allRes.ok) {
    throw new Error('Erro ao carregar dados do Strapi')
  }

  const responseJson = await res.json()
  const otherNewsJson = await allRes.json()
  
  const data = responseJson.data

  const news = {
    title: data.title, 
    description: data.description, 
    imageUrl: data.banner?.url ? `${STRAPI_URL}${data.banner.url}` : null,
    publishedAt: data.publishedAt
  }

  console.log(news)

  return (
    <>
      <article className="container mx-auto my-15 flex flex-col items-center gap-5 max-sm:px-5 md:px-8 xl:px-0">
        <header>
          <h1 className="mx-auto mb-3 max-w-231.5 text-center text-[36px] leading-[1.1] font-medium max-sm:text-[24px]">
            {news.title}
          </h1>

          <div className="mb-5 flex justify-center gap-3">
            <Image src="/icons/calendar-month-icon-gray.svg" alt="Calendário" height={17} width={17} />
            {/* <DataTime data={{ createdAt: news.publishedAt }} top="top-[7px]" /> */}
          </div>
        </header>

        <div className="w-full">
          {news.imageUrl && (
            <div className="relative float-left mr-6 mb-4 overflow-hidden rounded-2xl h-71 w-full md:w-[50%] max-sm:float-none">
              <Image
                src={news.imageUrl}
                alt={news.title || "Banner da notícia"}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className={`${styles.events__description} space-y-3 text-justify text-lg`}>
            {/* 4. RENDERIZADOR DE BLOCOS (Para aquele array de 8 itens) */}
            {/* {news.description && <BlocksRenderer content={news.description} />} */}
          </div>

          <div className="clear-both"></div>
        </div>
      </article>

      <section className="container mx-auto my-15 max-sm:px-5 md:px-8 xl:px-0">
        <h3 className="mb-6 text-[24px] font-medium">Confira outras notícias</h3>
        {/* <ListCards list={otherNewsJson.data} /> */}
      </section>
    </>
  )
}