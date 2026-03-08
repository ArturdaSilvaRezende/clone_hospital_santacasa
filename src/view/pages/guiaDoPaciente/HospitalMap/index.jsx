import Image from 'next/image'

export default function HospitalMap() {
  return (
    <section className="w-full bg-white py-12 mb-16" aria-label="Mapa do Hospital">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="mb-10 text-center text-[36px] font-semibold text-black max-sm:text-[28px]">
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
