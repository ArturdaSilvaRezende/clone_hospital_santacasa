'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const MOCK_BOOKS = [
  {
    id: 1,
    title: 'Biblioteca Clássica',
    url: '/banner-espaco-graduacao.png'
  },
  {
    id: 2,
    title: 'Leitura Moderna',
    url: '/banner-espaco-graduacao.png'
  },
  {
    id: 3,
    title: 'Estudos Acadêmicos',
    url: '/banner-espaco-graduacao.png'
  },
  {
    id: 4,
    title: 'Arquivo Histórico',
    url: '/banner-espaco-graduacao.png'
  }
]

export default function Carousel() {
  return (
    <div className="group relative max-sm:w-full md:w-[90%] lg:w-[55%]">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        role="region"
        aria-label="Carrossel de Livros e Bibliotecas"
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom'
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
          renderBullet: (index, className) => {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          }
        }}
        className="overflow-hidden rounded-3xl"
      >
        {MOCK_BOOKS.map(book => (
          <SwiperSlide key={book.id}>
            <div className="relative aspect-auto h-100 w-full max-sm:h-50 md:h-90">
              <Image
                src={book.url}
                alt={book.title}
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="swiper-button-prev-custom absolute top-1/2 -left-6 z-10 flex h-12 w-12 -translate-y-[110%] items-center justify-center rounded-full border border-[#535353]/30 bg-white text-gray-800 shadow-lg transition-all outline-none hover:scale-110 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 max-sm:-left-2.5"
        aria-label="Slide anterior"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        className="swiper-button-next-custom absolute border border-[#535353]/30 top-1/2 -right-6 z-10 flex h-12 w-12 -translate-y-[110%] items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-all outline-none hover:scale-110 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 max-sm:-right-2.5"
        aria-label="Próximo slide"
      >
        <IoIosArrowForward size={24} />
      </button>

      <div className="swiper-pagination-custom mt-6 flex justify-center gap-2" />

      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 80px !important;
          height: 50px !important;
          border-radius: 8px !important;
          background-size: cover !important;
          background-position: center !important;
          opacity: 0.5 !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          border: 2px solid transparent !important;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          border-color: #3b82f6 !important;
          transform: scale(1.1);
        }

        .swiper-pagination-bullet:nth-child(1) {
          background-image: url('${MOCK_BOOKS[0].url}');
        }
        .swiper-pagination-bullet:nth-child(2) {
          background-image: url('${MOCK_BOOKS[1].url}');
        }
        .swiper-pagination-bullet:nth-child(3) {
          background-image: url('${MOCK_BOOKS[2].url}');
        }
        .swiper-pagination-bullet:nth-child(4) {
          background-image: url('${MOCK_BOOKS[3].url}');
        }
      `}</style>
    </div>
  )
}
