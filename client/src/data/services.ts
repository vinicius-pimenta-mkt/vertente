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
    slug: "programa-reflorestar",
    title: "Programa Reflorestar",
    eyebrow: "01 · CONSERVAÇÃO",
    summary: "E se uma área que hoje só dá trabalho pudesse trabalhar a favor da propriedade? Avaliamos áreas com potencial para conservação, recuperação e produção integrada e orientamos o produtor sobre as possibilidades de enquadramento no Programa Reflorestar.",
    portfolioDescription: "Projetos voltados à recuperação, conservação e aproveitamento de possibilidades ambientais da propriedade.",
    importance: "Áreas de nascente, mata ciliar e trechos degradados podem exigir cuidado técnico — e também podem abrir caminhos de apoio. O primeiro passo é entender o cenário real da propriedade.",
    whatWeDo: "A Vertente avalia possibilidades de enquadramento e orienta o produtor sobre o caminho técnico, sem prometer regras, valores ou resultados antes da análise da área.",
    when: ["Você tem uma nascente, curso d’água ou área de vegetação.", "Existe um trecho degradado que precisa de recuperação.", "Quer saber se a propriedade pode ter oportunidades no Reflorestar."],
    process: ["Avaliação inicial do contexto da área.", "Leitura das modalidades e requisitos aplicáveis.", "Orientação dos próximos passos para o seu caso."],
    image: "/images/reflorestar.jpg",
    gallery: ["/portfolio/reflo/reflo1.png", "/portfolio/reflo/reflo2.png", "/portfolio/reflo/reflo3.JPG", "/portfolio/reflo/reflo4.JPG", "/portfolio/reflo/reflo5.png",  "/portfolio/reflo/reflo6.png"],
    accent: "ocre",
  },
  {
    slug: "georreferenciamento",
    title: "Georreferenciamento",
    eyebrow: "02 · TERRITÓRIO",
    summary: "Medição e organização técnica da propriedade para dar mais segurança às decisões, regularizações e negociações que envolvem a terra.",
    portfolioDescription: "Medição, representação e organização espacial da propriedade para transformar o território em informação precisa.",
    importance: "Uma decisão sobre a terra começa por uma leitura confiável dos seus limites, áreas e usos. O georreferenciamento organiza essa visão para apoiar regularização, planejamento e próximos passos.",
    whatWeDo: "A Vertente estrutura o levantamento e a representação da propriedade com linguagem clara, conectando informação técnica à realidade de quem precisa decidir no campo.",
    when: ["Você precisa entender os limites da propriedade.", "Vai dividir, medir ou planejar uma nova intervenção.", "Precisa organizar informações espaciais para orientar uma regularização."],
    process: ["Conversa inicial sobre o objetivo da propriedade.", "Leitura do cenário e definição do levantamento necessário.", "Organização das informações para orientar a próxima decisão."],
    image: "/images/hero.png",
    gallery: ["/portfolio/geo/geo1.jpg", "/portfolio/geo/geo2.jpg", "/portfolio/geo/geo3.jpg", "/portfolio/geo/geo4.jpg", "/portfolio/geo/geo5.jpg", "/portfolio/geo/geo6.jpg", "/portfolio/geo/geo7.jpg", "/portfolio/geo/geo8.jpg", "/portfolio/geo/geo9.jpg"],
    accent: "ocre",
  },
  {
    slug: "medicao-de-propriedades",
    title: "Medição de propriedades rurais",
    eyebrow: "03 · PATRIMÔNIO",
    summary: "Quanto você realmente conhece da terra que possui? Uma medição precisa ajuda a organizar áreas, limites, divisões, heranças, planejamentos e futuras decisões sobre o imóvel.",
    portfolioDescription: "Levantamento das dimensões e limites da propriedade para apoiar decisões, divisões e planejamento.",
    importance: "Medir bem reduz incertezas e transforma uma percepção aproximada em informação que pode orientar decisões concretas na propriedade.",
    whatWeDo: "A Vertente organiza a demanda e encaminha a leitura das áreas de forma próxima, sem transformar o produtor em especialista em mapas para conseguir avançar.",
    when: ["Você precisa medir uma área específica.", "Está planejando uma divisão, herança ou mudança de uso.", "Quer deixar a propriedade mais bem documentada."],
    process: ["Entendimento do que precisa ser medido.", "Planejamento da coleta e da representação.", "Entrega de uma leitura organizada para o próximo passo."],
    image: "/images/medicao.JPG",
    gallery: ["/portfolio/medicao/medicao1.JPG", "/portfolio/medicao/medicao2.JPG", "/portfolio/medicao/medicao3.JPG", "/portfolio/medicao/medicao4.JPG", "/portfolio/medicao/medicao5.JPG", "/portfolio/medicao/medicao6.JPG", "/portfolio/medicao/medicao7.JPG", "/portfolio/medicao/medicao8.JPG"],
    accent: "verde",
  },
  {
    slug: "cadastro-ambiental-rural",
    title: "CAR - Cadastro Ambiental Rural",
    eyebrow: "04 · REGULARIZAÇÃO",
    summary: "A porta de entrada para a regularidade ambiental da sua propriedade, mapeando áreas de proteção e uso com segurança jurídica.",
    portfolioDescription: "Inscrição, retificação e regularização do Cadastro Ambiental Rural para conformidade legal e acesso a crédito.",
    importance: "O Cadastro Ambiental Rural (CAR) é um registro público eletrônico obrigatório. Estar regularizado é fundamental para acessar crédito rural, comercializar produção e garantir a segurança jurídica da terra.",
    whatWeDo: "A Vertente realiza o levantamento técnico, mapeamento de áreas de preservação e uso consolidado, e conduz o processo de inscrição ou retificação do CAR no sistema oficial.",
    when: ["Precisa emitir o CAR pela primeira vez na propriedade.", "Há pendências ou solicitações de retificação apontadas pelo órgão ambiental.", "Vai solicitar financiamento bancário, crédito rural ou desmembramento."],
    process: ["Análise documental e histórico de uso da terra.", "Vistoria técnica e mapeamento de limites, APPs e Reserva Legal.", "Inscrição, submissão e acompanhamento até a validação."],
    image: "/images/hero.png",
    gallery: ["/images/hero.png", "/images/field.jpg", "/images/reflorestar.jpg"],
    accent: "verde",
  },
  {
    slug: "projetos-barragens",
    title: "Projetos de Barragens",
    eyebrow: "05 · GESTÃO HÍDRICA",
    summary: "Segurança hídrica para a sua produção com projetos técnicos de barramentos, reservatórios e outorgas de água.",
    portfolioDescription: "Projetos de engenharia e regularização para construção e uso de barramentos e reservatórios de água.",
    importance: "A água é o recurso mais valioso na propriedade rural. Projetos adequados de barragens e captação garantem segurança contra períodos de estiagem e sustentabilidade para a irrigação.",
    whatWeDo: "A Vertente desenvolve projetos completos para construção e regularização de barramentos, estruturando os estudos necessários e os processos de outorga de uso da água.",
    when: ["Precisa armazenar água para irrigação ou dessedentação animal.", "Deseja regularizar um barramento já existente na terra.", "Busca segurança hídrica planejada com respaldo técnico e legal."],
    process: ["Levantamento topográfico e análise do local.", "Estudo técnico e dimensionamento da estrutura do reservatório.", "Organização dos processos de outorga e licenciamento nos órgãos competentes."],
    image: "/images/conservacao.jpg",
    gallery: ["/images/conservacao.jpg", "/images/field.jpg", "/images/hero.png"],
    accent: "verde",
  },
  {
    slug: "consultoria-agricola-e-ambiental",
    title: "Consultoria agrícola e ambiental",
    eyebrow: "06 · PRODUÇÃO",
    summary: "Nem toda decisão da propriedade precisa ser tomada no improviso. Avaliamos o cenário da propriedade e orientamos os próximos passos para quem precisa produzir, conservar, regularizar ou planejar melhor.",
    portfolioDescription: "Análise técnica e orientação para decisões relacionadas à produção, conservação e gestão da propriedade.",
    importance: "Nem sempre o problema chega com o nome de um serviço. Uma conversa técnica ajuda a separar urgências, oportunidades e próximos passos.",
    whatWeDo: "A Vertente conecta a realidade da propriedade a caminhos agrícolas e ambientais, com proximidade para entender o contexto antes de indicar uma direção.",
    when: ["Você não sabe exatamente qual serviço precisa.", "Quer planejar uma intervenção com mais segurança.", "Precisa equilibrar produção, conservação e regularização."],
    process: ["Conversa sobre o que está acontecendo na propriedade.", "Organização das prioridades e oportunidades.", "Indicação do próximo passo mais coerente."],
    image: "/images/field.jpg",
    gallery: ["/portfolio/consultoria/consultoria1.png", "/portfolio/consultoria/consultoria2.png", "/portfolio/consultoria/consultoria3.png", "/portfolio/consultoria/consultoria4.png"],
    accent: "verde",
  },
  {
    slug: "laudos-e-licencas",
    title: "Laudos e Licenças Ambientais, Jurídicas e Operacionais",
    eyebrow: "07 · REGULARIZAÇÃO",
    summary: "Documentação técnica e apoio à regularização de atividades e intervenções que exigem licenças ou laudos.",
    portfolioDescription: "Documentação técnica e apoio à regularização de atividades e intervenções que exigem licenças ou laudos.",
    importance: "Quando uma atividade ou intervenção exige documentação, entender o que é aplicável à propriedade ajuda a evitar decisões incompletas e a organizar o caminho de regularização.",
    whatWeDo: "A Vertente apoia a organização de laudos, documentos e licenças aplicáveis às necessidades da propriedade ou atividade, respeitando as atribuições de órgãos públicos e profissionais habilitados.",
    when: ["Você precisa entender quais documentos podem ser necessários.", "Vai iniciar uma atividade ou intervenção que exige regularização.", "Quer organizar informações técnicas para dar andamento ao processo."],
    process: ["Conversa sobre a propriedade, atividade ou intervenção.", "Levantamento do que precisa ser analisado e documentado.", "Orientação sobre os próximos passos e responsáveis aplicáveis."],
    image: "/images/laudos.png",
    gallery: ["/portfolio/laudos/laudos1.png", "/portfolio/laudos/laudos2.png", "/portfolio/laudos/laudos3.png"],
    accent: "ocre",
  },
];

export const problemLinks = [
  { label: "Quero regularizar o CAR e a situação da minha terra", service: "cadastro-ambiental-rural" },
  { label: "Preciso de água garantida com um projeto de barragem", service: "projetos-barragens" },
  { label: "Tenho uma nascente ou curso d’água / Reflorestar", service: "programa-reflorestar" },
  { label: "Preciso fazer o georreferenciamento", service: "georreferenciamento" },
  { label: "Quero medir ou dividir uma área", service: "medicao-de-propriedades" },
  { label: "Preciso de um laudo ou licença para minha propriedade", service: "laudos-e-licencas" },
  { label: "Preciso regularizar minha propriedade", service: "consultoria-agricola-e-ambiental" },
  { label: "Não sei exatamente do que preciso", service: "consultoria-agricola-e-ambiental" },
];
