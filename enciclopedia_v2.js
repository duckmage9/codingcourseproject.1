// Banco de dados centralizado
const db = {
    html: ["Tags Básicas", "Estrutura Global", "Tags de Conteúdo", "Meta Tags", "Atributos"],
    css: ["Seletores", "Box Model"],
    js: ["Variáveis", "Funções"]
};

// Conteúdos detalhados (Estilo Aula)
const conteudosManuais = {
    "Tags Básicas": `
        <p>As <strong>Tags</strong> servem para dar mais informações sobre o código para o programa ou navegador. Elas funcionam como etiquetas que classificam cada elemento. As tags são abertas com <code>&lt;tag&gt;</code> e fechadas com <code>&lt;/tag&gt;</code>.</p>
        <p>No gamedev, isso permite distinguir o que é um botão de "Start" de uma descrição de item.</p>
    `,
    "Estrutura Global": `
        <p>As <strong>Tags de Estrutura</strong> organizam o código em áreas lógicas. As principais são a <code>&lt;head&gt;</code> (configurações) e a <code>&lt;body&gt;</code> (onde o jogo aparece).</p>
    `,
    "Tags de Conteúdo": `
        <p>Servem para inserir textos, imagens e áudios. No jogo, criam o visual da HUD e dos cenários.</p>
    `,
    "Meta Tags": `
        <p>Ficam na Head e configuram dados técnicos como zoom e ajuste de tela para dispositivos móveis.</p>
    `,
    "Atributos": `
        <p>Propriedades extras como o <code>id</code>, que dá um nome único para o JavaScript encontrar o elemento.</p>
    `
};

let currentTech = 'html';

function setTech(tech) {
    currentTech = tech;
    // Atualiza classes dos botões
    document.querySelectorAll('.main-btn').forEach(b => {
        b.classList.remove('active-html', 'active-css', 'active-js');
    });
    const activeBtn = document.getElementById('btn-' + tech);
    if(activeBtn) activeBtn.classList.add('active-' + tech);
    
    renderEncGrid();
}

function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const topics = db[currentTech] || [];
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `<h3>${topic}</h3>`;
        card.onclick = () => {
            const content = conteudosManuais[topic] || "Conteúdo em breve...";
            if (typeof openModal === 'function') {
                openModal('reader', `<h2>${topic}</h2>${content}`);
            } else {
                alert(topic + ": " + content.replace(/<[^>]*>/g, ''));
            }
        };
        grid.appendChild(card);
    });
}

// Inicializa a grade
renderEncGrid();
