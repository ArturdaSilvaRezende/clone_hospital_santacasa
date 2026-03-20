'use client'

import { HiOutlineSearch, HiOutlineCalendar } from 'react-icons/hi'

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

      <div className="rounded-3xl border border-[#727070]/10 bg-white px-4 py-3.5 md:w-70.75">
        <input
          type="date"
          value={selectedDate}
          min="1900-01-01"
          max="9999-12-31"
          onChange={e => setSelectedDate(e.target.value)}
          className="w-full cursor-pointer bg-transparent text-sm text-black outline-none md:text-base"
        />
      </div>
    </div>
  )
}
