// ============================================
// GRUPO RAP - DATA LAYER
// All project data extracted from PDFs
// ============================================

export const brand = {
  name: "Grupo RAP",
  tagline: "Mais do que executar obras com excelência, assumimos a previsibilidade dos resultados.",
  description: "O Grupo RAP atua na gestão e execução de projetos complexos, integrando engenharia, implantação e operação em um único parceiro, com foco em previsibilidade de prazo, controle de custos e redução de risco para o investidor e operador.",
  founded: 2007,
  years: 18,
  phone: "(11) 3384-3439",
  whatsapp: "(11) 99388-1261",
  email: "contato@gruporap.com.br",
  website: "www.gruporap.com.br",
  instagram: "@grupo_rap_engenharia",
  address: "Rua Fiação da Saúde, 145 – Cj, 88 – Saúde – São Paulo | SP",
  stats: {
    apartments: 1500,
    sqMeters: 200000,
    works: 230,
    clients: 70,
  },
  values: [
    { title: "Agilidade", description: "Planejamento executivo e decisões rápidas" },
    { title: "Qualidade", description: "Controle técnico e conformidade normativa" },
    { title: "Transparência", description: "Visibilidade total de custos e cronograma" },
    { title: "Prazo", description: "Compromisso com datas operacionais e abertura do ativo" },
  ],
  services: [
    "Gerenciamento e Gestão de Obras",
    "Retrofit e Implantação",
    "Turn Key",
    "FF&E | OSE",
  ],
  companies: [
    { name: "RAP Engenharia", year: 2007, desc: "Gerenciamento de obras prediais, residenciais e comerciais" },
    { name: "RAP Hospitality", year: 2017, desc: "Implantação integrada com FF&E e OS&E" },
    { name: "WIND Incorporadora", year: 2019, desc: "Imóveis inovadores, sustentáveis e rentáveis" },
  ],
  timeline: [
    { year: 2007, title: "Nascia a RAP Engenharia", desc: "Criada pelo fundador Rodrigo Pique para gerenciamento de obras prediais, residenciais e comerciais." },
    { year: 2011, title: "Entrada de Sócio", desc: "Com a entrada do sócio Pedro Matayoshi, iniciaram obras comerciais e corporativas para grandes nomes do varejo." },
    { year: 2013, title: "Primeiro Contrato na Hotelaria", desc: "Primeiro contrato na hotelaria com conversão de bandeira, um dos primeiros projetos da Rede Adagio Accor no Brasil." },
    { year: 2017, title: "RAP Hospitality", desc: "Nasce a RAP Hospitality, trabalhando de forma integrada com a RAP Engenharia nas etapas de obra, FF&E e OS&E." },
    { year: 2019, title: "WIND Incorporadora", desc: "Nasce a WIND Incorporadora, idealizada para entregar imóveis inovadores, sustentáveis e rentáveis." },
    { year: 2025, title: "18 Anos", desc: "O Grupo completou 18 anos de história com equipe robusta, consolidando operações no Rio de Janeiro." },
  ],
  topClients: [
    "Fairmont", "Albert Einstein", "Atlantica Hotels", "Accor Hotels", "Setin", "Meliá Hotels",
    "Grupo Itavema", "Smart Fit", "Shark", "Dafra", "B&B Hotels", "Banco do Brasil", "CAOA",
    "CCP", "Chevrolet", "Decathlon", "Fiat", "GRU Airport", "Radisson", "Hyundai", "Land Rover",
    "Peugeot", "Renault", "Toyota", "Track & Field", "Pullman", "Volvo", "Banco Votorantim",
    "BRMalls", "XP", "Ibis", "Novotel", "Mercure", "Grand Mercure", "Nomah", "Jive", "Velocity"
  ],
};

// ============================================
// PROJECT 1: FAIRMONT COPACABANA - CLARABOIA
// ============================================
export const fairmont = {
  id: "fairmont",
  title: "Fairmont Copacabana",
  subtitle: "Claraboia",
  type: "Proposta Técnica e Comercial",
  date: "29 de janeiro de 2026",
  client: "Fairmont Copacabana",
  project: "Reforma Claraboia do Hotel Fairmont Copacabana",
  address: "Av. Atlântica, 4240 - Copacabana, Rio de Janeiro - RJ, 22070-002",
  totalPrice: 2946363.23,
  duration: 91,
  startDate: "18/02/2026",
  endDate: "24/06/2026",
  paymentTerms: "Sinal de 20% e saldo em medições mensais",
  mobilizationDays: 15,
  proposalValidity: 30,
  regime: "Empreitada Global",
  schedule: [
    { phase: "Claraboia (Total)", days: 91, start: "18/02/26", end: "24/06/26" },
    { phase: "Mobilização", days: 5, start: "18/02/26", end: "24/02/26" },
    { phase: "Isolamento", days: 5, start: "25/02/26", end: "03/03/26" },
    { phase: "Proteções", days: 5, start: "25/02/26", end: "03/03/26" },
    { phase: "Fase 1", days: 45, start: "04/03/26", end: "05/05/26", highlight: true },
    { phase: "Fase 2", days: 25, start: "04/05/26", end: "05/06/26", highlight: true },
    { phase: "Pinturas Gerais", days: 5, start: "04/06/26", end: "10/06/26" },
    { phase: "Desmontagem de Andaime", days: 5, start: "11/06/26", end: "17/06/26" },
    { phase: "Desmobilização e Limpeza Final", days: 5, start: "18/06/26", end: "24/06/26" },
  ],
  scope: [
    {
      category: "Serviços Preliminares",
      items: ["Emissão de ART", "Seguro de Obra (Riscos de Engenharia + Responsabilidade Civil)", "Carta Fiança", "Seguro Performance Bond", "Documentação PGR"]
    },
    {
      category: "Canteiro, Isolamentos e Proteções",
      items: ["Montagem de Canteiro de Obras", "Placas de sinalização interna e externa", "Revestimento cenográfico em lycra", "Proteção de piso", "Montagem e Desmontagem de Andaime Completo", "Banheiros químicos", "Isolamento em divisória naval"]
    },
    {
      category: "Mobilização e Limpeza",
      items: ["Mobilização de equipe e equipamentos", "Transporte de equipe", "Alimentação de equipe", "Hospedagem de equipe", "Limpeza constante da obra"]
    },
    {
      category: "Demolições e Remoções",
      items: ["Demolição de estruturas da claraboia horizontal", "Demolição da claraboia horizontal", "Demolição dos fechamentos verticais em vidro"]
    },
    {
      category: "Civil",
      items: ["Furos em vigas de concreto para passagem de estrutura metálica", "Escarificação de pilares para fixação", "Abertura e fechamento de forro do 4º e 3º Pavimento", "Apoio elétrico para remoção e reinstalação de luminárias"]
    },
    {
      category: "Estrutura Metálica e Painel Wall",
      items: ["Fornecimento e Instalação de estrutura metálica para reforço e instalação de laje em painel wall", "Fornecimento e Instalação de laje em painel wall e execução de contrapiso"]
    },
    {
      category: "Serviços Finais e Desmobilização",
      items: ["Pintura de áreas afetadas", "Limpeza Final", "As Built"]
    },
  ],
  team: [
    { role: "Engenheiro Responsável", hours: 176, people: 1 },
    { role: "Encarregado / Mestre de Obras", hours: 176, people: 1 },
    { role: "Técnico de Segurança do Trabalho", hours: 176, people: 1 },
    { role: "Equipe Estrutura Metálica", hours: 1408, people: 8 },
    { role: "Equipe Civil", hours: 704, people: 4 },
    { role: "Equipe Limpeza / Apoio", hours: 352, people: 2 },
  ],
  orgChart: {
    top: "Gestor de Obra (Full time)",
    left: ["Diretor (Part time)", "Coordenador de Obra (Part time)", "Equipe Financeiro", "Equipe de RH", "Equipe de Suprimentos"],
    topLeft: "Eng. de Planejamento e Orçamento (Part time)",
    right: ["Mestre de Obras (Full time)", "Técnico de Segurança (Part Time)", "Administrativo de Obras (Full Time)"],
    teams: ["Eq. Demolição e Desmontagem", "Eq. Estrutura Metálica", "Eq. Civil", "Eq. Forro", "Eq. Pintura", "Eq. Instalações Elétricas", "Eq. Limpeza Permanente", "Eq. Limpeza Final"],
  },
};

// ============================================
// PROJECT 2: SMART FIT VAZ LOBO - SEMANA 19
// ============================================
export const smartfit = {
  id: "smartfit",
  title: "Smart Fit",
  subtitle: "Vaz Lobo",
  type: "Relatório Semanal - Semana 19",
  period: "31/01/2026 a 05/02/2026",
  responsible: {
    name: "Bárbara Valente Dias",
    role: "Arquiteta",
    phone: "21 99532.7306",
    email: "barbara.dias@gruporap.com.br",
  },
  startDate: "15/09/2025",
  endDate: "Aguardando confirmação",
  completion: 35,
  activitiesRealized: [
    "Execução de estrutura metálica – Escada",
    "Execução de estrutura metálica – Plataforma técnica",
    "Retirada de tubulação de spk para passagem de viga metálica – Plataforma técnica",
    "Preparo de teto para pintura",
    "Execução de emboço em paredes perimetrais",
    "Aplicação de impermeabilizante polimérico com tela de poliéster em área de bebedouro – Térreo",
    "Remontagem de infra de elétrica sob o mezanino",
    "Retirada de entulho",
    "Limpeza e organização de obra",
  ],
  structuralNotes: [
    "A execução do reforço de mezanino e escada foram finalizados e entregues. Aguardando avaliação do projetista para verificação, emissão de laudo e liberação de área de trabalho.",
    "Ainda aguardando orientação sobre profundidade da plataforma. Foi adquirido um elevador para o local. Solicitação de 0,80 cm de profundidade.",
  ],
  observations: [
    "Execução do reforço do mezanino e escada entregues. Aguardando projetista para vistoria e liberação (6 dias sem atividades no mezanino).",
    "Guarda corpo, corrimão de escada e estrutura da plataforma elevatória pendentes de contratação.",
    "Equipe de ar condicionado, porta de enrolar e plataforma elevatória sem data para início.",
    "Pendente análise de adicionais: emboço, revestimento de pilares em drywall, linhas de spk, contenção e drenagem de infiltração.",
    "Pendente definições de restrições de dias e horários pelo condomínio.",
  ],
  scheduleHighlights: [
    { task: "Mobilização e organização de canteiro", progress: 100 },
    { task: "Retirada de instalações existentes", progress: 100 },
    { task: "Hidráulica provisória", progress: 100 },
    { task: "Elétrica provisória", progress: 100 },
    { task: "Segurança patrimonial", progress: 100 },
    { task: "Mezanino (geral)", progress: 21 },
    { task: "Execução de estrutura metálica", progress: 70 },
    { task: "Concretagem", progress: 100 },
    { task: "Execução de escada metálica", progress: 100 },
    { task: "Guarda corpo e corrimão escada", progress: 0 },
    { task: "Instalações elétricas (infra/cabeamento)", progress: 25 },
    { task: "AC - Distribuição de dutos", progress: 0 },
    { task: "Construção de bancos e base alvenaria", progress: 0 },
    { task: "Chapisco/emboço e massa única", progress: 100 },
    { task: "Impermeabilização de pisos e paredes", progress: 0 },
    { task: "Teste de estanqueidade", progress: 0 },
    { task: "Proteção mecânica + regularização piso", progress: 0 },
    { task: "Execução de linhas de hidrantes", progress: 100 },
    { task: "Térreo (geral)", progress: 30 },
    { task: "Demolição de Alvenarias e forro", progress: 100 },
    { task: "Demolição de revestimentos de piso", progress: 100 },
    { task: "Remoção de entulho", progress: 100 },
    { task: "Regularização de piso", progress: 98 },
    { task: "Plataforma Técnica", progress: 20 },
  ],
};

// ============================================
// PROJECT 3: INNSIDE IGUATEMI - SEMANA 7
// ============================================
export const innside = {
  id: "innside",
  title: "Innside Iguatemi",
  subtitle: "by Meliá",
  type: "Relatório Semanal - Semana 7",
  period: "19 a 23 de Janeiro de 2026",
  responsible: {
    name: "Marcos Paulo",
    role: "Gestor de Obras",
    phone: "11 94537.8571",
    email: "marcos.paulo@rapengenharia.com.br",
  },
  hotel: "Hotel Meliá Innside Iguatemi",
  location: "Rua Iguatemi, Pinheiros – São Paulo, SP",
  phase: "Fase 2",
  startDate: "15/12/2025",
  endDate: "16/03/2026",
  projectStart: "08/12/2025",
  week: 24,
  totalDays: 98,
  units: "20 UH's + 2 Corredores",
  floors: "15° e 16° Pavimento",
  apartments: {
    floor15: [1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510],
    floor16: [1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610],
  },
  completionExpected: 37,
  completionActual: 45,
  activitiesRealized: [
    "Instalação de revestimento 16° – Piso dos banheiros",
    "Instalação de revestimento 16° – Parede dos banheiros",
    "Emassamento e pintura dos corredores e apartamentos do 16°",
    "Instalação de granito dos elevadores do 16°",
    "Realocação de pontos de elétrica, iluminação e enfiação do 15°",
    "Teste de estanqueidade do 15°",
  ],
  activitiesPlanned: [
    "Recebimento de marcenaria",
    "Instalação de revestimentos 15°",
    "Instalação de portal de granito no 15°",
    "Instalação de piso vinílico",
    "Pintura do corredor e apartamentos do 16°",
    "Emassamento dos apartamentos e corredores do 15°",
  ],
  observations: [
    "Instalação de piso vinílico reagendado para o dia 26/01",
  ],
  corridor16: [
    { task: "Demolição", progress: 100, start: "15-dez", days: 7, end: "22-dez" },
    { task: "Retirada das portas de entrada", progress: 0, start: "15-dez", days: 15, end: "30-dez", note: "será feito pela equipe de marcenaria" },
    { task: "Readequação de instalações elétricas", progress: 100, start: "2-jan", days: 13, end: "15-jan" },
    { task: "Requadração de portas de elevadores", progress: 100, start: "5-jan", days: 3, end: "8-jan" },
    { task: "Recomposição de forro", progress: 100, start: "16-jan", days: 7, end: "23-jan" },
    { task: "Recomposição de paredes em drywall", progress: 100, start: "16-jan", days: 7, end: "23-jan" },
    { task: "Instalação granito elevadores", progress: 100, start: "15-dez", days: 5, end: "20-dez" },
    { task: "Emassamento e lixamento", progress: 40, start: "23-jan", days: 3, end: "26-jan" },
    { task: "Pintura de paredes e forros", progress: 10, start: "26-jan", days: 3, end: "29-jan" },
    { task: "Instalação de luminárias", progress: 0, start: "30-jan", days: 7, end: "6-fev" },
    { task: "Medição rodameio/guarnição shafts", progress: 100, start: "12-fev", days: 5, end: "17-fev" },
    { task: "Medição rodapé", progress: 100, start: "12-fev", days: 5, end: "17-fev" },
    { task: "Instalação fórmica dos batentes", progress: 0, start: "12-fev", days: 5, end: "17-fev" },
    { task: "Instalação das portas com fórmica", progress: 0, start: "12-fev", days: 5, end: "17-fev" },
    { task: "Instalação do papel de parede", progress: 0, start: "6-fev", days: 3, end: "9-fev" },
    { task: "Instalação de carpete piso", progress: 0, start: "23-fev", days: 2, end: "25-fev" },
    { task: "Limpeza", progress: 0, start: "2-mar", days: 4, end: "6-mar" },
    { task: "Retoques e entrega", progress: 0, start: "11-mar", days: 3, end: "14-mar" },
  ],
  uh16: [
    { task: "Desmontagem e remoção de marcenaria", progress: 100, days: 4 },
    { task: "Descida de mobiliários", progress: 100, days: 5 },
    { task: "Remoção de revestimentos do piso", progress: 100, days: 4 },
    { task: "Remoção de cerâmica piso e parede", progress: 100, days: 15 },
    { task: "Abertura e requadro de nichos", progress: 100, days: 12, note: "Alteração de projeto causou maior prazo" },
    { task: "Instalação de monocomando", progress: 100, days: 5 },
    { task: "Infraestrutura/realocação elétrica", progress: 100, days: 14 },
    { task: "Infraestrutura/realocação luminária", progress: 100, days: 14 },
    { task: "Enfiação elétrica", progress: 100, days: 14 },
    { task: "Adequação pontos hidráulicos", progress: 100, days: 7 },
    { task: "Isolamento ar condicionado", progress: 100, days: 5 },
    { task: "Recomposição do contrapiso", progress: 100, days: 7 },
    { task: "Recomposição paredes e forro de gesso", progress: 100, days: 15 },
    { task: "Impermeabilização", progress: 100, days: 10 },
    { task: "Instalação porcelanato no piso", progress: 95, days: 14 },
    { task: "Instalação porcelanato nas paredes", progress: 100, days: 14 },
    { task: "Instalação de tetos e baguetes", progress: 0, days: 10 },
    { task: "Reinstalação de porta e guarnições", progress: 0, days: 3 },
    { task: "Tratamento de portas", progress: 0, days: 15 },
    { task: "Pintura de paredes, forros e portas", progress: 30, days: 18 },
    { task: "Instalação de bancadas", progress: 0, days: 2 },
    { task: "Instalação de nicho", progress: 0, days: 5 },
    { task: "Instalação marcenaria", progress: 0, days: 15 },
    { task: "Instalação piso vinílico", progress: 0, days: 3 },
    { task: "Instalação rodapé", progress: 0, days: 3 },
    { task: "Instalação luminárias/LED/marcenaria", progress: 0, days: 10 },
    { task: "Rejuntamento", progress: 0, days: 15 },
    { task: "Acabamentos elétricos", progress: 0, days: 8 },
    { task: "Instalação de metais", progress: 0, days: 7 },
    { task: "Instalação de louças", progress: 0, days: 7 },
    { task: "Instalação de acessórios", progress: 0, days: 7 },
    { task: "Instalação de box", progress: 0, days: 3 },
    { task: "Pintura retoque final", progress: 0, days: 5 },
    { task: "Limpeza", progress: 0, days: 7 },
    { task: "Mobiliário solto + cortinas", progress: 0, days: 4 },
    { task: "Retoques finais e entrega", progress: 0, days: 6 },
  ],
};

// ============================================
// PROJECT 4: RIO AFRICA - PRÉ CONSTRUÇÃO
// ============================================
export const rioafrica = {
  id: "rioafrica",
  title: "Centro Cultural Rio África",
  subtitle: "Pré Construção",
  type: "Proposta Técnica",
  date: "2026",
  client: "Centro Cultural Rio África",
  project: "Centro Cultural Rio África",

  // ── Proposta Comercial Obra (META) ──
  custoObra: {
    despesasIndiretas: 8000000,
    contratacaoPMG: 51640000,
    taxaAdministracao: 5600000,
    taxaAdministracaoPercent: 8,
    imposto: 4760000,
    impostoPercent: 7,
    total: 70000000,
    nota: "Reajuste anual conforme INCC",
  },

  // ── Prazos de Obra ──
  prazo: {
    mobilizacao: 30,
    execucao: "19 meses",
    checklistComissionamento: "1 mês",
  },

  // ── Organograma Obra ──
  orgObra: {
    administrativo: [
      { area: "Administrativo", nome: "Guilherme Vieira e Equipe" },
      { area: "RH", nome: "Mariana Bianchi e Equipe" },
      { area: "Suprimentos", nome: "Rodrigo Lima e Equipe" },
      { area: "Planejamento", nome: "Larissa Gomes e Equipe" },
      { area: "Financeiro", nome: "Rafaela Alcântara e Equipe" },
    ],
    tecnico: [
      { role: "Gerente", nome: "Mariana Migotto" },
      { role: "Engenheiro Coordenador", nome: "Guilherme Vicente" },
      { role: "Engenheiro de Obra", nome: "Barbara Dias" },
      { role: "Engenheiro de Planejamento", nome: "Jonathan Silva" },
      { role: "Engenheiro de Instalações", nome: "Fábio Fernandes" },
      { role: "Auxiliar de Engenharia", nome: "Lucas de Souza" },
    ],
    operacao: [
      { role: "Mestre de Obras", nome: "Ariovaldo Alcântara" },
      { role: "Encarregados para cada disciplina", nome: "A contratar" },
      { role: "Técnico de Segurança", nome: "Viviane Oliveira" },
      { role: "Administrativo de Obra", nome: "Camila Rodriguez" },
      { role: "Almoxarife", nome: "Mauricio de Santana" },
      { role: "Segurança Patrimonial", nome: "A contratar" },
      { role: "Financeiro", nome: "Mariana Souza" },
    ],
  },

  // ── Pré Construção ──
  preConstrucao: {
    introducao:
      "O presente documento tem por objetivo apresentar proposta para a execução dos serviços de pré-construção, com foco na otimização e redução de custos do empreendimento. Para isso, serão realizadas análises críticas dos projetos, compatibilização técnica e proposição de ajustes e soluções construtivas que promovam maior eficiência, redução de prazo, racionalização de recursos e mitigação de riscos, estabelecendo bases sólidas para a futura execução da obra.",
    planoAtaque: [
      {
        etapa: "Análise da Curva ABC",
        descricao:
          "Realização da análise da Curva ABC com base no orçamento do empreendimento, visando identificar os itens de maior impacto financeiro e priorizar ações de otimização de custos.",
      },
      {
        etapa: "Identificação dos Itens da Curva A e B",
        descricao:
          "Mapeamento detalhado dos insumos e serviços classificados na Curva A e B, com foco nos elementos de maior representatividade econômica para direcionamento das estratégias de redução de custos.",
      },
      {
        etapa: "Reunião com Fornecedores e Projetistas",
        descricao:
          "Condução de reuniões técnicas com fornecedores e projetistas para avaliação de alternativas, revisões de especificações e proposição de soluções mais eficientes sob o ponto de vista técnico e econômico.",
      },
      {
        etapa: "Elaboração de Projetos",
        descricao:
          "Desenvolvimento ou revisão dos projetos a partir das alternativas técnicas definidas nas reuniões com fornecedores e projetistas, incorporando ajustes de especificações, materiais e soluções construtivas.",
      },
      {
        etapa: "Devolução das Propostas com Alternativas",
        descricao:
          "Apresentação das propostas revisadas, contemplando as alternativas identificadas, com comparativos técnicos e financeiros para suporte à tomada de decisão.",
      },
      {
        etapa: "Negociações Finais",
        descricao:
          "Realização das negociações finais com fornecedores, buscando a consolidação das melhores condições comerciais, prazos e escopo.",
      },
      {
        etapa: "Valor Final",
        descricao:
          "Consolidação do valor final do empreendimento, considerando as otimizações implementadas e as condições negociadas, garantindo maior previsibilidade e controle orçamentário.",
      },
    ],
  },

  // ── Curva A ──
  curvaA: [
    {
      categoria: "Estrutura de Concreto / Cobertura",
      percentual: 13,
      itens: [
        "Lajes bubble e steel deck",
        "Parede de concreto",
        "Vigas, lajes e pilares em concreto moldado in loco",
        "Cobertura em madeira",
      ],
    },
    {
      categoria: "Instalações",
      percentual: 19,
      itens: ["Hidráulicas", "Elétricas", "Combate a incêndio", "Climatização"],
    },
    {
      categoria: "Revestimentos",
      percentual: 9,
      itens: ["Forros decorativos e acústicos", "Revestimentos decorativos"],
    },
  ],

  // ── Custo dos Projetos ──
  custoProjetos: [
    { disciplina: "Fundações", valor: 59500 },
    { disciplina: "Sistemas de Contenção", valor: 43200 },
    { disciplina: "Estrutura em Concreto Armado", valor: 175000 },
    { disciplina: "Estruturas Auxiliares", valor: 80000 },
    { disciplina: "Instalações Elétricas", valor: 188000 },
    { disciplina: "Instalações Hidráulicas e Esgotos", valor: 83200 },
    { disciplina: "Combate a Incêndio", valor: 79500 },
    { disciplina: "Controle de Acesso, CFTV e Alarme Perimetral", valor: 35000 },
    { disciplina: "Climatização (Ar Condicionado e Exaustão)", valor: 49500 },
    { disciplina: "Terraplanagem", valor: 32800 },
    { disciplina: "Estrutura Metálica", valor: 293000 },
    { disciplina: "Acústica", valor: 133500 },
    { disciplina: "Impermeabilização", valor: 55000 },
  ],
  custoProjetosNota: "Arquitetura à cargo do cliente",

  // ── Organograma Pré Construção ──
  orgPreConstrucao: [
    { role: "Diretoria", nome: "Rodrigo Pique" },
    { role: "Gerente", nome: "Mariana Migotto" },
    { role: "Engenheiro de Obras", nome: "" },
    { role: "Engenheira de Orçamento", nome: "Larissa Gomes" },
    { role: "Auxiliar de Engenharia", nome: "Matheus Afonso" },
    { role: "Supervisor de Compras", nome: "Rodrigo Lima" },
    { role: "Analista de Compras", nome: "Rafael Braz" },
  ],

  // ── Obras Executadas ──
  obrasExecutadas: [
    {
      nome: "Casa Livramento",
      local: "Gamboa, RJ",
      valor: 2800000,
      area: "500 m²",
      cliente: "Autonomy/Voile",
      prazo: "4 meses",
      escopo: "Restauro de fachada preservada e revitalização interna",
      imagens: ["/images/rioafrica/page25_img1.jpeg", "/images/rioafrica/page25_img2.jpeg"],
    },
    {
      nome: "Smart Fit",
      local: "Vila Buarque, SP",
      valor: 3500000,
      area: "1200 m²",
      cliente: "Smart Fit",
      prazo: "4 meses",
      escopo: "Construção de nova unidade",
      imagens: ["/images/rioafrica/page26_img1.jpeg", "/images/rioafrica/page26_img2.jpeg", "/images/rioafrica/page26_img3.jpeg", "/images/rioafrica/page26_img4.jpeg"],
    },
    {
      nome: "Transamerica",
      local: "Alameda Santos, SP",
      valor: 11500000,
      area: "1750 m²",
      cliente: "Atlantica",
      prazo: "8 meses",
      escopo: "Retrofit de áreas comuns do hotel (restaurante, lobby, área administrativa e salas de eventos)",
      imagens: ["/images/rioafrica/page27_img1.jpeg", "/images/rioafrica/page27_img2.jpeg", "/images/rioafrica/page27_img3.jpeg", "/images/rioafrica/page27_img4.jpeg"],
    },
    {
      nome: "Cyan",
      local: "Itupeva, SP",
      valor: 26000000,
      area: "4.000 m²",
      cliente: "Atlântica",
      prazo: "16 meses",
      escopo: "Construção de áreas sociais e backoffice, retrofit de áreas comuns e apartamentos e implantação completa",
      imagens: ["/images/rioafrica/page28_img1.jpeg", "/images/rioafrica/page28_img2.jpeg", "/images/rioafrica/page28_img3.jpeg", "/images/rioafrica/page28_img4.jpeg"],
    },
    {
      nome: "Pullman Ibirapuera",
      local: "Ibirapuera, SP",
      valor: 3200000,
      area: "2.000 m²",
      cliente: "Accor",
      prazo: "4 meses",
      escopo: "Reforma dos apartamentos",
      imagens: ["/images/rioafrica/page29_img1.jpeg", "/images/rioafrica/page29_img2.jpeg"],
    },
    {
      nome: "Ed. Martins Fontes",
      local: "Bela Vista, SP",
      valor: 12500000,
      area: "2.500 m²",
      cliente: "Belong Stay",
      prazo: "9 meses (previsão para 09/26)",
      escopo: "Retrofit de prédio comercial para implantação hoteleira",
      imagens: ["/images/rioafrica/page30_img1.jpeg", "/images/rioafrica/page30_img2.jpeg"],
    },
    {
      nome: "Refúgio Piemonté",
      local: "Atibaia, SP",
      valor: 11500000,
      area: "1.500 m²",
      cliente: "Grupo RAP inc",
      prazo: "18 meses (previsão para 04/27)",
      escopo: "Construção de condomínio de casas de médio e alto padrão",
      imagens: ["/images/rioafrica/page31_img1.jpeg", "/images/rioafrica/page31_img2.jpeg", "/images/rioafrica/page31_img3.jpeg", "/images/rioafrica/page31_img4.jpeg"],
    },
    {
      nome: "Aya Home Resort",
      local: "Ribeirão Pires, SP",
      valor: 90000000,
      area: "13.500 m²",
      cliente: "Grupo RAP inc",
      prazo: "26 meses (previsão para 02/28)",
      escopo: "Construção de empreendimento residencial com ampla área de lazer",
      imagens: ["/images/rioafrica/page32_img1.jpeg", "/images/rioafrica/page32_img2.jpeg", "/images/rioafrica/page32_img3.jpeg", "/images/rioafrica/page32_img4.jpeg"],
    },
    {
      nome: "Smart Fit Vaz Lobo",
      local: "Vaz Lobo, RJ",
      valor: 4100000,
      area: "1500 m²",
      cliente: "Smart Fit",
      prazo: "5 meses",
      escopo: "Construção de nova unidade",
      imagens: ["/images/rioafrica/page33_img1.jpeg", "/images/rioafrica/page33_img2.jpeg"],
    },
  ],

  // ── Imagens do Projeto ──
  imagensProjeto: [
    { src: "/images/rioafrica/page4_img1.jpeg", caption: "Vista externa — Centro Cultural Rio África" },
    { src: "/images/rioafrica/page4_img2.jpeg", caption: "Vista externa — perspectiva" },
    { src: "/images/rioafrica/page5_img1.jpeg", caption: "Vista interna — espaço cultural" },
    { src: "/images/rioafrica/page5_img2.jpeg", caption: "Vista interna — detalhes" },
    { src: "/images/rioafrica/page6_img1.jpeg", caption: "Vista aérea — implantação" },
    { src: "/images/rioafrica/page6_img2.jpeg", caption: "Vista geral — volumetria" },
  ],

  // ── Plantas ──
  plantas: [
    { src: "/images/rioafrica/page7_img1.png", titulo: "Corte Longitudinal" },
    { src: "/images/rioafrica/page8_img1.png", titulo: "Praça / Acesso" },
    { src: "/images/rioafrica/page9_img1.png", titulo: "Ateliês / Adm / Doca" },
    { src: "/images/rioafrica/page10_img1.png", titulo: "Exposições / RT" },
    { src: "/images/rioafrica/page11_img1.png", titulo: "Terraço / Restaurante" },
  ],

  // ── Certificações ──
  certificacoes: [
    "/images/rioafrica/page24_img1.jpeg",
    "/images/rioafrica/page24_img2.jpeg",
  ],

  // ── Imagens Institucionais ──
  imagensInstitucionais: [
    "/images/rioafrica/page22_img1.png",
    "/images/rioafrica/page23_img1.jpeg",
  ],
};

export const projects = [fairmont, smartfit, innside, rioafrica];
