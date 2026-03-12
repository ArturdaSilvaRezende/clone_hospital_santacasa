import AccordionSection from '~/components/AccordionSection'

const faqHospital = [
  {
    id: 1,
    title: 'Quais são os documentos necessários para o atendimento?',
    description:
      'Para pacientes particulares ou de convênio, é necessário apresentar um documento de identidade com foto (RG ou CNH) e a carteirinha do plano de saúde (se houver).'
  },
  {
    id: 2,
    title: 'Como funciona o horário de visitas nas alas de internação?',
    description:
      'As visitas ocorrem diariamente das 10h às 20h, sendo permitida a entrada de até dois visitantes por vez para garantir o conforto e a recuperação dos pacientes.'
  },
  {
    id: 3,
    title: 'O hospital realiza agendamento de exames por telefone?',
    description:
      'Sim, nossa central de agendamento funciona de segunda a sexta, das 07h às 19h. Você também pode realizar o pré-agendamento através do nosso site oficial.'
  },
  {
    id: 4,
    title:
      'Qual é a diferença entre o Pronto-Socorro e a Consulta Ambulatorial?',
    description:
      'O Pronto-Socorro atende casos de urgência e emergência sem agendamento. Já as consultas ambulatoriais são consultas de rotina agendadas previamente com especialistas.'
  },
  {
    id: 5,
    title:
      'É permitido acompanhante para pacientes idosos ou menores de idade?',
    description:
      'Sim, de acordo com a lei, pacientes menores de 18 anos e maiores de 60 anos têm direito a um acompanhante durante 24 horas por dia.'
  },
  {
    id: 6,
    title: 'Como posso obter uma cópia do meu prontuário médico?',
    description:
      'A solicitação deve ser feita presencialmente no setor de SAME (Serviço de Arquivo Médico), mediante preenchimento de formulário e apresentação de documento oficial.'
  },
  {
    id: 7,
    title: 'O hospital possui estacionamento para pacientes e visitantes?',
    description:
      'Sim, dispomos de estacionamento próprio com serviço de manobrista na entrada principal, funcionando 24 horas por dia com tarifação por período.'
  },
  {
    id: 8,
    title: 'Quais convênios médicos são aceitos na instituição?',
    description:
      "Atendemos os principais planos de saúde nacionais e regionais. A lista completa e atualizada está disponível na aba 'Convênios' em nosso site."
  },
  {
    id: 9,
    title: 'Existem restrições de alimentação para quem vai visitar pacientes?',
    description:
      'Sim, por questões de segurança alimentar e controle de infecção, é proibida a entrada de alimentos externos para pacientes sem autorização prévia da equipe de nutrição.'
  },
  {
    id: 10,
    title: 'Como funciona o sistema de triagem no Pronto-Socorro?',
    description:
      'Utilizamos o Protocolo de Manchester, onde o tempo de espera é determinado pela gravidade do caso (cores), e não necessariamente pela ordem de chegada.'
  }
]

export default function FrequentlyQuestions() {
  return (
    <section className="mb-16 bg-white py-16" aria-label="Perguntas Frequentes">
      <div className="container mx-auto flex flex-col max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <div className="flex flex-col items-center">
          <p className="text-[16px] font-semibold text-[#FD0003] uppercase">
            Central de Perguntas
          </p>
          <h1 className="text-[32px] font-medium text-black max-sm:text-[26px]">
            Perguntas Frequentes
          </h1>
          <p className="mt-2 text-[14px] font-normal text-[#727070] max-sm:text-center">
            Confira as dúvidas mais comuns.
          </p>
        </div>

        <div className="mt-12 flex">
          <AccordionSection list={faqHospital} />
        </div>
      </div>
    </section>
  )
}
