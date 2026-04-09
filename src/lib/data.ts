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

// ============================================
// PROJECT 5: PACAEMBU - MODERNIZAÇÃO
// ============================================
export const pacaembu = {
  id: "pacaembu",
  title: "Complexo Pacaembu",
  subtitle: "Modernização",
  type: "Proposta Técnica e Comercial",
  date: "2026",
  client: "Complexo Pacaembu",
  project: "Modernização do Complexo Pacaembu",

  // ── Introdução ──
  introducao:
    "O presente documento tem por objetivo apresentar a proposta técnica e comercial para execução da Modernização do Complexo do Pacaembu, considerando o projeto previamente desenvolvido. Ao longo deste material serão apresentadas o projeto, o escopo dos serviços, a empresa, a estrutura organizacional da equipe envolvida e o detalhamento das atividades contempladas na proposta. O objetivo é demonstrar, de forma clara, nossa capacidade técnica, experiência e abordagem de execução e implantação, garantindo transparência quanto às responsabilidades, etapas do projeto e estrutura de gestão previstas para a realização da obra.",

  // ── Imagens do Projeto ──
  imagensProjeto: [
    { src: "/images/pacaembu/page5_img1.jpeg", caption: "Boulevard" },
    { src: "/images/pacaembu/page5_img2.jpeg", caption: "Fachada" },
    { src: "/images/pacaembu/page6_img1.jpeg", caption: "Aérea" },
    { src: "/images/pacaembu/page6_img2.jpeg", caption: "Tênis" },
    { src: "/images/pacaembu/page7_img1.jpeg", caption: "Acesso Oeste" },
    { src: "/images/pacaembu/page7_img2.jpeg", caption: "Acesso Leste" },
    { src: "/images/pacaembu/page8_img1.jpeg", caption: "Terraço" },
    { src: "/images/pacaembu/page8_img2.jpeg", caption: "Passarela" },
    { src: "/images/pacaembu/page9_img1.jpeg", caption: "Lobby" },
    { src: "/images/pacaembu/page9_img2.jpeg", caption: "Lobby" },
    { src: "/images/pacaembu/page10_img1.jpeg", caption: "Lobby" },
    { src: "/images/pacaembu/page10_img2.jpeg", caption: "Lobby" },
    { src: "/images/pacaembu/page11_img1.jpeg", caption: "Restaurante" },
    { src: "/images/pacaembu/page11_img2.jpeg", caption: "Restaurante" },
    { src: "/images/pacaembu/page12_img1.jpeg", caption: "Corredores" },
    { src: "/images/pacaembu/page12_img2.jpeg", caption: "Acesso Praça" },
    { src: "/images/pacaembu/page13_img1.jpeg", caption: "Suíte Standard" },
    { src: "/images/pacaembu/page13_img2.jpeg", caption: "Suíte Standard" },
    { src: "/images/pacaembu/page14_img1.jpeg", caption: "Suíte Média" },
    { src: "/images/pacaembu/page14_img2.jpeg", caption: "Suíte Média" },
  ],

  // ── Plantas ──
  plantas: [
    { src: "/images/pacaembu/page15_img1.jpeg", titulo: "Esplanada", detalhe: "Salão Capivari, Vestiários, Áreas Locáveis" },
    { src: "/images/pacaembu/page16_img1.jpeg", titulo: "Mezanino", detalhe: "Área Técnica, Áreas Locáveis" },
    { src: "/images/pacaembu/page17_img1.jpeg", titulo: "1º Pavimento", detalhe: "Suítes Hotel, Backoffice, Áreas Locáveis" },
    { src: "/images/pacaembu/page18_img1.jpeg", titulo: "2º Pavimento", detalhe: "Suítes Hotel, SPA, Saunas, Massagem" },
    { src: "/images/pacaembu/page19_img1.jpeg", titulo: "3º Pavimento", detalhe: "Lobby, Restaurante, Sala de Convenções, Suítes" },
    { src: "/images/pacaembu/page20_img1.jpeg", titulo: "Terraço", detalhe: "Restaurantes, Piscina, Solário, Vestiários" },
  ],

  // ── Situação Atual ──
  situacaoAtual: [
    { bloco: "Bloco Leste", imagens: ["/images/pacaembu/page22_img1.jpeg", "/images/pacaembu/page22_img2.jpeg", "/images/pacaembu/page23_img1.jpeg", "/images/pacaembu/page23_img2.jpeg", "/images/pacaembu/page23_img3.jpeg"] },
    { bloco: "Bloco Oeste", imagens: ["/images/pacaembu/page24_img1.jpeg", "/images/pacaembu/page24_img2.jpeg", "/images/pacaembu/page25_img1.jpeg", "/images/pacaembu/page25_img2.jpeg", "/images/pacaembu/page25_img3.jpeg"] },
    { bloco: "Bloco Central — 1º Pavimento", imagens: ["/images/pacaembu/page26_img1.jpeg", "/images/pacaembu/page26_img2.jpeg"] },
    { bloco: "Bloco Central — 2º Pavimento", imagens: ["/images/pacaembu/page27_img1.jpeg", "/images/pacaembu/page27_img2.jpeg"] },
    { bloco: "Bloco Central — 3º Pavimento", imagens: ["/images/pacaembu/page28_img1.jpeg", "/images/pacaembu/page28_img2.jpeg"] },
    { bloco: "Bloco Central — Terraço", imagens: ["/images/pacaembu/page29_img1.jpeg", "/images/pacaembu/page29_img2.jpeg"] },
  ],

  // ── Escopo da Obra ──
  escopo: [
    {
      categoria: "Shell: Bloco Leste",
      itens: ["Estrutura – Lajes, vigas e pilares", "Insertes Metálicos", "Civil", "Impermeabilização", "Acabamentos (Pintura e Revestimentos)", "Drywall", "Marmoraria", "Portas", "Acessibilidade", "Serralheria", "Equipamentos Salão Capivari", "Instalações Elétricas", "Instalações Hidrossanitárias", "SPCI", "Luminárias", "Finalizações"],
      excluso: ["Fornecimento de louças e metais (já comprado)", "Escadas metálicas (já contratado)", "Caixilhos metálicos (já contratado)", "Fornecimento de mesas e cadeiras – Salão Capivari (a cargo do cliente)", "Elevadores (já contratado)"],
      estimativas: ["SPDA (sem projeto)", "Gás (sem projeto)", "SDAI (sem projeto)"],
    },
    {
      categoria: "Shell: Bloco Oeste",
      itens: ["Estrutura - Muro de arrimo e Estrutura de apoio para estrutura metálica", "Civil", "Impermeabilização", "Acabamentos", "Serralheria", "Luminárias"],
      excluso: ["Escadas metálicas (já contratado)", "Caixilhos metálicos (já contratado)", "Elevadores (já contratado)"],
      estimativas: [],
    },
    {
      categoria: "Shell: Bloco Central",
      itens: ["Civil", "Acabamentos", "Impermeabilização", "Reforço Estrutural", "Serralheria", "Luminárias"],
      excluso: [],
      estimativas: [],
    },
    {
      categoria: "Implantação Bloco Oeste e Central (Hotel)",
      itens: ["Civil", "Impermeabilização", "Forro e drywall", "Portas", "Revestimentos", "Pintura", "Marcenarias", "Mármores e granitos", "Instalações elétricas", "Instalações hidrossanitárias", "SPCI", "Automação + SDAI", "HAVC", "Louças e metais", "Caixilhos", "Grelhas", "Mobiliários", "Luminárias", "Paisagismo", "Equipamentos de cozinha", "Equipamentos de quartos/suítes", "Equipamentos de academia", "Equipamentos, mobiliários, louças e metais áreas operacionais laje serviço", "Acessibilidade", "Instalações piscina com prainha", "Instalações spa", "Instalações sauna úmida", "Instalações sauna seca", "Vidros e espelhos", "Persianas e cortinas", "Enxoval (OS&E)", "Comunicação visual", "Finalizações"],
      excluso: ["Enxoval Áreas Comuns (sem memorial descritivo)", "Caixilhos metálicos (já contratado)", "Elevadores (já contratado)"],
      estimativas: ["Enxoval Suítes (sem memorial descritivo)", "Equipamentos Suítes (sem memorial descritivo)", "Comunicação Visual (sem projeto detalhado)", "Persianas e Cortinas (sem definição de projeto)", "SPDA (sem projeto)"],
    },
  ],

  // ── Incluso na Proposta ──
  incluso: [
    {
      categoria: "Canteiro de obras e áreas de vivência",
      itens: ["Mobilização e desmobilização de canteiro", "Divisória naval/tapume (200ml) para isolamentos de áreas do canteiro", "Escritório de engenharia e equipe administrativa com banheiro e ar condicionado, vestiários para equipe de obra, refeitório e área de vivência e armazenamento de materiais", "Itens para implantação e montagem de canteiro para equipe técnica, engenharia, refeitório, vestiário e depósito (mobiliários, equipamentos, louças e metais, etc.)", "Manutenção do canteiro (materiais de apoio para organização do canteiro)"],
    },
    {
      categoria: "Serviços para implantação da obra e apoio operacional",
      itens: ["Mobilização e desmobilização de equipe técnica", "Locação de caçamba de entulho", "Limpeza constante da obra (remoção de entulhos, sacos de entulho e descarte adequado das peças)", "Isolamentos pontuais com telas, cones, fitas zebradas, sinalizações, etc.", "Equipamento de proteção coletiva (EPI's e EPC's)"],
    },
    {
      categoria: "Legalizações e documentos",
      itens: ["Anotação de responsabilidade técnica - ART e RRT", "Seguro de responsabilidade civil e engenharia", "Performance Bond", "Cópias e plotagens de projetos", "Book de obra", "Laudo PGRCC (Plano De Gerenciamento De Resíduos Da Construção Civil)"],
    },
    {
      categoria: "Equipamento de produção",
      itens: ["Minigrua", "Diversos"],
    },
    {
      categoria: "Proteções e isolamentos",
      itens: ["Proteção de vão de elevadores e escadas", "Bandeja de proteção e linha de vida", "Proteções após instalações de revestimentos, vidros e mobiliários"],
    },
  ],

  // ── Organograma Obra ──
  orgObra: {
    administrativo: ["Financeiro", "RH", "Suprimentos", "Planejamento", "Gerente", "Administrativo"],
    engenharia: ["Engenheiro Coordenador", "Engenheiro Civil ou Arquiteto (Torre Leste)", "Engenheiro Civil ou Arquiteto (Torre Oeste e Hotel)", "Engenheiro de Planejamento", "Engenheiro de Instalações", "Auxiliar de Engenharia"],
    areaTecnica: ["Mestre de Obras (Torre Leste)", "Mestre de Obras (Torre Oeste e Hotel)", "Técnico de Segurança", "Administrativo de Obra", "Almoxarife", "Segurança Patrimonial"],
    operacao: ["Equipe 1 (Torre Leste)", "Equipe 2 (Torre Oeste)", "Equipe 3 (Torre Hotel)", "Equipe de implantação"],
  },

  // ── Prazos ──
  prazo: {
    mobilizacao: 20,
    execucao: "15 meses",
    checklistComissionamento: "1 mês",
    duracaoTotal: 428,
    inicio: "04/05/2026",
    termino: "24/09/2027",
  },

  // ── Cronograma Macro ──
  cronograma: {
    blocoLeste: [
      { tarefa: "Bloco Leste (total)", duracao: 195, inicio: "29/05/26", termino: "19/01/27", destaque: true },
      { tarefa: "Estrutura", duracao: 100, inicio: "29/05/26", termino: "24/09/26" },
      { tarefa: "Serralherias", duracao: 30, inicio: "24/06/26", termino: "28/07/26" },
      { tarefa: "Instalações elétricas", duracao: 100, inicio: "24/06/26", termino: "17/10/26" },
      { tarefa: "Instalações hidráulicas", duracao: 100, inicio: "24/06/26", termino: "17/10/26" },
      { tarefa: "SPCI", duracao: 100, inicio: "24/06/26", termino: "17/10/26" },
      { tarefa: "Vedações (alvenarias e drywalls)", duracao: 100, inicio: "24/06/26", termino: "17/10/26" },
      { tarefa: "Impermeabilizações", duracao: 20, inicio: "19/10/26", termino: "11/11/26" },
      { tarefa: "Acabamentos", duracao: 30, inicio: "11/11/26", termino: "16/12/26" },
      { tarefa: "Corrimões e guarda-corpo", duracao: 40, inicio: "11/11/26", termino: "30/12/26" },
      { tarefa: "Marmoraria", duracao: 7, inicio: "30/11/26", termino: "08/12/26" },
      { tarefa: "Portas", duracao: 7, inicio: "08/12/26", termino: "15/12/26" },
      { tarefa: "Luminárias", duracao: 25, inicio: "30/11/26", termino: "30/12/26" },
      { tarefa: "Acessibilidade", duracao: 7, inicio: "17/12/26", termino: "26/12/26" },
      { tarefa: "Louças e metais", duracao: 10, inicio: "17/12/26", termino: "30/12/26" },
      { tarefa: "Equipamentos cozinha", duracao: 10, inicio: "17/12/26", termino: "30/12/26" },
      { tarefa: "Limpeza final", duracao: 15, inicio: "30/12/26", termino: "19/01/27" },
    ],
    blocoOesteHotel: [
      { tarefa: "Bloco Oeste e Hotel (total)", duracao: 405, inicio: "29/05/26", termino: "24/09/27", destaque: true },
      { tarefa: "Reforço Estrutural", duracao: 30, inicio: "29/05/26", termino: "04/07/26" },
      { tarefa: "Execução de contrapiso", duracao: 60, inicio: "29/05/26", termino: "08/08/26" },
      { tarefa: "Instalações elétricas", duracao: 300, inicio: "29/05/26", termino: "24/05/27" },
      { tarefa: "Instalações hidráulicas", duracao: 300, inicio: "29/05/26", termino: "24/05/27" },
      { tarefa: "SPCI", duracao: 300, inicio: "29/05/26", termino: "24/05/27" },
      { tarefa: "HAVC", duracao: 300, inicio: "29/05/26", termino: "24/05/27" },
      { tarefa: "Vedações (alvenarias e drywalls)", duracao: 180, inicio: "18/06/26", termino: "19/01/27" },
      { tarefa: "Impermeabilizações", duracao: 170, inicio: "22/07/26", termino: "12/02/27" },
      { tarefa: "Forros de gesso", duracao: 180, inicio: "22/07/26", termino: "24/02/27" },
      { tarefa: "Acabamentos", duracao: 180, inicio: "26/08/26", termino: "01/04/27" },
      { tarefa: "Luminárias", duracao: 250, inicio: "12/09/26", termino: "10/07/27" },
      { tarefa: "Louças", duracao: 180, inicio: "30/09/26", termino: "06/05/27" },
      { tarefa: "Marmoraria", duracao: 150, inicio: "19/10/26", termino: "17/04/27" },
      { tarefa: "Portas", duracao: 150, inicio: "30/09/26", termino: "01/04/27" },
      { tarefa: "Marcenaria", duracao: 180, inicio: "05/11/26", termino: "11/06/27" },
      { tarefa: "Automação", duracao: 140, inicio: "19/01/27", termino: "05/07/27" },
      { tarefa: "Acessibilidade", duracao: 140, inicio: "19/01/27", termino: "05/07/27" },
      { tarefa: "Vidros e espelhos", duracao: 140, inicio: "19/01/27", termino: "05/07/27" },
      { tarefa: "Equipamentos e mobiliários", duracao: 60, inicio: "11/06/27", termino: "19/08/27" },
      { tarefa: "Persianas e cortinas", duracao: 60, inicio: "11/06/27", termino: "19/08/27" },
      { tarefa: "Comunicação Visual", duracao: 60, inicio: "11/06/27", termino: "19/08/27" },
      { tarefa: "Paisagismo", duracao: 60, inicio: "11/06/27", termino: "19/08/27" },
      { tarefa: "Limpeza, Montagem e Checklist", duracao: 30, inicio: "19/08/27", termino: "24/09/27" },
    ],
  },

  // ── Proposta Comercial ──
  propostaComercial: [
    { id: "A", descricao: "Serviços Preliminares Gerais", valor: 5667470.75, percentual: 5 },
    { id: "B", descricao: "Shell Bloco Leste", valor: 17711512.10, percentual: 16 },
    { id: "C", descricao: "Shell Bloco Oeste", valor: 1052242.02, percentual: 0.96 },
    { id: "D", descricao: "Shell Bloco Hotel", valor: 7271366.53, percentual: 7 },
    { id: "E", descricao: "Bloco Hotel (Implantação)", valor: 77367418.47, percentual: 71 },
  ],
  custoTotal: 109070009.88,

  // ── Reengenharias para Redução de Custo ──
  reengenharias: [
    { item: "Revestimento de Piso", descricao: "Substituição do piso em madeira natural por piso vinílico, amplamente adotado no setor hoteleiro, visando maior durabilidade, resistência à umidade, facilidade de manutenção e melhor relação custo-benefício." },
    { item: "Automação", descricao: "Revisão do escopo de automação dos ambientes, com foco na racionalização dos sistemas previstos, visando redução de complexidade operacional, otimização de custos de implantação e manutenção." },
    { item: "Marcenaria", descricao: "Substituição de acabamentos em lâmina natural de madeira por painéis em MDF com revestimento industrializado, garantindo maior padronização, facilidade de manutenção e redução de custos." },
    { item: "Mobiliários", descricao: "Revisão das especificações de mobiliário, priorizando a substituição de peças assinadas por designers por mobiliário de linha padrão hoteleira, mantendo requisitos de desempenho e estética." },
    { item: "Luminárias", descricao: "Adoção de luminárias técnicas padronizadas de mercado, priorizando eficiência luminotécnica, facilidade de manutenção e disponibilidade de reposição." },
    { item: "Marmoraria", descricao: "Substituição por materiais de menor custo e maior disponibilidade. Exclusão de itens de alto impacto financeiro como banheiras esculpidas e revestimentos em mármore." },
  ],

  // ── Análise Comparativa ──
  analiseComparativa: {
    custoUHProjeto: 265000,
    custoUHReengenharia: 110000,
    reducaoPorApto: 155000,
    reducaoTotal: 13485000,
    valorFinal: 95858009.88,
  },

  // ── Certificações ──
  certificacoes: [
    "/images/pacaembu/page50_img1.png",
    "/images/pacaembu/page50_img2.jpeg",
  ],

  // ── Imagens Institucionais ──
  imagensInstitucionais: [
    "/images/pacaembu/page48_img1.png",
    "/images/pacaembu/page49_img1.jpeg",
  ],

  // ── Obras Executadas ──
  obrasExecutadas: [
    { nome: "Casa Livramento", local: "Gamboa, RJ", area: "2.500 m²", cliente: "Autonomy/Voile", prazo: "4 meses", escopo: "Restauro de fachada preservada e revitalização interna", imagens: ["/images/pacaembu/page51_img1.jpeg", "/images/pacaembu/page51_img2.jpeg"] },
    { nome: "Smart Fit", local: "Vila Buarque, SP", area: "2.200 m²", cliente: "Smart Fit", prazo: "4 meses", escopo: "Construção de nova unidade", imagens: ["/images/pacaembu/page52_img1.jpeg", "/images/pacaembu/page52_img2.jpeg", "/images/pacaembu/page52_img3.jpeg", "/images/pacaembu/page52_img4.jpeg"] },
    { nome: "Transamerica", local: "Alameda Santos, SP", area: "3.750 m²", cliente: "Atlantica", prazo: "10 meses", escopo: "Retrofit de áreas comuns do hotel (restaurante, lobby, área administrativa e salas de eventos)", imagens: ["/images/pacaembu/page53_img1.jpeg", "/images/pacaembu/page53_img2.jpeg", "/images/pacaembu/page53_img3.jpeg", "/images/pacaembu/page53_img4.jpeg"] },
    { nome: "Cyan", local: "Itupeva, SP", area: "6.000 m²", cliente: "Atlântica", prazo: "16 meses", escopo: "Construção de áreas sociais e backoffice, retrofit de áreas comuns e apartamentos e implantação completa", imagens: ["/images/pacaembu/page54_img1.jpeg", "/images/pacaembu/page54_img2.jpeg", "/images/pacaembu/page54_img3.jpeg", "/images/pacaembu/page54_img4.jpeg"] },
    { nome: "Pullman Ibirapuera", local: "Ibirapuera, SP", area: "4.000 m²", cliente: "Accor", prazo: "4 meses", escopo: "Retrofit e implantação dos apartamentos e corredores", imagens: ["/images/pacaembu/page55_img1.jpeg", "/images/pacaembu/page55_img2.jpeg"] },
    { nome: "Ed. Martins Fontes", local: "Bela Vista, SP", area: "4.000 m²", cliente: "Belong Stay", prazo: "9 meses (previsão para 09/26)", escopo: "Retrofit e implantação de prédio comercial para short stay", imagens: ["/images/pacaembu/page56_img1.jpeg", "/images/pacaembu/page56_img2.jpeg"] },
    { nome: "Refúgio Piemonté", local: "Atibaia, SP", area: "3.500 m²", cliente: "Grupo RAP inc", prazo: "18 meses (previsão para 04/27)", escopo: "Construção de condomínio de casas de médio e alto padrão", imagens: ["/images/pacaembu/page57_img1.jpeg", "/images/pacaembu/page57_img2.jpeg", "/images/pacaembu/page57_img3.jpeg", "/images/pacaembu/page57_img4.jpeg"] },
    { nome: "Aya Home Resort", local: "Ribeirão Pires, SP", area: "13.500 m²", cliente: "Grupo RAP inc", prazo: "26 meses (previsão para 02/28)", escopo: "Construção de empreendimento residencial com ampla área de lazer", imagens: ["/images/pacaembu/page58_img1.jpeg", "/images/pacaembu/page58_img2.jpeg", "/images/pacaembu/page58_img3.jpeg", "/images/pacaembu/page58_img4.jpeg"] },
    { nome: "Smart Fit Vaz Lobo", local: "Vaz Lobo, RJ", area: "3.000 m²", cliente: "Smart Fit", prazo: "5 meses", escopo: "Construção de nova unidade", imagens: ["/images/pacaembu/page59_img1.jpeg", "/images/pacaembu/page59_img2.jpeg"] },
  ],
};

export const projects = [fairmont, smartfit, innside, rioafrica, pacaembu];
