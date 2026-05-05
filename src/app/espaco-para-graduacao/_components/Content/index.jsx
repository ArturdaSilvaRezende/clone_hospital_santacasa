import { useId } from 'react'
import Carousel from './components/Carousel'
import {
  MdOutlineAccessTime,
  MdOutlineCalendarToday,
  MdOutlineMailOutline
} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa6'

export default function Content() {
  const id = useId()

  return (
    <section
      className="container mx-auto my-16 max-sm:my-10"
      aria-labelledby={`${id}-santa-casa-service-center`}
    >
      <div className="mb-5 text-center">
        <span className="text-[16px] font-semibold text-[#FD0003] uppercase">
          Biblioteca
        </span>
        <h1
          className="text-[32px] font-medium text-black max-sm:text-[26px]"
          id={`${id}-santa-casa-service-center`}
        >
          Posto de Atendimento Santa Casa (PABSC)
        </h1>
      </div>

      <div className="mb:mt-10 container mx-auto mb-26 flex items-center justify-between gap-15 max-sm:flex-col max-sm:gap-10 max-sm:px-6 md:flex-col lg:mt-20 xl:flex-row">
        <Carousel />

        <div className="max-sm:w-full md:w-[90%] lg:w-[45%]">
          <h3 className="mb-3 text-[18px] font-medium text-[#FD0003]">
            Informações para contato
          </h3>

          <div className="relative border-l-4 border-[#FD0003] pl-3">
            <address className="space-y-3 not-italic max-sm:space-y-4">
              <div className="group flex flex-col justify-between max-sm:flex-col max-sm:gap-2 md:flex-row md:items-center">
                <div className="flex items-center gap-2">
                  <MdOutlineCalendarToday
                    className="text-[24px] text-[#535353]"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] text-[#535353]">
                    Segunda a Quinta
                  </span>
                </div>
                <div className="mx-4 grow border-b border-dotted border-gray-300 max-sm:hidden md:block"></div>
                <div className="mt-1 flex items-center gap-1">
                  <MdOutlineAccessTime
                    className="text-[24px] text-[#535353]"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] text-[#535353]">7h às 19h</span>
                </div>
              </div>

              <div className="group flex flex-col justify-between max-sm:flex-col max-sm:gap-2 md:flex-row md:items-center">
                <div className="flex items-center gap-2">
                  <MdOutlineMailOutline
                    className="text-[24px] text-[#535353]"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] text-[#535353]">
                    ascom@santacasago.org.br
                  </span>
                </div>
                <div className="mx-4 grow border-b border-dotted border-gray-300 max-sm:hidden md:block"></div>

                <div className="flex items-center gap-1">
                  <FaWhatsapp
                    aria-hidden="true"
                    className="text-[24px] text-[#535353]"
                  />
                  <span className="text-[16px] text-[#535353]">
                    (62) 3941-1652
                  </span>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}
