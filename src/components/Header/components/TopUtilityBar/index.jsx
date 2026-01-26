import Image from 'next/image'
import React from 'react'

export default function TopUtilityBar() {
  return (
    <section
      class="border-b border-gray-200 bg-white"
      aria-label="Informações de contato e redes sociais"
    >
      <div class="mx-auto max-w-7xl px-6 py-3">
        <div class="flex items-center justify-between">
          <address class="flex items-center gap-6 text-sm text-gray-500 not-italic">
            <div class="flex items-center gap-2">
              <Image
                src="/phone-icon-gray.svg"
                alt="ícone de contanto"
                width={18}
                height={18}
              />
              <a href="tel:+556232544200" aria-label="Telefone da Santa Casa">
                (62) 3254-4200
              </a>
            </div>

            <div class="flex items-center gap-2">
              <i class="fas fa-envelope text-gray-400" aria-hidden="true"></i>
              <a
                href="mailto:contato@santacasago.org.br"
                aria-label="E-mail da Santa Casa"
              >
                contato@santacasago.org.br
              </a>
            </div>
          </address>

          <nav aria-label="Redes sociais">
            <ul class="flex items-center gap-3">
              <li class="text-sm text-gray-500">Redes Sociais</li>

              <li>
                <a
                  href="#"
                  aria-label="Facebook da Santa Casa"
                  class="text-gray-400 hover:text-gray-600"
                >
                  <i class="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  aria-label="Instagram da Santa Casa"
                  class="text-gray-400 hover:text-gray-600"
                >
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  aria-label="YouTube da Santa Casa"
                  class="text-gray-400 hover:text-gray-600"
                >
                  <i class="fab fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
