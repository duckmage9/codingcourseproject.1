// ========================================================
// BANCO DE DADOS GIGANTE DA ENCICLOPÉDIA (COMPLETO E SEM NÚMEROS NO CSS)
// ========================================================
const db = {
    html: {
        iniciante: ["Conceito de Tags", "Estrutura Global", "Tags de Texto", "Meta Tags Técnicas", "Atributos e IDs", "Links e Navegação", "Listas de Inventário", "Inserção de Mídia", "Containers Div", "Comentários de Código"],
        intermediario: ["Elementos Semânticos (Header, Nav, Footer)", "Seções de Conteúdo (Section, Article, Aside)", "Estrutura de Tabelas Simples (Table, Tr, Td)", "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)", "Formulários Básicos (Form, Input, Label)", "Tipos de Input (Text, Password, Email, Button)", "Seleções em Formulários (Radio, Checkbox, Select)", "Validação Nativa de Formulários", "Introdução à Acessibilidade (Atributos ARIA)", "A tag <dialog> (Modais Nativos)"],
        avancado: ["A tag <canvas> (O Palco dos Jogos)", "SVG inline (<svg> e <path>)", "Imagens Responsivas (<picture> e srcset)", "Áudios Avançados (Atributos e Eventos de <audio>)", "Pré-carregamento de Assets (preload e prefetch)", "Iframe Avançado (<iframe> e Sandbox)", "Manipulação de Templates (<template> e <slot>)", "Armazenamento no Navegador (O papel técnico do HTML5)", "Componentes Web Nativos (Custom Elements)", "Acessibilidade de Teclado Avançada (tabindex e Foco)"]
    },
    css: { 
        iniciante: ["Seletores Básicos e Combinadores", "O Box Model (Modelo de Caixa)", "Cores e Backgrounds", "Tipografia Web", "Unidades de Medida", "Display Básico", "Bordas e Arredondamentos", "Sombras Simples", "Estados Básicos (Pseudo-classes)", "Variáveis CSS Nativas (Básico)"], 
        intermediario: ["Posicionamento (Position) e z-index", "Fundamentos do Flexbox", "Flexbox Avançado", "Fundamentos do CSS Grid", "Pseudo-elementos (::before e ::after)", "Transições Suaves (Transitions)", "Transformações 2D (Transforms)", "Design Responsivo (Media Queries)", "Pseudo-classes Avançadas", "Filtros Gráficos (Filters e Blend Modes)"], 
        avancado: ["Animações Complexas com Keyframes", "Transformações 3D", "CSS Grid Layout Avançado", "Funções Matemáticas", "Clip-path e Formas Complexas", "Scroll Snapping e Scrollbars Estilizadas", "Container Queries (@container)", "Arquitetura CSS (Metodologia BEM)", "Efeitos Visuais Modernos (Glassmorphism e Neumorphism)", "Integração de Variáveis CSS com JavaScript"] 
    },
    js: { 
        iniciante: ["Variáveis e Constantes (let e const)", "Tipos de Dados Essenciais", "Operadores Matemáticos e Lógicos", "Estruturas Condicionais (if, else, else if)", "Estruturas de Repetição (for e while)", "Introdução às Funções", "Arrays Simples (Listas)", "Objetos Básicos (Chave e Valor)", "Manipulação Básica do DOM (getElementById)", "Eventos de Teclado e Mouse (addEventListener)"], 
        intermediario: ["O Game Loop e requestAnimationFrame", "Delta Time (Movimento Suave)", "Classes e Construtores (POO)", "Física de Pulo e Gravidade", "Colisão Retangular (AABB)", "Animação e Spritesheets", "Controle de Estados Simples", "Vetores e Movimentação 2D", "Arrays e Gerenciamento de Entidades", "Modularização (Módulos JS)"], 
        avancado: ["Callbacks e Event Loop", "Promises (Promessas)", "Async / Await", "Recursividade", "Manipulação Avançada de Objetos", "APIs e Fetch", "Bitwise Operators (Operadores de Bit)", "Regular Expressions (Regex)", "Memory Management (Garbage Collector)", "Design Patterns (Padrões de Projeto)"] 
    }
};

let currentTech = 'html';
let currentLevel = 'iniciante';

let currentDesafioTech = 'html';
let currentDesafioLevel = 'iniciante';

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

function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const topics = db[currentTech][currentLevel] || [];
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `<h3>${topic.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h3>`;
        card.onclick = () => openModal(topic, 'estudo');
        grid.appendChild(card);
    });
}

function renderDesafiosGrid() {
    const grid = document.getElementById('desafios-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    let dataObj = null;
    if (currentDesafioTech === 'html') dataObj = window.exerciciosHTML;
    
    const topics = (dataObj && dataObj[currentDesafioLevel]) ? Object.keys(dataObj[currentDesafioLevel]) : [];
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.style.borderColor = '#f59e0b';
        
        if (window.usuarioLogado && window.usuarioLogado.progresso && window.usuarioLogado.progresso.includes(topic)) {
            card.style.borderColor = '#10b981';
            card.style.background = 'rgba(16, 185, 129, 0.1)';
        }
        card.innerHTML = `<h3>Desafio:<br>${topic.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h3>`;
        card.onclick = () => openModal(topic, 'desafio');
        grid.appendChild(card);
    });
}

function renderMissoesGrid() {
    const grid = document.getElementById('missoes-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    const missoes = window.missoesProjetos || [];
    let anteriorConcluido = true; 
    
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
        
        anteriorConcluido = jaConcluiu;
        grid.appendChild(card);
    });
}

function openModal(topic, tipo, index = null) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    const title = document.getElementById('reader-title');
    
    title.innerText = topic;
    container.innerHTML = "";

    if (tipo === 'estudo') {
        let content = `<p>Conteúdo teórico do tópico <b>${topic}</b> em desenvolvimento.</p>`;
        if (currentTech === 'html' && window.conteudosHTML) content = window.conteudosHTML[topic] || content;
        else if (currentTech === 'css' && window.conteudos && window.conteudos.css) {
            // Como removemos os números de db.css, mas eles podem estar no conteudos.css, procuramos por parte do texto
            const item = window.conteudos.css[currentLevel].find(c => c.titulo.includes(topic) || topic.includes(c.titulo));
            content = item ? item.conteudo : content;
        }
        else if (currentTech === 'js' && window.conteudosJS) content = window.conteudosJS[topic] || content;
        
        container.innerHTML = content;
    } 
    else if (tipo === 'desafio') {
        let ex = null;
        if (currentDesafioTech === 'html' && window.exerciciosHTML) {
            ex = window.exerciciosHTML[currentDesafioLevel][topic];
        }

        if (ex) {
            container.innerHTML = `
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

                <button class="btn-verificar" onclick="validarDesafio('${topic}')" style="width: 100%; margin-top: 20px; padding: 15px; font-size: 16px;">Verificar Desafio</button>
            `;
        } else {
            container.innerHTML = "<p>Desafio não encontrado.</p>";
        }
    }
    else if (tipo === 'missao-nova') {
        const missao = window.missoesProjetos[index];
        
        // ESTRUTURA BASE DO HTML GARANTIDA AQUI
        const htmlBase = `<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
  </body>
</html>`;

        container.innerHTML = `
            <div style="background: rgba(56, 189, 248, 0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #38bdf8;">
                <h3 style="margin-top:0; color:#38bdf8;">📜 Instruções de Desenvolvimento</h3>
                <div style="font-size:14px; line-height:1.6;">${missao.instrucoes}</div>
            </div>
            
            <div style="background: rgba(245, 158, 11, 0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <h3 style="margin-top:0; color:#f59e0b;">💻 Ambiente de Código</h3>
                
                <p style="color:#cbd5e1; font-weight:bold; font-size:14px; margin-bottom:5px;">HTML</p>
                <textarea id="input-html" class="caixa-resposta" style="height:150px; font-family:monospace;">${htmlBase}</textarea>
                
                <p style="color:#cbd5e1; font-weight:bold; font-size:14px; margin-top:20px; margin-bottom:5px;">CSS</p>
                <textarea id="input-css" class="caixa-resposta" style="height:120px; font-family:monospace;"></textarea>
                
                <p style="color:#cbd5e1; font-weight:bold; font-size:14px; margin-top:20px; margin-bottom:5px;">JavaScript</p>
                <textarea id="input-js" class="caixa-resposta" style="height:150px; font-family:monospace;">${missao.codigoInicial || ""}</textarea>
            </div>
            <button class="btn-verificar" onclick="validarMissaoNova(${index})" style="width:100%; margin-top:15px; padding:12px;">Submeter Projeto Completo</button>
        `;
    }
    
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('active'), 10);
    document.body.style.overflow = 'hidden'; 
}

window.validarDesafio = async (topic) => {
    let ex = null;
    if (currentDesafioTech === 'html' && window.exerciciosHTML) ex = window.exerciciosHTML[currentDesafioLevel][topic];
    if (!ex) return;

    const opcaoSelecionada = document.querySelector('input[name="opt-teoria"]:checked');
    if (!opcaoSelecionada) return alert("⚠️ Por favor, escolha uma opção na Parte Teórica!");
    
    if (parseInt(opcaoSelecionada.value) !== ex.respostaMultipla) {
        return alert("❌ A resposta da Parte Teórica está incorreta.");
    }

    const str1 = document.getElementById('input-resposta').value.toLowerCase().replace(/\s+/g, ' ');
    const str2 = ex.correta.toLowerCase().replace(/\s+/g, ' ');

    if (str1 !== str2) return alert("❌ A teoria está certa, mas o código prático está incorreto!");

    alert("🎉 Desafio Concluído com Perfeição!");
    await salvarEAtualizar(topic);
};

window.validarMissaoNova = async (index) => {
    const missao = window.missoesProjetos[index];
    
    // Soma os 3 blocos de código para validar
    const inpHtml = document.getElementById('input-html').value || "";
    const inpCss = document.getElementById('input-css').value || "";
    const inpJs = document.getElementById('input-js').value || "";
    const inputTotal = inpHtml + inpCss + inpJs;
    
    const str1 = inputTotal.toLowerCase().replace(/\s+/g, '').replace(/;/g, '').replace(/['"]/g, '');
    const str2 = missao.correta.toLowerCase().replace(/\s+/g, '').replace(/;/g, '').replace(/['"]/g, '');
    
    if (str1.includes(str2) || str1 === str2) {
        alert("🎉 Espetacular! Missão cumprida com sucesso. Próximo projeto desbloqueado!");
        await salvarEAtualizar(missao.titulo);
    } else {
        alert("❌ O seu código ainda não atende a todos os requisitos descritos no guia.");
    }
};

async function salvarEAtualizar(item) {
    if (window.usuarioLogado) {
        if (!window.usuarioLogado.progresso) window.usuarioLogado.progresso = [];
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
        setTimeout(() => { 
            overlay.style.display = 'none'; 
            document.body.style.overflow = 'auto'; 
        }, 200);
    }
}

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('reader')) closeModal();
});

function inicializarAppCompleto() {
    if (typeof window.conteudosHTML !== 'undefined' || typeof window.conteudos !== 'undefined' || typeof window.missoesProjetos !== 'undefined') {
        renderEncGrid();
        renderDesafiosGrid();
        renderMissoesGrid();
    } else {
        setTimeout(inicializarAppCompleto, 100);
    }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    inicializarAppCompleto();
} else {
    document.addEventListener('DOMContentLoaded', inicializarAppCompleto);
}
