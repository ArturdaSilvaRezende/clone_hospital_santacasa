'use client'

import { useEffect, useId } from 'react'
import { useAppointmentStore } from '~/app/consultar-agendamento/_store'
import { useScheduleStore } from '~/app/pre-agendamento/_store'

const btnStatusBg = {
  Aguardando: 'bg-[#ff9419]',
  Cancelado: 'bg-[#ff1919]',
  Confirmado: 'bg-[#20A36C]',
  pendente: 'bg-[#555353]' 
}

export default function SchedulingDetails() {
  const content = useAppointmentStore(state => state.content)
  const requestStatus = useAppointmentStore(state => state.request_status)
  const headingId = useId();
  const API_URL = "http://localhost:3333/";

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
    return (
      <div 
        role="status" 
        aria-live="polite" 
        className="mt-10 text-center font-medium"
      >
        <span>Carregando detalhes do agendamento...</span>
      </div>
    )
  }

  if (!content || !content.id) return null

  console.log(content)

  return (
    <div className="container mx-auto flex max-w-285 flex-col items-center p-4" aria-label="Detalhes do agendamento">
      <h2 id={headingId} className="sr-only">Detalhes do Agendamento</h2>
      
      <section 
        aria-labelledby={headingId}
        className="mt-12 flex w-full flex-col items-center"
      >
        <dl className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="flex flex-col gap-y-2">
            <dt className="text-[18px] font-bold text-black">Protocolo</dt>
            <dd className="text-[1rem] font-medium text-[#555353]">{content.protocolo}</dd>
          </div>

          <div className="flex flex-col gap-y-2">
            <dt className="text-[18px] font-bold text-black">Nome do Paciente</dt>
            <dd className="text-[1rem] font-medium text-[#555353]">{content.nome_paciente}</dd>
          </div>

          <div className="flex flex-col gap-y-2">
            <dt className="text-[18px] font-bold text-black">Data de Nascimento</dt>
            <dd className="text-[1rem] font-medium text-[#555353]">
              {content.data_nascimento ? new Date(content.data_nascimento).toLocaleDateString('pt-BR') : '---'}
            </dd>
          </div>

          <div className="flex flex-col gap-y-2">
            <dt className="text-[18px] font-bold text-black">Tipo da Vaga</dt>
            <dd className="text-[1rem] font-medium text-[#555353]">{content.tipo_vaga || 'Não informado'}</dd>
          </div>

          <div className="flex flex-col gap-y-2">
            <dt className="text-[18px] font-bold text-black">Especialidade</dt>
            <dd className="text-[1rem] font-medium text-[#555353]">{selectedSpeciality?.name || '---'}</dd>
          </div>

          <div className="flex flex-col gap-y-2">
            <dt className="text-[18px] font-bold text-black">Tipo Confirmação</dt>
            <dd className="text-[1rem] font-medium text-[#555353]">{content.tipo_confirmacao_agendamento}</dd>
          </div>

          <div className="flex flex-col gap-y-2">
            <dt className="text-[18px] font-bold text-black">Situação</dt>
            <dd>
              <span 
                role="status"
                className={`inline-block rounded-md px-6 py-1 text-sm font-normal text-white ${btnStatusBg[content.status] || 'bg-gray-600'}`}
              >
                {content.status?.toUpperCase() || 'PENDENTE'}
              </span>
            </dd>
          </div>

          <div className="flex flex-col gap-y-2">
            <dt className="text-[18px] font-bold text-black">Data e Hora Agendamento</dt>
            <dd className="text-[1rem] font-medium text-[#555353]">
              {content.updated_at ? new Date(content.updated_at).toLocaleString('pt-BR') : 'Aguardando definição'}
            </dd>
          </div>

          <div className="flex flex-col gap-y-2">
            <dt className="text-[18px] font-bold text-black">Informações Adicionais</dt>
            <dd className="text-[1rem] font-medium text-[#555353]">{content.observacao || 'Nenhuma observação'}</dd>
          </div>
          <div className="flex flex-col gap-y-2">
            <dt className="text-[18px] font-bold text-black">Informações Adicionais</dt>
            {content.imagem_pedido_url && (
              <img 
                src={`${API_URL}${content.imagem_pedido_url}`} 
                alt="Pedido Médico" 
                className="max-w-full h-auto rounded-lg"
              />
            )}
          </div>
        </dl>

        <footer className="mt-12 w-full border-t pt-8 text-[#555353]">
          <h3 className="mb-4 font-bold text-black">Orientações Importantes:</h3>
          <ul className="flex list-inside list-disc flex-col gap-y-2">
            <li>Acompanhe seu agendamento, ele mudará a situação para <strong>CONFIRMADO</strong>.</li>
            <li>Entraremos em contato para confirmar o agendamento.</li>
            <li>
              Dúvidas: <a href="tel:6232544200" className="underline hover:text-blue-700 focus:outline-dotted focus:outline-2 focus:outline-offset-2">(62) 3254-4200</a>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  )
}