import { useId } from 'react'
import Link from 'next/link'

const contactData = [
  {
    id: 1,
    label: 'Assessoria de Imprensa',
    phone: '(62) 99141-9456'
  },
  {
    id: 2,
    label: 'Agendar Consulta Particular',
    phone: '(62) 3254-4200'
  },
  {
    id: 3,
    label: 'Canal de Ouvidoria',
    phone: '(62) 3254-4270'
  },
  {
    id: 4,
    label: 'Espaço para Graduação',
    phone: '(62) 3941-1652'
  },
  {
    id: 5,
    label: 'Assessoria de Imprensa',
    phone: '(62) 99141-9456'
  },
  {
    id: 6,
    label: 'Agendar Consulta Particular',
    phone: '(62) 3254-4200'
  },
  {
    id: 7,
    label: 'Canal de Ouvidoria',
    phone: '(62) 3254-4270'
  },
  {
    id: 8,
    label: 'Espaço para Graduação',
    phone: '(62) 3941-1652'
  }
]

export default function UsefulPhone() {
  const id = useId()
  return (
    <section
      className="mb-16 bg-white py-16 md:pt-10 lg:py-16"
      aria-labelledby={`${id}-telefones-title`}
    >
      <div className="container mx-auto max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <div className="mb-8 text-center">
          <span
            className="text-[16px] font-bold tracking-widest text-[#FD0003] uppercase"
            id={`${id}-telefones-title`}
          >
            Telefones Úteis
          </span>
          <h2 className="text-[32px] font-medium text-black max-sm:text-[28px]">
            Confira os telefones da Santa Casa
          </h2>
        </div>

        <div className="mx-auto overflow-hidden rounded-2xl border border-[#727070]/20 bg-white lg:w-230">
          <ul className="divide-y divide-gray-100">
            {contactData.map(item => (
              <li
                key={item.id}
                className={`flex flex-col px-4.5 py-3 sm:flex-row sm:items-center sm:justify-between ${item.id % 2 === 0 ? 'bg-[#EDECEC66]/90' : 'bg-white'}`}
              >
                <span className="text-lg font-medium text-black">
                  {item.label}
                </span>
                <Link
                  href={`https://wa.me/${item.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="mt-1 rounded text-lg font-medium text-black/50 transition-colors ease-in-out hover:text-[#FD0003] sm:mt-0"
                    aria-label={`Ligar para ${item.label}: ${item.phone}`}
                  >
                    {item.phone}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
