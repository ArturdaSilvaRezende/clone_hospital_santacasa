import { formatInTimeZone } from 'date-fns-tz'
import { ptBR } from 'date-fns/locale'

export default function DataTime({ data, top }) {
  const dateFormatter = (date) => {
    return formatInTimeZone(
      date, 
      'UTC', 
      "d 'de' MMMM 'de' yyyy",
      { locale: ptBR }
    )
  }

  return (
    <time
      dateTime={data.date}
      className={`relative ${top ? `${top}` : 'top-16'} mb-3 text-[16px] text-gray-500`}
    >
      {dateFormatter(data.date)}
    </time>
  )
}