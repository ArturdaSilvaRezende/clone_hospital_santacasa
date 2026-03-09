import Image from 'next/image'
import Link from 'next/link'
import Copyright from './components/Copyright'

export default function Footer() {
  return (
    <footer
      className="w-full bg-white pt-12 text-[#262626] max-sm:px-6 max-sm:pt-15 max-sm:pb-5 md:px-8"
      aria-label="Rodapé"
    >
      <div className="container mx-auto flex rounded-4xl bg-[#EDECEC] max-sm:flex-col max-sm:p-8 max-sm:text-center md:h-168 md:flex-wrap md:gap-6 md:px-10 md:pt-10 md:text-center lg:h-110 lg:flex-nowrap lg:justify-between lg:gap-10 lg:px-12 lg:py-10.5 lg:text-start">
        <div className="flex-col gap-7.5 max-sm:mb-5 max-sm:w-full md:w-[48%] lg:w-70.75">
          <Link href="/" className="mb-6 inline-block">
            <Image
              src="/images/brand-santa-casa-footer.svg"
              alt="Logo Santa Casa Go"
              width={160}
              height={70}
            />
          </Link>

          <div className="mb-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold max-sm:justify-center md:justify-center lg:justify-start">
              <Image
                src="/icons/location-icon-black.svg"
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
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold max-sm:justify-center md:justify-center lg:justify-start">
              <Image
                src="/icons/phone-icon-black.svg"
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
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold max-sm:justify-center md:justify-center lg:justify-start">
              <Image
                src="/icons/email-icon-black.svg"
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

        <div className="flex flex-col gap-7.5 max-sm:w-full md:w-[48%] lg:w-54.5">
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

          <nav aria-labelledby="politicas">
            <h2 id="politicas" className="mb-4 text-lg font-bold">
              Políticas
            </h2>
            <ul className="space-y-2 max-sm:mb-5">
              <li>
                <Link
                  href="/politica-de-cookies"
                  className="flex items-center gap-2 text-sm text-[#727070] transition-colors hover:text-gray-900 max-sm:justify-center md:justify-center lg:justify-start"
                >
                  <Image
                    src="/icons/cookie-icon-gray.svg"
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
                  className="flex items-center gap-2 text-sm text-[#727070] transition-colors hover:text-gray-900 max-sm:justify-center md:justify-center lg:justify-start"
                >
                  <Image
                    src="/icons/key-icon-gray.svg"
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

        <div className="flex flex-col gap-7.5 max-sm:w-full md:w-[48%] lg:w-40">
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
                  className="flex items-center gap-2 text-sm text-[#727070] transition-colors hover:text-gray-900 max-sm:justify-center md:justify-center lg:justify-start"
                  aria-label="Visite nosso Instagram (abre em nova aba)"
                >
                  <Image
                    src="/icons/instagram-icon-black-gray.svg"
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
                  className="flex items-center gap-2 text-sm text-[#727070] transition-colors hover:text-gray-900 max-sm:justify-center md:justify-center lg:justify-start"
                  aria-label="Visite nosso Facebook (abre em nova aba)"
                >
                  <Image
                    src="/icons/facebook-icon-black-gray.svg"
                    alt="Facebook"
                    width={22}
                    height={22}
                  />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="max-sm:mb-5">
            <h2 className="mb-4 text-lg font-bold">Convênios</h2>
            <p className="text-sm text-[#727070]">Ministério da Saúde</p>
          </div>
        </div>

        <div className="md:relative md:-top-28 md:w-[48%] lg:static lg:top-0 lg:col-span-1 lg:w-44.25">
          <h2 className="mb-4 text-lg font-bold">Segurança</h2>
          <div className="space-y-4">
            <div className="flex flex-col gap-6 max-sm:flex-row max-sm:items-center max-sm:justify-center">
              <div className="max-sm:mx-auto md:mx-auto lg:mx-0">
                <Image
                  src="/images/certificado-SSL.svg"
                  alt="Site Seguro - Certificado SSL"
                  width={107}
                  height={50}
                />
              </div>

              <div className="max-sm:mx-auto md:mx-auto lg:mx-0">
                <Image
                  src="/images/secure-global-sign.svg"
                  alt="GlobalSign Secure"
                  width={105}
                  height={40}
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-4 text-base font-bold">Plataforma Brasil</h3>
              <div className="w-max max-sm:mx-auto max-sm:w-[50%] md:mx-auto lg:mx-0">
                <Image
                  src="/images/plataforma-brasil.svg"
                  alt="Plataforma Brasil"
                  width={134}
                  height={50}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Copyright />
    </footer>
  )
}
