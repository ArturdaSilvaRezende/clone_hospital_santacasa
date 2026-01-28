'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import CustomLink from '~/components/CustomComponents/Link'

const newsData = [
  {
    id: 1,
    image: '/banner-latest-news.png',
    date: '2026-01-25',
    title:
      'Nova tecnologia promete revolucionar o mercado de energia renovável',
    excerpt:
      'Pesquisadores desenvolvem painéis solares com eficiência 40% superior aos modelos tradicionais, tornando a energia limpa mais acessível.',
    slug: 'nova-tecnologia-energia-renovavel'
  },
  {
    id: 2,
    image: '/banner-latest-news.png',
    date: '2026-01-24',
    title: 'Startup brasileira recebe investimento recorde de US$ 50 milhões',
    excerpt:
      'Empresa de tecnologia focada em inteligência artificial para saúde atrai atenção de investidores internacionais e expande operações.',
    slug: 'startup-brasileira-investimento-recorde'
  },
  {
    id: 3,
    image: '/banner-latest-news.png',
    date: '2026-01-23',
    title:
      'Mercado financeiro registra crescimento expressivo no primeiro trimestre',
    excerpt:
      'Bolsa de valores atinge marca histórica impulsionada por empresas de tecnologia e setor de serviços, superando expectativas dos analistas.',
    slug: 'mercado-financeiro-crescimento-trimestre'
  },
  {
    id: 4,
    image: '/banner-latest-news.png',
    date: '2026-01-22',
    title: 'Governo anuncia novo programa de incentivo à inovação tecnológica',
    excerpt:
      'Iniciativa visa apoiar startups e empresas de base tecnológica com linhas de crédito facilitadas e redução de impostos para o setor.',
    slug: 'governo-programa-incentivo-inovacao'
  },
  {
    id: 5,
    image: '/banner-latest-news.png',
    date: '2026-01-21',
    title: 'Setor de e-commerce apresenta crescimento de 35% em vendas anuais',
    excerpt:
      'Mudança nos hábitos de consumo e investimentos em logística impulsionam expansão do comércio eletrônico em todo o país.',
    slug: 'ecommerce-crescimento-vendas-anuais'
  },
  {
    id: 6,
    image: '/banner-latest-news.png',
    date: '2026-01-20',
    title: 'Empresas adotam modelo híbrido de trabalho como padrão permanente',
    excerpt:
      'Pesquisa revela que 78% das organizações mantêm flexibilidade para colaboradores, aumentando produtividade e satisfação das equipes.',
    slug: 'empresas-modelo-hibrido-trabalho'
  },
  {
    id: 7,
    image: '/banner-latest-news.png',
    date: '2026-01-19',
    title: 'Investimentos em infraestrutura atingem R$ 120 bilhões no ano',
    excerpt:
      'Obras de modernização em rodovias, portos e aeroportos recebem aportes significativos visando melhorar competitividade do país.',
    slug: 'investimentos-infraestrutura-bilhoes'
  },
  {
    id: 8,
    image: '/banner-latest-news.png',
    date: '2026-01-18',
    title:
      'Setor de educação online cresce 45% e transforma mercado educacional',
    excerpt:
      'Plataformas digitais de ensino expandem oferta de cursos e capacitações, democratizando acesso à educação de qualidade para milhões.',
    slug: 'educacao-online-cresce-transforma-mercado'
  },
  {
    id: 9,
    image: '/banner-latest-news.png',
    date: '2026-01-17',
    title:
      'Índice de confiança do consumidor alcança maior patamar dos últimos anos',
    excerpt:
      'Recuperação econômica e controle da inflação contribuem para otimismo da população, impulsionando vendas no varejo e serviços.',
    slug: 'indice-confianca-consumidor-patamar'
  }
]

export default function LatestNews() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="mt-24 mb-10" aria-labelledby="latest-news-heading">
      <div className="container mx-auto max-w-285 px-20">
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
            onBeforeInit={swiper => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }
            }}
            navigation
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
            {newsData.map(news => (
              <SwiperSlide key={news.id} className="pb-5">
                <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
                  <div className="relative h-48 w-full bg-gray-200">
                    <Image
                      src={news.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex grow flex-col p-6">
                    <time
                      dateTime={news.date}
                      className="mb-3 text-sm text-gray-500"
                    >
                      {new Date(news.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>

                    <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900">
                      {news.title}
                    </h3>

                    <p className="mb-4 line-clamp-3 grow text-gray-600">
                      {news.excerpt}
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
            ref={prevRef}
            className="swiper-button-prev-custom-latest-news absolute top-1/2 -left-10 z-10 flex h-8.75 w-8.75 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#262626] text-gray-800 shadow-lg transition hover:opacity-75 focus:ring-4 focus:ring-gray-700 focus:outline-none"
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
            ref={nextRef}
            className="swiper-button-next-custom-latest-news absolute top-1/2 -right-10 z-10 flex h-8.75 w-8.75 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#262626] text-gray-800 shadow-lg transition hover:opacity-75 focus:ring-4 focus:ring-gray-700 focus:outline-none"
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
