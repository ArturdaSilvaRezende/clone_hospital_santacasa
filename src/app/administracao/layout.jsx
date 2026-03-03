import Image from 'next/image'
import CallToActionSections from '~/components/CallToAction'
import '~/app/globals.css'


export const metadata = {
  title: 'Santa casa | Estrutura Administrativa',
  description: ''
}

export default function Layout({ children }) {
  return (
    <main>
      <section
        className="w-full bg-white max-sm:h-max md:h-85 max-sm:md:h-75 lg:h-100"
        aria-labelledby="estrutura-administrativa"
      >
        <div className="flex items-center justify-center max-sm:flex-col">
          <div className="container mx-auto max-sm:order-2 max-sm:mt-5 max-sm:mb-8 max-sm:w-full max-sm:px-6 md:w-full md:pl-9 lg:w-150.5 lg:px-5">
            <h2 className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase">
              Estrutura Administrativa
            </h2>

            <h1 className="mb-2 leading-tight font-medium text-black max-sm:w-full max-sm:text-[28px] md:w-[70%] md:text-[20px] lg:w-[80%] lg:text-[32px]">
              Composição do corpo diretivo
            </h1>

            <p className="mb-5 leading-relaxed font-normal text-[#727070] max-sm:w-full max-sm:text-[14px] md:w-[90%] md:text-[13px] lg:w-130 lg:text-[16px]">
              O quadro gestor da Santa Casa de Misericórdia de Goiânia (SCMG) é
              presidido pelo arcebispo metropolitano Dom João Justino, com
              vice-presidência do bispo auxiliar Dom Levi Bonatto. Cabe ao
              presidente nomear três superintendentes (Geral, Técnica e
              Administrativa).
            </p>

            <p className="leading-relaxed font-normal text-[#727070] max-sm:w-full max-sm:text-[14px] md:w-[90%] md:text-[13px] lg:w-130 lg:text-[16px]">
              O planejamento estratégico é apresentado regularmente ao Conselho
              Consultivo, formado por representantes da Diocese de Goiânia, da
              Sociedade Goiana de Cultura/PUC-GO e das superintendências da
              SCMG.
            </p>
          </div>

          <div className="relative w-175 max-sm:h-75 max-sm:w-full md:h-85 lg:h-100">
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

      {children}
      <CallToActionSections />
    </main>
  )
}
