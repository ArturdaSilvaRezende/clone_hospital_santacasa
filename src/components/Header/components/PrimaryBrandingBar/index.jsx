import Image from 'next/image'
import React from 'react'

export default function PrimaryBrandingBar() {
  return (
    <section
      className="border-b border-gray-200 bg-white py-3"
      aria-label="Identidade institucional e ações principais"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <a href="/" aria-label="Página inicial da Santa Casa">
              <Image
                src="/brand-santa-casa.svg"
                alt="Logotipo da Santa Casa"
                width={123}
                height={54}
              />
            </a>
          </div>

          <div
            className="flex items-center gap-3"
            role="group"
            aria-label="Ações principais do site"
          >
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border-2 border-red-600 px-6 py-3 font-medium text-red-600 hover:bg-red-50"
              aria-label="Acessar página de transparência"
            >
              <Image
                src="/search-icon-red.svg"
                alt="Ícone de busca"
                width={22}
                height={22}
              />
              <span>Transparência</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full border-2 border-red-600 px-6 py-3 font-medium text-red-600 hover:bg-red-50"
              aria-label="Acessar informações do banco de sangue"
            >
              <Image
                src="/bloodtype-icon-red.svg"
                alt="Ícone de banco de sangue"
                width={22}
                height={22}
              />
              <span>Banco de Sangue</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700"
              aria-label="Realizar pré-agendamento de atendimento"
            >
              <Image
                src="/calendar-icon-white.svg"
                alt="Ícone de banco de sangue"
                width={20}
                height={20}
              />
              <span>Pré-Agendamento</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
