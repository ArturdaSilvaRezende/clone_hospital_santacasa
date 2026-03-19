'use client'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addValueSelected,
  fetchDataDonateProject,
  loadCartItems,
  removeValueSelected,
  clearCart,
  addCartItems
} from '~/app/doacao/store'

import ProjectCard from './components/ProjectCard'
import ValueButton from './components/ValueButton'

import { TbHeartHandshake } from 'react-icons/tb'
import CustomValueInput from './components/CustomValueInput'

const donationValues = [
  { id: 'v50', preco: 50, nome: 'Doação de R$50', personalizado: true },
  { id: 'v100', preco: 100, nome: 'Doação de R$100', personalizado: true },
  { id: 'v150', preco: 150, nome: 'Doação de R$150', personalizado: true },
  { id: 'v200', preco: 200, nome: 'Doação de R$200', personalizado: true },
  { id: 'v500', preco: 500, nome: 'Doação de R$500', personalizado: true }
]

export default function DonationSection() {
  const dispatch = useDispatch()
  const [donationType, setDonationType] = useState('project')
  const [selectedProject, setSelectedProject] = useState('pediatrica')

  const {
    cart_total_price: cartTotalPrice,
    project_list: projectList,
    value_selected: valueSelected
  } = useSelector(store => store.donate)

  function handleDonation() {

  const hasProjectSelected = cartTotalPrice > 0;
  const hasGeneralValueSelected = valueSelected?.preco > 0;

  if (donationType === 'project' && !hasProjectSelected) {
    alert('Por favor, selecione um projeto antes de continuar.');
    return;
  }

  if (donationType === 'general' && !hasGeneralValueSelected) {
    alert('Por favor, selecione ou digite um valor para a doação.');
    return;
  }

  window.location.href = '/doacao-pagamento';
}

  // function handleRemoveDonateValueSelected(id) {
  //   dispatch(removeValueSelected(id))
  // }

  function handleSelectValue(item) {
    dispatch(addValueSelected(item))
  }

  function handleSelectProject(project) {
    setSelectedProject(project.id)

    dispatch(clearCart())

    dispatch(
      addCartItems({
        reference_id: project.id,
        descricao: project.nome,
        quantity: 1,
        preco: project.preco
      })
    )
  }

  useEffect(() => {
    dispatch(loadCartItems())
    dispatch(fetchDataDonateProject())
  }, [dispatch])

  useEffect(() => {
    if (donationType === 'project') {
      dispatch(removeValueSelected())
    } else if (donationType === 'general') {
      dispatch(clearCart())
    }
  }, [donationType, dispatch])

  return (
    <div className="container mx-auto bg-gray-50 max-sm:px-6 max-sm:py-10 md:px-8 md:py-5 lg:px-8 lg:py-12 xl:px-0">
      <div className="mb-8">
        <h1 className="mb-1 text-[22px] font-medium text-black">
          Realize de forma fácil e rápida sua doação
        </h1>
        <p className="text-base font-normal text-[#727070]">
          Escolha como deseja fazer sua doação, pode ser direcionada para um
          projeto específico ou para onde for mais necessário.
        </p>
      </div>

      <div className="flex w-full justify-end max-sm:mb-5">
        <button className="flex flex-row items-center gap-x-2 rounded-lg border border-[#727070] p-3">
          <span className="font-bold text-[#727070]">
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(
              Number(cartTotalPrice || 0) + Number(valueSelected?.preco || 0)
            )}
          </span>
          <TbHeartHandshake color="#727070" size={27} />
        </button>
      </div>

      <div
        className="mb-8 flex gap-3"
        role="radiogroup"
        aria-label="Tipo de doação"
      >
        <button
          onClick={() => setDonationType('project')}
          role="radio"
          aria-checked={donationType === 'project'}
          className={`rounded-full px-6 py-3 font-medium transition-all duration-300 max-sm:px-2 ${
            donationType === 'project'
              ? 'bg-[#FD0003] text-white'
              : 'border border-gray-300 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          Doar para um projeto
        </button>
        <button
          onClick={() => setDonationType('general')}
          role="radio"
          aria-checked={donationType === 'general'}
          className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
            donationType === 'general'
              ? 'bg-[#FD0003] text-white'
              : 'border border-gray-300 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          Doação Geral
        </button>
      </div>

      {donationType === 'project' && (
        <>
          <div
            className="mb-8 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3"
            role="radiogroup"
            aria-label="Selecione um projeto"
          >
            {projectList.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={selectedProject === project.id}
                onSelect={() => handleSelectProject(project)}
              />
            ))}
          </div>

          <button
            onClick={handleDonation}
            className="ml-auto block h-10.5 w-25.75 rounded-full bg-[#FD0003] text-lg font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-xl focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
          >
            Doar
          </button>
        </>
      )}

      {donationType === 'general' && (
        <div className="mb-8 max-sm:mb-0">
          <h2 className="mb-4 text-lg font-semibold text-[#727070]">
            Escolha um valor
          </h2>

          <div className="flex justify-between max-sm:flex-col max-sm:gap-4">
            <div className="flex flex-wrap gap-3" role="radiogroup">
              {donationValues
                .filter(item => item.personalizado === true)
                .map(item => (
                  <ValueButton
                    key={item.id}
                    value={item}
                    isSelected={valueSelected?.reference_id === item.id}
                    onSelect={() =>
                      handleSelectValue({
                        reference_id: item.id,
                        descricao: item.nome,
                        quantity: 1,
                        preco: item.preco
                      })
                    }
                  >
                    <span>
                      {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                        maximumFractionDigits: 0
                      }).format(item.preco)}
                    </span>
                  </ValueButton>
                ))}

              <CustomValueInput
                valueSelected={valueSelected}
                onValueChange={handleSelectValue}
              />
            </div>

            <button
              onClick={handleDonation}
              className="h-10.5 w-25.75 rounded-full bg-[#FD0003] text-lg font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-xl focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
            >
              Doar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
