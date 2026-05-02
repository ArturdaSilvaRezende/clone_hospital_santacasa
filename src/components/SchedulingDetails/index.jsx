'use client'

import { useEffect } from 'react'
import { useAppointmentStore } from '~/app/consultar-agendamento/_store'
import { useScheduleStore } from '~/app/pre-agendamento/_store'

const btnStatusBg = {
  Aguardando: 'bg-[#ff9419]',
  Cancelado: 'bg-[#ff1919]',
  Confirmado: 'bg-[#20A36C]',
  pendente: 'bg-[#727070]'
}

export default function SchedulingDetails() {
  const content = useAppointmentStore(state => state.content)
  const requestStatus = useAppointmentStore(state => state.request_status)

  const fetchDataMedicalSpecialities = useScheduleStore(
    state => state.fetchDataMedicalSpecialities
  )

  const specialityList = useScheduleStore(state => state.speciality_list)

  useEffect(() => {
    if (specialityList.length === 0) {
      fetchDataMedicalSpecialities()
    }
  }, [specialityList.length, fetchDataMedicalSpecialities])

  const selectedSpeciality = specialityList.find(
    s => String(s.id) === String(content.especialidade_sus)
  )

  if (requestStatus === 'loading') {
    return <div className="mt-10 text-center">Carregando detalhes...</div>
  }

  if (!content || !content.id) {
    return null
  }

  return (
    <div className="container mx-auto flex max-w-285 flex-col items-center">
      <div className="mt-12 flex w-full flex-col items-center">
        <div className="flex w-full justify-between max-sm:flex-col max-sm:gap-y-10">
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
                {content.tipo_vaga || 'Não informado'}
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-[18px] font-semibold text-black">
                Situação
              </label>
              <p
                disabled
                className={`rounded-md px-6 ${btnStatusBg[content.status] || 'bg-gray-400'} w-max text-white`}
              >
                {content.status?.toUpperCase() || 'PENDENTE'}
              </p>
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
                {selectedSpeciality?.name}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[18px] font-semibold text-black">
                Data e Hora Agendamento
              </label>
              <p className="text-[1rem] font-medium text-[#727070]">
                {content.updated_at
                  ? new Date(content.updated_at).toLocaleString('pt-BR')
                  : 'Aguardando definição'}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-2">
              <label className="text-[18px] font-semibold text-black">
                Data de Nascimento
              </label>
              <p className="text-[1rem] font-medium text-[#727070]">
                {content.data_nascimento
                  ? new Date(content.data_nascimento).toLocaleDateString(
                      'pt-BR'
                    )
                  : ''}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[18px] font-semibold text-black">
                Tipo Confirmação
              </label>
              <p className="text-[1rem] font-medium text-[#727070]">
                {content.tipo_confirmacao_agendamento}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="w-61.25 text-[18px] font-semibold text-black">
                Informações Adicionais
              </label>
              <p className="text-[1rem] font-medium text-[#727070]">
                {content.observacao || 'Nenhuma observação'}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full max-sm:px-5 md:px-8 lg:px-0">
          <ul className="relative left-5 flex list-disc flex-col gap-y-2 text-[#707070]">
            <li>
              Acompanhe seu agendamento, ele mudará a situação para CONFIRMADO.
            </li>
            <li>Entraremos em contato para confirmar o agendamento.</li>
            <li>Dúvidas: (62) 3254-4200</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
