import { useId } from 'react'
import Image from 'next/image'

export default function HospitalMap() {
  const id = useId()

  return (
    <section
      className="mb-16 w-full bg-white py-12"
      aria-labelledby={`${id}-hospital-map`}
    >
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2
          className="mb-10 text-center text-[36px] font-semibold text-black max-sm:text-[28px]"
          id={`${id}-hospital-map`}
        >
          Mapa do Hospital
        </h2>
        <div className="h- relative aspect-4/3 w-full">
          <Image
            src="/images/mapa-do-hospital.svg"
            alt="Mapa ilustrativo das unidades do Hospital Tacchini, mostrando os prédios A, B, C e D em uma vista aérea."
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </div>
    </section>
  )
}
