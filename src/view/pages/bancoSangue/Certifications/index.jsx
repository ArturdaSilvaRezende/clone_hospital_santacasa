'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Certifications() {
  const certifications = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: '/logo-acreditacao.svg',
    alt: `Certificação de Acreditação ${i + 1}`
  }))

  return (
    <section className="my-28" aria-labelledby=" Certificações">
      <div className="relative container mx-auto">
        <div className="mb-12 text-left">
          <p className="text-sm font-bold tracking-wider text-red-600 uppercase">
            Certificações
          </p>
          <h2
            id="certifications-title"
            className="text-[22px] font-bold text-black"
          >
            Veja as certificações que a Santa Casa já recebeu
          </h2>
        </div>

        {/* Container do Swiper com botões customizados */}
        <div className="group relative">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn'
            }}
            
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 }
            }}
           
            a11y={{
              prevSlideMessage: 'Slide anterior',
              nextSlideMessage: 'Próximo slide'
            }}
            className="pb-4"
          >
            {certifications.map(item => (
              <SwiperSlide key={item.id}>
                <div className="flex items-center justify-center p-2 grayscale transition-all duration-300 hover:grayscale-0">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={180}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botões de Navegação Customizados */}
          <button
            className="prev-btn absolute top-1/2 left-0 z-10 -translate-x-4 -translate-y-1/2 rounded-full border border-gray-100 bg-white p-3 text-gray-400 shadow-lg transition-colors hover:text-red-600 disabled:opacity-30"
            aria-label="Ir para certificação anterior"
          >
            <IoIosArrowBack size={24} />
          </button>

          <button
            className="next-btn absolute top-1/2 right-0 z-10 translate-x-4 -translate-y-1/2 rounded-full border border-gray-100 bg-white p-3 text-gray-400 shadow-lg transition-colors hover:text-red-600 disabled:opacity-30"
            aria-label="Ir para próxima certificação"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
