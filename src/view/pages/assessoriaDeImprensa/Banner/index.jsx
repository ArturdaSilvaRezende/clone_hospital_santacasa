import Image from 'next/image'
import {
  MdOutlineCalendarToday,
  MdOutlinePersonOutline,
  MdOutlineMailOutline,
  MdOutlineAccessTime
} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

export default function Banner() {
  return (
    <section
      className="container mx-auto mb-16 max-sm:mb-14 max-sm:h-max md:h-80 lg:h-100 md:px-8 xl:px-0"
      aria-label="Guia do Paciente"
    >
      <div className="flex items-center justify-center max-sm:flex-col lg:justify-between">
        <div className="w-[50%] pl-4 max-sm:w-full max-sm:order-2 max-sm:px-6 max-sm:mt-10">
          <p className="-mb-2 text-[16px] font-bold tracking-tight text-[#FD0003] uppercase">
            Assessoria de Imprensa
          </p>
          <h2 className="mb-5 text-[32px] font-medium text-black max-sm:text-[28px]">
            Contate-nos
          </h2>

          <h3 className="mb-3 text-[18px] font-medium text-[#FD0003]">
            Informações para contato
          </h3>

          <div className="relative border-l-4 border-[#FD0003] pl-3">
            <address className="space-y-3 max-sm:space-y-4 not-italic">
              <div className="group flex flex-col max-sm:flex-row justify-between lg:flex-row lg:items-center">
                <div className="flex items-center gap-2">
                  <MdOutlineCalendarToday
                    className="text-[24px] text-[#535353]"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] text-[#535353]">
                    Segunda a Sexta
                  </span>
                </div>
                <div className="mx-4 hidden grow border-b border-dotted border-gray-300 lg:block"></div>
                <div className="mt-1 flex items-center gap-1">
                  <MdOutlineAccessTime
                    className="text-[24px] text-[#535353]"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] text-[#535353]">
                    7h às 17h30
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between max-sm:flex-row lg:flex-row lg:items-center">
                <div className="flex items-center gap-1">
                  <MdOutlinePersonOutline
                    className="text-[24px] text-[#535353]"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] text-[#535353]">
                    Rafael Xavier
                  </span>
                </div>
                <div className="mx-4 hidden grow border-b border-dotted border-gray-300 lg:block"></div>

                <div className="flex items-center gap-1">
                  <FaWhatsapp
                    aria-hidden="true"
                    className="text-[24px] text-[#535353]"
                  />
                  <span className="text-[16px] text-[#535353]">
                    (62) 99141-9456
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MdOutlineMailOutline
                  className="text-[24px] text-[#535353]"
                  aria-hidden="true"
                />
                <span className="text-[16px] text-[#535353]">
                  ascom@santacasago.org.br
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="relative xl:w-175 md:w-100 max-sm:h-75 max-sm:w-full md:h-80 md:-right-7.5 lg:-right-7.5 lg:h-100 lg:w-120 xl:-right-8.5">
          <Image
            src="/images/banner-section-assessoria-de-imprensa.svg"
            alt="Guia do Paciente"
            fill
            className="rounded-bl-[60px] object-cover object-center max-sm:h-auto max-sm:w-full max-sm:rounded-tl-none max-sm:rounded-bl-[60px]"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
