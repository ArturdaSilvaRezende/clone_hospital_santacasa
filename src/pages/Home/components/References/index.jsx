'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import {
  FaStethoscope,
  FaUsers,
  FaUserMd,
  FaHeartbeat,
  FaClock,
  FaBed,
  FaChartLine,
  FaAward,
  FaHospital,
  FaTools,
  FaUserNurse,
  FaCertificate,
  FaHospitalAlt,
  FaTrophy,
  FaProcedures,
  FaHeart
} from 'react-icons/fa'

import Image from 'next/image'

export default function ReferenceSection() {
  const swiperRef = useRef(null)

  const statsData = [
    {
      id: 1,
      valor: '+50',
      rotulo: 'Especialidades Médicas',
      icon: <FaStethoscope size={20} color="#fff" />
    },
    {
      id: 2,
      valor: '+10.000',
      rotulo: 'Cirurgias Realizadas',
      icon: <FaHeartbeat size={20} color="#fff" />
    },
    {
      id: 3,
      valor: '+100',
      rotulo: 'Médicos Especialistas',
      icon: <FaUserMd size={20} color="#fff" />
    },
    {
      id: 4,
      valor: '24h',
      rotulo: 'Atendimento de Urgência',
      icon: <FaClock size={20} color="#fff" />
    },
    {
      id: 5,
      valor: '+200',
      rotulo: 'Leitos Disponíveis',
      icon: <FaBed size={20} color="#fff" />
    },
    {
      id: 6,
      valor: '95%',
      rotulo: 'Taxa de Sucesso',
      icon: <FaChartLine size={20} color="#fff" />
    },
    {
      id: 7,
      valor: '+15',
      rotulo: 'Anos de Experiência',
      icon: <FaAward size={20} color="#fff" />
    },
    {
      id: 8,
      valor: '+30',
      rotulo: 'Convênios Aceitos',
      icon: <FaHospital size={20} color="#fff" />
    },
    {
      id: 9,
      valor: '100%',
      rotulo: 'Equipamentos Modernos',
      icon: <FaTools size={20} color="#fff" />
    },
    {
      id: 10,
      valor: '+5.000',
      rotulo: 'Pacientes por Mês',
      icon: <FaUsers size={20} color="#fff" />
    },
    {
      id: 11,
      valor: '+80',
      rotulo: 'Profissionais de Saúde',
      icon: <FaUserNurse size={20} color="#fff" />
    },
    {
      id: 12,
      valor: 'ISO 9001',
      rotulo: 'Certificação de Qualidade',
      icon: <FaCertificate size={20} color="#fff" />
    },
    {
      id: 13,
      valor: '+20',
      rotulo: 'Salas Cirúrgicas',
      icon: <FaHospitalAlt size={20} color="#fff" />
    },
    {
      id: 14,
      valor: '1º',
      rotulo: 'Ranking Regional',
      icon: <FaTrophy size={20} color="#fff" />
    },
    {
      id: 15,
      valor: '+300',
      rotulo: 'Cirurgias Cardíacas/Ano',
      icon: <FaHeartbeat size={20} color="#fff" />
    },
    {
      id: 16,
      valor: '+150',
      rotulo: 'Cirurgias Vasculares/Ano',
      icon: <FaProcedures size={20} color="#fff" />
    },
    {
      id: 17,
      valor: '24/7',
      rotulo: 'UTI Disponível',
      icon: <FaHospital size={20} color="#fff" />
    },
    {
      id: 18,
      valor: '+1000',
      rotulo: 'Vidas Salvas por Ano',
      icon: <FaHeart size={20} color="#fff" />
    }
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
            className="absolute top-[40%] -left-12 z-10 flex h-8.75 w-8.75 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-[#262626] shadow-lg transition hover:opacity-75 focus:ring-4 focus:ring-gray-700 focus:outline-none"
            aria-label="Slide anterior"
          >
            <Image
              src="/icons/arrow-prev-icon-white.svg"
              alt="ícone de seta para a esquerda"
              width={16}
              height={13}
            />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-[40%] -right-12 z-10 flex h-8.75 w-8.75 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-[#262626] shadow-lg transition hover:opacity-75 focus:ring-4 focus:ring-gray-700 focus:outline-none"
            aria-label="Próximo slide"
          >
            <Image
              src="/icons/arrow-next-icon-white.svg"
              alt="ícone de seta para a direita"
              width={16}
              height={13}
            />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={swiper => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1.5}
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
            aria-roledescription="carrossel"
          >
            {statsData.map(stat => (
              <SwiperSlide key={stat.id}>
                <article className="relative flex h-58 flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
                    {stat.icon}
                  </div>

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
