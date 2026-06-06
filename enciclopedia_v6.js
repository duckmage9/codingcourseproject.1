// ==========================================
// BANCOS DE DADOS GLOBAIS DA ENCICLOPÉDIA
// ==========================================
const db = {
    html: {
        iniciante: ["Conceito de Tags", "Estrutura Global", "Tags de Texto", "Meta Tags Técnicas", "Atributos e IDs", "Links e Navegação", "Listas de Inventário", "Inserção de Mídia", "Containers Div", "Comentários de Código"],
        intermediario: ["Elementos Semânticos (Header, Nav, Footer)", "Seções de Conteúdo (Section, Article, Aside)", "Estrutura de Tabelas Simples (Table, Tr, Td)", "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)", "Formulários Básicos (Form, Input, Label)", "Tipos de Input (Text, Password, Email, Button)", "Seleções em Formulários (Radio, Checkbox, Select)", "Validação Nativa de Formulários", "Introdução à Acessibilidade (Atributos ARIA)", "A tag <dialog> (Modais Nativos)"],
        avancado: ["A tag <canvas> (O Palco dos Jogos)", "SVG inline (<svg> e <path>)", "Imagens Responsivas (<picture> e srcset)", "Áudios Avançados (Atributos e Eventos de <audio>)", "Pré-carregamento de Assets (preload e prefetch)", "Iframe Avançado (<iframe> e Sandbox)", "Manipulação de Templates (<template> e <slot>)", "Armazenamento no Navegador (O papel técnico do HTML5)", "Componentes Web Nativos (Custom Elements)", "Acessibilidade de Teclado Avançada (tabindex e Foco)"]
    },
    css: { iniciante: [], intermediario: [], avancado: [] },
    js: { 
        iniciante: ["Variáveis e Constantes (let e const)", "Tipos de Dados Essenciais", "Operadores Matemáticos e Lógicos", "Estruturas Condicionais (if, else, else if)", "Estruturas de Repetição (for e while)", "Introdução às Funções", "Arrays Simples (Listas)", "Objetos Básicos (Chave e Valor)", "Manipulação Básica do DOM (getElementById)", "Eventos de Teclado e Mouse (addEventListener)"], 
        intermediario: ["O Game Loop e requestAnimationFrame", "Delta Time (Movimento Suave)", "Classes e Construtores (POO)", "Física de Pulo e Gravidade", "Colisão Retangular (AABB)", "Animação e Spritesheets", "Controle de Estados Simples", "Vetores e Movimentação 2D", "Arrays e Gerenciamento de Entidades", "Modularização (Módulos JS)"], 
        avancado: ["Callbacks e Event Loop", "Promises (Promessas)", "Async / Await", "Recursividade", "Manipulação Avançada de Objetos", "APIs e Fetch", "Bitwise Operators (Operadores de Bit)", "Regular Expressions (Regex)", "Memory Management (Garbage Collector)", "Design Patterns (Padrões de Projeto)"] 
    }
};

let currentTech = 'html';
let currentLevel = 'iniciante';
let currentExTech = 'html';
let currentExLevel = 'iniciante';

// Lógica da Aba Enciclopédia
function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('#view-enciclopedia .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    document.getElementById('btn-' + tech).classList.add('active-' + tech);
    if (currentTech === 'js' && currentLevel === 'intermediario' && db.js.intermediario.length === 0) currentLevel = 'iniciante';
    setLevel(currentLevel);
}

function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('#view-enciclopedia .lvl-btn').forEach(b => b.classList.remove('active-lvl'));
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
        const safeTitle = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        card.innerHTML = `<h3>${safeTitle}</h3>`;
        card.onclick = () => openModal(topic, 'estudo');
        grid.appendChild(card);
    });
}

// Lógica da Aba Exercícios
function setExTech(tech) {
    currentExTech = tech;
    document.querySelectorAll('#view-exercicios .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    document.getElementById('btn-ex-' + tech).classList.add('active-' + tech);
    renderExGrid();
}

function setExLevel(lvl) {
    currentExLevel = lvl;
    document.querySelectorAll('#view-exercicios .lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    document.getElementById('lvl-ex-' + lvl).classList.add('active-lvl');
    renderExGrid();
}

function renderExGrid() {
    const grid = document.getElementById('ex-topics-grid-' + currentExTech);
    if (!grid) return;
    
    document.getElementById('ex-topics-grid-html').style.display = 'none';
    document.getElementById('ex-topics-grid-css').style.display = 'none';
    document.getElementById('ex-topics-grid-js').style.display = 'none';
    grid.style.display = 'grid';

    grid.innerHTML = '';
    
    // Puxa a lista de exercícios do objeto carregado globalmente na pasta /exercicios
    const dataObj = (currentExTech === 'html') ? window.exerciciosHTML : null;
    const topics = (dataObj && dataObj[currentExLevel]) ? Object.keys(dataObj[currentExLevel]) : [];
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.style.borderColor = '#f59e0b';
        const safeTitle = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        card.innerHTML = `<h3>Desafio:<br>${safeTitle}</h3>`;
        card.onclick = () => openModal(topic, 'exercicio');
        grid.appendChild(card);
    });
}

// Modal Universal (Serve para Leitura e para Exercícios)
function openModal(topic, tipo) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    let content = "<p>Conteúdo em fase de produção.</p>";

    if (tipo === 'estudo') {
        if (currentTech === 'html' && window.conteudosHTML) content = window.conteudosHTML[topic] || content;
        else if (currentTech === 'js' && window.conteudosJS) content = window.conteudosJS[topic] || content;
    } else if (tipo === 'exercicio') {
        if (currentExTech === 'html' && window.exerciciosHTML && window.exerciciosHTML[currentExLevel]) {
            content = window.exerciciosHTML[currentExLevel][topic] || content;
        }
    }
    
    if (overlay && container) {
        const safeTitle = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const tituloPrefixo = tipo === 'exercicio' ? 'Missão: ' : '';
        container.innerHTML = `<h2>${tituloPrefixo}${safeTitle}</h2>${content}`;
        overlay.style.display = 'flex';
        setTimeout(() => overlay.classList.add('active'), 10);
        document.body.style.overflow = 'hidden'; 
    }
}

function closeModal() {
    const overlay = document.getElementById('reader');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        }, 200);
    }
}

window.addEventListener('click', (e) => {
    const overlay = document.getElementById('reader');
    if (e.target === overlay) closeModal();
});

function aguardarDadosERenderizar() {
    // Verifica se os arquivos de conteúdo E o de exercícios foram carregados
    if (typeof window.conteudosHTML !== 'undefined' && typeof window.exerciciosHTML !== 'undefined') {
        renderEncGrid();
        renderExGrid();
    } else {
        setTimeout(aguardarDadosERenderizar, 100);
    }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    aguardarDadosERenderizar();
} else {
    document.addEventListener('DOMContentLoaded', aguardarDadosERenderizar);
}
