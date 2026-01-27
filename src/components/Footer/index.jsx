import Image from 'next/image'
import Link from 'next/link'

const PhoneIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const EmailIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const CookieIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const PrivacyIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
)

const InstagramIcon = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const FacebookIcon = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#EDECEC] py-12 text-[#262626]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between">
          {/* Coluna 1 - Contato */}
          <div className="w-70.75 flex-col gap-7.5">
            <div className="mb-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <Image
                  src="/location-icon-black.svg"
                  alt="endereço"
                  width={22}
                  height={22}
                />
                Endereço
              </h2>
              <address className="text-[14px] leading-relaxed text-[#727070] not-italic">
                R. Campinas, 1135 - Vila Americano do Brasil, Goiânia - GO,
                74530-240
              </address>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 flex items-center gap-2 text-base font-bold">
                <Image
                  src="/phone-icon-black.svg"
                  alt="telefone"
                  width={22}
                  height={22}
                />
                Agendar Consulta
              </h3>
              <a
                href="tel:+556232544200"
                className="text-sm text-[#727070] transition-colors hover:text-gray-900"
                aria-label="Ligar para agendar consulta: (62) 3254-4200"
              >
                (62) 3254-4200
              </a>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-base font-bold">
                <Image
                  src="/email-icon-black.svg"
                  alt="e-mail"
                  width={22}
                  height={22}
                />
                E-mail
              </h3>
              <a
                href="mailto:contato@santacasago.org.br"
                className="text-sm break-all text-[#727070] transition-colors hover:text-gray-900"
                aria-label="Enviar e-mail para contato@santacasago.org.br"
              >
                contato@santacasago.org.br
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Importantes */}
          <div className="flex w-54.5 flex-col gap-7.5">
            <nav aria-labelledby="links-importantes">
              <h2 id="links-importantes" className="mb-4 text-lg font-bold">
                Links Importantes
              </h2>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/radio-web"
                    className="text-sm text-[#727070] transition-colors hover:text-gray-900"
                  >
                    Rádio Web
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trabalhe-conosco"
                    className="text-sm text-[#727070] transition-colors hover:text-gray-900"
                  >
                    Trabalhe Conosco
                  </Link>
                </li>
                <li>
                  <Link
                    href="/convenios"
                    className="text-sm text-[#727070] transition-colors hover:text-gray-900"
                  >
                    Convênios
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Coluna 3 - Políticas */}
            <nav aria-labelledby="politicas">
              <h2 id="politicas" className="mb-4 text-lg font-bold">
                Políticas
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/politica-de-cookies"
                    className="flex items-center gap-2 text-sm text-[#727070] transition-colors hover:text-gray-900"
                  >
                    <Image
                      src="/cookie-icon-gray.svg"
                      alt="política de cookies"
                      width={22}
                      height={22}
                    />
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politica-de-privacidade"
                    className="flex items-center gap-2 text-sm text-[#727070] transition-colors hover:text-gray-900"
                  >
                    <Image
                      src="/key-icon-gray.svg"
                      alt="política de privacidade"
                      width={22}
                      height={22}
                    />
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Coluna 4 - Nossas Redes */}
          <div className="flex w-40 flex-col gap-7.5">
            <nav aria-labelledby="redes-sociais">
              <h2 id="redes-sociais" className="mb-4 text-lg font-bold">
                Nossas Redes
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#727070] transition-colors hover:text-gray-900"
                    aria-label="Visite nosso Instagram (abre em nova aba)"
                  >
                    <Image
                      src="/instagram-icon-black-gray.svg"
                      alt="Instagram"
                      width={22}
                      height={22}
                    />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#727070] transition-colors hover:text-gray-900"
                    aria-label="Visite nosso Facebook (abre em nova aba)"
                  >
                    <Image
                      src="/facebook-icon-black-gray.svg"
                      alt="Facebook"
                      width={22}
                      height={22}
                    />
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <h2 className="mb-4 text-lg font-bold">Convênios</h2>
              <p className="text-sm text-[#727070]">Ministério da Saúde</p>
            </div>
          </div>

          {/* Coluna 6 - Segurança e Plataformas */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-lg font-bold">Segurança</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <Image
                  src="/certificado-SSL.svg"
                  alt="Site Seguro - Certificado SSL"
                  width={120}
                  height={40}
                  className="object-contain"
                />

                <Image
                  src="/secure-global-sign.svg"
                  alt="GlobalSign Secure"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>

              <div className="mt-6">
                <h3 className="mb-3 text-base font-bold">Plataforma Brasil</h3>
                <Image
                  src="/plataforma-brasil.svg"
                  alt="Plataforma Brasil"
                  width={140}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linha de copyright (opcional) */}
      <div className="container mx-auto mt-12 border-t border-gray-300 px-4 pt-6">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Santa Casa de Goiânia. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
