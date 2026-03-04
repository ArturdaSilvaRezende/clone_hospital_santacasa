import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

const TIMELINE_DATA = [
  {
    id: 1,
    year: '1936',
    content:
      'Fundada em 1936, logo após o nascimento de Goiânia, a Santa Casa foi idealizada por Dona Gercina Borges com o apoio de Pedro Ludovico Teixeira. Nascida da união entre instituições religiosas e a sociedade civil, o hospital consolidou-se rapidamente como referência de excelência e acolhimento humanizado em saúde para Goiás e estados vizinhos.'
  },
  {
    id: 2,
    year: '1950',
    content:
      'Expansão das alas de atendimento e início das atividades de ensino, marcando o compromisso com a formação de profissionais de saúde no estado.',
    image: '/images/nossa-historia.svg'
  },
  {
    id: 3,
    year: '1975',
    content:
      'Modernização das instalações e implementação de novas especialidades médicas para atender à crescente demanda da capital.',
    image: '/images/nossa-historia.svg'
  },
  {
    id: 4,
    year: '2000',
    content:
      'Inauguração de novos centros cirúrgicos e fortalecimento da parceria com o SUS e a comunidade acadêmica.',
    image: '/images/nossa-historia.svg'
  }
]

export default function TabOurStory() {
  const [expandedItems, setExpandedItems] = useState([])
  const [activeItems, setActiveItems] = useState([])
  const itemRefs = useRef([])

  const toggleExpand = id => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.dataset.id)

            setActiveItems(prev => (prev.includes(id) ? prev : [...prev, id]))
          }
        })
      },
      {
        rootMargin: '0px 0px -30% 0px',
        threshold: 0.4
      }
    )

    itemRefs.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="overflow-hidden py-12" aria-label="Nossa História">
      <div className="container mx-auto mb-16 text-center">
        <h2 className="mx-auto text-[28px] font-medium text-black">
          Uma história de dedicação e cuidado
        </h2>
        <p className="mx-auto text-[16px] leading-relaxed font-normal text-[#727070] lg:max-w-180.5">
          Desde 1936, a Santa Casa vem prestando serviços de saúde essenciais
          para a população de Goiás, evoluindo constantemente para atender às
          necessidades da comunidade.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div
          className="absolute left-1/2 z-0 h-full w-px -translate-x-1/2 transform bg-[#BBBBBB]"
          aria-hidden="true"
        />

        <div className="space-y-12 lg:space-y-0">
          {TIMELINE_DATA.map((item, index) => {
            const isExpanded = expandedItems.includes(item.id)
            const isActive = activeItems.includes(item.id)
            const isEven = index % 2 === 0

            return (
              <div
                key={item.id}
                ref={el => (itemRefs.current[index] = el)}
                data-id={item.id}
                className={`relative mb-12 flex w-full flex-col items-center justify-between lg:mb-24 lg:flex-row ${
                  !isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="z-10 w-full lg:w-[45%]">
                  <p
                    className={`mb-1 text-[24px] font-normal text-black ${
                      isEven ? 'lg:text-left' : 'lg:text-right'
                    }`}
                  >
                    {item.year}
                  </p>
                  <div className="relative mb-4 h-48 w-full overflow-hidden rounded-2xl md:h-64">
                    <Image
                      src={item.image}
                      alt={`Registro de ${item.year}`}
                      fill
                      className={`object-cover transition-all duration-700 ${isActive ? 'grayscale-0' : 'grayscale'}`}
                    />
                  </div>

                  <div className="pb-2">
                    {isExpanded && (
                      <p className="fadeIn text-justify text-sm leading-relaxed font-normal text-[#989898]">
                        {item.content}
                      </p>
                    )}
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className={`mt-3 flex items-center gap-1 text-[14px] font-normal text-[#727070] ${
                        !isEven ? 'lg:ml-auto' : 'lg:mr-auto'
                      }`}
                    >
                      {isExpanded ? 'Ver menos' : 'Ver mais'}
                      {isExpanded ? <HiChevronUp /> : <HiChevronDown />}
                    </button>
                  </div>
                </div>

                <div
                  className={`absolute left-1/2 z-20 flex h-6 w-6 -translate-x-1/2 transform items-center justify-center rounded-full border bg-white transition-all duration-500 ${
                    isActive ? 'border-[#FD0003]' : 'border-gray-300'
                  }`}
                >
                  <div
                    className={`h-3 w-3 rounded-full transition-all duration-500 ${
                      isActive ? 'bg-[#FD0003]' : 'bg-gray-200'
                    }`}
                  />
                </div>

                <div className="hidden lg:block lg:w-[45%]" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
