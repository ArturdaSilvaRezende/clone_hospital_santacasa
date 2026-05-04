'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { api } from '~/services/api'

import NavExams from './components/NavExams'
import NavSpecialties from './components/NavSpecialties'
import ListSpecialties from './components/ListSpecialties'
import Search from './components/Search'
import ListExams from './components/ListExams'

import { examsList } from './utils'

export function List() {
  const [data, setData] = useState([])
  const [specialityLimit, setSpecialityLimit] = useState(4)
  const [specialityList, setSpecialityList] = useState([])
  const [examsId, setExamsId] = useState(null)
  const [specialityId, setSpecialityId] = useState(null)
  const [specialityCounts, setSpecialityCounts] = useState({})
  const [search, setSearch] = useState('')
  const [searchExams, setSearchExams] = useState('')
  const [pagination, setPagination] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isShowingAllSpecialities, setIsShowingAllSpecialities] =
    useState(false)
  const [isShowingAllExams, setIsShowingAllExams] = useState(false)
  const [currentContent, setCurrentContent] = useState('specialties')
  const [viewType, setViewType] = useState('grid')

  const topListRef = useRef(null)

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

    if (topListRef.current) {
      topListRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleSetExamsId = category => {
    setExamsId(prev => (prev === category ? null : category))
    setCurrentPage(1)
    setIsShowingAllExams(false)

    if (topListRef.current) {
      topListRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleShowAllSpecialities = () => {
    setIsShowingAllSpecialities(true)
  }

  const handleShowAllExams = () => {
    setIsShowingAllExams(true)
  }

  async function loadSpecialities() {
    try {
      const result = await api.get(`/specialties?limit=100`)
      const specialties = result.data?.list || []
      setSpecialityList(specialties)
    } catch (err) {
      console.error('Erro ao carregar especialidades:', err)
    }
  }

  const load = useCallback(async () => {
    try {
      setIsLoading(true)

      const params = new URLSearchParams()

      // Se specialityId existir, ele envia o UUID para o back-end
      if (specialityId) params.append('speciality_id', specialityId)
      if (search) params.append('name', search)

      params.append('limit', '9')
      params.append('page', currentPage.toString())

      const result = await api.get(`/doctors?${params.toString()}`)

      setData(result.data?.list || [])
      setPagination(result.data?.pagination || {})
    } catch (err) {
      console.error(`Erro na chamada /doctors: ${err}`)
    } finally {
      setIsLoading(false)
    }
  }, [specialityId, search, currentPage])

  async function loadStats() {
    try {
      const result = await api.get(`/doctors?limit=1000&page=1`)
      const allDoctors = result.data?.list || []

      const counts = allDoctors.reduce((acc, doctor) => {
        doctor.specialties?.forEach(s => {
          const key = s.label
          if (key) acc[key] = (acc[key] || 0) + 1
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
  }, [specialityId, currentPage, search])

  return (
    <section
      className="container mx-auto my-12 font-sans max-sm:my-8 max-sm:px-6 md:px-8 lg:px-8 xl:px-0"
      aria-label="Especialidades"
    >
      {currentContent === 'specialties' && (
        <Search
          setSearch={setSearch}
          load={load}
          handleShowAllData={handleShowAllSpecialities}
          viewType={viewType}
          setViewType={setViewType}
        />
      )}

      {currentContent === 'exams' && (
        <Search
          setSearch={setSearchExams}
          handleShowAllData={handleShowAllExams}
          viewType={viewType}
          setViewType={setViewType}
        />
      )}

      <div className="mt-4 flex items-center gap-2 text-sm text-[#727070] lg:hidden">
        <button
          onClick={() => setCurrentContent('specialties')}
          className="w-max rounded-xl border border-[#727070]/10 bg-white px-3 py-3 hover:bg-gray-50"
        >
          Mostrar Especialidades
        </button>
        <button
          onClick={() => setCurrentContent('exams')}
          className="w-max rounded-xl border border-[#727070]/10 bg-white px-3 py-3 hover:bg-gray-50"
        >
          Mostrar Exames
        </button>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <aside className="w-full md:w-72.25">
          <NavSpecialties
            specialityId={specialityId}
            specialityList={specialityList}
            specialityLimit={specialityLimit}
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
            viewType={viewType}
            ref={topListRef}
          />
        )}

        {currentContent === 'exams' && (
          <ListExams
            ref={topListRef}
            data={filteredExams}
            viewType={viewType}
            setViewType={setViewType}
          />
        )}
      </div>
    </section>
  )
}
