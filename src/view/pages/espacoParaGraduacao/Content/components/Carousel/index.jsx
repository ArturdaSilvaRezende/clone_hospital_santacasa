import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Dados Mockados (Pexels)
const MOCK_BOOKS = [
  {
    id: 1,
    title: 'Biblioteca Clássica',
    url: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg'
  },
  {
    id: 2,
    title: 'Leitura Moderna',
    url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
  },
  {
    id: 3,
    title: 'Estudos Acadêmicos',
    url: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg'
  },
  {
    id: 4,
    title: 'Arquivo Histórico',
    url: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg'
  }
]

export default function Carousel() {
  return (
    <div className="group relative mx-auto w-full max-w-5xl px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        // Configurações de Acessibilidade
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
        className="overflow-hidden rounded-3xl shadow-2xl"
      >
        {MOCK_BOOKS.map(book => (
          <SwiperSlide key={book.id}>
            <div className="relative aspect-video h-[400px] w-full md:h-[500px]">
              <Image
                src={book.url}
                alt={book.title}
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Overlay para facilitar a leitura se houver texto */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de Navegação Customizados (Baseados na imagem) */}
      <button
        className="swiper-button-prev-custom absolute top-1/2 left-6 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition-all outline-none hover:scale-110 hover:bg-white focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        aria-label="Slide anterior"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        className="swiper-button-next-custom absolute top-1/2 right-6 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition-all outline-none hover:scale-110 hover:bg-white focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        aria-label="Próximo slide"
      >
        <IoIosArrowForward size={24} />
      </button>

      {/* Miniaturas / Paginação Customizada */}
      <div className="swiper-pagination-custom mt-6 flex justify-center gap-2" />

      {/* Estilos Globais Customizados para o Swiper */}
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
        /* Mapeando as imagens do mock para os bullets (exemplo simplificado) */
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
