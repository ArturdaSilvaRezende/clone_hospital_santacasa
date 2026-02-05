"use client"

import React from 'react'
import { LuArrowLeftRight } from 'react-icons/lu'
import { BiUser } from 'react-icons/bi'
import { LiaCubeSolid } from 'react-icons/lia'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { MdOutlineCelebration } from "react-icons/md";
import { useSelector } from 'react-redux'

export function Steps() {
    const { current_step: currentStep } = useSelector(store => store.schedule)

    return (
        <div className='w-full xl:w-auto'>
            <div className='w-[250px] relative flex-col h-max xl:flex hidden'>
                <div className='absolute w-[1px] bg-[#BCBBBB] top-0 bottom-0 right-0'></div>
                <div className='flex flex-col gap-y-[4rem]'>
                    <div className='pr-5 relative'>
                        <div className='flex flex-col items-end mr-5'>
                            <span className='text-[12px] font-[400] text-[#A3A3A3]'>Passo 1</span>
                            <p className='text-[1rem] font-[600] text-[#727070] text-end'>Tipo de Retorno</p>
                        </div>
                        <div className={`${currentStep == 'first' ? 'bg-[#727070]' : 'bg-[#BCBBBB]'} rounded-full h-[38px] w-[38px] absolute right-0 top-0 bottom-0 -mr-[1.2rem] border-[5px] border-white flex flex-col items-center justify-center`}>
                            <LuArrowLeftRight size={15} color='#fff' />
                        </div>
                    </div>
                    <div className='pr-5 relative'>
                        <div className='flex flex-col items-end mr-5'>
                            <span className='text-[12px] font-[400] text-[#A3A3A3]'>Passo 2</span>
                            <p className='text-[1rem] font-[600] text-[#727070] text-end'>Dados Paciente</p>
                        </div>
                        <div className={`${currentStep == 'second' ? 'bg-[#727070]' : 'bg-[#BCBBBB]'} rounded-full h-[38px] w-[38px] absolute right-0 top-0 bottom-0 -mr-[1.2rem] border-[5px] border-white flex flex-col items-center justify-center`}>
                            <BiUser size={15} color='#fff' />
                        </div>
                    </div>
                    <div className='pr-5 relative'>
                        <div className='flex flex-col items-end mr-5'>
                            <span className='text-[12px] font-[400] text-[#A3A3A3]'>Passo 3</span>
                            <p className='text-[1rem] font-[600] text-[#727070] text-end'>Dados Pré-agendamento</p>
                        </div>
                        <div className={`${currentStep == 'third' ? 'bg-[#727070]' : 'bg-[#BCBBBB]'} rounded-full h-[38px] w-[38px] absolute right-0 top-0 bottom-0 -mr-[1.2rem] border-[5px] border-white flex flex-col items-center justify-center`}>
                            <LiaCubeSolid size={15} color='#fff' />
                        </div>
                    </div>
                    <div className='pr-5 relative'>
                        <div className='flex flex-col items-end mr-5'>
                            <span className='text-[12px] font-[400] text-[#A3A3A3]'>Passo 4</span>
                            <p className='text-[1rem] font-[600] text-[#727070] text-end'>Observação e Confirmação</p>
                        </div>
                        <div className={`${currentStep == 'fourth' ? 'bg-[#727070]' : 'bg-[#BCBBBB]'} rounded-full h-[38px] w-[38px] absolute right-0 top-0 bottom-0 -mr-[1.2rem] border-[5px] border-white flex flex-col items-center justify-center`}>
                            <IoDocumentTextOutline size={15} color='#fff' />
                        </div>
                    </div>
                    <div className='pr-5 relative'>
                        <div className='flex flex-col items-end mr-5'>
                            <span className='text-[12px] font-[400] text-[#A3A3A3]'>Final</span>
                            <p className='text-[1rem] font-[600] text-[#727070] text-end'>Anote o Protocolo de atendimento</p>
                        </div>
                        <div className={`${currentStep == 'final' ? 'bg-[#727070]' : 'bg-[#BCBBBB]'} rounded-full h-[38px] w-[38px] absolute right-0 top-0 bottom-0 -mr-[1.2rem] border-[5px] border-white flex flex-col items-center justify-center`}>
                            <MdOutlineCelebration size={15} color='#fff' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex xl:hidden w-full'>
                <ul className="flex items-center w-full">
                    <li className="flex w-full items-center text-[#727070] dark:text-[#727070] after:content-[''] after:w-full after:h-1 after:border-b after:border-[#727070] after:border-4 after:inline-block dark:after:border-[#727070]">
                        <span className="flex items-center justify-center w-10 h-10 bg-[#727070] rounded-full lg:h-12 lg:w-12 dark:[#727070] shrink-0">
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.78141 4.7387L17.3522 4.7387L14.4533 1.83975L15.4595 0.833496L20.0835 5.45746L15.4595 10.0814L14.4533 9.07516L17.3522 6.17621L9.78141 6.1762L9.78141 4.7387ZM0.916832 11.5429L5.54079 6.91891L6.54704 7.92516L3.64808 10.8241L11.2189 10.8241L11.2189 12.2616L3.64808 12.2616L6.54704 15.1606L5.54079 16.1668L0.916832 11.5429Z" fill="white" />
                            </svg>
                        </span>
                    </li>
                    <li className="flex w-full items-center text-[#727070] dark:text-[#727070] after:content-[''] after:w-full after:h-1 after:border-b after:border-[#BCBBBB] after:border-4 after:inline-block dark:after:border-[#BCBBBB]">
                        <span className="flex items-center justify-center w-10 h-10 bg-[#BCBBBB] rounded-full lg:h-12 lg:w-12 dark:[#727070] shrink-0">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99984 6.97705C6.9915 6.97705 6.1665 6.65622 5.52484 6.01455C4.88317 5.37288 4.56234 4.54788 4.56234 3.53955C4.56234 2.53122 4.88317 1.70622 5.52484 1.06455C6.1665 0.422884 6.9915 0.102051 7.99984 0.102051C9.00817 0.102051 9.83317 0.422884 10.4748 1.06455C11.1165 1.70622 11.4373 2.53122 11.4373 3.53955C11.4373 4.54788 11.1165 5.37288 10.4748 6.01455C9.83317 6.65622 9.00817 6.97705 7.99984 6.97705ZM0.666504 14.3333V12.1791C0.666504 11.5986 0.811643 11.1021 1.10192 10.6896C1.3922 10.2771 1.7665 9.96386 2.22484 9.74997C3.24845 9.29163 4.23005 8.94788 5.16963 8.71872C6.10921 8.48955 7.05262 8.37497 7.99984 8.37497C8.94706 8.37497 9.88664 8.49337 10.8186 8.73018C11.7505 8.96698 12.7277 9.30839 13.7501 9.75441C14.2283 9.97023 14.6117 10.2832 14.9003 10.6932C15.1889 11.1033 15.3332 11.5986 15.3332 12.1791V14.3333H0.666504ZM2.0415 12.9583H13.9582V12.1791C13.9582 11.9347 13.8856 11.7017 13.7405 11.4802C13.5953 11.2586 13.4158 11.0944 13.2019 10.9875C12.2241 10.5139 11.3304 10.1892 10.5207 10.0135C9.71095 9.83782 8.87067 9.74997 7.99984 9.74997C7.129 9.74997 6.28109 9.83782 5.45609 10.0135C4.63109 10.1892 3.73734 10.5139 2.77484 10.9875C2.56095 11.0944 2.38525 11.2586 2.24775 11.4802C2.11025 11.7017 2.0415 11.9347 2.0415 12.1791V12.9583ZM7.99984 5.60205C8.59567 5.60205 9.08838 5.40726 9.47796 5.01768C9.86755 4.62809 10.0623 4.13538 10.0623 3.53955C10.0623 2.94372 9.86755 2.45101 9.47796 2.06143C9.08838 1.67184 8.59567 1.47705 7.99984 1.47705C7.404 1.47705 6.9113 1.67184 6.52171 2.06143C6.13213 2.45101 5.93734 2.94372 5.93734 3.53955C5.93734 4.13538 6.13213 4.62809 6.52171 5.01768C6.9113 5.40726 7.404 5.60205 7.99984 5.60205Z" fill="white" />
                            </svg>
                        </span>
                    </li>
                    <li className="flex w-full items-center text-[#727070] dark:text-[#727070] after:content-[''] after:w-full after:h-1 after:border-b after:border-[#BCBBBB] after:border-4 after:inline-block dark:after:border-[#BCBBBB]">
                        <span className="flex items-center justify-center w-10 h-10 bg-[#BCBBBB] rounded-full lg:h-12 lg:w-12 dark:[#727070] shrink-0">
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.525 8.85L9.025 0L14.525 8.85H3.525ZM14.65 20C13.4167 20 12.3833 19.5833 11.55 18.75C10.7167 17.9167 10.3 16.8833 10.3 15.65C10.3 14.4167 10.7167 13.3833 11.55 12.55C12.3833 11.7167 13.4167 11.3 14.65 11.3C15.8833 11.3 16.9167 11.7167 17.75 12.55C18.5833 13.3833 19 14.4167 19 15.65C19 16.8833 18.5833 17.9167 17.75 18.75C16.9167 19.5833 15.8833 20 14.65 20ZM0 19.375V11.775H7.6V19.375H0ZM14.6521 18.5C15.4507 18.5 16.125 18.2243 16.675 17.6729C17.225 17.1215 17.5 16.4465 17.5 15.6479C17.5 14.8493 17.2243 14.175 16.6729 13.625C16.1215 13.075 15.4465 12.8 14.6479 12.8C13.8493 12.8 13.175 13.0757 12.625 13.6271C12.075 14.1785 11.8 14.8535 11.8 15.6521C11.8 16.4507 12.0757 17.125 12.6271 17.675C13.1785 18.225 13.8535 18.5 14.6521 18.5ZM1.5 17.875H6.1V13.275H1.5V17.875ZM6.225 7.35H11.825L9.025 2.825L6.225 7.35Z" fill="white" />
                            </svg>
                        </span>
                    </li>
                    <li className="flex w-full items-center text-[#727070] dark:text-[#727070] dark:after:border-[#727070]">
                        <span className="flex items-center justify-center w-10 h-10 bg-[#BCBBBB] rounded-full lg:h-12 lg:w-12 dark:[#727070] shrink-0">
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.975 15.75H12.025V14.25H3.975V15.75ZM3.975 11.5H12.025V10H3.975V11.5ZM1.5 20C1.1 20 0.75 19.85 0.45 19.55C0.15 19.25 0 18.9 0 18.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H10.525L16 5.475V18.5C16 18.9 15.85 19.25 15.55 19.55C15.25 19.85 14.9 20 14.5 20H1.5ZM9.775 6.15V1.5H1.5V18.5H14.5V6.15H9.775Z" fill="white" />
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}