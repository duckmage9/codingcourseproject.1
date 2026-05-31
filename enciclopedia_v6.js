/**
 * ENCICLOPÉDIA GAMEDEV - VERSÃO V6 DEFINITIVA
 * Contém o mapeamento de todas as caixas e as funções das abas.
 */

const db = {
    html: {
        iniciante: [
            "Conceito de Tags", "Estrutura Global", "Tags de Texto", 
            "Meta Tags Técnicas", "Atributos e IDs", "Links e Navegação", 
            "Listas de Inventário", "Inserção de Mídia", "Containers Div", "Comentários de Código"
        ],
        intermediario: [
            "Elementos Semânticos (Header, Nav, Footer)", "Seções de Conteúdo (Section, Article, Aside)", 
            "Estrutura de Tabelas Simples (Table, Tr, Td)", "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)", 
            "Formulários Básicos (Form, Input, Label)", "Tipos de Input (Text, Password, Email, Button)", 
            "Seleções em Formulários (Radio, Checkbox, Select)", "Validação Nativa de Formulários", 
            "Introdução à Acessibilidade (Atributos ARIA)", "A tag <dialog> (Modais Nativos)"
        ],
        avancado: [
            "A tag <canvas> (O Palco dos Jogos)", "SVG inline (<svg> e <path>)", 
            "Imagens Responsivas (<picture> e srcset)", "Áudios Avançados (Atributos e Eventos de <audio>)", 
            "Pré-carregamento de Assets (preload e prefetch)", "Iframe Avançado (<iframe> e Sandbox)", 
            "Manipulação de Templates (<template> e <slot>)", "Armazenamento no Navegador (O papel técnico do HTML5)", 
            "Componentes Web Nativos (Custom Elements)", "Acessibilidade de Teclado Avançada (tabindex e Foco)"
        ]
    },
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

// Atualiza a tecnologia selecionada (HTML, CSS, JS)
function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('.main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    const btn = document.getElementById('btn-' + tech);
    if (btn) btn.classList.add('active-' + tech);
    
    // Volta o nível para iniciante ao trocar de tecnologia para não bugar a tela
    if (currentTech === 'js' && currentLevel === 'intermediario') currentLevel = 'iniciante'; 
    setLevel(currentLevel);
}

// Atualiza o nível selecionado (Iniciante, Intermediário, Avançado)
function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    const btn = document.getElementById('lvl-' + lvl);
    if (btn) btn.classList.add('active-lvl');
    renderEncGrid();
}

// Desenha as caixas na tela
function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    // Se a grelha ainda não carregou do GitHub, tenta de novo em meio segundo
    if (!grid) {
        setTimeout(renderEncGrid, 500);
        return;
    }
    
    grid.innerHTML = '';
    const topics = db[currentTech][currentLevel] || [];
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        
        // Escapa os símbolos matemáticos para não quebrar o visual
        const safeTitleForCard = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        card.innerHTML = `<h3>${safeTitleForCard}</h3>`;
        
        // Abre a janela de leitura ao clicar
        card.onclick = () => openModal(topic);
        grid.appendChild(card);
    });
}

// Abre a janela flutuante com o texto de estudo
function openModal(topic) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    
    let content = "<p>Conteúdo em fase de produção ou não localizado no banco de dados.</p>";

    // Verifica de qual arquivo deve puxar o texto
    if (currentTech === 'html' && typeof window.conteudosHTML !== 'undefined') {
        content = window.conteudosHTML[topic] || content;
    } else if (currentTech === 'js' && typeof window.conteudosJS !== 'undefined') {
        content = window.conteudosJS[topic] || content;
    }
    
    if (overlay && container) {
        const safeTitle = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        container.innerHTML = `<h2>${safeTitle}</h2>${content}`;
        overlay.style.display = 'flex';
        setTimeout(() => overlay.classList.add('active'), 10);
        document.body.style.overflow = 'hidden'; // Esconde a barra de rolagem do fundo
    }
}

// Fecha a janela flutuante
function closeModal() {
    const overlay = document.getElementById('reader');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Devolve a rolagem
        }, 200);
    }
}

// Clica fora da janela para fechá-la
window.addEventListener('click', (e) => {
    const overlay = document.getElementById('reader');
    if (e.target === overlay) closeModal();
});

// Dá a largada na aplicação quando o HTML termina de carregar
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    renderEncGrid();
} else {
    document.addEventListener('DOMContentLoaded', renderEncGrid);
}
