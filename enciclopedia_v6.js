import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// === BANCO DE DADOS DA ENCICLOPÉDIA COMPLETO ===
export const dbColecaoTopicos = {
    html: {
        iniciante: ["Conceito de Tags", "Estrutura Global", "Tags de Texto", "Meta Tags Técnicas", "Atributos e IDs", "Links e Navegação", "Listas de Inventário", "Inserção de Mídia", "Containers Div", "Comentários de Código"],
        intermediario: ["Elementos Semânticos (Header, Nav, Footer)", "Seções de Conteúdo (Section, Article, Aside)", "Estrutura de Tabelas Simples (Table, Tr, Td)", "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)", "Formulários Básicos (Form, Input, Label)", "Tipos de Input (Text, Password, Email, Button)", "Seleções em Formulários (Radio, Checkbox, Select)", "Validação Nativa de Formulários", "Introdução à Acessibilidade (Atributos ARIA)", "A tag <dialog> (Modais Nativos)"],
        avancado: ["A tag <canvas> (O Palco dos Jogos)", "SVG inline (<svg> e <path>)", "Imagens Responsivas (<picture> e srcset)", "Áudios Avançados (Atributos e Eventos de <audio>)", "Pré-carregamento de Assets (preload e prefetch)", "Iframe Avançado (<iframe> e Sandbox)", "Manipulação de Templates (<template> e <slot>)", "Armazenamento no Navegador (O papel técnico do HTML5)", "Componentes Web Nativos (Custom Elements)", "Acessibilidade de Teclado Avançada (tabindex e Foco)"]
    },
    css: { 
        iniciante: ["Seletores Básicos e Combinadores", "O Box Model (Modelo de Caixa)", "Cores e Backgrounds", "Tipografia Web", "Unidades de Medida", "Display Básico", "Bordas e Arredondamentos", "Sombras Simples", "Estados Básicos (Pseudo-classes)", "Variáveis CSS Nativas (Básico)"], 
        intermediario: ["Posicionamento (Position) e z-index", "Fundamentos do Flexbox", "Flexbox Avançado", "Fundamentos do CSS Grid", "Pseudo-elementos (::before e ::after)", "Transições Suaves (Transitions)", "Transformações 2D (Transforms)", "Design Responsivo (Media Queries)", "Pseudo-classes Avançadas", "Filtros Gráficos (Filters e Blend Modes)"], 
        avancado: ["Animações Complexas com Keyframes", "Transformações 3D", "CSS Grid Layout Avançado", "Funções Matemáticas", "Clip-path e Formas Complexas", "Scroll Snapping e Scrollbars Estilizadas", "Container Queries (@container)", "Arquitetura CSS (Metodologia BEM)", "Efeitos Visuais Modernos (Glassmorphism e Neumorphism)", "Integração de Variáveis CSS com JavaScript"] 
    },
    js: { 
        iniciante: ["Variáveis e Constantes (let e const)", "Tipos de Dados Essenciais", "Operadores Matemáticos e Lógicos", "Estruturas Condicionais (if, else, else if)", "Estruturas de Repetição (for e while)", "Introdução às Funções", "Arrays Simples (Listas)", "Objetos Básicos (Chave e Valor)", "Manipulação Básica do DOM (getElementById)", "Eventos de Teclado e Mouse (addEventListener)"], 
        intermediario: ["O Game Loop e requestAnimationFrame", "Delta Time (Movimento Suave)", "Classes e Construtores (POO)", "Física de Pulo e Gravidade", "Colisão Retangular (AABB)", "Animação e Spritesheets", "Controle de Estados Simples", "Vetores e Movimentação 2D", "Arrays e Gerenciamento de Entidades", "Modularização (Módulos JS)"], 
        avancado: ["Callbacks e Event Loop", "Promises (Promessas)", "Async / Await", "Recursividade", "Manipulação Avançada de Objetos", "APIs e Fetch", "Bitwise Operators (Operadores de Bit)", "Regular Expressions (Regex)", "Memory Management (Garbage Collector)", "Design Patterns (Padrões de Projeto)"] 
    }
};

export const conteudosHTML = {
    "Conceito de Tags": `
        <p>As tags são a base da linguagem HTML e funcionam como comandos que informam ao navegador como o conteúdo deve ser estruturado. No desenvolvimento de jogos, elas são usadas para definir desde a área onde o jogo será exibido até os botões de menu e textos de interface.</p>
        <pre><code>&lt;h1&gt;Meu Primeiro Jogo&lt;/h1&gt;\n&lt;p&gt;Pressione Start para começar.&lt;/p&gt;</code></pre>`,
    "Estrutura Global": `
        <p>Todo documento HTML5 profissional precisa seguir uma estrutura global obrigatória. Essa estrutura começa sempre com a declaração <code>&lt;!DOCTYPE html&gt;</code>.</p>
        <pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Game Page&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;!-- O jogo entra aqui --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>`,
    "Tags de Texto": `
        <p>As tags de texto são usadas para exibir informações escritas, como diálogos de NPCs, pontuação ou descrições de itens. As mais comuns são os títulos (<code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code>) e parágrafos (<code>&lt;p&gt;</code>).</p>
        <pre><code>&lt;h2&gt;Missão Principal&lt;/h2&gt;\n&lt;p&gt;Encontre a &lt;strong&gt;Chave de Ouro&lt;/strong&gt; no calabouço.&lt;/p&gt;</code></pre>`,
    "Meta Tags Técnicas": `
        <p>As meta tags fornecem instruções técnicas invisíveis mas essenciais. A tag <code>charset="UTF-8"</code> garante que caracteres especiais funcionem perfeitamente.</p>
        <pre><code>&lt;meta charset="UTF-8"&gt;\n&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>`,
    "Atributos e IDs": `
        <p>Atributos modificam e identificam tags. O atributo <code>id</code> é um nome exclusivo para um elemento, permitindo ao JS alterá-lo diretamente.</p>
        <pre><code>&lt;div id="jogador-um" class="status-box"&gt;&lt;/div&gt;</code></pre>`,
    "Links e Navegação": `
        <p>A tag <code>&lt;a&gt;</code> conecta páginas e recursos externos, como manuais e wikis do jogo.</p>
        <pre><code>&lt;a href="creditos.html"&gt;Ver Créditos&lt;/a&gt;</code></pre>`,
    "Listas de Inventário": `
        <p>Organizam informações usando marcadores ordenados (ol) ou livres (ul). Muito usadas para inventários e rankings de score.</p>
        <pre><code>&lt;ul&gt;\n    &lt;li&gt;Poção de Cura&lt;/li&gt;\n    &lt;li&gt;Espada de Ferro&lt;/li&gt;\n&lt;/ul&gt;</code></pre>`,
    "Inserção de Mídia": `
        <p>As tags <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code> e <code>&lt;video&gt;</code> trazem imagem e ambientações sonoras.</p>
        <pre><code>&lt;img src="hero.png" alt="Herói"&gt;</code></pre>`,
    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> serve de caixa genérica para agrupar e organizar o HUD e menus.</p>
        <pre><code>&lt;div class="menu-pausa"&gt;\n    &lt;button&gt;Continuar&lt;/button&gt;\n&lt;/div&gt;</code></pre>`,
    "Comentários de Código": `
        <p>Identificam partes do código sem afetar a sua execução física.</p>
        <pre><code>&lt;!-- Início da Seção de Inventário --&gt;</code></pre>`,
    "Elementos Semânticos (Header, Nav, Footer)": `
        <p>Dão significado lógico explícito ao topo, navegação e rodapé.</p>
        <pre><code>&lt;header&gt;\n    &lt;h1&gt;Dragon Quest&lt;/h1&gt;\n&lt;/header&gt;</code></pre>`,
    "Seções de Conteúdo (Section, Article, Aside)": `
        <p>Dividem o painel em seções, artigos de posts e materiais laterais de informações.</p>
        <pre><code>&lt;section id="conquistas"&gt;\n    &lt;article&gt;Mestre das Sombras&lt;/article&gt;\n&lt;/section&gt;</code></pre>`,
    "Estrutura de Tabelas Simples (Table, Tr, Td)": `
        <p>Tabelas organizam pontuações e métricas de atributos de armas em linhas e colunas.</p>
        <pre><code>&lt;table&gt;\n    &lt;tr&gt;&lt;td&gt;Dano: 10&lt;/td&gt;&lt;/tr&gt;\n&lt;/table&gt;</code></pre>`,
    "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": `
        <p>Permitem tabelas mais completas unindo topo (thead), corpo de dados (tbody) e rodapés (tfoot).</p>
        <pre><code>&lt;thead&gt;\n    &lt;tr&gt;&lt;th&gt;Player&lt;/th&gt;&lt;/tr&gt;\n&lt;/thead&gt;</code></pre>`,
    "Formulários Básicos (Form, Input, Label)": `
        <p>Formulários coletam dados do jogador. O input cria campos livres de digitação e o label os identifica.</p>
        <pre><code>&lt;form&gt;\n    &lt;label&gt;Nome:&lt;/label&gt;\n    &lt;input type="text"&gt;\n&lt;/form&gt;</code></pre>`,
    "Tipos de Input (Text, Password, Email, Button)": `
        <p>O <code>type</code> do input muda sua natureza lúdica: password oculta dados, button lida com cliques de ações.</p>
        <pre><code>&lt;input type="password" placeholder="Senha"&gt;</code></pre>`,
    "Seleções em Formulários (Radio, Checkbox, Select)": `
        <p>Oferecem opções de classe (radio), configurações de som (checkbox) e dropdown de idioma (select).</p>
        <pre><code>&lt;select&gt;&lt;option&gt;BR&lt;/option&gt;&lt;/select&gt;</code></pre>`,
    "Validação Nativa de Formulários": `
        <p>O HTML5 de forma rápida valida campos usando atributos nativos como <code>required</code> e <code>minlength</code>.</p>
        <pre><code>&lt;input type="text" required minlength="3"&gt;</code></pre>`,
    "Introdução à Acessibilidade (Atributos ARIA)": `
        <p>Fornecem orientações técnicas complementares para leitores de tela em leituras estruturadas.</p>
        <pre><code>&lt;div role="progressbar" aria-valuenow="70"&gt;&lt;/div&gt;</code></pre>`,
    "A tag <dialog> (Modais Nativos)": `
        <p>Injeta telas de pause e overlays de diálogo sem a necessidade de bibliotecas externas complexas.</p>
        <pre><code>&lt;dialog id="meuModal"&gt;&lt;p&gt;Pausado&lt;/p&gt;&lt;/dialog&gt;</code></pre>`,
    "A tag <canvas> (O Palco dos Jogos)": `
        <p>Interface vital para renderizar e desenhar sprites, HUDs e mundos em 2D usando JavaScript.</p>
        <pre><code>&lt;canvas id="tela" width="800" height="400"&gt;&lt;/canvas&gt;</code></pre>`,
    "SVG inline (<svg> e <path>)": `
        <p>Injeta desenhos vetoriais dinâmicos de alta performance para ícones de espadas, escudos e miras.</p>
        <pre><code>&lt;svg&gt;&lt;circle cx="50" cy="50" r="40" /&gt;&lt;/svg&gt;</code></pre>`,
    "Imagens Responsivas (<picture> e srcset)": `
        <p>Entrega os recursos mais leves para dispositivos pequenos e telas completas nos computadores.</p>
        <pre><code>&lt;picture&gt;\n  &lt;source media="(max-width: 600px)" srcset="mob.png"&gt;\n  &lt;img src="pc.png"&gt;\n&lt;/picture&gt;</code></pre>`,
    "Áudios Avançados (Atributos e Eventos de <audio>)": `
        <p>Injeta músicas de fundo (BGM) e efeitos (SFX) executados diretamente sob demandas de scripts.</p>
        <pre><code>&lt;audio id="musica" loop preload="auto"&gt;&lt;/audio&gt;</code></pre>`,
    "Pré-carregamento de Assets (preload e prefetch)": `
        <p>Evita telas pretas e atrasos no download de texturas e spritesheets ao trocar de níveis.</p>
        <pre><code>&lt;link rel="preload" href="sprites.png" as="image"&gt;</code></pre>`,
    "Iframe Avançado (<iframe> e Sandbox)": `
        <p>Incorpora dados em frames paralelos protegendo o contexto global com diretivas de sandbox.</p>
        <pre><code>&lt;iframe src="ranking.html" sandbox="allow-scripts"&gt;&lt;/iframe&gt;</code></pre>`,
    "Manipulação de Templates (<template> e <slot>)": `
        <p>Cria moldes invisíveis de blocos repetitivos clonados no DOM com dados mutáveis.</p>
        <pre><code>&lt;template id="card"&gt;&lt;div class="item"&gt;&lt;/div&gt;&lt;/template&gt;</code></pre>`,
    "Armazenamento no Navegador (O papel técnico do HTML5)": `
        <p>Sistemas como LocalStorage persistem saves, preferências e moedas do jogador sem uso de banco de dados.</p>
        <pre><code>localStorage.setItem("ultimoNivel", "Fase 5");</code></pre>`,
    "Componentes Web Nativos (Custom Elements)": `
        <p>Cria tags encapsuladas personalizadas como <code>&lt;barra-vida&gt;</code> com ciclos de vida isolados.</p>
        <pre><code>customElements.define("vida-heroi", VidaHeroi);</code></pre>`,
    "Acessibilidade de Teclado Avançada (tabindex e Foco)": `
        <p>Define a ordem mecânica de navegação via teclado, trazendo foco para botões ativados.</p>
        <pre><code>&lt;button tabindex="1"&gt;Iniciar&lt;/button&gt;</code></pre>`
};

export const conteudosCSS = {
    "Seletores Básicos e Combinadores": `
        <p>Os seletores e combinadores determinam com precisão cirúrgica quais elementos do DOM recebem estilo.</p>
        <pre><code>.hotbar-acoes &gt; .icone-item {\n  width: 48px;\n}</code></pre>`,
    "O Box Model (Modelo de Caixa)": `
        <p>Tudo no CSS é uma caixa composta por conteúdo, padding, border e margin. border-box é vital para travar tamanhos.</p>
        <pre><code>* { box-sizing: border-box; }</code></pre>`,
    "Cores e Backgrounds": `
        <p>Modifica paletas cromáticas com cores sólidas ou gradientes e redimensiona planos usando background-size.</p>
        <pre><code>.fundo { background-size: cover; }</code></pre>`,
    "Tipografia Web": `
        <p>Injeta fontes autorais de forma dinâmica controlando pesos, tamanhos e alturas de textos.</p>
        <pre><code>.titulo { font-family: 'Cinzel', serif; }</code></pre>`,
    "Unidades de Medida": `
        <p>Aborda escalas absolutas (px) e dinâmicas flexíveis ajustáveis de proporção (%, rem, vw, vh).</p>
        <pre><code>.hud { padding: 1.5rem; }</code></pre>`,
    "Display Básico": `
        <p>Controla se elementos são block (empilhados), inline (lado a lado) ou inline-block (híbrido flexível).</p>
        <pre><code>.slot { display: inline-block; }</code></pre>`,
    "Bordas e Arredondamentos": `
        <p>Desenha linhas limites e molda cantos circulares suaves em fotos e slots usando border-radius.</p>
        <pre><code>.avatar { border-radius: 50%; }</code></pre>`,
    "Sombras Simples": `
        <p>Molda relevos e profundidades de luz projetada em textos e cards usando box-shadow e text-shadow.</p>
        <pre><code>.texto { text-shadow: 2px 2px 0px #000; }</code></pre>`,
    "Estados Básicos (Pseudo-classes)": `
        <p>Intercepta ações do mouse ou teclado em botões através de estados dinâmicos essenciais nativos.</p>
        <pre><code>button:hover { background-color: #3b82f6; }</code></pre>`,
    "Variáveis CSS Nativas (Básico)": `
        <p>Armazena chaves de cores e tamanhos em raízes comuns globais reutilizadas em toda a folha.</p>
        <pre><code>:root { --cor-vida: #22c55e; }</code></pre>`,
    "Posicionamento (Position) e z-index": `
        <p>Muda a ordenação física entre os eixos cartesianos controlando as camadas de sobreposição tridimensionais.</p>
        <pre><code>.hud { position: fixed; z-index: 9000; }</code></pre>`,
    "Fundamentos do Flexbox": `
        <p>Distribui e alinha elementos em uma única coluna ou linha de forma adaptável e simplificada.</p>
        <pre><code>.alinhado { display: flex; justify-content: center; }</code></pre>`,
    "Flexbox Avançado": `
        <p>Gerencia quebras de linhas, expansões dinâmicas e reordenação visual de itens do inventário.</p>
        <pre><code>.grade { display: flex; flex-wrap: wrap; }</code></pre>`,
    "Fundamentos do CSS Grid": `
        <p>Define e organiza alinhamentos cartesianos em colunas e linhas bidimensionais robustas.</p>
        <pre><code>.tabuleiro { display: grid; grid-template-columns: repeat(8, 1fr); }</code></pre>`,
    "Pseudo-elementos (::before e ::after)": `
        <p>Injeta detalhes e ícones complementares no DOM sem necessidade de tags extras no seu código HTML.</p>
        <pre><code>.preco::before { content: "💰 "; }</code></pre>`,
    "Transições Suaves (Transitions)": `
        <p>Anima alterações visuais por cronometragem suave na placa gráfica com taxas perfeitas de quadros.</p>
        <pre><code>.vida { transition: width 0.4s ease; }</code></pre>`,
    "Transformações 2D (Transforms)": `
        <p>Modifica escalas, rotações e distorções vetoriais aceleradas por GPU nos menus e interações de cartas.</p>
        <pre><code>.carta:hover { transform: translateY(-10px) scale(1.1); }</code></pre>`,
    "Design Responsivo (Media Queries)": `
        <p>Adapta e reorganiza o layout alterando estilos dinamicamente de acordo com larguras das telas.</p>
        <pre><code>@media (max-width: 768px) { .menu { flex-direction: column; } }</code></pre>`,
    "Pseudo-classes Avançadas": `
        <p>Fórmulas de filtragem cirúrgicas sobre posições pares e ímpares de cadastros ou negações lógicas.</p>
        <pre><code>.rank:nth-child(even) { background: #111; }</code></pre>`,
    "Filtros Gráficos (Filters e Blend Modes)": `
        <p>Misturas cromáticas de camadas, borrados em modais (backdrop-filter) e saturação de cores direta.</p>
        <pre><code>.blur-overlay { backdrop-filter: blur(6px); }</code></pre>`,
    "Animações Complexas com Keyframes": `
        <p>Timelines detalhadas livres de Javascript que rodam loops infinitos de poções flutuantes ou moedas.</p>
        <pre><code>@keyframes flutuar { 0% { transform: translateY(0); } }</code></pre>`,
    "Transformações 3D": `
        <p>Extrapola limites planos aplicando rotações holográficas em eixos tridimensionais.</p>
        <pre><code>.card-3d { transform: rotateX(20deg); }</code></pre>`,
    "CSS Grid Layout Avançado": `
        <p>Projeta bento-grids e estruturas interativas usando grids nomeados e frações flexíveis minmax.</p>
        <pre><code>.bento { grid-template-areas: "header header" "sidebar content"; }</code></pre>`,
    "Funções Matemáticas": `
        <p>Realiza operações dinâmicas diretamente no estilo integrando pixels e percentagens com calc e clamp.</p>
        <pre><code>.chat { height: calc(100vh - 80px); }</code></pre>`,
    "Clip-path e Formas Complexas": `
        <p>Chanfraduras, polígonos, miras e detalhes de ficção científica criados fatiando caixas em vetores.</p>
        <pre><code>.barra { clip-path: polygon(0 0, 100% 0, 88% 100%); }</code></pre>`,
    "Scroll Snapping e Scrollbars Estilizadas": `
        <p>Magnética e travamento de carrosséis de seleção, além de customização completa de barras de rolagens.</p>
        <pre><code>.carrossel { scroll-snap-type: x mandatory; }</code></pre>`,
    "Container Queries (@container)": `
        <p>Responsa e formatação local que respondem a largura dos limites do componente pai direto.</p>
        <pre><code>@container (max-width: 350px) { .card { flex-direction: column; } }</code></pre>`,
    "Arquitetura CSS (Metodologia BEM)": `
        <p>Estruturação rigorosa e clara de classes aplicando blocos, elementos e modificadores legíveis.</p>
        <pre><code>.hud-card__avatar--ativo { ... }</code></pre>`,
    "Efeitos Visuais Modernos (Glassmorphism e Neumorphism)": `
        <p>Painéis translúcidos em desfoques finos ou modelagens 3D baseadas em jogo de luz e sombras duplas.</p>
        <pre><code>.painel-glass { background: rgba(15,23,42,0.45); backdrop-filter: blur(14px); }</code></pre>`,
    "Integração de Variáveis CSS com JavaScript": `
        <p>Controladores JS atualizando variáveis CSS nativas em tempo real para sincronização visual suave.</p>
        <pre><code>elemento.style.setProperty('--vida', '45%');</code></pre>`
};

export const conteudosJS = {
    "Variáveis e Constantes (let e const)": `
        <p>Recipientes de memória para dados mutáveis (let), como coordenadas, ou fixos (const), como a gravidade.</p>
        <pre><code>const GRAVIDADE = 0.8;\nlet personagemX = 100;</code></pre>`,
    "Tipos de Dados Essenciais": `
        <p>Diferentes naturezas de dados: Numbers para física, Strings para textos de NPCs e Booleans para regras.</p>
        <pre><code>let pontuacao = 0;\nlet estaNoChao = true;</code></pre>`,
    "Operadores Matemáticos e Lógicos": `
        <p>Símbolos para cálculos de vetores (+, -, *, /) e tomadas de decisões compostas (&&, ||).</p>
        <pre><code>if (apertouPulo && estaNoChao) { f(); }</code></pre>`,
    "Estruturas Condicionais (if, else, else if)": `
        <p>Bifurcações que permitem ao jogo interpretar situações específicas e tomar decisões inteligentes.</p>
        <pre><code>if (vidaHeroi <= 0) { gameOver(); }</code></pre>`,
    "Estruturas de Repetição (for e while)": `
        <p>Ciclos automatizados essenciais para gerar inimigos e processar filas grandes de dados.</p>
        <pre><code>for (let i = 0; i < total; i++) { criarZumbi(); }</code></pre>`,
    "Introdução às Funções": `
        <p>Módulos portáteis agrupados por nome que recebem parâmetros e calculam resultados sob demanda.</p>
        <pre><code>function mover(pos, vel) { return pos + vel; }</code></pre>`,
    "Arrays Simples (Listas)": `
        <p>Lista armazenada em sequência para gerenciar inventários de armas e moedas apanhadas.</p>
        <pre><code>let inventario = ["Espada", "Escudo"];\ninventario.push("Poção");</code></pre>`,
    "Objetos Básicos (Chave e Valor)": `
        <p>Agrupadores de propriedades e métodos estruturados como tabelas de fichas de personagens de RPG.</p>
        <pre><code>const heroi = {\n  nome: "Arqueiro",\n  receberDano: function(q) { this.vida-=q; }\n};</code></pre>`,
    "Manipulação Básica do DOM (getElementById)": `
        <p>Mecanismo que busca e conecta idenficadores HTML ao cérebro lógico do JavaScript.</p>
        <pre><code>const canvas = document.getElementById("tela-jogo");</code></pre>`,
    "Eventos de Teclado e Mouse (addEventListener)": `
        <p>Radares discretos vigiando e reagindo a cliques e pressionamento de teclas direcionais.</p>
        <pre><code>document.addEventListener("keydown", (e) => { mover(e); });</code></pre>`,
    "O Game Loop e requestAnimationFrame": `
        <p>Ciclo fundamental que recalcula vetores, resolve colisões e desenha os gráficos continuamente na tela.</p>
        <pre><code>function gameLoop() { update(); draw(); requestAnimationFrame(gameLoop); }</code></pre>`,
    "Delta Time (Movimento Suave)": `
        <p>Vetor temporal infinitesimal que calibra velocidades para sincronizar movimentações em computadores diferentes.</p>
        <pre><code>let deltaTime = (tempoAtual - tempoAnterior) / 1000;</code></pre>`,
    "Classes e Construtores (POO)": `
        <p>Estruturação de plantas e moldes de programação para instanciar moedas e inimigos independentes.</p>
        <pre><code>class Inimigo {\n  constructor(x, y) { this.x=x; }\n}</code></pre>`,
    "Física de Pulo e Gravidade": `
        <p>Acelerações contínuas aplicadas em vetores verticais que moldam arcos parabólicos realistas de pulos.</p>
        <pre><code>velocidadeY += gravidade;\njogador.y += velocidadeY;</code></pre>`,
    "Colisão Retangular (AABB)": `
        <p>Cálculo matemático geométrico leve que checa intersecções de caixas de colisão de forma veloz.</p>
        <pre><code>function colide(a, b) {\n  return (a.x < b.x + b.w && a.x + a.w > b.x);\n}</code></pre>`,
    "Animação e Spritesheets": `
        <p>Corta e desenha quadros sequenciais de spritesheets gigantes na tela com o pincel do Canvas.</p>
        <pre><code>ctx.drawImage(img, frame * 32, 0, 32, 32, x, y, 32, 32);</code></pre>`,
    "Controle de Estados Simples": `
        <p>Máquinas lógica de estados finitas ("IDLE", "RUN", "JUMP") que blindam bugs de animações sobrepostas.</p>
        <pre><code>let estadoAtual = "IDLE";</code></pre>`,
    "Vetores e Movimentação 2D": `
        <p>Tratamentos trigonométricos sobre senos e cossenos para navegações flutuantes e miras omnidirecionais.</p>
        <pre><code>let velX = Math.cos(angulo) * magnitude;</code></pre>`,
    "Arrays e Gerenciamento de Entidades": `
        <p>Varrer, atualizar estados e remover projéteis destruídos de coletores principais de dados.</p>
        <pre><code>tiros = tiros.filter(t => t.ativo);</code></pre>`,
    "Modularização (Módulos JS)": `
        <p>Divisão e trancamento sequencial de blocos inteiros usando directivas organizadas de import/export.</p>
        <pre><code>import { Zumbi } from './Inimigo.js';</code></pre>`,
    "Callbacks e Event Loop": `
        <p>Fila única assíncrona do JS que agenda retornos de tarefas longas liberando a interface principal.</p>
        <pre><code>setTimeout(() => { dispararArmadilha(); }, 2000);</code></pre>`,
    "Promises (Promessas)": `
        <p>Contrato sequencial para carregamento assíncrono de dados externos com resoluções futuras.</p>
        <pre><code>function carregar() { return new Promise((res) => res()); }</code></pre>`,
    "Async / Await": `
        <p>Açúcar sintático de alta perisclépia para organizar comandos assíncronos como fluxos síncronos legíveis.</p>
        <pre><code>const dados = await baixarAssets();</code></pre>`,
    "Recursividade": `
        <p>Processamento autônomo elegante onde um método executa a si mesmo até encontrar limites firmes.</p>
        <pre><code>function busca(nivel) { if (nivel == 5) return; busca(nivel+1); }</code></pre>`,
    "Memory Management (Garbage Collector)": `
        <p>Coletor autônomo de lixo do navegador que limpa dados soltos sem referência economizando recursos de RAM.</p>
        <pre><code>let cache = { x: 1 }; cache = null; // Liberado</code></pre>`
};

export const desafiosColecao = {
  html: {
    iniciante: {
      "Conceito de Tags": {
        enunciado1: "Identifique a sintaxe correta utilizada para abrir e fechar um elemento em um documento HTML.",
        opcoes: [
          "a) [p]Meu parágrafo[/p]",
          "b) <p>Meu parágrafo<p>",
          "c) {p}Meu parágrafo{/p}",
          "d) <p>Meu parágrafo</p>",
          "e) </p>Meu parágrafo<p>"
        ],
        respostaMultipla: 3,
        enunciado2: "A linguagem HTML utiliza sinais de 'menor que' e 'maior que' para definir o início de um elemento. O fechamento é igual à abertura com uma barra oblíqua (/) inicial.",
        questaoPratica: "Um desenvolvedor tentou criar um botão e um parágrafo, mas errou no fechamento. Corrija o código base abaixo:",
        codigoInicial: "<button>Clique em mim<button>\n<p>Este é um texto de aviso importante.<p>",
        correta: "<button>Clique em mim</button>\n<p>Este é um texto de aviso importante.</p>"
      },
      "Estrutura Global": {
        enunciado1: "Qual é a tag raiz que envolve todo o conteúdo de uma página HTML?",
        opcoes: [
          "a) <head>",
          "b) <body>",
          "c) <html>",
          "d) <main>",
          "e) <!DOCTYPE html>"
        ],
        respostaMultipla: 2,
        enunciado2: "O head agrupa metadados e o body abriga elementos visíveis. Tudo fica encapsulado na seção raiz html.",
        questaoPratica: "Corrija a estrutura misturada abaixo reorganizando head, body e seus respectivos filhos nos locais devidos:",
        codigoInicial: "<!DOCTYPE html>\n<html>\n  <body>\n    <title>Minha Primeira Página</title>\n  </body>\n  <head>\n    <h1>Bem-vindo ao meu site!</h1>\n    <p>Aqui você encontrará meu portfólio.</p>\n  </head>\n</html>",
        correta: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Minha Primeira Página</title>\n  </head>\n  <body>\n    <h1>Bem-vindo ao meu site!</h1>\n    <p>Aqui você encontrará meu portfólio.</p>\n  </body>\n</html>"
      },
      "Tags de Texto": {
        enunciado1: "Para definir o título de maior importância (nível 1) em um documento HTML, qual tag usar?",
        opcoes: [
          "a) <title>",
          "b) <header>",
          "c) <strong>",
          "d) <h1>",
          "e) <h6>"
        ],
        respostaMultipla: 3,
        enunciado2: "Usamos os títulos h1 a h6 representados na ordem descendente de relevância estética.",
        questaoPratica: "O código abaixo tem um cruzamento incorreto de tags de título h2 e parágrafo. Corrija fechando-as devidamente:",
        codigoInicial: "<h2>O que é o Universo?<p>O universo é tudo o que existe, incluindo espaço, tempo e matéria.</h2></p>",
        correta: "<h2>O que é o Universo?</h2>\n<p>O universo é tudo o que existe, incluindo espaço, tempo e matéria.</p>"
      },
      "Meta Tags Técnicas": {
        enunciado1: "Qual é a tag para certificar caracteres especiais e acentuações no idioma português?",
        opcoes: [
          "a) <meta name=\"viewport\" content=\"width=device-width\">",
          "b) <meta charset=\"UTF-8\">",
          "c) <meta language=\"pt-br\">",
          "d) <link rel=\"charset\" href=\"UTF-8\">",
          "e) <title charset=\"UTF-8\">"
        ],
        respostaMultipla: 1,
        enunciado2: "O padrão universal de caracteres das páginas web modernas é o UTF-8.",
        questaoPratica: "Injeta a meta tag charset faltando no cabeçalho invisível para corrigir as letras especiais:",
        codigoInicial: "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n    <title>Painel de Controle</title>\n</head>\n<body>\n    <h1>Configurações do Usuário</h1>\n</body>\n</html>",
        correta: "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n    <title>Painel de Controle</title>\n    <meta charset=\"UTF-8\">\n</head>\n<body>\n    <h1>Configurações do Usuário</h1>\n</body>\n</html>"
      },
      "Atributos e IDs": {
        enunciado1: "Sobre o atributo id, é correto afirmar que:",
        opcoes: [
          "a) Ele pode ser usado múltiplas vezes com o mesmo valor na mesma página.",
          "b) Ele serve exclusivamente para mudar a cor do texto.",
          "c) Seu valor deve ser único e não se repetir na página.",
          "d) Ele é obrigatório em todas as tags.",
          "e) Ele substitui a necessidade de usar classes."
        ],
        respostaMultipla: 2,
        enunciado2: "CPF estrito de elementos. Classes aceitam múltiplos focos, mas os IDs são únicos por documento.",
        questaoPratica: "Organize as caixas de avisos abaixo atribuindo IDs únicos e semanticamente limpos:",
        codigoInicial: "<div id=\"caixa-alerta\">\n  <p>Sucesso: Usuário cadastrado!</p>\n</div>\n<div id=\"caixa-alerta\">\n  <p>Aviso: Verifique seu e-mail.</p>\n</div>\n<div id=\"caixa-alerta\">\n  <p>Erro: Senha incorreta.</p>\n</div>",
        correta: "<div id=\"alerta-sucesso\">\n  <p>Sucesso: Usuário cadastrado!</p>\n</div>\n<div id=\"alerta-aviso\">\n  <p>Aviso: Verifique seu e-mail.</p>\n</div>\n<div id=\"alerta-erro\">\n  <p>Erro: Senha incorreta.</p>\n</div>"
      }
    },
    intermediario: {
      "Elementos Semânticos (Header, Nav, Footer)": {
        enunciado1: "Qual elemento semântico é especificamente desenhado para agrupar os principais links de navegação?",
        opcoes: [
          "a) <menu>",
          "b) <header>",
          "c) <nav>",
          "d) <footer>",
          "e) <links>"
        ],
        respostaMultipla: 2,
        enunciado2: "Usa-se a tag nav para links e mapas de navegação rápida de ecrãs.",
        questaoPratica: "Troque os blocos genéricos de cabeçalho por tags semânticas limpas: header e nav:",
        codigoInicial: "<div id=\"cabecalho\">\n  <h1>Meu Portfólio</h1>\n  <div id=\"menu-principal\">\n    <a href=\"/home\">Início</a>\n  </div>\n</div>",
        correta: "<header>\n  <h1>Meu Portfólio</h1>\n  <nav>\n    <a href=\"/home\">Início</a>\n  </nav>\n</header>"
      }
    }
  },
  css: {
    iniciante: {
      "Seletores Básicos e Combinadores": {
        enunciado1: "No CSS, qual símbolo representa uma classe?",
        opcoes: [
          "a) #",
          "b) .",
          "c) *",
          "d) @",
          "e) >"
        ],
        respostaMultipla: 1,
        enunciado2: "Usamos ponto (.) para classes estruturais e cerquilhas (#) para IDs.",
        questaoPratica: "Estilize os parágrafos com a classe 'texto-alerta' para que fiquem vermelhos (#ff0000):",
        codigoInicial: "paragrafo {\n  color: red;\n}",
        correta: ".texto-alerta {\n  color: #ff0000;\n}"
      }
    }
  },
  js: {
    iniciante: {
      "Variáveis e Constantes (let e const)": {
        enunciado1: "Palavra preferencial para declarar valores imutáveis no JS:",
        opcoes: [
          "a) let",
          "b) var",
          "c) fixed",
          "d) const",
          "e) state"
        ],
        respostaMultipla: 3,
        enunciado2: "A palavra const previne contra modificações ou vazamentos mecânicos de reatribuição.",
        questaoPratica: "Declare uma constante chamada GRAVIDADE de valor invariável 9.8:",
        codigoInicial: "",
        correta: "const GRAVIDADE = 9.8;"
      }
    }
  }
};

export const missoesProjetos = [
  {
    titulo: "Missão 1: Calculadora",
    instrucoes: `<b>Arquivo: index.html</b><br>
    1. Crie o visor: <code>&lt;input id="visor" readonly&gt;</code>.<br>
    2. Crie botões de número com ações rápidas: <code>&lt;button onclick="acrescentar('7')"&gt;7&lt;/button&gt;</code>.<br>
    3. Crie botões matemáticos de operadores, botão de resposta (=) calculando com eval e limpar (C) alterando inner HTML.`,
    codigoInicial: `<input id="visor" readonly>\n`,
    correta: `<input id="visor" readonly><button onclick="acrescentar('7')">7</button><button onclick="acrescentar('+')">+</button><button onclick="limpar()">C</button><button onclick="calcular()">=</button>function acrescentar(valor){let tela = document.getElementById('visor');tela.value = tela.value + valor;}function limpar(){let tela = document.getElementById('visor');tela.value = "";}function calcular(){let tela = document.getElementById('visor');tela.value = eval(tela.value);}`
  },
  {
    titulo: "Missão 2: Jogo da Velha",
    instrucoes: `<b>Arquivo: script.js</b><br>
    1. Crie uma matriz vazia rastreando posições ocupadas: <code>let tabuleiro = ["", "", "", "", "", "", "", "", ""];</code>.<br>
    2. Defina o jogador atual: <code>let turno = "x";</code>.<br>
    3. Crie <code>function jogar(id_botao)</code> avaliando se já há dados nessa coordenada antes de aplicar ações.`,
    codigoInicial: `\n`,
    correta: `let tabuleiro=["","","","","","","","",""];let turno="x";function jogar(id_botao){if(tabuleiro[id_botao]!==""){return;}tabuleiro[id_botao]=turno;document.getElementById(id_botao).innerText=turno;}`
  }
];

// Emulação segura de localStorage para evitar quebras em iframes com sandbox restrito
if (!window.gamedevSafeStorage) {
  window.gamedevSafeStorage = {
    getItem: (key) => {
      try { return localStorage.getItem(key); } catch (e) { return window["_fallback_" + key] || null; }
    },
    setItem: (key, val) => {
      try { localStorage.setItem(key, val); } catch (e) { window["_fallback_" + key] = val; }
    },
    removeItem: (key) => {
      try { localStorage.removeItem(key); } catch (e) { delete window["_fallback_" + key]; }
    }
  };
}

// === ENGINE DE RENDERIZAÇÃO E APP STATE ===
const state = {
  aluno: (() => {
    try {
      const v = window.gamedevSafeStorage.getItem("aluno_gamedev");
      return v ? JSON.parse(v) : null;
    } catch(e) {
      return null;
    }
  })(),
  authView: 'login', // 'login' ou 'cadastro'
  mainView: 'enciclopedia', // 'enciclopedia', 'desafios', 'missoes'
  selectedTech: 'html', // 'html', 'css', 'js'
  selectedLevel: 'iniciante', // 'iniciante', 'intermediario', 'avancado'
  
  modalType: null, // null, 'estudo', 'desafio', 'missao'
  activeTopic: '',
  opcaoTeorica: null,
  respostaPratica: '',
  
  // Missão ativa
  activeMissionIndex: null,
  activeMissionTab: 'html', // 'html', 'css', 'js'
  missionHtmlCode: '',
  missionCssCode: '',
  missionJsCode: '',
  
  loading: false,
  errorMsg: ''
};

// Fallback Firestore
let db = null;
try {
  const app = initializeApp({
    apiKey: "AIzaSyAtmCs6z1IuRh_LCneG4Zdb502lZOwvxyg",
    authDomain: "enciclopedia-gamdev.firebaseapp.com",
    projectId: "enciclopedia-gamdev",
    storageBucket: "enciclopedia-gamdev.firebasestorage.app",
    messagingSenderId: "1005763934082",
    appId: "1:1005763934082:web:a92064c1bd9cf05385819b"
  });
  db = getFirestore(app);
} catch (err) {
  console.warn("Firestore offline. Salvamento local em cache ativo.", err);
}

// Persistência local do Aluno
function commitAlunoState(aluno) {
  state.aluno = aluno;
  if (aluno) {
    window.gamedevSafeStorage.setItem("aluno_gamedev", JSON.stringify(aluno));
  } else {
    window.gamedevSafeStorage.removeItem("aluno_gamedev");
  }
  render();
}

// === INTERAÇÕES FIREBASE / LOCAL ===
async function handleCadastro(nome) {
  if (!nome.trim()) return alert("Insira um nome válido.");
  state.loading = true;
  render();
  
  const pin = Math.floor(1000 + Math.random() * 9000).toString();
  const novoAluno = { nome, codigo: pin, progresso: [] };
  
  try {
    if (db) {
      await setDoc(doc(db, "alunos", pin), novoAluno);
    }
    commitAlunoState(novoAluno);
    alert(`Cadastro Completo! Guarde o seu PIN de acesso seguro: ${pin}`);
  } catch (err) {
    console.error(err);
    commitAlunoState(novoAluno);
    alert(`Salvo localmente! PIN temporário gerado para o aparelho: ${pin}`);
  } finally {
    state.loading = false;
    render();
  }
}

async function handleLogin(nome, codigo) {
  if (!nome.trim() || !codigo.trim()) return alert("Preencha todos os campos.");
  state.loading = true;
  render();
  
  try {
    if (db) {
      const snap = await getDoc(doc(db, "alunos", codigo));
      if (snap.exists()) {
        const data = snap.data();
        if (data.nome.toLowerCase() === nome.toLowerCase()) {
          commitAlunoState({
            nome: data.nome,
            codigo: data.codigo,
            progresso: data.progresso || []
          });
          state.loading = false;
          render();
          return;
        }
      }
    }
    // Fallback local caso offline ou cadastrado localmente
    const localVal = window.gamedevSafeStorage.getItem("aluno_gamedev");
    const local = localVal ? JSON.parse(localVal) : null;
    if (local && local.codigo === codigo && local.nome.toLowerCase() === nome.toLowerCase()) {
      commitAlunoState(local);
    } else {
      alert("Credenciais não encontradas ou inválidas. Tente fazer um novo cadastro se persistir.");
    }
  } catch (err) {
    alert("Falha de comunicação ou problemas locais ao checar logins.");
  } finally {
    state.loading = false;
    render();
  }
}

async function registrarConclusaoItem(titulo) {
  if (!state.aluno) return;
  if (state.aluno.progresso.includes(titulo)) return;
  
  state.aluno.progresso.push(titulo);
  commitAlunoState(state.aluno);
  
  try {
    if (db) {
      await updateDoc(doc(db, "alunos", state.aluno.codigo), {
        progresso: arrayUnion(titulo)
      });
    }
  } catch (err) {
    console.warn("Salvamento seguro em cache offline efetuado com sucesso.");
  }
  closeModal();
}

// === CONTROLES DO MODAL ===
function openTopicModal(topic) {
  state.modalType = 'estudo';
  state.activeTopic = topic;
  render();
}

function openChallengeModal(topicName) {
  state.modalType = 'desafio';
  state.activeTopic = topicName;
  state.opcaoTeorica = null;
  state.respostaPratica = '';
  render();
}

function openMissionModal(idx) {
  const missao = missoesProjetos[idx];
  state.modalType = 'missao';
  state.activeMissionIndex = idx;
  state.activeMissionTab = 'html';
  state.missionHtmlCode = `<!DOCTYPE html>\n<html lang="pt-br">\n  <head>\n    <meta charset="utf-8">\n  </head>\n  <body>\n    \n  </body>\n</html>`;
  state.missionCssCode = `/* Estilize os seletores aqui */\n`;
  state.missionJsCode = missao.codigoInicial || "";
  render();
}

function closeModal() {
  state.modalType = null;
  state.activeTopic = '';
  state.activeMissionIndex = null;
  render();
}

// === COMPILADORES E VERIFICADORES ===
function handleValidarDesafio() {
  const dic = desafiosColecao[state.selectedTech]?.[state.selectedLevel];
  const desafio = dic ? dic[state.activeTopic] : null;
  if (!desafio) return;
  
  if (state.opcaoTeorica === null) {
    return alert("⚠️ Escolha uma das opções na Parte Teórica.");
  }
  if (state.opcaoTeorica !== desafio.respostaMultipla) {
    return alert("❌ A resposta da Parte Teórica está incorreta.");
  }
  
  const userCode = state.respostaPratica.toLowerCase().replace(/\s+/g, " ");
  const exactCode = desafio.correta.toLowerCase().replace(/\s+/g, " ");
  
  if (userCode !== exactCode) {
    return alert("❌ Parte teórica em ordem, mas o código digitado possui erros de sintaxe ou tags incorretas.");
  }
  
  alert("🎉 Maravilhoso! Desafio de código cumprido com sucesso!");
  registrarConclusaoItem(state.activeTopic);
}

function handleValidarMissao() {
  const missao = missoesProjetos[state.activeMissionIndex];
  const compOutput = state.missionHtmlCode + state.missionCssCode + state.missionJsCode;
  
  const cleanUser = compOutput.toLowerCase().replace(/\s+/g, "").replace(/;/g, "").replace(/['"]/g, "");
  const cleanTarget = missao.correta.toLowerCase().replace(/\s+/g, "").replace(/;/g, "").replace(/['"]/g, "");
  
  if (cleanUser.includes(cleanTarget) || cleanUser === cleanTarget) {
    alert("🎉 Excelente! Você completou todas as diretrizes funcionais e lógicas desta missão!");
    registrarConclusaoItem(missao.titulo);
  } else {
    alert("❌ O algoritmo ou as tags implementadas ainda diferem das regras descritas pelo manual.");
  }
}

// === CENTRAL DE RENDER DO DOM ===
export function render() {
  const root = document.getElementById("root");
  if (!root) return;
  
  // Se não estiver logado
  if (!state.aluno) {
    root.innerHTML = renderAuthView();
    bindAuthEvents();
    window.gamedevAppLoaded = true;
    return;
  }
  
  root.innerHTML = renderMainDashboard();
  bindDashboardEvents();
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
  window.gamedevAppLoaded = true;
}

// Views HTML em Template Strings
function renderAuthView() {
  return `
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="bg-[#0f172a] border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
        <div class="absolute -top-12 -left-12 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div class="text-center mb-8 relative">
          <div class="w-16 h-16 bg-sky-500/10 rounded-2xl mx-auto flex items-center justify-center text-sky-400 mb-4 animate-pulse">
            <i data-lucide="gamepad-2" class="w-8 h-8"></i>
          </div>
          <h2 class="text-3xl font-black font-mono tracking-tight text-white">GAMEDEV ACADEMY</h2>
          <p class="text-slate-500 text-xs mt-1.5 font-mono">Painel Integrado de Aluno Digital v6.0</p>
        </div>
        
        <div class="flex bg-[#020617] border border-slate-800 rounded-xl p-1 mb-6">
          <button id="tab-login" class="flex-1 py-2 rounded-lg text-xs font-bold font-mono tracking-wider transition-all uppercase ${state.authView === 'login' ? 'bg-sky-500 text-slate-950 shadow-md' : 'text-slate-500 hover:text-slate-300'}">Fazer Login</button>
          <button id="tab-cadastro" class="flex-1 py-2 rounded-lg text-xs font-bold font-mono tracking-wider transition-all uppercase ${state.authView === 'cadastro' ? 'bg-sky-500 text-slate-950 shadow-md' : 'text-slate-500 hover:text-slate-300'}">Registrar Aluno</button>
        </div>
        
        <form id="auth-form" class="space-y-4">
          <div>
            <label class="block text-xxs uppercase font-mono tracking-wider text-slate-500 mb-1.5">Insira o seu Nome de Aluno:</label>
            <div class="relative">
              <i data-lucide="user" class="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-500"></i>
              <input type="text" id="auth-nome" required placeholder="Ex: Arqueiro Verde" class="w-full bg-[#020617] border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white text-sm outline-none focus:border-sky-500 transition-colors">
            </div>
          </div>
          
          ${state.authView === 'login' ? `
            <div>
              <label class="block text-xxs uppercase font-mono tracking-wider text-slate-500 mb-1.5">Insira seu PIN Seguro:</label>
              <div class="relative">
                <i data-lucide="lock" class="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-500"></i>
                <input type="password" id="auth-pin" required placeholder="4 dígitos" class="w-full bg-[#020617] border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white text-sm outline-none focus:border-sky-500 transition-colors">
              </div>
            </div>
          ` : ''}
          
          <button type="submit" class="w-full py-3.5 bg-sky-500 hover:bg-sky-450 text-slate-950 font-black font-mono uppercase tracking-wider rounded-xl text-xs flex justify-center items-center gap-2 shadow-lg transition-transform active:scale-98">
            <span>${state.loading ? 'Processando...' : (state.authView === "login" ? "Entrar na Academia ✔️" : "Criar Minha Matrícula 🚀")}</span>
          </button>
        </form>
      </div>
    </div>
  `;
}

function renderMainDashboard() {
  const isConcluidoItem = (titulo) => state.aluno.progresso.includes(titulo);
  
  return `
    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- Cabeçalho Principal -->
      <header class="flex flex-col md:flex-row justify-between items-center bg-[#0f172a] border border-slate-800/80 rounded-3xl p-6 mb-8 gap-5 relative overflow-hidden">
        <div class="flex items-center gap-4 relative">
          <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
            <i data-lucide="swatchbook" class="w-6 h-6"></i>
          </div>
          <div>
            <h1 class="text-xl md:text-2xl font-black font-sans text-white tracking-tight leading-none uppercase">PLAFATORMA GAMEDEV v6.0</h1>
            <p class="text-xs text-slate-500 mt-1.5 font-mono">Consola Unificada & Material Técnico de Estudo</p>
          </div>
        </div>
        
        <div class="flex items-center gap-4 bg-[#020617] p-2.5 rounded-2xl border border-slate-800 w-full md:w-auto justify-between md:justify-start">
          <div class="pl-2">
            <span class="block text-xxs uppercase font-mono tracking-wider text-slate-500">Aluno Autenticado</span>
            <span class="text-white font-mono text-xs font-bold block mt-0.5">${state.aluno.nome} <span class="text-sky-400">[PIN: ${state.aluno.codigo}]</span></span>
          </div>
          <button id="btn-logout" class="p-2 border border-rose-500/20 bg-rose-500/5 hover:bg-rose-500 hover:text-white rounded-xl text-rose-400 transition-colors cursor-pointer">
            <i data-lucide="log-out" class="w-4.5 h-4.5"></i>
          </button>
        </div>
      </header>

      <!-- Abas de Navegação -->
      <nav class="flex justify-center bg-[#0f172a] border border-slate-800/60 rounded-2xl p-1.5 mb-8">
        <div class="flex bg-[#020617] p-1 rounded-xl gap-1 w-full max-w-2xl">
          <button id="tab-nav-enciclopedia" class="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl font-mono text-xs md:text-sm font-bold tracking-wide transition-all ${state.mainView === 'enciclopedia' ? 'bg-[#38bdf8] text-[#020617] shadow-lg shadow-[#38bdf8]/20 font-black' : 'text-slate-500 hover:text-slate-300'}">
            <i data-lucide="book-open" class="w-4 h-4"></i><span>Enciclopédia</span>
          </button>
          <button id="tab-nav-desafios" class="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl font-mono text-xs md:text-sm font-bold tracking-wide transition-all ${state.mainView === 'desafios' ? 'bg-[#38bdf8] text-[#020617] shadow-lg shadow-[#38bdf8]/20 font-black' : 'text-slate-500 hover:text-slate-300'}">
            <i data-lucide="target" class="w-4 h-4"></i><span>Desafios</span>
          </button>
          <button id="tab-nav-missoes" class="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl font-mono text-xs md:text-sm font-bold tracking-wide transition-all ${state.mainView === 'missoes' ? 'bg-[#38bdf8] text-[#020617] shadow-lg shadow-[#38bdf8]/20 font-black' : 'text-slate-500 hover:text-slate-300'}">
            <i data-lucide="rocket" class="w-4 h-4"></i><span>Missões</span>
          </button>
        </div>
      </nav>

      <!-- Filtros de Tech e Dificuldade (Se aplicável nas tabs de Estudo e Desafio) -->
      ${(state.mainView === 'enciclopedia' || state.mainView === 'desafios') ? `
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-[#0f172a]/40 p-4 rounded-2xl border border-slate-800/60 mb-6 gap-4">
          <div class="flex border-b border-slate-800/60 w-full lg:w-auto">
            <button id="btn-tech-html" class="flex items-center gap-2 px-6 py-3 font-bold text-sm transition-colors rounded-t-lg ${state.selectedTech === 'html' ? 'bg-rose-600/10 border-b-2 border-rose-500 text-rose-400' : 'text-slate-500 hover:text-slate-300'}">
              <span>HTML5</span>
            </button>
            <button id="btn-tech-css" class="flex items-center gap-2 px-6 py-3 font-bold text-sm transition-colors rounded-t-lg ${state.selectedTech === 'css' ? 'bg-sky-600/10 border-b-2 border-[#38bdf8] text-[#38bdf8]' : 'text-slate-500 hover:text-slate-300'}">
              <span>CSS3</span>
            </button>
            <button id="btn-tech-js" class="flex items-center gap-2 px-6 py-3 font-bold text-sm transition-colors rounded-t-lg ${state.selectedTech === 'js' ? 'bg-amber-500/10 border-b-2 border-amber-500 text-amber-500' : 'text-slate-500 hover:text-slate-300'}">
              <span>JavaScript</span>
            </button>
          </div>

          <div class="flex bg-[#020617] rounded-full p-1 border border-slate-800 self-start lg:self-auto overflow-x-auto max-w-full">
            <button id="lvl-iniciante" class="px-5 py-1.5 rounded-full text-xxs md:text-xs font-bold font-mono tracking-wider transition-all uppercase ${state.selectedLevel === 'iniciante' ? (state.mainView === 'desafios' ? 'bg-amber-500 text-slate-950' : 'bg-[#38bdf8] text-[#020617]') : 'text-slate-500 hover:text-slate-300'}">Iniciante</button>
            <button id="lvl-intermediario" class="px-5 py-1.5 rounded-full text-xxs md:text-xs font-bold font-mono tracking-wider transition-all uppercase ${state.selectedLevel === 'intermediario' ? (state.mainView === 'desafios' ? 'bg-amber-500 text-slate-950' : 'bg-[#38bdf8] text-[#020617]') : 'text-slate-500 hover:text-slate-300'}">Intermediário</button>
            <button id="lvl-avancado" class="px-5 py-1.5 rounded-full text-xxs md:text-xs font-bold font-mono tracking-wider transition-all uppercase ${state.selectedLevel === 'avancado' ? (state.mainView === 'desafios' ? 'bg-amber-500 text-slate-950' : 'bg-[#38bdf8] text-[#020617]') : 'text-slate-500 hover:text-slate-300'}">Avançado</button>
          </div>
        </div>
      ` : ''}

      <!-- Conteúdo da Abas -->
      <main class="space-y-6">
        ${state.mainView === 'enciclopedia' ? renderEnciclopedia() : ''}
        ${state.mainView === 'desafios' ? renderDesafios() : ''}
        ${state.mainView === 'missoes' ? renderMissoes() : ''}
      </main>

      <!-- Modais Renderizados -->
      ${state.modalType ? renderModals() : ''}

      <!-- Footer Progresso -->
      <footer class="mt-12 bg-[#0f172a] border border-slate-800/80 rounded-3xl p-6 relative overflow-hidden shadow-xl">
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-3xl -z-10"></div>
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800/60">
          <div>
            <h3 class="text-white font-bold text-base uppercase font-mono tracking-tight">O seu Progresso Evolutivo</h3>
            <p class="text-slate-400 text-xs mt-1">Conquiste desafios reais de programação e preencha a sua caderneta de medalhas.</p>
          </div>
          <div class="flex gap-4 items-center animate-fade-in">
            <div class="text-center bg-[#020617] border border-slate-850 rounded-xl px-4 py-2">
              <span class="block text-[9px] uppercase text-slate-400 font-bold tracking-wider">Módulos Solucionados</span>
              <span class="text-[#38bdf8] font-mono font-bold text-sm block mt-0.5">${state.aluno.progresso.length} Concluídos</span>
            </div>
            <div class="text-center bg-[#020617] border border-slate-850 rounded-xl px-4 py-2">
              <span class="block text-[9px] uppercase text-slate-400 font-bold tracking-wider">Trilhas de Estudo</span>
              <span class="text-amber-400 font-mono font-bold text-sm block mt-0.5">HTML / CSS / JS</span>
            </div>
          </div>
        </div>
        
        <div class="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 bg-[#020617]/50 rounded-2xl border border-slate-800/80 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
              <i data-lucide="book-open" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="block text-xxs uppercase font-bold text-slate-400 tracking-wider">Estudo Ativo</span>
              <span class="text-white text-xs font-semibold block mt-0.5">Wiki Completo</span>
            </div>
          </div>
          
          <div class="p-4 bg-[#020617]/50 rounded-2xl border border-slate-800/80 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <i data-lucide="flame" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="block text-xxs uppercase font-bold text-slate-400 tracking-wider">Algoritmos</span>
              <span class="text-white text-xs font-semibold block mt-0.5">Prática Direta</span>
            </div>
          </div>

          <div class="p-4 bg-[#020617]/50 rounded-2xl border border-slate-800/80 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <i data-lucide="award" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="block text-xxs uppercase font-bold text-slate-400 tracking-wider">Local Auth</span>
              <span class="text-emerald-400 text-xs font-semibold block mt-0.5">Sincronizado</span>
            </div>
          </div>

          <div class="p-4 bg-[#020617]/50 rounded-2xl border border-slate-800/80 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <i data-lucide="gamepad-2" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="block text-xxs uppercase font-bold text-slate-400 tracking-wider">Game Engine</span>
              <span class="text-white text-xs font-semibold block mt-0.5">Módulos Livres</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `;
}

// Renderização das sub-telas de listagem
function renderEnciclopedia() {
  const list = dbColecaoTopicos[state.selectedTech][state.selectedLevel] || [];
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      ${list.map((topico, idx) => {
        const concluido = state.aluno.progresso.includes(topico);
        return `
          <div data-topico="${topico}" class="card-tema group bg-[#0f172a]/50 border border-slate-800 rounded-2xl p-5 hover:border-sky-400 hover:bg-[#0f172a] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[160px] relative shadow-lg">
            <div class="flex justify-between items-start">
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-mono">${String(idx + 1).padStart(2, '0')}</div>
              ${concluido ? `
                <div class="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded uppercase border border-emerald-500/20 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span>Concluído</span>
                </div>
              ` : `
                <div class="px-2 py-1 bg-slate-800/40 text-slate-500 text-[10px] font-bold rounded uppercase flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                  <span>Disponível</span>
                </div>
              `}
            </div>
            
            <div class="mt-4">
              <h3 class="text-white font-bold text-sm md:text-base leading-tight group-hover:text-sky-400 transition-colors">${topico}</h3>
              <p class="text-[11px] text-slate-500 mt-1.5">Módulo para a trilha conceitual de ${state.selectedTech.toUpperCase()}.</p>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderDesafios() {
  const dbTech = desafiosColecao[state.selectedTech]?.[state.selectedLevel] || {};
  const chList = Object.keys(dbTech);
  
  if (chList.length === 0) {
    return `
      <div class="col-span-full py-12 text-center text-slate-500 font-mono bg-[#0f172a]/30 border border-slate-800 rounded-2xl">
        🛸 Nenhum desafio cadastrado nesta categoria de nível ainda. Explore outros módulos!
      </div>
    `;
  }
  
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      ${chList.map((desafio, idx) => {
        const concluido = state.aluno.progresso.includes(desafio);
        return `
          <div data-desafio="${desafio}" class="card-desafio group p-5 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[160px] border shadow-lg ${concluido ? 'bg-[#0f172a]/40 border-emerald-500/30 hover:border-emerald-500' : 'bg-[#0f172a]/60 border-amber-500/20 hover:border-amber-400'}">
            <div class="flex justify-between items-start">
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-mono">${String(idx+1).padStart(2, '0')}</div>
              ${concluido ? `
                <span class="px-2 py-1 bg-emerald-500/15 text-emerald-400 text-[10px] font-bold rounded uppercase border border-emerald-500/20">Resolvido</span>
              ` : `
                <span class="px-2 py-1 bg-amber-500/10 text-amber-400 text-[10px] font-bold rounded uppercase border border-amber-500/20">Pendente</span>
              `}
            </div>
            
            <div class="mt-4">
              <h3 class="text-white font-bold text-sm md:text-base leading-tight group-hover:text-sky-400 transition-colors line-clamp-2">${desafio}</h3>
              <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">Estudo e prática de códigos lúdicos em ambientes simulados.</p>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderMissoes() {
  let unlock = true;
  return `
    <div class="space-y-6">
      <div class="text-center max-w-xl mx-auto mb-8">
        <h2 class="text-2xl font-bold tracking-tight text-amber-400 font-mono flex items-center justify-center gap-2">
          <i data-lucide="flame" class="w-6 h-6 animate-pulse"></i>
          <span>Mini-Projetos de Javascript</span>
        </h2>
        <p class="text-slate-450 text-xs mt-2 leading-relaxed">Desenvolva algoritmos interativos reais. Complete a sequência para liberar as seguintes!</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${missoesProjetos.map((missao, idx) => {
          const jaConcluiu = state.aluno.progresso.includes(missao.titulo);
          const bloqueado = !unlock;
          
          // O status do próximo card é com base no anterior
          unlock = jaConcluiu;
          
          if (bloqueado) {
            return `
              <div class="bg-[#0f172a]/30 border border-slate-800/80 p-6 rounded-2xl cursor-not-allowed opacity-40 select-none relative">
                <i data-lucide="lock" class="absolute top-4 right-4 text-slate-600 w-5 h-5"></i>
                <span class="text-[10px] font-mono uppercase bg-slate-950 px-2 py-0.5 rounded text-slate-600 border border-slate-850">Bloqueado</span>
                <h3 class="text-base font-bold text-slate-600 font-mono mt-4 mb-2">🔒 ${missao.titulo}</h3>
                <p class="text-slate-500 text-xs mt-1">Conclua a missão anterior para desbloquear este laboratório.</p>
              </div>
            `;
          }
          
          return `
            <div data-missao-idx="${idx}" class="card-missao p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-lg relative flex flex-col justify-between min-h-[200px] ${jaConcluiu ? 'bg-[#0f172a]/60 border-emerald-500/30 hover:border-emerald-500' : 'bg-[#0f172a]/60 border-amber-500/30 hover:border-amber-400'}">
              <div>
                <div class="flex justify-between items-start">
                  <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${jaConcluiu ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}">
                    ${jaConcluiu ? "Concluído" : "Disponível"}
                  </span>
                  ${jaConcluiu ? '<i data-lucide="check-circle" class="w-5 h-5 text-emerald-400 animate-pulse"></i>' : ''}
                </div>
                <h3 class="text-lg font-bold text-white font-mono mt-4 mb-2 hover:text-sky-400">${missao.titulo}</h3>
                <p class="text-slate-400 text-xs leading-relaxed mb-4">Módulo interativo focado em Javascript. Codifique a estrutura lógica de algoritmos reais.</p>
              </div>
              <div class="flex justify-between items-center text-xs font-mono pt-4 border-t border-slate-800/60 mt-auto">
                <span class="${jaConcluiu ? 'text-emerald-400' : 'text-amber-400 font-bold'}">${jaConcluiu ? 'Rever Solução' : 'Iniciar Código 🎮'}</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-slate-500"></i>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Renderização dos Modais
function renderModals() {
  const activeTopic = state.activeTopic;
  
  return `
    <div class="fixed inset-0 bg-[#020617]/95 backdrop-blur-md z-50 flex items-start justify-center p-4 md:p-8 overflow-y-auto">
      <div class="bg-[#0f172a] border border-slate-800 rounded-3xl w-full max-w-4xl p-6 md:p-10 shadow-2xl relative my-auto overflow-hidden">
        <button id="btn-close-modal" class="absolute right-4 top-4 md:right-6 md:top-6 w-8 h-8 rounded-xl border border-rose-500/20 bg-slate-950 text-rose-500 hover:bg-rose-500 hover:text-white transition-all flex justify-center items-center cursor-pointer">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
        
        <h2 class="text-xl md:text-2xl font-black font-mono uppercase tracking-tight text-white mb-6 pb-4 border-b border-slate-800/80 flex items-center gap-2">
          <i data-lucide="book-open" class="text-sky-400 w-5 h-5"></i>
          <span>${state.modalType === 'missao' ? missoesProjetos[state.activeMissionIndex].titulo : activeTopic}</span>
        </h2>

        ${state.modalType === 'estudo' ? renderEstudoModalContent() : ''}
        ${state.modalType === 'desafio' ? renderDesafioModalContent() : ''}
        ${state.modalType === 'missao' ? renderMissionModalContent() : ''}
      </div>
    </div>
  `;
}

function renderEstudoModalContent() {
  let content = "Conteúdo Indisponível.";
  if (state.selectedTech === "html") content = conteudosHTML[state.activeTopic] || content;
  if (state.selectedTech === "css") content = conteudosCSS[state.activeTopic] || content;
  if (state.selectedTech === "js") content = conteudosJS[state.activeTopic] || content;
  
  const jaLido = state.aluno.progresso.includes(state.activeTopic);

  return `
    <div class="text-slate-300 space-y-4 leading-relaxed font-sans scrollbar-custom max-h-[70vh] overflow-y-auto pr-2">
      <div class="prose max-w-full">${content}</div>
      <div class="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <p class="text-xs text-slate-500 font-mono">💡 Já leu toda a documentação estrutural?</p>
        <button id="btn-marcar-concluido" class="px-6 py-3 rounded-xl font-bold tracking-wide transition-all shadow-md text-xs uppercase ${jaLido ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-sky-400 text-slate-950 hover:bg-sky-450'}" ${jaLido ? 'disabled' : ''}>
          ${jaLido ? "Estudo Concluído ✅" : "Marcar como Lido & Concluído ⭐"}
        </button>
      </div>
    </div>
  `;
}

function renderDesafioModalContent() {
  const dic = desafiosColecao[state.selectedTech]?.[state.selectedLevel];
  const desafio = dic ? dic[state.activeTopic] : null;
  if (!desafio) return `<p class="text-slate-500">Desafio em conformação estrutural para este bloco.</p>`;

  return `
    <div class="space-y-6 max-h-[75vh] overflow-y-auto pr-2">
      <!-- Múltipla Escolha -->
      <div class="bg-sky-550/5 border-l-4 border-sky-400 p-5 rounded-r-xl bg-sky-950/20">
        <span class="text-[10px] font-mono uppercase bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded">Parte 1: Missão Teórica</span>
        <p class="text-white font-bold leading-relaxed mt-3 mb-4">${desafio.enunciado1}</p>
        
        <div class="space-y-2">
          ${desafio.opcoes.map((opt, i) => `
            <label class="flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${state.opcaoTeorica === i ? 'bg-sky-500/15 border-sky-400 text-white font-semibold' : 'bg-slate-950 border-slate-950 text-slate-400 hover:bg-slate-900'}">
              <input type="radio" name="opt-teoria" value="${i}" ${state.opcaoTeorica === i ? 'checked' : ''} class="accent-sky-400 cursor-pointer">
              <span class="font-sans text-xs md:text-sm text-slate-300">${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>

      <!-- Prática -->
      <div class="bg-amber-550/5 border-l-4 border-amber-500 p-5 rounded-r-xl bg-amber-950/10 space-y-4">
        <span class="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded">Parte 2: Escrita de Código</span>
        <p class="text-slate-450 text-xs italic">${desafio.enunciado2}</p>
        <p class="text-white font-bold text-sm leading-relaxed"><strong>Desafio Prático:</strong> ${desafio.questaoPratica}</p>
        <div class="bg-[#020617] p-1.5 rounded-xl border border-slate-800 shadow-inner">
          <textarea id="resposta-pratica" class="w-full bg-transparent min-h-[140px] text-amber-400 font-mono text-xs p-4 outline-none resize-none" placeholder="// Insira seu código aqui...">${state.respostaPratica}</textarea>
        </div>
      </div>

      <button id="btn-verificar-desafio" class="w-full bg-sky-500 hover:bg-sky-450 text-[#020617] font-black font-mono uppercase tracking-wider py-4 rounded-xl text-center shadow-lg cursor-pointer text-xs transition-transform active:scale-98">
        Verificar Desafio ✔️
      </button>
    </div>
  `;
}

function renderMissionModalContent() {
  const missao = missoesProjetos[state.activeMissionIndex];
  
  return `
    <div class="space-y-6 max-h-[75vh] overflow-y-auto pr-2">
      <div class="bg-amber-500/5 border-l-4 border-amber-500 p-5 rounded-r-xl bg-amber-950/10">
        <h3 class="text-sm font-bold text-amber-500 font-mono mb-2 uppercase tracking-tight">Diretrizes Práticas do Projeto</h3>
        <p class="text-slate-300 text-xs leading-relaxed font-sans">${missao.instrucoes}</p>
      </div>

      <div class="bg-[#020617] border border-slate-800 p-4 rounded-2xl relative shadow-2xl">
        <h4 class="text-xxs uppercase tracking-widest font-mono text-slate-500 mb-3 flex items-center gap-2">
          <i data-lucide="file-code" class="w-3.5 h-3.5 text-sky-400"></i>
          <span>Ambiente de Programação Codificada</span>
        </h4>
        
        <div class="flex gap-1.5 mb-3 border-b border-slate-800/80 pb-2">
          <button id="tab-file-html" class="px-4 py-2 rounded-xl font-mono text-xs cursor-pointer ${state.activeMissionTab === 'html' ? 'bg-sky-500/15 border border-sky-450/30 text-sky-400 font-bold' : 'text-slate-500'}">index.html</button>
          <button id="tab-file-css" class="px-4 py-2 rounded-xl font-mono text-xs cursor-pointer ${state.activeMissionTab === 'css' ? 'bg-sky-500/15 border border-sky-450/30 text-sky-400 font-bold' : 'text-slate-500'}">style.css</button>
          <button id="tab-file-js" class="px-4 py-2 rounded-xl font-mono text-xs cursor-pointer ${state.activeMissionTab === 'js' ? 'bg-sky-500/15 border border-sky-450/30 text-sky-400 font-bold' : 'text-slate-500'}">script.js</button>
        </div>

        <div class="bg-[#020617] rounded-xl overflow-hidden border border-slate-850 p-1">
          <textarea id="editor-codigo" class="w-full bg-[#020617] border-0 min-h-[250px] font-mono text-xs p-4 outline-none resize-y ${state.activeMissionTab === 'html' ? 'text-amber-400' : state.activeMissionTab === 'css' ? 'text-sky-450' : 'text-yellow-450'}">${state.activeMissionTab === 'html' ? state.missionHtmlCode : state.activeMissionTab === 'css' ? state.missionCssCode : state.missionJsCode}</textarea>
        </div>
      </div>

      <button id="btn-submeter-missao" class="w-full bg-emerald-500 hover:bg-emerald-450 text-[#020617] font-black font-mono uppercase tracking-wider py-4 rounded-xl text-center shadow-lg transition-colors cursor-pointer text-xs">
        Submeter Projeto Completo 🚀
      </button>
    </div>
  `;
}

// === ASSOCIAÇÃO DE EVENTOS DO CLIENTE ===
function bindAuthEvents() {
  const tabLogin = document.getElementById("tab-login");
  const tabCadastro = document.getElementById("tab-cadastro");
  const authForm = document.getElementById("auth-form");
  
  if (tabLogin) {
    tabLogin.onclick = () => { state.authView = 'login'; render(); };
  }
  if (tabCadastro) {
    tabCadastro.onclick = () => { state.authView = 'cadastro'; render(); };
  }
  
  if (authForm) {
    authForm.onsubmit = (e) => {
      e.preventDefault();
      const nomeVal = document.getElementById("auth-nome").value;
      if (state.authView === 'login') {
        const pinVal = document.getElementById("auth-pin").value;
        handleLogin(nomeVal, pinVal);
      } else {
        handleCadastro(nomeVal);
      }
    };
  }
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

function bindDashboardEvents() {
  // Logout
  const btnLogout = document.getElementById("btn-logout");
  if (btnLogout) btnLogout.onclick = () => commitAlunoState(null);
  
  // Abas do Dashboard
  const tabEnc = document.getElementById("tab-nav-enciclopedia");
  const tabDes = document.getElementById("tab-nav-desafios");
  const tabMis = document.getElementById("tab-nav-missoes");
  
  if (tabEnc) tabEnc.onclick = () => { state.mainView = 'enciclopedia'; render(); };
  if (tabDes) tabDes.onclick = () => { state.mainView = 'desafios'; render(); };
  if (tabMis) tabMis.onclick = () => { state.mainView = 'missoes'; render(); };
  
  // Seletores de Tecnologia
  const btnHtml = document.getElementById("btn-tech-html");
  const btnCss = document.getElementById("btn-tech-css");
  const btnJs = document.getElementById("btn-tech-js");
  
  if (btnHtml) btnHtml.onclick = () => { state.selectedTech = 'html'; render(); };
  if (btnCss) btnCss.onclick = () => { state.selectedTech = 'css'; render(); };
  if (btnJs) btnJs.onclick = () => { state.selectedTech = 'js'; render(); };
  
  // Seletores de Dificuldade
  const lvlIni = document.getElementById("lvl-iniciante");
  const lvlInt = document.getElementById("lvl-intermediario");
  const lvlAv = document.getElementById("lvl-avancado");
  
  if (lvlIni) lvlIni.onclick = () => { state.selectedLevel = 'iniciante'; render(); };
  if (lvlInt) lvlInt.onclick = () => { state.selectedLevel = 'intermediario'; render(); };
  if (lvlAv) lvlAv.onclick = () => { state.selectedLevel = 'avancado'; render(); };
  
  // Eventos de clique nos cards
  document.querySelectorAll(".card-tema").forEach(card => {
    card.onclick = () => openTopicModal(card.getAttribute("data-topico"));
  });
  
  document.querySelectorAll(".card-desafio").forEach(card => {
    card.onclick = () => openChallengeModal(card.getAttribute("data-desafio"));
  });

  document.querySelectorAll(".card-missao").forEach(card => {
    card.onclick = () => openMissionModal(parseInt(card.getAttribute("data-missao-idx")));
  });

  // Eventos de Modais
  const btnClose = document.getElementById("btn-close-modal");
  if (btnClose) btnClose.onclick = closeModal;
  
  const btnMarcarLido = document.getElementById("btn-marcar-concluido");
  if (btnMarcarLido) {
    btnMarcarLido.onclick = () => registrarConclusaoItem(state.activeTopic);
  }
  
  // Opções teóricas do desafio
  document.querySelectorAll('input[name="opt-teoria"]').forEach(radio => {
    radio.onchange = (e) => {
      state.opcaoTeorica = parseInt(e.target.value);
    };
  });
  
  // Sincronização do input prático
  const txtPratica = document.getElementById("resposta-pratica");
  if (txtPratica) {
    txtPratica.oninput = (e) => { state.respostaPratica = e.target.value; };
  }
  
  const btnVerificarDes = document.getElementById("btn-verificar-desafio");
  if (btnVerificarDes) btnVerificarDes.onclick = handleValidarDesafio;
  
  // Abas de arquivos das missões
  const tabFilHtml = document.getElementById("tab-file-html");
  const tabFilCss = document.getElementById("tab-file-css");
  const tabFilJs = document.getElementById("tab-file-js");
  const compEditor = document.getElementById("editor-codigo");
  
  if (compEditor) {
    compEditor.oninput = (e) => {
      if (state.activeMissionTab === 'html') state.missionHtmlCode = e.target.value;
      if (state.activeMissionTab === 'css') state.missionCssCode = e.target.value;
      if (state.activeMissionTab === 'js') state.missionJsCode = e.target.value;
    };
  }
  
  if (tabFilHtml) {
    tabFilHtml.onclick = () => { state.activeMissionTab = 'html'; render(); };
  }
  if (tabFilCss) {
    tabFilCss.onclick = () => { state.activeMissionTab = 'css'; render(); };
  }
  if (tabFilJs) {
    tabFilJs.onclick = () => { state.activeMissionTab = 'js'; render(); };
  }
  
  const btnSubMissao = document.getElementById("btn-submeter-missao");
  if (btnSubMissao) btnSubMissao.onclick = handleValidarMissao;
}

// Inicializa a aplicação
if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", () => {
    render();
  });
} else {
  render();
}
