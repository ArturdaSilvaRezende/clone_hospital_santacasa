'use client'

import { useSelector } from 'react-redux'
import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { IoCheckmark } from 'react-icons/io5'
import Link from 'next/link'

export default function Confirmation() {
  const { cart_total_price: cartTotalPrice, value_selected: valueSelected } =
    useSelector(store => store.donate)

  return (
    <div className="flex flex-col items-center px-6.5 py-5 duration-500">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FE0808] text-[#FE0808]">
        <IoCheckmark className="text-3xl" />
      </div>

      <h2 className="mb-2 text-3xl font-bold text-gray-900">
        Obrigado pela sua doação!
      </h2>
      <p className="mb-10 text-center text-lg text-gray-500">
        Tenha certeza de que a sua ajuda será muito importante para nós.
      </p>

      <div className="mb-12 w-full max-w-2xl rounded-4xl border border-[#7270701A] bg-[#FAFAFA] p-10 text-center">
        <h3 className="mb-4 text-[21px] font-medium text-[#535353]">
          Seu impacto importa
        </h3>
        <p className="leading-relaxed text-[#535353]">
          Com{' '}
          <span className="font-bold text-[#535353]">
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(
              Number(cartTotalPrice || 0) + Number(valueSelected?.preco || 0)
            )}
          </span>
          , você ajuda a Santa Casa de Misericórdia de Goiânia a continuar
          oferecendo atendimento de qualidade para milhares de pacientes. Cada
          doação nos aproxima de um futuro com mais saúde e esperança.
        </p>
      </div>

      <div className="flex w-full max-w-2xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3 font-semibold text-gray-500 transition-all hover:bg-gray-50"
        >
          <span>Ir para home</span>

          <span
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <FaArrowUpRightFromSquare className="text-sm" />
          </span>
        </Link>

        <Link
          href="/doacao"
          className="group flex items-center gap-2 rounded-full bg-[#FE0808] px-8 py-3 font-bold text-white transition-all hover:bg-red-700 hover:shadow-lg active:scale-95"
        >
          <span> Fazer nova doação</span>

          <span
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <FaArrowRight className="text-sm" />
          </span>
        </Link>
      </div>
    </div>
  )
}
