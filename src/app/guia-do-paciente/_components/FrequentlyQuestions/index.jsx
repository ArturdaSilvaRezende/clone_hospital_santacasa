import Link from 'next/link'
import { useId } from 'react'
import AccordionSection from '~/components/AccordionSection'

const faq = [
  {
    id: 1,
    title: 'Orientações para o 1º Atendimento',
    description:
      'Para o seu primeiro atendimento, apresente-se na recepção central com 30 minutos de antecedência, portando documento oficial com foto, cartão do SUS e, se houver, encaminhamento médico ou exames recentes realizados fora da unidade.'
  },
  {
    id: 2,
    title: 'Como chegar na Santa Casa de Misericórdia de Goiânia',
    description:
      'Localizada no Setor Vila Americana, a unidade possui fácil acesso via transporte público e áreas de embarque/desembarque para aplicativos. Recomendamos verificar o mapa em nosso site oficial para identificar a entrada mais próxima da sua especialidade.'
  },
  {
    id: 3,
    title: 'Horário de Visita',
    description:
      'As visitas ocorrem diariamente em horários escalonados para garantir o repouso dos pacientes. Nas enfermarias, o acesso é permitido das 14h às 16h, enquanto nas UTIs os horários são restritos e comunicados diretamente pelo serviço de assistência social.'
  },
  {
    id: 4,
    title: 'Regras da Casa',
    description:
      'Para a segurança de todos, é proibida a entrada com alimentos externos, flores ou trajes inadequados. Solicitamos o uso de máscara em áreas assistenciais e que o silêncio seja respeitado em todos os corredores e áreas comuns do hospital.'
  }
]

export default function FrequentlyQuestions() {
  const id = useId()

  return (
    <section
      className="my-16"
      aria-labelledby={`${id}-frequently-asked-questions`}
    >
      <div className="container mx-auto max-sm:px-6 md:px-8 xl:px-0">
        <h2
          className="mb-7 text-center text-[32px] font-medium text-black max-sm:text-[28px]"
          id={`${id}-frequently-asked-questions`}
        >
          Perguntas Frequentes
        </h2>
        <AccordionSection list={faq} />
        <Link
          href="#"
          className="group mx-auto mt-8 flex h-9.5 w-65.25 items-center justify-center gap-2 rounded-3xl border border-[#FD0003] font-normal text-[#FD0003] transition-colors hover:bg-red-50"
          aria-label="Ver central de Perguntas"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Ver central de Perguntas</span>
        </Link>
      </div>
    </section>
  )
}
