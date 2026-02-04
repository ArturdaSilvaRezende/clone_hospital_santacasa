import React from 'react'

export function Header() {
    return (
        <div className='w-[82%] xl:w-[1120px] flex flex-col mt-[3rem]'>
            <div>
                <a className='text-[#727070] text-[0.9rem] cursor-pointer'>Pré-agendamento {'>'}</a>
            </div>
            <div className='mt-[2rem] xl:block hidden'>
                <h1 className='text-[1.7rem] font-[600] text-black'>Formulário para realizar o pré-agendamento</h1>
                <p className='text-[1rem] font-[500] text-[#7A7A7A]'>Preencha as informações abaixo para realizar o seu pré-agendamento</p>
            </div>
        </div>
    )
}