'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

const projetos = [
  {
    id: 1,
    categoria: 'Educação',
    nome: 'Escola Comunitária',
    descricao:
      'Pequena descrição detalhada do projeto descrevendo como a ideia do projeto, e por que apoiar',
    imagemUrl:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    categoria: 'Saúde',
    nome: 'Centro Médico Popular',
    descricao:
      'Pequena descrição detalhada do projeto descrevendo como a ideia do projeto, e por que apoiar',
    imagemUrl:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    categoria: 'Meio Ambiente',
    nome: 'Reflorestamento Urbano',
    descricao:
      'Pequena descrição detalhada do projeto descrevendo como a ideia do projeto, e por que apoiar',
    imagemUrl:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    categoria: 'Assistência Social',
    nome: 'Casa de Acolhimento',
    descricao:
      'Pequena descrição detalhada do projeto descrevendo como a ideia do projeto, e por que apoiar',
    imagemUrl:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    categoria: 'Cultura',
    nome: 'Biblioteca Comunitária',
    descricao:
      'Pequena descrição detalhada do projeto descrevendo como a ideia do projeto, e por que apoiar',
    imagemUrl:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    categoria: 'Esporte',
    nome: 'Academia ao Ar Livre',
    descricao:
      'Pequena descrição detalhada do projeto descrevendo como a ideia do projeto, e por que apoiar',
    imagemUrl:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop'
  },
  {
    id: 7,
    categoria: 'Tecnologia',
    nome: 'Inclusão Digital',
    descricao:
      'Pequena descrição detalhada do projeto descrevendo como a ideia do projeto, e por que apoiar',
    imagemUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
  },
  {
    id: 8,
    categoria: 'Alimentação',
    nome: 'Horta Comunitária',
    descricao:
      'Pequena descrição detalhada do projeto descrevendo como a ideia do projeto, e por que apoiar',
    imagemUrl:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop'
  },
  {
    id: 9,
    categoria: 'Moradia',
    nome: 'Reforma de Casas',
    descricao:
      'Pequena descrição detalhada do projeto descrevendo como a ideia do projeto, e por que apoiar',
    imagemUrl:
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop'
  }
]

export default function OurProjects() {
  const swiperRef = useRef(null)
  return (
    <section className="relative mb-24 overflow-hidden px-4 pt-16">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-red-500/60 via-red-500/30 to-white pb-5" />

      <div className="relative mx-auto max-w-241.25">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-[40%] -left-20 z-10 flex h-18 w-18 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:opacity-75 focus:ring-2 focus:ring-red-600/90 focus:outline-none"
          aria-label="Slide anterior"
        >
          <Image
            src="/icons/arrow-prev-icon-red.svg"
            alt="ícone de seta para a esquerda"
            width={16}
            height={13}
          />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-[40%] -right-20 z-10 flex h-18 w-18 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:opacity-75 focus:ring-2 focus:ring-red-600/90 focus:outline-none"
          aria-label="Próximo slide"
        >
          <Image
            src="/icons/arrow-next-icon-red.svg"
            alt="ícone de seta para a direita"
            width={16}
            height={13}
          />
        </button>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          onSwiper={swiper => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1.5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom-our-projects',
            bulletActiveClass:
              'swiper-pagination-bullet-active !bg-red-600 !h-[13px] !w-[48px] !rounded-xl'
          }}
          breakpoints={{
            320: {
              slidesPerView: 1
            },

            768: {
              slidesPerView: 2
            },

            1024: {
              slidesPerView: 3
            }
          }}
          className="pb-12"
          aria-roledescription="carrossel"
        >
          {projetos.map(projeto => (
            <SwiperSlide key={projeto.id} className="pb-5">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={projeto.imagemUrl}
                    alt={`Imagem do projeto ${projeto.nome}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex grow flex-col p-6">
                  <span className="text-sm font-bold text-red-600 uppercase">
                    {projeto.categoria}
                  </span>

                  <h3 className="mb-3 text-xl font-semibold text-[#727070]">
                    {projeto.nome}
                  </h3>

                  <p className="mb-6 grow text-sm leading-relaxed text-[#404040]">
                    {projeto.descricao}
                  </p>

                  <button
                    className="h-9.25 w-full rounded-full border border-black bg-white px-6 font-medium text-gray-900 transition-colors duration-300 hover:border-[#FD0003] hover:bg-[#FD0003] hover:text-white"
                    aria-label={`Doar para o projeto ${projeto.nome}`}
                  >
                    Doar
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}

          <div
            className="swiper-pagination-custom-our-projects z-20 container mx-auto mt-7 flex justify-center gap-3 px-6"
            role="group"
            aria-label="Indicadores de slides"
          />
        </Swiper>
      </div>
    </section>
  )
}
