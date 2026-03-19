'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCartItems } from '~/app/doacao/store'
import { Skeleton } from '@mui/material'

export default function DonationSummaryCard() {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  const { cart_total_price: cartTotalPrice, value_selected: valueSelected } =
    useSelector(store => store.donate)

  useEffect(() => {
    dispatch(loadCartItems())

    const timer = setTimeout(() => setLoading(false), 300)

    return () => clearTimeout(timer)
  }, [dispatch])

  const totalAmount =
    Number(cartTotalPrice || 0) + Number(valueSelected?.preco || 0)

  const formatCurrency = value => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  return (
    <div className="h-81.25 rounded-xl border border-[#7270701A] bg-white px-6.5 py-5 max-sm:w-full md:ml-auto md:w-120 xl:ml-0 lg:w-120 xl:w-[40%]">
      <h2 className="mb-6 text-[18px] font-medium text-black">
        Resumo da Doação
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between text-[#535353]">
          <span className="text-[15px] font-normal">Nome da doação</span>
          <span className="font-normal text-[#535353]">
            {loading ? (
              <Skeleton width={80} height={24} />
            ) : (
              formatCurrency(totalAmount)
            )}
          </span>
        </div>

        <div className="flex justify-between text-[#535353]">
          <span className="text-[15px] font-normal">Taxa de processamento</span>
          <span className="font-normal text-[#535353]">Grátis</span>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#535353]">Total</span>
          <span className="text-xl font-bold text-[#535353]">
            {loading ? (
              <Skeleton width={100} height={32} />
            ) : (
              formatCurrency(totalAmount)
            )}
          </span>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[#727070]">
        Os seus dados pessoais serão utilizados para processar a sua compra,
        apoiar a sua experiência em todo este site e para outros fins descritos
        na nossa{' '}
        <a href="#" className="text-[#FD0003] hover:underline">
          Política de Privacidade
        </a>
        .
      </p>
    </div>
  )
}
