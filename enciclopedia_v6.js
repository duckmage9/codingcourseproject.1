/**
 * VERSÃO CORRIGIDA: Enciclopédia GameDev
 */

let currentTech = 'html';
let currentLevel = 'iniciante';

function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if (!grid) {
        // Se o grid não existir, tenta novamente em 500ms (proteção contra carregamento lento)
        setTimeout(renderEncGrid, 500);
        return;
    }
    
    grid.innerHTML = '';
    // Acede aos dados globais carregados pelos outros ficheiros
    const source = (currentTech === 'html') ? window.conteudosHTML : window.conteudosJS;
    
    // Lista de tópicos (ajusta conforme a tua base de dados)
    const topics = ["Conceito de Tags", "Estrutura Global"]; 

    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `<h3>${topic}</h3>`;
        card.onclick = () => openModal(topic);
        grid.appendChild(card);
    });
}

function openModal(topic) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    
    // Busca conteúdo de forma segura
    let content = "Conteúdo não disponível.";
    if (currentTech === 'html' && window.conteudosHTML) content = window.conteudosHTML[topic];
    if (currentTech === 'js' && window.conteudosJS) content = window.conteudosJS[topic];

    container.innerHTML = `<h2>${topic}</h2><div>${content}</div>`;
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('active'), 10);
}

function closeModal() {
    document.getElementById('reader').classList.remove('active');
    setTimeout(() => document.getElementById('reader').style.display = 'none', 300);
}

// Inicia o motor
document.addEventListener('DOMContentLoaded', renderEncGrid);
