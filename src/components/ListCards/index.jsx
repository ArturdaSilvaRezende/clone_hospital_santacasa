import Image from 'next/image'
import Link from 'next/link'
import DataTime from '../CustomComponents/DataTime'

export default function ListCards({ list = [] }) {
  return (
    <div className="flex justify-between max-sm:flex-col max-sm:justify-center max-sm:gap-10 md:flex-wrap md:gap-5 lg:flex-nowrap lg:gap-5">
      {list
        .slice()
        .sort((a, b) => {
          const dateA = new Date(a.createdAt || 0).getTime()
          const dateB = new Date(b.createdAt || 0).getTime()
          return dateB - dateA
        })
        .slice(0, 3)
        .map(news => (
          <article
            key={news.id}
            className="flex flex-col max-sm:w-full md:w-[48%] lg:w-101.75"
          >
            <div className="h-48 w-full">
              <div
                className="w-auto rounded-lg bg-cover bg-center max-sm:h-70 md:h-60 lg:h-81.5"
                style={{
                  backgroundImage: `url(http://localhost:1337${news.news_image.url})`,
                  backgroundColor: '#BE3131'
                }}
                role="img"
                aria-label={news.news_image.alternativeText || news.title}
              />
            </div>

            <DataTime data={news} />

            <div className="flex flex-col px-2 -mt-12 ">
              <h3 className="mt-15 mb-3 line-clamp-2 text-[24px] font-semibold text-gray-900 max-sm:text-[20px]">
                {news.title}
              </h3>

              <p className="mb-4 line-clamp-3 text-[14px] font-normal text-[#535353]">
                {news.description}
              </p>

              <div className="border-t border-[#B4B4B4] pt-5">
                <Link
                  href={`/noticias/${news.documentId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10.5 w-39.25 items-center justify-center gap-2 rounded-3xl border border-[#B4B4B4] font-semibold text-[#111032] transition-colors hover:bg-gray-100"
                  aria-label={`Ler mais sobre ${news.title}`}
                >
                  <span>Ler mais</span>
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <Image
                      src="/icons/arrow-up-icon-gray.svg"
                      alt="ícone de seta para indicar link"
                      width={16}
                      height={16}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
    </div>
  )
}
