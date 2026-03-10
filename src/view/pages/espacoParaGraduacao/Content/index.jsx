import Carousel from './components/Carousel'

export default function Content() {
  return (
    <section className="container mx-auto my-16">
      <div>
        <span>Biblioteca</span>
        <h1>Posto de Atendimento Santa Casa (PABSC)</h1>
      </div>
      <div>
        <Carousel />
      </div>
    </section>
  )
}
