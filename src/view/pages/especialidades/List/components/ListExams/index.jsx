import { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { LuTestTubeDiagonal } from 'react-icons/lu'
import CardSkeleton from '../CardSkeleton'

export default function ListExams({ data, isLoading, viewType, ref = null }) {
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 6

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  const paginatedData = data.slice(startIndex, endIndex)
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

  const containerClass =
    viewType === 'grid'
      ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
      : 'flex flex-col gap-4'

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
                    className={`rounded-full border border-[#727070] px-2.5 py-1.5 hover:bg-[#727070]/10 ${viewType === 'list' ? 'mt-1 mb-2 w-45.75' : 'mt-5 w-full'}`}
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
                padding: '8px 12px',

                [theme.breakpoints.down('md')]: {
                  padding: '4px',
                  minWidth: '30px',
                  height: '32px',
                  fontSize: '0.75rem'
                }
              },

              '& .MuiPaginationItem-ellipsis': {
                border: 'none',
                bgcolor: 'transparent'
              }
            })}
          />
        </div>
      )}
    </div>
  )
}
