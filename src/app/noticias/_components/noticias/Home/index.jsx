import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'
// import Skeleton from '@mui/material/Skeleton'

export default function Home({ newsPromise = [] }) {
  const list = use(newsPromise)

  const newsOnly = list.filter(item => item.is_banner === null)

  if (newsOnly.length === 0) return null

  return (
    <section className="my-24" aria-label="Últimas Notícias">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-8 max-sm:px-5 md:px-8 lg:px-0">
        <div className="flex max-sm:flex-col max-sm:justify-center max-sm:gap-10 md:flex-wrap md:gap-5 md:gap-y-12 lg:flex-wrap lg:gap-x-5 lg:gap-y-7">
          {newsOnly.map((news, index) => (
            <article
              key={news.id}
              className="flex flex-col max-sm:w-full md:w-[48%] lg:w-101.75"
            >
              <div className="h-48 w-full">
                <div
                  className="w-auto rounded-lg bg-cover bg-center max-sm:h-70 md:h-60 lg:h-81.5"
                  style={{
                    backgroundImage: `url(http://localhost:1337${news?.news_image?.url})`,
                    backgroundColor: '#BE3131'
                  }}
                  role="img"
                  aria-label={news.title}
                />
              </div>

              <div className="flex flex-col px-2 md:mt-10 lg:mt-22">
                <time
                  dateTime={news.createdAt}
                  className="relative top-16 mb-3 text-[16px] text-gray-500"
                >
                  {new Date(news.createdAt).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>

                <h3 className="mt-15 mb-3 line-clamp-2 text-[24px] font-semibold text-gray-900 max-sm:text-[20px]">
                  {news.title}
                </h3>

                <p className="mb-4 line-clamp-3 text-[14px] font-normal text-[#535353]">
                  {news.description}
                </p>

                <div className="border-t border-[#B4B4B4] pt-5">
                  <Link
                    href={`/noticias/${news.documentId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10.5 w-39.25 items-center justify-center gap-2 rounded-3xl border border-[#B4B4B4] font-semibold text-[#111032] transition-colors hover:bg-gray-100"
                    aria-label={`Ler mais sobre ${news.title}`}
                  >
                    <span>Ler mais</span>
                    <span
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <Image
                        src="/icons/arrow-up-icon-gray.svg"
                        alt="ícone de seta para indicar link"
                        width={16}
                        height={16}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* {currentPage < pagination.page_count && (
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="mt-10 rounded-full border border-[#FD0003] px-6 py-3 text-[#FD0003] transition-colors duration-300 hover:bg-red-100"
          >
            {isLoading ? 'Carregando...' : 'Carregar mais notícias'}
          </button>
        )} */}
      </div>
    </section>
  )
}
