// Sistema de Log para Debug
function manualLog(msg) {
    const consoleEl = document.getElementById('debug-console');
    if (consoleEl) {
        const line = document.createElement('div');
        line.innerHTML = `<span style="color:#38bdf8">v0.2.3:</span> ${msg}`;
        consoleEl.prepend(line);
    }
}

const db = {
    html: {
        iniciante: ["Tags Básicas", "Estrutura Global", "Tags de Conteúdo", "Meta Tags", "Atributos", "Imagens", "Links", "Listas", "Comentários", "Formulários"],
        intermediario: ["Semântica", "Áudio e Vídeo", "Canvas Básico", "SVG", "Data Attributes"],
        avancado: ["Web Workers", "WebSockets", "Gamepad API"]
    },
    css: { iniciante: ["Seletores", "Box Model"], intermediario: [], avancado: [] },
    js: { iniciante: ["Variáveis", "Condicionais"], intermediario: [], avancado: [] }
};

const codeStyle = "background: #020617; padding: 15px; border-radius: 8px; border: 1px solid #334155; overflow-x: auto; font-family: monospace; color: #38bdf8; margin-top: 15px; display: block; white-space: pre-wrap;";

const conteudosManuais = {
    "Tags Básicas": `
        <p>As <strong>Tags</strong> servem para dar mais informações sobre o código para o programa ou navegador. Elas funcionam como etiquetas que classificam cada elemento, dizendo ao motor de renderização exatamente o que cada parte do código representa. Sem elas, o navegador veria apenas um amontoado de letras sem função, impossibilitando a distinção entre um botão de "Atacar" ou um texto de história.</p>
        <p>As tags são abertas com <code>&lt;tag&gt;</code> e a maioria é fechada com <code>&lt;/tag&gt;</code>. Um exemplo clássico é a tag <code>&lt;p&gt;</code>, usada para criar parágrafos de texto. O conteúdo que fica entre a abertura e o fechamento é o que será processado e exibido na tela, seguindo as regras daquela etiqueta específica.</p>
        <p>No desenvolvimento de jogos, as tags funcionam como os containers iniciais da interface. Embora a lógica do jogo aconteça no JavaScript, o HTML fornece a "âncora" física onde o jogador verá sua barra de vida, seu inventário ou os diálogos. É o primeiro passo para transformar código puro em uma experiência visual organizada.</p>
        <pre style="${codeStyle}">&lt;p&gt;Este é um parágrafo de exemplo.&lt;/p&gt;</pre>
    `,
    "Estrutura Global": `
        <p>As <strong>Tags de Estrutura</strong> servem para organizar o seu código. Elas separam cada área do código e dizem para o navegador o que cada parte do seu código está fazendo e que tipo de informações ela guarda. Funcionam como o esqueleto do projeto; sem essa organização, os elementos ficariam soltos e o navegador não saberia como carregar o jogo corretamente.</p>
        <p>As duas tags de estrutura mais comuns e importantes são a <code>&lt;head&gt;</code> e a <code>&lt;body&gt;</code>. A <strong>Head</strong> serve para guardar informações sobre o jogo/site (metadados), configurações de zoom e links para arquivos externos. A <strong>Body</strong> serve para inserir arquivos que realmente vão aparecer, como imagens, textos e áudios. É na body que as tags de conteúdo são inseridas.</p>
        <p>Manter essa separação é vital para a performance. No gamedev web, garantir que a estrutura esteja correta permite que o seu JavaScript encontre os elementos da interface (HUD) com facilidade, permitindo que você atualize valores de vida ou pontos de experiência sem quebrar o visual do sistema.</p>
        <pre style="${codeStyle}">&lt;html&gt;\n  &lt;head&gt; (Configurações) &lt;/head&gt;\n  &lt;body&gt; (O Jogo) &lt;/body&gt;\n&lt;/html&gt;</pre>
    `,
    "Tags de Conteúdo": `
        <p>As <strong>Tags de Conteúdo</strong> são utilizadas para a criação de textos ou a inserção de imagens e áudio. Essas tags são obrigatoriamente utilizadas dentro da parte <code>&lt;body&gt;</code> do código e podem aparecer até mesmo dentro de outras tags para formar estruturas mais complexas.</p>
        <p>Na criação de jogos com HTML, as tags de conteúdo servem para a criação de "HUDs", cenários de fundo, efeitos sonoros e personagens. É importante entender que elas servem apenas para <strong>inserir</strong> esses elementos no jogo; a animação, o movimento e as reações às teclas pressionadas são responsabilidade do JavaScript.</p>
        <p>Utilizar as tags de conteúdo de forma correta facilita a aplicação de estilos CSS. Por exemplo, ao colocar um texto de pontuação dentro de uma tag específica, você pode aplicar cores neon ou fontes pixeladas apenas naquele elemento, criando uma identidade visual única para o seu projeto.</p>
        <pre style="${codeStyle}">&lt;div class="hud"&gt;\n  &lt;span&gt;Pontos: 100&lt;/span&gt;\n&lt;/div&gt;</pre>
    `,
    "Meta Tags": `
        <p><strong>Meta tags</strong> são aquelas que ficam exclusivamente na parte <code>&lt;head&gt;</code> do código. Elas são informações que não ficam visíveis para o usuário final, mas são lidas pelo navegador para configurar como o site deve se comportar ou como deve ser exibido em motores de busca.</p>
        <p>Em geral, são muito úteis na criação de sites, mas algumas são essenciais em jogos. Meta tags definem o tamanho da tela (viewport), o nível de zoom inicial e a codificação de caracteres (UTF-8) para que os acentos não fiquem bugados. Elas garantem que seu jogo rode perfeitamente tanto em um monitor quanto em um celular.</p>
        <p>Sem as meta tags de viewport, por exemplo, um jogo feito para navegador poderia aparecer minúsculo em um dispositivo móvel. Elas preparam o "terreno" técnico para que, quando o conteúdo do jogo carregar na Body, tudo já esteja ajustado nas proporções corretas.</p>
        <pre style="${codeStyle}">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</pre>
    `,
    "Atributos": `
        <p><strong>Atributos</strong> são propriedades usadas para dar mais informações ou "poderes" às tags. Eles são escritos sempre dentro da tag de abertura. Eles permitem que você identifique um elemento de forma única ou mude como ele se comporta sem precisar criar uma tag nova.</p>
        <p>Na criação de jogos, os atributos são fundamentais para a conexão com o JavaScript. Ao dar uma <code>id="player-health"</code> para uma tag, você permite que o código do jogo localize exatamente onde deve desenhar a vida. Atributos como <code>src</code> definem o caminho de um arquivo de imagem, enquanto o <code>class</code> agrupa elementos que devem ter o mesmo estilo.</p>
        <p>Eles funcionam como a "identidade" de cada objeto no palco do navegador. Dominar o uso de atributos é o que permite transformar um HTML estático em um sistema dinâmico, onde cada elemento pode ser acessado, modificado ou movido pela lógica de programação do seu jogo.</p>
        <pre style="${codeStyle}">&lt;div id="boss" class="enemy-sprite"&gt;&lt;/div&gt;</pre>
    `
};

// Funções de Lógica do App
function getTopicContent(topic) {
    return conteudosManuais[topic.trim()] || `<p>Conteúdo da v0.2.3 em fase de redação.</p>`;
}

let currentTech = 'html';
let currentLevel = 'iniciante';

function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    db[currentTech][currentLevel].forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `<h3>${topic}</h3>`;
        card.onclick = () => {
            const htmlContent = `<h2>${topic}</h2>${getTopicContent(topic)}`;
            openModal('reader', htmlContent);
        };
        grid.appendChild(card);
    });
}

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('.main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    document.getElementById(`btn-${tech}`).classList.add(`active-${tech}`);
    renderEncGrid();
}

function setLevel(lvl, element) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    element.classList.add('active-lvl');
    renderEncGrid();
}

window.addEventListener('DOMContentLoaded', () => {
    manualLog("Base de Dados v0.2.3 carregada com sucesso.");
    renderEncGrid();
});
