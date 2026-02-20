'use client'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addValueSelected,
  fetchDataDonateProject,
  loadCartItems,
  removeValueSelected
} from '~/app/doacao/store'

import ProjectCard from './components/ProjectCard'
import ValueButton from './components/ValueButton'

import { TbHeartHandshake } from 'react-icons/tb'

const projects = [
  {
    id: 'pediatrica',
    title: 'Reforma da Ala Pediátrica',
    description:
      'Transforme o ambiente hospitalar em um espaço mais acolhedor para crianças.',
    goal: 45000,
    progress: 40
  },
  {
    id: 'maternidade',
    title: 'Reforma da Ala Maternidade',
    description:
      'Transforme o ambiente hospitalar em um espaço mais acolhedor para crianças.',
    goal: 45000,
    progress: 40
  },
  {
    id: 'cirurgica',
    title: 'Reforma da Ala Cirúrgica',
    description:
      'Transforme o ambiente hospitalar em um espaço mais acolhedor para crianças.',
    goal: 45000,
    progress: 40
  }
]

// const donationValues = [
//   { id: 'v50', value: 50, label: 'R$50,00' },
//   { id: 'v100', value: 100, label: 'R$100,00' },
//   { id: 'v150', value: 150, label: 'R$150,00' },
//   { id: 'v200', value: 200, label: 'R$200,00' },
//   { id: 'v500', value: 500, label: 'R$500,00' }
// ]

export default function DonationSection() {
  const dispatch = useDispatch()
  const [donationType, setDonationType] = useState('project')
  const [selectedProject, setSelectedProject] = useState('pediatrica')
  //   const [selectedValue, setSelectedValue] = useState('v50')

  const {
    cart_total_price: cartTotalPrice,
    project_list: projectList,
    value_selected: valueSelected
  } = useSelector(store => store.donate)

  function handleDonation() {
    window.location.href = '/doacao-pagamento'
  }

  function handleRemoveDonateValueSelected(id) {
    dispatch(removeValueSelected(id))
  }

  function handleSelectValue(item) {
    dispatch(addValueSelected(item))
  }

  useEffect(() => {
    dispatch(loadCartItems())
    dispatch(fetchDataDonateProject())
  }, [dispatch])

  return (
    <div className="container mx-auto max-w-285 bg-gray-50 px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-1 text-[22px] font-medium text-black">
          Realize de forma fácil e rápida sua doação
        </h1>
        <p className="text-base font-normal text-[#727070]">
          Escolha como deseja fazer sua doação, pode ser direcionada para um
          projeto específico ou para onde for mais necessário.
        </p>
      </div>

      {/* <div className="flex w-full justify-end">
        <button className="flex flex-row items-center gap-x-2 rounded-lg border border-[#727070] p-3">
          <span className="text-[#727070]">
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(
              Number(cartTotalPrice || 0) + Number(valueSelected?.preco || 0)
            )}
          </span>
          <TbHeartHandshake color="#727070" size={27} />
        </button>
      </div> */}

      <div
        className="mb-8 flex gap-3"
        role="radiogroup"
        aria-label="Tipo de doação"
      >
        <button
          onClick={() => setDonationType('project')}
          role="radio"
          aria-checked={donationType === 'project'}
          className={`rounded-full px-6 py-3 max-sm:px-2 font-medium transition-all duration-300 ${
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
        <div
          className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          role="radiogroup"
          aria-label="Selecione um projeto"
        >
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject === project.id}
              onSelect={() => setSelectedProject(project.id)}
            />
          ))}
        </div>
      )}

      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-[#727070]">
          Escolha um valor
        </h2>

        <div className="flex justify-between">
          <div
            className="flex flex-wrap gap-3"
            role="radiogroup"
            aria-label="Selecione o valor da doação"
          >
            {projectList
              .filter(item => item.personalizado == true)
              .map((item, key) => (
                <ValueButton
                  key={item.id}
                  value={item}
                  isSelected={valueSelected?.reference_id == item.id}
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
                      currency: 'BRL'
                    }).format(item.preco)}
                  </span>
                </ValueButton>
              ))}

            <div className="flex w-45 items-center justify-center">
              <div className="relative flex w-full max-w-xs items-center">
                <span className="absolute left-4 text-[17px] font-bold text-[#727070] opacity-50">
                  R$
                </span>

                <input
                  type="text"
                  placeholder="Outro valor"
                  className="h-10.5 w-full rounded-full border border-gray-200 bg-white pl-11 text-lg text-black transition-all outline-none placeholder:text-gray-300 hover:border-gray-400 focus:border-gray-300 focus:ring-1 focus:ring-gray-200"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleDonation}
            className="h-10.5 w-25.75 rounded-full bg-[#FD0003] text-lg font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-xl focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
          >
            Doar
          </button>
        </div>
      </div>
    </div>
  )
}
