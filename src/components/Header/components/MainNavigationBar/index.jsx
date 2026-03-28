'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaChevronDown } from 'react-icons/fa6'
import { BiDonateHeart } from 'react-icons/bi'
import { PiCalendarCheckLight } from 'react-icons/pi'
import { IoMdClose } from 'react-icons/io'

import './styles.css'

export default function MainNavigationBar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef(null)

  const menuData = {
    servicos: { title: 'Serviços', items: [] },
    institucional: {
      title: 'Institucional',
      items: [
        { name: 'Administração', route: 'administracao' },
        { name: 'Assessoria de Imprensa', route: 'assessoria-de-imprensa' },
        { name: 'Capelania', route: 'capelania' },
        { name: 'Comissões Técnicas', route: 'comissoes-tecnicas' },
        { name: 'Especialidades', route: 'especialidades' },
        { name: 'Mídia', route: 'midia' },
        { name: 'Notícias', route: 'noticias' },
        { name: 'Reciclagem', route: 'reciclagem' },
        { name: 'Voluntariado', route: 'voluntariado' },
        { name: 'Quem somos', route: 'quem-somos' }
      ]
    },
    pacientes: {
      title: 'Pacientes e Familiares',
      items: [
        { name: 'Horário de Visitas', route: 'horario-de-visitas' },
        {
          name: 'Agendar Consulta Particular',
          route: 'agendar-consulta-particular'
        },
        { name: 'Guia do Paciente', route: 'guia-do-paciente' }
      ]
    },
    hospital: {
      title: 'Hospital Escola',
      items: [
        { name: 'Espaço para Graduação', route: 'espaco-para-graduacao' },
        { name: 'Residência Médica', route: 'residencia-medica' }
      ]
    },
    ajudar: { title: 'Como ajudar', items: [] },
    contato: {
      title: 'Contato',
      items: [
        { name: 'Canal de Ouvidoria', route: 'canal-de-ouvidoria' },
        { name: 'Central de Perguntas', route: 'central-de-perguntas' },
        { name: 'Canal de Denúncia', route: 'canal-de-denuncia' },
        { name: 'Telefones Úteis', route: 'telefones-uteis' }
      ]
    }
  }

  const toggleMenu = menuKey => {
    setActiveMenu(prev => (prev === menuKey ? null : menuKey))
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMenu(null)
        setMobileMenuOpen(false)
      }
    }

    const handleEscape = event => {
      if (event.key === 'Escape') {
        setActiveMenu(null)
        setMobileMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      ref={headerRef}
      className="relative z-50 w-full"
      aria-label="Menu de Navegação Principal"
    >
      <div className="container mx-auto flex h-20 items-center justify-between max-sm:px-6 md:px-8 lg:gap-3 lg:px-8 xl:gap-0 xl:px-0">
        <Link href="/">
          <Image
            src="/images/brand-santa-casa.svg"
            alt="Santa Casa Logo"
            loading="eager"
            width={109}
            height={48}
            className="object-cover"
          />
        </Link>

        <nav aria-label="Menu principal">
          <div className="flex items-center justify-between">
            <ul className="hidden w-160.5 items-center justify-between space-x-1 lg:flex lg:w-150 xl:w-160.5">
              {Object.entries(menuData).map(([key, menu]) => (
                <li
                  key={key}
                  onMouseEnter={() => setActiveMenu(key)}
                  className={`${activeMenu === key ? 'text-[#FD0003]' : 'text-[#727070]'} group relative flex cursor-pointer items-center gap-1 rounded-lg text-[13px] font-medium transition-colors duration-200 hover:text-[#FD0003] lg:text-[12px] xl:text-[13px]`}
                  aria-haspopup="true"
                  aria-expanded={activeMenu === key}
                >
                  {menu.title}

                  {menu.items.length > 0 && (
                    <FaChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        activeMenu === key ? 'rotate-180' : ''
                      }`}
                    />
                  )}

                  {activeMenu === key &&
                    menu.items.length > 0 &&
                    !mobileMenuOpen && (
                      <div
                        className="absolute top-8 -left-10 z-40 min-w-max rounded-[10px] border border-gray-100 bg-white shadow-sm group-hover:block"
                        style={{
                          animation: 'fadeSlideDown 0.3s ease-out',
                          cursor: 'default'
                        }}
                        onMouseLeave={() => setActiveMenu(null)}
                      >
                        <div className="flex flex-col gap-2 p-4">
                          {menu.items.map((item, index) => (
                            <Link
                              key={index}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`/${typeof item === 'string' ? item.toLowerCase().replace(/ /g, '-') : item.route}`}
                              className="relative w-max"
                              onClick={() => setActiveMenu(null)}
                            >
                              <h3 className="font-medium text-[#727070] transition-colors duration-200 hover:text-[#FD0003]">
                                {typeof item === 'string' ? item : item.name}
                              </h3>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-red-50 hover:text-red-600 lg:hidden"
            >
              {mobileMenuOpen ? (
                <IoMdClose size={24} />
              ) : (
                <svg
                  className="h-7 w-7 font-semibold text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/pre-agendamento"
            className="lg:-44.5 flex h-10 w-44.5 items-center justify-between rounded-[20px] border border-[#FD0003] px-4 text-[12px] font-normal text-[#FD0003] transition-colors duration-200 hover:bg-red-50 lg:text-[10px] xl:w-50 xl:text-[12px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiCalendarCheckLight size={20} />
            <span>Pré-Agendamento SUS</span>
          </Link>

          <Link
            href="https://santacasago.colabore.org/doacao/single_step"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-19.5 items-center justify-between rounded-[20px] bg-[#FD0003] px-4 text-[12px] font-normal text-white transition-colors duration-200 hover:bg-red-700"
          >
            <BiDonateHeart size={20} />
            <span>Doar</span>
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="border-t border-gray-200 bg-white shadow-lg lg:hidden"
          style={{
            animation: 'fadeSlideDown 0.3s ease-out'
          }}
        >
          <ul className="flex flex-col space-y-4 py-4 max-sm:px-8 md:px-10">
            {Object.entries(menuData).map(([key, menu]) => (
              <li key={key}>
                <button
                  onClick={() => toggleMenu(key)}
                  className="flex w-full items-center justify-between pr-3 text-left text-sm font-medium text-gray-700"
                >
                  {menu.title}
                  {menu.items.length > 0 && (
                    <FaChevronDown
                      size={14}
                      className={`transition-transform ${
                        activeMenu === key ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {activeMenu === key && menu.items.length > 0 && (
                  <ul
                    className="mt-2 space-y-2 pl-4"
                    style={{
                      animation: 'fadeSlideDown 0.3s ease-out'
                    }}
                  >
                    {menu.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/${typeof item === 'string' ? item.toLowerCase().replace(/ /g, '-') : item.route}`}
                          className="block py-1 text-sm text-gray-600"
                          rel="noopener noreferrer"
                          onClick={() => {
                            setActiveMenu(null)
                            setMobileMenuOpen(false)
                          }}
                        >
                          {typeof item === 'string' ? item : item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-3 p-5 md:hidden">
            <Link
              href="/pre-agendamento"
              className="flex h-10 w-full items-center justify-center gap-2 rounded-[20px] border border-[#FD0003] px-4 text-[12px] font-normal text-[#FD0003] transition-colors duration-200 hover:bg-red-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiCalendarCheckLight size={20} />
              <span>Pré-Agendamento SUS</span>
            </Link>

            <Link
              href="https://santacasago.colabore.org/doacao/single_step"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-full items-center justify-center gap-2 rounded-[20px] bg-[#FD0003] px-4 text-[12px] font-normal text-white transition-colors duration-200 hover:bg-red-700"
            >
              <BiDonateHeart size={20} />
              <span>Doar</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
