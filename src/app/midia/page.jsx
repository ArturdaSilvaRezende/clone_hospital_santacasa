import Home from '~/view/pages/midia/Home'
import { listMidia } from '~/view/pages/midia/utils'

export default async function Midia() {
  const result = {
    list: listMidia,
    pagination: {
      page: 1,
      page_count: 1,
      total_count: listMidia.length
    }
  }

  return <Home initialData={result.list} pagination={result.pagination} />
}
