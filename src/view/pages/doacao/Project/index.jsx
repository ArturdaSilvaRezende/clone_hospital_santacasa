'use client'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  fetchDataDonateProject,
  addCartItems,
  loadCartItems
} from '~/app/doacao/store'

export function Project() {
  const dispatch = useDispatch()
  const { project_list: projectList } = useSelector(store => store.donate)

  console.log(projectList)

  useEffect(() => {
    dispatch(fetchDataDonateProject())
    dispatch(loadCartItems())
  }, [])

  function handleAddItem(obj) {
    dispatch(addCartItems(obj))
  }

  const Card = ({
    categoria,
    url,
    id,
    nome,
    resumo,
    descricao,
    preco,
    onDonate = () => {}
  }) => (
    <div className="m-[1rem]">
      <div className="min-h-[421px] rounded-[20px] bg-white">
        <div
          className="h-[168px] w-full rounded-t-[20px] bg-cover bg-center"
          style={{ backgroundImage: `url(${url})` }}
        ></div>
        <div className="p-[2rem]">
          <span className="text-c-red text-[0.9rem] font-[600]">
            {categoria}
          </span>
          <h1 className="text-[1.1rem] font-[500] text-[#727070]">{nome}</h1>
          <p className="text-[1rem] font-[400] text-[#727070]">{resumo}</p>

          <button
            onClick={() =>
              onDonate({
                reference_id: id,
                descricao: nome,
                quantity: 1,
                preco
              })
            }
            className="mt-[1.1rem] h-[40px] w-full rounded-full border-[1px] border-[#727070] px-[1re] text-[#727070]"
          >
            Doar
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative mt-[5rem] w-[1120px]">
        <div className="flex flex-row items-center gap-x-3">
          <h1 className="text-[1.5rem] font-[500]">Nossos Projetos</h1>
          <img src="/heart.svg" />
        </div>
      </div>
      <div className='flex h-[750px] w-full flex-col items-center bg-[url("/images/project-banner.svg")] bg-cover bg-no-repeat'>
        <div className="relative mt-[13rem] w-[1120px]">
          <div>
            {projectList
              .filter(item => item.personalizado == false)
              .map((item, idx) => (
                <Card onDonate={handleAddItem} key={idx} {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
