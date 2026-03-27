import Image from 'next/image'
import Link from 'next/link'
import { TbIdBadge2 } from 'react-icons/tb'
import { LuGraduationCap } from 'react-icons/lu'

export default function TeachingAndResearch() {
  return (
    <section
      className="bg-white py-16"
      aria-labelledby="teaching-research-title"
    >
      <div className="container mx-auto max-sm:px-6 lg:px-10 xl:px-0">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div
            className="rounded-2xl bg-cover bg-center shadow-lg max-sm:h-101.5 max-sm:w-full md:mx-auto md:h-101.5 md:w-150 lg:mx-0 lg:h-180 lg:w-187 xl:relative xl:left-4 xl:h-151"
            style={{
              backgroundImage: "url('/images/banner-ensino-e-pesquisa.svg')",
              backgroundColor: '#BE3131'
            }}
            role="img"
            aria-label="Médica sorrindo segurando uma prancheta vermelha"
          />

          <div className="relative z-10 flex w-[95%] flex-col gap-5 rounded-[30px] bg-[#FFF0EE] p-10 shadow-sm max-sm:w-full max-sm:p-5 md:mx-auto md:w-150 lg:mx-0 lg:-ml-20 lg:h-180 lg:w-125 xl:h-151">
            <h2
              id="teaching-research-title"
              className="text-[28px] font-bold text-[#D32F2F]"
            >
              Ensino & Pesquisa
            </h2>

            <div className="flex flex-col gap-4 text-[15px] leading-relaxed font-medium text-[#A45757]">
              <p>
                O setor de Ensino e Pesquisa da Santa Casa de Goiânia incentiva
                a disseminação dos conhecimentos humanos e técnicos, e preza
                pela produção de pesquisa científica aplicada, voltadas à
                inovação e à melhoria da qualidade assistencial, buscando sempre
                por um serviço de saúde humanizado e de excelência.
              </p>

              <ul className="flex flex-col gap-3">
                <li>
                  <span className="mr-1">→</span> É hospital escola da Puc Goiás
                  - recebe mensalmente cerca de 1 mil alunos nos programas de
                  estágio.
                </li>
                <li>
                  <span className="mr-1">→</span> Possui 13 cursos de Residência
                  Médica - se consolida como referência regional, sendo uma
                  instituição que integra ensino, pesquisa e prática hospitalar
                  em um ambiente de alta complexidade.
                </li>
              </ul>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <button
                className="h-11 w-fit min-w-50 rounded-full border border-[#D32F2F] px-6 text-[14px] font-semibold text-[#D32F2F] transition-all hover:bg-[#D32F2F] hover:text-white"
                aria-label="Acessar Residência Médica"
              >
                <Link
                  href="/residencia-medica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <TbIdBadge2 size={22} />
                  <span>Residência Médica</span>
                </Link>
              </button>

              <button
                className="flex h-11 w-fit min-w-50 items-center gap-3 rounded-full border border-[#D32F2F] px-6 text-[14px] font-semibold text-[#D32F2F] transition-all hover:bg-[#D32F2F] hover:text-white"
                aria-label="Acessar Espaço para graduação"
              >
                <Link
                  href="/espaco-para-graduacao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <LuGraduationCap size={22} />
                  <span>Espaço para graduação</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
