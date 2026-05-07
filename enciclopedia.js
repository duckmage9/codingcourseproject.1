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
        iniciante: ["Variables", "Data Types", "Operators", "If/Else", "Functions", "Arrays", "Loops", "Console", "DOM Select", "Events"],
        intermediario: ["Listeners", "Arrow Functions", "Array Methods", "Objects", "JSON", "Fetch", "Promises", "Async/Await", "Local Storage", "Timers"],
        avancado: ["Game Loop", "State Machines", "Collision", "Pathfinding", "Web Workers", "Physics Math", "Prototypes", "Memory", "A* Algorithm", "Design Patterns"]
    }
};

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
        card.onclick = () => openModal('reader', `<h2>${topic}</h2><p>Estudando ${topic} na trilha de ${currentTech.toUpperCase()} (${currentLevel}). Conteúdo técnico em desenvolvimento.</p>`);
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

// Inicializar ao carregar
window.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('topics-grid')) renderEncGrid();
});
