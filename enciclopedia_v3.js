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
    "Conceito de Tags": `
        <p>As <strong>Tags</strong> são os tijolos do HTML. Elas servem para rotular o conteúdo e dizer ao navegador o que cada parte representa.</p>
        <p>A maioria das tags vem em pares: uma de abertura <code>&lt;tag&gt;</code> e uma de fechamento <code>&lt;/tag&gt;</code>. Tudo o que estiver entre elas receberá a função definida.</p>
        <p>No desenvolvimento de jogos, as tags ajudam a estruturar desde o HUD (interface) até os diálogos dos personagens.</p>`,
    
    "Estrutura Global": `
        <p>Todo arquivo HTML precisa de uma espinha dorsal para ser reconhecido pelos navegadores. Essa estrutura é composta por:</p>
        <ul>
            <li><strong>DOCTYPE html:</strong> Declara que o documento é HTML5.</li>
            <li><strong>html:</strong> O container raiz que envolve todo o código.</li>
            <li><strong>head:</strong> Onde ficam as configurações e metadados (invisível para o jogador).</li>
            <li><strong>body:</strong> Onde fica tudo o que aparece na tela (o jogo em si).</li>
        </ul>`,
    
    "Tags de Texto": `
        <p>As tags de texto definem a hierarquia da informação:</p>
        <ul>
            <li><strong>h1 até h6:</strong> Títulos e subtítulos. O h1 é o mais importante (geralmente o nome do jogo).</li>
            <li><strong>p:</strong> Define um parágrafo. Ideal para blocos de história ou descrições de itens.</li>
            <li><strong>strong:</strong> Deixa o texto em negrito, indicando importância.</li>
            <li><strong>em:</strong> Deixa o texto em itálico, usado para ênfase.</li>
        </ul>`,

    "Meta Tags Técnicas": `
        <p>As <strong>Meta Tags</strong> ficam dentro do <code>&lt;head&gt;</code> e passam instruções para o navegador.</p>
        <p>A tag mais importante hoje é a <code>viewport</code>, que garante que seu jogo se ajuste corretamente ao tamanho da tela do celular (responsividade).</p>`,

    "Atributos e IDs": `
        <p><strong>Atributos</strong> fornecem informações adicionais às tags. Eles são escritos dentro da tag de abertura.</p>
        <p>O <strong>ID</strong> funciona como o "CPF" de um elemento. Cada ID deve ser único. No desenvolvimento de jogos, usamos o ID para dizer ao JavaScript exatamente qual elemento ele deve mover.</p>`,

    "Listas de Inventário": `
        <p>Em HTML, existem dois tipos principais de listas:</p>
        <ul>
            <li><strong>ul (Unordered List):</strong> Listas com marcadores (pontinhos). Ótimas para inventários.</li>
            <li><strong>ol (Ordered List):</strong> Listas numeradas. Perfeitas para rankings (Leaderboards).</li>
            <li>Cada item deve usar a tag <strong>li</strong> (List Item).</li>
        </ul>`,

    "Links e Navegação": `
        <p>A tag <code>&lt;a&gt;</code> (âncora) cria hiperlinks. O atributo <strong>href</strong> indica o destino.</p>
        <p>Usamos links para navegar entre o menu principal, tela de créditos ou redes sociais.</p>`,

    "Inserção de Mídia": `
        <p>Para tornar o jogo visual e sonoro, usamos:</p>
        <ul>
            <li><strong>img:</strong> Para sprites e backgrounds.</li>
            <li><strong>audio:</strong> Para trilhas sonoras e efeitos de som (SFX).</li>
            <li><strong>video:</strong> Para cutscenes de introdução.</li>
        </ul>`,

    "Containers Div": `
        <p>A <strong>div</strong> é uma caixa genérica usada para agrupar elementos. Ela não tem significado visual próprio, mas é essencial para o layout.</p>
        <p>Pense na div como uma "pasta": você coloca vários elementos dentro dela para organizá-los com CSS.</p>`,

    "Comentários de Código": `
        <p>Comentários são escritos assim: <code>&lt;!-- texto --&gt;</code>.</p>
        <p>Eles são ignorados pelo navegador e servem para organizar seu código, marcando seções importantes.</p>`
};

let currentTech = 'html';
let currentLevel = 'iniciante';

function openModal(topic) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    const content = conteudosManuais[topic] || "<p>Conteúdo em fase de produção.</p>";
    
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

// Renderização inicial
renderEncGrid();
