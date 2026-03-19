import Link from 'next/link'
import BannerSection from '~/components/BannerSection'

export default function Banner() {
  return (
    <section
      className="w-full max-sm:my-5 md:my-10 lg:my-16"
      aria-label="Seção do Banner de Doação "
    >
      <BannerSection
        image="/images/banner-section-doar.svg"
        alt="Profissionais de saúde da Santa Casa em atendimento"
        title="Com R$1,00/dia"
        subtitle="Você nos ajuda a comprar:"
        description={
          <li className="text-[14px] leading-relaxed opacity-95">
            1 rolo de pintura, ou 4 pincéis, ou 3 fitas crepe, ou 2 pacotes de
            rejunte de 1kg
          </li>
        }
      >
        <h2 className="mb-1 text-[16px] font-semibold text-[#FD0003] uppercase">
          Doar
        </h2>

        <h1 className="font-medium text-black max-sm:mb-3 max-sm:text-[28px] max-sm:leading-[1.1] md:text-[23px] xl:text-[32px]">
          <span className="block">Cada gesto conta.</span>
          <span className="relative -top-3 max-sm:static max-sm:top-0">
            Transforme vidas com sua doação!
          </span>
        </h1>

        <p className="text-[16px] font-normal text-[#727070]">
          Seja a mudança que o mundo precisa ver. Seja a esperança para aqueles
          que anseiam por dias melhores. Sua doação fará toda a diferença e
          permitirá que continuemos nosso trabalho em prol de um futuro mais
          digno para todos.
        </p>

        <Link
          href="https://santacasago.colabore.org/doacao/single_step"
          target="_blank"
          className="mt-5 flex h-9.75 w-70.5 items-center justify-center rounded-[40px] bg-[#FD0003] px-6 font-semibold text-white hover:bg-red-700 hover:transition-colors hover:duration-200"
        >
          <span>Quero fazer uma doação</span>
        </Link>
      </BannerSection>
    </section>
  )
}
