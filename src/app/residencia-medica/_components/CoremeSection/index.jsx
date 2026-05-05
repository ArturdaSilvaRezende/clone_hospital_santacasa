import React, { useId } from 'react'
import {
  MdFavorite,
  MdFace,
  MdTimeline,
  MdKitchen,
  MdWaterDrop,
  MdPsychology
} from 'react-icons/md'
import { FaStethoscope, FaRibbon, FaAmbulance } from 'react-icons/fa'
import { GiScalpel, GiSyringe } from 'react-icons/gi'

const specialties = [
  { name: 'Anestesiologia', icon: GiSyringe },
  { name: 'Cardiologia', icon: MdFavorite },
  { name: 'Cirurgia geral', icon: GiScalpel },
  { name: 'Cirurgia plástica', icon: MdFace },
  { name: 'Cirurgia vascular', icon: MdTimeline },
  { name: 'Cirurgia do aparelho digestivo', icon: MdKitchen },
  { name: 'Clínica médica', icon: FaStethoscope },
  { name: 'Cirurgia cardiovascular', icon: MdFavorite },
  { name: 'Mastologia', icon: FaRibbon },
  { name: 'Medicina Intensiva', icon: FaAmbulance },
  { name: 'Nefrologia', icon: MdWaterDrop },
  { name: 'Neurologia clínica', icon: MdPsychology },
  { name: 'Urologia', icon: MdWaterDrop }
]

export default function CoremeSection() {
  const id = useId()
  return (
    <section className="w-full py-16" aria-labelledby={`${id}-coreme-title`}>
      <div className="container mx-auto  max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <header className="mb-6 text-center">
          <h2 className="text-[32px] font-medium tracking-tight text-[#FD0003] max-sm:text-[22px]" id={`${id}-coreme-title`}>
            A Coreme da Santa Casa dispõe dos seguintes cursos:
          </h2>
        </header>

        <div
          className="mx-auto flex container not-first:flex-wrap items-center justify-center gap-3"
          role="list"
        >
          {specialties.map((item, index) => (
            <article
              key={index}
              role="listitem"
              className="flex lg:w-100 items-center md:w-86 rounded-2xl border border-[#727070]/10 bg-white px-5 py-4 max-sm:w-full"
            >
              <div
                className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E30613]"
                aria-hidden="true"
              >
                <item.icon className="text-2xl text-white" />
              </div>

              <span className="text-[18px] leading-snug font-normal text-[#2F2E41]">
                {item.name}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
