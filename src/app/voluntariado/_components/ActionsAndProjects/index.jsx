'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineHeart, HiOutlineExternalLink } from 'react-icons/hi'

const acoes = [
  {
    id: 1,
    titulo: 'Cabelo cresce, Solidariedade aparece',
    descricao:
      'Incentivo à doação de fios para a confecção de perucas destinadas a pacientes em tratamento oncológico.'
  },
  {
    id: 2,
    titulo: 'Chocolatinho da leitura',
    descricao:
      'Sessões de terapia que utilizam recursos literários e acolhimento para estimular a mente e o bem-estar.'
  },
  {
    id: 3,
    titulo: 'Barbeiro Solidário',
    descricao:
      'Parceria com barbearias locais para oferecer serviços de higiene e autoestima a quem mais precisa.'
  },
  {
    id: 4,
    titulo: 'Escutando com o coração',
    descricao:
      'Atendimento focado na escuta ativa e no desenvolvimento de prontuários afetivos para humanizar o cuidado.'
  },
  {
    id: 5,
    titulo: 'Tecendo Vidas',
    descricao:
      'Oficinas de crochê como ferramenta terapêutica para redução de ansiedade e geração de novos laços social.'
  }
]

const projetos = [
  {
    id: 1,
    titulo: 'Reforma Hospitalar',
    descricao:
      'Modernização das alas de atendimento para proporcionar mais conforto aos pacientes do SUS.'
  },
  {
    id: 2,
    titulo: 'Educação em Saúde',
    descricao:
      'Programas educativos para prevenção de doenças e promoção de hábitos saudáveis na comunidade.'
  }
]

export default function ActionsAndProjects() {
  const [activeTab, setActiveTab] = useState('acoes')
  const id = useId()
  const content = activeTab === 'acoes' ? acoes : projetos

  return (
    <section
      className="relative bg-white py-16 md:-top-15 lg:-top-15 xl:top-0"
      aria-labelledby={`${id}-actions-projects`}
    >
      <div className="container mx-auto max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <div className="mb-4 text-center">
          <span className="text-sm font-bold tracking-widest text-[#FD0003] uppercase">
            Ações e Projetos
          </span>
          <h2 className="text-[28px] font-bold text-black" id={`${id}-actions-projects`}>
            Nosso impacto na comunidade
          </h2>
        </div>

        <div
          className="mb-12 flex justify-center gap-4"
          role="tablist"
          aria-label="Categorias de impacto"
        >
          <button
            onClick={() => setActiveTab('acoes')}
            role="tab"
            aria-selected={activeTab === 'acoes'}
            aria-controls="panel-content"
            id="tab-acoes"
            className={`rounded-full border-2 px-8 py-2 font-medium transition-all duration-300 ${
              activeTab === 'acoes'
                ? 'border-[#FD0003] bg-[#FD0003] text-white'
                : 'border-[#FD0003] bg-white text-[#FD0003] hover:bg-red-50'
            }`}
          >
            Ações
          </button>
          <button
            onClick={() => setActiveTab('projetos')}
            role="tab"
            aria-selected={activeTab === 'projetos'}
            aria-controls="panel-content"
            id="tab-projetos"
            className={`rounded-full border-2 px-8 py-2 font-medium transition-all duration-300 ${
              activeTab === 'projetos'
                ? 'border-[#FD0003] bg-[#FD0003] text-white'
                : 'border-[#FD0003] bg-white text-[#FD0003] hover:bg-red-50'
            }`}
          >
            Projetos
          </button>
        </div>

        <div
          id="panel-content"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
        >
          {content.map(item => (
            <article
              key={item.id}
              className="flex flex-col items-start rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md xl:w-104"
            >
              <div className="mb-2 rounded-full bg-red-50 p-3">
                <HiOutlineHeart
                  className="text-2xl text-[#FD0003]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mb-3 text-[16px] leading-tight font-bold">
                {item.titulo}
              </h3>

              <p className="mb-5 grow text-[14px] font-normal text-[#727070]">
                {item.descricao}
              </p>

              <Link
                href="#"
                className="group flex h-8 w-60.75 items-center justify-center gap-2 rounded-3xl border border-[#727070] px-4 py-1.5 text-[13px] font-normal text-[#727070] transition-colors hover:bg-gray-50"
                aria-label="Quero ser um voluntário"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Quero ser um voluntário</span>
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <Image
                    src="/icons/arrow-up-icon-gray.svg"
                    alt="ícone de seta para indicar link"
                    width={16}
                    height={16}
                  />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
