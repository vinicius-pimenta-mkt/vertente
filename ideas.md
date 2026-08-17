# Direção visual — Vertente Vegetal

## Abordagens consideradas

### 1. Cartografia Viva
**Very Brief Intro:** Uma estética editorial de campo contemporâneo, combinando mapas topográficos, fotografia documental e tipografia de revista para transformar conhecimento técnico em confiança próxima. O site se comporta como um atlas comercial da propriedade rural.
**Probability:** 0.07

### 2. Campo Mineral
**Very Brief Intro:** Uma linguagem premium e silenciosa, baseada em pedra, terra, água e grandes planos de branco quente, com composição arquitetônica e poucos elementos de destaque. A sensação é de precisão, permanência e cuidado.
**Probability:** 0.03

### 3. Radar do Território
**Very Brief Intro:** Uma direção mais tecnológica, com fundo escuro, linhas de relevo luminosas e mapas em camadas para comunicar inteligência aplicada ao campo. O visual é dinâmico e experimental, mas ainda ancorado na paisagem.
**Probability:** 0.08

## Abordagem escolhida: Cartografia Viva

### Design Movement
Editorialismo contemporâneo com referências de cartografia suíça, fotografia documental rural e design de informação ambiental.

### Core Principles
1. **Precisão que aproxima:** linguagem técnica traduzida em decisões compreensíveis para quem vive e trabalha na propriedade.
2. **Território como narrativa:** relevo, água, vegetação e limites aparecem como elementos de conteúdo, não como decoração.
3. **Contraste entre campo e método:** imagens orgânicas e texturas naturais convivem com grids, linhas e marcadores de levantamento.
4. **Conversão sem pressão:** CTAs contextuais surgem depois de o visitante se reconhecer em uma situação real.

### Color Philosophy
A base usa off-white de papel mineral e grafite terroso para transmitir clareza e permanência. O verde musgo profundo representa conhecimento aplicado e conservação; o acento amarelo-ocre funciona como sinal de rota, medida e oportunidade — um marcador de mapa que chama atenção sem parecer promocional.

### Layout Paradigm
Composição assimétrica em faixas editoriais: texto ancorado em uma margem, imagens em recortes altos e módulos de informação deslocados como folhas sobre uma carta topográfica. O hero terá uma paisagem em grande escala, uma camada cartográfica e uma coluna de orientação, evitando o bloco centralizado genérico.

### Signature Elements
- Linhas topográficas finas em movimento lento, desenhadas como se fossem levantadas no terreno.
- Etiquetas de campo com coordenadas, categorias e pequenos marcadores ocre.
- Recortes fotográficos com bordas suaves e máscaras inspiradas em curvas de nível.

### Interaction Philosophy
Cada interação deve parecer uma ferramenta de orientação: hover revela contexto, cards expandem como fichas de campo e CTAs levam o visitante ao próximo passo lógico. Movimento é discreto, útil e respeita a redução de movimento do sistema.

### Animation
O hero usa camadas com parallax mínimo, linhas SVG com desenho progressivo e uma máscara que revela a paisagem por contornos. Entradas de seção usam fade + deslocamento curto e escalonado. Cards respondem com elevação e rotação quase imperceptível; o menu sticky reduz altura e ganha fundo opaco ao rolar. Nenhuma animação essencial depende de movimento e todas são desativadas sob `prefers-reduced-motion`.

### Typography System
Display: **DM Serif Display**, usado em títulos de impacto e frases de posicionamento. Interface e corpo: **Manrope**, com pesos 400, 500, 600 e 700 para legibilidade e precisão. Labels de navegação e dados: Manrope em caixa alta, espaçamento ampliado. Hierarquia: H1 grande e editorial, H2 com contraste serifado, textos de apoio curtos e arejados.

### Brand Essence
**Posicionamento:** consultoria agrícola e ambiental para produtores que precisam entender melhor o território, regularizar decisões e desenvolver a propriedade com segurança. **Personalidade:** técnica, próxima, territorial.

### Brand Voice
Headlines são específicas, calmas e orientadas à realidade da propriedade. CTAs convidam para uma conversa contextualizada, sem promessas genéricas.

Exemplos:
- “O que você pretende fazer na propriedade começa pelo que o território revela.”
- “Conte o cenário. A Vertente ajuda a organizar o próximo passo.”

### Wordmark & Logo
Símbolo gráfico sem texto formado por duas curvas de nível que se encontram em uma folha/vertente angular, com um pequeno corte vertical sugerindo eixo de medição. O wordmark deve aparecer em caixa alta compacta, com espaçamento controlado e uma folha geométrica como assinatura.

### Signature Brand Color
**Ocre de Marco — `#C58A3A`**, um dourado terroso usado apenas para rotas, marcadores, bordas de foco e CTAs de decisão. É a cor proprietária que conecta cartografia, solo e oportunidade.

## Conteúdo confirmado na pesquisa inicial

A presença pública encontrada associa a Vertente Vegetal a **consultoria agrícola e ambiental**, com atuação indicada em **Ibitirama-ES** e no universo do **Caparaó Capixaba**. A bio pública menciona **georreferenciamento, Reflorestar, crédito rural, CAR e projetos ambientais e agrícolas**. Publicações públicas também mencionam avaliação de oportunidades na propriedade, conservação de solo e água e medição/mapeamento de áreas. Informações como e-mail, endereço completo e número oficial de WhatsApp devem permanecer editáveis até confirmação direta em fonte oficial.

## Campos editáveis

- `client/src/data/company.ts`: nome, descrição, região, Instagram, telefone, WhatsApp, e-mail e endereço.
- `client/src/data/services.ts`: serviços confirmados, descrições e galerias.
- `client/src/data/gallery.ts`: nomes simples de arquivos para substituição posterior.
- As imagens locais de cada galeria devem ser referenciadas por listas simples em `public` quando o usuário fornecer os arquivos; enquanto isso, o layout usa ativos visuais autorizados/gerados e placeholders identificados.
