// BANCO DE DADOS DA ENCICLOPÉDIA
const db = {
    html: {
        iniciante: ["Tags Básicas", "Estrutura Global", "Atributos", "Títulos (H1-H6)", "Parágrafos", "Links e Âncoras", "Listas", "Imagens", "Comentários", "Formulários Simples"],
        intermediario: ["Semântica Pro", "Tags de Áudio", "Tags de Vídeo", "Canvas 2D Básico", "Data Attributes", "SVG Inline", "Tabelas Complexas", "Iframe Integrations", "Meta Tags SEO", "Input Types Avançados"],
        avancado: ["Web Workers", "WebSockets", "Offscreen Canvas", "Service Workers", "Gamepad API", "Web Audio API", "Shadow DOM", "Template Tags", "IndexedDB", "WebAssembly"]
    },
    css: {
        iniciante: ["Seletores", "Cores e Fundos", "Fontes Básicas", "Box Model", "Padding/Margin", "Bordas", "Display Block/Inline", "ID vs Class", "CSS Interno/Externo", "Unidades PX"],
        intermediario: ["Flexbox", "CSS Grid", "Positioning", "Z-Index", "Pseudo-classes", "Pseudo-elements", "Transitions", "Media Queries", "Variables", "Unidades Relativas (REM/VW)"],
        avancado: ["Animações Keyframes", "Transformações 3D", "Filtros e Backdrop", "Clip-path", "Grid Area Mapping", "Custom Properties Dinâmicas", "Scroll Snap", "Container Queries", "Logical Properties", "CSS Houdini"]
    },
    js: {
        iniciante: ["Variáveis (let/const)", "Tipos de Dados", "Operadores", "If/Else", "Funções Simples", "Arrays", "Loops (For/While)", "Console Debugging", "Alert/Confirm", "DOM Selection"],
        intermediario: ["Event Listeners", "Arrow Functions", "Array Methods (Map/Filter)", "Objects", "JSON", "Fetch API", "Promises", "Async/Await", "Local Storage", "SetTimeout/Interval"],
        avancado: ["Game Loop Avançado", "Máquinas de Estado", "Object Pooling", "Cálculo de Colisão", "Pathfinding A*", "Design Patterns", "Web Workers Logic", "Physics Math", "Prototypes/Classes", "Memory Management"]
    }
};

let encTech = 'html';
let encLevel = 'iniciante';

function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if(!grid) return;
    
    grid.innerHTML = '';
    db[encTech][encLevel].forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `<h3>${topic}</h3>`;
        card.onclick = () => openModal('reader', `<h2>${topic}</h2><p>Conteúdo técnico sobre ${topic}.</p>`);
        grid.appendChild(card);
    });
}

function setTech(tech) {
    encTech = tech;
    document.querySelectorAll('#modo-enciclopedia .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    document.getElementById(`btn-${tech}`).classList.add(`active-${tech}`);
    renderEncGrid();
}

function setLevel(lvl) {
    encLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    event.currentTarget.classList.add('active-lvl');
    renderEncGrid();
}

// Inicia a grid assim que o arquivo carregar
window.addEventListener('DOMContentLoaded', renderEncGrid);
