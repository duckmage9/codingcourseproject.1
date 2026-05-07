const db = {
    html: {
        iniciante: ["Tags Básicas", "Estrutura Global", "Atributos", "Títulos (H1-H6)", "Parágrafos", "Links", "Listas", "Imagens", "Comentários", "Formulários"],
        intermediario: ["Semântica", "Áudio e Vídeo", "Canvas Básico", "SVG", "Data Attributes", "Tabelas", "Iframes", "Meta Tags", "SEO Base", "Inputs Avançados"],
        avancado: ["Web Workers", "WebSockets", "Offscreen Canvas", "Service Workers", "Gamepad API", "Web Audio", "Shadow DOM", "Templates", "IndexedDB", "WebAssembly"]
    },
    css: {
        iniciante: ["Seletores", "Cores", "Box Model", "Padding/Margin", "Bordas", "Display", "Flexbox Base", "Fonts", "CSS Externo", "Units (PX/%)"],
        intermediario: ["Flexbox Avançado", "CSS Grid", "Position", "Z-index", "Pseudo-classes", "Pseudo-elements", "Transitions", "Media Queries", "Variables", "Units (REM/VW)"],
        avancado: ["Animations", "3D Transforms", "Filters", "Clip-path", "Grid Area", "Custom Props", "Scroll Snap", "Container Queries", "Logical Props", "Houdini"]
    },
    js: {
        iniciante: ["Variáveis", "Tipos de Dados", "Operadores", "If/Else", "Funções", "Arrays", "Loops", "Console", "DOM Select", "Eventos"],
        intermediario: ["Listeners", "Arrow Functions", "Array Methods", "Objetos", "JSON", "Fetch", "Promises", "Async/Await", "Local Storage", "Timers"],
        avancado: ["Game Loop", "State Machines", "Colisão", "Pathfinding", "Web Workers", "Física Básica", "Prototypes", "Memória", "A* Algorithm", "Design Patterns"]
    }
};

// Estilo embutido para os blocos de código
const codeStyle = "background: #020617; padding: 15px; border-radius: 8px; border: 1px solid #334155; overflow-x: auto; font-family: monospace; color: #38bdf8; margin-top: 15px;";

// Banco de dados com conteúdos escritos à mão para os fundamentos
const conteudosManuais = {
    "Tags Básicas": `
        <p>O HTML funciona através de <strong>Tags</strong>. Pense nas tags como etiquetas de organização que dizem ao navegador o que cada pedaço de texto significa na sua página, seja um título, um parágrafo ou um botão para o seu jogo.</p>
        <p>A imensa maioria das tags possui uma estrutura de abertura (usando os sinais <code>&lt; &gt;</code>) e uma de fechamento (adicionando uma barra <code>&lt;/ &gt;</code>). Todo o conteúdo que você deseja formatar deve ser colocado exatamente entre essas duas etiquetas.</p>
        <p>Para dar o seu primeiro passo prático, você pode testar a criação de um título principal acompanhado de um texto simples. Copie o código abaixo e cole no seu editor:</p>
        <pre style="${codeStyle}">&lt;h1&gt;Bem-vindo ao meu Jogo&lt;/h1&gt;\n&lt;p&gt;Esta é a tela inicial do meu projeto incrível.&lt;/p&gt;</pre>
    `,
    "Estrutura Global": `
        <p>Todo arquivo HTML precisa de um esqueleto invisível para funcionar corretamente. Essa estrutura global é o que o navegador lê primeiro para entender que tipo de documento ele está prestes a renderizar.</p>
        <p>A estrutura é dividida em duas partes principais: o <code>&lt;head&gt;</code> (cabeça), onde colocamos as configurações, links de CSS e título da aba; e o <code>&lt;body&gt;</code> (corpo), onde vai tudo o que o usuário realmente vê e interage.</p>
        <p>Abaixo está o código essencial que você deve colocar em todo arquivo <code>.html</code> que criar antes de começar a programar o conteúdo:</p>
        <pre style="${codeStyle}">&lt;!DOCTYPE html&gt;\n&lt;html lang="pt-br"&gt;\n&lt;head&gt;\n   &lt;meta charset="UTF-8"&gt;\n   &lt;title&gt;Meu Primeiro Projeto&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n   &lt;!-- O visual do site vai aqui --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>
    `,
    "Seletores": `
        <p>No CSS, os <strong>Seletores</strong> são a forma como nós "miramos" em um elemento do HTML para mudar o visual dele. Sem eles, o CSS não saberia quem pintar, redimensionar ou animar.</p>
        <p>Você pode selecionar elementos pelo nome da tag (ex: <code>p</code>), pela classe usando um ponto (ex: <code>.minha-classe</code>), ou pelo ID usando uma hashtag (ex: <code>#meu-id</code>). A classe é a mais recomendada, pois pode ser repetida em vários elementos.</p>
        <p>Veja no exemplo abaixo como criamos uma regra para mudar a cor de todos os botões que tiverem a classe "btn-start":</p>
        <pre style="${codeStyle}">.btn-start {\n   background-color: #10b981;\n   color: white;\n   padding: 10px 20px;\n   border-radius: 5px;\n}</pre>
    `,
    "Cores": `
        <p>Trabalhar com cores no CSS vai muito além de digitar "red" ou "blue". Para ter um design profissional, utilizamos sistemas de cores precisos, como códigos Hexadecimais ou RGB, que nos dão acesso a milhões de tons.</p>
        <p>Existem duas propriedades principais que você mais vai usar: <code>color</code> (que muda a cor do texto ou da fonte) e <code>background-color</code> (que muda a cor do fundo da caixa inteira do elemento).</p>
        <p>No código abaixo, estilizamos uma caixa com um fundo escuro e o texto em um tom de azul claro usando o sistema Hexadecimal:</p>
        <pre style="${codeStyle}">.caixa-escura {\n   background-color: #0f172a;\n   color: #38bdf8;\n}</pre>
    `,
    "Variáveis": `
        <p>Em JavaScript, as <strong>Variáveis</strong> são como pequenas caixas ou gavetas na memória do computador onde guardamos informações para usar mais tarde. Sem elas, seu jogo não lembraria a pontuação do jogador ou o nome do personagem.</p>
        <p>Hoje em dia, usamos principalmente duas palavras-chave para criar essas caixas: <code>let</code> (para valores que vão mudar com o tempo, como a vida do jogador) e <code>const</code> (para valores fixos que nunca mudam, como o limite máximo de tempo).</p>
        <p>Experimente criar as suas primeiras variáveis e exibi-las no console do navegador com o código abaixo:</p>
        <pre style="${codeStyle}">const nomeJogador = "duckmage9";\nlet pontuacao = 0;\n\n// Ganhando pontos...\npontuacao = pontuacao + 10;\n\nconsole.log(nomeJogador + " tem " + pontuacao + " pontos!");</pre>
    `,
    "Funções": `
        <p>As <strong>Funções</strong> são blocos de código que empacotam uma série de comandos. Elas servem para que você não precise reescrever o mesmo código várias vezes. Pense nelas como uma receita de bolo: você escreve os passos uma vez, e depois é só "chamar" a receita para o bolo ser feito.</p>
        <p>Você pode passar informações para dentro de uma função (chamadas de parâmetros) e ela pode devolver um resultado. Isso é essencial para organizar a lógica de movimentação, ataques ou cálculos matemáticos do seu projeto.</p>
        <p>Aqui está como você cria uma função simples que soma dois números e depois pede para o JavaScript executá-la:</p>
        <pre style="${codeStyle}">function curarJogador(vidaAtual, pocao) {\n   let novaVida = vidaAtual + pocao;\n   return novaVida;\n}\n\nlet minhaVida = curarJogador(50, 25);\nconsole.log("Vida atualizada: " + minhaVida);</pre>
    `
};

// Motor que gera conteúdo para as caixas que não foram escritas manualmente ainda
function getTopicContent(tech, level, topic) {
    // 1. Tenta pegar o conteúdo feito à mão
    if (conteudosManuais[topic]) {
        return conteudosManuais[topic];
    }

    // 2. Se não tiver, gera um conteúdo instrucional dinâmico excelente
    const nomesTech = { html: 'HTML5', css: 'CSS3', js: 'JavaScript' };
    const techNome = nomesTech[tech];

    return `
        <p>Você está explorando o conceito de <strong>${topic}</strong> dentro da arquitetura do ${techNome}. Compreender este fundamento no nível <strong>${level}</strong> é um passo muito importante para expandir o que você consegue construir na web e no desenvolvimento de jogos.</p>
        <p>Na prática, o uso correto de ${topic} permite que o seu código fique mais organizado, performático e capaz de lidar com lógicas mais complexas. Ao aplicar este recurso, o seu foco deve ser sempre entender como ele interage com o restante dos elementos da tela e do motor do jogo.</p>
        <p>Para começar a testar este conceito hoje mesmo, prepare a estrutura abaixo no seu editor de código e comece a adicionar a sua própria lógica dentro dela:</p>
        <pre style="${codeStyle}">/* Estrutura base para praticar ${topic} em ${techNome} */\n\n// 1. Declare seus elementos ou seletores aqui\n// 2. Aplique a lógica de ${topic}\n// 3. Teste o resultado visual ou no console\n\nconsole.log("Sistema de ${topic} inicializado com sucesso!");</pre>
    `;
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
            const htmlContent = `
                <h2>${topic}</h2>
                ${getTopicContent(currentTech, currentLevel, topic)}
            `;
            openModal('reader', htmlContent);
        };
        
        grid.appendChild(card);
    });
}

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('#modo-enciclopedia .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    document.getElementById(`btn-${tech}`).classList.add(`active-${tech}`);
    renderEncGrid();
}

function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    event.currentTarget.classList.add('active-lvl');
    renderEncGrid();
}

// Inicializar a grade ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('topics-grid')) renderEncGrid();
});
