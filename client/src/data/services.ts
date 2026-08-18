// Cartografia Viva — catálogo editável; a copy dos cards deve traduzir situações concretas da propriedade.
export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  importance: string;
  whatWeDo: string;
  when: string[];
  process: string[];
  image: string;
  gallery: string[];
  accent: string;
};

export const services: Service[] = [
  {
    slug: "georreferenciamento",
    title: "Georreferenciamento",
    eyebrow: "01 · TERRITÓRIO",
    summary: "Medição e organização técnica da propriedade para dar mais segurança às decisões, regularizações e negociações que envolvem a terra.",
    importance: "Uma decisão sobre a terra começa por uma leitura confiável dos seus limites, áreas e usos. O georreferenciamento organiza essa visão para apoiar regularização, planejamento e próximos passos.",
    whatWeDo: "A Vertente estrutura o levantamento e a representação da propriedade com linguagem clara, conectando informação técnica à realidade de quem precisa decidir no campo.",
    when: ["Você precisa entender os limites da propriedade.", "Vai dividir, medir ou planejar uma nova intervenção.", "Precisa organizar informações espaciais para orientar uma regularização."],
    process: ["Conversa inicial sobre o objetivo da propriedade.", "Leitura do cenário e definição do levantamento necessário.", "Organização das informações para orientar a próxima decisão."],
    image: "/manus-storage/vertente-hero_69fb3e42.jpg",
    gallery: ["/geo1.jpg", "/geo2.jpg", "/geo3.jpg"],
    accent: "ocre",
  },
  {
    slug: "medicao-de-propriedades",
    title: "Medição de propriedades rurais",
    eyebrow: "02 · PATRIMÔNIO",
    summary: "Quanto você realmente conhece da terra que possui? Uma medição precisa ajuda a organizar áreas, limites, divisões, heranças, planejamentos e futuras decisões sobre o imóvel.",
    importance: "Medir bem reduz incertezas e transforma uma percepção aproximada em informação que pode orientar decisões concretas na propriedade.",
    whatWeDo: "A Vertente organiza a demanda e encaminha a leitura das áreas de forma próxima, sem transformar o produtor em especialista em mapas para conseguir avançar.",
    when: ["Você precisa medir uma área específica.", "Está planejando uma divisão, herança ou mudança de uso.", "Quer deixar a propriedade mais bem documentada."],
    process: ["Entendimento do que precisa ser medido.", "Planejamento da coleta e da representação.", "Entrega de uma leitura organizada para o próximo passo."],
    image: "/manus-storage/vertente-topo-texture_a4e6e3bf.jpg",
    gallery: ["/medicao1.jpg", "/medicao2.jpg", "/medicao3.jpg"],
    accent: "verde",
  },
  {
    slug: "programa-reflorestar",
    title: "Programa Reflorestar",
    eyebrow: "03 · CONSERVAÇÃO",
    summary: "E se uma área que hoje só dá trabalho pudesse trabalhar a favor da propriedade? Avaliamos áreas com potencial para conservação, recuperação e produção integrada e orientamos o produtor sobre as possibilidades de enquadramento no Programa Reflorestar.",
    importance: "Áreas de nascente, mata ciliar e trechos degradados podem exigir cuidado técnico — e também podem abrir caminhos de apoio. O primeiro passo é entender o cenário real da propriedade.",
    whatWeDo: "A Vertente avalia possibilidades de enquadramento e orienta o produtor sobre o caminho técnico, sem prometer regras, valores ou resultados antes da análise da área.",
    when: ["Você tem uma nascente, curso d’água ou área de vegetação.", "Existe um trecho degradado que precisa de recuperação.", "Quer saber se a propriedade pode ter oportunidades no Reflorestar."],
    process: ["Avaliação inicial do contexto da área.", "Leitura das modalidades e requisitos aplicáveis.", "Orientação dos próximos passos para o seu caso."],
    image: "/manus-storage/vertente-reflorestar_389e947e.jpg",
    gallery: ["/reflo1.jpg", "/reflo2.jpg", "/reflo3.jpg"],
    accent: "ocre",
  },
  {
    slug: "consultoria-agricola-e-ambiental",
    title: "Consultoria agrícola e ambiental",
    eyebrow: "04 · PRODUÇÃO",
    summary: "Nem toda decisão da propriedade precisa ser tomada no improviso. Avaliamos o cenário da propriedade e orientamos os próximos passos para quem precisa produzir, conservar, regularizar ou planejar melhor.",
    importance: "Nem sempre o problema chega com o nome de um serviço. Uma conversa técnica ajuda a separar urgências, possibilidades e próximos passos.",
    whatWeDo: "A Vertente conecta a realidade da propriedade a caminhos agrícolas e ambientais, com proximidade para entender o contexto antes de indicar uma direção.",
    when: ["Você não sabe exatamente qual serviço precisa.", "Quer planejar uma intervenção com mais segurança.", "Precisa equilibrar produção, conservação e regularização."],
    process: ["Conversa sobre o que está acontecendo na propriedade.", "Organização das prioridades e oportunidades.", "Indicação do próximo passo mais coerente."],
    image: "/manus-storage/vertente-field_1381125a.jpg",
    gallery: ["/consultoria1.jpg", "/consultoria2.jpg", "/consultoria3.jpg"],
    accent: "verde",
  },
  {
    slug: "conservacao-de-solo-e-agua",
    title: "Conservação de solo e água",
    eyebrow: "05 · ÁGUA + SOLO",
    summary: "A água que chega à propriedade precisa encontrar um lugar para ficar. Planejamento e implantação de soluções para favorecer a infiltração, reduzir perdas e aumentar a resiliência da propriedade diante dos períodos de chuva e seca.",
    importance: "Conservar solo e água é proteger a capacidade produtiva e a segurança da propriedade diante das variações de chuva e seca.",
    whatWeDo: "A Vertente avalia o relevo, os caminhos da água e as condições do solo para orientar práticas e estruturas coerentes com o cenário da propriedade.",
    when: ["A chuva está carregando solo ou abrindo erosões.", "Você quer favorecer a infiltração e reduzir perdas de água.", "Precisa planejar práticas de conservação para os períodos de chuva e seca."],
    process: ["Leitura do relevo, do solo e dos caminhos da água.", "Definição das prioridades e das soluções possíveis.", "Orientação para implantação e acompanhamento dos próximos passos."],
    image: "/manus-storage/vertente-field_1381125a.jpg",
    gallery: ["/conservacao1.jpg", "/conservacao2.jpg", "/conservacao3.jpg"],
    accent: "verde",
  },
];

export const problemLinks = [
  { label: "Preciso regularizar minha propriedade", service: "consultoria-agricola-e-ambiental" },
  { label: "Quero medir ou dividir uma área", service: "medicao-de-propriedades" },
  { label: "Preciso fazer o georreferenciamento", service: "georreferenciamento" },
  { label: "Tenho uma nascente ou curso d’água", service: "programa-reflorestar" },
  { label: "Tenho uma área que poderia entrar no Reflorestar", service: "programa-reflorestar" },
  { label: "Não sei exatamente do que preciso", service: "consultoria-agricola-e-ambiental" },
];
