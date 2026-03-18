import React from 'react'

export default function MissionSection() {
  return (
    <section
      className=" bg-[#FFE2E2] py-15 md:py-10 lg:py-15 relative md:-top-15 lg:-top-15 xl:top-0"
      aria-label="Nossa Missão"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-1 xl:grid-cols-12 max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <div className="xl:col-span-4">
          <p className="text-sm font-bold tracking-wider text-[#FD000380]/70 uppercase">
            Nossa Missão
          </p>
          <h2 className="flex flex-col text-[26px] max-sm:flex-row md:flex-row lg:flex-row xl:flex-col leading-tight font-medium text-[#FD0003]">
            <span>Cuidado que</span>
            <span>transforma</span>
          </h2>
        </div>

        <div className="space-y-6 text-[14px] leading-relaxed text-[#A45757] md:col-span-8">
          <p>
            A cada dia, nossa equipe de profissionais dedicados trabalha
            incansavelmente para oferecer atendimento de qualidade a todos que
            nos procuram, independentemente de sua condição financeira. Mais de
            99% dos nossos atendimentos são realizados pelo SUS, garantindo que
            ninguém fique sem assistência. Mas para continuar essa missão,
            precisamos da sua ajuda. Cada doação, cada gesto de solidariedade
            faz a diferença na vida de quem mais precisa de cuidados durante seu
            momento de maior vulnerabilidade.
          </p>

          <div className="border-t border-red-200 pt-4">
            <p className="text-sm text-[#A4575799]/90">
              Mais de 99% dos nossos atendimentos são realizados pelo SUS. Cada
              doação, cada gesto de solidariedade faz a diferença na vida de
              quem mais precisa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
