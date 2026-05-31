/**
 * ENCICLOPÉDIA GAMEDEV - VERSÃO V6 DEFINITIVA
 * Motor Completo com Navegação de Abas e Modais
 */

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
    css: { 
        iniciante: [], intermediario: [], avancado: [] 
    },
    js: { 
        iniciante: [
            "Variáveis e Constantes (let e const)", "Tipos de Dados Essenciais", 
            "Operadores Matemáticos e Lógicos", "Estruturas Condicionais (if, else, else if)", 
            "Estruturas de Repetição (for e while)", "Introdução às Funções", 
            "Arrays Simples (Listas)", "Objetos Básicos (Chave e Valor)", 
            "Manipulação Básica do DOM (getElementById)", "Eventos de Teclado e Mouse (addEventListener)"
        ], 
        intermediario: [], 
        avancado: [
            "Callbacks e Event Loop", "Promises (Promessas)", "Async / Await", 
            "Recursividade", "Manipulação Avançada de Objetos", "APIs e Fetch", 
            "Bitwise Operators (Operadores de Bit)", "Regular Expressions (Regex)", 
            "Memory Management (Garbage Collector)", "Design Patterns (Padrões de Projeto)"
        ] 
    }
};

let currentTech = 'html';
let currentLevel = 'iniciante';

// 1. Função que troca a aba principal (HTML, CSS, JS)
function setTech(tech) {
    currentTech = tech;
    
    // Remove as cores ativas de todos os botões
    document.querySelectorAll('.main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    
    // Adiciona a cor correta ao botão clicado
    const btn = document.getElementById('btn-' + tech);
    if (btn) btn.classList.add('active-' + tech);
    
    // Se mudarmos para JS, garantimos que não fica num nível vazio (como intermediário)
    if (currentTech === 'js' && currentLevel === 'intermediario') currentLevel = 'iniciante'; 
    setLevel(currentLevel);
}

// 2. Função que troca o nível de dificuldade
function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    const btn = document.getElementById('lvl-' + lvl);
    if (btn) btn.classList.add('active-lvl');
    
    // Redesenha as caixas na tela com base no novo nível
    renderEncGrid();
}

// 3. Função central que desenha os Cards
function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if (!grid) {
        setTimeout(renderEncGrid, 300); // Aguarda o HTML existir
        return;
    }
    
    grid.innerHTML = '';
    
    // Puxa a lista correta do nosso banco de dados acima
    const topics = db[currentTech][currentLevel] || [];
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        
        // Protege os títulos que têm símbolos matemáticos
        const safeTitleForCard = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        card.innerHTML = `<h3>${safeTitleForCard}</h3>`;
        
        card.onclick = () => openModal(topic);
        grid.appendChild(card);
    });
}

// 4. Função que abre o modal de leitura
function openModal(topic) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    
    let content = "<p>Conteúdo ainda não redigido ou ficheiro de dados não encontrado.</p>";

    // Injeta os textos das variáveis globais
    if (currentTech === 'html' && window.conteudosHTML && window.conteudosHTML[topic]) {
        content = window.conteudosHTML[topic];
    } else if (currentTech === 'js' && window.conteudosJS && window.conteudosJS[topic]) {
        content = window.conteudosJS[topic];
    }
    
    if (overlay && container) {
        const safeTitle = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        container.innerHTML = `<h2>${safeTitle}</h2>${content}`;
        overlay.style.display = 'flex';
        setTimeout(() => overlay.classList.add('active'), 10);
        document.body.style.overflow = 'hidden'; 
    }
}

// 5. Função que fecha o modal
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

// Fechar modal ao clicar fora da caixa de texto
window.addEventListener('click', (e) => {
    const overlay = document.getElementById('reader');
    if (e.target === overlay) closeModal();
});

// Arranca com a aplicação
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    renderEncGrid();
} else {
    document.addEventListener('DOMContentLoaded', renderEncGrid);
}
