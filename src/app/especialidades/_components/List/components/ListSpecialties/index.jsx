'use client'
import { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import CardSkeleton from '../CardSkeleton'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import { specialtiesDetailsList } from '../../utils'

export default function ListSpecialties({
  data,
  isLoading,
  pagination,
  currentPage,
  setCurrentPage,
  viewType,
  ref = null
}) {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null)
  const containerClass =
    viewType === 'grid'
      ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
      : 'flex flex-col gap-4'

  const handleOpenModal = doctor => {
    const specLabel = doctor.specialties[0]?.label
    const detail = specialtiesDetailsList.find(s => s.name === specLabel)
    setSelectedSpecialty(detail)
  }

  const handleCloseModal = () => setSelectedSpecialty(null)

  useEffect(() => {
    if (selectedSpecialty) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedSpecialty])

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
                    src={doctor.url_image}
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
                    {doctor.specialties.map(spec => spec.label).join(', ')}
                  </p>
                  <h3
                    className={`mt-1 line-clamp-1 font-normal text-black ${viewType === 'list' ? 'text-[22px]' : 'text-base'}`}
                  >
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#727070] uppercase">
                    CRM {doctor.crm}
                  </p>

                  <button
                    className="mt-3 mr-auto w-full border-t border-[#727070]/30 pt-3 font-normal text-black transition-all duration-300 hover:text-[#727070]"
                    onClick={() => handleOpenModal(doctor)}
                  >
                    Saiba mais sobre a especialidade
                  </button>
                </div>
              </div>
            ))}
      </div>

      {selectedSpecialty && (
        <div className="fadeIn fixed inset-0 z-9999 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="animate-in fade-in zoom-in w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl duration-200">
            <div className="flex items-center justify-between bg-[#727070] px-6 py-4">
              <h2 className="text-lg font-medium text-white">
                {selectedSpecialty.name}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-white transition-transform hover:rotate-90"
              >
                <IoClose size={24} />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-8 text-left">
              <div className="mb-6">
                <h4 className="mb-2 text-lg font-bold text-[#444444]">
                  Sobre a Especialidade
                </h4>
                <p className="mb-4 leading-relaxed text-gray-600">
                  {selectedSpecialty.description}
                </p>

                <hr className="mb-6 border-gray-100" />

                <div className="space-y-1 rounded-lg border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700">
                  <p>
                    <strong>Duração média da consulta:</strong>{' '}
                    {selectedSpecialty.averageConsultation}
                  </p>
                  <p>
                    <strong>Indicações:</strong> {selectedSpecialty.indications}
                  </p>
                  <p>
                    <strong>Pós-procedimento:</strong>{' '}
                    {selectedSpecialty.postProcedure}
                  </p>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div className="my-3">
                <h4 className="mb-3 text-lg font-bold text-[#444444]">
                  Quando procurar um especialista em {selectedSpecialty.name}?
                </h4>
                <p>{selectedSpecialty.when_see}</p>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-bold text-[#444444]">
                  Orientações ao Paciente
                </h4>
                <ul className="space-y-2">
                  {selectedSpecialty.preparations.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FD0003]" />
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
