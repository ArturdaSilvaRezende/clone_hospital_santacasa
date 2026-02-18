import Image from 'next/image'
import './styles.css'

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: 'Pré-agendamento',
      description: 'Faça seu pré-agendamento',
      action: 'Agendar agora',
      image: '/images/thumb-pre-agendamento.svg'
    },

    {
      id: 2,
      title: 'Especialidades',
      description: 'Conheça nossas áreas médicas.',
      action: 'Ver especialidades',
      image: '/images/thumb-especialidades.svg'
    },
    {
      id: 3,
      title: 'Pré-agendamento SUS',
      description: 'Agende sua consulta pelo SUS.',
      action: 'Agendar agora',
      image: '/images/thumb-conecte-sus.jpg'
    },

    {
      id: 4,
      title: 'Exames',
      description: 'Laboratório e diagnóstico por imagem.',
      action: 'Consultar exames',
      image: '/images/thumb-exames.svg'
    },
    {
      id: 5,
      title: 'Trabalhe Conosco',
      description: 'Faça parte da nossa equipe.',
      action: 'Ver vagas',
      image: '/images/thumb-trabalhe-conosco.svg'
    },
    {
      id: 6,
      title: 'Ouvidoria',
      description: 'Canal de comunicação e sugestões.',
      action: 'Entrar em contato',
      image: '/images/thumb-ouvidoria.svg'
    },
    {
      id: 7,
      title: 'Voluntariado',
      description: 'Seja um voluntário.',
      action: 'Seja voluntário',
      image: '/images/thumb-voluntariado.svg'
    },
    {
      id: 8,
      title: 'Banco de Sangue',
      description: 'Doe sangue e salve vidas.',
      action: 'Doar sangue',
      image: '/images/thumb-banco-de-sangue.svg'
    }
  ]

  return (
    <section
      className="bg-white py-20 max-sm:py-10"
      aria-label="Serviços Disponíveis"
    >
      <div className="container mx-auto max-sm:px-6">
        <h2 className="mb-12 text-center text-[36px] font-normal text-black max-sm:w-[90%] max-sm:text-[20px] md:mx-auto md:w-[70%] lg:w-full">
          Um pouquinho de tudo que temos para
          <span className="text-[#FD0003]"> você</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => {
            return (
              <article
                key={service.id}
                className="service-card group animate-fade-in-up w-76.25 cursor-pointer"
                style={{
                  animationDelay: `${0.3 + index * 0.1}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="relative h-47.5 overflow-hidden rounded-3xl transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-red-600/20">
                  <div className="card-image-wrapper absolute inset-0">
                    <Image
                      src={service.image}
                      alt={`${service.title} - ${service.description}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      fill
                    />
                  </div>

                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                    <h3 className="text-[16px] leading-tight font-bold text-white transition-all duration-300 group-hover:-translate-y-0.5">
                      {service.title}
                    </h3>
                    <p className="mb-2 text-[12px] leading-relaxed text-gray-200 transition-all duration-300 group-hover:text-white">
                      {service.description}
                    </p>
                    <a
                      href="#"
                      aria-label={`${service.action} - ${service.title}`}
                      className="action-link inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3"
                    >
                      <span>{service.action}</span>
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
