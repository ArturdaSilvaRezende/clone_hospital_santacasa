import './styles.css'

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: 'Pré-agendamento SUS',
      description: 'Agende sua consulta pelo SUS.',
      action: 'Agendar agora',
      image:
        'https://cdn.manualdohomem.com.br/?w=1233&h=772&key=aHR0cHM6Ly9tYW51YWxkb2hvbWVtbW9kZXJuby5jb20uYnI=&u=%2Ffiles%2F2024%2F06%2Fcomo-marcar-consulta-pelo-aplicativo-do-sus-como-marcar-consulta-pelo-aplicativo-do-sus.webp'
    },
    {
      id: 2,
      title: 'Especialidades',
      description: 'Conheça nossas áreas médicas.',
      action: 'Ver especialidades',
      image:
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80'
      // médicos + diversidade de áreas
    },
    {
      id: 3,
      title: 'Agendar Consulta Particular',
      description: 'Agendamento particular online.',
      action: 'Agendar consulta',
      image:
        'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&auto=format&fit=crop&q=80'
      // médico + paciente em atendimento direto
    },
    {
      id: 4,
      title: 'Exames',
      description: 'Laboratório e diagnóstico por imagem.',
      action: 'Consultar exames',
      image:
        'https://cdn.pixabay.com/photo/2016/09/27/17/14/heart-1698840_1280.jpg'
    },
    {
      id: 5,
      title: 'Trabalhe Conosco',
      description: 'Faça parte da nossa equipe.',
      action: 'Ver vagas',
      image:
        'https://cdn.pixabay.com/photo/2017/08/02/00/49/people-2569234_1280.jpg'
      // equipe + carreira
    },
    {
      id: 6,
      title: 'Ouvidoria',
      description: 'Canal de comunicação e sugestões.',
      action: 'Entrar em contato',
      image:
        'https://images.pexels.com/photos/16129688/pexels-photo-16129688.jpeg?_gl=1*es1361*_ga*OTk3MTg1ODIxLjE3Njk3OTQ4MzA.*_ga_8JE65Q40S6*czE3Njk3OTQ4MzAkbzEkZzEkdDE3Njk3OTQ5OTMkajU5JGwwJGgw'
      // atendimento / suporte / escuta
    },
    {
      id: 7,
      title: 'Voluntariado',
      description: 'Seja um voluntário.',
      action: 'Seja voluntário',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&auto=format&fit=crop&q=80'
      // pessoas ajudando pessoas
    },
    {
      id: 8,
      title: 'Banco de Sangue',
      description: 'Doe sangue e salve vidas.',
      action: 'Doar sangue',
      image:
        'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80'
      // doação de sangue clara e direta
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
          {services.map((service, index) => {
            return (
              <article
                key={service.id}
                className="service-card group animate-fade-in-up cursor-pointer"
                style={{
                  animationDelay: `${0.3 + index * 0.1}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="relative h-64 overflow-hidden rounded-3xl transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-red-600/20">
                  <div className="card-image-wrapper absolute inset-0">
                    <img
                      src={service.image}
                      alt={`${service.title} - ${service.description}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
