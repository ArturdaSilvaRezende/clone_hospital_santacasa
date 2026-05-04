'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import './styles.css'


export default function Carousel() {
  const id = useId()

  return (
    <section className="h-138.75 w-full" aria-label="Voluntariado">
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
        loop={true}
        className="h-full w-full"
        aria-roledescription="Voluntariado"
      >
        <SwiperSlide>
          <article
            className="relative w-full max-sm:h-full md:h-123.75 lg:h-123.75 xl:h-153.75"
            aria-labelledby={`${id}-slide-1-title`}
          >
            <div className="absolute inset-0 h-full w-full">
              <div
                className="h-full w-full bg-cover bg-center max-sm:bg-position-[left_500px_center]"
                style={{
                  backgroundImage: "url('/images/banner-blood-bank.svg')",
                  backgroundColor: '#BE3131'
                }}
                role="img"
                aria-label="Médica sorrindo segurando uma prancheta vermelha"
              />

              <div
                className="absolute inset-0 bg-black/60 md:hidden"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10 container mr-auto flex h-full items-center max-sm:px-12 md:h-[85%] md:w-[70%] md:px-17 lg:h-full lg:w-[55%] lg:px-20 xl:pl-20">
              <div>
                <header className="text-white">
                  <h2 className="text-[16px] font-medium text-[#FD0003] uppercase" >
                    Voluntariado
                  </h2>
                  <h1 className="my-1 flex flex-col text-[32px] leading-[1.1] font-medium max-sm:text-[22px]" id={`${id}-slide-1-title`}>
                    <span>Acenda o seu melhor e</span>
                    <span>aqueça o coração do seu próximo</span>
                  </h1>
                </header>
                <p className="mt-3 text-[16px] leading-relaxed text-[#EDECEC] text-shadow-red-950 max-sm:text-[13px]">
                  Uma rede de voluntários e doadores que leva acolhimento aos
                  pacientes, arrecada itens essenciais e mobiliza iniciativas
                  solidárias para fortalecer a Santa Casa de Goiânia.
                </p>
              </div>
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article
            className="relative w-full max-sm:h-full md:h-123.75 lg:h-123.75 xl:h-153.75"
            aria-label="Slide 1: Voluntariado"
          >
            <div className="absolute inset-0 h-full w-full">
              <div
                className="h-full w-full bg-cover bg-center max-sm:bg-position-[left_500px_center]"
                style={{
                  backgroundImage: "url('/images/banner-blood-bank.svg')",
                  backgroundColor: '#BE3131'
                }}
                role="img"
                aria-label="Médica sorrindo segurando uma prancheta vermelha"
              />

              <div
                className="absolute inset-0 bg-black/60 md:hidden"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10 container mr-auto flex h-full items-center max-sm:px-12 md:h-[85%] md:w-[70%] md:px-17 lg:h-full lg:w-[55%] lg:px-20 xl:pl-20">
              <div>
                <header className="text-white">
                  <h2 className="text-[16px] font-medium text-[#FD0003] uppercase">
                    Voluntariado
                  </h2>
                  <h1 className="my-1 flex flex-col text-[32px] leading-[1.1] font-medium max-sm:text-[22px]">
                    <span>Transforme vidas com sua doação!</span>
                    <span>Cada gesto conta</span>
                  </h1>
                </header>
                <p className="mt-3 text-[16px] leading-relaxed text-[#EDECEC] text-shadow-red-950 max-sm:text-[13px]">
                  A corrente do bem com pessoas que doam artigos pessoais à
                  Santa Casa de Misericórdia de Goiânia faz acontecer, por
                  exemplo, o Bazar da Generosidade, cuja renda é revertida no
                  custeio da instituição filantrópica.
                </p>
              </div>
            </div>
          </article>
        </SwiperSlide>

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
