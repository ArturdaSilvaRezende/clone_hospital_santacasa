import Image from 'next/image'
import React from 'react'

export default function PrimaryBrandingBar() {
  return (
    <section
      className="border-b border-gray-200 bg-white py-3"
      aria-label="Identidade institucional e ações principais"
    >
      <div className="container mx-auto max-w-285 py-4">
        <div className="flex items-center justify-between">
          <div>
            <a href="/" aria-label="Página inicial da Santa Casa">
              <Image
                src="/images/brand-santa-casa.svg"
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
              className="flex items-center gap-2 rounded-full border-2 border-[#FD0003] px-6 py-3 text-[14px] font-normal text-[#FD0003] hover:bg-red-50"
              aria-label="Acessar página de transparência"
            >
              <Image
                src="/icons/search-icon-red.svg"
                alt="Ícone de busca"
                width={18}
                height={18}
                className="group-hover:hidden"
              />
              <span>Transparência</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full border-2 border-[#FD0003] px-6 py-3 text-[14px] font-normal text-[#FD0003] hover:bg-red-50"
              aria-label="Acessar informações do banco de sangue"
            >
              <Image
                src="/icons/bloodtype-icon-red.svg"
                alt="Ícone de banco de sangue"
                width={18}
                height={18}
              />
              <span>Banco de Sangue</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-[#FD0003] px-6 py-3 text-[14px] font-normal text-white hover:bg-red-600"
              aria-label="Realizar pré-agendamento de atendimento"
            >
              <Image
                src="/icons/calendar-icon-white.svg"
                alt="Ícone de banco de sangue"
                width={17}
                height={17}
              />
              <span>Pré-Agendamento</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
