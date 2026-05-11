/**
 * BANCO DE DADOS DE TEXTOS - HTML
 * Este arquivo deve ser carregado no index.html ANTES do enciclopedia_v6.js
 */

window.conteudosHTML = {
    // === NÍVEL INICIANTE ===
    "Conceito de Tags": "<p>As tags são a base do HTML...</p>",
    "Estrutura Global": "<p>Todo documento HTML5 segue uma hierarquia...</p>",
    "Tags de Texto": "<p>Para exibir diálogos e informações...</p>",
    "Meta Tags Técnicas": "<p>As meta tags ficam no cabeçalho...</p>",
    "Atributos e IDs": "<p>Atributos fornecem informações extras...</p>",
    "Links e Navegação": "<p>A tag &lt;a&gt; é o que conecta as páginas...</p>",
    "Listas de Inventário": "<p>Para organizar itens, o HTML oferece...</p>",
    "Inserção de Mídia": "<p>Imagens e vídeos dão vida ao jogo...</p>",
    "Containers Div": "<p>A tag &lt;div&gt; é um container genérico...</p>",
    "Comentários de Código": "<p>Comentários servem para organizar...</p>",

    // === NÍVEL INTERMEDIÁRIO ===
    "Elementos Semânticos (Header, Nav, Footer)": "<p>A semântica ajuda o navegador a entender...</p>",
    "Seções de Conteúdo (Section, Article, Aside)": "<p>Estas tags dividem o corpo do jogo...</p>",
    "Estrutura de Tabelas Simples (Table, Tr, Td)": "<p>Tabelas são úteis para exibir stats...</p>",
    "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": "<p>Para tabelas complexas de ranking...</p>",
    "Formulários Básicos (Form, Input, Label)": "<p>Essenciais para login e criação de personagem...</p>",
    "Tipos de Input (Text, Password, Email, Button)": "<p>Cada input serve para um dado específico...</p>",
    "Seleções em Formulários (Radio, Checkbox, Select)": "<p>Permitem que o jogador escolha opções...</p>",
    "Validação Nativa de Formulários": "<p>O HTML5 pode validar dados automaticamente...</p>",
    "Introdução à Acessibilidade (Atributos ARIA)": "<p>Acessibilidade permite que todos joguem...</p>",
    "A tag <dialog> (Modais Nativos)": "<p>Uma forma moderna de criar janelas pop-up...</p>",

    // === NÍVEL AVANÇADO ===
    "A tag <canvas> (O Palco dos Jogos)": `
        <p>A tag <code>&lt;canvas&gt;</code> é um dos elementos mais importantes do desenvolvimento de jogos web modernos. Ela funciona como uma área de desenho dentro da página HTML onde o JavaScript pode renderizar gráficos, animações e cenários em tempo real.</p>
        <p>Na prática, o desenvolvedor acessa o contexto gráfico usando <code>getContext("2d")</code>. Esse contexto permite desenhar sprites, HUDs e mapas inteiros continuamente.</p>
        <p>A importância do canvas nos jogos é enorme porque oferece controle total sobre os gráficos, permitindo centenas de objetos na tela com performance estável.</p>
        <div class="code-block"><pre><code>&lt;canvas id="telaJogo" width="800" height="400"&gt;&lt;/canvas&gt;
&lt;script&gt;
  const ctx = document.getElementById("telaJogo").getContext("2d");
  ctx.fillStyle = "green";
  ctx.fillRect(50, 50, 100, 100);
&lt;/script&gt;</code></pre></div>`,

    "SVG inline (<svg> e <path>)": `
        <p>O SVG permite criar gráficos vetoriais que não perdem qualidade ao serem ampliados, sendo desenhados matematicamente através de formas e curvas.</p>
        <p>Na prática, o SVG inline é usado diretamente no HTML. A tag <code>&lt;path&gt;</code> define formatos personalizados que podem ser animados com CSS.</p>
        <p>Isso é vital para interfaces responsivas em diferentes resoluções, mantendo a nitidez de ícones e barras de energia sem pesar no carregamento.</p>
        <div class="code-block"><pre><code>&lt;svg width="100" height="100"&gt;
  &lt;circle cx="50" cy="50" r="40" fill="blue" /&gt;
&lt;/svg&gt;</code></pre></div>`,

    "Imagens Responsivas (<picture> e srcset)": `
        <p>Permitem carregar arquivos diferentes baseados no tamanho da tela, otimizando o desempenho em dispositivos móveis e desktops.</p>
        <p>O navegador decide automaticamente qual arquivo carregar. Smartphones recebem backgrounds leves, enquanto PCs carregam texturas em alta resolução.</p>
        <p>Isso reduz consumo de memória e melhora o tempo de carregamento, algo crucial para evitar que jogadores abandonem o jogo por lentidão.</p>
        <div class="code-block"><pre><code>&lt;picture&gt;
  &lt;source media="(max-width: 600px)" srcset="bg-mobile.png"&gt;
  &lt;img src="bg-pc.png" alt="Cenário"&gt;
&lt;/picture&gt;</code></pre></div>`,

    "Áudios Avançados (Atributos e Eventos de <audio>)": `
        <p>A tag <code>&lt;audio&gt;</code> insere sons nativamente, permitindo controlar músicas de fundo e efeitos sonoros sem plugins externos.</p>
        <p>Atributos como <code>loop</code> e <code>preload</code> oferecem controle sobre o comportamento do som, enquanto o JavaScript permite manipular volume e canais.</p>
        <p>Áudios bem aplicados aumentam a imersão, fornecendo feedback essencial para ações como tiros, passos e interações de menu.</p>
        <div class="code-block"><pre><code>&lt;audio id="bgm" loop preload="auto"&gt;
  &lt;source src="musica.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;</code></pre></div>`,

    "Pré-carregamento de Assets (preload e prefetch)": `
        <p>Técnica para baixar arquivos importantes antes de serem necessários, reduzindo atrasos durante a transição de fases ou início do jogo.</p>
        <p>O <code>preload</code> é usado para recursos imediatos, enquanto o <code>prefetch</code> prepara arquivos para o futuro uso em segundo plano.</p>
        <p>Isso evita falhas visuais e telas vazias, criando uma experiência profissional onde texturas e sons já estão prontos quando solicitados.</p>
        <div class="code-block"><pre><code>&lt;link rel="preload" href="player.png" as="image"&gt;</code></pre></div>`,

    "Iframe Avançado (<iframe> e Sandbox)": `
        <p>Permite incorporar outras páginas HTML, como rankings ou mini-jogos, de forma isolada do código principal.</p>
        <p>O atributo <code>sandbox</code> adiciona segurança, limitando scripts e formulários do conteúdo incorporado para evitar conflitos.</p>
        <p>É muito útil para criar launchers de jogos ou integrar ferramentas externas sem comprometer a integridade do sistema principal.</p>
        <div class="code-block"><pre><code>&lt;iframe src="ranking.html" sandbox="allow-scripts"&gt;&lt;/iframe&gt;</code></pre></div>`,

    "Manipulação de Templates (<template> e <slot>)": `
        <p>Armazena estruturas HTML na memória que não aparecem imediatamente, servindo como modelos para serem clonados via JavaScript.</p>
        <p>Isso facilita a criação de itens repetitivos como inventários e lojas, onde a estrutura visual é a mesma, mudando apenas os dados.</p>
        <p>Melhora a organização do código e a performance, já que os elementos só são renderizados quando realmente entram no jogo.</p>
        <div class="code-block"><pre><code>&lt;template id="item"&gt;
  &lt;div class="card"&gt;Item de Jogo&lt;/div&gt;
&lt;/template&gt;</code></pre></div>`,

    "Armazenamento no Navegador (O papel técnico do HTML5)": `
        <p>O LocalStorage e SessionStorage permitem salvar dados diretamente no dispositivo do jogador sem precisar de um servidor externo.</p>
        <p>É ideal para guardar o progresso da fase, moedas acumuladas e configurações de áudio de forma persistente.</p>
        <p>Isso melhora a experiência do usuário, permitindo que ele continue a partida exatamente de onde parou ao fechar o navegador.</p>
        <div class="code-block"><pre><code>localStorage.setItem("save_fase", "5");</code></pre></div>`,

    "Componentes Web Nativos (Custom Elements)": `
        <p>Permitem criar suas próprias tags HTML personalizadas, como <code>&lt;barra-vida&gt;</code>, encapsulando lógica e estilo em um só lugar.</p>
        <p>O desenvolvedor define o comportamento em uma classe JavaScript e registra a tag para uso normal em todo o projeto.</p>
        <p>Essa abordagem modular torna jogos complexos muito mais fáceis de manter e organizar, seguindo padrões de engines profissionais.</p>
        <div class="code-block"><pre><code>customElements.define("hud-info", MinhaHud);</code></pre></div>`,

    "Acessibilidade de Teclado Avançada (tabindex e Foco)": `
        <p>Garante que jogadores possam navegar por menus e inventários usando apenas o teclado, essencial para inclusão e agilidade.</p>
        <p>O atributo <code>tabindex</code> controla a ordem do foco, enquanto o CSS destaca visualmente o elemento selecionado no momento.</p>
        <p>Uma interface acessível deixa o jogo mais profissional, atendendo a jogadores com limitações motoras ou que preferem atalhos rápidos.</p>
        <div class="code-block"><pre><code>&lt;button tabindex="1"&gt;Novo Jogo&lt;/button&gt;</code></pre></div>`
};
