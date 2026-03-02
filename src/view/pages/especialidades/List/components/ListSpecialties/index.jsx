import Pagination from '@mui/material/Pagination'
import CardSkeleton from '../CardSkeleton'

export default function ListSpecialties({
  data,
  isLoading,
  pagination,
  currentPage,
  setCurrentPage
}) {
  return (
    <div className="fadeIn flex-1">
      <h2 className="mb-6 text-xl font-bold text-[#FD0003]">Especialidades</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {isLoading
          ? Array.from(new Array(6)).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : data.map(doctor => (
              <div
                key={doctor.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={doctor.url}
                    alt={doctor.name}
                    className="mx-auto h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 max-sm:w-full">
                  
                  <p className="text-[14px] font-normal text-[#FD0003]">
                   {doctor.speciality.map(spec => spec.label).join(', ')}
                  </p>
                  <h3 className="mt-1 line-clamp-1 font-normal text-black max-sm:w-full">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#727070] uppercase max-sm:text-[16px]">
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
