'use client'

import { useState } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi2'

export default function Faq() {
  const [openId, setOpenId] = useState('q4')

  const toggleFAQ = id => {
    setOpenId(openId === id ? null : id)
  }

  const faqs = [
    {
      id: 'q1',
      question: 'O que é feito com o sangue coletado?',
      answer:
        'O sangue passa por um processo de fracionamento onde é dividido em componentes (hemácias, plaquetas e plasma). Assim, uma única doação pode salvar até quatro vidas, atendendo pacientes com diferentes necessidades clínicas.'
    },
    {
      id: 'q2',
      question:
        'Quais são os exames laboratoriais realizados no sangue do doador?',
      answer:
        'São realizados testes para determinar o grupo sanguíneo (ABO/Rh) e triagem para doenças infecciosas como Hepatites B e C, HIV, Sífilis, Doença de Chagas e HTLV I/II.'
    },
    {
      id: 'q3',
      question: 'Quais cuidados devem ser tomados após a doação?',
      answer:
        'É recomendado hidratar-se bem, evitar esforços físicos exagerados por 12 horas, não fumar por 2 horas e manter o curativo no local da punção por pelo menos 4 horas.'
    },
    {
      id: 'q4',
      question: 'Qual o intervalo adequado entre as doações de sangue?',
      answer:
        'Homens: 2 meses (máximo 4 doações ao ano). Mulheres: 3 meses (máximo 3 doações ao ano).'
    }
  ]

  return (
    <section
      className="mb-16 w-full bg-white px-4 py-20"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="faq-title"
          className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl"
        >
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map(faq => {
            const isOpen = openId === faq.id

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-[#F9F9F9] transition-all duration-300"
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
                  <div className="mx-6 mt-0 border-t border-gray-200/50 p-6 pt-0 leading-relaxed text-gray-600">
                    <p className="py-4">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
