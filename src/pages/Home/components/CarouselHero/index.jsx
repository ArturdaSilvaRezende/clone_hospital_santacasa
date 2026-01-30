'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import './styles.css'
import CustomLink from '~/components/CustomComponents/Link'

export default function CarouselHero() {
  const slides = [
    {
      id: 1,
      title: 'Santa Casa lança edital de Aperfeiçoamento em Saúde',
      description:
        'O HOSPITAL SANTA CASA DE MISERICÓRDIA DE GOIÂNIA/GO, por intermédio da sua superintendência geral, no uso de suas atribuições legais, mediante as condições estipuladas neste edital, torna público a realização do processo seletivo para provimento do quadro destinado à formação de profissionais de nível superior e técnico interessados em participar dos Cursos de Aperfeiçoamento Profissional – Edição 2026/1.',
      image: '/banner.jpg',
      alt: 'Banner principal mostrando nossos serviços'
    },
    {
      id: 2,
      title: 'Inovação e Tecnologia',
      description:
        'Transforme sua empresa com as mais modernas ferramentas do mercado',
      image: '/banner.jpg',
      alt: 'Tecnologia e inovação para seu negócio'
    },
    {
      id: 3,
      title: 'Atendimento Especializado',
      description:
        'Nossa equipe está pronta para oferecer o melhor suporte e consultoria',
      image: '/banner.jpg',
      alt: 'Equipe especializada em atendimento'
    }
  ]

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
        loop={true}
        className="h-full w-full"
        aria-roledescription="carrossel"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <article className="relative h-full w-full">
              {/* Imagem de fundo */}
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                  quality={90}
                />
                {/* Overlay escuro */}
                <div
                  className="absolute inset-0 bg-black/60"
                  aria-hidden="true"
                />
              </div>

              {/* Conteúdo */}
              <div className="relative z-10 container mx-auto flex h-full max-w-285 items-center">
                <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Texto à esquerda */}
                  <div className="max-w-2xl space-y-6 text-white">
                    <header>
                      <h1 className="text-4xl text-[32px] leading-tight font-bold">
                        {slide.title}
                      </h1>
                    </header>

                    <p className="text-lg text-[16px] leading-relaxed text-gray-200">
                      {slide.description}
                    </p>

                    <CustomLink
                      label="Acessar"
                      //href="/contato"
                      classNameContainer="w-[158px] bg-[#FD0003] hover:bg-red-700"
                      classNameLink="w-full"
                    />
                  </div>

                  {/* Espaço para imagem à direita (em telas grandes) */}
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
            className="mr-5 ml-auto"
          />
          <span className="sr-only">Ir para o slide anterior</span>
        </button>

        <button
          className="swiper-button-next-custom absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center transition-all duration-300"
          aria-label="Próximo slide"
        >
          <Image
            src="/icons/caret-right-icon-black.svg"
            alt="Slide anterior"
            width={14}
            height={7}
            className="mr-auto ml-5"
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
