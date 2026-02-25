import Home from '~/view/pages/midia/Home'

export default async function Midia({ searchParams }) {
  const params = await searchParams

  const page = Number(params.page) || 1

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/events?page=${page}`,
    {
      cache: 'no-store'
    }
  )

  if (!res.ok) {
    throw new Error('Erro ao buscar eventos')
  }

  const result = await res.json()

  return <Home initialData={result.list || []} pagination={result.pagination} />
}
