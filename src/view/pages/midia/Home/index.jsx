'use client'

import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import Image from 'next/image'
import Search from './components/Search'
import Link from 'next/link'

export default function Home({ initialData, pagination }) {
  const [newsList, setNewsList] = useState(initialData)
  const [currentPage, setCurrentPage] = useState(pagination.page)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm)

  async function loadMore() {
    if (currentPage >= pagination.page_count) return

    setIsLoading(true)

    await new Promise(resolve => setTimeout(resolve, 800))

    const nextPage = currentPage + 1

    setCurrentPage(nextPage)
    setIsLoading(false)
  }

  const filteredNews = newsList.filter(news => {
    const matchesTitle = news.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())

    const matchesDate = selectedDate ? news.date.startsWith(selectedDate) : true

    return matchesTitle && matchesDate
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 500)

    return () => clearTimeout(timeout)
  }, [searchTerm])

  return (
    <section className="my-24" aria-label="Santa Casa em destaque">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-8 max-sm:px-5 md:px-8 lg:px-8 xl:px-0">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <div className="flex max-sm:flex-col max-sm:justify-center max-sm:gap-10 md:flex-wrap md:justify-center md:gap-12 lg:flex-wrap xl:justify-start lg:gap-x-5 lg:gap-y-7">
          {filteredNews.map(news => (
            <article
              key={news.id}
              className="relative flex flex-col max-sm:w-full md:w-[42%] lg:w-101.75"
            >
              <p className="absolute top-5 left-5 rounded-full border border-[#727070CC] bg-[#727070] px-3 py-1 text-[12px] font-medium text-white">
                <span>{news.type}</span>
              </p>

              <div className="h-48 w-full">
                <div
                  className="w-auto rounded-lg bg-cover bg-center object-cover max-sm:h-70 md:h-60 lg:h-81.5"
                  style={{
                    backgroundImage: `url('${news.url}')`,
                    backgroundColor: '#BE3131'
                  }}
                  role="img"
                  aria-label={news.title}
                />
              </div>

              <div className="flex flex-col px-2 md:mt-0 lg:mt-22">
                <div className="relative top-14 mb-3 flex items-center justify-between max-sm:top-25">
                  <time
                    dateTime={news.date}
                    className="text-[16px] text-gray-500"
                  >
                    {new Date(news.date).toLocaleDateString('pt-BR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                </div>

                <h3 className="mt-12 mb-3 line-clamp-2 text-[24px] font-semibold text-gray-900 max-sm:mt-25 max-sm:text-[20px]">
                  {news.title}
                </h3>

                <p className="mb-4 line-clamp-3 text-[14px] font-normal text-[#535353]">
                  {news.description}
                </p>

                <div className="border-t border-[#B4B4B4] pt-5">
                  <Link
                    href={`/midia/${news.id}`}
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
                        alt="ícone"
                        width={16}
                        height={16}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <article
                key={`skeleton-${index}`}
                className="flex flex-col max-sm:w-full md:w-[42%] lg:w-101.75"
              >
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={206}
                  className="rounded-lg"
                />
                <div className="mt-4 flex flex-col gap-3 px-2">
                  <Skeleton variant="text" width="40%" height={20} />
                  <Skeleton variant="text" width="90%" height={30} />
                  <Skeleton variant="text" width="80%" height={20} />
                </div>
              </article>
            ))}
        </div>

        {currentPage < pagination.page_count && (
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="mt-10 rounded-full border border-[#FD0003] px-6 py-3 text-[#FD0003] transition-colors duration-300 hover:bg-red-100"
          >
            {isLoading ? 'Carregando...' : 'Carregar mais notícias'}
          </button>
        )}
      </div>
    </section>
  )
}
