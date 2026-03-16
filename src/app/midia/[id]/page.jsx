import Image from 'next/image'
import Link from 'next/link'
import AudioTranscript from '~/view/pages/midia/Home/components/AudioTranscription'
import PdfViewer from '~/view/pages/midia/Home/components/PdfViewer'
import { listMidia } from '~/view/pages/midia/utils'

export default async function Page({ params }) {
  const { id } = await params
  const dataMidia = listMidia.find(item => item.id === Number(id))

  if (!dataMidia) {
    throw new Error('Evento não encontrado no mock')
  }

  return (
    <section className="my-24 max-sm:my-16" aria-label="Santa Casa em destaque">
      <article className="container mx-auto flex flex-col items-start gap-y-8 max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <header className="mb-10 max-sm:mb-0 flex w-full flex-col items-center gap-2.5 text-center">
          <p className="rounded-full border border-[#727070CC]/80 bg-[#72707080]/80 px-3 py-1 text-[12px] font-medium text-white">
            <span>{dataMidia.type}</span>
          </p>
          <h1 className="text-[24px] max-sm:text-[18px] leading-tight font-bold text-black">
            Santa Casa amplia atendimento e reforça estrutura para alta
            complexidade
          </h1>
          <p className="mx-auto mt-2 md:max-w-2xl w-full text-[16px] max-sm:text-[14px] font-normal text-[#535353]">
            Reportagem mostra melhorias em setores assistenciais e destaca o
            impacto do atendimento filantrópico para pacientes de Goiânia e do
            interior.
          </p>
        </header>

        {dataMidia.type === 'Televisão' && (
          <div className="flex w-full flex-col space-y-6">
            <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center ">
              <h3 className="text-[20px] md:w-[50%] lg:w-auto font-semibold text-black">
                {dataMidia.title}
              </h3>
              <button className="rounded-full border border-[#FD0003] px-6 py-2.5 text-[14px] font-medium text-[#FD0003] transition-all hover:bg-[#FD0003] hover:text-white active:scale-95">
                Ver matéria completa
              </button>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-gray-100">
              <iframe
                src={dataMidia.video}
                title={dataMidia.title}
                className="aspect-video h-auto w-full "
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-5 flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/calendar-icon-gray.svg"
                  alt="Calendar Icon"
                  width={16}
                  height={17}
                />
                <p className="relative top-px text-[16px] font-normal text-[#727070]">
                  {dataMidia.date}
                </p>
              </div>
              <p className="flex gap-1 font-normal text-[#727070]">
                <span className="font-semibold">Programa:</span>
                <span>{dataMidia.program}</span>
              </p>
            </div>

            <Link
              href="/midia"
              className="mt-3 ml-auto w-30 rounded-full border border-[#FD0003] px-6 py-1.5 text-center text-[14px] font-medium text-[#FD0003] transition-all hover:bg-[#FD0003] hover:text-white active:scale-95"
            >
              Voltar
            </Link>
          </div>
        )}

        {dataMidia.type === 'Rádio' && (
          <>
            <div className="mt-8 flex w-full flex-col gap-5">
              <div className="mx-auto w-full lg:max-w-4xl">
                <h3 className="mb-5 text-[20px] font-semibold text-black">
                  {dataMidia.title}
                </h3>

                <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/calendar-icon-gray.svg"
                      alt="Calendar Icon"
                      width={16}
                      height={17}
                    />

                    <p className="relative top-px text-[16px] font-normal text-[#727070]">
                      {dataMidia.date}
                    </p>
                  </div>

                  <p className="flex gap-1 font-normal text-[#727070]">
                    <span className="font-semibold">Programa:</span>

                    <span>{dataMidia.program}</span>
                  </p>
                </div>
              </div>
            </div>
            <AudioTranscript
              src={dataMidia.audio}
              transcript={dataMidia.transcript}
            />
          </>
        )}

        {dataMidia.type === 'Jornal' && (
          <>
            <div className="lg:mt-8 flex w-full flex-col gap-5">
              <div className="mx-auto w-full lg:max-w-4xl">
                <div className="flex w-full flex-col space-y-6">
                  <div className="flex w-full mb-5 flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <h3 className="text-[20px] font-semibold text-black">
                      {dataMidia.title}
                    </h3>
                    <button className="rounded-full border border-[#FD0003] px-6 py-2.5 text-[14px] font-medium text-[#FD0003] transition-all hover:bg-[#FD0003] hover:text-white active:scale-95">
                      Ver matéria completa
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/calendar-icon-gray.svg"
                      alt="Calendar Icon"
                      width={16}
                      height={17}
                    />

                    <p className="relative top-px text-[16px] font-normal text-[#727070]">
                      {dataMidia.date}
                    </p>
                  </div>

                  <p className="flex gap-1 font-normal text-[#727070]">
                    <span className="font-semibold">Programa:</span>

                    <span>{dataMidia.program}</span>
                  </p>
                </div>
              </div>
            </div>
            <PdfViewer />
             <Link
              href="/midia"
              className="mt-3 ml-auto w-30 rounded-full border border-[#FD0003] px-6 py-1.5 text-center text-[14px] font-medium text-[#FD0003] transition-all hover:bg-[#FD0003] hover:text-white active:scale-95"
            >
              Voltar
            </Link>
          </>
        )}
      </article>
    </section>
  )
}
