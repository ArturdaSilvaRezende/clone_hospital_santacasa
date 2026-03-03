import { MemberCard } from './components/MemberCard'
import TechnicalFramework from './components/Tabs'

const twoCards = [
  {
    name: 'Dom João Justino',
    role: 'Presidente da SCMG',
    imageSrc: '/images/Dom João Justino.svg',
    description: 'Lorem ipsum dolor sit amet...'
  },
  {
    name: 'Dom Levi Bonatto',
    role: 'Vice-presidente da SCMG',
    imageSrc: '/images/Dom Levi Bonatto.svg',
    description: 'Lorem ipsum dolor sit amet...'
  }
]

const threeCards = [
  {
    name: 'Dra. Irani Ribeiro de Moura',
    role: 'Superintendente-geral da SCMG',
    imageSrc: '/images/Irani Ribeiro de Moura.svg',
    description: 'Lorem ipsum dolor sit amet...'
  },
  {
    name: 'Dr. Irondes José de Morais',
    role: 'Superintendente Administrativo',
    imageSrc: '/images/Irondes José de Morais.svg',
    description: 'Lorem ipsum dolor sit amet...'
  },
  {
    name: 'Dr. Pedro Ivandoscvik Cordeiro',
    role: 'Superintendente Técnico',
    imageSrc: '/images/Pedro Ivandoscvik Cordeiro.svg',
    description: 'Lorem ipsum dolor sit amet...'
  }
]

export default function Content() {
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
