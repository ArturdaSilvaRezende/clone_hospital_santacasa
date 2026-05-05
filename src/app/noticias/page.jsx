import Home from "./_components/noticias/Home"


export default async function Noticias({ searchParams }) {
  const params = await searchParams

  const page = Number(params.page) || 1

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/news?page=${page}`, {
     next: { revalidate: 60 }
  })

  if (!res.ok) {
    throw new Error('Erro ao buscar notícias')
  }

  const result = await res.json()

  return <Home initialData={result.list || []} pagination={result.pagination} />
}
