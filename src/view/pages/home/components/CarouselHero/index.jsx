'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { api } from '~/services/api'

import CustomLink from '~/components/CustomComponents/Link'

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
      className="relative h-138.75 w-full bg-black"
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
            <article className="relative lg:h-153.75 md:h-153.75 max-sm:h-full w-full " aria-label={`Slide ${index + 1}: ${slide.title}`}>
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={slide.url}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div
                  className="absolute inset-0 bg-black/60"
                  aria-hidden="true"
                />
              </div>

              <div className="relative z-10 mx-auto flex h-full lg:px-20 xl:px-0 md:px-17 max-w-285 items-center max-sm:px-12">
                <div className="grid w-full md:flex grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className="max-w-2xl space-y-6 text-white">
                    <header>
                      <h1 className="text-4xl text-[32px] max-sm:text-[22px] leading-tight font-bold">
                        {slide.title}
                      </h1>
                    </header>

                    <p className="text-lg text-[16px] text-shadow-red-950 max-sm:text-[13px] leading-relaxed text-gray-200">
                      {slide.description}
                    </p>

                    <CustomLink
                      label="Acessar"
                      //href="/contato"
                      classNameContainer="w-[158px] bg-[#FD0003] hover:bg-red-700"
                      classNameLink="w-full"
                    />
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
            className="lg:mr-5 md:mr-3.25 ml-auto max-sm:mr-2.25"
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
            className="lg:ml-5 md:ml-3.25 mr-auto max-sm:ml-2.25"
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
