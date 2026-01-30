'use client'

import { useState } from 'react'
import Image from 'next/image'

const donationValues = [
  { id: 1, label: 'R$50,00', value: 50 },
  { id: 2, label: 'R$100,00', value: 100 },
  { id: 3, label: 'R$150,00', value: 150 },
  { id: 4, label: 'R$200,00', value: 200 },
  { id: 5, label: 'Outro', value: null }
]

export default function Donations() {
  const [selectedValue, setSelectedValue] = useState(2)
  const [cartTotal, setCartTotal] = useState(0)

  const handleValueSelect = id => {
    setSelectedValue(id)
  }

  const handleDonate = () => {
    const selected = donationValues.find(item => item.id === selectedValue)
    if (selected && selected.value) {
      setCartTotal(selected.value)
      console.log(`Doação de ${selected.label} adicionada ao carrinho`)
    } else if (selected && selected.label === 'Outro') {
      console.log('Valor personalizado selecionado')
    }
  }

  return (
    <section className="w-full bg-white p-8" aria-label="Seção Donations">
      <div className="mx-auto max-w-250">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="mb-6 text-sm text-gray-500">Doação &gt;</p>
          </div>

          <button
            className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
            aria-label="Carrinho de doações"
          >
            <span className="text-sm font-medium text-gray-700">
              R$ {cartTotal.toFixed(2)}
            </span>
            <Image
              src="/icons/shopping-cart-icon-gray.svg"
              alt="Logo Santa Casa Voluntariado"
              width={32}
              height={32}
            />
          </button>
        </div>

        <div className="flex items-start gap-5">
          <h1 className="relative top-3 text-[32px] leading-tight font-bold text-[#262626]">
            Realiza de forma <span className="text-red-600">fácil</span> e
            <span className="text-red-600"> rápida</span> sua doação
          </h1>

          <Image
            src="/images/brand_voluntariado.svg"
            alt="Logo Santa Casa Voluntariado"
            width={67}
            height={83}
          />
        </div>

        <p className="-mt-6 mb-10 text-[20px] text-[#5D5D5D]">
          Escolha um valor
        </p>

        <div
          className="mb-6 flex justify-between"
          role="radiogroup"
          aria-label="Valores de doação"
        >
          {donationValues.map(item => {
            return (
              <button
                key={item.id}
                onClick={() => handleValueSelect(item.id)}
                className={`w-46 rounded-full px-8 py-3 text-base font-medium transition-colors duration-200 ease-in-out ${
                  selectedValue === item.id
                    ? 'bg-[#262626] text-white'
                    : 'border border-gray-300 bg-white text-[#727070] hover:border-gray-400'
                } `}
                role="radio"
                aria-checked={selectedValue === item.id}
                aria-label={`Doar ${item.label}`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleDonate}
            className="rounded-full bg-red-600 px-32 py-4 font-semibold text-white shadow-lg transition-colors duration-200 ease-in-out hover:bg-red-700 hover:shadow-xl"
            type="button"
          >
            Doar
          </button>
        </div>
      </div>

      <h2 className="container mx-auto my-7 max-w-285 text-left text-3xl font-bold text-gray-900 md:text-4xl">
        Nossos Projetos
      </h2>
    </section>
  )
}
