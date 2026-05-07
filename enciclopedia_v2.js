// Função de Console Manual para Motores sem F12
function manualLog(msg, type = "info") {
    const consoleEl = document.getElementById('debug-console');
    if (consoleEl) {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        const time = new Date().toLocaleTimeString();
        entry.innerHTML = `<span style="color:gray">[${time}]</span> <span class="log-version">v0.1.9:</span> ${msg}`;
        consoleEl.prepend(entry); // Mostra o log mais recente no topo
    }
    console.log(msg); // Mantém no console original também
}

manualLog("Arquivo enciclopedia.js iniciado com sucesso.");

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

const codeStyle = "background: #020617; padding: 15px; border-radius: 8px; border: 1px solid #334155; overflow-x: auto; font-family: monospace; color: #38bdf8; margin-top: 15px; display: block; white-space: pre-wrap;";

const conteudosManuais = {
    "Tags Básicas": `
        <p>O HTML funciona através de <strong>Tags</strong>. Pense nelas como etiquetas que dizem ao navegador o que cada parte do texto significa.</p>
        <p>A maioria das tags tem abertura <code>&lt;tag&gt;</code> e fechamento <code>&lt;/tag&gt;</code>.</p>
        <pre style="${codeStyle}">&lt;h1&gt;Título&lt;/h1&gt;\n&lt;p&gt;Parágrafo&lt;/p&gt;</pre>
    `,
    "Estrutura Global": `
        <p>Todo arquivo precisa de um esqueleto base para ser lido corretamente pelo navegador.</p>
        <p>Usamos o <code>&lt;!DOCTYPE html&gt;</code> no topo.</p>
        <pre style="${codeStyle}">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n  &lt;title&gt;Título&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;!-- Conteúdo --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>
    `,
    "Atributos": `
        <p>Atributos dão características extras às tags, como <code>class</code> ou <code>id</code>.</p>
        <pre style="${codeStyle}">&lt;div class="heroi" id="player1"&gt;Jogador&lt;/div&gt;</pre>
    `,
    "Títulos (H1-H6)": `
        <p>Existem 6 níveis de títulos, do <code>&lt;h1&gt;</code> (maior) ao <code>&lt;h6&gt;</code> (menor).</p>
        <pre style="${codeStyle}">&lt;h1&gt;Título Principal&lt;/h1&gt;\n&lt;h2&gt;Subtítulo&lt;/h2&gt;</pre>
    `,
    "Parágrafos": `
        <p>A tag <code>&lt;p&gt;</code> define um bloco de texto comum.</p>
        <pre style="${codeStyle}">&lt;p&gt;Este é um texto de exemplo.&lt;/p&gt;</pre>
    `,
    "Links": `
        <p>Usamos <code>&lt;a&gt;</code> com o atributo <code>href</code> para criar links.</p>
        <pre style="${codeStyle}">&lt;a href="https://google.com"&gt;Link&lt;/a&gt;</pre>
    `,
    "Listas": `
        <p>Listas podem ser numeradas (<code>&lt;ol&gt;</code>) ou com marcadores (<code>&lt;ul&gt;</code>).</p>
        <pre style="${codeStyle}">&lt;ul&gt;\n  &lt;li&gt;Item A&lt;/li&gt;\n  &lt;li&gt;Item B&lt;/li&gt;\n&lt;/ul&gt;</pre>
    `,
    "Imagens": `
        <p>A tag <code>&lt;img&gt;</code> mostra fotos. Precisa de <code>src</code> e <code>alt</code>.</p>
        <pre style="${codeStyle}">&lt;img src="foto.jpg" alt="Descrição"&gt;</pre>
    `,
    "Comentários": `
        <p>Comentários servem para anotar coisas no código sem que elas apareçam no site.</p>
        <pre style="${codeStyle}">&lt;!-- Isso é um comentário --&gt;</pre>
    `,
    "Formulários": `
        <p>Usamos <code>&lt;form&gt;</code> e <code>&lt;input&gt;</code> para coletar dados.</p>
        <pre style="${codeStyle}">&lt;form&gt;\n  &lt;input type="text"&gt;\n  &lt;button&gt;Enviar&lt;/button&gt;\n&lt;/form&gt;</pre>
    `
};

function getTopicContent(topic) {
    const limpo = topic.trim();
    manualLog(`Abrindo tópico: ${limpo}`);
    if (conteudosManuais[limpo]) {
        return conteudosManuais[limpo];
    }
    return `<p>Conteúdo em desenvolvimento.</p>`;
}

let currentTech = 'html';
let currentLevel = 'iniciante';

function renderEncGrid() {
    manualLog(`Renderizando grade: ${currentTech} - ${currentLevel}`);
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
    document.querySelectorAll('#modo-enciclopedia .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    const target = document.getElementById(`btn-${tech}`);
    if(target) target.classList.add(`active-${tech}`);
    renderEncGrid();
}

function setLevel(lvl, element) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    if(element) element.classList.add('active-lvl');
    renderEncGrid();
}

window.addEventListener('DOMContentLoaded', () => {
    manualLog("DOM Carregado - Iniciando sistema.");
    renderEncGrid();
});
