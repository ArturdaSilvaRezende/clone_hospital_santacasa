"use client"

import React from 'react'
import { TbHeartHandshake } from 'react-icons/tb'

export function Banner(){

    function handleConsultSchedule(){
        window.location.href = '/consultar-agendamento'
    }

    return (
        <div className='relative h-[230px] bg-[#FFE2E2] w-full flex flex-col items-center justify-center'>
            <div className='w-full xl:w-[1120px] flex flex-row justify-between items-center p-5 xl:p-0'>
                <div className='flex flex-col'>
                    <h1 className='text-[1.2rem] xl:text-[1.7rem] font-[500] text-black'>Já realizou seu pré-agendamento? </h1>
                    <button onClick={handleConsultSchedule} className='h-[38px] px-[1.5rem] rounded-full bg-black text-white w-max mt-5'>
                        Clique aqui para consultar
                    </button>
                </div>
                <img src='/images/schedule-banner.svg' className='absolute bottom-0 right-0 xl:block hidden' />
            </div>
        </div>
    )
}