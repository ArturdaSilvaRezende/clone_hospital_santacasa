'use client'

import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { resetReportStore } from '~/app/canal-de-denuncia/store'
import Title from '../components/Title'
import Image from 'next/image'
import { IoIosArrowBack } from 'react-icons/io'

export function FinalStep() {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleNewReport = () => {
    dispatch(resetReportStore())
  }

  const handleGoHome = () => {
    dispatch(resetReportStore())
    router.push('/')
  }

  return (
    <section
      className="mb-16 bg-white py-16 max-sm:py-10"
      aria-label="Canal de Denúncia"
    >
      <div className="container mx-auto space-y-4 max-sm:px-6 md:px-8 xl:px-0">
        <Title
          title="Canal de Denuncia"
          description="Preencha o formulário abaixo e registre sua denúncia"
        />

        <Image
          src="/images/banner-denuncia-enviada-com-sucesso.svg"
          alt="Denúncia enviada com sucesso"
          width={779}
          height={600}
          className="mx-auto mt-5 max-sm:h-full max-sm:w-full"
        />

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-y-3 text-center">
            <h2 className="text-[36px] font-bold text-[#171425] max-sm:text-[28px]">
              Sua Denuncia foi enviada com sucesso
            </h2>
            <p className="text-[20px] font-normal text-[#6C7C92] md:max-w-[85%]">
              As informações referentes a sua denúncia foram salvas e enviadas
              para o nosso canal de atendimento, vamos analisar o caso e tomar
              as devidas providências necessárias.
            </p>
          </div>
          <div className="mt-12 flex w-full flex-row justify-center gap-4 max-sm:flex-col">
            <button
              onClick={handleGoHome}
              className="flex w-61.75 items-center justify-center gap-2 rounded-full border border-[#CBCBCB] py-2.75 text-[#171425] hover:border-[#171425] max-sm:order-2 max-sm:w-full"
            >
              <IoIosArrowBack />
              <span>Voltar a Página Inicial</span>
            </button>

            <button
              onClick={handleNewReport}
              className="flex w-61.75 items-center justify-center gap-2 rounded-full bg-[#262626] py-2.75 text-white hover:bg-[#20A36C] max-sm:w-full"
            >
              Nova Denúncia
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
