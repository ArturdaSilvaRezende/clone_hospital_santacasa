import { useId } from 'react';

const members = [
  { name: 'Dr. Evandro das M. Bittencourt Resque Jr', role: 'Coordenador' },
  { name: 'Dr. Kassem Saidah', role: '1º Secretário' },
  { name: 'Dr. Raphael Manollo Vasconcelos Martins', role: 'Tesoureiro' },
  { name: 'Dr. José Cicala', role: 'Conselheiro Fiscal' },
  { name: 'Dr. Edmar Alves de Oliveira', role: 'Conselheiro Fiscal' },
  {
    name: 'Dr. Rodrigo Paashaus de Andrade',
    role: 'Presidente do Conselho Científico'
  },
  { name: 'Dr. Tarik Kassem Saidah', role: 'Conselheiro Científico' },
  { name: 'Dr. José Fernando Bastos Folgosi', role: 'Conselheiro Científico' }
]

export default function DiretoriaCoreme() {
  const id = useId()
  return (
    <section
      className="mb-16 bg-white py-15"
      aria-labelledby={`${id}-diretoria-title`}
    >
      <div className="container mx-auto max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <h2 className="mb-6 text-center text-[32px] font-medium tracking-tight text-[#FD0003] max-sm:text-[26px]" id={`${id}-diretoria-title`}>
          Conheça a diretoria do <span className="uppercase"> Coreme</span>
        </h2>

        <ul className="mx-auto flex flex-wrap items-center justify-start gap-3 md:flex-col lg:max-w-243.25 lg:flex-col xl:flex-row">
          {members.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <li key={index} className={`${isEven ? 'md:ml-auto' : 'md:mr-auto'} max-sm:w-full md:w-120 xl:m-0`}>
                <div className="flex items-center gap-3 rounded-2xl border border-[#727070]/10 bg-white px-5 py-4">
                  <div
                    className="h-11.5 w-11.5 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/person-diretoria.jpg')"
                    }}
                    role="img"
                    aria-label="Médica sorrindo segurando uma prancheta vermelha"
                  />

                  <div className="flex flex-col">
                    <h3 className="leading-tight font-normal text-[#2F2E41] max-sm:text-[14px] lg:text-[18px]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[16px] font-normal text-[#727070] max-sm:text-[12px]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
