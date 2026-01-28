import Image from 'next/image'
import React from 'react'

export default function TopUtilityBar() {
  return (
    <section
      className="border-b border-gray-200 bg-white"
      aria-label="Informações de contato e redes sociais"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <address className="flex items-center gap-6 text-sm text-[#A7A7A7] not-italic">
            <div className="flex items-center gap-2 hover:opacity-80">
              <Image
                src="/icons/phone-icon-gray.svg"
                alt="ícone de contanto"
                width={18}
                height={18}
              />
              <a href="tel:+556232544200" aria-label="Telefone da Santa Casa">
                (62) 3254-4200
              </a>
            </div>

            <div className="flex items-center gap-2 hover:opacity-80">
              <Image
                src="/icons/email-icon-gray.svg"
                alt="ícone de contanto"
                width={22}
                height={22}
              />
              <a
                href="mailto:contato@santacasago.org.br"
                aria-label="E-mail da Santa Casa"
              >
                contato@santacasago.org.br
              </a>
            </div>
          </address>

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
        </div>
      </div>
    </section>
  )
}
