

export default async function Details({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/news/${params.id}`,
    { cache: "no-store" }
  );

  const news = await res.json();

  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.content}</p>
    </div>
  );
}