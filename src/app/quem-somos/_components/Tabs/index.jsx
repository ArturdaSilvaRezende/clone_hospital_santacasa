'use client'
import { useId, useState } from 'react'
import TabEssence from '../Essence'
import TabOurStory from '../OurStory'
import InnovationAndFuture from '../InnovationAndFuture'


const TABS_CONFIG = {
  essencia: {
    title: 'Nossa essência',
    label: 'Conteúdo sobre nossa essência...'
  },
  historia: {
    title: 'Nossa história',
    label: 'Conteúdo sobre nossa trajetória...'
  },
  inovacao: {
    title: 'Inovação e Futuro',
    label: 'Conteúdo sobre o futuro da saúde...'
  }
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('essencia')
  const id = useId()

  const renderContent = () => {
    switch (activeTab) {
      case 'essencia':
        return <TabEssence />
      case 'historia':
        return <TabOurStory />
      case 'inovacao':
        return <InnovationAndFuture />
      default:
        return null
    }
  }

  return (
    <section aria-labelledby={`${id}-tabs-title`}>
      <div className="bg-white pt-12 max-sm:px-6 max-sm:pt-8 md:px-8 md:pt-8 lg:px-0">
        <div className="mb-10 text-center">
          <span className="text-[16px] font-bold tracking-widest text-[#FD0003] uppercase">
            Quem Somos
          </span>
          <h2 className="text-[32px] font-medium text-black" id={`${id}-tabs-title`}>
            Tradição na Saúde em Goiás
          </h2>
          <p className="text-[16px] text-[#727070]">
            Nossa vida em serviço da sua
          </p>
        </div>

        <div
          className="container mx-auto"
          role="tablist"
          aria-label="Seções sobre a empresa"
        >
          <div className="flex justify-center md:flex-nowrap md:gap-0 lg:flex-wrap lg:gap-4">
            {Object.keys(TABS_CONFIG).map(key => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`panel-${key}`}
                id={`tab-${key}`}
                onClick={() => setActiveTab(key)}
                className={`relative py-4 text-[16px] font-normal transition-all duration-300 max-sm:text-[12px] ${
                  activeTab === key
                    ? 'border-b-2 border-[#FD0003] text-[#FD0003]'
                    : 'border-b-2 border-transparent text-[#727070] hover:text-gray-600'
                } min-w-37.5 flex-1 text-center max-sm:min-w-0`}
              >
                <span>{TABS_CONFIG[key].title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="mt-6 text-center leading-relaxed text-gray-700"
      >
        {renderContent()}
      </div>
    </section>
  )
}
