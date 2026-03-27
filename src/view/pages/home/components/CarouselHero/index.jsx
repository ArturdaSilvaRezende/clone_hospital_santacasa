'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Link from 'next/link'
import { api } from '~/services/api'

import './styles.css'

export default function CarouselHero() {
  const [list, setList] = useState([])
  const [info, setInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  async function load() {
    try {
      setIsLoading(true)
      const result = await api.get('/news-detach?limit=100')

      if (result.data?.list.length > 0) {
        setList(result.data?.list || [])
        setInfo(result.data?.list[0])
      }
    } catch (err) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <section
      className="relative h-138.75 md:h-100 lg:h-153.75 xl:h-138.75 w-full bg-black"
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
        {list.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <article
              className="relative w-full max-sm:h-full md:h-100 lg:h-153.75 xl:h-138.75"
              aria-label={`Slide ${index + 1}: ${slide.title}`}
            >
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={slide.url}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full"
                  loading="eager"
                />

                <div
                  className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 
                  to-black/10"
                  aria-hidden="true"
                />
              </div>

              <div className="relative z-10 container mx-auto flex h-full items-center max-sm:px-12 md:px-17 lg:px-20 xl:px-8">
                <div className="grid w-full grid-cols-1 items-center gap-8 md:flex lg:grid-cols-2 lg:gap-12">
                  <div className="max-w-2xl space-y-6 text-white">
                    <header>
                      <h1
                        style={{
                          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)'
                        }}
                        className="text-4xl text-[32px] leading-tight font-bold max-sm:text-[22px]"
                      >
                        {slide.title}
                      </h1>
                    </header>

                    <p
                      style={{ textShadow: '0 0 8px #000' }}
                      className="text-lg text-[16px] text-white max-sm:text-[13px]"
                    >
                      {slide.description}
                    </p>

                    <Link
                      label="Acessar"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`/noticias/${slide.id}`}
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
          <span className="sr-only">Ir para o slide anterior</span>
        </button>

        <button
          className="swiper-button-next-custom absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center transition-all duration-300"
          aria-label="Próximo slide"
        >
          <Image
            src="/icons/caret-right-icon-black.svg"
            alt="Próximo slide"
            width={14}
            height={7}
            className="mr-auto h-auto w-auto max-sm:ml-2.25 md:ml-3.25 lg:ml-5"
          />
          <span className="sr-only">Ir para o próximo slide</span>
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
