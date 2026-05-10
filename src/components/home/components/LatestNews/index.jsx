'use client'
import { use } from 'react'
import Link from 'next/link'
import ListCards from '~/components/ListCards'

export default function LatestNews({ newsPromise = [] }) {
  const list = use(newsPromise)

  if (list.length === 0) return null
  
  return (
    <section
      className="bg-white pt-24 pb-14 max-sm:pt-12"
      aria-labelledby="Últimas Notícias"
    >
      <div className="container mx-auto max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <h2
          id="latest-news-heading"
          className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
        >
          Últimas Notícias
        </h2>

        <ListCards list={list} />

        <Link
          href="/noticias"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 ml-auto block w-max text-right text-[16px] font-medium text-gray-900 transition-colors hover:text-gray-600"
          aria-label="Ver todas as notícias"
        >
          Ver todas as notícias
        </Link>
      </div>
    </section>
  )
}
