import Image from 'next/image'
import Link from 'next/link'
import Copyright from './components/Copyright'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#EDECEC] py-12 text-[#262626]">
        <div className="container mx-auto flex max-w-285 justify-between">
          <div className="w-70.75 flex-col gap-7.5">
            <div className="mb-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
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
              <h3 className="mb-3 flex items-center gap-2 text-base font-bold">
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
              <h3 className="mb-3 flex items-center gap-2 text-base font-bold">
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
                    className="flex items-center gap-2 text-sm text-[#727070] transition-colors hover:text-gray-900"
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
                    className="flex items-center gap-2 text-sm text-[#727070] transition-colors hover:text-gray-900"
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

            <div>
              <h2 className="mb-4 text-lg font-bold">Convênios</h2>
              <p className="text-sm text-[#727070]">Ministério da Saúde</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h2 className="mb-4 text-lg font-bold">Segurança</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-6">
                <Image
                  src="/images/certificado-SSL.svg"
                  alt="Site Seguro - Certificado SSL"
                  width={120}
                  height={40}
                  className="object-contain"
                />

                <Image
                  src="/images/secure-global-sign.svg"
                  alt="GlobalSign Secure"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>

              <div className="mt-6">
                <h3 className="mb-3 text-base font-bold">Plataforma Brasil</h3>
                <Image
                  src="/images/plataforma-brasil.svg"
                  alt="Plataforma Brasil"
                  width={140}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  )
}
