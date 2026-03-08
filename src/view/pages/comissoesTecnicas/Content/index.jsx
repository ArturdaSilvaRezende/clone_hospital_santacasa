'use client'

import { useState } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi2'

export default function Content() {
  const [openId, setOpenId] = useState('q4')

  const toggleFAQ = id => {
    setOpenId(openId === id ? null : id)
  }

  const faqs = [
    {
      id: 'q1',
      question: 'Comitê de Ética e Pesquisa (CEP)',
      answer:
        'Colegiado interdisciplinar que avalia e monitora protocolos de pesquisa envolvendo seres humanos, garantindo a proteção dos direitos e a dignidade dos participantes.'
    },
    {
      id: 'q2',
      question: 'Comissão Multiprofissional de Terapia Nutricional (EMTN)',
      answer:
        'Grupo especializado responsável por assegurar a indicação e administração segura de nutrição enteral e parenteral, visando a recuperação nutricional do paciente.'
    },
    {
      id: 'q3',
      question: 'Comissão de Verificação e Análise de Óbitos',
      answer:
        'Analisa as causas e circunstâncias dos óbitos hospitalares para identificar falhas assistenciais e aprimorar a qualidade do atendimento médico.'
    },
    {
      id: 'q4',
      question: 'Comissão Intra-Hospitalar de Doação de Órgãos',
      answer:
        'Atua na identificação de potenciais doadores, acolhimento de familiares e viabilização do processo de captação de órgãos e tecidos para transplante.'
    },
    {
      id: 'q5',
      question: 'Comissão de Verificação e Análise de Prontuários',
      answer:
        'Revisa a qualidade dos registros clínicos, garantindo que a documentação do paciente esteja completa, legível e em conformidade com as normas legais.'
    },
    {
      id: 'q6',
      question: 'Comissão de Controle de Infecção Hospitalar (CCIH)',
      answer:
        'Desenvolve ações de vigilância e diretrizes para prevenir e reduzir a incidência de infecções relacionadas à assistência à saúde.'
    },
    {
      id: 'q7',
      question: 'Comissão Multiprofissional de Farmácia e Terapêutica',
      answer:
        'Seleciona e padroniza os medicamentos da instituição, promovendo o uso racional e seguro de fármacos baseados em evidências científicas.'
    },
    {
      id: 'q8',
      question: 'Equipe Multiprofissional de Terapia Antineoplástica (EMTA)',
      answer:
        'Responsável pelo planejamento e execução segura do tratamento quimioterápico, monitorando reações adversas e a segurança do paciente oncológico.'
    },
    {
      id: 'q9',
      question: 'Núcleo Hospitalar Epidemiológico (NHE)',
      answer:
        'Monitora doenças de notificação compulsória e agravos à saúde, fornecendo dados estratégicos para o controle de surtos e planejamento hospitalar.'
    },
    {
      id: 'q10',
      question: 'Comitê Transfusional',
      answer:
        'Monitora a prática hemoterápica na instituição, assegurando que o uso de sangue e derivados siga normas técnicas e critérios de segurança rigorosos.'
    },
    {
      id: 'q11',
      question: 'Comissão de Segurança do Paciente (COSEP)',
      answer:
        'Implementa protocolos para reduzir riscos de danos desnecessários, como quedas, erros de medicação e identificação incorreta.'
    },
    {
      id: 'q12',
      question: 'Comissão de Ética Médica',
      answer:
        'Órgão fiscalizador e consultivo que zela pelo exercício ético da medicina e pelas boas relações entre médicos, pacientes e instituição.'
    }
  ]

  return (
    <section className="my-5 w-full py-20" aria-label="faq-title">
      <div className="container mx-auto space-y-4 max-sm:px-6 md:px-8 xl:px-0">
        {faqs.map(faq => {
          const isOpen = openId === faq.id

          return (
            <div
              key={faq.id}
              className="overflow-hidden rounded-2xl border border-[#7270701A]/10 bg-white transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between p-5 text-left focus:ring-2 focus:ring-gray-500/20 focus:outline-none md:p-6"
                aria-expanded={isOpen}
                aria-controls={`content-${faq.id}`}
              >
                <span className="pr-4 text-base font-semibold text-gray-900 md:text-lg">
                  {faq.question}
                </span>
                <div className="shrink-0 text-gray-400">
                  {isOpen ? <HiMinus size={24} /> : <HiPlus size={24} />}
                </div>
              </button>

              <div
                id={`content-${faq.id}`}
                role="region"
                aria-labelledby={faq.id}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="mx-6 mt-0 border-t border-gray-200/10 p-6 pt-0 leading-relaxed text-gray-600">
                  <p className="py-4">{faq.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
