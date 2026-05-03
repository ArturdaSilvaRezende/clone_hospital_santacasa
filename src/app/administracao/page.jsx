import React from 'react'
import MemberCard from './_components/MemberCard'
import TechnicalFramework from './_components/Tabs'
import { threeCards, twoCards } from './_utils/lists'

export default function Aministracao() {
  return (
    <>
      <section
        className="container mx-auto px-4 py-16 max-sm:px-6 md:px-8 xl:px-0"
        aria-label="Nossa Equipe Diretiva"
      >
        <h2 className="sr-only">Nossa Equipe Diretiva</h2>

        <div className="flex items-center justify-center gap-10 max-sm:flex-col">
          {twoCards.map((member, index) => (
            <MemberCard {...member} key={member.name} />
          ))}
        </div>

        <div
          className="mt-10 flex items-center justify-between max-sm:flex-col max-sm:gap-10 md:flex-wrap md:gap-5 lg:justify-center lg:gap-10 xl:flex-nowrap xl:justify-between"
          role="list"
        >
          {threeCards.map((member, index) => (
            <MemberCard {...member} key={member.name} />
          ))}
        </div>
      </section>

      <TechnicalFramework />
    </>
  )
}
