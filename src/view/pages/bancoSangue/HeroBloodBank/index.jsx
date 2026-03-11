'use client'

import Image from 'next/image'
import { FaWhatsapp, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa'

export default function HeroBloodBank() {
  return (
    <section
      className="relative flex min-h-125 w-full items-center justify-center px-4 py-16"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-visita-ao-banco-de-sangue.jpg"
          alt="Profissional de saúde no Banco de Sangue"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <header className="mb-8">
          <p className="mb-2 text-sm font-bold tracking-widest text-white uppercase">
            Horários de Atendimento
          </p>
          <h1
            id="hero-title"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Visite o Banco de Sangue da SCMG
          </h1>
        </header>

        <article
          className="w-full max-w-lg rounded-2xl bg-[#D32F2F] p-6 text-white shadow-2xl md:p-8"
          aria-label="Informações de contato e horários"
        >
          <div className="flex flex-col gap-6 text-left">
            <div className="flex items-center gap-3 border-b border-white/20 pb-4">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white font-bold text-[#D32F2F]"
                aria-hidden="true"
              >
                D
              </span>
              <h2 className="text-lg font-semibold">
                Doações — Banco de Sangue
              </h2>
            </div>

            <div className="flex items-start gap-4">
              <FaWhatsapp
                className="mt-1 shrink-0 text-xl"
                aria-hidden="true"
              />
              <a
                href="tel:6232544283"
                className="transition-all hover:underline"
                aria-label="Ligar para (62) 3254-4283"
              >
                (62) 3254-4283
              </a>
            </div>

            <div className="space-y-4 border-t border-white/20 pt-4">
              <div className="flex items-start gap-4">
                <FaRegClock
                  className="mt-1 shrink-0 text-xl"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium">7h às 12h, 13h às 16h</p>
                  <p className="text-sm opacity-90">Segunda a Quinta</p>
                </div>
              </div>

              <div className="ml-9 flex items-start gap-4 md:ml-9">
                <div>
                  <p className="font-medium">7h às 12h, 13h às 15h</p>
                  <p className="text-sm opacity-90">Sexta-feira</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-white/20 pt-4">
              <FaMapMarkerAlt
                className="mt-1 shrink-0 text-xl"
                aria-hidden="true"
              />
              <address className="text-sm not-italic opacity-90 md:text-base">
                R. Campinas, 1135, Vila Americano do Brasil, Goiânia - GO,
                74530-240
              </address>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
