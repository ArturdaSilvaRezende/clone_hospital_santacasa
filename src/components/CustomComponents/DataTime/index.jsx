import { formatInTimeZone } from 'date-fns-tz'
import { ptBR } from 'date-fns/locale'

export default function DataTime({ data, top }) {
  const rawDate = data.date || data.createdAt

  const dateFormatter = date => {
    if (!date) return ''

    try {
      const parsedDate = new Date(date)

      if (isNaN(parsedDate.getTime())) return ''

      return formatInTimeZone(parsedDate, 'UTC', "d 'de' MMMM 'de' yyyy", {
        locale: ptBR
      })
    } catch (error) {
      console.error('Erro ao formatar data:', error)
      return ''
    }
  }

  return (
    <div className={` ${top ? top : 'max-sm:mt-28 md:mt-20 lg:mt-40'}`}>
      <time
      dateTime={rawDate}
      className={`relative mb-3 text-[16px] text-gray-500`}
    >
      {dateFormatter(rawDate)}
    </time>
    </div>
  )
}
