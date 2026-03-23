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