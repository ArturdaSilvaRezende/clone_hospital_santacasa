"use client"

import React from 'react'

export function Banner() {
    return (
        <section className="w-full flex flex-col items-center relative mt-[3rem]">
            <div className='w-[82%] xl:w-[1120px] relative flex flex-row'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-[2rem] font-[500]'>Especialidades</h1>
                    <p className='text-[1rem] font-[400] text-[#292929]'>Logo abaixo você pode consultar todas nossas especialidades e todos os nossos profissionais do corpo clínico:</p>

                    <button onClick={() => window.open('https://wa.me/556232544008' ,'_blank')} className='flex flex-col w-[300px] items-center justify-center bg-c-red p-2 rounded-full my-5 '>
                        <span className='text-white font-[400]'> Agendar Consulta Particular</span>
                    </button>
                </div>


                <div className='hidden xl:block'>
                    <img src='/images/banner-especialidades.png' />
                </div>
            </div>
        </section>
    )
}