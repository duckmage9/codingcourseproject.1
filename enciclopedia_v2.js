function manualLog(msg) {
    const consoleEl = document.getElementById('debug-console');
    if (consoleEl) {
        const line = document.createElement('div');
        line.className = 'log-line';
        line.innerHTML = `<span class="log-v">v0.2.2:</span> ${msg}`;
        consoleEl.prepend(line);
    }
}

manualLog("Base de dados v0.2.2 (Gamedev-Focus) ativa.");

const db = {
    html: {
        iniciante: ["Tags Básicas", "Estrutura Global", "Atributos", "Títulos (H1-H6)", "Parágrafos", "Links", "Listas", "Imagens", "Comentários", "Formulários"],
        intermediario: ["Semântica", "Áudio e Vídeo", "Canvas Básico", "SVG", "Data Attributes", "Tabelas", "Iframes", "Meta Tags", "SEO Base", "Inputs Avançados"],
        avancado: ["Web Workers", "WebSockets", "Offscreen Canvas", "Service Workers", "Gamepad API", "Web Audio", "Shadow DOM", "Templates", "IndexedDB", "WebAssembly"]
    },
    css: { iniciante: ["Seletores", "Box Model"], intermediario: [], avancado: [] },
    js: { iniciante: ["Variáveis", "Loops"], intermediario: [], avancado: [] }
};

const codeStyle = "background: #020617; padding: 15px; border-radius: 8px; border: 1px solid #334155; overflow-x: auto; font-family: monospace; color: #38bdf8; margin-top: 15px; display: block; white-space: pre-wrap; line-height: 1.6;";

const conteudosManuais = {
    "Tags Básicas": `
        <p>As <strong>Tags</strong> servem para dar mais informações sobre o código para o programa ou navegador. Elas são os blocos fundamentais que dizem ao motor de renderização exatamente o que cada pedaço de informação representa. Sem elas, o navegador veria apenas um amontoado de letras sem função, impossibilitando a distinção entre um botão de "Atacar" ou um texto de história.</p>
        <p>As tags são geralmente abertas com as chaves angulares <code>&lt;tag&gt;</code> e fechadas com <code>&lt;/tag&gt;</code>. Um exemplo clássico é a tag <code>&lt;p&gt;</code>, usada para criar parágrafos de texto. O conteúdo que fica entre a abertura e o fechamento é o que será exibido na tela, seguindo as regras daquela etiqueta específica.</p>
        <p>No desenvolvimento de jogos, as tags funcionam como os containers iniciais dos seus elementos de interface. Embora a lógica do jogo aconteça no JavaScript, o HTML fornece a "âncora" física onde o jogador verá sua barra de vida, seu inventário ou os diálogos dos personagens. É o primeiro passo para transformar código puro em uma experiência visual organizada.</p>
        <pre style="${codeStyle}">&lt;p&gt;Este é um parágrafo básico de introdução.&lt;/p&gt;</pre>
    `,
    "Estrutura Global": `
        <p>As <strong>Tags de Estrutura</strong> servem para organizar o seu código de forma lógica. Elas separam cada área e dizem para o navegador o que cada parte do seu projeto está fazendo e que tipo de informações ela guarda. Imagine um esqueleto: sem essa organização, os elementos do seu jogo ficariam "soltos" e o navegador não saberia como processá-los corretamente.</p>
        <p>As duas tags de estrutura mais comuns e importantes são a <code>&lt;head&gt;</code> e a <code>&lt;body&gt;</code>. A <strong>Head</strong> serve para guardar informações sobre o jogo/site que não aparecem diretamente na tela, como links para scripts e meta tags. A <strong>Body</strong> serve para inserir os arquivos que realmente vão aparecer para o jogador, como imagens, textos e áudios. É na body que colocamos as tags de conteúdo.</p>
        <p>Manter essa separação é vital para que o jogo carregue rápido e funcione bem. No gamedev web, garantir que a estrutura esteja correta permite que o seu JavaScript encontre os elementos da interface (HUD) com facilidade, permitindo que você mude valores de vida ou pontos de experiência sem quebrar o visual do sistema.</p>
        <pre style="${codeStyle}">&lt;html&gt;\n  &lt;head&gt; (Configurações) &lt;/head&gt;\n  &lt;body&gt; (O Jogo) &lt;/body&gt;\n&lt;/html&gt;</pre>
    `,
    "Atributos": `
        <p><strong>Atributos</strong> são propriedades usadas para dar mais informações ou "poderes" às tags. Eles são escritos dentro da tag de abertura e permitem que você identifique ou configure um elemento específico. Por exemplo, o atributo <code>id</code> dá um nome único para uma tag, enquanto o atributo <code>class</code> permite agrupar várias tags sob o mesmo estilo.</p>
        <p>Na criação de jogos, os atributos são fundamentais para a conexão com o JavaScript. Ao dar uma <code>id="health-bar"</code> para uma tag, você permite que o código do jogo localize exatamente onde deve desenhar a vida do personagem. Atributos também definem comportamentos, como o <code>src</code> para carregar o arquivo de um sprite ou o <code>href</code> para links de navegação.</p>
        <p>Dominar os atributos é o que diferencia um código simples de um sistema de jogo interativo. Eles permitem que o CSS saiba quem deve pintar e que o JS saiba quem deve mover, funcionando como a "identidade" de cada objeto que você coloca no palco do seu navegador.</p>
        <pre style="${codeStyle}">&lt;div id="player-01" class="hero-sprite"&gt;&lt;/div&gt;</pre>
    `,
    "Títulos (H1-H6)": `
        <p>As tags de <strong>Título</strong> (H1 até H6) servem para definir a importância e a hierarquia das informações textuais. O <code>&lt;h1&gt;</code> é o título principal e mais importante, enquanto os outros níveis servem para subtítulos e categorias menores. Eles organizam visualmente o conteúdo para o jogador e ajudam o navegador a entender do que se trata a página.</p>
        <p>No desenvolvimento de jogos, usamos títulos para criar nomes de menus, cabeçalhos de missões ou o título principal na tela de abertura. É uma forma rápida de destacar textos importantes na "HUD" ou em telas de interface sem precisar de estilos complexos logo de início, garantindo que o jogador saiba onde ele está e o que está vendo.</p>
        <p>Lembre-se que o uso deve ser lógico: use o H1 apenas uma vez para o nome principal do projeto e os outros níveis para organizar as subseções. Isso mantém o código limpo e acessível, facilitando tanto a manutenção quanto a leitura por sistemas automáticos do navegador.</p>
        <pre style="${codeStyle}">&lt;h1&gt;Título do Jogo&lt;/h1&gt;\n&lt;h2&gt;Menu de Opções&lt;/h2&gt;</pre>
    `,
    "Parágrafos": `
        <p>A tag <code>&lt;p&gt;</code> serve para criar parágrafos de texto comum. Ela é a forma padrão de exibir descrições, diálogos ou blocos de informação no seu jogo. O navegador adiciona automaticamente um espaço entre os parágrafos, o que ajuda muito na leitura e evita que os textos fiquem amontoados na tela.</p>
        <p>Para jogos focados em narrativa ou RPGs, os parágrafos são essenciais para contar a história. Como o HTML ignora quebras de linha feitas com o "Enter" no código, você deve usar a tag de parágrafo sempre que quiser iniciar um novo bloco de pensamento ou fala de personagem, garantindo que a formatação visual seja mantida em qualquer tela.</p>
        <p>Embora pareçam simples, parágrafos bem organizados tornam a interface muito mais profissional. Você pode usar classes para diferenciar o parágrafo de um diálogo de um NPC do parágrafo que descreve um item no inventário, permitindo que o CSS aplique fontes e cores diferentes para cada situação.</p>
        <pre style="${codeStyle}">&lt;p&gt;O herói entra na caverna escura...&lt;/p&gt;</pre>
    `,
    "Links": `
        <p>A tag de âncora <code>&lt;a&gt;</code> cria <strong>Links</strong> que permitem navegar para outras páginas ou seções. O atributo <code>href</code> é onde você coloca o endereço de destino. Eles são as pontas que conectam o seu jogo ao resto da internet, permitindo que o jogador visite seu site, redes sociais ou abra manuais de instrução.</p>
        <p>Em projetos de gamedev, links são úteis para botões de "Créditos", links para a comunidade no Discord ou para carregar versões diferentes do projeto. Você pode usar o atributo <code>target="_blank"</code> para abrir o link em uma nova aba, garantindo que o jogador não feche a janela do jogo acidentalmente ao clicar.</p>
        <p>Mesmo que o seu jogo seja jogado em uma única tela, entender como funcionam os links ajuda a construir uma rede em volta do seu projeto. É uma ferramenta de navegação nativa que o navegador entende perfeitamente e que exige pouquíssimo esforço para ser implementada de forma segura.</p>
        <pre style="${codeStyle}">&lt;a href="https://github.com" target="_blank"&gt;GitHub do Dev&lt;/a&gt;</pre>
    `,
    "Listas": `
        <p>As <strong>Listas</strong> servem para agrupar itens relacionados. Temos as listas não ordenadas (<code>&lt;ul&gt;</code>), que usam marcadores simples, e as listas ordenadas (<code>&lt;ol&gt;</code>), que numeram os itens. Cada item dentro da lista deve ser colocado entre as tags <code>&lt;li&gt;</code>.</p>
        <p>No desenvolvimento de jogos, as listas são a melhor forma de criar inventários, listas de conquistas ou menus de seleção de personagens. Elas mantêm o código organizado e permitem que o JavaScript percorra todos os itens facilmente para verificar o progresso do jogador ou atualizar quantidades de itens coletados.</p>
        <p>Além da organização, listas são fáceis de estilizar. Com um pouco de CSS, uma lista simples de <code>&lt;li&gt;</code> pode se transformar em uma barra de ferramentas horizontal ou em uma grade de botões para as magias do seu personagem, mantendo a estrutura lógica por trás do visual.</p>
        <pre style="${codeStyle}">&lt;ul&gt;\n  &lt;li&gt;Poção de Mana&lt;/li&gt;\n  &lt;li&gt;Espada de Madeira&lt;/li&gt;\n&lt;/ul&gt;</pre>
    `,
    "Imagens": `
        <p>A tag <code>&lt;img&gt;</code> serve para inserir arquivos visuais no jogo. Ela precisa do atributo <code>src</code> para saber onde o arquivo está e do atributo <code>alt</code> para descrever a imagem em texto. No gamedev, essa tag é usada para inserir ícones, banners de tela inicial e os sprites que compõem o cenário e a HUD.</p>
        <p>Diferente de outras tags, a imagem é "auto-fechável". É vital que os arquivos de imagem sejam leves (como PNG ou WebP) para que o jogo não demore a carregar no navegador. O atributo <code>alt</code> também é importante para a acessibilidade, garantindo que pessoas com deficiência visual saibam o que a imagem representa através de leitores de tela.</p>
        <p>Embora a animação dos sprites seja feita no JavaScript mudando as coordenadas, o HTML é quem coloca a imagem no palco. Você pode controlar o tamanho inicial com <code>width</code> e <code>height</code>, garantindo que a interface do seu jogo mantenha as proporções corretas em diferentes tamanhos de janela.</p>
        <pre style="${codeStyle}">&lt;img src="sprite_player.png" alt="Jogador" width="64"&gt;</pre>
    `,
    "Comentários": `
        <p><strong>Comentários</strong> são anotações que ficam invisíveis para o jogador mas visíveis para o programador dentro do código. Eles começam com <code>&lt;!--</code> e terminam com <code>--&gt;</code>. Eles servem para organizar o projeto e deixar lembretes sobre o que cada parte do código está fazendo.</p>
        <p>No desenvolvimento de jogos, os comentários são salvadores de vidas. Você pode marcar onde termina a seção da HUD e começa o container do jogo, ou deixar avisos sobre bugs que precisam ser corrigidos. Eles ajudam muito quando você volta a mexer em um projeto depois de muito tempo ou quando está trabalhando em equipe.</p>
        <p>Lembre-se: o navegador ignora os comentários na hora de mostrar o site, mas qualquer um que abrir o "Exibir código fonte" poderá lê-los. Por isso, use-os para organização técnica e documentação, evitando colocar informações pessoais ou lógicas secretas do jogo neles.</p>
        <pre style="${codeStyle}">&lt;!-- Seção: Barra de Vida --&gt;</pre>
    `,
    "Formulários": `
        <p>A tag <code>&lt;form&gt;</code> cria áreas onde o jogador pode inserir informações. Dentro dela usamos a tag <code>&lt;input&gt;</code> para campos de texto, botões ou seleções. É neles que o jogador digita seu nome, escolhe o nível de dificuldade ou ajusta as configurações de som do jogo.</p>
        <p>No gamedev web, os formulários são usados principalmente para customização e telas de início. Ao usar uma <code>&lt;label&gt;</code> para cada campo, você torna a interface muito mais fácil de usar, permitindo que o jogador clique no texto para ativar o campo de entrada correspondente.</p>
        <p>As informações inseridas nos formulários são capturadas pelo JavaScript para personalizar a aventura. Por exemplo, você pode pegar o nome digitado no formulário e usá-lo em todos os diálogos do jogo, transformando uma interface estática em um mundo que reage às escolhas do jogador.</p>
        <pre style="${codeStyle}">&lt;form&gt;\n  &lt;label&gt;Nome do Herói:&lt;/label&gt;\n  &lt;input type="text"&gt;\n&lt;/form&gt;</pre>
    `
};

function getTopicContent(topic) {
    const limpo = topic.trim();
    manualLog(`Acessando: ${limpo}`);
    return conteudosManuais[limpo] || `<p>Conteúdo em fase de redação para a v0.2.2.</p>`;
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
            const htmlContent = `<h2>${topic}</h2>${getTopicContent(topic)}`;
            openModal('reader', htmlContent);
        };
        grid.appendChild(card);
    });
}

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('#modo-enciclopedia .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    const btn = document.getElementById(`btn-${tech}`);
    if(btn) btn.classList.add(`active-${tech}`);
    renderEncGrid();
}

function setLevel(lvl, element) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    if(element) element.classList.add('active-lvl');
    renderEncGrid();
}

window.addEventListener('DOMContentLoaded', () => {
    manualLog("Sistema v0.2.2 Online (v2.js)");
    renderEncGrid();
});
