export const examsList = [
  {
    id: 1,
    category: 'Endoscopia',
    name: 'Endoscopia Digestiva Alta',
    count: 12,
    description: 'Exame que avalia esôfago, estômago e duodeno por meio de uma câmera flexível introduzida pela boca.',
    detalhes: 'Ajuda a investigar azia/refluxo, dor/queimação, náuseas, vômitos, sangramentos, anemia e dificuldade para engolir. Pode incluir biópsias.',
    duracao: '10-20 minutos',
    jejum: '8h para sólidos e 2h para líquidos claros.',
    preparo: [
      'Mantenha o jejum conforme orientação.',
      'Informe se usa anticoagulantes (ex: AAS, Clopidogrel).',
      'Leve lista de medicamentos e alergias.',
      'Evite álcool no dia anterior.',
      'Vá com acompanhante (devido à sedação) e não dirija após o exame.'
    ]
  },
  {
    id: 2,
    category: 'Endoscopia',
    name: 'Endoscopia com Sedação',
    count: 8,
    description: 'Procedimento endoscópico realizado com sedação para maior conforto.',
    detalhes: 'Mesmo procedimento da endoscopia digestiva, mas com foco em pacientes que possuem alta sensibilidade ou ansiedade.',
    duracao: '20-30 minutos',
    jejum: '8h para sólidos e leite.',
    preparo: [
      'Obrigatório acompanhante maior de idade.',
      'Não dirigir ou operar máquinas por 24h após o exame.',
      'Remover próteses dentárias móveis.',
      'Retirar esmalte de unhas (para medição de oxigênio).'
    ]
  },
  {
    id: 3,
    category: 'Endoscopia',
    name: 'Retossigmoidoscopia',
    count: 5,
    description: 'Exame que avalia reto e parte final do intestino grosso.',
    detalhes: 'Utilizado para diagnosticar pólipos, tumores, inflamações e causas de sangramento retal.',
    duracao: '15-20 minutos',
    jejum: 'Dieta leve na véspera; jejum de 4h no dia.',
    preparo: [
      'Pode exigir aplicação de enema (lavagem) conforme prescrição.',
      'Trazer exames anteriores de abdômen.',
      'Comparecer 30 min antes do horário agendado.'
    ]
  },
  {
    id: 4,
    category: 'Colonoscopia',
    name: 'Colonoscopia',
    count: 9,
    description: 'Exame que permite visualizar todo o intestino grosso.',
    detalhes: 'Fundamental para prevenção de câncer de cólon e retirada de pólipos.',
    duracao: '30-60 minutos',
    jejum: 'Dieta líquida restrita na véspera e jejum absoluto no dia.',
    preparo: [
      'Uso de laxantes específicos conforme protocolo clínico.',
      'Obrigatório acompanhante.',
      'Suspender alimentos com sementes e fibras 3 dias antes.',
      'Beber muita água durante o preparo intestinal.'
    ]
  },
  {
    id: 5,
    category: 'Cardiologia',
    name: 'Eletrocardiograma (ECG)',
    count: 14,
    description: 'Registra a atividade elétrica do coração.',
    detalhes: 'Avalia o ritmo cardíaco e identifica isquemias ou sobrecargas musculares.',
    duracao: '5-10 minutos',
    jejum: 'Não necessário.',
    preparo: [
      'Não usar cremes ou loções no tórax antes do exame.',
      'Homens podem precisar de tricotomia (depilação) em pontos específicos do peito.',
      'Informar medicamentos de uso contínuo para o coração.'
    ]
  },
  {
    id: 6,
    category: 'Cardiologia',
    name: 'Ecocardiograma',
    count: 6,
    description: 'Ultrassom do coração que avalia estruturas e válvulas.',
    detalhes: 'Avalia o tamanho do coração, força de bombeamento e fluxo sanguíneo.',
    duracao: '20-30 minutos',
    jejum: 'Não necessário.',
    preparo: [
      'Trazer exames de imagem anteriores.',
      'Usar roupas fáceis de retirar da cintura para cima.',
      'Não há restrição de dieta ou condução.'
    ]
  },
  {
    id: 7,
    category: 'Imagem',
    name: 'Raio-X',
    count: 18,
    description: 'Exame de imagem que utiliza radiação para avaliar ossos e pulmões.',
    detalhes: 'Rápido e não invasivo, serve para detectar fraturas, pneumonias e obstruções.',
    duracao: '5-10 minutos',
    jejum: 'Geralmente não necessário (exceto se houver contraste).',
    preparo: [
      'Remover objetos metálicos (piercings, colares, sutiã com aro).',
      'Informar se há suspeita de gravidez.',
      'Usar roupas leves.'
    ]
  },
  {
    id: 8,
    category: 'Imagem',
    name: 'Tomografia Computadorizada',
    count: 11,
    description: 'Exame detalhado que utiliza raios-X e tecnologia computadorizada.',
    detalhes: 'Imagens em fatias milimétricas para avaliação profunda de órgãos internos.',
    duracao: '15-30 minutos',
    jejum: '4h para exames com contraste.',
    preparo: [
      'Checar função renal (Creatinina) se houver uso de contraste.',
      'Informar alergia a iodo.',
      'Suspender Metformina 48h antes e depois (se houver contraste e orientação médica).'
    ]
  },
  {
    id: 9,
    category: 'Imagem',
    name: 'Ressonância Magnética',
    count: 7,
    description: 'Exame que utiliza campo magnético para gerar imagens detalhadas.',
    detalhes: 'Excelente para sistema nervoso, articulações e tecidos moles.',
    duracao: '30-60 minutos',
    jejum: '4h para abdômen ou pelve.',
    preparo: [
      'Proibido entrar com metais (marca-passo, stents antigos, projéteis).',
      'Informar se possui claustrofobia.',
      'Retirar maquiagem e produtos de cabelo (podem conter metais).'
    ]
  },
  {
    id: 10,
    category: 'Ginecologia',
    name: 'Ultrassom Transvaginal',
    count: 10,
    description: 'Ultrassonografia realizada por via vaginal para avaliar útero e ovários.',
    detalhes: 'Indicado para controle de ovulação, diagnóstico de cistos, miomas e endometriose.',
    duracao: '15-20 minutos',
    jejum: 'Não necessário.',
    preparo: [
      'Esvaziar a bexiga antes do procedimento.',
      'Melhor realizado fora do período menstrual (exceto sob pedido médico).',
      'Não requer acompanhante.'
    ]
  },
  {
    id: 11,
    category: 'Ginecologia',
    name: 'Papanicolau',
    count: 4,
    description: 'Exame preventivo do colo do útero.',
    detalhes: 'Coleta de células para rastreamento de câncer e infecções por HPV.',
    duracao: '10 minutos',
    jejum: 'Não necessário.',
    preparo: [
      'Não estar no período menstrual.',
      'Não ter tido relações sexuais nas 48h anteriores.',
      'Não usar duchas ou cremes vaginais nos 2 dias antes.'
    ]
  },
  {
    id: 12,
    category: 'Imagem',
    name: 'Mamografia',
    count: 13,
    description: 'Exame de imagem das mamas para rastreamento de câncer.',
    detalhes: 'Raio-X das mamas com compressão para melhor visualização de nódulos e microcalcificações.',
    duracao: '15-20 minutos',
    jejum: 'Não necessário.',
    preparo: [
      'Não usar desodorante, talco ou cremes nas mamas e axilas no dia.',
      'Recomendado realizar após a menstruação para menor sensibilidade.',
      'Trazer exames anteriores para comparação.'
    ]
  },
  {
    id: 13,
    category: 'Pneumologia',
    name: 'Espirometria',
    count: 6,
    description: 'Teste que mede a capacidade respiratória.',
    detalhes: 'Avalia sopro e volumes pulmonares para diagnosticar asma ou DPOC.',
    duracao: '20-30 minutos',
    jejum: 'Não fumar por 4h antes; não ingerir café ou chá.',
    preparo: [
      'Não realizar exercícios físicos intensos no dia.',
      'Refeições leves antes do teste.',
      'Informar uso de "bombinhas" ou broncodilatadores.'
    ]
  },
  {
    id: 14,
    category: 'Laboratorial',
    name: 'Hemograma Completo',
    count: 15,
    description: 'Exame de sangue que avalia glóbulos brancos, vermelhos e plaquetas.',
    detalhes: 'Check-up básico para detectar anemias, infecções e inflamações.',
    duracao: '5 minutos (coleta)',
    jejum: 'Recomendável 3h (não obrigatório para hemograma simples, mas comum em laboratórios).',
    preparo: [
      'Evitar álcool nas últimas 72h.',
      'Informar uso de medicamentos e histórico de desmaios em coletas.'
    ]
  },
  {
    id: 15,
    category: 'Urologia',
    name: 'PSA',
    count: 3,
    description: 'Exame de sangue para avaliação da próstata.',
    detalhes: 'Mede o Antígeno Prostático Específico para rastreio de câncer e prostatite.',
    duracao: '5 minutos (coleta)',
    jejum: 'Não obrigatório (verificar recomendações de outros exames associados).',
    preparo: [
      'Não ter tido relação sexual nas 48h anteriores.',
      'Não ter feito exercícios em bicicleta ou cavalgada por 2 dias.',
      'Não ter realizado toque retal nos últimos 2 dias.'
    ]
  }
];

export const specialtiesDetailsList = [
  {
    id: 3,
    name: 'Urologista',
    description:
      'A Urologia é a especialidade médica responsável pelo diagnóstico e tratamento de doenças que afetam o sistema urinário de homens e mulheres — incluindo rins, ureteres, bexiga e uretra — e o sistema reprodutor masculino. O urologista atua tanto no manejo clínico quanto cirúrgico de condições como infecções urinárias de repetição, cálculos renais, incontinência urinária, disfunção erétil, infertilidade masculina e doenças da próstata, incluindo o câncer. A especialidade tem papel fundamental na saúde preventiva masculina a partir dos 50 anos.',
    when_see:
      'Procure um urologista se apresentar ardência ao urinar, sangue na urina, jato urinário fraco, dor lombar intensa (que pode indicar cálculo renal), dificuldade para urinar, ejaculação dolorosa ou preocupações com saúde sexual masculina.',
    indications: 'Cálculos renais, infecções urinárias, saúde da próstata e disfunções eréteis.',
    averageConsultation: '20-40 minutos',
    preparations: [
      'Trazer exames de urina ou imagem anteriores.',
      'Estar com a bexiga confortavelmente cheia se houver suspeita de infecção.',
    ],
    postProcedure:
      'Em caso de biópsias ou pequenas cirurgias, evitar esforço físico por 48h e manter hidratação reforçada.',
  },
  {
    id: 4,
    name: 'Cirurgia Geral',
    description:
      'A Cirurgia Geral é a especialidade que engloba o diagnóstico e o tratamento cirúrgico de uma ampla variedade de doenças, com foco principal no abdômen, na parede abdominal e nos tecidos moles. O cirurgião geral realiza desde procedimentos simples — como a remoção de cistos e lipomas — até intervenções de maior complexidade, como colecistectomias (retirada da vesícula biliar) e correção de hérnias inguinais, umbilicais e incisionais. É frequentemente o primeiro especialista cirúrgico a ser consultado e, quando necessário, coordena o cuidado com outras subespecialidades.',
    when_see:
      'Consulte um cirurgião geral ao perceber abaulamento ou protuberância na região inguinal, umbilical ou em cicatriz cirúrgica prévia (sugestivo de hérnia), dor abdominal aguda ou recorrente, suspeita de pedras na vesícula (cólicas após refeições gordurosas), ou nódulos e caroços de causa desconhecida.',
    indications: 'Hérnias, pedras na vesícula, cistos e lipomas.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Levar exames de imagem (ultrassom/tomografia) recentes.',
      'Anotar cirurgias realizadas anteriormente.',
    ],
    postProcedure: 'Repouso relativo nos primeiros dias. Seguir as orientações de dieta e cuidados com o curativo.',
  },
  {
    id: 5,
    name: 'Cardiologia',
    description:
      'A Cardiologia é a especialidade médica dedicada à prevenção, ao diagnóstico e ao tratamento de doenças que acometem o coração e o sistema circulatório. O cardiologista cuida de condições que vão desde a hipertensão arterial e as arritmias até a insuficiência cardíaca e o infarto agudo do miocárdio. A especialidade utiliza recursos como eletrocardiograma, ecocardiograma, teste ergométrico, holter e cateterismo para avaliar a saúde cardiovascular com precisão. O acompanhamento cardiológico regular é essencial para quem possui histórico familiar de doenças do coração, diabetes ou hipertensão.',
    when_see:
      'Procure um cardiologista se sentir dor ou pressão no peito, falta de ar aos esforços ou em repouso, palpitações frequentes, tonturas, desmaios, inchaço nos tornozelos ou se tiver histórico familiar de infarto ou morte súbita. Check-ups preventivos são recomendados a partir dos 40 anos.',
    indications: 'Hipertensão, palpitações, dor no peito e check-ups preventivos.',
    averageConsultation: '30-50 minutos',
    preparations: [
      'Anotar medicamentos em uso e dosagens.',
      'Evitar cafeína em excesso 2h antes da consulta.',
    ],
    postProcedure:
      'Seguir rigorosamente a posologia de anti-hipertensivos. Em caso de exames com contraste, beber muita água.',
  },
  {
    id: 7,
    name: 'Cirurgia do Aparelho Digestivo',
    description:
      'A Cirurgia do Aparelho Digestivo é uma subespecialidade cirúrgica que se dedica ao tratamento de doenças dos órgãos do trato gastrointestinal, incluindo esôfago, estômago, intestino delgado, cólon, reto, fígado, vias biliares e pâncreas. O cirurgião digestivo realiza desde procedimentos para correção do refluxo gastroesofágico (fundoplicatura) até cirurgias complexas como hepatectomias e pancreatectomias. A cirurgia bariátrica e metabólica — indicada para obesidade grave e suas comorbidades — também faz parte do campo de atuação desta especialidade.',
    when_see:
      'Consulte este especialista se você tiver refluxo que não melhora com medicamentos, dor abdominal persistente, icterícia (pele amarelada), perda de peso inexplicada, suspeita de tumores digestivos ou se for candidato à cirurgia bariátrica.',
    indications: 'Doença do refluxo, tumores digestivos e cirurgia bariátrica.',
    averageConsultation: '30-45 minutos',
    preparations: [
      'Trazer resultados de endoscopia ou colonoscopia.',
      'Seguir jejum específico se houver exames laboratoriais conjuntos.',
    ],
    postProcedure:
      'Retorno gradual à alimentação sólida e acompanhamento rigoroso da cicatrização interna.',
  },
  {
    id: 8,
    name: 'Neurocirurgia',
    description:
      'A Neurocirurgia é a especialidade médica que trata, por meio de intervenções cirúrgicas, as doenças e lesões que afetam o sistema nervoso central (cérebro e medula espinhal) e o sistema nervoso periférico. Entre os procedimentos realizados estão a microcirurgia para retirada de tumores cerebrais, a cirurgia de coluna vertebral para tratamento de hérnias de disco e estenose do canal, o implante de derivações para hidrocefalia e o tratamento de aneurismas cerebrais. A especialidade exige alta precisão técnica e está em constante evolução com tecnologias como a neurocirurgia endoscópica e a estereotaxia.',
    when_see:
      'Busque uma avaliação neurocirúrgica se apresentar dores na coluna irradiadas para braços ou pernas (ciatalgia, braquialgia), fraqueza ou dormência progressiva em membros, diagnóstico de tumor cerebral ou medular, hidrocefalia, aneurisma intracraniano ou após traumatismos cranianos graves.',
    indications: 'Hérnias de disco, tumores cerebrais, traumas cranianos e compressões nervosas.',
    averageConsultation: '40-60 minutos',
    preparations: [
      'Levar Ressonância Magnética ou Tomografia (CD ou filme).',
      'Relatar perda de força ou sensibilidade em membros.',
    ],
    postProcedure:
      'Fisioterapia precoce costuma ser recomendada. Evitar movimentos bruscos de coluna ou pescoço.',
  },
  {
    id: 9,
    name: 'Psiquiatra',
    description:
      'A Psiquiatria é a especialidade médica dedicada à prevenção, ao diagnóstico e ao tratamento dos transtornos mentais, emocionais e comportamentais. O psiquiatra é o único profissional de saúde mental habilitado a prescrever medicamentos psicotrópicos, como antidepressivos, ansiolíticos e estabilizadores de humor. A especialidade abrange desde condições amplamente prevalentes — como depressão e ansiedade — até quadros mais complexos, como transtorno bipolar, esquizofrenia e transtorno obsessivo-compulsivo (TOC). O tratamento psiquiátrico frequentemente combina psicofarmacologia e psicoterapia para resultados mais efetivos.',
    when_see:
      'Procure um psiquiatra se sentir tristeza profunda ou vazio emocional persistente por mais de duas semanas, ansiedade que interfere na rotina, episódios de pânico, insônia grave, pensamentos intrusivos, alterações extremas de humor, comportamentos compulsivos ou qualquer sofrimento mental que afete sua qualidade de vida.',
    indications: 'Ansiedade, depressão, transtorno bipolar e distúrbios do sono.',
    averageConsultation: '45-60 minutos',
    preparations: [
      'Anotar histórico de medicações já utilizadas.',
      'Relatar histórico familiar de transtornos mentais.',
    ],
    postProcedure:
      'Não interromper medicações de forma abrupta. Manter psicoterapia aliada ao tratamento medicamentoso.',
  },
  {
    id: 10,
    name: 'Pneumologista',
    description:
      'A Pneumologia é a especialidade médica que se dedica ao estudo, diagnóstico e tratamento das doenças que afetam as vias aéreas inferiores, os pulmões e a pleura (membrana que envolve os pulmões). O pneumologista trata condições como asma, doença pulmonar obstrutiva crônica (DPOC), pneumonias de repetição, tuberculose, apneia obstrutiva do sono e doenças pulmonares intersticiais. A especialidade utiliza ferramentas diagnósticas como espirometria, broncoscopia, tomografia de tórax e polissonografia para avaliar a função respiratória com precisão.',
    when_see:
      'Consulte um pneumologista se tiver tosse persistente há mais de três semanas, falta de ar desproporcional ao esforço, chiados frequentes no peito, ronco intenso com pausas respiratórias durante o sono (apneia), expectoração com sangue ou histórico tabagístico relevante.',
    indications: 'Asma, bronquite, falta de ar, tosse crônica e apneia do sono.',
    averageConsultation: '30 minutos',
    preparations: [
      'Trazer Raio-X de tórax ou espirometrias anteriores.',
      'Evitar o uso de "bombinhas" 4h antes (se orientado pelo médico).',
    ],
    postProcedure: 'Uso contínuo de sprays inalatórios e evitar exposição a fumaça ou alérgenos.',
  },
  {
    id: 11,
    name: 'Cirurgia Vascular',
    description:
      'A Cirurgia Vascular é a especialidade médica dedicada ao diagnóstico e ao tratamento — cirúrgico ou minimamente invasivo — das doenças que afetam o sistema circulatório, com exceção do coração e do cérebro (que são tratados por cardiologia e neurocirurgia, respectivamente). O cirurgião vascular cuida das artérias, veias e vasos linfáticos, tratando condições como varizes com suas complicações, aneurismas da aorta, doença arterial obstrutiva periférica (que pode levar à amputação), trombose venosa profunda e linfedema. Os procedimentos variam entre cirurgias abertas tradicionais e técnicas endovasculares modernas, como stents e embolizações.',
    when_see:
      'Procure um cirurgião vascular se apresentar varizes volumosas com dor, peso nas pernas ou úlceras varicosas; dor nas panturrilhas ao caminhar (claudicação intermitente); pés ou mãos frios com alteração de cor; suspeita de trombose venosa profunda (dor e inchaço na perna) ou diagnóstico de aneurisma.',
    indications: 'Varizes, aneurismas, trombose e obstrução arterial.',
    averageConsultation: '30 minutos',
    preparations: [
      'Utilizar roupas de fácil remoção para exame das pernas.',
      'Trazer Doppler vascular recente, se houver.',
    ],
    postProcedure: 'Uso de meias de compressão e caminhadas leves conforme orientação.',
  },
  {
    id: 14,
    name: 'Onco Cabeça e Pescoço',
    description:
      'A Oncologia de Cabeça e Pescoço é a subespecialidade médica focada no diagnóstico e no tratamento — clínico, radioterápico e quimioterápico — dos tumores que surgem na região da face, boca, faringe, laringe, glândulas salivares e tireoide. O oncologista de cabeça e pescoço atua de forma integrada com cirurgiões, radioterapeutas e fonoaudiólogos para proporcionar tratamento abrangente, preservando ao máximo as funções vitais de falar, engolir e respirar. O diagnóstico precoce é determinante para o prognóstico nessas neoplasias.',
    when_see:
      'Busque avaliação especializada se perceber nódulo no pescoço que persiste por mais de três semanas, ferida na boca ou lábios sem cicatrização, rouquidão persistente sem causa aparente, dificuldade para engolir progressiva, sangramento oral sem trauma ou histórico de tabagismo e consumo de álcool associados a qualquer um desses sintomas.',
    indications: 'Nódulos na tireoide, feridas na boca que não cicatrizam e rouquidão crônica.',
    averageConsultation: '40 minutos',
    preparations: [
      'Levar biópsias anteriores e exames de imagem.',
      'Relatar histórico de tabagismo ou etilismo.',
    ],
    postProcedure: 'Monitoramento da deglutição e fala após procedimentos cirúrgicos.',
  },
  {
    id: 15,
    name: 'Cirurgia Cabeça e Pescoço',
    description:
      'A Cirurgia de Cabeça e Pescoço é a subespecialidade cirúrgica responsável pelo tratamento operatório de doenças benignas e malignas que afetam a face, fossas nasais, seios paranasais, cavidade oral, faringe, laringe, glândulas salivares, tireoide e paratireoide. O cirurgião de cabeça e pescoço realiza desde tireoidectomias (totais ou parciais) e parotidectomias até esvaziamentos cervicais para controle de metástases linfonodais e laringectomias. A especialidade exige domínio das estruturas anatômicas complexas dessa região e frequente atuação multidisciplinar com oncologia clínica e radioterapia.',
    when_see:
      'Procure este especialista se houver indicação cirúrgica de nódulo na tireoide com suspeita de malignidade, tumor benigno ou maligno em glândula salivar, linfadenopatia cervical persistente sem causa infecciosa identificada, lesões da laringe que comprometam a voz ou a respiração, ou após diagnóstico oncológico na região de cabeça e pescoço.',
    indications: 'Cirurgias de tireoide, paratireoide e glândulas salivares.',
    averageConsultation: '30-40 minutos',
    preparations: [
      'Trazer exames laboratoriais de função hormonal (TSH/T4).',
      'Informar sobre uso de medicamentos para coagulação.',
    ],
    postProcedure:
      'Cuidados com a cicatriz (evitar sol) e acompanhamento fonoterapêutico se necessário.',
  },
  {
    id: 16,
    name: 'Gastroentereologia',
    description:
      'A Gastroenterologia é a especialidade médica que estuda, diagnostica e trata as doenças do trato digestivo em toda a sua extensão — da boca ao ânus — incluindo esôfago, estômago, intestino delgado, cólon e reto, além dos órgãos anexos como fígado, vias biliares e pâncreas. O gastroenterologista dispõe de recursos diagnósticos e terapêuticos como endoscopia digestiva alta, colonoscopia, cápsula endoscópica, elastografia hepática e manometria esofágica. A especialidade abrange desde doenças funcionais, como a síndrome do intestino irritável, até condições inflamatórias crônicas (doença de Crohn, retocolite ulcerativa) e afecções hepáticas.',
    when_see:
      'Consulte um gastroenterologista se sentir azia ou refluxo que não melhora com antácidos comuns, dor abdominal recorrente, alteração persistente do hábito intestinal (diarreia ou constipação crônica), sangue nas fezes, distensão abdominal importante, náuseas frequentes ou perda de peso sem explicação.',
    indications: 'Refluxo, gastrite, dores abdominais e alterações no hábito intestinal.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Para exames como Endoscopia: Jejum absoluto de 8h.',
      'Evitar alimentos gordurosos 24h antes da consulta.',
    ],
    postProcedure: 'Dieta leve e evitar alimentos ácidos em casos de crises de gastrite.',
  },
  {
    id: 17,
    name: 'Cirurgia Plástica',
    description:
      'A Cirurgia Plástica é a especialidade médica que atua na reconstrução, na correção e na melhora estética de estruturas do corpo humano. Divide-se em duas grandes vertentes: a cirurgia plástica reparadora, que reconstrói estruturas afetadas por malformações congênitas, traumas, queimaduras ou sequelas de tratamentos oncológicos (como reconstrução mamária após mastectomia); e a cirurgia plástica estética, que realiza procedimentos como abdominoplastia, rinoplastia, mamoplastia de aumento ou redução e lipoaspiração com fins de harmonização corporal. O cirurgião plástico também atua no tratamento de cicatrizes e na microcirurgia reconstrutiva.',
    when_see:
      'Procure um cirurgião plástico para avaliação de procedimentos estéticos de seu interesse, sequelas funcionais ou estéticas de traumas e queimaduras, reconstrução pós-cirurgia oncológica (especialmente mamária), correção de malformações congênitas ou avaliação de cicatrizes hipertróficas e queloides.',
    indications: 'Procedimentos reparadores pós-trauma ou cirurgias estéticas (mamoplastia, lipoaspiração).',
    averageConsultation: '40-60 minutos',
    preparations: [
      'Realizar exames laboratoriais e risco cirúrgico.',
      'Suspender tabagismo e anticoagulantes 15 dias antes.',
    ],
    postProcedure: 'Uso de malhas compressivas e drenagem linfática conforme indicação.',
  },
  {
    id: 18,
    name: 'Clínico Geral',
    description:
      'O Clínico Geral — também chamado de Médico de Família ou Médico Internista — é o profissional com formação abrangente, preparado para diagnosticar, tratar e acompanhar doenças que afetam diferentes sistemas do organismo sem necessidade imediata de intervenção cirúrgica. Sua atuação é fundamental na atenção primária à saúde, realizando check-ups preventivos, interpretando exames laboratoriais, manejando doenças crônicas (hipertensão, diabetes, dislipidemia) e orientando o paciente sobre qual especialista procurar quando necessário. É muitas vezes o primeiro ponto de contato do paciente com o sistema de saúde.',
    when_see:
      'O clínico geral deve ser a primeira consulta quando há sintomas inespecíficos como mal-estar, febre prolongada, fadiga, perda de peso ou queixas que ainda não têm diagnóstico definido. Também é ideal para check-ups periódicos, renovação de prescrições de doenças crônicas e triagem para encaminhamento a especialistas.',
    indications: 'Check-up preventivo, mal-estar geral e triagem para outras especialidades.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Anotar todas as queixas e dúvidas.',
      'Levar lista de remédios tomados regularmente.',
    ],
    postProcedure: 'Seguir o plano terapêutico proposto ou realizar os exames de triagem solicitados.',
  },
  {
    id: 19,
    name: 'Hepatologia',
    description:
      'A Hepatologia é a subespecialidade da gastroenterologia dedicada ao estudo, prevenção e tratamento das doenças do fígado, das vias biliares e do pâncreas. O hepatologista cuida de condições como hepatites virais (A, B e C), cirrose hepática e suas complicações (ascite, encefalopatia hepática, varizes esofágicas), esteatose hepática não alcoólica (gordura no fígado), hepatite autoimune, colestase e nódulos hepáticos — incluindo o hepatocarcinoma. A especialidade está fortemente ligada ao acompanhamento de pacientes em lista de transplante de fígado.',
    when_see:
      'Procure um hepatologista se apresentar icterícia (amarelamento da pele e olhos), distensão abdominal por acúmulo de líquido (ascite), diagnóstico de hepatite viral, exames laboratoriais com enzimas hepáticas (TGO, TGP, GGT) persistentemente elevadas, gordura no fígado diagnosticada por imagem ou histórico de consumo abusivo de álcool.',
    indications: 'Hepatites, cirrose, gordura no fígado (esteatose) e nódulos hepáticos.',
    averageConsultation: '30 minutos',
    preparations: [
      'Abstinência de álcool por pelo menos 72h antes da consulta.',
      'Trazer exames de sangue recentes (TGO/TGP/GGT).',
    ],
    postProcedure:
      'Dieta balanceada com baixo teor de gordura e acompanhamento periódico da função hepática.',
  },
  {
    id: 20,
    name: 'Ginecologia',
    description:
      'A Ginecologia é a especialidade médica dedicada à saúde do sistema reprodutor feminino — incluindo útero, ovários, trompas e vagina — e das mamas, em todas as fases da vida da mulher. O ginecologista realiza consultas de rotina para rastreamento de câncer do colo uterino (Papanicolau), prescreve e acompanha métodos contraceptivos, trata infecções genitais, endometriose, miomas, cistos ovarianos e síndrome dos ovários policísticos (SOP). Também acompanha as mulheres na transição para a menopausa, manejando seus sintomas e prevenindo complicações a longo prazo como a osteoporose.',
    when_see:
      'Consulte um ginecologista anualmente para exames preventivos. Busque atendimento mais cedo se apresentar irregularidade menstrual intensa, dor pélvica crônica, corrimento com odor ou cor anormal, sangramento fora do período menstrual, dificuldade para engravidar ou sintomas de menopausa que afetem sua qualidade de vida.',
    indications: 'Prevenção (Papanicolau), controle de natalidade, menopausa e miomas.',
    averageConsultation: '20-40 minutos',
    preparations: [
      'Não estar no período menstrual para coleta de preventivo.',
      'Abstinência sexual de 48h antes de exames.',
    ],
    postProcedure: 'Monitorar ciclos menstruais e realizar autoexame de mamas mensalmente.',
  },
  {
    id: 21,
    name: 'Obstetrícia',
    description:
      'A Obstetrícia é a especialidade médica que cuida da saúde da mulher durante o ciclo gravídico-puerperal, ou seja, desde o planejamento familiar e a concepção, passando pela gestação e o parto, até o período pós-parto (puerpério). O obstetra monitora o desenvolvimento fetal com ultrassonografias e outros exames, rastreia complicações gestacionais como diabetes gestacional, pré-eclâmpsia e trabalho de parto prematuro, e conduz o parto de forma segura para a mãe e o bebê. A especialidade também inclui o acompanhamento de gestações de alto risco, neonatal e orientações sobre amamentação.',
    when_see:
      'Procure um obstetra assim que confirmar a gravidez, idealmente no primeiro trimestre, para iniciar o pré-natal. Também deve ser consultado no planejamento de uma gravidez, especialmente em casos de condições de saúde preexistentes. Em gestações em andamento, sinais como sangramento vaginal, contrações antes de 37 semanas, redução dos movimentos fetais ou inchaço súbito exigem avaliação imediata.',
    indications: 'Pré-natal, planejamento familiar e acompanhamento pós-parto.',
    averageConsultation: '30 minutos',
    preparations: [
      'Levar a caderneta da gestante e exames de ultrassom.',
      'Anotar dúvidas sobre o parto e amamentação.',
    ],
    postProcedure: 'Acompanhamento rigoroso no puerpério para saúde da mãe e do bebê.',
  },
  {
    id: 22,
    name: 'Oncologia Cirúrgica ',
    description:
      'A Oncologia Cirúrgica é a subespecialidade da cirurgia dedicada ao tratamento de tumores malignos por meio de intervenções operatórias com intenção curativa ou paliativa. O oncologista cirurgião realiza desde biópsias diagnósticas até ressecções amplas de tumores sólidos em diferentes órgãos, podendo incluir a retirada de linfonodos regionais (linfadenectomia). A especialidade atua de forma integrada com a oncologia clínica, a radioterapia e outras áreas para garantir tratamento multimodal e personalizado ao paciente oncológico. O estadiamento preciso do tumor é fundamental para o planejamento cirúrgico.',
    when_see:
      'Consulte um oncologista cirurgião após o diagnóstico histológico (biópsia confirmando malignidade) de um tumor sólido. Também pode ser indicado quando há suspeita clínica ou radiológica de neoplasia que necessite de confirmação por biópsia cirúrgica ou quando há necessidade de avaliação da ressecabilidade do tumor.',
    indications: 'Retirada de tumores sólidos em diversas partes do corpo.',
    averageConsultation: '40-60 minutos',
    preparations: [
      'Trazer laudo de biópsia (anatomopatológico).',
      'Levar estadiamento do tumor (exames de imagem).',
    ],
    postProcedure:
      'Monitoramento contínuo da recidiva e cuidados multidisciplinares (quimio/radio).',
  },
  {
    id: 23,
    name: 'Mastologia',
    description:
      'A Mastologia é a especialidade médica focada na prevenção, diagnóstico e tratamento de todas as doenças que afetam as mamas, tanto em mulheres quanto em homens. O mastologista avalia nódulos mamários, mastalgia (dor nas mamas), secreções mamilares e alterações detectadas em mamografias ou ultrassonografias. É o especialista responsável por indicar e acompanhar biópsias, cirurgias conservadoras (tumorectomia e quadrantectomia), mastectomias e reconstrução mamária em casos de câncer. O rastreamento regular do câncer de mama — a neoplasia mais frequente em mulheres — é o principal pilar desta especialidade.',
    when_see:
      'Busque um mastologista ao perceber nódulo ou espessamento novo na mama ou axila, alteração no contorno ou simetria das mamas, retração mamilar recente, secreção espontânea pelo mamilo (especialmente sanguinolenta), resultado alterado em mamografia ou ultrassom, ou histórico familiar de câncer de mama (especialmente em parentes de primeiro grau).',
    indications: 'Nódulos mamários, dor nas mamas, secreções e histórico familiar de câncer de mama.',
    averageConsultation: '30 minutos',
    preparations: [
      'Trazer Mamografia e Ultrassom de mamas recentes.',
      'Levar exames anteriores para comparação (importante).',
    ],
    postProcedure: 'Seguir o intervalo de rastreamento sugerido (anual ou semestral).',
  },
  {
    id: 24,
    name: 'Neurologia',
    description:
      'A Neurologia é a especialidade médica que diagnostica e trata as doenças do sistema nervoso central (cérebro e medula espinhal) e do sistema nervoso periférico (nervos e plexos nervosos), de forma não cirúrgica. O neurologista cuida de condições como cefaleia (enxaqueca e outras), epilepsia, acidente vascular cerebral (AVC) e suas sequelas, esclerose múltipla, doença de Parkinson, doença de Alzheimer, polineuropatias e doenças neuromusculares. Para diagnóstico, utiliza exames como eletroencefalograma (EEG), eletroneuromiografia (ENMG) e ressonância magnética de crânio e coluna.',
    when_see:
      'Procure um neurologista se apresentar dores de cabeça intensas ou diferentes das habituais, crises convulsivas, perda de memória progressiva, formigamento ou fraqueza em membros, alterações na fala ou na visão de surgimento súbito, tremores de repouso, desequilíbrio frequente ou diagnóstico de doença neurológica que necessite de acompanhamento.',
    indications: 'Dores de cabeça, epilepsia, perda de memória e doenças desmielinizantes.',
    averageConsultation: '40-50 minutos',
    preparations: [
      'Trazer histórico de crises ou episódios (anotar datas/horas).',
      'Levar Ressonância de crânio se disponível.',
    ],
    postProcedure: 'Uso contínuo de medicação neurológica sem interrupções súbitas.',
  },
  {
    id: 25,
    name: 'Angiologia',
    description:
      'A Angiologia é a especialidade médica clínica — sem atuação cirúrgica — que diagnostica e trata as doenças das artérias, veias e vasos linfáticos. O angiologista maneja condições como insuficiência venosa crônica, trombose venosa profunda, tromboembolismo pulmonar, doença arterial periférica, síndrome de Raynaud e linfedema. A especialidade está intimamente relacionada à Cirurgia Vascular, sendo frequente a atuação conjunta: o angiologista cuida do tratamento clínico e preventivo, enquanto o cirurgião vascular realiza as intervenções operatórias quando necessário.',
    when_see:
      'Consulte um angiologista se sentir inchaço persistente nas pernas, peso ou cansaço nas pernas ao final do dia, varizes visíveis com dor ou câimbras frequentes, alterações na cor e temperatura dos pés, suspeita de trombose (dor, calor e inchaço em um dos membros inferiores) ou se tiver fatores de risco para doenças vasculares como tabagismo, diabetes e sedentarismo.',
    indications: 'Má circulação, inchaço nas pernas, prevenção de trombose.',
    averageConsultation: '30 minutos',
    preparations: [
      'Ir com roupas leves.',
      'Evitar hidratantes nas pernas no dia da consulta se houver Doppler.',
    ],
    postProcedure: 'Prática de exercícios físicos aeróbicos para melhora do retorno venoso.',
  },
  {
    id: 26,
    name: 'Oftalmologia',
    description:
      'A Oftalmologia é a especialidade médica que cuida integralmente da saúde dos olhos e da visão — desde a prevenção e o diagnóstico até o tratamento clínico e cirúrgico das doenças oculares. O oftalmologista avalia a acuidade visual, prescreve óculos e lentes de contato, e trata condições como catarata, glaucoma, degeneração macular relacionada à idade (DMRI), retinopatia diabética, conjuntivites, uveítes e ceratocone. Os avanços da especialidade incluem cirurgias refrativas a laser (LASIK, PRK), cirurgia de catarata com facoemulsificação e injeções intravítreas para doenças da retina.',
    when_see:
      'Procure um oftalmologista se perceber borramento visual ou dificuldade para enxergar de longe ou de perto, visão dupla, flashes de luz ou moscas volantes (pontos ou filamentos no campo visual), vermelhidão ocular persistente, sensação de corpo estranho nos olhos, dor ocular ou queda súbita da visão — esta última é uma emergência.',
    indications: 'Visão embaçada, irritação ocular, catarata e glaucoma.',
    averageConsultation: '20-40 minutos',
    preparations: [
      'Se usa lentes de contato, removê-las antes da consulta.',
      'Ir com acompanhante, pois pode haver dilatação da pupila.',
    ],
    postProcedure: 'Evitar dirigir logo após a consulta se a pupila for dilatada.',
  },
  {
    id: 27,
    name: 'Dermatologia',
    description:
      'A Dermatologia é a especialidade médica que diagnostica e trata as doenças que afetam a pele, os cabelos, as unhas e as mucosas. É uma das especialidades de maior abrangência, cobrindo condições inflamatórias (psoríase, dermatite atópica, rosácea), infecciosas (micoses, herpes, impetigo), alérgicas (urticária, eczema de contato) e autoimunes (pênfigo, lúpus cutâneo). O dermatologista também atua na prevenção e tratamento do câncer de pele — o mais prevalente no Brasil — por meio de dermatoscopia e biópsia de lesões suspeitas, além de procedimentos estéticos como aplicação de toxina botulínica, preenchimentos e lasers.',
    when_see:
      'Consulte um dermatologista anualmente para avaliação de pintas e manchas na pele (mapeamento corporal). Busque atendimento mais cedo se notar pinta ou lesão que mudou de cor, forma ou tamanho (critérios ABCDE do melanoma), acne intensa que não melhora com tratamentos caseiros, queda de cabelo progressiva, manchas brancas ou hiperpigmentadas, lesões que sangram espontaneamente ou feridas que não cicatrizam.',
    indications: 'Acne, manchas, queda de cabelo, pintas suspeitas e dermatites.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Não usar maquiagem ou esmalte se a queixa for na face ou unhas.',
      'Levar produtos de skincare que utiliza atualmente.',
    ],
    postProcedure: 'Uso diário de protetor solar e hidratação conforme prescrição.',
  },
  {
    id: 28,
    name: 'Ortopedia Traumatologia ',
    description:
      'A Ortopedia e Traumatologia é a especialidade médica dedicada à prevenção, diagnóstico e tratamento das doenças e lesões do sistema musculoesquelético — que inclui ossos, articulações, ligamentos, tendões, músculos e cartilagens. O ortopedista e traumatologista trata fraturas e luxações, dores na coluna vertebral (hérnia de disco, escoliose, espondilose), doenças articulares degenerativas (artrose de joelho e quadril), lesões esportivas (ligamento cruzado, menisco) e deformidades ortopédicas. Nas intervenções cirúrgicas, realiza desde artroscopias minimamente invasivas até próteses de quadril e joelho.',
    when_see:
      'Procure um ortopedista se apresentar dor persistente em ossos, articulações ou coluna que não melhora com repouso, limitação de movimento articular, deformidade visível após trauma, dor que piora progressivamente com a atividade física, histórico de fratura, ou diagnóstico de artrose que esteja comprometendo suas atividades diárias.',
    indications: 'Fraturas, dores na coluna, lesões de joelho e tendinites.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Trazer Raio-X ou Ressonância da área afetada.',
      'Usar roupas que permitam movimentar o membro dolorido.',
    ],
    postProcedure: 'Fisioterapia e fortalecimento muscular costumam ser parte do tratamento.',
  },
  {
    id: 29,
    name: 'Otorrinolaringologia',
    description:
      'A Otorrinolaringologia (ORL) é a especialidade médica que trata as doenças dos ouvidos, do nariz, dos seios paranasais, da faringe (garganta), da laringe e das estruturas adjacentes do pescoço, como as glândulas salivares. O otorrinolaringologista realiza diagnóstico e tratamento clínico e cirúrgico de condições como rinite alérgica, sinusite, desvio de septo nasal, perda auditiva (hipoacusia), otite média, tontura de origem labiríntica (labirintite), ronco, apneia do sono, faringite e laringite crônicas. Também é o especialista responsável pela cirurgia de adenoide e amígdalas.',
    when_see:
      'Consulte um otorrinolaringologista se apresentar obstrução nasal persistente, rinite ou sinusite de difícil controle, tontura recorrente com ou sem zumbido nos ouvidos, perda auditiva progressiva, dor de ouvido frequente, ronco intenso ou apneia do sono, rouquidão por mais de 3 semanas sem causa infecciosa aparente, ou dificuldade para engolir.',
    indications: 'Rinite, sinusite, perda auditiva, ronco e tontura.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Não usar fones de ouvido 1h antes da consulta.',
      'Evitar lavagem nasal imediatamente antes se houver secreção para análise.',
    ],
    postProcedure: 'Evitar exposição a ar-condicionado muito frio e poluentes.',
  },
  {
    id: 30,
    name: 'Homeopatia',
    description:
      'A Homeopatia é um sistema terapêutico desenvolvido no século XVIII pelo médico alemão Samuel Hahnemann, baseado no princípio da similitude ("semelhante cura semelhante") e no uso de substâncias altamente diluídas para estimular a capacidade de autocura do organismo. O médico homeopata realiza uma anamnese profunda e individualizada, considerando não apenas os sintomas físicos, mas também o perfil emocional, comportamental e as características pessoais do paciente para escolher o medicamento homeopático mais adequado — chamado de "simillimum". A Homeopatia é reconhecida pelo Conselho Federal de Medicina como especialidade médica e pelo Ministério da Saúde como prática integrativa e complementar.',
    when_see:
      'A Homeopatia pode ser buscada como tratamento complementar para condições crônicas que não responderam adequadamente às terapias convencionais, como alergias, enxaquecas, distúrbios de ansiedade, problemas digestivos funcionais, distúrbios do sono, doenças dermatológicas e queixas recorrentes em crianças. Não substitui tratamentos de urgência ou doenças graves que exijam intervenção médica convencional.',
    indications: 'Tratamento complementar de alergias, estresse e doenças crônicas.',
    averageConsultation: '60 minutos',
    preparations: [
      'Relatar estado emocional e preferências alimentares.',
      'Trazer histórico médico detalhado desde a infância.',
    ],
    postProcedure: 'Observar reações do organismo e anotar mudanças de sintomas ou humor.',
  },
  {
    id: 31,
    name: 'Proctologia',
    description:
      'A Proctologia (ou Coloproctologia) é a especialidade médica cirúrgica que se dedica ao diagnóstico e ao tratamento das doenças do cólon (intestino grosso), do reto e do ânus. O proctologista realiza exames como anuscopia, retossigmoidoscopia e colonoscopia, além de procedimentos como ligadura elástica de hemorroidas, esfincterotomia para fissura anal e ressecções laparoscópicas de tumores colorretais. A especialidade também é responsável pelo rastreamento e prevenção do câncer colorretal — terceiro câncer mais frequente no mundo — por meio da colonoscopia.',
    when_see:
      'Procure um proctologista se apresentar sangramento retal (sangue nas fezes ou no papel higiênico), hemorroidas com dor ou prolapso, fissura anal (dor intensa durante e após a evacuação), sensação de evacuação incompleta persistente, alteração recente do hábito intestinal em pessoas acima de 50 anos, histórico familiar de câncer colorretal ou diagnóstico de pólipo intestinal.',
    indications: 'Hemorroidas, constipação severa, sangramentos e pólipos.',
    averageConsultation: '30 minutos',
    preparations: [
      'Pode ser necessário preparo intestinal (lavagem) se indicado previamente.',
      'Dieta leve no dia anterior.',
    ],
    postProcedure: 'Dieta rica em fibras e aumento da ingestão de água.',
  },
  {
    id: 33,
    name: 'Nefrologia',
    description:
      'A Nefrologia é a especialidade médica clínica dedicada ao diagnóstico e ao tratamento das doenças dos rins e do sistema urinário superior. O nefrologista acompanha pacientes com insuficiência renal aguda e crônica, glomerulonefrites, doenças policísticas, nefropatia diabética e hipertensiva. Em estágios avançados da doença renal crônica, o nefrologista planeja e acompanha as terapias de substituição renal: hemodiálise, diálise peritoneal e transplante renal. A especialidade é fundamental no manejo da hipertensão arterial de difícil controle, que frequentemente tem causa ou consequência renal.',
    when_see:
      'Consulte um nefrologista se apresentar alterações nos exames de função renal (creatinina, ureia, TFG estimada abaixo de 60), proteína ou sangue na urina sem causa urológica aparente, hipertensão arterial resistente ao tratamento, histórico de doença renal na família (como rins policísticos), diabetes ou hipertensão de longa data com comprometimento renal.',
    indications: 'Insuficiência renal, cálculo renal de repetição e pressão alta de difícil controle.',
    averageConsultation: '30-40 minutos',
    preparations: [
      'Levar exames de Creatinina e Ureia recentes.',
      'Anotar volume de ingestão de água diário.',
    ],
    postProcedure: 'Controle rigoroso de sal na dieta e monitoramento da pressão arterial.',
  },
  {
    id: 34,
    name: 'Cirurgia Oncológica',
    description:
      'A Cirurgia Oncológica é a subespecialidade cirúrgica voltada especificamente ao tratamento operatório de neoplasias malignas, buscando a retirada completa do tumor com margens livres (ressecção R0) para fins curativos, ou a redução do volume tumoral (citorredução) em casos paliativos. O cirurgião oncológico tem expertise em múltiplos sítios tumorais — incluindo gastrointestinal, ginecológico, de pele, partes moles e retroperitônio — e trabalha de forma integrada com oncologistas clínicos, radioterapeutas e especialistas em medicina paliativa para garantir a melhor abordagem ao paciente oncológico.',
    when_see:
      'A avaliação por um cirurgião oncológico é indicada após confirmação diagnóstica de câncer sólido, quando se investiga a possibilidade de ressecção cirúrgica com intenção curativa ou paliativa, para realização de biópsias cirúrgicas diagnósticas, ou quando há necessidade de planejamento de cirurgia de citorredução ou reconstrução pós-ressecção oncológica.',
    indications: 'Câncer gastrointestinal, ginecológico, de pele e partes moles.',
    averageConsultation: '40-60 minutos',
    preparations: [
      'Trazer todos os exames de imagem e patologia.',
      'Avaliação nutricional prévia costuma ser recomendada.',
    ],
    postProcedure: 'Acompanhamento oncológico periódico e fisioterapia motora.',
  },
  {
    id: 35,
    name: 'Infectologia',
    description:
      'A Infectologia é a especialidade médica que diagnostica e trata as doenças causadas por agentes infecciosos — vírus, bactérias, fungos, parasitas e príons. O infectologista atua no manejo de infecções complexas ou de difícil diagnóstico, doenças tropicais (dengue, malária, leishmaniose, febre amarela), infecções sexualmente transmissíveis (ISTs) como HIV/AIDS e sífilis, tuberculose, infecções hospitalares e condições que requerem uso de antibióticos especiais. A especialidade é também central na orientação de viajantes internacionais quanto a vacinas e profilaxias, e na gestão de surtos e epidemias.',
    when_see:
      'Procure um infectologista se apresentar febre prolongada sem diagnóstico definido (febre de origem obscura), suspeita ou diagnóstico de HIV, sífilis ou outras ISTs, infecções recorrentes que sugiram imunodeficiência, viagem recente a área endêmica com sintomas, tuberculose ou infecções que não respondem ao tratamento convencional.',
    indications: 'Infecções persistentes, HIV, sífilis, dengue e orientações de vacinação.',
    averageConsultation: '30-40 minutos',
    preparations: [
      'Levar caderneta de vacinação.',
      'Trazer hemogramas e sorologias anteriores.',
    ],
    postProcedure: 'Uso rigoroso de antibióticos ou antivirais nos horários corretos.',
  },
  {
    id: 36,
    name: 'Cirurgia Pediátrica',
    description:
      'A Cirurgia Pediátrica é a especialidade cirúrgica dedicada ao tratamento operatório de doenças congênitas e adquiridas em pacientes desde o período neonatal até a adolescência. O cirurgião pediátrico é treinado para lidar com a fisiologia e a anatomia específicas da criança em crescimento, realizando procedimentos como correção de malformações congênitas (atresias, gastrosquise), cirurgias de hérnia inguinal e umbilical, orquidopexia (testículo não descido), fimose, apêndice e traumas. A abordagem laparoscópica (minimamente invasiva) em crianças tem avançado significativamente na especialidade.',
    when_see:
      'Consulte um cirurgião pediátrico quando a criança apresentar abaulamento na virilha ou umbigo (suspeita de hérnia), testículo não palpável na bolsa escrotal, fimose com infecções urinárias de repetição ou dificuldade para urinar, dor abdominal aguda sem melhora (suspeita de apendicite), ou para avaliação de malformações diagnosticadas antes ou após o nascimento.',
    indications: 'Fimose, hérnias umbilicais, testículos não descidos e malformações congênitas.',
    averageConsultation: '30 minutos',
    preparations: [
      'Levar histórico de saúde da criança desde o nascimento.',
      'Explicar o procedimento à criança de forma lúdica.',
    ],
    postProcedure:
      'Cuidados intensos com higiene e repouso de atividades escolares conforme orientação.',
  },
  {
    id: 37,
    name: 'Endocrinologia',
    description:
      'A Endocrinologia é a especialidade médica que estuda e trata os distúrbios relacionados às glândulas endócrinas e aos hormônios que elas produzem — substâncias que regulam funções vitais como o metabolismo, o crescimento, a reprodução e o humor. O endocrinologista cuida de condições como diabetes mellitus (tipo 1 e tipo 2), doenças da tireoide (hipotireoidismo, hipertireoidismo, bócio e câncer de tireoide), obesidade e síndrome metabólica, distúrbios das glândulas suprarrenais (síndrome de Cushing, insuficiência adrenal), osteoporose e distúrbios de crescimento em crianças e adolescentes.',
    when_see:
      'Procure um endocrinologista se apresentar ganho ou perda de peso não intencional, fadiga intensa, intolerância ao calor ou ao frio, alterações nos exames de glicemia ou hormônios da tireoide, queda de cabelo difusa associada a outros sintomas, irregularidade menstrual ligada a distúrbios hormonais, ou diagnóstico de diabetes para acompanhamento especializado.',
    indications: 'Diabetes, obesidade, tireoide e distúrbios de crescimento.',
    averageConsultation: '30-40 minutos',
    preparations: [
      'Levar exames de glicemia e painel hormonal.',
      'Anotar histórico de peso dos últimos 12 meses.',
    ],
    postProcedure:
      'Monitoramento contínuo de taxas laboratoriais e ajuste de dose medicamentosa.',
  },
  {
    id: 38,
    name: 'Geriatra',
    description:
      'A Geriatria é a especialidade médica focada na saúde integral da pessoa idosa — geralmente a partir dos 65 anos —, visando não apenas tratar doenças, mas preservar a autonomia funcional, a qualidade de vida e a independência do paciente. O geriatra realiza avaliação geriátrica ampla, identificando síndromes geriátricas como quedas, sarcopenia, fragilidade, declínio cognitivo, incontinência urinária e polifarmácia (uso simultâneo de múltiplos medicamentos com risco de interações). A especialidade atua de forma multidisciplinar, integrando médicos, enfermeiros, fisioterapeutas, fonoaudiólogos, psicólogos e assistentes sociais.',
    when_see:
      'O acompanhamento geriátrico é indicado a partir dos 65 anos, especialmente quando há uso de mais de cinco medicamentos diferentes, episódios de quedas, perda de memória progressiva, dificuldade para realizar atividades cotidianas (banho, alimentação, locomoção), perda de peso involuntária ou quando a família percebe mudanças no comportamento e humor do idoso.',
    indications: 'Check-ups na terceira idade, prevenção de quedas e polifarmácia.',
    averageConsultation: '45-60 minutos',
    preparations: [
      'Levar TODAS as caixas de remédios em uso.',
      'Ir com acompanhante que conheça a rotina do paciente.',
    ],
    postProcedure: 'Adaptação do ambiente doméstico para evitar acidentes.',
  },
  {
    id: 39,
    name: 'Hematologia',
    description:
      'A Hematologia é a especialidade médica que diagnostica e trata as doenças que afetam o sangue e os órgãos responsáveis pela sua produção, como a medula óssea, o baço e os linfonodos. O hematologista cuida de condições como anemias de diferentes etiologias (ferropriva, megaloblástica, hemolítica, falciforme), distúrbios de coagulação (hemofilia, trombocitopenia), neoplasias hematológicas — incluindo leucemias, linfomas (Hodgkin e não Hodgkin) e mieloma múltiplo — e doenças mieloproliferativas. O transplante de medula óssea (TMO) é um dos procedimentos mais complexos dentro desta especialidade.',
    when_see:
      'Consulte um hematologista se apresentar anemia persistente sem resposta ao tratamento com ferro, sangramentos anormais ou excessivos (gengivas, nariz, menstruação volumosa), aparecimento espontâneo de hematomas sem trauma, linfonodos (ínguas) aumentados por mais de quatro semanas sem infecção, resultados alterados no hemograma sugestivos de neoplasia hematológica ou diagnóstico de doença falciforme.',
    indications: 'Anemias, leucemias, distúrbios de coagulação e linfomas.',
    averageConsultation: '40 minutos',
    preparations: [
      'Trazer Hemograma completo e Ferritina.',
      'Relatar sangramentos anormais ou manchas roxas espontâneas.',
    ],
    postProcedure: 'Pode envolver reposição de ferro ou acompanhamento quimioterápico.',
  },
  {
    id: 40,
    name: 'Rinoplastia',
    description:
      'A Rinoplastia é o procedimento cirúrgico — realizado pelo cirurgião plástico ou pelo otorrinolaringologista com formação em cirurgia facial — dedicado à correção estética e/ou funcional do nariz. Na dimensão estética, pode remodelar a ponta nasal, reduzir ou aumentar o dorso, corrigir assimetrias e harmonizar o nariz com as demais estruturas da face. Na dimensão funcional, pode corrigir desvios de septo que causam obstrução nasal. As técnicas variam entre rinoplastia aberta (com pequena incisão na columela) e fechada (incisões internas), podendo utilizar cartilagens do próprio paciente como enxerto.',
    when_see:
      'A consulta para rinoplastia é indicada para quem deseja alterar a forma do nariz por motivos estéticos (após os 18 anos, quando o crescimento facial está completo) ou para quem apresenta desvio de septo com obstrução nasal significativa que compromete a respiração e não respondeu ao tratamento clínico. Avaliação de saúde geral e estabilidade emocional são critérios importantes.',
    indications: 'Melhora da harmonia facial ou correção de desvio de septo associada.',
    averageConsultation: '45 minutos',
    preparations: [
      'Realizar Tomografia de seios da face.',
      'Suspender uso de aspirina e anti-inflamatórios 10 dias antes.',
    ],
    postProcedure:
      'Uso de curativo rígido por 7 dias. Dormir com a cabeça elevada e evitar óculos por 30 dias.',
  },
  {
    id: 41,
    name: 'Pediatria',
    description:
      'A Pediatria é a especialidade médica dedicada à saúde e ao desenvolvimento integral de crianças e adolescentes, desde o nascimento até os 18 anos (ou até os 21 anos em casos especiais). O pediatra acompanha o crescimento físico e o desenvolvimento neuropsicomotor da criança, realiza puericultura (consultas preventivas de rotina), aplica e monitora o calendário vacinal, diagnostica e trata doenças infecciosas, alérgicas e crônicas comuns na infância, e orienta os pais sobre alimentação, sono, desenvolvimento da linguagem e comportamento. A especialidade atua de forma intersetorial com educação e psicologia para garantir saúde plena.',
    when_see:
      'Consultas pediátricas de rotina devem começar logo após o nascimento e seguir o calendário de puericultura recomendado (com maior frequência nos primeiros dois anos). Além disso, busque o pediatra quando a criança apresentar febre persistente acima de 38°C, choro excessivo e inconsolável, recusa alimentar prolongada, dificuldade respiratória, erupções cutâneas de causa desconhecida, atraso no desenvolvimento esperado para a idade ou qualquer preocupação dos pais.',
    indications: 'Puericultura (acompanhamento de crescimento), febres e doenças infantis comuns.',
    averageConsultation: '30-45 minutos',
    preparations: [
      'Levar a caderneta de saúde da criança.',
      'Anotar dúvidas sobre alimentação e comportamento.',
    ],
    postProcedure: 'Seguir o calendário vacinal e as orientações nutricionais.',
  },
  {
    id: 42,
    name: 'Reumatologia',
    description:
      'A Reumatologia é a especialidade médica clínica que diagnostica e trata as doenças reumáticas — um amplo grupo de condições inflamatórias, autoimunes e degenerativas que afetam primariamente as articulações, os ossos, os músculos e os tecidos conjuntivos, podendo acometer também órgãos internos. O reumatologista cuida de doenças como artrite reumatoide, lúpus eritematoso sistêmico, espondilite anquilosante, síndrome de Sjögren, esclerose sistêmica, gota, fibromialgia e artrose. O tratamento frequentemente envolve medicamentos imunossupressores e biológicos, além de abordagem multidisciplinar com fisioterapia e terapia ocupacional.',
    when_see:
      'Consulte um reumatologista se apresentar dor, inchaço e rigidez em articulações — especialmente rigidez matinal com duração superior a 30 minutos —, dores musculares difusas e crônicas, diagnóstico ou suspeita de lúpus (manchas na face em "asa de borboleta", fotossensibilidade), episódios de gota, fenômeno de Raynaud (mãos que ficam brancas ou azuladas no frio) ou resultado positivo de anticorpos autoimunes em exames laboratoriais.',
    indications: 'Artrite reumatoide, lúpus, fibromialgia e artrose.',
    averageConsultation: '40-50 minutos',
    preparations: [
      'Levar exames de marcadores inflamatórios (PCR/VHS).',
      'Anotar as articulações que apresentam dor ou rigidez matinal.',
    ],
    postProcedure: 'Exercícios de baixo impacto e controle rigoroso de crises inflamatórias.',
  },
];