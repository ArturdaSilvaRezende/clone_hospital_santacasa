import Image from 'next/image'

export default function Banner() {
  return (
    <section
      className="relative w-full bg-white max-sm:h-max md:h-auto md:py-16 lg:py-16 xl:py-0 max-sm:md:h-75 lg:auto"
      aria-label="estrutura-administrativa"
    >
      <div className="flex items-center justify-center max-sm:flex-col">
        <div className="z-10 container mx-auto max-sm:order-2 max-sm:mt-5 max-sm:mb-8 max-sm:w-full max-sm:px-6 md:w-[90%] lg:w-[90%] xl:w-[42%]">
          <h2 className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase">
            Estrutura Administrativa
          </h2>

          <h1 className="mb-2 leading-tight font-medium max-sm:text-black md:text-white lg:text-white xl:text-black max-sm:w-full max-sm:text-[28px] md:w-[70%] md:text-[20px] lg:w-[80%] lg:text-[32px]">
            Composição do corpo diretivo
          </h1>

          <p className="mb-5 leading-relaxed font-normal max-sm:text-[#727070] md:text-white lg:text-white xl:text-[#727070] max-sm:w-full max-sm:text-[14px] md:w-[90%] md:text-[13px] lg:w-full lg:text-[16px]">
            O quadro gestor da Santa Casa de Misericórdia de Goiânia (SCMG) é
            presidido pelo arcebispo metropolitano Dom João Justino, com
            vice-presidência do bispo auxiliar Dom Levi Bonatto. Cabe ao
            presidente nomear três superintendentes (Geral, Técnica e
            Administrativa).
          </p>

          <p className="leading-relaxed font-normal max-sm:text-[#727070] md:text-white lg:text-white xl:text-[#727070] max-sm:w-full max-sm:text-[14px] md:w-[90%] md:text-[13px] lg:w-full lg:text-[16px]">
            O planejamento estratégico é apresentado regularmente ao Conselho
            Consultivo, formado por representantes da Diocese de Goiânia, da
            Sociedade Goiana de Cultura/PUC-GO e das superintendências da SCMG.
          </p>
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden bg-[#BE3131] max-sm:hidden xl:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('/images/banner-section-administracao.svg')",
             
            }}
            role="img"
            aria-label="Médica sorrindo segurando uma prancheta vermelha"
          />

          <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        </div>

        <div className="relative w-175 max-sm:h-75 max-sm:block md:hidden lg:hidden xl:block max-sm:w-full md:h-85 lg:h-100">
          <Image
            src="/images/banner-section-administracao.svg"
            alt="Estrutura Administrativa"
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
