import Image from 'next/image'
import styles from './styles.module.css'
import ListCards from '~/components/ListCards'
import DataTime from '~/components/CustomComponents/DataTime'

export default async function Page({ params }) {
  const { id, page } = await params
  const pageNumber = Number(page) || 1

  const allRes = await fetch(
    `${process.env.NEXT_PUBLIC_API}/news?page=${pageNumber}`,
    {
      next: { revalidate: 60 }
    }
  )

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/news/${id}`, {
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    throw new Error('Erro ao buscar notícia')
  }

  if (!allRes.ok) {
    throw new Error('Erro ao buscar notícias')
  }

  const result = await allRes.json()
  const data = await res.json()
  const news = data.info
  const isMateria = news.url.includes('FOTOS_MATERIA')
  const isWhatsApp = news.url.includes('Whats_App')
  // const objectFitClass = isMateria ? 'object-contain' : 'object-cover'
  const imageHeight = isMateria ? 'h-120 md:h-90 xl:h-120 w-[50%] md:w-[70%] xl:w-[50%] max-sm:h-full' : 'w-[70%] xl:h-66 md:h-50 max-sm:h-32'
  const imageBannerHeight = isMateria ? 'xl:h-122 md:h-100 max-sm:h-60' : 'xl:h-71 md:h-50 max-sm:h-32'
  const imageWhatsAppHeight = isWhatsApp ? 'h-110 w-[70%] max-sm:h-50' : imageHeight
  const cleanHtmlContent = news?.html_content
    ?.replace(/<[^>]+>\s*(&nbsp;)?\s*<\/[^>]+>/g, '')
    .trim()

  return (
    <>
      <article
        className="mx-auto my-15 flex container flex-col items-center gap-5 max-sm:mt-15 max-sm:mb-5 max-sm:px-5 md:px-8 lg:px-8 xl:px-0"
        aria-label={news.title}
      >
        <header>
          <h1 className="mx-auto mb-3 max-w-231.5 text-center text-[36px] leading-[1.1] font-medium max-sm:text-[24px]">
            {news.title}
          </h1>

          <div className="mb-5 flex justify-center gap-3 max-sm:mt-2">
            <Image
              src="/icons/calendar-month-icon-gray.svg"
              alt="Calendar Icon"
              height={17}
              width={17}
            />
            <DataTime data={news} top="top-[7px]" />
          </div>
        </header>

        <div>
          <div
            className={`relative float-left mr-6 mb-4 lg:mb-10 xl:mb-4  ${imageWhatsAppHeight} max-sm:float-none max-sm:w-full`}
          >
            {/* <Image
              src={news.url}
              alt={news.title}
              fill
              className={`rounded-xl ${objectFitClass}`}
              loading="eager"
            /> */}
            <div
              className={`w-full rounded-2xl bg-cover max-sm:w-full 
                ${isWhatsApp ? "h-110 max-sm:h-50" : imageBannerHeight}`}
              style={{
                backgroundImage: `url('${news.url}')`,
                backgroundColor: '#BE3131'
              }}
              role="img"
              aria-label="Médica sorrindo segurando uma prancheta vermelha"
            />
          </div>

          <div
            className={`${styles.events__description} space-y-3 text-justify`}
            dangerouslySetInnerHTML={{ __html: cleanHtmlContent }}
          />

          <div className="clear-both"></div>
        </div>
      </article>

      <section className="mx-auto my-15 container max-sm:px-5 md:px-8 lg:px-8 xl:px-0">
        <h3 className="mb-2 text-[24px] font-medium">
          Confira outras notícias
        </h3>
        <ListCards list={result?.list} />
      </section>
    </>
  )
}
