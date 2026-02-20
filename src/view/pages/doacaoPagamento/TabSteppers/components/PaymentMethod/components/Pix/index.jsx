'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { MdContentCopy } from 'react-icons/md'
import QRCode from 'react-qr-code'

export default function Pix({ payment }) {
  const [successCopyKeyPix, setSuccessCopyKeyPix] = useState(false)

  function handleClipBoard(value) {
    navigator.clipboard.writeText(value).then(() => {
      setSuccessCopyKeyPix(true)
    })
  }

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
 
      {/* <QRCode
        className="h-[300px] w-[300px] border-[1px] border-[#000000] p-5"
        value={payment?.code_pix || ''}
      /> */}

      <div className="flex w-126 items-center gap-2 max-sm:w-full">
        <div className="h-10.5 w-full truncate rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-sm text-gray-500">
          <span className="relative -top-1 block truncate text-[12px] font-medium whitespace-nowrap text-[#535353]">
            {payment?.code_pix || ''}
          </span>
        </div>
 
        <button
          onClick={() => handleClipBoard(payment?.code_pix)}
          className={`flex h-10.5 w-51.25 items-center justify-center gap-2 rounded-xl border border-[#7270701A] bg-[#7270701A] py-3 font-medium transition-all active:scale-95 ${
            successCopyKeyPix
              ? 'border-green-200 bg-green-50 text-green-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <MdContentCopy className="text-xl" />
          <span>{successCopyKeyPix ? 'Copiado!' : 'Copiar'}</span>
        </button>
      </div>

      <p className="mt-3 text-[12px] font-medium text-[#535353]">
        Aguardando confirmação do pagamento...
      </p>
    </>
  )
}
