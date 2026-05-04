import React, { useEffect, useRef } from 'react'
import { LiaAngleDownSolid, LiaSlidersHSolid } from 'react-icons/lia'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function NavSpecialties({
  specialityId,
  specialityList,
  specialityLimit,
  isShowingAllSpecialities,
  specialityCounts,
  currentContent,
  setCurrentContent,
  setSpecialityLimit,
  handleSetSpecialityId,
  setIsShowingAllSpecialities
}) {
  const navRef = useRef(null)

  const handleCurrentContent = () => {
    setCurrentContent('specialties')
  }

  useEffect(() => {
    const handleClickOutside = e => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsShowingAllSpecialities(false)
      }
    }
    const handleEscape = e => {
      if (e.key === 'Escape') setIsShowingAllSpecialities(false)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsShowingAllSpecialities(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleResize)
    }
  }, [setIsShowingAllSpecialities])

  return (
    <div
      className={` ${isShowingAllSpecialities ? 'fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4' : 'hidden lg:block'} lg:mb-7`}
    >
      <div
        ref={navRef}
        className="fadeIn mt-20 h-auto w-full max-w-md rounded-3xl border border-[#727070]/10 bg-white px-4.5 py-3.5 shadow-2xl md:shadow-none lg:mt-0"
      >
        <div
          className={`${currentContent === 'specialties' ? 'mb-6' : 'mb-0'} flex cursor-pointer items-center justify-between text-[#FD0003]`}
          onClick={handleCurrentContent}
        >
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <LiaSlidersHSolid size={24} />
            <span>Especialidades</span>
          </h2>
          <MdKeyboardArrowDown
            size={25}
            className={
              currentContent === 'specialties' ? 'rotate-180 transform' : ''
            }
          />
        </div>

        {currentContent === 'specialties' && (
          <>
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => handleSetSpecialityId(null)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-all ${
                  specialityId === null
                    ? 'bg-[#FD0003] text-white'
                    : 'border border-gray-100 text-[#727070]'
                }`}
              >
                <span>Todas</span>
                <span
                  className={`rounded-full border px-3 py-0.5 text-xs ${specialityId === null ? 'border-white bg-white/20' : 'bg-gray-50 text-gray-400'}`}
                >
                  {specialityList.length}
                </span>
              </button>

              {specialityList.slice(0, specialityLimit).map(spec => (
                <button
                  key={spec.id}
                  onClick={() => handleSetSpecialityId(spec.name)}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                    specialityId === spec.name
                      ? 'border-[#FD0003] bg-[#FD0003] text-white shadow-lg shadow-red-200'
                      : 'border-gray-100 text-[#727070] hover:bg-gray-50'
                  }`}
                >
                  <span className="text-[14px] font-normal">{spec.name}</span>
                  <span
                    className={`rounded-full border px-3 py-0.5 text-xs transition-colors ${
                      specialityId === spec.name
                        ? 'border-white bg-white/20 text-white'
                        : 'border-transparent bg-gray-50 text-gray-400'
                    }`}
                  >
                    {specialityCounts[spec.name] || 0}
                  </span>
                </button>
              ))}
            </nav>

            {specialityList.length > specialityLimit && (
              <button
                onClick={() => setSpecialityLimit(prev => prev + 4)}
                className="mt-4 flex w-full items-center justify-center gap-2 text-sm font-normal text-[#FD0003] transition-all hover:opacity-70"
              >
                <span>Ver mais</span>
                <MdKeyboardArrowDown size={20} />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
