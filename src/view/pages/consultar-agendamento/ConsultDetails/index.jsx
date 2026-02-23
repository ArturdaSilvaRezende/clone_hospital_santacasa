'use client'

import { useSelector, useDispatch } from 'react-redux'

const btnStatusBg = {
  Aguardando: 'bg-[#ff9419]',
  Cancelado: 'bg-[#ff1919]',
  Confirmado: 'bg-[#20A36C]'
}

export function ConsultDetails() {
  const { content } = useSelector(store => store.appointmmentOrder)

  return (
    <div className="mx-auto max-w-285 container flex flex-col items-center">
      {content?.id > 0 && (
        <div className="mt-12 flex w-full flex-col items-center">
          <div className="flex w-full max-sm:flex-col max-sm:gap-y-10 justify-between">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Protocolo
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {content.protocolo}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Tipo da Vaga
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {content.tipo_vaga}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Situação
                </label>
                <button
                  type="submit"
                  className={`h-[38px] rounded-full px-[1.5rem] ${btnStatusBg[content?.status_agendamento]} w-max text-white xl:mt-5`}
                >
                  {content.status_agendamento}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Nome do Paciente
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {content.nome_paciente}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Especialidade
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {content.especialidade_sus}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Data e Hora Agendamento
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {content?.data_hora_agendamento}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Data de Nascimento
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {content?.data_nascimento}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Tipo Confirmação
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {content?.tipo_confirmacao_agendamento}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="w-61.25 text-[18px] font-semibold text-black">
                  Informações Adicionais do atendimento
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {content?.informacoes_adicionais_atendimento}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 w-full max-sm:px-5 md:px-8 lg:px-0">
            <ul className="relative left-5 max-sm:left-0 md:left-0 lg:left-0 flex flex-col gap-y-2">
              <li className="w-165 list-disc text-[#707070] max-sm:w-full">
                <p className="text-[1rem] font-normal">
                  Acompanhe seu agendamento, ele mudara a situação para
                  CONFIRMADO juntamente com a{' '}
                  <span className="relative -left-4 max-sm:left-0">
                    DATA E HORA AGENDAMENTO.
                  </span>
                </p>
              </li>
              <li className="list-disc text-[#707070]">
                <p className="text-[1rem] font-normal">
                  Entraremos em contato para confirmar o agendamento.
                </p>
              </li>
              <li className="list-disc text-[#707070]">
                <p className="text-[1rem] font-normal">
                  Qualquer duvida entre em contato pelo (62) 3254-4200 ou
                  atendimentosus@santacasa.org.br
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
