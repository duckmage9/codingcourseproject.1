console.log("ENCICLOPÉDIA ATUALIZADA: v. alpha.0.1.7 ativa.");

const db = {
    html: {
        iniciante: ["Tags Básicas", "Estrutura Global", "Atributos", "Títulos (H1-H6)", "Parágrafos", "Links", "Listas", "Imagens", "Comentários", "Formulários"],
        intermediario: ["Semântica", "Áudio e Vídeo", "Canvas Básico", "SVG", "Data Attributes", "Tabelas", "Iframes", "Meta Tags", "SEO Base", "Inputs Avançados"],
        avancado: ["Web Workers", "WebSockets", "Offscreen Canvas", "Service Workers", "Gamepad API", "Web Audio", "Shadow DOM", "Templates", "IndexedDB", "WebAssembly"]
    },
    css: {
        iniciante: ["Seletores", "Cores", "Box Model", "Padding/Margin", "Bordas", "Display", "Flexbox Base", "Fonts", "CSS Externo", "Units (PX/%)"],
        intermediario: ["Flexbox Avançado", "CSS Grid", "Position", "Z-index", "Pseudo-classes", "Pseudo-elements", "Transitions", "Media Queries", "Variables", "Units (REM/VW)"],
        avancado: ["Animations", "3D Transforms", "Filters", "Clip-path", "Grid Area", "Custom Props", "Scroll Snap", "Container Queries", "Logical Props", "Houdini"]
    },
    js: {
        iniciante: ["Variáveis", "Tipos de Dados", "Operadores", "If/Else", "Funções", "Arrays", "Loops", "Console", "DOM Select", "Eventos"],
        intermediario: ["Listeners", "Arrow Functions", "Array Methods", "Objetos", "JSON", "Fetch", "Promises", "Async/Await", "Local Storage", "Timers"],
        avancado: ["Game Loop", "State Machines", "Colisão", "Pathfinding", "Web Workers", "Física Básica", "Prototypes", "Memória", "A* Algorithm", "Design Patterns"]
    }
};

const codeStyle = "background: #020617; padding: 15px; border-radius: 8px; border: 1px solid #334155; overflow-x: auto; font-family: monospace; color: #38bdf8; margin-top: 15px; display: block; white-space: pre-wrap;";

const conteudosManuais = {
    "Tags Básicas": `
        <p>O HTML funciona através de <strong>Tags</strong>. Pense nas tags como etiquetas que dizem ao navegador o que cada pedaço de texto significa na sua página, como um título ou botão.</p>
        <p>A maioria das tags possui abertura <code>&lt;tag&gt;</code> e fechamento <code>&lt;/tag&gt;</code>. O conteúdo deve estar sempre no meio delas para ser formatado corretamente.</p>
        <p>Teste criando um título e um parágrafo no seu editor:</p>
        <pre style="${codeStyle}">&lt;h1&gt;Meu Primeiro Título&lt;/h1&gt;\n&lt;p&gt;Este é um parágrafo de teste.&lt;/p&gt;</pre>
    `,
    "Estrutura Global": `
        <p>Todo arquivo HTML precisa de um esqueleto base. Sem ele, o navegador não sabe como interpretar as configurações da sua página ou o idioma usado.</p>
        <p>Usamos <code>&lt;!DOCTYPE html&gt;</code> no topo, seguido pela tag <code>&lt;html&gt;</code> que envolve tudo. O <code>&lt;head&gt;</code> guarda metadados e o <code>&lt;body&gt;</code> o conteúdo visível.</p>
        <p>Aqui está o esqueleto padrão para começar qualquer projeto:</p>
        <pre style="${codeStyle}">&lt;!DOCTYPE html&gt;\n&lt;html lang="pt-br"&gt;\n&lt;head&gt;\n  &lt;meta charset="UTF-8"&gt;\n  &lt;title&gt;Título da Aba&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;!-- Seu conteúdo aqui --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>
    `,
    "Atributos": `
        <p><strong>Atributos</strong> fornecem informações adicionais às tags. Eles são escritos na tag de abertura e geralmente seguem o padrão <code>nome="valor"</code>.</p>
        <p>Exemplos vitais são <code>class</code> (para estilos CSS), <code>id</code> (para identificação única) e <code>src</code> (para carregar arquivos de imagem ou som).</p>
        <p>Veja como aplicamos uma classe a uma div para identificá-la depois:</p>
        <pre style="${codeStyle}">&lt;div class="container-principal" id="box-01"&gt;\n  Conteúdo com atributos\n&lt;/div&gt;</pre>
    `,
    "Títulos (H1-H6)": `
        <p>Títulos definem a hierarquia de importância do conteúdo. O <code>&lt;h1&gt;</code> é o título principal e o <code>&lt;h6&gt;</code> é o menor subtítulo.</p>
        <p>Uma boa prática é ter apenas um <code>&lt;h1&gt;</code> por página para ajudar na organização e no SEO (buscas do Google).</p>
        <p>Exemplo de hierarquia visual:</p>
        <pre style="${codeStyle}">&lt;h1&gt;Título do Jogo&lt;/h1&gt;\n&lt;h2&gt;Capítulo 1&lt;/h2&gt;\n&lt;h3&gt;Missão Inicial&lt;/h3&gt;</pre>
    `,
    "Parágrafos": `
        <p>A tag <code>&lt;p&gt;</code> é usada para blocos de texto. O navegador adiciona automaticamente um espaço (margem) entre um parágrafo e outro.</p>
        <p>Se você precisar apenas quebrar a linha dentro do mesmo parágrafo, use a tag <code>&lt;br&gt;</code> que não precisa de fechamento.</p>
        <p>Pratique a criação de um bloco de texto com quebra de linha:</p>
        <pre style="${codeStyle}">&lt;p&gt;Este é o primeiro parágrafo.&lt;br&gt;Esta linha está logo abaixo.&lt;/p&gt;</pre>
    `,
    "Links": `
        <p>Links são criados com a tag <code>&lt;a&gt;</code> (âncora). O atributo <code>href</code> é obrigatório e contém o endereço de destino.</p>
        <p>Para abrir um link em uma nova guia do navegador sem fechar o seu site, adicione o atributo <code>target="_blank"</code>.</p>
        <p>Exemplo de link externo funcional:</p>
        <pre style="${codeStyle}">&lt;a href="https://github.com" target="_blank"&gt;Visitar meu GitHub&lt;/a&gt;</pre>
    `,
    "Listas": `
        <p>Existem dois tipos principais de listas: as Não-Ordenadas (<code>&lt;ul&gt;</code>) com marcadores, e as Ordenadas (<code>&lt;ol&gt;</code>) que são numeradas.</p>
        <p>Cada item dentro da lista deve ser obrigatoriamente envolvido pela tag <code>&lt;li&gt;</code> (list item).</p>
        <p>Ideal para criar inventários ou menus:</p>
        <pre style="${codeStyle}">&lt;ul&gt;\n  &lt;li&gt;Item de Inventário 1&lt;/li&gt;\n  &lt;li&gt;Item de Inventário 2&lt;/li&gt;\n&lt;/ul&gt;</pre>
    `,
    "Imagens": `
        <p>Para exibir imagens usamos a tag <code>&lt;img&gt;</code>. Ela não possui fechamento e precisa do caminho do arquivo no atributo <code>src</code>.</p>
        <p>Sempre use o atributo <code>alt</code> para descrever a imagem, o que é essencial para acessibilidade e caso o link da imagem quebre.</p>
        <pre style="${codeStyle}">&lt;img src="imagem.png" alt="Descrição do Sprite" width="150"&gt;</pre>
    `,
    "Comentários": `
        <p>Comentários servem para você deixar anotações no código que não aparecem no site. Eles ajudam muito a organizar projetos complexos.</p>
        <p>Em HTML, o comentário começa com <code>&lt;!--</code> e termina com <code>--&gt;</code>. Tudo entre eles será ignorado pelo navegador.</p>
        <pre style="${codeStyle}">&lt;!-- Criar a lógica do inimigo abaixo --&gt;\n&lt;div&gt;Personagem Inimigo&lt;/div&gt;</pre>
    `,
    "Formulários": `
        <p>Formulários (<code>&lt;form&gt;</code>) permitem coletar dados. O elemento <code>&lt;input&gt;</code> cria campos onde o usuário pode digitar.</p>
        <p>O atributo <code>type</code> define se o campo é texto, senha ou botão. O <code>placeholder</code> mostra uma dica dentro da caixa.</p>
        <pre style="${codeStyle}">&lt;form&gt;\n  &lt;input type="text" placeholder="Nome do Herói"&gt;\n  &lt;button&gt;Salvar&lt;/button&gt;\n&lt;/form&gt;</pre>
    `,
    // MANTIDO: CSS e JS Básicos
    "Seletores": `<p>Seletores dizem ao CSS qual elemento será estilizado.</p><pre style="${codeStyle}">p { color: red; }</pre>`,
    "Variáveis": `<p>Variáveis guardam dados na memória.</p><pre style="${codeStyle}">let vida = 100;</pre>`
};

function getTopicContent(tech, level, topic) {
    const key = topic.trim();
    if (conteudosManuais[key]) {
        return conteudosManuais[key];
    }
    return `<p>Conteúdo para <strong>${topic}</strong> (${level}) está sendo preparado.</p><pre style="${codeStyle}">// Em desenvolvimento\nconsole.log("${topic}");</pre>`;
}

let currentTech = 'html';
let currentLevel = 'iniciante';

function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;
    grid.innerHTML = '';
    db[currentTech][currentLevel].forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `<h3>${topic}</h3>`;
        card.onclick = () => {
            const htmlContent = `<h2>${topic}</h2>${getTopicContent(currentTech, currentLevel, topic)}`;
            openModal('reader', htmlContent);
        };
        grid.appendChild(card);
    });
}

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('#modo-enciclopedia .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    const targetBtn = document.getElementById(`btn-${tech}`);
    if(targetBtn) targetBtn.classList.add(`active-${tech}`);
    renderEncGrid();
}

function setLevel(lvl, element) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    if(element) element.classList.add('active-lvl');
    renderEncGrid();
}

window.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('topics-grid')) renderEncGrid();
});
