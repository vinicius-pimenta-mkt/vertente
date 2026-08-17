// Cartografia Viva — catálogo editável; remova ou adicione serviços somente quando confirmados pela empresa.
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
    eyebrow: "Território · Medida · Segurança",
    summary: "Mapeamento e organização espacial para você saber exatamente o que existe — e onde — na propriedade.",
    importance: "Uma decisão sobre a terra começa por uma leitura confiável dos seus limites, áreas e usos. O georreferenciamento organiza essa visão para apoiar regularização, planejamento e próximos passos.",
    whatWeDo: "A Vertente estrutura o levantamento e a representação da propriedade com linguagem clara, conectando informação técnica à realidade de quem precisa decidir no campo.",
    when: ["Você precisa entender os limites da propriedade.", "Vai dividir, medir ou planejar uma nova intervenção.", "Precisa organizar informações espaciais para um processo de regularização."],
    process: ["Conversa inicial sobre o objetivo da propriedade.", "Leitura do cenário e definição do levantamento necessário.", "Organização das informações para orientar a próxima decisão."],
    image: "/manus-storage/vertente-hero_69fb3e42.jpg",
    gallery: ["/public/geo1.jpg", "/public/geo2.jpg", "/public/geo3.jpg"],
    accent: "ocre",
  },
  {
    slug: "medicao-de-propriedades",
    title: "Medição de propriedades rurais",
    eyebrow: "Área · Limite · Clareza",
    summary: "Uma base mais clara para dividir, planejar, negociar ou simplesmente conhecer melhor a sua área.",
    importance: "Medir bem reduz incertezas e transforma uma percepção aproximada em informação que pode orientar decisões concretas na propriedade.",
    whatWeDo: "A Vertente organiza a demanda e encaminha a leitura das áreas de forma próxima, sem transformar o produtor em especialista em mapas para conseguir avançar.",
    when: ["Você precisa medir uma área específica.", "Está planejando uma divisão ou mudança de uso.", "Quer deixar a propriedade mais bem documentada."],
    process: ["Entendimento do que precisa ser medido.", "Planejamento da coleta e da representação.", "Entrega de uma leitura organizada para o próximo passo."],
    image: "/manus-storage/vertente-topo-texture_a4e6e3bf.jpg",
    gallery: ["/public/medicao1.jpg", "/public/medicao2.jpg", "/public/medicao3.jpg"],
    accent: "verde",
  },
  {
    slug: "programa-reflorestar",
    title: "Programa Reflorestar",
    eyebrow: "Recuperação · Incentivo · Futuro",
    summary: "Apoio para entender se a propriedade pode se enquadrar em oportunidades de restauração e conservação.",
    importance: "Áreas de nascente, mata ciliar e trechos degradados podem exigir cuidado técnico — e também podem abrir caminhos de apoio. O primeiro passo é entender o cenário real da propriedade.",
    whatWeDo: "A Vertente avalia possibilidades de enquadramento e orienta o produtor sobre o caminho técnico, sem prometer regras, valores ou resultados antes da análise da área.",
    when: ["Você tem uma nascente, curso d’água ou área de vegetação.", "Existe um trecho degradado que precisa de recuperação.", "Quer saber se a propriedade pode ter oportunidades no Reflorestar."],
    process: ["Avaliação inicial do contexto da área.", "Leitura das modalidades e requisitos aplicáveis.", "Orientação dos próximos passos para o seu caso."],
    image: "/manus-storage/vertente-reflorestar_389e947e.jpg",
    gallery: ["/public/reflo1.jpg", "/public/reflo2.jpg", "/public/reflo3.jpg"],
    accent: "ocre",
  },
  {
    slug: "consultoria-agricola-e-ambiental",
    title: "Consultoria agrícola e ambiental",
    eyebrow: "Planejamento · Produção · Conservação",
    summary: "Orientação para transformar dúvidas da propriedade em um caminho de decisão mais seguro.",
    importance: "Nem sempre o problema chega com o nome de um serviço. Uma conversa técnica ajuda a separar urgências, possibilidades e próximos passos.",
    whatWeDo: "A Vertente conecta a realidade da propriedade a soluções agrícolas e ambientais, com proximidade para entender o contexto antes de indicar um caminho.",
    when: ["Você não sabe exatamente qual serviço precisa.", "Quer planejar uma intervenção com mais segurança.", "Precisa equilibrar produção, conservação e regularização."],
    process: ["Conversa sobre o que está acontecendo na propriedade.", "Organização das prioridades e oportunidades.", "Indicação do próximo passo mais coerente."],
    image: "/manus-storage/vertente-field_1381125a.jpg",
    gallery: ["/public/consultoria1.jpg", "/public/consultoria2.jpg", "/public/consultoria3.jpg"],
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
