import { useEffect, useRef, useState } from 'react'
import { LuTestTubeDiagonal } from 'react-icons/lu'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function NavExams({
  examsId,
  examsList,
  totalExams,
  isShowingAllExams,
  handleSetExamsId,
  currentContent,
  setCurrentContent,
  setIsShowingAllExams = () => {}
}) {
  const navRef = useRef(null)
  const [examsLimit, setExamsLimit] = useState(4)

  const handleCurrentContent = () => {
    setCurrentContent('exams')
  }

  useEffect(() => {
    const handleClickOutside = e => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsShowingAllExams(false)
      }
    }
    const handleEscape = e => {
      if (e.key === 'Escape') setIsShowingAllExams(false)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsShowingAllExams(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleResize)
    }
  }, [setIsShowingAllExams])

  return (
    <div
      className={` ${isShowingAllExams ? 'fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4' : 'hidden lg:block'}`}
    >
      <div
        ref={navRef}
        className="fadeIn mt-20 h-auto w-full max-w-md rounded-3xl border border-[#727070]/10 bg-white px-4.5 py-3.5 shadow-2xl md:shadow-none lg:mt-0"
      >
        <div
          className={`${currentContent === 'exams' ? "mb-6": "mb-0"} flex cursor-pointer items-center justify-between text-[#FD0003] `}
          onClick={handleCurrentContent}
        >
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <LuTestTubeDiagonal size={24} />
            <span>Exames</span>
          </h2>
          <MdKeyboardArrowDown
            size={25}
            className={currentContent === 'exams' ? 'rotate-180 transform' : ''}
          />
        </div>

        {currentContent === 'exams' && (
          <>
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => handleSetExamsId(null)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-all ${
                  examsId === null
                    ? 'bg-[#FD0003] text-white'
                    : 'border border-gray-100 text-[#727070]'
                }`}
              >
                <span>Todas</span>
                <span
                  className={`rounded-full border px-3 py-0.5 text-xs ${examsId === null ? 'border-white bg-white/20' : 'bg-gray-50 text-gray-400'}`}
                >
                  {totalExams}
                </span>
              </button>

              {examsList.slice(0, examsLimit).map(exams => (
                <button
                  key={exams.id}
                  onClick={() => handleSetExamsId(exams.category)}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                    examsId === exams.category
                      ? 'border-[#FD0003] bg-[#FD0003] text-white shadow-lg shadow-red-200'
                      : 'border-gray-100 text-[#727070] hover:bg-gray-50'
                  }`}
                >
                  <span className="text-[14px] font-normal">{exams.name}</span>
                  <span
                    className={`rounded-full border px-3 py-0.5 text-xs ${examsId === exams.id ? 'border-white' : 'bg-gray-50 text-gray-400'}`}
                  >
                    {exams.count}
                  </span>
                </button>
              ))}
            </nav>

            {examsList.length > examsLimit && (
              <button
                onClick={() => setExamsLimit(prev => prev + 4)}
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
