'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import { api } from '~/services/api'
import Link from 'next/link'

export default function LatestNews() {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function load() {
    try {
      setIsLoading(true)
      const result = await api.get(`/news`)

      setList(result?.data?.list)
    } catch (err) {
      console.log(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <section
      className="bg-white pt-24 pb-14"
      aria-labelledby="Últimas Notícias"
    >
      <div className="container mx-auto max-sm:px-6 md:px-8">
        <h2
          id="latest-news-heading"
          className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
        >
          Últimas Notícias
        </h2>

        <Link
          href="/noticias"
          className="mb-3 block text-right text-[16px] font-medium text-[#D32F2F] transition-colors hover:text-[#A45757] max-sm:mt-3"
          aria-label="Ver todas as notícias"
        >
          Ver todas as notícias
        </Link>

        <div className="flex justify-between max-sm:flex-col max-sm:justify-center max-sm:gap-10 md:flex-wrap md:gap-12 lg:flex-nowrap lg:gap-5">
          {list
            .slice()
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .slice(0, 3)
            .map((news, index) => (
              <article
                key={news.id}
                className="flex flex-col bg-white max-sm:w-full md:w-[42%] lg:w-101.75"
              >
                <div className="h-48 w-full">
                  <Image
                    src={news.url}
                    alt={news.title}
                    priority={index === 0}
                    height={206}
                    width={357}
                    className="mx-auto rounded-lg object-cover"
                    loading="eager"
                  />
                </div>

                <div className="mt-11 flex flex-col px-2">
                  <time
                    dateTime={news.date}
                    className="relative top-16 mb-3 text-[16px] text-gray-500"
                  >
                    {new Date(news.date).toLocaleDateString('pt-BR', {
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
                      href={`/noticias/${news.id}`}
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
      </div>
    </section>
  )
}
