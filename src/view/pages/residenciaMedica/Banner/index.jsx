import Image from 'next/image'

export default function Banner() {
  return (
    <section
      className="relative w-full bg-white max-sm:h-max md:flex md:h-120 md:items-center lg:block lg:h-140 xl:h-110"
      aria-label="Residência Médica"
    >
      <div className="container flex items-center justify-center max-sm:flex-col md:mx-auto lg:mx-0 lg:max-w-none">
        <div className="z-10 container mx-auto max-sm:order-2 max-sm:mt-5 max-sm:mb-8 max-sm:w-full max-sm:px-6 md:w-full md:px-8 lg:w-150.5 lg:pl-10 xl:pl-4">
          <h2 className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase">
            Residência Médica
          </h2>

          <h1 className="leading-tight font-medium text-black max-sm:mb-5 max-sm:w-full max-sm:text-[28px] md:mb-5 md:text-[20px] md:text-white lg:mb-2 lg:w-[90%] lg:text-[32px] lg:text-black">
            Compromisso com a Humanização do Ensino
          </h1>

          <div className="space-y-3">
            <p className="text-[16px] font-normal text-[#727070] max-sm:text-[14px] md:text-white lg:text-[#727070]">
              Credenciada pelo MEC pelo Ofício nº 4.417/91, a Coreme da Santa
              Casa é reconhecida como uma das melhores de Goiás, oferecendo
              formações disputadas em mais de dez cursos de especialização.
            </p>

            <p className="text-[16px] font-normal text-[#727070] max-sm:text-[14px] md:text-white lg:text-[#727070]">
              A Santa Casa oferece 13 programas de residência médica
              credenciados pelo MEC, incluindo áreas como cirurgia geral,
              urologia, cirurgia vascular, nefrologia e cardiologia.
            </p>

            <p className="font-normal text-[#727070] max-sm:text-[14px] md:text-white lg:text-[16px] lg:text-[#727070]">
              O concurso de residência médica da Santa Casa é um dos mais
              disputados de Goiás e exige dos residentes, mesmo com bolsa, uma
              rotina intensa de horários, plantões, aulas, participação em
              eventos e produção anual de trabalho científico.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden bg-[#BE3131] max-sm:hidden lg:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('/images/banner-section-residencia-medica.svg')",
              backgroundPosition: '170px center'
            }}
            role="img"
            aria-label="Médica sorrindo segurando uma prancheta vermelha"
          />

          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        </div>

        <div className="relative w-175 max-sm:h-75 max-sm:w-full md:hidden md:h-auto lg:block lg:h-140 xl:h-110">
          <Image
            src="/images/banner-section-residencia-medica.svg"
            alt="Residência Médica"
            fill
            className="rounded-tl-[60px] object-cover object-center max-sm:h-auto max-sm:w-full max-sm:rounded-tl-none max-sm:rounded-bl-[60px]"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
