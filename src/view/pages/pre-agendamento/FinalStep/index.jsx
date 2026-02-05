"use client"

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCopy } from "react-icons/fa6";


export function FinalStep() {
    const { protocolo } = useSelector(store => store.schedule)
    const [isCopied, setIsCopied] = useState(false)

    function copyProtocolo(value) {
        navigator.clipboard.writeText(value).then(() => setIsCopied(true))
    }

    return (
        <div className='flex flex-col w-full xl:mt-0 mt-[2rem]'>
            <div className='flex flex-col gap-y-2'>
                <label className='text-[#262626] text-[1rem] font-[500]'>Protocolo</label>
                <div className='flex flex-row gap-x-4'>
                    <input value={protocolo} className='h-[46px] w-full rounded-[6px] border-[1px] border-[#7D7D7D] px-[1rem] font-[400] text-[#262626]' />
                    <button onClick={() => copyProtocolo(protocolo)}>
                        <FaRegCopy size={22} />
                    </button>
                </div>
                {isCopied && (
                    <div>
                        {/* <Alert severity="success">Protocolo copiado com sucesso!</Alert> */}
                        !!!
                    </div>
                )}
            </div>
            <div className='flex flex-col gap-y-[1rem] xl:flex-row justify-end xl:gap-x-[1rem] w-full mt-[3rem]'>
                <button onClick={() => window.location.href = '/consultar-agendamento?protocolo='+protocolo} type='submit' className='h-[38px] px-[1.5rem] rounded-full bg-black text-white w-full xl:w-max flex flex-row items-center justify-center gap-x-2'>
                    Consultar
                </button>
                <button onClick={() => window.location.href = '/pre-agendamento'} type='submit' className='h-[38px] px-[1.5rem] rounded-full border-[1px] border-[#000] text-black w-full xl:w-max flex flex-row items-center justify-center gap-x-2'>
                    Novo agendamento
                </button>
            </div>
        </div>
    )
}