'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { dataTabs } from '../../_utils/lists'

export default function TechnicalFramework() {
  const [activeTab, setActiveTab] = useState('gerentes')

  const tabs = [
    { id: 'gerentes', label: 'Gerentes' },
    { id: 'coordenadores', label: 'Coordenadores' },
    { id: 'tecnicos', label: 'Responsáveis Técnicos' }
  ]

  return (
    <section
      className="container mx-auto mt-8 mb-14 font-sans max-sm:mt-0 max-sm:px-6 md:px-8 xl:px-0"
      aria-label="Quadro Técnico"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-black max-sm:mb-4">
        Quadro Técnico
      </h2>

      <div
        role="tablist"
        aria-label="Categorias de profissionais"
        className="mb-12 flex flex-wrap justify-center gap-4 max-sm:mb-10"
      >
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full border px-8 py-2 font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'border-[#FD0003] bg-[#FD0003] text-white'
                : 'border-[#FD0003] bg-transparent text-[#FD0003] hover:bg-[#FD0003]/10 hover:text-[#FD0003] focus:ring-2 focus:ring-[#FD0003]/50 focus:outline-none'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {dataTabs[activeTab].map((person, index) => (
          <article
            key={index}
            className="flex w-61 flex-col items-center rounded-3xl border border-[#7270701A]/10 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md max-sm:w-full md:w-full"
          >
            {person.image && (
              <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-gray-50">
                <Image
                  src={person.image}
                  alt={`Foto de ${person.name}`}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <span className="mb-2 text-[14px] font-normal tracking-wider text-[#FD0003]">
              {person.role}
            </span>

            <h3 className="mb-3 text-[16px] leading-tight font-normal text-black">
              {person.name}
            </h3>

            <p className="text-sm leading-relaxed text-[#727070]">
              {person.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
