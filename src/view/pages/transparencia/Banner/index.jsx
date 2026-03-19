import React from 'react'

export function Banner() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center my-20 max-sm:my-10 text-center max-sm:px-5" aria-label="Transparência">
      <h2 className="text-[16px] font-semibold text-[#FD0003] uppercase">
        Transparência
      </h2>
      <h1 className="mb-3 lg:text-[32px] max-sm:text-[22px] md:text-[26px] font-medium text-black">
        Bem-vindo à transparência da Santa Casa!
      </h1>
      <p className="w-249 max-sm:w-full md:w-[80%] text-[16px] max-sm:text-[14px] font-medium text-[#727070]">
        Aqui, você encontrará informações sobre nossa instituição, tudo para
        garantir o seu direito de nos conhecer. Este espaço é seu para explorar,
        conforme respaldado por leis como a Lei Federal n° 12.527/2011 e outras
        normas estaduais. Então, sinta-se à vontade para navegar e descobrir
        mais sobre a nossa instituição!
      </p>
    </section>
  )
}
