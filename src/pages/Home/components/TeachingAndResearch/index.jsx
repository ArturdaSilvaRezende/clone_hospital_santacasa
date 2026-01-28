import Image from 'next/image'

export default function TeachingAndResearch() {
  return (
    <section className="my-24" aria-labelledby="Ensino & Pesquisa">
      <div className="container mx-auto max-w-285 rounded-tr-[48px] rounded-br-[48px] rounded-bl-[48px] bg-[#FDE4E1]">
        <div className="grid grid-cols-2 gap-10 pt-15 pr-27.5 pb-15 pl-27.5">
          <Image
            src="/images/ensino-pesquisa-retangulos.svg"
            alt="ensino e pesquisa"
            width={689}
            height={558}
            className="object-cover"
          />

          <div className="flex flex-col gap-5">
            <h2 className="text-[32px] leading-tight font-bold text-gray-900">
              Ensino <span className="text-[#E63946]">&</span> Pesquisa
            </h2>

            <div>
              <p className="text-[16px] text-[#535353B2]">
                O setor de Ensino e Pesquisa da Santa Casa de Goiânia incentiva
                a disseminação dos conhecimentos humanos e técnicos aplicados à
                assistência, ensino, pesquisa e extensão, valorizando os
                profissionais que atuam junto à Instituição e demonstrando o
                compromisso da instituição com a formação de futuros
                profissionais.
              </p>

              <ul className="pl-5">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 min-w-2 rounded-full bg-[#535353B2]"></div>
                  <span className="text-[16px] text-[#535353B2]">
                    É hospital escola da Puc Goiás - recebe mensalmente cerca de
                    1 mil alunos nos programas de estágio.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 min-w-2 rounded-full bg-[#535353B2]"></div>
                  <span className="text-[16px] text-[#535353B2]">
                    Possui 13 cursos de Residência Médica - se consolida como
                    referência regional, sendo uma instituição que integra
                    ensino, pesquisa e prática hospitalar em um ambiente de alta
                    complexidade.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                className="group flex h-10.75 w-[225.5px] items-center justify-center gap-3 rounded-full border-2 border-[##FD0003] px-4 font-medium text-[#FD0003] transition-all duration-300 hover:bg-[rgba(226,25,25,0.1)]"
                aria-label="Acessar informações sobre graduação"
              >
                <Image
                  src="/icons/graduation-icon-red.svg"
                  alt="ícone de graduação"
                  width={20}
                  height={20}
                />
                <span>Graduação</span>
              </button>

              <button
                className="group flex h-10.75 w-[225.5px] items-center justify-center gap-3 rounded-full border-2 border-[#FD0003] px-4 font-medium text-[#FD0003] transition-all duration-300 hover:bg-[rgba(226,25,25,0.1)]"
                aria-label="Acessar informações sobre residência médica"
              >
                <Image
                  src="/icons/medical-residency-icon-red.svg"
                  alt="ícone de residência médica"
                  width={20}
                  height={20}
                />
                <span>Residência Médica</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
