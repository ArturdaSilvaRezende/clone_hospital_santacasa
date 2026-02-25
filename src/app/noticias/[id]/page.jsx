import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import ListCards from '~/components/ListCards'

export default async function Page({ params }) {
  const { id, page } = await params
  const pageNumber = Number(page) || 1

  const allRes = await fetch(
    `${process.env.NEXT_PUBLIC_API}/news?page=${pageNumber}`,
    {
      cache: 'no-store'
    }
  )

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/news/${id}`, {
    cache: 'no-store'
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

  return (
    <>
      <article
        className="mx-auto my-15 flex max-w-280 flex-col items-center gap-5 max-sm:mt-15 max-sm:mb-5 max-sm:px-5 md:px-8 lg:px-0"
        aria-labelledby={news.title}
      >
        <header>
          <h1 className="mx-auto mb-3 max-w-231.5 text-center text-[36px] leading-[1.1] font-medium max-sm:text-[24px]">
            {news.title}
          </h1>

          <div className="flex justify-center gap-3 max-sm:mt-2">
            <Image
              src="/icons/calendar-month-icon-gray.svg"
              alt="Calendar Icon"
              height={17}
              width={17}
            />
            <time dateTime={news.date} className="text-[16px] text-[#727070]">
              {new Date(news.date).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
          </div>
        </header>

        <img
          className="h-130 w-full rounded-[42px] object-cover shadow-lg max-sm:h-65 max-sm:w-full"
          src={news.url}
          alt={news.title}
        />

        {/* <div
            className="h-140 w-full max-sm:w-full max-sm:h-65 rounded-[42px] bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url('${news.url}')`,
              backgroundColor: '#BE3131'
            }}
            role="img"
            aria-label={news.title}
          /> */}

        <div
          className={styles.events__description}
          dangerouslySetInnerHTML={{ __html: news?.html_content }}
        />
      </article>

      <div className="mx-auto mb-18 flex max-w-280 justify-end max-sm:mb-15 max-sm:px-5 md:px-8 lg:px-0">
        <Link
          href="/noticias"
          className="mt-5 block w-30 rounded-2xl bg-[#2F2E41] px-2 py-1 text-center text-white hover:bg-[#1f1e2b]"
        >
          Voltar
        </Link>
      </div>

      <section className="mx-auto mb-15 max-w-280 max-sm:px-5 md:px-8 lg:px-0">
        <h3 className="mb-2 text-[24px] font-medium">
          Confira outras notícias
        </h3>
        <ListCards list={result?.list} />
      </section>
    </>
  )
}
