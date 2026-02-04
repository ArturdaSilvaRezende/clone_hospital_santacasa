"use client"

import React from 'react'
import { useSelector } from 'react-redux'

export function Actions() {
    const { current_step:currentStep } = useSelector(store => store.schedule)

    return (
        <div className='flex flex-row justify-end gap-x-[1rem] w-full'>
            {currentStep !== 'first' && (
                <button className='h-[38px] px-[1.5rem] rounded-full border-[#262626] border-[1px] text-[#262626] w-max'>
                    Voltar
                </button>
            )}
            <button className='h-[38px] px-[1.5rem] rounded-full bg-black text-white w-max'>
                Confirmar
            </button>
        </div>
    )
}