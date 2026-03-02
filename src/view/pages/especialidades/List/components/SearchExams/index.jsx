import React from 'react'
import { GrFilter } from 'react-icons/gr'
import { LiaSearchSolid, LiaSlidersHSolid } from 'react-icons/lia'

export default function SearchExams({
  setSearch,
  handleShowAllExams
}) {
  return (
    <>
      <div className="mb-8 flex items-center gap-4">
        <div className="relative flex-1 max-sm:hidden md:hidden lg:flex">
          <input
            type="text"
            placeholder="Pesquisar pelo nome do exame"
            className="w-full rounded-full border border-gray-200 py-3 pr-4 pl-12 text-sm outline-none focus:border-red-500"
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === 'Enter'}
          />
          <LiaSearchSolid
            className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="text-[#FD0003] max-sm:hidden md:hidden lg:flex lg:gap-2">
          <div className="cursor-pointer rounded border p-2">
            <LiaSlidersHSolid size={20} />
          </div>
        </div>
      </div>

      <div className="md:flex md:items-center md:gap-5 lg:hidden">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Pesquisar pelo nome"
            className="w-full rounded-[10px] border border-[#727070]/10 py-3 pr-4 pl-12 text-sm outline-none focus:border-gray-300"
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && load()}
          />
          <LiaSearchSolid
            className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <button
          className="flex w-[60%] items-center justify-center gap-2 rounded-[10px] border border-[#727070]/10 px-4 py-3 text-sm text-[#727070] outline-none hover:bg-gray-200 focus:border-gray-300 max-sm:mt-4 md:w-[30%] lg:hidden"
          onClick={handleShowAllExams}
        >
          <GrFilter size={20} />
          <span>Filtrar por serviços</span>
        </button>
      </div>
    </>
  )
}
