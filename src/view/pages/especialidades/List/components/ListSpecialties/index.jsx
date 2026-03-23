import Pagination from '@mui/material/Pagination'
import CardSkeleton from '../CardSkeleton'
import Image from 'next/image'

export default function ListSpecialties({
  data,
  isLoading,
  pagination,
  currentPage,
  setCurrentPage,
  viewType,
  ref = null
}) {
  const containerClass =
    viewType === 'grid'
      ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
      : 'flex flex-col gap-4'

  return (
    <div className="fadeIn flex-1" ref={ref}>
      <h2 className="mb-6 text-xl font-bold text-[#FD0003]">Especialidades</h2>

      <div className={containerClass}>
        {isLoading
          ? Array.from(new Array(6)).map((_, index) => (
              <CardSkeleton key={index} viewType={viewType} />
            ))
          : data.map(doctor => (
              <div
                key={doctor.id}
                className={`group overflow-hidden rounded-2xl border border-gray-100 bg-white ${
                  viewType === 'list' ? 'flex h-31.75 items-center' : ''
                }`}
              >
                <div
                  className={`overflow-hidden bg-gray-100 ${viewType === 'list' ? 'h-full w-31.75' : 'h-80.5'}`}
                >
                  <Image
                    src={doctor.url}
                    alt={doctor.name}
                    height={282}
                    width={282}
                    className={`mx-auto h-full w-full ${viewType === 'list' ? 'object-fill' : 'object-cover'}`}
                  />
                </div>

                <div
                  className={`p-5 ${viewType === 'list' ? 'flex flex-col justify-center' : 'max-sm:w-full'}`}
                >
                  <p className="text-[14px] font-normal text-[#FD0003]">
                    {doctor.speciality.map(spec => spec.label).join(', ')}
                  </p>
                  <h3
                    className={`mt-1 line-clamp-1 font-normal text-black ${viewType === 'list' ? 'text-[22px]' : 'text-base'}`}
                  >
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#727070] uppercase">
                    CRM {doctor.crm}
                  </p>
                </div>
              </div>
            ))}
      </div>

      {!isLoading && data.length > 0 && (
        <div className="mt-12 flex justify-center">
          <Pagination
            count={pagination.page_count || 1}
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
