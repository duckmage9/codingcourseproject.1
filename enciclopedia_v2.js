const db = {
    html: {
        iniciante: [
            "Conceito de Tags", "Estrutura Global", "Tags de Texto", 
            "Meta Tags Técnicas", "Atributos e IDs", "Listas de Inventário", 
            "Links e Navegação", "Inserção de Mídia", "Containers Div", "Comentários de Código"
        ],
        intermediario: [], avancado: []
    },
    css: { iniciante: [], intermediario: [], avancado: [] },
    js: { iniciante: [], intermediario: [], avancado: [] }
};

const conteudosManuais = {
    "Conceito de Tags": `<p>As <strong>Tags</strong> servem para dar mais informações sobre o código...</p>`,
    "Estrutura Global": `<p>As <strong>Tags de Estrutura</strong> organizam o seu código...</p>`,
    "Tags de Texto": `<p>As tags de texto como h1 até h6 e p são a voz narrativa...</p>`,
    "Meta Tags Técnicas": `<p>As <strong>Meta Tags</strong> operam nos bastidores...</p>`,
    "Atributos e IDs": `<p><strong>Atributos</strong> são propriedades especiais inseridas dentro das tags...</p>`,
    "Listas de Inventário": `<p>As listas em HTML são perfeitas para sistemas de RPG...</p>`,
    "Links e Navegação": `<p>A tag de link a é o portal fundamental...</p>`,
    "Inserção de Mídia": `<p>As tags img, audio e video são os motores de imersão...</p>`,
    "Containers Div": `<p>A tag div é o elemento mais versátil e utilizado no layout...</p>`,
    "Comentários de Código": `<p>Comentários em HTML são trechos de texto que o navegador ignora...</p>`
};

let currentTech = 'html';
let currentLevel = 'iniciante';

// Função Única para Abrir
function openModal(topic) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    const content = conteudosManuais[topic] || "<p>Conteúdo em breve...</p>";
    
    if(overlay && container) {
        container.innerHTML = `<h2>${topic}</h2>${content}`;
        overlay.style.display = 'flex'; // Força a exibição via Style diretamente
        overlay.style.pointerEvents = 'auto'; // Garante que aceite cliques
        container.scrollTop = 0;
    }
}

// Função Única para Fechar
function closeModal() {
    const overlay = document.getElementById('reader');
    if(overlay) {
        overlay.style.display = 'none'; // Some completamente
        overlay.style.pointerEvents = 'none'; // Garante que não bloqueie o que está atrás
    }
}

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('.main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    document.getElementById('btn-' + tech)?.classList.add('active-' + tech);
    renderEncGrid();
}

function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    document.getElementById('lvl-' + lvl)?.classList.add('active-lvl');
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
        // Usando listener direto para ser mais robusto
        card.addEventListener('click', () => openModal(topic));
        grid.appendChild(card);
    });
}

// Evento de fechar ao clicar no fundo (Configurado uma única vez)
window.addEventListener('click', (e) => {
    const overlay = document.getElementById('reader');
    if (e.target === overlay) {
        closeModal();
    }
});

// Inicialização
renderEncGrid();
