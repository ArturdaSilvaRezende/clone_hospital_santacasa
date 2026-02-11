import Link from 'next/link'
import BannerSection from '~/components/BannerSection'

export default function Banner() {
  return (
    <section
      className="w-full bg-white pt-15 pb-25"
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

        <h1 className="text-[32px] font-medium text-black">
          <span className="block">Cada gesto conta.</span>
          <span className="relative -top-3">
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
          className="mt-5 flex h-8.75 w-60.5 items-center justify-center rounded-[40px] bg-[#FD0003] px-6 font-semibold text-white hover:bg-red-700 hover:transition-colors hover:duration-200"
        >
          <span className="mb-1">Quero fazer uma doação</span>
        </Link>
      </BannerSection>
    </section>
  )
}
