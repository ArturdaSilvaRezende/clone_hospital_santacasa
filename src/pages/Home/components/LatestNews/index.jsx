'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

import { api } from '~/services/api'

import CustomLink from '~/components/CustomComponents/Link'

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
    <section className="mt-24 mb-14" aria-labelledby="latest-news-heading">
      <div className="container mx-auto max-w-285">
        <header className="mb-8">
          <h2
            id="latest-news-heading"
            className="text-3xl font-bold text-gray-900 md:text-4xl"
          >
            Últimas Notícias
          </h2>
        </header>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-btn-prev-custom',
              nextEl: '.swiper-btn-next-custom'
            }}
            breakpoints={{
              640: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            className="pb-12"
            role="region"
            aria-roledescription="carousel"
            aria-label="Carrossel de notícias"
          >
            {list.map((news, index) => (
              <SwiperSlide key={news.id} className="px-1 pb-2">
                <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md shadow-black/30 transition-shadow">
                  <div className="relative h-48 w-full bg-gray-200">
                    <Image
                      src={news.url}
                      alt={news.title}
                      priority={index === 0}
                      height={206}
                      width={357}
                    />
                  </div>

                  <div className="flex grow flex-col p-6">
                    <time
                      dateTime={news.date}
                      className="mb-3 text-sm text-gray-500"
                    >
                      {new Date(news.date).toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>

                    <h3 className="mt-15 mb-3 line-clamp-2 text-xl font-bold text-gray-900">
                      {news.title}
                    </h3>

                    <p className="mb-4 line-clamp-3 grow text-gray-600">
                      {news.description}
                    </p>

                    <a
                      href={`/noticias/${news.slug}`}
                      className="group inline-flex items-center gap-2 font-semibold text-red-600 transition-colors hover:text-red-700"
                      aria-label={`Ler mais sobre ${news.title}`}
                    >
                      Ler mais
                      <span
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="swiper-btn-prev-custom absolute top-1/2 -left-10 z-10 flex h-8.75 w-8.75 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#262626] shadow-lg transition hover:opacity-75 focus:ring-4 focus:ring-gray-700 focus:outline-none"
            aria-label="Notícia anterior"
          >
            <span className="sr-only">Anterior</span>
            <Image
              src="/icons/arrow-prev-icon-white.svg"
              alt="anterior"
              width={16}
              height={13}
            />
          </button>

          <button
            className="swiper-btn-next-custom absolute top-1/2 -right-10 z-10 flex h-8.75 w-8.75 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#262626] shadow-lg transition hover:opacity-75 focus:ring-4 focus:ring-gray-700 focus:outline-none"
            aria-label="Próxima notícia"
          >
            <span className="sr-only">Próxima</span>
            <Image
              src="/icons/arrow-next-icon-white.svg"
              alt="próximo"
              width={16}
              height={13}
            />
          </button>
        </div>

        <CustomLink
          label=" Ver todas"
          //href="/contato"
          classNameContainer="w-[158px] bg-[#FD0003] hover:bg-red-700 mx-auto mt-4"
          classNameLink="w-full text-white"
        />
      </div>

      <style jsx global>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </section>
  )
}
