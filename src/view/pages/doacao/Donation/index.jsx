'use client'

import React, { useEffect } from 'react'
import { TbHeartHandshake } from 'react-icons/tb'
import { useSelector, useDispatch } from 'react-redux'
import { addValueSelected, loadCartItems } from '~/app/doacao/store'

export function Donation() {
  const dispatch = useDispatch()
  const {
    cart_total_price: cartTotalPrice,
    project_list: projectList,
    value_selected: valueSelected
  } = useSelector(store => store.donate)

  function handleDonation() {
    window.location.href = '/doacao-selecionada'
  }

  function handleSelectValue(item) {
    dispatch(addValueSelected(item))
  }

  useEffect(() => {
    dispatch(loadCartItems())
  }, [])

  return (
    <div className="relative mt-[5rem] w-[1120px]">
      <div className="flex w-full flex-row justify-between">
        <div>
          <a className="cursor-pointer text-[#000]">Doação</a> {'>'}
        </div>
        <button className="flex flex-row items-center gap-x-2 rounded-lg border-[1px] border-[#727070] p-3">
          <span className="text-[#727070]">
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(
              Number(cartTotalPrice || 0) + Number(valueSelected?.preco || 0)
            )}
          </span>
          <TbHeartHandshake color="#727070" size={27} />
        </button>
      </div>
      <div className="mt-[2rem] flex flex-row">
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-row gap-x-2">
            <h1 className="text-[1.8rem] font-[500]">
              Realize de forma fácil e segura sua doação
            </h1>
            <img src="/icons/voluntariado.svg" />
          </div>
          <span className="text-[#727070]">Escolha um valor</span>
        </div>
      </div>
      <div className="mt-[2rem]">
        <div className="flex flex-row gap-x-2 gap-y-2">
          {projectList
            .filter(item => item.personalizado == true)
            .map((item, key) => (
              <button
                onClick={() =>
                  handleSelectValue({
                    reference_id: item.id,
                    descricao: item.nome,
                    quantity: 1,
                    preco: item.preco
                  })
                }
                className={`group flex min-w-[140px] flex-col items-center justify-center rounded-full p-2 hover:bg-[#262626] ${valueSelected?.reference_id == item.id ? 'border-none bg-[#262626]' : 'border-[1px] border-[#727070]'} duration-200 ease-in-out`}
                key={item.id}
              >
                <span
                  className={`font-[500] duration-200 ease-in-out ${valueSelected?.reference_id == item.id ? 'text-white' : 'text-[#727070] group-hover:text-white'}`}
                >
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(item.preco)}
                </span>
              </button>
            ))}
        </div>
        <div className="flex flex-col items-end">
          <button
            onClick={handleDonation}
            className="bg-c-red flex min-w-[200px] flex-col items-center justify-center rounded-full p-2"
          >
            <span className="font-[500] text-white">Doar</span>
          </button>
        </div>
      </div>
    </div>
  )
}
