/**
 * BANCO DE DADOS DE TEXTOS - HTML COMPLETO (INICIANTE, INTERMEDIÁRIO E AVANÇADO)
 */

window.conteudosHTML = {
    // === NÍVEL INICIANTE (Mantidos da versão anterior) ===
    "Conceito de Tags": `
        <p>As tags são a base da linguagem HTML e funcionam como comandos que informam ao navegador como o conteúdo deve ser estruturado. No desenvolvimento de jogos, elas são usadas para definir desde a área onde o jogo será exibido até os botões de menu e textos de interface. Cada tag é envolvida por colchetes angulares, como <code>&lt;html&gt;</code>.</p>
        <p>A maioria das tags trabalha em pares: uma de abertura e uma de fechamento (que possui uma barra), como em <code>&lt;p&gt;Texto&lt;/p&gt;</code>. Essa estrutura em "cascata" permite que o desenvolvedor organize a hierarquia visual da página de forma lógica.</p>
        <div class="code-block"><pre><code>&lt;h1&gt;Meu Primeiro Jogo&lt;/h1&gt;
&lt;p&gt;Pressione Start para começar.&lt;/p&gt;</code></pre></div>`,

    "Estrutura Global": `
        <p>Todo documento HTML5 profissional precisa seguir uma estrutura global obrigatória. Isso garante que o navegador identifique o arquivo como um site moderno e aplique as regras de renderização corretamente. Essa estrutura começa sempre com a declaração <code>&lt;!DOCTYPE html&gt;</code>.</p>
        <div class="code-block"><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Game Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- O jogo entra aqui --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div>`,

    "Tags de Texto": `<p>As tags de texto são usadas para exibir informações escritas, como diálogos de NPCs e pontuação...</p>`,
    "Meta Tags Técnicas": `<p>Instruções técnicas essenciais como charset e viewport...</p>`,
    "Atributos e IDs": `<p>Propriedades para identificar elementos e manipulá-los via JS...</p>`,
    "Links e Navegação": `<p>Uso da tag &lt;a&gt; para conectar recursos e páginas...</p>`,
    "Listas de Inventário": `<p>Organização de itens usando ul, ol e li...</p>`,
    "Inserção de Mídia": `<p>Trabalhando com img, audio e video...</p>`,
    "Containers Div": `<p>O uso de caixas genéricas para organizar o layout...</p>`,
    "Comentários de Código": `<p>Organização interna do desenvolvedor no HTML...</p>`,

    // === NÍVEL INTERMEDIÁRIO (Mantidos da versão anterior) ===
    "Elementos Semânticos (Header, Nav, Footer)": `<p>Estrutura lógica para acessibilidade e SEO...</p>`,
    "Seções de Conteúdo (Section, Article, Aside)": `<p>Divisão específica de blocos de informação...</p>`,
    "Estrutura de Tabelas Simples (Table, Tr, Td)": `<p>Exibição de dados em linhas e colunas...</p>`,
    "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": `<p>Organização avançada de tabelas de ranking...</p>`,
    "Formulários Básicos (Form, Input, Label)": `<p>Coleta de dados e interação com o jogador...</p>`,
    "Tipos de Input (Text, Password, Email, Button)": `<p>Diferentes funções para campos de entrada...</p>`,
    "Seleções em Formulários (Radio, Checkbox, Select)": `<p>Escolha de opções pré-definidas...</p>`,
    "Validação Nativa de Formulários": `<p>Atributos required, min e max...</p>`,
    "Introdução à Acessibilidade (Atributos ARIA)": `<p>Inclusão de jogadores com necessidades especiais...</p>`,
    "A tag <dialog> (Modais Nativos)": `<p>Criação de janelas pop-up nativas do navegador...</p>`,

    // === NÍVEL AVANÇADO (TEXTOS COMPLETOS ATUALIZADOS) ===
    "A tag <canvas> (O Palco dos Jogos)": `
        <p>A tag <code>&lt;canvas&gt;</code> é um dos elementos mais importantes do desenvolvimento de jogos web modernos. Ela funciona como uma área de desenho dentro da página HTML onde o JavaScript pode renderizar gráficos, animações, partículas, personagens e cenários em tempo real. Diferente de elementos HTML tradicionais, o <code>&lt;canvas&gt;</code> não possui conteúdo visual próprio; tudo o que aparece nele é desenhado dinamicamente através de código. Isso permite criar jogos 2D e até experiências 3D usando bibliotecas gráficas. Em projetos de jogos, o canvas geralmente representa literalmente a “tela do jogo”.</p>
        <p>Na prática, o <code>&lt;canvas&gt;</code> é usado junto da API Canvas do JavaScript para desenhar formas, imagens e animações continuamente. O desenvolvedor cria um elemento <code>&lt;canvas&gt;</code> no HTML e depois utiliza JavaScript para acessar seu contexto gráfico usando <code>getContext("2d")</code>. Esse contexto permite desenhar sprites, HUDs, barras de vida e mapas inteiros. Em engines próprias, o canvas também é responsável pelo sistema de colisão visual e atualização de frames. Jogos em estilo arcade, plataforma e RPG frequentemente utilizam essa técnica.</p>
        <p>A importância do <code>&lt;canvas&gt;</code> nos jogos é enorme porque ele oferece controle total sobre os gráficos exibidos. Enquanto elementos HTML comuns são mais indicados para menus e formulários, o canvas permite desenhar centenas de objetos rapidamente em uma única área da tela. Isso melhora a organização do projeto e facilita sistemas de câmera, efeitos de iluminação e movimentação contínua. Em jogos multiplayer ou com muitos efeitos visuais, o canvas ajuda a manter a performance estável. Ele também é muito usado em conjunto com bibliotecas como Phaser.js e engines próprias.</p>
        <div class="code-block"><pre><code>&lt;canvas id="telaJogo" width="800" height="400"&gt;&lt;/canvas&gt;

&lt;script&gt;
const canvas = document.getElementById("telaJogo");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(50, 50, 100, 100);

ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Jogador 1", 40, 40);
&lt;/script&gt;</code></pre></div>`,

    "SVG inline (<svg> e <path>)": `
        <p>O SVG (Scalable Vector Graphics) é uma tecnologia que permite criar gráficos vetoriais diretamente dentro do HTML. Diferente de imagens comuns como PNG ou JPG, os gráficos SVG não perdem qualidade ao serem ampliados. Isso acontece porque eles são desenhados matematicamente através de formas, linhas e curvas. As tags <code>&lt;svg&gt;</code> e <code>&lt;path&gt;</code> são usadas para construir esses desenhos vetoriais. Em jogos web, SVGs são muito úteis para criar interfaces modernas e elementos gráficos leves.</p>
        <p>Na prática, SVG inline é usado diretamente no HTML sem precisar carregar arquivos externos. O desenvolvedor pode criar ícones de inventário, escudos, minimapas, botões e barras de energia usando código vetorial. A tag <code>&lt;path&gt;</code> define formatos personalizados usando coordenadas e curvas matemáticas. Como os elementos SVG fazem parte do DOM, eles também podem ser animados com CSS e JavaScript. Isso permite criar menus animados, efeitos de brilho e indicadores dinâmicos de forma extremamente leve.</p>
        <p>O uso de SVG em jogos é importante principalmente para interfaces responsivas. Em resoluções diferentes, os gráficos continuam nítidos sem precisar carregar múltiplas versões da mesma imagem. Isso reduz o peso do projeto e melhora a performance em celulares. Jogos com visual futurista, RPGs com HUDs complexas e interfaces estilizadas costumam utilizar SVG para manter a qualidade gráfica. Além disso, SVG é excelente para elementos que precisam mudar de cor ou tamanho dinamicamente.</p>`,

    "Imagens Responsivas (<picture> e srcset)": `
        <p>As imagens responsivas permitem carregar arquivos diferentes dependendo do tamanho da tela ou da capacidade do dispositivo do jogador. As tags <code>&lt;picture&gt;</code> e o atributo <code>srcset</code> ajudam o navegador a escolher automaticamente qual imagem deve ser usada. Isso é muito importante em jogos web porque gráficos pesados podem prejudicar celulares mais fracos. Com essa técnica, é possível otimizar o carregamento de sprites, fundos e texturas sem perder qualidade visual em computadores potentes.</p>
        <p>Na prática, o desenvolvedor cria várias versões da mesma imagem com tamanhos diferentes. O navegador então decide qual arquivo carregar baseado na largura da tela ou densidade de pixels. Um smartphone pode receber um background comprimido e leve, enquanto um PC gamer recebe uma textura em alta resolução. Isso reduz consumo de memória, melhora o tempo de carregamento e evita travamentos em dispositivos mais simples. O sistema funciona automaticamente depois de configurado corretamente no HTML.</p>
        <p>Esse recurso é extremamente importante em jogos modernos porque performance influencia diretamente a experiência do jogador. Jogos com mapas grandes e muitas imagens podem ficar lentos caso todos os assets sejam carregados em qualidade máxima. O uso de imagens responsivas permite equilibrar qualidade visual e velocidade. Além disso, jogos web distribuídos online precisam carregar rapidamente para evitar abandono na tela inicial. Otimizações desse tipo fazem grande diferença em projetos profissionais.</p>
        <div class="code-block"><pre><code>&lt;picture&gt;
  &lt;source media="(max-width: 600px)" srcset="bg-mobile.png"&gt;
  &lt;source media="(min-width: 601px)" srcset="bg-pc.png"&gt;
  &lt;img src="bg-pc.png" alt="Cenário do jogo"&gt;
&lt;/picture&gt;</code></pre></div>`,

    "Áudios Avançados (Atributos e Eventos de <audio>)": `
        <p>A tag <code>&lt;audio&gt;</code> permite inserir sons diretamente em jogos web. Ela é usada para reproduzir músicas de fundo, efeitos sonoros, falas de personagens e alertas do sistema. O HTML5 trouxe suporte nativo a áudio sem necessidade de plugins externos. Além disso, atributos como <code>loop</code>, <code>autoplay</code> e <code>preload</code> oferecem controle adicional sobre o comportamento do som. Em jogos, o áudio é essencial para criar imersão e feedback para o jogador.</p>
        <p>Na prática, o desenvolvedor pode controlar o áudio tanto pelo HTML quanto pelo JavaScript. O atributo <code>loop</code> faz a música repetir automaticamente, enquanto <code>preload</code> tenta carregar o som antes de ser usado. Eventos JavaScript permitem detectar quando um áudio terminou ou começou a tocar. Também é possível controlar volume, pausar músicas em menus e alternar múltiplos canais de som. Jogos costumam separar trilha sonora, efeitos e falas em diferentes objetos de áudio.</p>
        <p>A importância do áudio em jogos é enorme porque ele melhora a sensação de impacto e resposta das ações. Sons de tiro, passos, explosões e menus ajudam o jogador a entender eventos rapidamente. Trilhas sonoras também influenciam diretamente o clima emocional da experiência. Um sistema de áudio bem organizado facilita a manutenção do projeto e melhora a experiência do usuário em diferentes dispositivos. Jogos sem áudio geralmente parecem incompletos ou menos envolventes.</p>
        <div class="code-block"><pre><code>&lt;audio id="musicaFundo" loop preload="auto"&gt;
  &lt;source src="musica.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;

&lt;button onclick="document.getElementById('musicaFundo').play()"&gt;
  Iniciar Música
&lt;/button&gt;</code></pre></div>`,

    "Pré-carregamento de Assets (preload e prefetch)": `
        <p>O pré-carregamento de assets é uma técnica usada para baixar arquivos importantes antes de eles serem necessários no jogo. Isso inclui imagens, músicas, fontes e scripts essenciais para a experiência inicial. Os atributos e links de <code>preload</code> e <code>prefetch</code> ajudam o navegador a antecipar downloads importantes. Em jogos web, isso reduz atrasos e evita que elementos apareçam lentamente durante a jogatina. Esse processo é muito usado em telas de loading.</p>
        <p>Na prática, <code>preload</code> é usado para arquivos necessários imediatamente, enquanto <code>prefetch</code> prepara recursos que poderão ser usados futuramente. O navegador interpreta essas instruções no <code>&lt;head&gt;</code> do HTML e começa os downloads em segundo plano. Isso permite que sprites, trilhas sonoras e mapas estejam prontos antes da partida começar. Em jogos grandes, essa técnica evita travamentos quando o jogador muda de fase. Também melhora a fluidez das animações iniciais.</p>
        <p>Esse recurso é importante porque jogos dependem muito de carregamento rápido e contínuo. Se um som ou textura demorar para carregar durante a ação, a experiência pode parecer quebrada. O pré-carregamento reduz falhas visuais, evita telas vazias e melhora a percepção de qualidade do projeto. Em jogos online, isso ajuda a criar uma experiência mais profissional e responsiva. Muitas engines utilizam sistemas automáticos de preload baseados nessas técnicas do HTML.</p>
        <div class="code-block"><pre><code>&lt;head&gt;
<link rel="preload" href="player.png" as="image"&gt;
<link rel="preload" href="fase1.mp3" as="audio"&gt;
<link rel="prefetch" href="fase2.png"&gt;
&lt;/head&gt;</code></pre></div>`,

    "Iframe Avançado (<iframe> e Sandbox)": `
        <p>A tag <code>&lt;iframe&gt;</code> permite incorporar outra página HTML dentro da página principal do jogo. Isso pode incluir mini-jogos, rankings online, mapas externos ou dashboards administrativos. O atributo <code>sandbox</code> adiciona camadas extras de segurança, limitando o que o conteúdo incorporado pode fazer. Em desenvolvimento web moderno, segurança é fundamental, especialmente ao integrar conteúdos externos. O iframe ajuda a separar ambientes e evitar conflitos entre sistemas.</p>
        <p>Na prática, desenvolvedores usam iframes para incluir conteúdos independentes sem misturar diretamente os códigos. Um launcher de jogos pode carregar diferentes games em um único sistema usando iframes separados. O atributo <code>sandbox</code> pode bloquear scripts perigosos, impedir downloads automáticos ou restringir formulários. Isso reduz riscos de segurança caso o conteúdo incorporado seja externo. Também é possível usar iframes para testes isolados durante o desenvolvimento.</p>
        <p>O uso correto de iframes é importante em plataformas de jogos online, portais educacionais e hubs de mini-games. Eles ajudam a modularizar sistemas e facilitam manutenção de múltiplos projetos. Em ambientes multiplayer ou com integração de APIs externas, o sandbox evita que conteúdos maliciosos interfiram no jogo principal. Embora não seja usado para renderizar o jogo em si, o iframe é muito útil para sistemas auxiliares e integração segura de ferramentas.</p>
        <div class="code-block"><pre><code>&lt;iframe 
  src="minigame.html"
  width="800"
  height="400"
  sandbox="allow-scripts"&gt;
&lt;/iframe&gt;</code></pre></div>`,

    "Manipulação de Templates (<template> e <slot>)": `
        <p>A tag <code>&lt;template&gt;</code> serve para armazenar estruturas HTML que não devem aparecer imediatamente na tela. Esses elementos ficam “guardados” na memória até serem clonados via JavaScript. Já o <code>&lt;slot&gt;</code> é usado em componentes personalizados para definir áreas onde conteúdos externos podem ser inseridos. Em jogos web, essas ferramentas ajudam muito na criação de interfaces repetitivas e dinâmicas. Inventários, lojas e listas de personagens são exemplos comuns.</p>
        <p>Na prática, o desenvolvedor cria modelos prontos de elementos visuais usando <code>&lt;template&gt;</code>. Depois, o JavaScript duplica essas estruturas conforme necessário. Isso evita repetir código HTML manualmente dezenas de vezes. O <code>&lt;slot&gt;</code> é usado principalmente em Web Components para tornar componentes reutilizáveis e flexíveis. Assim, diferentes partes do jogo podem compartilhar a mesma estrutura visual com conteúdos personalizados.</p>
        <p>Esse sistema é importante porque jogos frequentemente possuem muitos elementos repetidos. Inventários podem conter centenas de itens, e criar cada elemento manualmente seria ineficiente. Templates melhoram organização, reaproveitamento e manutenção do código. Além disso, eles reduzem processamento inicial da página porque elementos só são renderizados quando realmente necessários. Isso contribui para performance e escalabilidade do projeto.</p>
        <div class="code-block"><pre><code>&lt;template id="itemInventario"&gt;
  &lt;div class="item"&gt;
    &lt;p&gt;Poção de Vida&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
const template = document.getElementById("itemInventario");
document.body.appendChild(template.content.cloneNode(true));
&lt;/script&gt;</code></pre></div>`,

    "Armazenamento no Navegador (O papel técnico do HTML5)": `
        <p>O HTML5 trouxe suporte moderno para armazenamento local no navegador através de APIs como LocalStorage e SessionStorage. Essas tecnologias permitem salvar informações diretamente no dispositivo do jogador sem necessidade de servidor. Jogos utilizam esse recurso para guardar progresso, configurações gráficas, pontuações e inventários. Embora o armazenamento seja controlado pelo JavaScript, o suporte faz parte da evolução do HTML5 como plataforma completa de aplicações web.</p>
        <p>Na prática, LocalStorage salva dados de forma permanente até que sejam apagados manualmente. Já SessionStorage mantém informações apenas enquanto a aba do navegador estiver aberta. Os dados são armazenados em formato de chave e valor. Um jogo pode salvar o nível atual do jogador, moedas acumuladas ou preferências de áudio. Isso permite continuar a partida posteriormente sem perder progresso.</p>
        <p>Esse recurso é extremamente importante porque melhora a experiência do usuário sem depender totalmente de servidores online. Jogos offline usam armazenamento local para criar sistemas de save state simples e rápidos. Além disso, ele reduz custos de infraestrutura e facilita prototipagem de projetos independentes. Mesmo jogos online frequentemente usam armazenamento local para cache e preferências temporárias. Isso torna a navegação mais rápida e personalizada.</p>
        <div class="code-block"><pre><code>&lt;script&gt;
localStorage.setItem("faseAtual", "3");

const fase = localStorage.getItem("faseAtual");

console.log("Fase salva:", fase);
&lt;/script&gt;</code></pre></div>`,

    "Componentes Web Nativos (Custom Elements)": `
        <p>Os Custom Elements permitem criar tags HTML personalizadas definidas pelo próprio desenvolvedor. Isso faz parte da tecnologia chamada Web Components. Em vez de usar apenas tags tradicionais como <code>&lt;div&gt;</code> ou <code>&lt;section&gt;</code>, é possível criar elementos como <code>&lt;barra-vida&gt;</code> ou <code>&lt;hud-jogador&gt;</code>. Esses componentes encapsulam estrutura, estilo e comportamento em um único elemento reutilizável. Isso ajuda muito na organização de jogos complexos.</p>
        <p>Na prática, o desenvolvedor cria uma classe JavaScript que herda de HTMLElement. Depois, registra a nova tag usando <code>customElements.define()</code>. A partir desse momento, a tag personalizada pode ser usada normalmente no HTML. Cada componente pode conter lógica própria, estilos internos e atualizações automáticas. Em jogos, isso ajuda a separar sistemas como HUD, minimapa e inventário em módulos independentes.</p>
        <p>A importância dos componentes web está na escalabilidade do projeto. Jogos grandes possuem muitas interfaces e elementos dinâmicos, e organizar tudo apenas com divs pode virar um caos rapidamente. Custom Elements facilitam manutenção, reaproveitamento e leitura do código. Eles também aproximam o desenvolvimento web moderno da arquitetura usada em engines profissionais e frameworks modernos. Isso melhora produtividade e clareza estrutural.</p>
        <div class="code-block"><pre><code>&lt;hud-jogador&gt;&lt;/hud-jogador&gt;

&lt;script&gt;
class HudJogador extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "&lt;h2&gt;Vida: 100&lt;/h2&gt;";
  }
}

customElements.define("hud-jogador", HudJogador);
&lt;/script&gt;</code></pre></div>`,

    "Acessibilidade de Teclado Avançada (tabindex e Foco)": `
        <p>A acessibilidade de teclado permite que jogadores naveguem pela interface sem precisar usar mouse. O atributo <code>tabindex</code> controla a ordem de foco dos elementos da página. Isso é muito importante em menus, inventários e telas de configuração. Jogos web modernos precisam considerar acessibilidade tanto por inclusão quanto por praticidade. Muitos jogadores preferem navegar rapidamente usando teclado ou controle adaptado.</p>
        <p>Na prática, elementos com <code>tabindex="0"</code> podem receber foco usando a tecla TAB. O JavaScript também pode mover o foco automaticamente entre elementos conforme ações do jogador. Menus de pausa, seletores de itens e telas de opções costumam utilizar esse sistema. Além disso, estilos CSS podem destacar visualmente o item atualmente focado. Isso melhora navegação e feedback visual.</p>
        <p>Esse recurso é essencial porque aumenta usabilidade e acessibilidade do jogo. Pessoas com limitações motoras dependem frequentemente de navegação por teclado. Em jogos rápidos, menus acessíveis também tornam a experiência mais eficiente para qualquer jogador. Além disso, sistemas de foco bem organizados deixam interfaces mais profissionais e intuitivas. Grandes jogos web e aplicações modernas sempre consideram acessibilidade como parte do desenvolvimento principal.</p>
        <div class="code-block"><pre><code>&lt;button tabindex="1"&gt;Jogar&lt;/button&gt;
&lt;button tabindex="2"&gt;Configurações&lt;/button&gt;
&lt;button tabindex="3"&gt;Sair&lt;/button&gt;

&lt;style&gt;
button:focus {
  border: 3px solid yellow;
}
&lt;/style&gt;</code></pre></div>`
};
