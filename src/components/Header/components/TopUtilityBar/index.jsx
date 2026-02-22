import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiDonateHeart } from 'react-icons/bi'

export default function TopUtilityBar() {
  return (
    <section
      className="border-b border-gray-200"
      aria-label="Informações de contato e redes sociais"
    >
      <div className="container mx-auto flex items-center justify-between py-4 max-sm:px-6 md:px-8 lg:px-0">
        <nav aria-label="Redes sociais">
          <ul className="flex items-center max-sm:gap-0.5 md:gap-0.5 lg:gap-3">
            <li className="hidden text-sm text-[#A7A7A7] lg:block">
              Redes Sociais
            </li>

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

            <li title="Instagram" className="max-sm:pr-1 md:pr-2">
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
                  loading="eager"
                  width={22}
                  height={22}
                />
              </a>
            </li>
          </ul>
        </nav>

        <nav
          aria-label="Links úteis"
          className="hidden md:block lg:relative lg:-left-1.5"
        >
          <ul className="flex items-center md:relative md:-left-4 md:gap-3 lg:static lg:left-0 lg:gap-6">
            <li className="relative flex cursor-pointer items-center gap-2 text-sm text-[#FD0003] after:absolute after:top-1/2 after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-[#EDECEC] last:after:hidden hover:text-red-600 hover:underline max-md:text-[10px] md:after:right-0 md:after:hidden lg:after:-right-3 lg:after:block">
              <Image
                src="/icons/fluent-patient-icon-red.svg"
                alt="Portal do Paciente"
                width={22}
                height={22}
              />
              <span>Portal do Paciente</span>
            </li>

            <li className="relative flex cursor-pointer items-center gap-2 text-sm text-[#FD0003] after:absolute after:top-1/2 after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-[#EDECEC] last:after:hidden hover:text-red-600 hover:underline max-md:text-[10px] md:after:right-0 md:after:hidden lg:after:-right-3 lg:after:block">
              <Image
                src="/icons/bloodtype-icon-red.svg"
                alt="Banco de Sangue"
                width={22}
                height={22}
              />
              <span>Banco de Sangue</span>
            </li>

            <li className="relative flex cursor-pointer items-center gap-2 text-sm text-[#FD0003] after:absolute after:top-1/2 after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-[#EDECEC] last:after:hidden hover:text-red-600 hover:underline md:after:right-0 md:after:hidden lg:after:-right-3 lg:after:block">
              <Image
                src="/icons/exam-result-icon-red.svg"
                alt="Resultado de Exames"
                width={22}
                height={22}
              />
              <span>Resultado de Exames</span>
            </li>

            <li className="relative cursor-pointer items-center text-sm text-[#FD0003] after:absolute after:top-1/2 after:h-4 after:w-px after:-translate-y-1/2 after:bg-[#FD0003] last:after:hidden hover:text-red-600 hover:underline md:after:right-0 md:after:hidden lg:after:-right-3 lg:after:block">
              <Link
                href="/transparencia"
                className="flex gap-2"
                target="_blank"
              >
                <Image
                  src="/icons/search-icon-red.svg"
                  alt="Transparência"
                  width={22}
                  height={22}
                />
                <span>Transparência</span>
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href="https://santacasago.colabore.org/doacao/single_step"
          target="_blank"
          className="flex items-center justify-between px-4 font-medium text-[#FD0003] transition-colors duration-200 hover:text-red-600 md:hidden"
        >
          <BiDonateHeart size={22} />
          <span className="ml-2 text-[16px]">Doar</span>
        </Link>
      </div>
    </section>
  )
}
