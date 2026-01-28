import Image from 'next/image'
import React from 'react'

export default function MainNavigationBar() {
  return (
    <nav className="bg-[#727070]" aria-label="Navegação principal">
      <div className="container mx-auto max-w-285">
        <ul className="align-center flex justify-between">
          <li>
            <a
              href="#"
              className="flex items-center gap-2 py-4 font-medium text-white hover:bg-gray-600"
            >
              Início
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 py-4 font-medium text-white hover:bg-gray-600"
            >
              Especialidades
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 py-4 font-medium text-white hover:bg-gray-600"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Institucional
              <Image
                src="/icons/caret-down-icon-white.svg"
                alt="Ícone arrow down"
                width={22}
                height={22}
              />
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 py-4 font-medium text-white hover:bg-gray-600"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pacientes e Familiares
              <Image
                src="/icons/caret-down-icon-white.svg"
                alt="Ícone arrow down"
                width={22}
                height={22}
              />
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 py-4 font-medium text-white hover:bg-gray-600"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hospital Escola
              <Image
                src="/icons/caret-down-icon-white.svg"
                alt="Ícone arrow down"
                width={22}
                height={22}
              />
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 py-4 font-medium text-white hover:bg-gray-600"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Como ajudar
              <Image
                src="/icons/caret-down-icon-white.svg"
                alt="Ícone arrow down"
                width={22}
                height={22}
              />
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 py-4 font-medium text-white hover:bg-gray-600"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Contato
              <Image
                src="/icons/caret-down-icon-white.svg"
                alt="Ícone arrow down"
                width={22}
                height={22}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
