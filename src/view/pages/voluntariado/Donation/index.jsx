import Image from 'next/image'
import React from 'react'
import { TbMapPin2 } from 'react-icons/tb'

export default function DonationSection() {
  const itensDoacao = [
    'Fraldas Geriátricas',
    'Absorventes',
    'Creme Dental',
    'Livros Literários',
    'Sabonete Líquido',
    'Hidratante corporal',
    'Lenços umedecidos',
    'Roupas, Calçados e Bijuterias',
    'Escova dental',
    'Barbeador',
    'Shampoo e Condicionador',
    'Bolachas, Café e Alimentos Diversos'
  ]

  return (
    <section className="my-16 max-sm:my-16 md:mt-0 md:mb-16 xl:my-16" aria-label="O que doar?">
      <div className="container mx-auto text-center max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <header className="mb-6">
          <h2 className="text-[16px] font-semibold tracking-widest text-[#FD0003] uppercase">
            Como Ajudar
          </h2>
          <p className="text-[28px] font-medium text-black">O que doar?</p>
          <p className="text-[14px] font-normal text-[#727070]">
            Itens que fazem a diferença na vida dos nossos pacientes
          </p>
        </header>

        <div
          className="mb-16 flex flex-wrap justify-center gap-3"
          aria-label="Lista de itens para doação"
        >
          {itensDoacao.map((item, index) => (
            <span
              key={index}
              className="rounded-full border border-[#FD000333]/70 bg-white px-5 py-2 text-sm text-[#2F2E41]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="space-y-5">
          <h3 className="text-[28px] font-medium text-black">Como doar?</h3>

          <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <div className="flex h-39.5 flex-col justify-center gap-4.5 rounded-2xl border border-[#7270701A]/10 bg-white px-6 shadow-sm max-sm:h-auto max-sm:py-5">
              <figure className="flex items-center justify-between max-sm:justify-start gap-4">
                <Image
                  src="/images/brand-caixa-economica-federal.svg"
                  alt="Logo Caixa Econômica Federal"
                  width={130}
                  height={30}
                  className="object-cover max-sm:w-19.5 max-sm:h-4.5"
                />

                <figcaption className="text-[14px] max-sm:text-[12px] font-medium text-[#727070] uppercase">
                  Caixa Econômica Federal
                </figcaption>
              </figure>

              <p className="flex gap-2 text-[16px] max-sm:text-[14px]">
                <span className="font-bold">Agência:</span>
                <span className="text-[#2F2E41]">1842 — Operação: 003</span>
              </p>
              <p className="flex gap-2 text-[16px] max-sm:text-[14px]">
                <span className="font-bold">Conta Corrente: </span>
                <span className="text-[#2F2E41]">00003105-0</span>
              </p>
            </div>

            <div className="flex h-39.5 flex-col justify-start gap-4.5 rounded-2xl border border-[#7270701A]/10 bg-white px-6 pt-5 shadow-sm max-sm:h-auto max-sm:py-5">
              <figure className="flex items-center gap-4">
                <Image
                  src="/icons/brand-pix.svg"
                  className="object-cover max-sm:w-20 max-sm:h-7"
                  alt="logo pix"
                  width={95}
                  height={35}
                />
                <figcaption className="text-[14px] font-medium text-[#727070] uppercase">
                  Chave Pix — CNPJ
                </figcaption>
              </figure>

              <p className="flex gap-2 text-[16px] max-sm:text-[14px]">
                <span className="font-bold">Chave PIX: </span>
                <span className="text-[#2F2E41]">01.619.790/0002-31</span>
              </p>
            </div>

            <div className="flex h-39.5 flex-col justify-center gap-4.5 rounded-2xl border border-[#7270701A]/10 bg-white px-6 shadow-sm max-sm:h-auto max-sm:py-5">
              <div className="flex items-center gap-4">
                <TbMapPin2 color="#FD0003" size={45} />
                <span className="text-[14px] font-medium text-[#727070] uppercase">
                  Presencialmente
                </span>
              </div>
              <p className="text-[16px] lg:w-83.75">
                <span className="font-bold">Endereço: </span>
                <span className="text-[#2F2E41]">
                  Rua Campinas, 1135 - Vila Americano do Brasil, Goiânia - GO,
                  74530-240
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
