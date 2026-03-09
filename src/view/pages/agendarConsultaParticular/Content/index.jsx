import { FaWhatsapp } from 'react-icons/fa'

export default function PrivateConsultation() {
  return (
    <section className="my-16" aria-label="Consulta Particular">
      <div className="container mx-auto flex flex-col items-center gap-12 max-sm:px-6 md:px-8 lg:flex-row lg:gap-24 lg:px-8 xl:px-0">
        <div className="flex-1">
          <header>
            <span className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase">
              Particular e Convênio
            </span>
            <h2 className="mb-2 leading-tight font-medium text-black max-sm:w-full max-sm:text-[28px] md:w-[70%] md:text-[20px] lg:w-[90%] lg:text-[32px]">
              Agende já sua consulta
            </h2>
          </header>

          <p className="text-[16px] font-normal text-[#727070] max-sm:text-[14px]">
            A Santa Casa oferece uma vasta gama de especialidades médicas para
            consultas ambulatoriais e diferentes tipos de exames a preços
            acessíveis.
          </p>

          <div className="mt-4">
            <p className="font-normal text-[#FD0003]">
              O agendamento da consulta pode ser feito através do telefone:
            </p>
            <p className="mt-1 flex items-center gap-2 text-[16px] font-normal text-[#535353]">
              <FaWhatsapp />
              <span>(62) 3254-4008</span>
            </p>
          </div>
        </div>

        <div className="w-full lg:max-w-md">
          <div className="rounded-2xl border border-[#7270701A] bg-white px-5 py-6">
            <h3 className="mb-8 text-[18px] font-medium text-[#FD0003]">
              Horários — Particular e Convênio
            </h3>

            <div className="space-y-10">
              <div
                className="relative border-l-3 border-[#FD0003] pl-4"
                role="group"
                aria-label="Horários para Consultar"
              >
                <span className="inline-block rounded bg-red-50 px-2 py-1 text-[14px] font-medium text-[#FD0003]">
                  Consultar
                </span>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-[16px] font-normal text-[#535353]">
                    <span>Segunda a Quinta</span>
                    <span className="font-medium">6h30 às 18h</span>
                  </div>
                  <div className="flex justify-between text-[16px] font-normal text-[#535353]">
                    <span>Sexta-feira</span>
                    <span className="font-medium">6h30 às 17h</span>
                  </div>
                </div>
              </div>

              <div
                className="relative border-l-3 border-[#FD0003] pl-4"
                role="group"
                aria-label="Horários para Agendamento"
              >
                <span className="inline-block rounded bg-red-50 px-2 py-1 text-[14px] font-medium text-[#FD0003]">
                  Agendamento
                </span>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-[16px] font-normal text-[#535353]">
                    <span>Segunda a Sexta</span>
                    <span className="font-medium">6h30 às 18h</span>
                  </div>
                  <div className="flex justify-between text-[16px] font-normal text-[#535353]">
                    <span>Sábado</span>
                    <span className="font-medium">7h às 18h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
