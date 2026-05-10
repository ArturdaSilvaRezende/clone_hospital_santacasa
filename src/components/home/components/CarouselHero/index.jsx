'use client'

import Image from 'next/image'
import { use } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Link from 'next/link'

import './styles.css'

export default function CarouselHero({ newsPromise }) {
  const list = use(newsPromise)

  const bannersOnly = list.filter(item => item.is_banner === true)

  if (bannersOnly.length === 0) return null

  return (
    <section
      className="relative h-138.75 w-full bg-black md:h-100 lg:h-153.75 xl:h-118.75"
      aria-label="Banner principal"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom'
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={list.length > 1}
        className="h-full w-full"
        aria-roledescription="Banner rotativo"
      >
        {bannersOnly.map(list => (
          <SwiperSlide key={list.id}>
            <article
              className="relative w-full max-sm:h-full md:h-100 lg:h-153.75 xl:h-118.75"
              aria-label={`Slide ${list.id + 1}: ${list.title}`}
            >
              <div className="absolute inset-0 h-full w-full">
                <img
                  src={`http://localhost:1337${list?.banner?.url}`}
                  alt={list.title}
                  className="absolute inset-0 h-full w-full"
                />

                <div
                  className="absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-black/30"
                  aria-hidden="true"
                />
              </div>

              <div className="relative z-10 container mx-auto flex h-full items-center max-sm:px-12 md:px-17 lg:px-20 xl:px-8">
                <div className="grid w-full grid-cols-1 items-center gap-8 md:flex lg:grid-cols-2 lg:gap-12">
                  <div className="max-w-2xl space-y-6 text-white">
                    <header className="w-[80%]">
                      <h1
                        style={{
                          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)'
                        }}
                        className="text-4xl text-[32px] leading-tight font-bold max-sm:text-[22px]"
                      >
                        {list.title}
                      </h1>
                    </header>
                    <Link
                      label="Acessar"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`/noticias/${list.documentId}`}
                      className="flex h-8.75 w-39.5 items-center justify-center rounded-3xl bg-[#FD0003] text-[14px] font-semibold text-white transition-colors hover:bg-red-700 max-sm:h-8 max-sm:w-32"
                    >
                      Acessar
                    </Link>
                  </div>

                  <div className="hidden lg:block" aria-hidden="true" />
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}

        <button
          className="swiper-button-prev-custom absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center transition-all duration-300"
          aria-label="Slide anterior"
        >
          <Image
            src="/icons/caret-left-icon-black.svg"
            alt="Slide anterior"
            width={14}
            height={7}
            className="ml-auto h-auto w-auto max-sm:mr-2.25 md:mr-3.25 lg:mr-5"
          />
          <span className="sr-only">Ir para o list anterior</span>
        </button>

        <button
          className="swiper-button-next-custom absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center transition-all duration-300"
          aria-label="Próximo list"
        >
          <Image
            src="/icons/caret-right-icon-black.svg"
            alt="Próximo list"
            width={14}
            height={7}
            className="mr-auto h-auto w-auto max-sm:ml-2.25 md:ml-3.25 lg:ml-5"
          />
          <span className="sr-only">Ir para o próximo list</span>
        </button>

        <div
          className="swiper-pagination-custom z-20 container mx-auto flex justify-end gap-3 px-6"
          role="group"
          aria-label="Indicadores de slides"
        />
      </Swiper>
    </section>
  )
}
