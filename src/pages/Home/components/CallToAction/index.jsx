import React from 'react'
import CustomLink from '~/components/CustomComponents/Link'

export default function CallToActionSections() {
  return (
    <section
      className="flex w-full"
      aria-label="Chamadas para ação de voluntariado e doação"
    >
      <article
        className="flex w-[50%] items-center justify-center bg-[#31313F]"
        aria-labelledby="volunteer-heading"
      >
        <div className="mx-auto flex h-67 w-110 flex-col items-center justify-center">
          <h2
            id="volunteer-heading"
            className="mb-5 text-[26px] leading-relaxed font-medium text-white"
          >
            Para saber como se tornar um voluntário(a) clique no botão abaixo.
          </h2>
          <CustomLink
            label="Acessar"
            classNameContainer="bg-[#FD0003] hover:bg-red-700  text-white px-[49px] mr-auto"
          />
        </div>
      </article>

      <article
        className="flex w-[50%] items-center justify-center bg-[#FDE4E1]"
        aria-labelledby="donation-heading"
      >
        <div className="mx-auto flex h-67 w-96.5 flex-col items-center justify-center">
          <h2
            id="donation-heading"
            className="mb-5 text-[26px] leading-relaxed font-medium text-[#2F2E41]"
          >
            Transforme vidas com sua doação!{' '}
            <span className="font-semibold text-red-600">
              Cada gesto conta.
            </span>
          </h2>

          <CustomLink
            label="Acessar"
            classNameContainer="bg-[#FD0003] hover:bg-red-700  text-white px-[49px] mr-auto"
          />
        </div>
      </article>
    </section>
  )
}
