import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import {
  MdOutlineAccessTime,
  MdOutlineCalendarToday,
  MdOutlineMailOutline,
  MdOutlinePersonOutline
} from 'react-icons/md'

export default function Banner() {
  return (
    <section
      className="relative min-h-150 w-full overflow-hidden bg-white md:flex-row"
      aria-label="Espaço para Graduação"
    >
      <div className="container mx-auto flex flex-col gap-20 max-sm:mb-14 max-sm:gap-0 md:flex-row md:gap-0 md:px-8 lg:gap-2 xl:px-0">
        <div className="z-10 flex w-full flex-col justify-center py-10 max-sm:order-2 max-sm:px-6 md:w-full xl:w-[55%]">
          <header>
            <span className="text-[16px] font-semibold tracking-wider text-[#FD0003] uppercase">
              Espaço para Graduação
            </span>
            <h2 className="mb-4 text-[32px] font-medium text-black max-sm:text-[26px] 
            md:text-white xl:text-black">
              Excelência na formação
            </h2>
          </header>

          <p className="mb-5 text-[16px] leading-relaxed font-normal text-[#727070] md:w-[70%] md:text-white lg:w-[55%] xl:text-[#727070] xl:w-full">
            A Santa Casa de Misericórdia de Goiânia possui, no segundo andar,
            uma área de Apoio Acadêmico destinada a alunos da PUC Goiás
            matriculados nos cursos de medicina, enfermagem, psicologia,
            fonoaudiologia, nutrição, farmácia e fisioterapia. Na unidade de
            saúde, os estudantes participam de aulas teóricas e práticas, sob
            supervisão de professores da universidade, que tem a Santa Casa como
            hospital-ensino.
          </p>

          <div className="mb-4 flex justify-between gap-4 md:w-[70%] lg:w-[55%] xl:w-full">
            <div className="text-center">
              <p className="text-[32px] max-sm:text-left font-light text-[#FD0003]">Tipo 1</p>
              <p className="text-[14px] font-light text-black uppercase md:text-white xl:text-black">
                Credenciamento
              </p>
            </div>
            <div className="text-center">
              <p className="text-[32px] font-light text-[#FD0003]">11</p>
              <p className="text-[14px] font-light text-black uppercase md:text-white xl:text-black">
                Salas de Aula
              </p>
            </div>
            <div className="text-center">
              <p className="text-[32px] font-light text-[#FD0003]">1</p>
              <p className="text-[14px] font-light text-black uppercase md:text-white xl:text-black">
                Auditório
              </p>
            </div>
          </div>

          <p className="border-b border-gray-300 pb-8 text-[14px] font-normal text-[#727070] md:w-[70%] md:text-white lg:w-[55%] xl:text-[#727070] xl:w-full">
            Além de secretarias e várias salas administrativas.
          </p>

          <h3 className="mb-4 pt-8 text-[18px] font-medium text-[#FD0003]">
            Informações para contato
          </h3>

          <div className="space-y-6 md:w-[70%] lg:w-[55%] xl:w-full">
            <div className="relative border-l-4 border-[#FD0003] pl-3 max-sm:pl-2">
              <address className="space-y-3 not-italic max-sm:space-y-4">
                <div className="group flex flex-col justify-between max-sm:flex-row lg:flex-row lg:items-center">
                  <p className="flex items-center gap-2 text-[#535353] md:text-white xl:text-[#535353]">
                    <MdOutlineCalendarToday
                      className="text-[24px]"
                      aria-hidden="true"
                    />
                    <span className="text-[16px]">Segunda a Sexta</span>
                  </p>
                  <div className="mx-4 hidden grow border-b border-dotted border-gray-300 lg:block"></div>
                  <p className="mt-1 flex items-center gap-1 text-[#535353] md:text-white xl:text-[#535353]">
                    <MdOutlineAccessTime
                      className="text-[24px]"
                      aria-hidden="true"
                    />
                    <span className="text-[16px]">6h às 20h</span>
                  </p>
                </div>

                <div className="flex flex-col justify-between max-sm:flex-row lg:flex-row lg:items-center">
                  <p className="flex items-center gap-1 text-[#535353] md:text-white xl:text-[#535353] ">
                    <MdOutlinePersonOutline
                      className="text-[24px]"
                      aria-hidden="true"
                    />
                    <span className="text-[16px]">Márcia Bajo</span>
                  </p>
                  <div className="mx-4 hidden grow border-b border-dotted border-gray-300 lg:block"></div>

                  <p className="flex items-center gap-1 text-[#535353] md:text-white xl:text-[#535353]">
                    <FaWhatsapp
                      aria-hidden="true"
                      className="text-[24px]"
                    />
                    <span className="text-[16px]">
                      (62) 3941-1652
                    </span>
                  </p>
                </div>

                <p className="flex items-center gap-2 text-[#535353] md:text-white xl:text-[#535353]">
                  <MdOutlineMailOutline
                    className="text-[24px]"
                    aria-hidden="true"
                  />
                  <span className="text-[16px]">
                    apoioacademicopucgoias@gmail.com
                  </span>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden bg-[#BE3131] max-sm:hidden xl:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('/images/banner-section-espaco-para-graduacao.svg')",
              backgroundPosition: '170px center'
            }}
            role="img"
            aria-label="Médica sorrindo segurando uma prancheta vermelha"
          />

          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        </div>

        <div className="relative min-h-100 w-full rounded-tl-[60px] bg-red-700 md:-right-11 md:hidden md:min-h-full md:w-1/2 xl:w-1/2 lg:-right-9 xl:block">
          <Image
            src="/images/banner-section-espaco-para-graduacao.svg"
            alt="Profissional de saúde segurando uma prancheta vermelha em frente a um fundo vermelho"
            fill
            className="rounded-tl-[60px] object-cover object-center md:rounded-tl-none lg:rounded-tl-[60px]"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  )
}
