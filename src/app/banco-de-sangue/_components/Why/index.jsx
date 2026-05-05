'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { MdKeyboardArrowRight } from 'react-icons/md'
import './styles.css'

export default function Why() {
  const id = useId()

  return (
    <section
      className="relative -top-4 h-138.75 w-full"
      aria-labelledby={`${id}-donate-blood`}
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
        aria-roledescription="Por que doar sangue?"
      >
        <SwiperSlide>
          <article
            className="relative w-full max-sm:h-full md:h-153.75 lg:h-153.75"
            aria-label="Slide 1: Por que doar sangue?"
          >
            <div className="absolute inset-0 h-full w-full">
              <Image
                src="/images/banner-blood-bank.svg"
                alt="Banner Banco de Sangue"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="relative z-10 container mr-auto flex h-full items-center max-sm:px-12 md:px-17 lg:w-[55%] lg:px-20 xl:pl-20">
              <div className="grid w-full grid-cols-1 items-center gap-8 md:flex lg:grid-cols-2 lg:gap-12">
                <div className="max-w-2xl space-y-4 text-white">
                  <header>
                    <h2
                      className="text-[16px] font-semibold text-[#FD0003] uppercase"
                      id={`${id}-donate-blood`}
                    >
                      Banco de Sangue
                    </h2>
                    <h1 className="flex flex-col text-[32px] leading-[1.1] font-medium max-sm:text-[22px]">
                      <span>Um pequeno gesto,</span>
                      <span>uma grande esperança</span>
                    </h1>
                  </header>

                  <div>
                    <h3 className="text-[22px] font-medium text-white">
                      Por que doar sangue?
                    </h3>
                    <p className="text-[16px] leading-relaxed text-[#EDECEC] text-shadow-red-950 max-sm:text-[13px]">
                      O sangue é fundamental para ajudar no tratamento de
                      inúmeros casos. Veja alguns:
                    </p>
                  </div>

                  <nav>
                    <ul>
                      <li className="flex gap-1 text-[1rem] font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>
                          Vítimas de acidentes de trânsito e queimaduras.
                        </span>
                      </li>
                      <li className="flex gap-1 text-[1rem] font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>
                          Pacientes hemofílicos, isto é, com desordem no
                          mecanismo de coagulação do sangue;
                        </span>
                      </li>
                      <li className="flex gap-1 text-[1rem] font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>
                          Pacientes que serão submetidos a cirurgias de médio e
                          grande porte
                        </span>
                      </li>
                      <li className="gap-1text-[1rem] flex font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>Pacientes que sofreram hemorragias.</span>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="hidden lg:block" aria-hidden="true" />
              </div>
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article
            className="relative w-full max-sm:h-full md:h-153.75 lg:h-153.75"
            aria-label="Slide 1: Por que doar sangue?"
          >
            <div className="absolute inset-0 h-full w-full">
              <Image
                src="/images/banner-blood-bank.svg"
                alt="Banner Banco de Sangue"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="relative z-10 container mr-auto flex h-full items-center max-sm:px-12 md:px-17 lg:w-[60%] lg:px-20 xl:pl-20">
              <div className="grid w-full grid-cols-1 items-center gap-8 md:flex lg:grid-cols-2 lg:gap-12">
                <div className="max-w-2xl space-y-4 text-white">
                  <header>
                    <h2 className="text-[16px] font-semibold text-[#FD0003] uppercase">
                      Banco de Sangue
                    </h2>
                    <h1 className="flex flex-col text-[32px] leading-[1.1] font-medium max-sm:text-[22px]">
                      <span>Um pequeno gesto,</span>
                      <span>uma grande esperança</span>
                    </h1>
                  </header>

                  <div>
                    <h3 className="text-[22px] font-medium text-white">
                      Fale Conosco
                    </h3>
                    <p className="text-[16px] leading-relaxed text-[#EDECEC] text-shadow-red-950 max-sm:text-[13px]">
                      O que você precisa para doar sangue?
                    </p>
                  </div>

                  <nav>
                    <ul>
                      <li className="flex gap-1 text-[1rem] font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>Apresentar documento original com foto</span>
                      </li>
                      <li className="flex gap-1 text-[1rem] font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>Estar em boas condições de saúde</span>
                      </li>
                      <li className="flex gap-1 text-[1rem] font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>Ter entre 18 e 65 anos de idade</span>
                      </li>
                      <li className="flex gap-1 text-[1rem] font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>Pesar no mínimo 50 kg</span>
                      </li>
                      <li className="flex gap-1 text-[1rem] font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>
                          Estar alimentado (evitar alimentação gordurosa nas 4
                          horas que antecedem a doação)
                        </span>
                      </li>
                      <li className="flex gap-1 text-[1rem] font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>
                          Estar descansado (ter dormido pelo menos 6 horas nas
                          últimas 24 horas)
                        </span>
                      </li>
                      <li className="flex gap-1 text-[1rem] font-normal text-[#EDECEC]">
                        <MdKeyboardArrowRight color="#FD0003" size="20" />
                        <span>
                          Não ter tido gripe ou resfriado nos últimos 7 dias
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="hidden lg:block" aria-hidden="true" />
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
