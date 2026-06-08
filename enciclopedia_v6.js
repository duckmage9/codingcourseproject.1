// ========================================================
// BANCO DE DADOS GIGANTE DA ENCICLOPÉDIA (COMPLETO)
// ========================================================
const db = {
    html: {
        iniciante: ["Conceito de Tags", "Estrutura Global", "Tags de Texto", "Meta Tags Técnicas", "Atributos e IDs", "Links e Navegação", "Listas de Inventário", "Inserção de Mídia", "Containers Div", "Comentários de Código"],
        intermediario: ["Elementos Semânticos (Header, Nav, Footer)", "Seções de Conteúdo (Section, Article, Aside)", "Estrutura de Tabelas Simples (Table, Tr, Td)", "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)", "Formulários Básicos (Form, Input, Label)", "Tipos de Input (Text, Password, Email, Button)", "Seleções em Formulários (Radio, Checkbox, Select)", "Validação Nativa de Formulários", "Introdução à Acessibilidade (Atributos ARIA)", "A tag <dialog> (Modais Nativos)"],
        avancado: ["A tag <canvas> (O Palco dos Jogos)", "SVG inline (<svg> e <path>)", "Imagens Responsivas (<picture> e srcset)", "Áudios Avançados (Atributos e Eventos de <audio>)", "Pré-carregamento de Assets (preload e prefetch)", "Iframe Avançado (<iframe> e Sandbox)", "Manipulação de Templates (<template> e <slot>)", "Armazenamento no Navegador (O papel técnico do HTML5)", "Componentes Web Nativos (Custom Elements)", "Acessibilidade de Teclado Avançada (tabindex e Foco)"]
    },
    css: { 
        iniciante: ["1. Seletores Básicos e Combinadores", "2. O Box Model (Modelo de Caixa)", "3. Cores e Backgrounds", "4. Tipografia Web", "5. Unidades de Medida", "6. Display Básico", "7. Bordas e Arredondamentos", "8. Sombras Simples", "9. Estados Básicos (Pseudo-classes)", "10. Variáveis CSS Nativas (Básico)"], 
        intermediario: ["11. Posicionamento (Position) e z-index", "12. Fundamentos do Flexbox", "13. Flexbox Avançado", "14. Fundamentos do CSS Grid", "15. Pseudo-elementos (::before e ::after)", "16. Transições Suaves (Transitions)", "17. Transformações 2D (Transforms)", "18. Design Responsivo (Media Queries)", "19. Pseudo-classes Avançadas", "20. Filtros Gráficos (Filters e Blend Modes)"], 
        avancado: ["21. Animações Complexas com Keyframes", "22. Transformações 3D", "23. CSS Grid Layout Avançado", "24. Funções Matemáticas", "25. Clip-path e Formas Complexas", "26. Scroll Snapping e Scrollbars Estilizadas", "27. Container Queries (@container)", "28. Arquitetura CSS (Metodologia BEM)", "29. Efeitos Visuais Modernos (Glassmorphism e Neumorphism)", "30. Integração de Variáveis CSS com JavaScript"] 
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

// Controles da Enciclopédia
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

// Controles dos Desafios (Exercícios Antigos)
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

// ==========================================
// RENDERIZAR GRADES (GRIDS) NA TELA
// ==========================================
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
    
    // Os desafios lêem os ficheiros antigos da pasta exercicios!
    let dataObj = null;
    if (currentDesafioTech === 'html') dataObj = window.exerciciosHTML;
    // Se no futuro tiver exerciciosCSS ou JS, eles entrariam aqui
    
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

// ==========================================
// GERENCIAMENTO DOS MODAIS (JANELAS DE CONTEÚDO)
// ==========================================
function openModal(topic, tipo, index = null) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    const title = document.getElementById('reader-title');
    
    title.innerText = topic;
    container.innerHTML = "";

    // 1. ENCICLOPÉDIA
    if (tipo === 'estudo') {
        let content = `<p>Conteúdo teórico do tópico <b>${topic}</b> em desenvolvimento.</p>`;
        if (currentTech === 'html' && window.conteudosHTML) content = window.conteudosHTML[topic] || content;
        else if (currentTech === 'css' && window.conteudos && window.conteudos.css) {
            const item = window.conteudos.css[currentLevel].find(c => c.titulo === topic);
            content = item ? item.conteudo : content;
        }
        else if (currentTech === 'js' && window.conteudosJS) content = window.conteudosJS[topic] || content;
        
        container.innerHTML = content;
    } 
    // 2. DESAFIOS (Os exercícios curtos antigos com Teoria e Prática)
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
    // 3. MISSÕES (Os projetos longos)
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
    document.body.style.overflow = 'hidden'; 
}

// ==========================================
// MOTORES DE VALIDAÇÃO
// ==========================================

// Validação dos Desafios (Antiga Lógica Dupla)
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

// Validação das Missões Novas (Limpeza total de espaços)
window.validarMissaoNova = async (index) => {
    const missao = window.missoesProjetos[index];
    const input = document.getElementById('input-resposta').value;
    
    const str1 = input.toLowerCase().replace(/\s+/g, '').replace(/;/g, '').replace(/['"]/g, '');
    const str2 = missao.correta.toLowerCase().replace(/\s+/g, '').replace(/;/g, '').replace(/['"]/g, '');
    
    if (str1.includes(str2) || str1 === str2) {
        alert("🎉 Espetacular! Missão cumprida com sucesso. Próximo projeto desbloqueado!");
        await salvarEAtualizar(missao.titulo);
    } else {
        alert("❌ Seu código ainda não atende a todos os requisitos descritos no guia.");
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
