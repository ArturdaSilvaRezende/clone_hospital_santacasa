import CustomLink from '~/components/CustomComponents/Link'

export default function TransformLives() {
  return (
    <section className="relative overflow-hidden bg-[#F3F4F6] px-6 py-28">
      <div className="container mx-auto max-w-285">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="animate-fade-in space-y-6">
            <h2 className="text-[40px] leading-tight font-semibold text-gray-900">
              Transforme{' '}
              <span className="relative inline-block font-bold text-red-600">
                vidas
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-red-600 opacity-30"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,6 Q50,0 100,6 T200,6"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              com sua doação! Cada gesto conta.
            </h2>

            <p className="max-w-111.25 text-left text-[16px] leading-relaxed font-medium text-[#404040]">
              Seja a mudança que o mundo precisa ver. Seja a esperança para
              aqueles que anseiam por dias melhores. Sua doação fará toda a
              diferença e permitirá que continuemos nosso trabalho em prol de um
              futuro mais digno para todos.
            </p>

            <div className="flex gap-4 pt-2">
              <CustomLink
                classNameContainer="bg-[#727070] text-white font-medium hover:bg-gray-800"
                label="Área do Doador"
              />

              <CustomLink
                classNameContainer="bg-[#FD0003] text-white font-medium hover:bg-red-700"
                label="Cadastre-se"
              />
            </div>
          </div>

          <div className="animate-fade-in-delay">
            <div className="rounded-[2.5rem] bg-linear-to-br from-red-600/20 to-gray-600/20 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-70" />

            <div className="relative transform overflow-hidden rounded-4xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80"
                alt="Foto histórica da equipe da Santa Casa - grupo de pessoas em vestes formais representando a tradição e dedicação no atendimento humanitário"
                className="h-auto w-full grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
