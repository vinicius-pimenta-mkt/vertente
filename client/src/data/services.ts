// Cartografia Viva — catálogo editável e estrutura de portfólio por serviço.
export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  portfolioDescription: string;
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
    portfolioDescription: "Medição, representação e organização espacial da propriedade para transformar o território em informação precisa.",
    importance: "Uma decisão sobre a terra começa por uma leitura confiável dos seus limites, áreas e usos. O georreferenciamento organiza essa visão para apoiar regularização, planejamento e próximos passos.",
    whatWeDo: "A Vertente estrutura o levantamento e a representação da propriedade com linguagem clara, conectando informação técnica à realidade de quem precisa decidir no campo.",
    when: ["Você precisa entender os limites da propriedade.", "Vai dividir, medir ou planejar uma nova intervenção.", "Precisa organizar informações espaciais para orientar uma regularização."],
    process: ["Conversa inicial sobre o objetivo da propriedade.", "Leitura do cenário e definição do levantamento necessário.", "Organização das informações para orientar a próxima decisão."],
    image: "/images/hero.png",
    gallery: ["/portfolio/geo/geo1.jpg", "/portfolio/geo/geo2.jpg", "/portfolio/geo/geo3.jpg"],
    accent: "ocre",
  },
  {
    slug: "medicao-de-propriedades",
    title: "Medição de propriedades rurais",
    eyebrow: "02 · PATRIMÔNIO",
    summary: "Quanto você realmente conhece da terra que possui? Uma medição precisa ajuda a organizar áreas, limites, divisões, heranças, planejamentos e futuras decisões sobre o imóvel.",
    portfolioDescription: "Levantamento das dimensões e limites da propriedade para apoiar decisões, divisões e planejamento.",
    importance: "Medir bem reduz incertezas e transforma uma percepção aproximada em informação que pode orientar decisões concretas na propriedade.",
    whatWeDo: "A Vertente organiza a demanda e encaminha a leitura das áreas de forma próxima, sem transformar o produtor em especialista em mapas para conseguir avançar.",
    when: ["Você precisa medir uma área específica.", "Está planejando uma divisão, herança ou mudança de uso.", "Quer deixar a propriedade mais bem documentada."],
    process: ["Entendimento do que precisa ser medido.", "Planejamento da coleta e da representação.", "Entrega de uma leitura organizada para o próximo passo."],
    image: "/images/medicao.png",
    gallery: ["/portfolio/medicao/medicao.png", "/portfolio/medicao/medicao2.jpg", "/portfolio/medicao/medicao3.jpg"],
    accent: "verde",
  },
  {
    slug: "programa-reflorestar",
    title: "Programa Reflorestar",
    eyebrow: "03 · CONSERVAÇÃO",
    summary: "E se uma área que hoje só dá trabalho pudesse trabalhar a favor da propriedade? Avaliamos áreas com potencial para conservação, recuperação e produção integrada e orientamos o produtor sobre as possibilidades de enquadramento no Programa Reflorestar.",
    portfolioDescription: "Projetos voltados à recuperação, conservação e aproveitamento de possibilidades ambientais da propriedade.",
    importance: "Áreas de nascente, mata ciliar e trechos degradados podem exigir cuidado técnico — e também podem abrir caminhos de apoio. O primeiro passo é entender o cenário real da propriedade.",
    whatWeDo: "A Vertente avalia possibilidades de enquadramento e orienta o produtor sobre o caminho técnico, sem prometer regras, valores ou resultados antes da análise da área.",
    when: ["Você tem uma nascente, curso d’água ou área de vegetação.", "Existe um trecho degradado que precisa de recuperação.", "Quer saber se a propriedade pode ter oportunidades no Reflorestar."],
    process: ["Avaliação inicial do contexto da área.", "Leitura das modalidades e requisitos aplicáveis.", "Orientação dos próximos passos para o seu caso."],
    image: "/images/reflorestar.jpg",
    gallery: ["/portfolio/reflo/reflo1.jpg", "/portfolio/reflo/reflo2.jpg", "/portfolio/reflo/reflo3.jpg"],
    accent: "ocre",
  },
  {
    slug: "consultoria-agricola-e-ambiental",
    title: "Consultoria agrícola e ambiental",
    eyebrow: "04 · PRODUÇÃO",
    summary: "Nem toda decisão da propriedade precisa ser tomada no improviso. Avaliamos o cenário da propriedade e orientamos os próximos passos para quem precisa produzir, conservar, regularizar ou planejar melhor.",
    portfolioDescription: "Análise técnica e orientação para decisões relacionadas à produção, conservação e gestão da propriedade.",
    importance: "Nem sempre o problema chega com o nome de um serviço. Uma conversa técnica ajuda a separar urgências, possibilidades e próximos passos.",
    whatWeDo: "A Vertente conecta a realidade da propriedade a caminhos agrícolas e ambientais, com proximidade para entender o contexto antes de indicar uma direção.",
    when: ["Você não sabe exatamente qual serviço precisa.", "Quer planejar uma intervenção com mais segurança.", "Precisa equilibrar produção, conservação e regularização."],
    process: ["Conversa sobre o que está acontecendo na propriedade.", "Organização das prioridades e oportunidades.", "Indicação do próximo passo mais coerente."],
    image: "/images/field.jpg",
    gallery: ["/portfolio/consultoria/consultoria1.jpg", "/portfolio/consultoria/consultoria2.jpg", "/portfolio/consultoria/consultoria3.jpg"],
    accent: "verde",
  },
  {
    slug: "laudos-e-licencas",
    title: "Laudos e Licenças Jurídicas, Ambientais e Operacionais",
    eyebrow: "05 · REGULARIZAÇÃO",
    summary: "Documentação técnica e apoio à regularização de atividades e intervenções que exigem licenças ou laudos.",
    portfolioDescription: "Documentação técnica e apoio à regularização de atividades e intervenções que exigem licenças ou laudos.",
    importance: "Quando uma atividade ou intervenção exige documentação, entender o que é aplicável à propriedade ajuda a evitar decisões incompletas e a organizar o caminho de regularização.",
    whatWeDo: "A Vertente apoia a organização de laudos, documentos e licenças aplicáveis às necessidades da propriedade ou atividade, respeitando as atribuições de órgãos públicos e profissionais habilitados.",
    when: ["Você precisa entender quais documentos podem ser necessários.", "Vai iniciar uma atividade ou intervenção que exige regularização.", "Quer organizar informações técnicas para dar andamento ao processo."],
    process: ["Conversa sobre a propriedade, atividade ou intervenção.", "Levantamento do que precisa ser analisado e documentado.", "Orientação sobre os próximos passos e responsáveis aplicáveis."],
    image: "/images/field.jpg",
    gallery: ["/portfolio/laudos/laudos1.jpg", "/portfolio/laudos/laudos2.jpg", "/portfolio/laudos/laudos3.jpg"],
    accent: "ocre",
  },
  {
    slug: "conservacao-solo-agua",
    title: "Conservação de solo e água",
    eyebrow: "06 · ÁGUA + SOLO",
    summary: "A água que chega à propriedade precisa encontrar um lugar para ficar. Planejamento e implantação de soluções para favorecer a infiltração, reduzir perdas e aumentar a resiliência da propriedade diante dos períodos de chuva e seca.",
    portfolioDescription: "Soluções para melhorar a infiltração, reduzir perdas e tornar a propriedade mais preparada para períodos de chuva e seca.",
    importance: "Conservar solo e água é proteger a capacidade produtiva e a segurança da propriedade diante das variações de chuva e seca.",
    whatWeDo: "A Vertente avalia o relevo, os caminhos da água e as condições do solo para orientar práticas e estruturas coerentes com o cenário da propriedade, como barraginhas, caixas secas, coxinhos e outras soluções aplicáveis.",
    when: ["A chuva está carregando solo ou abrindo erosões.", "Você quer favorecer a infiltração e reduzir perdas de água.", "Precisa planejar práticas de conservação para os períodos de chuva e seca."],
    process: ["Leitura do relevo, do solo e dos caminhos da água.", "Definição das prioridades e das soluções possíveis.", "Orientação para implantação e acompanhamento dos próximos passos."],
    image: "/images/field.jpg",
    gallery: ["/portfolio/solo-agua/solo1.jpg", "/portfolio/solo-agua/solo2.jpg", "/portfolio/solo-agua/solo3.jpg"],
    accent: "verde",
  },
];

export const problemLinks = [
  { label: "Preciso regularizar minha propriedade", service: "consultoria-agricola-e-ambiental" },
  { label: "Quero medir ou dividir uma área", service: "medicao-de-propriedades" },
  { label: "Preciso fazer o georreferenciamento", service: "georreferenciamento" },
  { label: "Tenho uma nascente ou curso d’água", service: "programa-reflorestar" },
  { label: "Tenho uma área que poderia entrar no Reflorestar", service: "programa-reflorestar" },
  { label: "Preciso de um laudo ou licença para minha propriedade", service: "laudos-e-licencas" },
  { label: "Preciso melhorar a conservação do solo e da água", service: "conservacao-solo-agua" },
  { label: "Não sei exatamente do que preciso", service: "consultoria-agricola-e-ambiental" },
];
