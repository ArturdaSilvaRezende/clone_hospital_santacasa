import React from 'react'
import CustomLink from '~/components/CustomComponents/Link'

export default function CallToActionSections() {
  return (
    <section
      className="flex w-full flex-col md:flex-row"
      aria-label="Chamadas para ação de voluntariado e doação"
    >
      <article
        className="flex flex-1 flex-col items-start justify-center bg-[#31313F] px-8 py-16 md:px-12 lg:px-16"
        aria-labelledby="volunteer-heading"
      >
        <div className="flex max-w-md flex-col items-center">
          <h2
            id="volunteer-heading"
            className="mb-8 w-120 text-[28px] leading-relaxed font-normal text-white"
          >
            Para saber como se tornar um voluntário(a) clique no botão abaixo.
          </h2>
          <CustomLink
            label="Acessar"
            classNameContainer="bg-[#FD0003] hover:bg-red-700  text-white w-[158px] mr-auto -ml-3"
          />
        </div>
      </article>

      <article
        className="flex flex-1 flex-col items-start justify-center bg-[#FDE4E1] px-8 py-16 md:px-12 lg:px-16"
        aria-labelledby="donation-heading"
      >
        <div className="flex max-w-md flex-col items-center">
          <h2
            id="donation-heading"
            className="mb-8 w-100 text-[28px] leading-relaxed font-normal text-[#2F2E41]"
          >
            Transforme vidas com sua doação!{' '}
            <span className="font-semibold text-red-600">
              Cada gesto conta.
            </span>
          </h2>

          <CustomLink
            label="Acessar"
            classNameContainer="bg-[#FD0003] hover:bg-red-700  text-white w-[158px] mr-auto"
          />
        </div>
      </article>
    </section>
  )
}
