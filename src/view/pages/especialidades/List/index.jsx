'use client'

import React, { useEffect, useState } from 'react'

import { api } from '~/services/api'

import NavExams from './components/NavExams'
import NavSpecialties from './components/NavSpecialties'
import ListSpecialties from './components/ListSpecialties'
import SearchSpecialties from './components/SearchSpecialties'
import ListExams from './components/ListExams'

import { examsList } from './utils'
import SearchExams from './components/SearchExams'

export function List() {
  const [data, setData] = useState([])
  const [specialityLimit, setSpecialityLimit] = useState(4)
  const [specialityList, setSpecialityList] = useState([])
  const [examsId, setExamsId] = useState(null)
  const [specialityId, setSpecialityId] = useState(null)
  const [specialityCounts, setSpecialityCounts] = useState({})
  const [totalDoctors, setTotalDoctors] = useState(0)
  const [search, setSearch] = useState('')
  const [searchExams, setSearchExams] = useState('')
  const [pagination, setPagination] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isShowingAllSpecialities, setIsShowingAllSpecialities] =
    useState(false)
  const [isShowingAllExams, setIsShowingAllExams] = useState(false)
  const [currentContent, setCurrentContent] = useState('specialties')

  const categories = [
    ...new Map(examsList.map(item => [item.category, item])).values()
  ]

  const filteredExams = examsId
    ? examsList.filter(exam => exam.category === examsId)
    : examsList

  const handleSetSpecialityId = id => {
    setSpecialityId(id === specialityId ? null : id)
    setCurrentPage(1)
    setIsShowingAllSpecialities(false)
  }

  const handleSetExamsId = category => {
    setExamsId(prev => (prev === category ? null : category))
    setCurrentPage(1)
    setIsShowingAllExams(false)
  }

  const handleShowAllSpecialities = () => {
    setIsShowingAllSpecialities(true)
  }

  const handleShowAllExams = () => {
    setIsShowingAllExams(true)
  }

  async function loadSpecialities() {
    try {
      const result = await api.get(`/especialidades-medicas?limit=100`)
      setSpecialityList(result.data?.list || [])
    } catch (err) {
      console.error(err)
    }
  }

  async function load() {
    try {
      setIsLoading(true)
      const queryId = specialityId ? specialityId : ''
      const result = await api.get(
        `/doctors?speciality_id=${queryId}&name=${search}&limit=9&page=${currentPage}`
      )
      setData(result.data?.list || [])
      setPagination(result.data?.pagination || {})
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  async function loadStats() {
    try {
      const result = await api.get(`/doctors?limit=1000`)
      const allDoctors = result.data?.list || []

      setTotalDoctors(allDoctors.length)

      const counts = allDoctors.reduce((acc, doctor) => {
        doctor.speciality?.forEach(spec => {
          acc[spec.value] = (acc[spec.value] || 0) + 1
        })
        return acc
      }, {})

      setSpecialityCounts(counts)
    } catch (err) {
      console.error('Erro ao carregar estatísticas:', err)
    }
  }

  useEffect(() => {
    loadSpecialities()
    loadStats()
  }, [])

  useEffect(() => {
    load()
  }, [specialityId, currentPage])

  return (
    <section className="container mx-auto my-12 font-sans max-sm:my-8 max-sm:px-5 md:px-8 lg:px-8 xl:px-0" aria-label="Especialidades">
      {currentContent === 'specialties' && (
        <SearchSpecialties
          setSearch={setSearch}
          load={load}
          handleShowAllSpecialities={handleShowAllSpecialities}
        />
      )}

      {currentContent === 'exams' && (
        <SearchExams
          setSearch={setSearchExams}
          handleShowAllExams={handleShowAllExams}
        />
      )}

      <div className="mt-4 flex items-center gap-2 text-sm text-[#727070] mb-5 lg:hidden">
        <button onClick={() => setCurrentContent('specialties')}  className='border hover:bg-gray-50 border-[#727070]/10 rounded-xl w-max px-3 py-3'>Mostrar Especialidades</button>
        <button onClick={() => setCurrentContent('exams')} className='border hover:bg-gray-50 border-[#727070]/10 rounded-xl w-max px-3 py-3'>Mostrar Exames</button>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <aside className="w-full md:w-72.25">
          <NavSpecialties
            specialityId={specialityId}
            specialityList={specialityList}
            specialityLimit={specialityLimit}
            totalDoctors={totalDoctors}
            specialityCounts={specialityCounts}
            isShowingAllSpecialities={isShowingAllSpecialities}
            currentContent={currentContent}
            setCurrentContent={setCurrentContent}
            setSpecialityLimit={setSpecialityLimit}
            setIsShowingAllSpecialities={setIsShowingAllSpecialities}
            handleSetSpecialityId={handleSetSpecialityId}
          />

          <NavExams
            examsList={categories}
            examsId={examsId}
            handleSetExamsId={handleSetExamsId}
            isShowingAllExams={isShowingAllExams}
            setIsShowingAllExams={setIsShowingAllExams}
            totalExams={examsList.length}
            currentContent={currentContent}
            setCurrentContent={setCurrentContent}
          />
        </aside>

        {currentContent === 'specialties' && (
          <ListSpecialties
            data={data}
            isLoading={isLoading}
            pagination={pagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentContent === 'exams' && <ListExams data={filteredExams} />}
      </div>
    </section>
  )
}
