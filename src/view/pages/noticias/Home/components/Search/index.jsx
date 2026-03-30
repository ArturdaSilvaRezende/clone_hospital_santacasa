'use client'

import { HiOutlineSearch, HiOutlineCalendar } from 'react-icons/hi'
import { IMaskInput } from 'react-imask'

export default function Search({
  searchTerm,
  setSearchTerm,
  selectedDate,
  setSelectedDate
}) {
  return (
    <div className="flex w-full gap-5 max-sm:flex-col">
      <div className="relative flex grow items-center rounded-3xl border border-[#727070]/10 bg-white py-3.5 pl-12">
        <div className="absolute left-4 text-gray-400">
          <HiOutlineSearch size={20} />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Pesquisar"
          className="w-full bg-transparent text-sm text-black outline-none placeholder:text-gray-400 md:text-base"
        />
      </div>

      <div className="relative flex items-center rounded-3xl border border-[#727070]/10 bg-white py-3.5 pl-12 md:w-72">
        <div className="absolute left-4 text-gray-400">
          <HiOutlineCalendar size={20} />
        </div>
        <IMaskInput
          mask="00/00/0000"
          value={selectedDate}
          onAccept={value => setSelectedDate(value)}
          placeholder="Filtrar por data"
          type="text"
          className="w-full bg-transparent text-sm text-black outline-none placeholder:text-gray-400 md:text-base"
        />
      </div>
    </div>
  )
}
