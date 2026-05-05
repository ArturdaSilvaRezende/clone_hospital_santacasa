import { useId } from 'react'
import Image from 'next/image'

export default function WhyDonate() {
  const id = useId()

  const criteria = [
    { id: 1, text: 'Apresentar documento original com foto.' },
    { id: 2, text: 'Estar em boas condições de saúde.' },
    { id: 3, text: 'Ter entre 18 e 65 anos de idade.' },
    { id: 4, text: 'Pesar no mínimo 50 kg.' },
    {
      id: 5,
      text: 'Estar alimentado (evitar alimentação gordurosa nas 4 horas que antecedem a doação).'
    },
    {
      id: 6,
      text: 'Estar descansado (ter dormido pelo menos 6 horas nas últimas 24 horas).'
    },
    { id: 7, text: 'Não ter tido gripe ou resfriado nos últimos 7 dias.' }
  ]

  return (
    <section
      className="my-12 text-center"
      aria-labelledby={`${id}-basic-criteria`}
    >
      <div className="container mx-auto">
        <p className="mb-2 text-sm font-medium tracking-widest text-[#A45757] uppercase">
          Critérios básicos
        </p>
        <h2
          id={`${id}-basic-criteria`}
          className="mb-10 text-[32px] leading-tight font-bold text-[#FD0003] md:text-5xl"
        >
          O que você precisa para doar sangue?
        </h2>

        <ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {criteria.map(item => (
            <li
              key={item.id}
              className="flex min-h-27 flex-col items-start rounded-xl bg-white px-5 py-4 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600">
                <Image
                  src="/icons/border-check-icon-white.svg"
                  alt="Check icon"
                  height={18}
                  width={18}
                />
              </div>

              <p className="text-[14px] font-normal text-[#535353]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
