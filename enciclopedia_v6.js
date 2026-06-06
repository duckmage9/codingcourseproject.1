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
    
    const dataObj = (currentExTech === 'html') ? window.exerciciosHTML : null;
    const topics = (dataObj && dataObj[currentExLevel]) ? Object.keys(dataObj[currentExLevel]) : [];
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.style.borderColor = '#f59e0b';
        
        // Verde se já completou
        if (window.usuarioLogado && window.usuarioLogado.progresso && window.usuarioLogado.progresso.includes(topic)) {
            card.style.borderColor = '#10b981';
            card.style.background = 'rgba(16, 185, 129, 0.1)';
        }

        const safeTitle = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        card.innerHTML = `<h3>Desafio:<br>${safeTitle}</h3>`;
        card.onclick = () => openModal(topic, 'exercicio');
        grid.appendChild(card);
    });
}

function openModal(topic, tipo) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    let content = "<p>Conteúdo em fase de produção.</p>";

    if (tipo === 'estudo') {
        if (currentTech === 'html' && window.conteudosHTML) content = window.conteudosHTML[topic] || content;
        else if (currentTech === 'js' && window.conteudosJS) content = window.conteudosJS[topic] || content;
        
        container.innerHTML = `<h2>${topic}</h2>${content}`;
    } 
    else if (tipo === 'exercicio') {
        let ex = null;
        if (currentExTech === 'html' && window.exerciciosHTML && window.exerciciosHTML[currentExLevel]) {
            ex = window.exerciciosHTML[currentExLevel][topic];
        }

        if (ex) {
            // Desenha a Interface das Duas Etapas
            content = `
                <div style="background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #38bdf8;">
                    <h3 style="margin-top: 0; color: #38bdf8;">Parte 1: Missão Teórica</h3>
                    <p style="font-size: 14px;">${ex.enunciado1}</p>
                    <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 15px;">
                        ${ex.opcoes.map((opt, i) => `
                            <label style="cursor: pointer; font-size: 14px; color: #cbd5e1; display: flex; align-items: center; gap: 10px;">
                                <input type="radio" name="opt-teoria" value="${i}" style="accent-color: #38bdf8; width: 16px; height: 16px;">
                                ${opt}
                            </label>
                        `).join('')}
                    </div>
                </div>

                <div style="background: rgba(245, 158, 11, 0.05); padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                    <h3 style="margin-top: 0; color: #f59e0b;">Parte 2: Missão Prática</h3>
                    <p style="font-size: 14px; color: #94a3b8; font-style: italic;">${ex.enunciado2}</p>
                    <p style="font-size: 14px;"><strong>Desafio:</strong> ${ex.questaoPratica}</p>
                    <textarea id="input-resposta" class="caixa-resposta" style="margin-top: 10px;">${ex.codigoInicial || ""}</textarea>
                </div>

                <button class="btn-verificar" onclick="processarResposta('${topic}')" style="width: 100%; margin-top: 20px; padding: 15px; font-size: 16px;">Verificar Missão Completa</button>
            `;
        }
        container.innerHTML = `<h2>Missão: ${topic}</h2>${content}`;
    }
    
    if (overlay && container) {
        overlay.style.display = 'flex';
        setTimeout(() => overlay.classList.add('active'), 10);
        document.body.style.overflow = 'hidden'; 
    }
}

// Lógica dupla de Verificação
window.processarResposta = async (topic) => {
    let ex = null;
    if (currentExTech === 'html') ex = window.exerciciosHTML[currentExLevel][topic];
    if (!ex) return;

    // 1. Validar a Teoria
    const opcaoSelecionada = document.querySelector('input[name="opt-teoria"]:checked');
    if (!opcaoSelecionada) {
        return alert("⚠️ Por favor, escolha uma opção na Parte 1 (Teórica) antes de verificar!");
    }
    
    const indiceEscolhido = parseInt(opcaoSelecionada.value);
    if (indiceEscolhido !== ex.respostaMultipla) {
        return alert("❌ A resposta da Parte Teórica está incorreta. Revise o material e tente novamente!");
    }

    // 2. Validar a Prática
    const respostaPratica = document.getElementById('input-resposta').value.trim();
    const str1 = respostaPratica.toLowerCase().replace(/\s+/g, ' ');
    const str2 = ex.correta.toLowerCase().replace(/\s+/g, ' ');

    if (str1 !== str2) {
        return alert("❌ A teoria está certa, mas o código prático está incorreto! Dê uma olhada no fechamento de tags e nos atributos.");
    }

    // Se passou pelas duas barreiras:
    alert("🎉 Missão Concluída com Perfeição! Teoria e Prática corretas.");
    
    if (window.usuarioLogado) {
        if (!window.usuarioLogado.progresso) window.usuarioLogado.progresso = [];
        if (!window.usuarioLogado.progresso.includes(topic)) {
            window.usuarioLogado.progresso.push(topic);
        }
    }
    
    if (window.salvarProgressoNuvem) {
        await window.salvarProgressoNuvem(topic);
    }
    
    closeModal();
    renderExGrid();
};

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
