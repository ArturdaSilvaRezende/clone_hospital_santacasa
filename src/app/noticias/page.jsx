import Home from "./_components/noticias/Home"

async function getNews() {
  const res = await fetch('http://localhost:1337/api/noticias/?populate=*', {
    next: { revalidate: 60 }
  })
  const result = await res.json()
  return result.data || []
}

export default async function Noticias() {
  
  const newsPromise = getNews()

  return <Home newsPromise={newsPromise}  />
}
