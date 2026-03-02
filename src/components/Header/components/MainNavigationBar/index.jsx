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
        { name: 'Quem somos', route: 'quem-somos' },
        { name: 'Administração', route: 'administracao' },
        { name: 'Superintendência', route: 'superintendencia' },
        { name: 'Estrutura Administrativa', route: 'estrutura-administrativa' },
        { name: 'Comissões Técnicas', route: 'comissoes-tecnicas' },
        { name: 'Voluntariado', route: 'voluntariado' },
        { name: 'Especialidades', route: 'especialidades' },
        { name: 'Eventos', route: 'eventos' }
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
        { name: 'Agendar Consulta SUS', route: 'agendar-consulta-sus' }
      ]
    },
    hospital: {
      title: 'Hospital Escola',
      items: [
        { name: 'Espaço para Graduação', route: 'espaco-para-graduacao' },
        { name: 'Residência Médica', route: 'residencia-medica' },
        { name: 'Biblioteca', route: 'biblioteca' }
      ]
    },
    ajudar: { title: 'Como ajudar', items: [] },
    contato: {
      title: 'Contato',
      items: [
        { name: 'Canal de Ouvidoria', route: 'canal-de-ouvidoria' },
        { name: 'Canal de Denúncia', route: 'canal-de-denuncia' }
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
    <section
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
            className='object-cover'
          />
        </Link>

        <nav aria-label="Menu principal">
          <div className="flex items-center justify-between">
            <ul className="hidden w-160.5 items-center justify-between space-x-1 lg:flex lg:w-150 xl:w-160.5">
              {Object.entries(menuData).map(([key, menu]) => (
                <li
                  key={key}
                  onClick={() => toggleMenu(key)}
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
            className="flex h-10 w-44.5 items-center justify-between rounded-[20px] border border-[#FD0003] px-4 text-[12px] font-normal text-[#FD0003] transition-colors duration-200 hover:bg-red-50"
            target="_blank"
          >
            <PiCalendarCheckLight size={20} />
            <span>Pré-Agendamento SUS</span>
          </Link>

          <Link
            href="https://santacasago.colabore.org/doacao/single_step"
            target="_blank"
            className="flex h-10 w-19.5 items-center justify-between rounded-[20px] bg-[#FD0003] px-4 text-[12px] font-normal text-white transition-colors duration-200 hover:bg-red-700"
          >
            <BiDonateHeart size={20} />
            <span>Doar</span>
          </Link>
        </div>

        {activeMenu &&
          menuData[activeMenu].items.length > 0 &&
          !mobileMenuOpen && (
            <div
              className="animate-fadeIn absolute top-full right-0 left-0 hidden border-t border-gray-200 bg-white lg:block"
              style={{
                animation: 'fadeSlideDown 0.3s ease-out'
              }}
            >
              <div className="container mx-auto px-4 py-8 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                  <div className="lg:col-span-1">
                    <div className="relative overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-linear-to-br from-red-50 via-red-100 to-red-50"></div>
                      <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-red-200 opacity-50 blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-red-300 opacity-40 blur-2xl"></div>
                      <div className="relative p-8">
                        <h2 className="mb-3 text-4xl font-bold text-gray-800">
                          {menuData[activeMenu].title}
                        </h2>
                        <div className="mb-4 h-1 w-20 rounded-full bg-red-600"></div>
                        <p className="text-sm leading-relaxed text-gray-600">
                          Explore todas as opções disponíveis nesta seção
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {menuData[activeMenu].items.map((item, index) => (
                        <Link
                          key={index}
                          target="_blank"
                          href={`/${typeof item === 'string' ? item.toLowerCase().replace(/ /g, '-') : item.route}`}
                          className="group relative flex items-start overflow-hidden rounded-xl border border-gray-100 p-5 transition-all duration-300 hover:border-red-200 hover:bg-linear-to-br hover:from-red-50 hover:to-red-100 hover:shadow-lg"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-700 opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>
                          <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600 transition-all duration-300 group-hover:scale-150 group-hover:bg-red-700"></div>
                          <div className="relative ml-4">
                            <h3 className="mb-1 font-semibold text-gray-800 transition-colors duration-300 group-hover:text-red-600">
                              {typeof item === 'string' ? item : item.name}
                            </h3>
                            <p className="text-xs text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              Clique para saber mais
                            </p>
                          </div>
                          <FaChevronDown className="ml-auto h-4 w-4 -rotate-90 transform text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveMenu(null)}
                  className="absolute top-4 right-4 rounded-full p-2 text-gray-500 transition-all duration-200 hover:rotate-90 hover:bg-red-50 hover:text-red-600"
                  aria-label="Fechar menu"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
            </div>
          )}
      </div>

      {mobileMenuOpen && (
        <div
          className="border-t border-gray-200 bg-white shadow-lg lg:hidden"
          style={{
            animation: 'fadeSlideDown 0.3s ease-out'
          }}
        >
          <ul className="flex flex-col space-y-4 px-6 py-4">
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
                        <a
                          href="#"
                          className="block text-sm text-gray-600"
                          onClick={() => {
                            setActiveMenu(null)
                            setMobileMenuOpen(false)
                          }}
                        >
                          {item}
                        </a>
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
            >
              <PiCalendarCheckLight size={20} />
              <span>Pré-Agendamento SUS</span>
            </Link>

            <Link
              href="https://santacasago.colabore.org/doacao/single_step"
              target="_blank"
              className="flex h-10 w-full items-center justify-center gap-2 rounded-[20px] bg-[#FD0003] px-4 text-[12px] font-normal text-white transition-colors duration-200 hover:bg-red-700"
            >
              <BiDonateHeart size={20} />
              <span>Doar</span>
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
