import Image from 'next/image'
import DataTime from '~/components/CustomComponents/DataTime'

export default async function Page({ params }) {
  const { id } = await params
  const STRAPI_URL = 'http://localhost:1337'

  const res = await fetch(`${STRAPI_URL}/api/noticias/${id}?populate=*`, {
    next: { revalidate: 60 }
  })

  const allRes = await fetch(
    `${STRAPI_URL}/api/noticias?populate=*&pagination[limit]=4`,
    {
      next: { revalidate: 60 }
    }
  )

  if (!res.ok || !allRes.ok) {
    throw new Error('Erro ao carregar dados do Strapi')
  }

  const responseJson = await res.json()
  const data = responseJson.data || {}


  const renderContent = text => {
    if (!text) return null

    return text
      .split('\n')
      .filter(line => line.trim() !== '')
      .map((paragraph, index) => {
        const trimmedPara = paragraph.trim()

        if (
          trimmedPara.length > 0 &&
          trimmedPara.length < 60 &&
          !trimmedPara.endsWith('.')
        ) {
          return (
            <h2 key={index} className="text-[18px] font-bold text-gray-900">
              {trimmedPara}
            </h2>
          )
        }

        if (/^\d+\./.test(trimmedPara)) {
          return (
            <li key={index} className="mb-1 ml-5 list-decimal text-gray-700">
              {trimmedPara.replace(/^\d+\.\s*/, '')}
            </li>
          )
        }

        return (
          <p key={index} className="mb-4">
            {trimmedPara}
          </p>
        )
      })
  }

  return (
    <article className="container mx-auto my-15 max-sm:px-5 md:px-8 xl:px-0">
      <header className="mb-10 flex flex-col items-center">
        <h1 className="mx-auto mb-3 max-w-4xl text-center text-[36px] leading-[1.1] font-bold max-sm:text-[24px]">
          {data.title}
        </h1>

        <div className="flex items-center justify-center gap-3">
          <Image
            src="/icons/calendar-month-icon-gray.svg"
            alt="Calendário"
            height={17}
            width={17}
          />

          <DataTime data={{ createdAt: data.createdAt }} top="mt-1" />
        </div>
      </header>

      <div className="container mx-auto">
        {data.is_banner === true ? (
          <img
            className="w-full rounded-lg object-cover"
            src={`http://localhost:1337${data?.banner?.url}`}
            alt={data.title}
            role="img"
            aria-label={data.title}
          />
        ) : (
          <div className="relative float-left mr-8 mb-4 h-75 w-full overflow-hidden rounded-lg md:h-100 md:w-1/2 lg:w-160.5">
            <div
              className="h-75 w-full rounded-lg bg-cover bg-center md:h-100 md:w-full lg:w-160.5"
              style={{
                backgroundImage: `url(http://localhost:1337${data?.news_image?.url})`,
                backgroundColor: '#BE3131'
              }}
              role="img"
              aria-label={data.title}
            />
          </div>
        )}

        <div className="text-justify text-lg leading-relaxed whitespace-pre-line text-gray-800">
          {renderContent(data.description)}
        </div>

        <div className="clear-both"></div>
      </div>
    </article>
  )
}
