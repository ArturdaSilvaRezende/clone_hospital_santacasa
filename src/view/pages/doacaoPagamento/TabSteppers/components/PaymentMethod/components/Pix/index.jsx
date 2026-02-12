'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { MdContentCopy } from 'react-icons/md'

export default function Pix() {
  const [copied, setCopied] = useState(false)

  return (
    <>
      <div className="h-42.75 w-42.75 rounded-xl border border-[#7270701A] bg-[#FAFAFA] p-3">
        <Image
          src="/images/forma-de-pagamento-qrcode.svg"
          alt="Pix QR Code"
          width={147}
          height={147}
        />
      </div>

      <p className="mt-4 mb-2 text-[12px] font-medium text-[#535353]">
        Ou copie o código PIX
      </p>

      <div className="flex w-126 items-center gap-2">
        <div className="h-10.5 w-full truncate rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-sm text-gray-500">
          <span className="relative -top-1 block truncate text-[12px] font-medium whitespace-nowrap text-[#535353]">
            00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-abcd-ef1234567890
          </span>
        </div>

        <button
          className={`flex h-10.5 w-31.25 items-center justify-center gap-2 rounded-xl border border-[#7270701A] bg-[#7270701A] py-3 font-medium transition-all active:scale-95 ${
            copied
              ? 'border-green-200 bg-green-50 text-green-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <MdContentCopy className="text-xl" />
          <span>{copied ? 'Copiado!' : 'Copiar'}</span>
        </button>
      </div>

      <p className="mt-3 text-[12px] font-medium text-[#535353]">
        Aguardando confirmação do pagamento...
      </p>
    </>
  )
}
