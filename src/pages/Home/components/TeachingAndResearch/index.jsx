import Image from 'next/image'

export default function TeachingAndResearch() {
  return (
    <section className="bg-white pb-24" aria-labelledby="Ensino & Pesquisa">
      <div className="container mx-auto max-w-285">
        <div className="flex justify-between gap-5">
          <Image
            src="/images/banner-ensino-e-pesquisa.svg"
            alt="ensino e pesquisa"
            width={625}
            height={599}
            className="object-cover"
          />

          <div className="relative -left-7 flex w-116 flex-col gap-4 rounded-[15px] bg-[#FDE4E1] p-7">
            <h2 className="text-[24px] leading-tight font-bold text-[#FD0003]">
              Ensino & Pesquisa
            </h2>

            <div className="text-[16px] font-medium text-[#A45757]">
              <p>
                O setor de Ensino e Pesquisa da Santa Casa de Goiânia incentiva
                a disseminação dos conhecimentos humanos e técnicos aplicados à
                assistência, ensino, pesquisa e extensão, valorizando os
                profissionais que atuam junto à Instituição e demonstrando o
                compromisso da instituição com a formação de futuros
                profissionais.
              </p>

              <ul>
                <li>
                  → É hospital escola da Puc Goiás - recebe mensalmente cerca de
                  1 mil alunos nos programas de estágio.
                </li>
                <li>
                  → Possui 13 cursos de Residência Médica - se consolida como
                  referência regional, sendo uma instituição que integra ensino,
                  pesquisa e prática hospitalar em um ambiente de alta
                  complexidade.
                </li>
              </ul>
            </div>

            <div className="mt-3 flex gap-4">
              <button
                className="group flex h-10.75 w-[265.5px] items-center justify-center gap-3 rounded-full border border-[##FD0003] px-3 text-[14px] font-normal text-[#FD0003] transition-all duration-300 hover:bg-[rgba(226,25,25,0.1)]"
                aria-label="Acessar informações sobre graduação"
              >
                <Image
                  src="/icons/graduation-icon-red.svg"
                  alt="ícone de graduação"
                  width={20}
                  height={20}
                />
                <span>Espaço para graduação</span>
              </button>

              <button
                className="group flex h-10.75 w-[225.5px] items-center justify-center gap-3 rounded-full border border-[#FD0003] px-4 text-[14px] font-normal text-[#FD0003] transition-all duration-300 hover:bg-[rgba(226,25,25,0.1)]"
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
