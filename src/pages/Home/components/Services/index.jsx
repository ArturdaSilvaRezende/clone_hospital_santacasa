import './styles.css'

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: 'Pré-agendamento SUS',
      description: 'Agende sua consulta pelo SUS.',
      action: 'Agendar agora',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Especialidades',
      description: 'Conheça nossas áreas médicas.',
      action: 'Ver especialidades',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Agendar Consulta Particular',
      description: 'Agendamento particular online.',
      action: 'Agendar consulta',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Exames',
      description: 'Laboratório e diagnóstico por imagem.',
      action: 'Consultar exames',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Trabalhe Conosco',
      description: 'Faça parte da nossa equipe.',
      action: 'Ver vagas',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Ouvidoria',
      description: 'Canal de comunicação e sugestões.',
      action: 'Entrar em contato',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 7,
      title: 'Voluntariado',
      description: 'Seja um voluntário.',
      action: 'Seja voluntário',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 8,
      title: 'Banco de Sangue',
      description: 'Doe sangue e salve vidas.',
      action: 'Doar sangue',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
    }
  ]

  return (
    <section className="min-h-screen bg-white px-4">
      <div className="container mx-auto max-w-285">
        <h2 className="text-center text-[36px] font-normal text-black">
          Um pouquinho de tudo que temos para
          <span className="text-[#FD0003]"> você</span>
        </h2>
        <p className="mb-12 text-center text-[20px] text-[#A7A7A7]">
          Em 2024 a Santa Casa realizou:
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="service-card group animate-fade-in-up cursor-pointer"
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <div className="relative h-64 overflow-hidden rounded-3xl transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-red-600/20">
                <div className="card-image-wrapper absolute inset-0">
                  <img
                    src={service.image}
                    alt={`${service.title} - ${service.description}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <h3 className="mb-2 text-xl leading-tight font-bold text-white transition-all duration-300 group-hover:translate-y-[-2px]">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-200 transition-all duration-300 group-hover:text-white">
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
          ))}
        </div>
      </div>
    </section>
  )
}
