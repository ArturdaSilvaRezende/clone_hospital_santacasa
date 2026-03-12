'use client'

import { useState } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi2'

export default function AccordionSection({ list = [] }) {
  const [openId, setOpenId] = useState(null)

  const handleToggle = id => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div
      className="space-y-4"
      aria-labelledby={openId ? `item-title-${openId}` : undefined}
    >
      {list.map(item => {
        const isOpen = openId === item.id

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-[#727070]/10 bg-white transition-all duration-300"
          >
            <button
              onClick={() => handleToggle(item.id)}
              className="flex w-full items-center justify-between p-5 text-left focus:ring-2 focus:ring-gray-500/20 focus:outline-none md:p-6"
              aria-expanded={isOpen}
              aria-controls={`content-${item.id}`}
            >
              <span className="pr-4 text-base font-medium text-black md:text-lg">
                {item.title}
              </span>
              <div className="shrink-0 text-[#727070]">
                {isOpen ? <HiMinus size={24} /> : <HiPlus size={24} />}
              </div>
            </button>

            <div
              id={`content-${item.id}`}
              role="region"
              aria-labelledby={`item-title-${item.id}`}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="mx-6 mt-0 border-t border-gray-200/10 pt-0 leading-relaxed text-[#727070]">
                <p className="py-6 max-sm:text-[14px]">{item.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
