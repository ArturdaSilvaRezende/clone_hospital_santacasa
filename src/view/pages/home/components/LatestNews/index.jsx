'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { api } from '~/services/api'
import ListCards from '~/components/ListCards'

export default function LatestNews() {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function load() {
    try {
      setIsLoading(true)
      const result = await api.get(`/news`)

      setList(result?.data?.list)
    } catch (err) {
      console.log(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <section
      className="bg-white pt-24 pb-14 max-sm:pt-12"
      aria-labelledby="Últimas Notícias"
    >
      <div className="container mx-auto max-sm:px-6 md:px-8 lg:px-0">
        <h2
          id="latest-news-heading"
          className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
        >
          Últimas Notícias
        </h2>

       

        <ListCards list={list} />

         <Link
          href="/noticias"
          className="mt-10 block text-right text-[16px] font-medium text-[#D32F2F] transition-colors hover:text-[#A45757] max-sm:mt-3"
          aria-label="Ver todas as notícias"
        >
          Ver todas as notícias
        </Link>
      </div>
    </section>
  )
}
