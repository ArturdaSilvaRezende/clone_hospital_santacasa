import Image from 'next/image'

export default function TeachingAndResearch() {
  return (
    <section
      className="bg-white py-16"
      aria-labelledby="teaching-research-title"
    >
      <div className="container mx-auto max-sm:px-6 lg:px-10 xl:px-0">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div
            className="rounded-2xl bg-cover bg-center shadow-lg max-sm:h-101.5 max-sm:w-full md:mb-6 md:h-101.5 md:w-150 lg:h-165 xl:h-151 lg:w-187 md:mx-auto lg:mx-0 xl:relative xl:left-4"
            style={{
              backgroundImage: "url('/images/banner-ensino-e-pesquisa.svg')",
              backgroundColor: '#BE3131'
            }}
            role="img"
            aria-label="Médica sorrindo segurando uma prancheta vermelha"
          />

          <div className="relative z-10 flex w-[95%] flex-col gap-5 rounded-[30px] bg-[#FFF0EE] p-10 shadow-sm max-sm:w-full max-sm:p-5 md:w-150 lg:-ml-20 lg:h-165 xl:h-151 lg:w-125 md:mx-auto lg:mx-0">
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
                className="flex h-11 w-fit min-w-50 items-center gap-3 rounded-full border border-[#D32F2F] px-6 text-[14px] font-semibold text-[#D32F2F] transition-all hover:bg-[#D32F2F] hover:text-white"
                aria-label="Acessar Residência Médica"
              >
                <Image
                  src="/icons/medical-residency-icon-red.svg"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Residência Médica</span>
              </button>

              <button
                className="flex h-11 w-fit min-w-50 items-center gap-3 rounded-full border border-[#D32F2F] px-6 text-[14px] font-semibold text-[#D32F2F] transition-all hover:bg-[#D32F2F] hover:text-white"
                aria-label="Acessar Espaço para graduação"
              >
                <Image
                  src="/icons/graduation-icon-red.svg"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Espaço para graduação</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
