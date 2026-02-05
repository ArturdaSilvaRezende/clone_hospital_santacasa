import Image from 'next/image'
import React from 'react'

export default function TopUtilityBar() {
  return (
    <section
      className="border-b border-gray-200"
      aria-label="Informações de contato e redes sociais"
    >
      <div className="container mx-auto max-w-285 py-3">
        <div className="flex items-center justify-between">
          <nav aria-label="Redes sociais">
            <ul className="flex items-center gap-3">
              <li className="text-sm text-[#A7A7A7]">Redes Sociais</li>

              <li title="Facebook">
                <a
                  href="#"
                  aria-label="Facebook da Santa Casa"
                  className="text-gray-400 hover:opacity-80"
                >
                  <Image
                    src="/icons/facebook-icon-gray.svg"
                    alt="ícone de contanto"
                    width={22}
                    height={22}
                  />
                </a>
              </li>

              <li title="Instagram">
                <a
                  href="#"
                  aria-label="Instagram da Santa Casa"
                  className="text-gray-400 hover:opacity-80"
                >
                  <Image
                    src="/icons/instagram-icon-gray.svg"
                    alt="ícone de contanto"
                    width={22}
                    height={22}
                  />
                </a>
              </li>

              <li title="YouTube">
                <a
                  href="#"
                  aria-label="YouTube da Santa Casa"
                  className="text-gray-400 hover:opacity-80"
                >
                  <Image
                    src="/icons/youtube-icon-gray.svg"
                    alt="ícone de contanto"
                    width={22}
                    height={22}
                  />
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Links úteis">
            <ul className="flex items-center gap-6">
              <li className="relative flex cursor-pointer items-center gap-2 text-sm text-[#FD0003] after:absolute after:top-1/2 after:-right-3 after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-[#EDECEC] last:after:hidden hover:text-red-600 hover:underline">
                <Image
                  src="/icons/fluent-patient-icon-red.svg"
                  alt="Portal do Paciente"
                  width={22}
                  height={22}
                />
                <span>Portal do Paciente</span>
              </li>

              <li className="relative flex cursor-pointer items-center gap-2 text-sm text-[#FD0003] after:absolute after:top-1/2 after:-right-3 after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-[#EDECEC] last:after:hidden hover:text-red-600 hover:underline">
                <Image
                  src="/icons/bloodtype-icon-red.svg"
                  alt="Banco de Sangue"
                  width={22}
                  height={22}
                />
                <span>Banco de Sangue</span>
              </li>

              <li className="relative flex cursor-pointer items-center gap-2 text-sm text-[#FD0003] after:absolute after:top-1/2 after:-right-3 after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-[#EDECEC] last:after:hidden hover:text-red-600 hover:underline">
                <Image
                  src="/icons/exam-result-icon-red.svg"
                  alt="Resultado de Exames"
                  width={22}
                  height={22}
                />
                <span>Resultado de Exames</span>
              </li>

              <li className="relative flex cursor-pointer items-center gap-2 text-sm text-[#FD0003] after:absolute after:top-1/2 after:-right-3 after:h-4 after:w-px after:-translate-y-1/2 after:bg-[#FD0003] last:after:hidden hover:text-red-600 hover:underline">
                <Image
                  src="/icons/search-icon-red.svg"
                  alt="Transparência"
                  width={22}
                  height={22}
                />
                <span>Transparência</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
