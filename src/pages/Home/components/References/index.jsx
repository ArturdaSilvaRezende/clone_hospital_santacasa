'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

export default function ReferenceSection() {
  const swiperRef = useRef(null)

  const statsData = [
    { id: 1, valor: '+50', rotulo: 'Especialidades Médicas' },
    { id: 2, valor: '+10.000', rotulo: 'Cirurgias Realizadas' },
    { id: 3, valor: '+100', rotulo: 'Médicos Especialistas' },
    { id: 4, valor: '24h', rotulo: 'Atendimento de Urgência' },
    { id: 5, valor: '+200', rotulo: 'Leitos Disponíveis' },
    { id: 6, valor: '95%', rotulo: 'Taxa de Sucesso' },
    { id: 7, valor: '+15', rotulo: 'Anos de Experiência' },
    { id: 8, valor: '+30', rotulo: 'Convênios Aceitos' },
    { id: 9, valor: '100%', rotulo: 'Equipamentos Modernos' },
    { id: 10, valor: '+5.000', rotulo: 'Pacientes por Mês' },
    { id: 11, valor: '+80', rotulo: 'Profissionais de Saúde' },
    { id: 12, valor: 'ISO 9001', rotulo: 'Certificação de Qualidade' },
    { id: 13, valor: '+20', rotulo: 'Salas Cirúrgicas' },
    { id: 14, valor: '1º', rotulo: 'Ranking Regional' },
    { id: 15, valor: '+300', rotulo: 'Cirurgias Cardíacas/Ano' },
    { id: 16, valor: '+150', rotulo: 'Cirurgias Vasculares/Ano' },
    { id: 17, valor: '24/7', rotulo: 'UTI Disponível' },
    { id: 18, valor: '+1000', rotulo: 'Vidas Salvas por Ano' }
  ]

  const highlights = [
    'Cirurgia Cardíaca',
    'Cirurgia Vascular',
    'Cirurgia do Aparelho Digestivo e Urologia'
  ]

  return (
    <section className="mb-20" aria-labelledby="referencias">
      <div className="container mx-auto max-w-285">
        <p className="text-sm font-medium tracking-wider text-red-600 uppercase">
          O Nosso Propósito é salvar vidas!
        </p>

        <h2 className="mb-7 text-3xl font-medium text-gray-900 md:text-4xl">
          <span className="text-red-600">Referência</span> no Estado de Goiás
          em:
        </h2>

        <div className="mb-12 flex flex-wrap gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600">
                <Image
                  src="/icons/border-check-icon-white.svg"
                  alt="ícone de check"
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-base font-normal text-[#535353]">
                {highlight}
              </span>
            </div>
          ))}
        </div>

        <div className="relative">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-[40%] -left-12 z-10 flex h-12 w-12 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-black shadow-lg transition-colors hover:bg-gray-800"
            aria-label="Slide anterior"
          >
            <Image
              src="/icons/arrow-prev-icon-white.svg"
              alt="ícone de seta para a esquerda"
              width={20}
              height={20}
            />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-[40%] -right-12 z-10 flex h-12 w-12 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-black shadow-lg transition-colors hover:bg-gray-800"
            aria-label="Próximo slide"
          >
            <Image
              src="/icons/arrow-next-icon-white.svg"
              alt="ícone de seta para a direita"
              width={20}
              height={20}
            />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={swiper => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1.5}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            // pagination={{
            //   clickable: true,
            //   bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-600'
            // }}
            breakpoints={{
              640: {
                slidesPerView: 2.5
              },
              768: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 4
              },
              1280: {
                slidesPerView: 6
              }
            }}
            className="pb-12!"
          >
            {statsData.map(stat => (
              <SwiperSlide key={stat.id}>
                <article className="relative flex h-58 flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
                  {/* Ícone de Estetoscópio no Canto Superior Direito */}
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
                    <Image
                      src="/icons/stethoscope-icon-white.svg"
                      alt="ícone de estetoscópio"
                      width={20}
                      height={20}
                    />
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="text-center">
                    <p className="mb-2 text-4xl font-bold text-gray-900">
                      {stat.valor}
                    </p>
                    <p className="text-sm leading-tight text-gray-600">
                      {stat.rotulo}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
