import Image from 'next/image'
import Link from 'next/link'

export default async function Page({ params }) {
  const { id } = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/news/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Erro ao buscar notícia')
  }

  const data = await res.json()
  const news = data.info

  return (
    <>
      <article
        className="mx-auto my-15 max-sm:mt-15 max-sm:mb-5 flex max-w-280 flex-col items-center gap-5 max-sm:px-5 md:px-8 lg:px-0"
        aria-labelledby={news.title}
      >
        <header>
          <h1 className="text-center text-[36px] max-sm:text-[24px] font-medium">{news.title}</h1>

          <div className="flex justify-center gap-3 max-sm:mt-2">
            <Image
              src="/icons/calendar-month-icon-gray.svg"
              alt="Calendar Icon"
              height={17}
              width={17}
            />
            <time dateTime={news.date} className="text-[16px] text-[#727070]">
              {new Date(news.date).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
          </div>
        </header>

        <img
          className="h-112.5 w-[75%] max-sm:w-full max-sm:h-65 rounded-[42px] object-center transition-transform duration-300 hover:scale-105 hover:transform"
          src={news.url}
          alt={news.title}
        />

        <p className="text-[15px] font-normal text-[#2F2E41]">
          {news.description}
        </p>
      </article>
      <div className='max-w-280 mx-auto flex justify-end mb-18 max-sm:px-5 md:px-8 lg:px-0 max-sm:mb-15'>
         <Link
        href="/noticias"
        className="mt-5 w-40 block rounded-2xl bg-[#2F2E41] px-3 py-3 text-center text-white hover:bg-[#1f1e2b]"
      >
        Voltar
      </Link>
      </div>
     
    </>
  )
}
