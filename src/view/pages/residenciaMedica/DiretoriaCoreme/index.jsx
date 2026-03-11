import Image from 'next/image'

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
  return (
    <section
      className="mb-16 bg-white py-15"
      aria-label="Conheça a diretoria do Coreme"
    >
      <div className="container mx-auto max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <h2 className="mb-6 text-center text-[32px] font-medium tracking-tight text-[#FD0003] max-sm:text-[26px]">
          Conheça a diretoria do <span className="uppercase"> Coreme</span>
        </h2>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
          {members.map((member, index) => (
            <li key={index} className="max-sm:w-full md:w-[45%] lg:w-auto">
              <div className="flex min-h-19.5 items-center gap-3 rounded-2xl border border-[#7270701A] bg-white p-4">
                <div
                  className="h-11.5 w-11.5 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/person-diretoria.jpg')"
                  }}
                  role="img"
                  aria-label="Médica sorrindo segurando uma prancheta vermelha"
                />

                <div className="flex flex-col">
                  <h3 className="text-[18px] max-sm:text-[14px] leading-tight font-normal text-[#2F2E41]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[16px] max-sm:text-[12px] font-normal text-[#727070]">
                    {member.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
