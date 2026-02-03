import Link from 'next/link'

export default function BreadcrumbSection({
  children,
  title,
  isShowButton = false
}) {
  return (
    <section className="relative flex h-50 items-center justify-center overflow-hidden bg-[url('/images/banner-breadcrumb-section.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto max-w-285">
        <div className="absolute inset-0 z-10 bg-linear-to-br from-red-900/65 via-red-800/70 to-red-900/85" />

        <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-[32px] font-bold tracking-tight text-white drop-shadow-lg">
            {title}
          </h1>

          <nav aria-label="Breadcrumb" className="mt-2 mb-4">
            <ol className="flex items-center justify-center gap-3 text-sm text-[18px] text-white/95 drop-shadow-lg">
              <li>
                <Link
                  href="/"
                  className="font-normal text-[#F3F4F6] transition-colors duration-200 hover:underline"
                >
                  Início
                </Link>
              </li>
              {children}
            </ol>
          </nav>

          {isShowButton && (
            <button className="bg:text-white inline-flex h-9.5 transform items-center justify-center rounded-full bg-white px-8 text-gray-900 shadow-xl transition-all duration-300 hover:bg-[#FD0003] hover:text-white">
              <span className="text-base font-normal">
                Clique aqui para consultar
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
