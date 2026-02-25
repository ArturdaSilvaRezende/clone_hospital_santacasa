'use client'

import { HiOutlineSearch, HiOutlineCalendar } from 'react-icons/hi'

export default function Search({
  searchTerm,
  setSearchTerm,
  selectedDate,
  setSelectedDate
}) {
  return (
    <div className="w-300 max-w-full">
      <div className="flex flex-col items-stretch gap-2 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm transition-all focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500 md:flex-row">
        <div className="relative flex grow items-center">
          <div className="absolute left-4 text-gray-400">
            <HiOutlineSearch size={20} />
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Pesquisar"
            className="w-full bg-transparent py-2 pr-4 pl-11 text-sm text-gray-700 outline-none placeholder:text-gray-400 md:text-base"
          />
        </div>

        <div className="my-1 hidden w-px bg-gray-200 md:block" />

        <div className="relative flex shrink-0 items-center md:w-70.75">
          <div className="absolute left-4 text-gray-400">
            <HiOutlineCalendar size={20} />
          </div>

          <input
            type="date"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
            className="w-full cursor-pointer bg-transparent py-2 pr-4 pl-11 text-sm text-gray-700 outline-none md:text-base"
          />
        </div>
      </div>
    </div>
  )
}
