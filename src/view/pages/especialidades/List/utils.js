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
    description: 'Especialidade que trata do sistema urinário de ambos os sexos e do sistema reprodutor masculino.',
    indications: 'Cálculos renais, infecções urinárias, saúde da próstata e disfunções eréteis.',
    averageConsultation: '20-40 minutos',
    preparations: [
      'Trazer exames de urina ou imagem anteriores.',
      'Estar com a bexiga confortavelmente cheia se houver suspeita de infecção.'
    ],
    postProcedure: 'Em caso de biópsias ou pequenas cirurgias, evitar esforço físico por 48h e manter hidratação reforçada.'
  },
  {
    id: 4,
    name: 'Cirurgia Geral',
    description: 'Focada no diagnóstico e tratamento cirúrgico de doenças abdominais, da parede abdominal e de tecidos moles.',
    indications: 'Hérnias, pedras na vesícula, cistos e lipomas.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Levar exames de imagem (ultrassom/tomografia) recentes.',
      'Anotar cirurgias realizadas anteriormente.'
    ],
    postProcedure: 'Repouso relativo nos primeiros dias. Seguir as orientações de dieta e cuidados com o curativo.'
  },
  {
    id: 5,
    name: 'Cardiologia',
    description: 'Focada no diagnóstico e tratamento de doenças que acometem o coração e o sistema circulatório.',
    indications: 'Hipertensão, palpitações, dor no peito e check-ups preventivos.',
    averageConsultation: '30-50 minutos',
    preparations: [
      'Anotar medicamentos em uso e dosagens.',
      'Evitar cafeína em excesso 2h antes da consulta.'
    ],
    postProcedure: 'Seguir rigorosamente a posologia de anti-hipertensivos. Em caso de exames com contraste, beber muita água.'
  },
  {
    id: 7,
    name: 'Cirurgia do Aparelho Digestivo',
    description: 'Especialidade cirúrgica que trata doenças dos órgãos do trato digestório, como esôfago, estômago, fígado e pâncreas.',
    indications: 'Doença do refluxo, tumores digestivos e cirurgia bariátrica.',
    averageConsultation: '30-45 minutos',
    preparations: [
      'Trazer resultados de endoscopia ou colonoscopia.',
      'Seguir jejum específico se houver exames laboratoriais conjuntos.'
    ],
    postProcedure: 'Retorno gradual à alimentação sólida e acompanhamento rigoroso da cicatrização interna.'
  },
  {
    id: 8,
    name: 'Neurocirurgia',
    description: 'Dedicada ao tratamento cirúrgico de doenças do sistema nervoso central e periférico.',
    indications: 'Hérnias de disco, tumores cerebrais, traumas cranianos e compressões nervosas.',
    averageConsultation: '40-60 minutos',
    preparations: [
      'Levar Ressonância Magnética ou Tomografia (CD ou filme).',
      'Relatar perda de força ou sensibilidade em membros.'
    ],
    postProcedure: 'Fisioterapia precoce costuma ser recomendada. Evitar movimentos bruscos de coluna ou pescoço.'
  },
  {
    id: 9,
    name: 'Psiquiatra',
    description: 'Especialidade médica que lida com a prevenção, diagnóstico e tratamento de sofrimentos mentais e emocionais.',
    indications: 'Ansiedade, depressão, transtorno bipolar e distúrbios do sono.',
    averageConsultation: '45-60 minutos',
    preparations: [
      'Anotar histórico de medicações já utilizadas.',
      'Relatar histórico familiar de transtornos mentais.'
    ],
    postProcedure: 'Não interromper medicações de forma abrupta. Manter psicoterapia aliada ao tratamento medicamentoso.'
  },
  {
    id: 10,
    name: 'Pneumologista',
    description: 'Cuida das doenças das vias aéreas inferiores e pulmões.',
    indications: 'Asma, bronquite, falta de ar, tosse crônica e apneia do sono.',
    averageConsultation: '30 minutos',
    preparations: [
      'Trazer Raio-X de tórax ou espirometrias anteriores.',
      'Evitar o uso de "bombinhas" 4h antes (se orientado pelo médico).'
    ],
    postProcedure: 'Uso contínuo de sprays inalatórios e evitar exposição a fumaça ou alérgenos.'
  },
  {
    id: 11,
    name: 'Cirurgia Vascular',
    description: 'Trata cirurgicamente as doenças das artérias, veias e vasos linfáticos.',
    indications: 'Varizes, aneurismas, trombose e obstrução arterial.',
    averageConsultation: '30 minutos',
    preparations: [
      'Utilizar roupas de fácil remoção para exame das pernas.',
      'Trazer Doppler vascular recente, se houver.'
    ],
    postProcedure: 'Uso de meias de compressão e caminhadas leves conforme orientação.'
  },
  {
    id: 14,
    name: 'Onco Cabeça e Pescoço',
    description: 'Focada no diagnóstico e tratamento oncológico de tumores na região da face e pescoço.',
    indications: 'Nódulos na tireoide, feridas na boca que não cicatrizam e rouquidão crônica.',
    averageConsultation: '40 minutos',
    preparations: [
      'Levar biópsias anteriores e exames de imagem.',
      'Relatar histórico de tabagismo ou etilismo.'
    ],
    postProcedure: 'Monitoramento da deglutição e fala após procedimentos cirúrgicos.'
  },
  {
    id: 15,
    name: 'Cirurgia Cabeça e Pescoço',
    description: 'Tratamento cirúrgico de doenças benignas e malignas da região da face, fossas nasais, faringe e laringe.',
    indications: 'Cirurgias de tireoide, paratireoide e glândulas salivares.',
    averageConsultation: '30-40 minutos',
    preparations: [
      'Trazer exames laboratoriais de função hormonal (TSH/T4).',
      'Informar sobre uso de medicamentos para coagulação.'
    ],
    postProcedure: 'Cuidados com a cicatriz (evitar sol) e acompanhamento fonoterapêutico se necessário.'
  },
  {
    id: 16,
    name: 'Gastroentereologia',
    description: 'Cuida de todo o trato digestivo, incluindo esôfago, estômago, intestinos, fígado e pâncreas.',
    indications: 'Refluxo, gastrite, dores abdominais e alterações no hábito intestinal.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Para exames como Endoscopia: Jejum absoluto de 8h.',
      'Evitar alimentos gordurosos 24h antes da consulta.'
    ],
    postProcedure: 'Dieta leve e evitar alimentos ácidos em casos de crises de gastrite.'
  },
  {
    id: 17,
    name: 'Cirurgia Plástica',
    description: 'Atua na reconstrução ou alteração estética de estruturas do corpo humano.',
    indications: 'Procedimentos reparadores pós-trauma ou cirurgias estéticas (mamoplastia, lipoaspiração).',
    averageConsultation: '40-60 minutos',
    preparations: [
      'Realizar exames laboratoriais e risco cirúrgico.',
      'Suspender tabagismo e anticoagulantes 15 dias antes.'
    ],
    postProcedure: 'Uso de malhas compressivas e drenagem linfática conforme indicação.'
  },
  {
    id: 18,
    name: 'Clínico Geral',
    description: 'Médico com visão global, capacitado para diagnosticar e tratar doenças não cirúrgicas.',
    indications: 'Check-up preventivo, mal-estar geral e triagem para outras especialidades.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Anotar todas as queixas e dúvidas.',
      'Levar lista de remédios tomados regularmente.'
    ],
    postProcedure: 'Seguir o plano terapêutico proposto ou realizar os exames de triagem solicitados.'
  },
  {
    id: 19,
    name: 'Hepatologia',
    description: 'Especialidade que estuda, previne e trata as doenças do fígado, vias biliares e pâncreas.',
    indications: 'Hepatites, cirrose, gordura no fígado (esteatose) e nódulos hepáticos.',
    averageConsultation: '30 minutos',
    preparations: [
      'Abstinência de álcool por pelo menos 72h antes da consulta.',
      'Trazer exames de sangue recentes (TGO/TGP/GGT).'
    ],
    postProcedure: 'Dieta balanceada com baixo teor de gordura e acompanhamento periódico da função hepática.'
  },
  {
    id: 20,
    name: 'Ginecologia',
    description: 'Cuida da saúde do sistema reprodutor feminino e mamas em todas as fases da vida.',
    indications: 'Prevenção (Papanicolau), controle de natalidade, menopausa e miomas.',
    averageConsultation: '20-40 minutos',
    preparations: [
      'Não estar no período menstrual para coleta de preventivo.',
      'Abstinência sexual de 48h antes de exames.'
    ],
    postProcedure: 'Monitorar ciclos menstruais e realizar autoexame de mamas mensalmente.'
  },
  {
    id: 21,
    name: 'Obstetrícia',
    description: 'Especialidade que cuida da reprodução humana na mulher, acompanhando a gestação, parto e puerpério.',
    indications: 'Pré-natal, planejamento familiar e acompanhamento pós-parto.',
    averageConsultation: '30 minutos',
    preparations: [
      'Levar a caderneta da gestante e exames de ultrassom.',
      'Anotar dúvidas sobre o parto e amamentação.'
    ],
    postProcedure: 'Acompanhamento rigoroso no puerpério para saúde da mãe e do bebê.'
  },
  {
    id: 22,
    name: 'Oncologia Cirúrgica ',
    description: 'Especialidade cirúrgica focada no tratamento curativo ou paliativo de tumores malignos.',
    indications: 'Retirada de tumores sólidos em diversas partes do corpo.',
    averageConsultation: '40-60 minutos',
    preparations: [
      'Trazer laudo de biópsia (anatomopatológico).',
      'Levar estadiamento do tumor (exames de imagem).'
    ],
    postProcedure: 'Monitoramento contínuo da recidiva e cuidados multidisciplinares (quimio/radio).'
  },
  {
    id: 23,
    name: 'Mastologia',
    description: 'Especialidade que previne, diagnostica e trata as doenças das mamas.',
    indications: 'Nódulos mamários, dor nas mamas, secreções e histórico familiar de câncer de mama.',
    averageConsultation: '30 minutos',
    preparations: [
      'Trazer Mamografia e Ultrassom de mamas recentes.',
      'Levar exames anteriores para comparação (importante).'
    ],
    postProcedure: 'Seguir o intervalo de rastreamento sugerido (anual ou semestral).'
  },
  {
    id: 24,
    name: 'Neurologia',
    description: 'Trata de distúrbios que afetam o cérebro, a medula espinhal e os nervos.',
    indications: 'Dores de cabeça, epilepsia, perda de memória e doenças desmielinizantes.',
    averageConsultation: '40-50 minutos',
    preparations: [
      'Trazer histórico de crises ou episódios (anotar datas/horas).',
      'Levar Ressonância de crânio se disponível.'
    ],
    postProcedure: 'Uso contínuo de medicação neurológica sem interrupções súbitas.'
  },
  {
    id: 25,
    name: 'Angiologia',
    description: 'Tratamento clínico de doenças das artérias, veias e vasos linfáticos.',
    indications: 'Má circulação, inchaço nas pernas, prevenção de trombose.',
    averageConsultation: '30 minutos',
    preparations: [
      'Ir com roupas leves.',
      'Evitar hidratantes nas pernas no dia da consulta se houver Doppler.'
    ],
    postProcedure: 'Prática de exercícios físicos aeróbicos para melhora do retorno venoso.'
  },
  {
    id: 26,
    name: 'Oftalmologia',
    description: 'Cuida da saúde dos olhos e da visão.',
    indications: 'Visão embaçada, irritação ocular, catarata e glaucoma.',
    averageConsultation: '20-40 minutos',
    preparations: [
      'Se usa lentes de contato, removê-las antes da consulta.',
      'Ir com acompanhante, pois pode haver dilatação da pupila.'
    ],
    postProcedure: 'Evitar dirigir logo após a consulta se a pupila for dilatada.'
  },
  {
    id: 27,
    name: 'Dermatologia',
    description: 'Diagnóstico e tratamento de doenças da pele, cabelos e unhas.',
    indications: 'Acne, manchas, queda de cabelo, pintas suspeitas e dermatites.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Não usar maquiagem ou esmalte se a queixa for na face ou unhas.',
      'Levar produtos de skincare que utiliza atualmente.'
    ],
    postProcedure: 'Uso diário de protetor solar e hidratação conforme prescrição.'
  },
  {
    id: 28,
    name: 'Ortopedia Traumatologia ',
    description: 'Especialidade que cuida das doenças e traumas dos ossos, músculos e articulações.',
    indications: 'Fraturas, dores na coluna, lesões de joelho e tendinites.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Trazer Raio-X ou Ressonância da área afetada.',
      'Usar roupas que permitam movimentar o membro dolorido.'
    ],
    postProcedure: 'Fisioterapia e fortalecimento muscular costumam ser parte do tratamento.'
  },
  {
    id: 29,
    name: 'Otorrinolaringologia',
    description: 'Trata das doenças dos ouvidos, nariz, seios da face e garganta.',
    indications: 'Rinite, sinusite, perda auditiva, ronco e tontura.',
    averageConsultation: '20-30 minutos',
    preparations: [
      'Não usar fones de ouvido 1h antes da consulta.',
      'Evitar lavagem nasal imediatamente antes se houver secreção para análise.'
    ],
    postProcedure: 'Evitar exposição a ar-condicionado muito frio e poluentes.'
  },
  {
    id: 30,
    name: 'Homeopatia',
    description: 'Sistema terapêutico que utiliza substâncias diluídas para estimular a autocura do corpo.',
    indications: 'Tratamento complementar de alergias, estresse e doenças crônicas.',
    averageConsultation: '60 minutos',
    preparations: [
      'Relatar estado emocional e preferências alimentares.',
      'Trazer histórico médico detalhado desde a infância.'
    ],
    postProcedure: 'Observar reações do organismo e anotar mudanças de sintomas ou humor.'
  },
  {
    id: 31,
    name: 'Proctologia',
    description: 'Especialidade que trata doenças do reto, ânus e cólon.',
    indications: 'Hemorroidas, constipação severa, sangramentos e pólipos.',
    averageConsultation: '30 minutos',
    preparations: [
      'Pode ser necessário preparo intestinal (lavagem) se indicado previamente.',
      'Dieta leve no dia anterior.'
    ],
    postProcedure: 'Dieta rica em fibras e aumento da ingestão de água.'
  },
  {
    id: 33,
    name: 'Nefrologia',
    description: 'Focada no diagnóstico e tratamento clínico das doenças renais.',
    indications: 'Insuficiência renal, cálculo renal de repetição e pressão alta de difícil controle.',
    averageConsultation: '30-40 minutos',
    preparations: [
      'Levar exames de Creatinina e Ureia recentes.',
      'Anotar volume de ingestão de água diário.'
    ],
    postProcedure: 'Controle rigoroso de sal na dieta e monitoramento da pressão arterial.'
  },
  {
    id: 34,
    name: 'Cirurgia Oncológica',
    description: 'Tratamento cirúrgico de neoplasias malignas visando a retirada completa do tumor.',
    indications: 'Câncer gastrointestinal, ginecológico, de pele e partes moles.',
    averageConsultation: '40-60 minutos',
    preparations: [
      'Trazer todos os exames de imagem e patologia.',
      'Avaliação nutricional prévia costuma ser recomendada.'
    ],
    postProcedure: 'Acompanhamento oncológico periódico e fisioterapia motora.'
  },
  {
    id: 35,
    name: 'Infectologia',
    description: 'Trata de doenças causadas por vírus, bactérias, fungos e parasitas.',
    indications: 'Infecções persistentes, HIV, sífilis, dengue e orientações de vacinação.',
    averageConsultation: '30-40 minutos',
    preparations: [
      'Levar caderneta de vacinação.',
      'Trazer hemogramas e sorologias anteriores.'
    ],
    postProcedure: 'Uso rigoroso de antibióticos ou antivirais nos horários corretos.'
  },
  {
    id: 36,
    name: 'Cirurgia Pediátrica',
    description: 'Cirurgias realizadas em recém-nascidos, crianças e adolescentes.',
    indications: 'Fimose, hérnias umbilicais, testículos não descidos e malformações congênitas.',
    averageConsultation: '30 minutos',
    preparations: [
      'Levar histórico de saúde da criança desde o nascimento.',
      'Explicar o procedimento à criança de forma lúdica.'
    ],
    postProcedure: 'Cuidados intensos com higiene e repouso de atividades escolares conforme orientação.'
  },
  {
    id: 37,
    name: 'Endocrinologia',
    description: 'Trata de transtornos hormonais e metabólicos.',
    indications: 'Diabetes, obesidade, tireoide e distúrbios de crescimento.',
    averageConsultation: '30-40 minutos',
    preparations: [
      'Levar exames de glicemia e painel hormonal.',
      'Anotar histórico de peso dos últimos 12 meses.'
    ],
    postProcedure: 'Monitoramento contínuo de taxas laboratoriais e ajuste de dose medicamentosa.'
  },
  {
    id: 38,
    name: 'Geriatra',
    description: 'Focada na saúde do idoso, visando envelhecimento saudável e preservação da autonomia.',
    indications: 'Check-ups na terceira idade, prevenção de quedas e polifarmácia.',
    averageConsultation: '45-60 minutos',
    preparations: [
      'Levar TODAS as caixas de remédios em uso.',
      'Ir com acompanhante que conheça a rotina do paciente.'
    ],
    postProcedure: 'Adaptação do ambiente doméstico para evitar acidentes.'
  },
  {
    id: 39,
    name: 'Hematologia',
    description: 'Trata doenças do sangue e dos órgãos hematopoiéticos (medula, baço).',
    indications: 'Anemias, leucemias, distúrbios de coagulação e linfomas.',
    averageConsultation: '40 minutos',
    preparations: [
      'Trazer Hemograma completo e Ferritina.',
      'Relatar sangramentos anormais ou manchas roxas espontâneas.'
    ],
    postProcedure: 'Pode envolver reposição de ferro ou acompanhamento quimioterápico.'
  },
  {
    id: 40,
    name: 'Rinoplastia',
    description: 'Cirurgia plástica específica para correção estética ou funcional do nariz.',
    indications: 'Melhora da harmonia facial ou correção de desvio de septo associada.',
    averageConsultation: '45 minutos',
    preparations: [
      'Realizar Tomografia de seios da face.',
      'Suspender uso de aspirina e anti-inflamatórios 10 dias antes.'
    ],
    postProcedure: 'Uso de curativo rígido por 7 dias. Dormir com a cabeça elevada e evitar óculos por 30 dias.'
  },
  {
    id: 41,
    name: 'Pediatria',
    description: 'Assistência à criança e ao adolescente em seus diversos aspectos (preventivo e curativo).',
    indications: 'Puericultura (acompanhamento de crescimento), febres e doenças infantis comuns.',
    averageConsultation: '30-45 minutos',
    preparations: [
      'Levar a caderneta de saúde da criança.',
      'Anotar dúvidas sobre alimentação e comportamento.'
    ],
    postProcedure: 'Seguir o calendário vacinal e as orientações nutricionais.'
  },
  {
    id: 42,
    name: 'Reumatologia',
    description: 'Trata doenças inflamatórias e autoimunes das articulações e tecidos conjuntivos.',
    indications: 'Artrite reumatoide, lúpus, fibromialgia e artrose.',
    averageConsultation: '40-50 minutos',
    preparations: [
      'Levar exames de marcadores inflamatórios (PCR/VHS).',
      'Anotar as articulações que apresentam dor ou rigidez matinal.'
    ],
    postProcedure: 'Exercícios de baixo impacto e controle rigoroso de crises inflamatórias.'
  }
];