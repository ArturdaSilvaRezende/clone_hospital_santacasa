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
      className="min-h-150 w-full overflow-hidden bg-white md:flex-row"
      aria-label="Espaço para Graduação"
    >
      <div className="container mx-auto flex flex-col gap-20 max-sm:mb-14 md:flex-row max-sm:gap-0 md:gap-0 md:px-8 lg:gap-2 xl:px-0">
        <div className="flex w-full flex-col max-sm:order-2 justify-center py-10 md:w-1/2 max-sm:px-6">
          <header>
            <span className="text-[16px] font-semibold tracking-wider text-[#FD0003] uppercase">
              Espaço para Graduação
            </span>
            <h2 className="mb-4 text-[32px] font-medium text-black max-sm:text-[26px]">
              Excelência na formação
            </h2>
          </header>

          <p className="mb-5 text-[16px] leading-relaxed font-normal text-[#727070]">
            A Santa Casa de Misericórdia de Goiânia possui, no segundo andar,
            uma área de Apoio Acadêmico destinada a alunos da PUC Goiás
            matriculados nos cursos de medicina, enfermagem, psicologia,
            fonoaudiologia, nutrição, farmácia e fisioterapia. Na unidade de
            saúde, os estudantes participam de aulas teóricas e práticas, sob
            supervisão de professores da universidade, que tem a Santa Casa como
            hospital-ensino.
          </p>

          <div className="mb-4 flex justify-between gap-4">
            <div className="text-center">
              <p className="text-[32px] font-light text-[#FD0003]">Tipo 1</p>
              <p className="text-[14px] font-light text-black uppercase">
                Credenciamento
              </p>
            </div>
            <div className="text-center">
              <p className="text-[32px] font-light text-[#FD0003]">11</p>
              <p className="text-[14px] font-light text-black uppercase">
                Salas de Aula
              </p>
            </div>
            <div className="text-center">
              <p className="text-[32px] font-light text-[#FD0003]">1</p>
              <p className="text-[14px] font-light text-black uppercase">
                Auditório
              </p>
            </div>
          </div>

          <p className="border-b border-gray-300 pb-8 text-[14px] font-normal text-[#727070]">
            Além de secretarias e várias salas administrativas.
          </p>

          <h3 className="mb-4 pt-8 text-[18px] font-medium text-[#FD0003]">
            Informações para contato
          </h3>

          <div className="space-y-6">
            <div className="relative border-l-4 border-[#FD0003] pl-3 max-sm:pl-2">
              <address className="space-y-3 not-italic max-sm:space-y-4">
                <div className="group flex flex-col justify-between max-sm:flex-row lg:flex-row lg:items-center">
                  <div className="flex items-center gap-2">
                    <MdOutlineCalendarToday
                      className="text-[24px] text-[#535353]"
                      aria-hidden="true"
                    />
                    <span className="text-[16px] text-[#535353]">
                      Segunda a Sexta
                    </span>
                  </div>
                  <div className="mx-4 hidden grow border-b border-dotted border-gray-300 lg:block"></div>
                  <div className="mt-1 flex items-center gap-1">
                    <MdOutlineAccessTime
                      className="text-[24px] text-[#535353]"
                      aria-hidden="true"
                    />
                    <span className="text-[16px] text-[#535353]">
                      6h às 20h
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between max-sm:flex-row lg:flex-row lg:items-center">
                  <div className="flex items-center gap-1">
                    <MdOutlinePersonOutline
                      className="text-[24px] text-[#535353]"
                      aria-hidden="true"
                    />
                    <span className="text-[16px] text-[#535353]">
                      Márcia Bajo
                    </span>
                  </div>
                  <div className="mx-4 hidden grow border-b border-dotted border-gray-300 lg:block"></div>

                  <div className="flex items-center gap-1">
                    <FaWhatsapp
                      aria-hidden="true"
                      className="text-[24px] text-[#535353]"
                    />
                    <span className="text-[16px] text-[#535353]">
                      (62) 3941-1652
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <MdOutlineMailOutline
                    className="text-[24px] text-[#535353]"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] text-[#535353]">
                    apoioacademicopucgoias@gmail.com
                  </span>
                </div>
              </address>
            </div>
          </div>
        </div>

        <div className="relative min-h-100 w-full rounded-tl-[60px] bg-red-700 md:-right-11 md:min-h-full md:w-1/2 lg:-right-9">
          <Image
            src="/images/banner-section-espaco-para-graduacao.svg"
            alt="Profissional de saúde segurando uma prancheta vermelha em frente a um fundo vermelho"
            fill
            className="rounded-tl-[60px] object-cover object-center md:rounded-tl-none lg:rounded-tl-[60px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
