'use client'

import { useState } from 'react'
import { api } from '~/services/api'
import SyncLoader from 'react-spinners/SyncLoader'
import ResponseError from '~/components/CustomComponents/ResponseError'

const btnStatusBg = {
  Aguardando: 'bg-[#ff9419]',
  Cancelado: 'bg-[#ff1919]',
  Confirmado: 'bg-[#20A36C]'
}

export function SearchProtocol() {
  const [protocoloDigitado, setProtocoloDigitado] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [protocolData, setProtocolData] = useState(null)

  const handleSearch = async e => {
    e.preventDefault()

    if (!protocoloDigitado) return

    setLoading(true)
    setError(false)
    setProtocolData(null)

    try {
      const response = await api.get(
        `/appointment-scheduling/${protocoloDigitado}`
      )

      const payload = response?.data?.info || response?.data || {}

      if (payload?.error === true) {
        setError(true)
        setMessage(payload?.message || 'Protocolo não encontrado.')
      } else {
        setProtocolData(payload)
        console.log('Sucesso:', payload)
      }
    } catch (err) {
      console.error('Erro na requisição:', err)
      setError(true)

      setMessage(
        err.response?.status === 404
          ? 'Protocolo não encontrado. Verifique o número.'
          : 'Tente novamente mais tarde.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mb-10 w-full max-sm:mb-10 md:mb-20">
      <form onSubmit={handleSearch} className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label className="text-[1rem] font-medium text-[#262626]">
            Protocolo<span className="text-[#FD0003]">*</span>
          </label>
          <input
            type="text"
            value={protocoloDigitado}
            onChange={e => setProtocoloDigitado(e.target.value)}
            className="h-11.5 w-full rounded-[10px] border border-[#7D7D7D] px-4 text-[#262626] outline-none focus:border-black"
            placeholder="Digite seu protocolo"
            required
          />
        </div>

        {error && <ResponseError responseMessage={message} />}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex h-11 w-40 items-center justify-center gap-x-2 rounded-full bg-black text-white transition-all hover:bg-black/80 disabled:bg-gray-400"
          >
            <SyncLoader color="#E6E6E6" loading={loading} size={3} />
            {loading ? 'Buscando...' : 'Consultar'}
          </button>
        </div>
      </form>

      {protocolData?.id > 0 && (
        <div className="mt-12 flex w-full flex-col items-center">
          <div className="flex w-full justify-between max-sm:flex-col max-sm:gap-8">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Protocolo
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {protocolData.protocolo}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Tipo da Vaga
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {protocolData.tipo_vaga}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Situação
                </label>
                <button
                  type="submit"
                  className={`h-9.5 rounded-full px-6 ${btnStatusBg[protocolData?.status_agendamento]} w-max text-white xl:mt-5`}
                >
                  {protocolData.status_agendamento}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Nome do Paciente
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {protocolData.nome_paciente}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Especialidade
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {protocolData.especialidade_sus}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Data e Hora Agendamento
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {protocolData?.data_hora_agendamento}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Data de Nascimento
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {protocolData?.data_nascimento}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-[18px] font-semibold text-black">
                  Tipo Confirmação
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {protocolData?.tipo_confirmacao_agendamento}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="w-61.25 text-[18px] font-semibold text-black">
                  Informações Adicionais do atendimento
                </label>
                <p className="text-[1rem] font-medium text-[#727070]">
                  {protocolData?.informacoes_adicionais_atendimento}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
