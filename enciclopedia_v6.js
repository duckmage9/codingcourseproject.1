// ========================================================
// BANCO DE DADOS DA ENCICLOPÉDIA E DESAFIOS (EXERCÍCIOS ANTIGOS)
// ========================================================
const db = {
    html: {
        iniciante: ["Conceito de Tags", "Estrutura Global", "Tags de Texto", "Meta Tags Técnicas", "Atributos e IDs", "Links e Navegação", "Listas de Inventário", "Inserção de Mídia", "Containers Div", "Comentários de Código"],
        intermediario: ["Elements Semânticos", "Seções de Conteúdo", "Formulários Básicos", "Validação Nativa"],
        avancado: ["A tag <canvas>", "SVG inline", "Componentes Web Nativos"]
    },
    css: { 
        iniciante: ["1. Seletores Básicos", "2. O Box Model", "3. Cores e Backgrounds"], 
        intermediario: ["11. Posicionamento", "12. Fundamentos do Flexbox", "14. Fundamentos do CSS Grid"], 
        avancado: ["21. Animações Complexas", "24. Funções Matemáticas"] 
    },
    js: { 
        iniciante: ["Variáveis e Constantes", "Estruturas Condicionais", "Estruturas de Repetição"], 
        intermediario: ["O Game Loop", "Física de Pulo e Gravidade", "Colisão Retangular"], 
        avancado: ["Promises (Promessas)", "Async / Await", "Design Patterns"] 
    }
};

// Bancos auxiliares para os Desafios Práticos Antigos (Renomeados)
window.conteudosDesafiosAntigos = {
    "Conceito de Tags": { instrucoes: "Crie uma tag de parágrafo contendo o texto 'Ola'.", correta: "<p>Ola</p>" },
    "1. Seletores Básicos": { instrucoes: "Defina a cor de fundo do body como preto no CSS.", correta: "body{background:black;}" },
    "Variáveis e Constantes": { instrucoes: "Declare uma constante chamada total igual a 100.", correta: "consttotal=100;" }
};

let currentTech = 'html';
let currentLevel = 'iniciante';

let currentDesafioTech = 'html';
let currentDesafioLevel = 'iniciante';

// Controles Globais de Navegação da Enciclopédia
function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('#view-enciclopedia .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    document.getElementById('btn-' + tech).classList.add('active-' + tech);
    renderEncGrid();
}
function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('#view-enciclopedia .lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    document.getElementById('lvl-' + lvl).classList.add('active-lvl');
    renderEncGrid();
}

// Controles Globais de Navegação dos Desafios (Exercícios Antigos)
function setDesafioTech(tech) {
    currentDesafioTech = tech;
    document.querySelectorAll('#view-desafios .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    document.getElementById('desafio-btn-' + tech).classList.add('active-' + tech);
    renderDesafiosGrid();
}
function setDesafioLevel(lvl) {
    currentDesafioLevel = lvl;
    document.querySelectorAll('#view-desafios .lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    document.getElementById('lvl-desafio-' + lvl).classList.add('active-lvl');
    renderDesafiosGrid();
}

// RENDERIZAR GRIDS
function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const topics = db[currentTech][currentLevel] || [];
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `<h3>${topic}</h3>`;
        card.onclick = () => openModal(topic, 'estudo');
        grid.appendChild(card);
    });
}

function renderDesafiosGrid() {
    const grid = document.getElementById('desafios-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const topics = db[currentDesafioTech][currentDesafioLevel] || [];
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.style.borderColor = '#e2e8f0';
        
        if (window.usuarioLogado && window.usuarioLogado.progresso && window.usuarioLogado.progresso.includes(topic)) {
            card.style.borderColor = '#10b981';
            card.style.background = 'rgba(16, 185, 129, 0.1)';
        }
        card.innerHTML = `<h3>Desafio:<br>${topic}</h3>`;
        card.onclick = () => openModal(topic, 'desafio-antigo');
        grid.appendChild(card);
    });
}

function renderMissoesGrid() {
    const grid = document.getElementById('missoes-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    const missoes = window.missoesProjetos || [];
    let anteriorConcluido = true; // A primeira missão sempre está liberada
    
    missoes.forEach((missao, index) => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        
        const jaConcluiu = window.usuarioLogado && window.usuarioLogado.progresso && window.usuarioLogado.progresso.includes(missao.titulo);
        const estaBloqueada = !anteriorConcluido;

        if (estaBloqueada) {
            card.style.borderColor = '#475569';
            card.style.opacity = '0.4';
            card.innerHTML = `<h3>🔒 ${missao.titulo}</h3><p style="font-size:11px; color:#64748b; margin-top:5px;">Bloqueado</p>`;
            card.onclick = () => alert("🔒 Esta missão está bloqueada! Conclua todas as missões anteriores primeiro.");
        } else {
            if (jaConcluiu) {
                card.style.borderColor = '#10b981';
                card.style.background = 'rgba(16, 185, 129, 0.1)';
                card.innerHTML = `<h3>✅ ${missao.titulo}</h3>`;
            } else {
                card.style.borderColor = '#f59e0b';
                card.innerHTML = `<h3>🚀 ${missao.titulo}</h3>`;
            }
            card.onclick = () => openModal(missao.titulo, 'missao-nova', index);
        }
        
        // Para a próxima iteração, checa se a atual foi feita
        anteriorConcluido = jaConcluiu;
        grid.appendChild(card);
    });
}

// GERENCIAMENTO DE MODAL
function openModal(topic, tipo, index = null) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    const title = document.getElementById('reader-title');
    
    title.innerText = topic;
    container.innerHTML = "";

    if (tipo === 'estudo') {
        container.innerHTML = `<p>Conteúdo teórico do tópico <b>${topic}</b> em desenvolvimento.</p>`;
    } 
    else if (tipo === 'desafio-antigo') {
        const ex = window.conteudosDesafiosAntigos[topic] || { instrucoes: "Escreva o código correto para este desafio.", correta: "" };
        container.innerHTML = `
            <p style="color:#f59e0b;"><b>Instruções do Desafio Técnico:</b></p>
            <div style="background:#020617; padding:15px; border-radius:5px; margin-bottom:15px;">${ex.instrucoes}</div>
            <textarea id="input-resposta" class="caixa-resposta" placeholder="Digite seu código aqui..."></textarea>
            <button class="btn-verificar" onclick="validarDesafioAntigo('${topic}', '${ex.correta}')">Validar Desafio</button>
        `;
    }
    else if (tipo === 'missao-nova') {
        const missao = window.missoesProjetos[index];
        container.innerHTML = `
            <div style="background: rgba(56, 189, 248, 0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #38bdf8;">
                <h3 style="margin-top:0; color:#38bdf8;">📜 Instruções de Desenvolvimento</h3>
                <div style="font-size:14px; line-height:1.6;">${missao.instrucoes}</div>
            </div>
            <div style="background: rgba(245, 158, 11, 0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <h3 style="margin-top:0; color:#f59e0b;">💻 Ambiente Unificado de Código</h3>
                <textarea id="input-resposta" class="caixa-resposta" style="height:300px; font-family:monospace;">${missao.codigoInicial}</textarea>
            </div>
            <button class="btn-verificar" onclick="validarMissaoNova(${index})" style="width:100%; margin-top:15px; padding:12px;">Submeter Projeto Completo</button>
        `;
    }
    
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('active'), 10);
}

// MOTORES DE VALIDAÇÃO (LIMPEZA MÁXIMA DE ESPAÇOS/QUEBRAS)
window.validarDesafioAntigo = async (topic, stringCorreta) => {
    const input = document.getElementById('input-resposta').value;
    if (cleanString(input) === cleanString(stringCorreta)) {
        alert("🎉 Desafio Concluído!");
        await salvarEAtualizar(topic);
    } else {
        alert("❌ Resposta incorreta. Verifique a sintaxe.");
    }
};

window.validarMissaoNova = async (index) => {
    const missao = window.missoesProjetos[index];
    const input = document.getElementById('input-resposta').value;
    
    if (cleanString(input).includes(cleanString(missao.correta)) || cleanString(input) === cleanString(missao.correta)) {
        alert("🎉 Espetacular! Missão cumprida com sucesso. Próximo projeto desbloqueado!");
        await salvarEAtualizar(missao.titulo);
    } else {
        alert("❌ Seu código ainda não atende a todos os requisitos descritos no guia. Revise as funções e IDs!");
    }
};

function cleanString(str) {
    if (!str) return "";
    return str.toLowerCase().replace(/\s+/g, '').replace(/;/g, '').replace(/['"]/g, '');
}

async function salvarEAtualizar(item) {
    if (window.usuarioLogado) {
        if (!window.usuarioLogado.progresso.includes(item)) window.usuarioLogado.progresso.push(item);
        if (window.salvarProgressoNuvem) await window.salvarProgressoNuvem(item);
    }
    closeModal();
    renderDesafiosGrid();
    renderMissoesGrid();
}

function closeModal() {
    const overlay = document.getElementById('reader');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => { overlay.style.display = 'none'; }, 200);
    }
}

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('reader')) closeModal();
});

function inicializarAppCompleto() {
    renderEncGrid();
    renderDesafiosGrid();
    renderMissoesGrid();
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(inicializarAppCompleto, 500);
} else {
    document.addEventListener('DOMContentLoaded', inicializarAppCompleto);
}
