/**
 * ENCICLOPÉDIA GAMEDEV - VERSÃO V6 (Lógica de Renderização)
 */

const db = {
    html: {
        iniciante: [
            "Conceito de Tags", "Estrutura Global", "Tags de Texto", 
            "Meta Tags Técnicas", "Atributos e IDs", "Links e Navegação", 
            "Listas de Inventário", "Inserção de Mídia", "Containers Div", "Comentários de Código"
        ],
        intermediario: [
            "Elementos Semânticos (Header, Nav, Footer)", 
            "Seções de Conteúdo (Section, Article, Aside)", 
            "Estrutura de Tabelas Simples (Table, Tr, Td)", 
            "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)", 
            "Formulários Básicos (Form, Input, Label)", 
            "Tipos de Input (Text, Password, Email, Button)", 
            "Seleções em Formulários (Radio, Checkbox, Select)", 
            "Validação Nativa de Formulários", 
            "Introdução à Acessibilidade (Atributos ARIA)", 
            "A tag <dialog> (Modais Nativos)"
        ],
        avancado: []
    },
    css: { iniciante: [], intermediario: [], avancado: [] },
    js: { iniciante: [], intermediario: [], avancado: [] }
};

let currentTech = 'html';
let currentLevel = 'iniciante';

function openModal(topic) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    let content = "<p>Conteúdo em fase de produção.</p>";

    // Busca nos conteúdos carregados globalmente
    if (currentTech === 'html' && typeof window.conteudosHTML !== 'undefined') {
        content = window.conteudosHTML[topic] || content;
    }
    
    if (overlay && container) {
        container.innerHTML = `<h2>${topic}</h2>${content}`;
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

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('.main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    const btn = document.getElementById('btn-' + tech);
    if (btn) btn.classList.add('active-' + tech);
    renderEncGrid();
}

function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    const btn = document.getElementById('lvl-' + lvl);
    if (btn) btn.classList.add('active-lvl');
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
        card.onclick = () => openModal(topic);
        grid.appendChild(card);
    });
}

// === A LINHA QUE ESTAVA FALTANDO: INICIALIZAÇÃO ===
renderEncGrid();
