"use client"

import React from 'react'
import { useSelector } from 'react-redux'

export function Actions() {
    const { current_step:currentStep } = useSelector(store => store.schedule)

    return (
        <div className='flex flex-row justify-end gap-x-4 w-full'>
            {currentStep !== 'first' && (
                <button className='h-9.5 px-6 rounded-full border-[#262626] border text-[#262626] w-max'>
                    Voltar
                </button>
            )}
            <button className='h-9.5 px-6 rounded-full bg-black text-white w-max'>
                Confirmar
            </button>
        </div>
    )
}