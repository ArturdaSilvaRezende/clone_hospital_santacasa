'use client'

import React, { useState, useMemo } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi2'

const FAQ_DATA = [
  // AGENDAMENTO
  {
    id: 1,
    category: 'Agendamento',
    title: 'Como agendar uma consulta online?',
    description:
      "Você pode agendar pelo nosso portal do paciente ou via WhatsApp oficial selecionando a opção 'Agendamento'."
  },
  {
    id: 2,
    category: 'Agendamento',
    title: 'Quais documentos levar no dia do exame?',
    description:
      'Documento oficial com foto, pedido médico original e carteirinha do convênio (se aplicável).'
  },
  {
    id: 3,
    category: 'Agendamento',
    title: 'Posso cancelar um agendamento pelo site?',
    description:
      "Sim, cancelamentos podem ser feitos com até 24h de antecedência na aba 'Meus Agendamentos'."
  },
  {
    id: 4,
    category: 'Agendamento',
    title: 'Quanto tempo antes devo chegar?',
    description:
      'Recomendamos chegar com 30 minutos de antecedência para processos de recepção e triagem.'
  },
  {
    id: 5,
    category: 'Agendamento',
    title: 'O hospital faz agendamento por Telemedicina?',
    description:
      'Sim, oferecemos consultas por vídeo para diversas especialidades médicas.'
  },
  {
    id: 6,
    category: 'Agendamento',
    title: 'Como recebo a confirmação do meu horário?',
    description:
      'Enviamos um SMS e um e-mail de confirmação imediatamente após o agendamento.'
  },

  // CONVÊNIOS
  {
    id: 7,
    category: 'Convênios',
    title: 'Quais convênios são aceitos no pronto-socorro?',
    description:
      'Atendemos Bradesco, SulAmérica, Unimed, Amil e Porto Seguro. Para outros, consulte nossa lista completa.'
  },
  {
    id: 8,
    category: 'Convênios',
    title: 'Vocês atendem planos internacionais?',
    description:
      'Atendemos planos internacionais mediante regime de reembolso ou autorização prévia da operadora.'
  },
  {
    id: 9,
    category: 'Convênios',
    title: 'Como saber se meu procedimento foi autorizado?',
    description:
      'Nossa equipe de faturamento entra em contato assim que a guia é liberada pelo convênio.'
  },
  {
    id: 10,
    category: 'Convênios',
    title: 'O hospital aceita pagamento particular parcelado?',
    description:
      'Sim, parcelamos procedimentos particulares em até 10x sem juros no cartão de crédito.'
  },
  {
    id: 11,
    category: 'Convênios',
    title: 'Preciso de guia para consulta de rotina?',
    description:
      'Geralmente sim. A maioria dos convênios exige a guia de encaminhamento ou autorização digital.'
  },
  {
    id: 12,
    category: 'Convênios',
    title: 'O plano cobre exames de alta complexidade?',
    description:
      'Isso depende da sua cobertura contratual. Verifique com seu plano antes de agendar o exame.'
  },

  // VISITAS
  {
    id: 13,
    category: 'Visitas',
    title: 'Qual o horário de visita da UTI?',
    description:
      'As visitas na UTI ocorrem em dois períodos: das 11h às 12h e das 17h às 18h.'
  },
  {
    id: 14,
    category: 'Visitas',
    title: 'Quantas pessoas podem entrar por vez?',
    description:
      'É permitida a entrada de 2 visitantes por vez nas unidades de internação comum.'
  },
  {
    id: 15,
    category: 'Visitas',
    title: 'Crianças podem realizar visitas?',
    description:
      'Sim, menores de 12 anos podem visitar acompanhados de um adulto, exceto em alas críticas.'
  },
  {
    id: 16,
    category: 'Visitas',
    title: 'É necessário usar máscara?',
    description:
      'Sim, o uso de máscara é obrigatório em todas as dependências hospitalares por segurança.'
  },
  {
    id: 17,
    category: 'Visitas',
    title: 'Posso levar flores para o paciente?',
    description:
      'Infelizmente não, para evitar riscos de alergias e proliferação de fungos no ambiente hospitalar.'
  },
  {
    id: 18,
    category: 'Visitas',
    title: 'Existe rede Wi-Fi para visitantes?',
    description:
      'Sim, disponibilizamos rede Wi-Fi gratuita. Solicite a senha na recepção principal.'
  },

  // DOCUMENTOS
  {
    id: 19,
    category: 'Documentos',
    title: 'Como solicitar o prontuário médico?',
    description:
      'A solicitação é feita no setor de SAME, levando documento com foto. Prazo de entrega: 5 dias úteis.'
  },
  {
    id: 20,
    category: 'Documentos',
    title: 'Onde retiro o resultado dos meus exames?',
    description:
      'Os resultados podem ser acessados digitalmente no nosso site usando o protocolo e senha fornecidos.'
  },
  {
    id: 21,
    category: 'Documentos',
    title: 'Como obter a Declaração de Nascido Vivo?',
    description:
      'O documento é entregue aos pais na alta hospitalar do bebê pela equipe de enfermagem.'
  },
  {
    id: 22,
    category: 'Documentos',
    title: 'O hospital fornece atestado para acompanhante?',
    description:
      'Sim, o médico assistente pode emitir o atestado de acompanhamento conforme a legislação vigente.'
  },
  {
    id: 23,
    category: 'Documentos',
    title: 'Como validar um atestado médico emitido?',
    description:
      'Todos os nossos atestados possuem um QR Code de verificação de autenticidade no rodapé.'
  },
  {
    id: 24,
    category: 'Documentos',
    title: 'Perdi meu protocolo de retirada. E agora?',
    description:
      'Compareça à recepção central com um documento oficial com foto para gerar uma nova via.'
  },
  {
    id: 25,
    category: 'Documentos',
    title: 'Quais documentos para internação cirúrgica?',
    description:
      'RG, CPF, Carteira do Convênio, Exames Pré-operatórios e Termo de Consentimento assinado.'
  }
]

const CATEGORIES = ['Agendamento', 'Convênios', 'Visitas', 'Documentos']

export default function FrequentlyQuestionsTabs() {
  const [activeTab, setActiveTab] = useState('Agendamento')
  const [openId, setOpenId] = useState(1)

  const handleToggle = id => {
    setOpenId(openId === id ? null : id)
  }

  const filteredList = useMemo(() => {
    return FAQ_DATA.filter(item => item.category === activeTab)
  }, [activeTab])

  return (
    <section className="mx-auto container my-16 max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
      <div className="mb-10 flex flex-col items-center">
        <p className="text-[16px] font-semibold text-[#FD0003] uppercase">
          Central de Perguntas
        </p>
        <h1 className="text-[32px] font-medium text-black max-sm:text-[26px]">
          Perguntas Frequentes
        </h1>
        <p className="mt-2 text-[14px] font-normal text-[#727070] max-sm:text-center">
          Confira as dúvidas mais comuns.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              setOpenId(null)
            }}
            className={`grow rounded-full border px-8 py-1.75 text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? 'border-[#FD0003] bg-[#FD0003] text-white hover:bg-red-700'
                : 'border-[#727070] bg-white text-[#727070] hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {filteredList.map(item => {
          const isOpen = openId === item.id

          return (
            <div
              key={item.id}
              className={`h-fit overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? 'border-gray-200 bg-white'
                  : 'border-[#727070]/10 bg-white'
              }`}
            >
              <button
                onClick={() => handleToggle(item.id)}
                className="flex w-full items-center justify-between p-5 text-left focus:ring-2 focus:ring-gray-500/20 focus:outline-none md:p-6"
                aria-expanded={isOpen}
                aria-controls={`content-${item.id}`}
                id={`item-title-${item.id}`}
              >
                <span className="pr-4 text-[18px] max-sm:text-[16px] font-medium text-black">
                  {item.title}
                </span>
                <div className="shrink-0 text-[#727070] transition-transform duration-300">
                  {isOpen ? <HiMinus size={24} /> : <HiPlus size={24} />}
                </div>
              </button>

              <div
                id={`content-${item.id}`}
                role="region"
                aria-labelledby={`item-title-${item.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="mx-6 border-t border-gray-200/10 py-5 leading-relaxed text-[#727070]">
                  <p className="text-[15px] md:text-base">{item.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
