// Banco de dados organizado por Tecnologia e Nível
const db = {
    html: {
        iniciante: ["Tags Básicas", "Estrutura Global", "Tags de Conteúdo", "Meta Tags", "Atributos"],
        intermediario: ["Conteúdo em breve..."],
        avancado: ["Conteúdo em breve..."]
    },
    css: {
        iniciante: ["Seletores", "Box Model"],
        intermediario: [],
        avancado: []
    },
    js: {
        iniciante: ["Variáveis", "Funções"],
        intermediario: [],
        avancado: []
    }
};

const codeStyle = "background: #020617; padding: 15px; border-radius: 8px; border: 1px solid #334155; color: #38bdf8; display: block; white-space: pre-wrap; margin-top: 10px; font-family: monospace; border-left: 4px solid #38bdf8;";

const conteudosManuais = {
    "Tags Básicas": `
        <p>As <strong>Tags</strong> servem para dar mais informações sobre o código para o programa ou navegador. Elas funcionam como etiquetas que classificam cada elemento. As tags são abertas com <code>&lt;tag&gt;</code> e a maioria é fechada com <code>&lt;/tag&gt;</code>.</p>
        <p>No desenvolvimento de jogos, as tags são fundamentais para criar a interface. Elas classificam cada elemento, permitindo que o navegador entenda o que é um botão de comando, um título de menu ou uma descrição de item.</p>
        <pre style="${codeStyle}">&lt;p&gt;Este é um parágrafo básico de informação.&lt;/p&gt;</pre>
    `,
    "Estrutura Global": `
        <p>As <strong>Tags de Estrutura</strong> servem para organizar o seu código. Elas separam cada área do código e dizem para o navegador o que cada parte do seu código está fazendo e que tipo de informações ela guarda. As duas tags de estrutura mais comuns e importantes são a <code>&lt;head&gt;</code> e a <code>&lt;body&gt;</code>.</p>
        <p>A <strong>Head</strong> serve para guardar informações sobre o jogo/site, como links para arquivos externos e as meta tags. A <strong>Body</strong> serve para inserir os arquivos que realmente vão aparecer para o jogador, como as imagens dos personagens, textos de diálogos e áudios.</p>
        <pre style="${codeStyle}">&lt;html&gt;\n &lt;head&gt; Configurações &lt;/head&gt;\n &lt;body&gt; Conteúdo Visível &lt;/body&gt;\n&lt;/html&gt;</pre>
    `,
    "Tags de Conteúdo": `
        <p>As <strong>Tags de Conteúdo</strong> são utilizadas para a criação de textos ou a inserção de imagens ou áudio. Essas tags são utilizadas na parte Body do código e podem aparecer até mesmo dentro de outras tags.</p>
        <p>Na criação de jogos com HTML, as tags de conteúdo servem para a criação de “huds”, cenários, áudios e personagens. Elas são responsáveis por <strong>colocar</strong> os elementos no jogo, mas lembre-se: a animação e as reações aos comandos do jogador são feitas no JavaScript.</p>
        <pre style="${codeStyle}">&lt;img src="sprite.png"&gt;\n&lt;h1&gt;Pontuação: 100&lt;/h1&gt;</pre>
    `,
    "Meta Tags": `
        <p><strong>Meta tags</strong> são aquelas que ficam na parte <code>&lt;head&gt;</code> do código. Elas são informações que não ficam visíveis para o usuário mas são lidas pelo navegador para conseguir mais informações técnicas sobre o site.</p>
        <p>Em jogos para navegador, elas são essenciais para definir o tamanho da tela (viewport) e o zoom, garantindo que o jogo apareça corretamente tanto no computador quanto no celular.</p>
        <pre style="${codeStyle}">&lt;meta charset="UTF-8"&gt;\n&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</pre>
    `,
    "Atributos": `
        <p><strong>Atributos</strong> são propriedades que adicionamos dentro das tags para dar características extras a elas. O exemplo mais comum em jogos é o <code>id</code>, que dá um nome único para a tag, facilitando para o JavaScript encontrar aquele elemento e mudar sua vida ou posição durante a partida.</p>
        <pre style="${codeStyle}">&lt;div id="player-health" class="ui-element"&gt;&lt;/div&gt;</pre>
    `
};

let currentTech = 'html';
let currentLevel = 'iniciante';

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('.main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    document.getElementById('btn-' + tech).classList.add('active-' + tech);
    renderEncGrid();
}

function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    document.getElementById('lvl-' + lvl).classList.add('active-lvl');
    renderEncGrid();
}

function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const topics = db[currentTech][currentLevel] || [];
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `<h3>${topic}</h3>`;
        card.onclick = () => {
            const content = conteudosManuais[topic] || "<p>Conteúdo em fase de produção.</p>";
            if (typeof openModal === 'function') {
                openModal('reader', `<h2>${topic}</h2>${content}`);
            } else {
                alert(topic);
            }
        };
        grid.appendChild(card);
    });
}

// Inicialização automática
renderEncGrid();
