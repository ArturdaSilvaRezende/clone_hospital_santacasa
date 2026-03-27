'use client'

import { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { LuTestTubeDiagonal } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'
import CardSkeleton from '../CardSkeleton'

export default function ListExams({ data, isLoading, viewType, ref = null }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedExam, setSelectedExam] = useState(null)

  const ITEMS_PER_PAGE = 6
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedData = data.slice(startIndex, endIndex)
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

  const containerClass =
    viewType === 'grid'
      ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
      : 'flex flex-col gap-4'

  const handleOpenModal = exam => setSelectedExam(exam)
  const handleCloseModal = () => setSelectedExam(null)

  useEffect(() => {
    if (selectedExam) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedExam])

  return (
    <div className="fadeIn flex-1" ref={ref}>
      <h2 className="mb-6 text-xl font-bold text-[#FD0003]">Exames</h2>

      <div className={containerClass}>
        {isLoading
          ? Array.from(new Array(6)).map((_, index) => (
              <CardSkeleton key={index} viewType={viewType} />
            ))
          : paginatedData.map(exam => (
              <div
                key={exam.id}
                className={`rounded-2xl border border-gray-100 bg-white ${viewType === 'list' ? 'flex h-31.75 items-center gap-4' : 'px-4 py-5'}`}
              >
                {viewType === 'list' && (
                  <div className="flex h-31.75 w-31.75 items-center justify-center rounded-tl-2xl rounded-bl-2xl bg-[#FFE2E2] md:ml-auto lg:ml-0">
                    <LuTestTubeDiagonal
                      color="#FD0003"
                      className="text-[40px] font-normal"
                    />
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 md:flex-col md:items-start lg:flex-row lg:items-center">
                    {viewType === 'grid' && (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE2E2] md:ml-auto lg:ml-0">
                        <LuTestTubeDiagonal color="#FD0003" size={23} />
                      </div>
                    )}

                    <div>
                      <p className="text-[14px] font-normal text-[#FD0003]">
                        {exam.category}
                      </p>
                      <h3 className="font-normal text-black">{exam.name}</h3>
                    </div>
                  </div>

                  <p
                    className={`text-[14px] font-normal text-[#727070]/80 max-sm:text-[16px] ${viewType === 'list' ? 'mt-0' : 'mt-3'}`}
                  >
                    {exam.description}
                  </p>

                  <button
                    onClick={() => handleOpenModal(exam)}
                    className={`rounded-full border border-[#727070] px-2.5 py-1.5 text-sm hover:bg-[#727070]/10 ${viewType === 'list' ? 'mt-1 mb-2 w-45.75' : 'mt-5 w-full'}`}
                  >
                    Como se preparar
                  </button>
                </div>
              </div>
            ))}
      </div>

      {!isLoading && data.length > 0 && (
        <div className="mt-12 flex justify-center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(e, p) => setCurrentPage(p)}
            disabled={isLoading}
            sx={theme => ({
              '& .Mui-selected': {
                bgcolor: '#FD0003 !important',
                color: 'white !important',
                border: 'none'
              },
              '& .MuiPaginationItem-root': {
                borderRadius: '8px',
                border: '1px solid #EDECEC',
                color: '#727070',
                fontWeight: '500',
                padding: '8px 12px'
              }
            })}
          />
        </div>
      )}

      {selectedExam && (
        <div className="fadeIn fixed inset-0 z-9999 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="animate-in fade-in zoom-in w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl duration-200">
            <div className="flex items-center justify-between bg-[#727070] px-6 py-4">
              <h2 className="text-lg font-medium text-white">
                {selectedExam.name}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-white transition-transform hover:rotate-90"
              >
                <IoClose size={24} />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-8">
              <div className="mb-6">
                <h4 className="mb-2 text-lg font-bold text-[#444444]">
                  Detalhes do exame
                </h4>
                <p className="mb-4 leading-relaxed text-gray-600">
                  {selectedExam.detalhes}
                </p>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <strong>Duração média:</strong> {selectedExam.duracao}
                  </p>
                  <p>
                    <strong>Jejum:</strong> {selectedExam.jejum}
                  </p>
                </div>
              </div>

              <hr className="mb-6 border-gray-100" />

              <div>
                <h4 className="mb-3 text-lg font-bold text-[#444444]">
                  Como se preparar
                </h4>
                <ul className="space-y-2">
                  {selectedExam.preparo.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-black" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="rounded-full border border-gray-400 px-10 py-2 font-medium text-gray-700 transition-colors hover:bg-[#727070]/10"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
