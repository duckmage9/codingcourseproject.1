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
        <p>Elas são geralmente abertas com as chaves angulares <code>&lt;tag&gt;</code> e fechadas com <code>&lt;/tag&gt;</code>. Um exemplo clássico é a tag <code>&lt;p&gt;</code>, usada para criar parágrafos de texto. O conteúdo que fica entre a abertura e o fechamento é o que será processado e exibido na tela, seguindo as regras daquela etiqueta específica.</p>
        <p>No desenvolvimento de jogos, as tags funcionam como os containers iniciais dos seus elementos de interface. Embora a lógica do jogo aconteça no JavaScript, o HTML fornece a "âncora" física onde o jogador verá sua barra de vida, seu inventário ou os diálogos dos personagens. É o primeiro passo para transformar código puro em uma experiência visual organizada.</p>
        <pre style="${codeStyle}">&lt;p&gt;Este é um parágrafo básico de introdução.&lt;/p&gt;</pre>
    `,
    "Estrutura Global": `
        <p>As <strong>Tags de Estrutura</strong> funcionam como o esqueleto do seu projeto, organizando como o código é lido. Elas separam cada área lógica e dizem ao navegador o que cada parte do código está fazendo e que tipo de informação ela guarda. Imagine um armário onde cada gaveta tem uma função específica: sem essa organização, o navegador se perderia tentando carregar os recursos do seu jogo.</p>
        
        <p>As duas tags de estrutura mais importantes são a <code>&lt;head&gt;</code> e a <code>&lt;body&gt;</code>. A <strong>Head</strong> serve para guardar informações "invisíveis", como o título da aba, os links para arquivos de estilo CSS e as Meta Tags de configuração. Já a <strong>Body</strong> é o palco principal: é aqui que inserimos tudo o que realmente vai aparecer na tela, como as imagens dos sprites, os textos de HUD e os containers do jogo.</p>
        <p>Manter essa separação é vital para a performance. Se você colocar arquivos pesados na Head de forma errada, o jogo pode demorar a carregar a parte visual. No gamedev web, a Body é onde residem as tags de conteúdo que servirão de base para as interações que o JavaScript irá controlar mais tarde, garantindo que o palco esteja montado antes dos atores (o código) entrarem em cena.</p>
        <pre style="${codeStyle}">&lt;html&gt;\n  &lt;head&gt; (Configurações) &lt;/head&gt;\n  &lt;body&gt; (O Jogo em si) &lt;/body&gt;\n&lt;/html&gt;</pre>
    `,
    "Atributos": `
        <p>Atributos são propriedades que adicionamos dentro da tag de abertura para dar "poderes" ou características extras a um elemento. Eles seguem o padrão de nome e valor, como <code>id="player"</code> ou <code>class="inimigo"</code>. Eles são essenciais porque permitem que o CSS saiba quem deve pintar de vermelho e que o JavaScript saiba exatamente qual herói deve perder vida quando um botão é clicado.</p>
        <p>Existem atributos globais, como o <strong>ID</strong> (que deve ser único para um único elemento) e a <strong>Class</strong> (que pode ser usada em vários elementos ao mesmo tempo). No desenvolvimento de jogos, usamos IDs para identificar elementos únicos como a <code>id="health-bar"</code> e classes para grupos, como <code>class="item-inventario"</code>, facilitando a aplicação de estilos em massa.</p>
        <p>Além disso, existem atributos específicos para certas funções, como o <code>src</code> para indicar o caminho de uma imagem ou o <code>href</code> para links. Dominar o uso de atributos é o que permite transformar uma tag genérica em um componente inteligente do seu sistema, criando uma conexão direta entre a estrutura visual e a lógica de programação que você irá desenvolver.</p>
        <pre style="${codeStyle}">&lt;div id="status" class="hud-layer"&gt;Vida: 100&lt;/div&gt;</pre>
    `,
    "Títulos (H1-H6)": `
        <p>Os <strong>Títulos</strong> são tags de conteúdo que definem a importância e a hierarquia dos textos na sua interface. Eles vão do <code>&lt;h1&gt;</code> (o mais importante e geralmente maior) até o <code>&lt;h6&gt;</code> (o menor e mais secundário). Eles funcionam como manchetes de um jornal, guiando o olhar do usuário para o que realmente importa naquele momento dentro da aplicação ou do site.</p>
        <p>Em um contexto de gamedev, os títulos são perfeitos para criar cabeçalhos de menus, nomes de missões em destaque ou o título principal na tela de carregamento. O uso correto do H1, por exemplo, ajuda o navegador e os motores de busca a entenderem qual é o tema principal da sua página, sendo uma peça chave para a acessibilidade e organização do projeto.</p>
        <p>É importante não usar essas tags apenas pelo tamanho da letra, pois o tamanho deve ser controlado pelo CSS. O uso deve ser semântico: se é o nome do seu jogo, use H1; se é o nome de uma categoria dentro da loja do jogo, use H2 ou H3. Isso cria uma estrutura lógica que facilita a manutenção do código e a leitura por tecnologias assistivas.</p>
        <pre style="${codeStyle}">&lt;h1&gt;Menu Principal&lt;/h1&gt;\n&lt;h2&gt;Opções de Vídeo&lt;/h2&gt;</pre>
    `,
    "Parágrafos": `
        <p>A tag <code>&lt;p&gt;</code> é a principal forma de inserir blocos de texto no seu projeto. Ela cria automaticamente um pequeno espaço (margem) antes e depois do conteúdo, garantindo que os textos não fiquem todos amontoados e sejam fáceis de ler. É a tag ideal para descrições de itens, diálogos longos de NPCs ou instruções de como jogar.</p>
        <p>No HTML, o navegador ignora quebras de linha que você faz apertando "Enter" no teclado dentro do código. Para que o texto realmente pule uma linha visualmente para o jogador, você deve usar a tag <code>&lt;br&gt;</code> ou fechar um parágrafo e abrir outro. Essa característica do HTML exige que o desenvolvedor seja intencional sobre como organiza a leitura do conteúdo.</p>
        <p>Parágrafos bem estruturados melhoram a experiência do usuário, evitando o cansaço visual. Em jogos complexos, onde a história é contada através de documentos ou diários encontrados pelo cenário, usar a tag de parágrafo corretamente permite que você controle o fluxo da informação e aplique estilos de tipografia de forma uniforme em todo o texto.</p>
        <pre style="${codeStyle}">&lt;p&gt;O herói caminha pela floresta escura...&lt;/p&gt;</pre>
    `,
    "Links": `
        <p>A tag de âncora <code>&lt;a&gt;</code> é o que permite a navegação entre diferentes páginas ou seções do seu site. O atributo mais importante dela é o <code>href</code>, que guarda o endereço de destino. Sem o link, a internet seria apenas um conjunto de páginas isoladas; ele é a "ponte" que conecta seu jogo a uma página de créditos, ao seu portfólio ou a uma rede social.</p>
        <p>Em jogos para navegador, os links podem ser usados para botões de "Saiba Mais", convites para comunidades no Discord ou até para baixar o manual do jogo em PDF. Você também pode usar o atributo <code>target="_blank"</code> para garantir que, ao clicar no link, o jogador abra uma nova aba e não feche a janela onde o seu jogo está rodando no momento.</p>
        <p>Embora no JavaScript possamos fazer botões que mudam a cena do jogo, o link HTML é a ferramenta nativa e mais poderosa para conectar o seu projeto ao resto da web. Um link bem posicionado e claramente identificado ajuda na navegação e garante que o usuário saiba exatamente para onde será levado ao interagir com aquele elemento de interface.</p>
        <pre style="${codeStyle}">&lt;a href="https://meujogo.com" target="_blank"&gt;Visite o Site Oficial&lt;/a&gt;</pre>
    `,
    "Listas": `
        <p>As <strong>Listas</strong> são tags de conteúdo fundamentais para organizar grupos de itens. Temos as listas não ordenadas (<code>&lt;ul&gt;</code>), que usam marcadores como bolinhas, e as listas ordenadas (<code>&lt;ol&gt;</code>), que numeram os itens automaticamente. Cada item individual dentro da lista deve ser obrigatoriamente colocado dentro de uma tag <code>&lt;li&gt;</code> (List Item).</p>
        <p>Para quem cria jogos, as listas são a escolha perfeita para construir menus de inventário, listas de conquistas ou placares de líderes (leaderboards). Elas permitem que você agrupe informações relacionadas de forma limpa e estruturada, facilitando a aplicação de estilos CSS para transformar uma lista simples em uma grade de ícones moderna e profissional.</p>
        <p>Além da organização visual, as listas ajudam o navegador a entender que aqueles itens pertencem ao mesmo grupo. Isso é essencial para que o JavaScript consiga percorrer todos os itens de uma só vez (usando loops) para atualizar quantidades de itens ou verificar se o jogador já completou todas as missões listadas naquela seção do jogo.</p>
        <pre style="${codeStyle}">&lt;ul&gt;\n  &lt;li&gt;Poção de Cura&lt;/li&gt;\n  &lt;li&gt;Espada Curta&lt;/li&gt;\n&lt;/ul&gt;</pre>
    `,
    "Imagens": `
        <p>A tag <code>&lt;img&gt;</code> é utilizada para inserir arquivos visuais, como fotos, ícones e, no caso de jogos, os sprites dos personagens e cenários. Ela é uma tag "auto-fechável", o que significa que não precisa de um fechamento como <code>&lt;/img&gt;</code>. Os dois atributos obrigatórios são o <code>src</code> (o caminho do arquivo) e o <code>alt</code> (uma descrição em texto da imagem).</p>
        <p>O atributo <code>alt</code> é vital para a acessibilidade, permitindo que leitores de tela descrevam a imagem para quem não pode ver, e também serve como um substituto caso o arquivo da imagem falhe ao carregar. Em gamedev, as imagens são a base da identidade visual; sem elas, o jogo seria apenas texto e lógica invisível. É importante usar formatos leves como PNG ou WebP para garantir que o jogo carregue rápido.</p>
        <p>Embora o JavaScript controle a movimentação, o HTML é quem "chama" a imagem para o palco do navegador. Você pode definir o tamanho inicial usando <code>width</code> e <code>height</code>, mas o ideal é controlar essas proporções via CSS para manter o design responsivo. Dominar a inserção de imagens é o primeiro passo para dar vida e cor ao universo que você está criando no navegador.</p>
        <pre style="${codeStyle}">&lt;img src="hero.png" alt="Herói do Jogo" width="50"&gt;</pre>
    `,
    "Comentários": `
        <p>Os <strong>Comentários</strong> são anotações que você deixa no meio do código para você mesmo ou para outros programadores. Eles começam com <code>&lt;!--</code> e terminam com <code>--&gt;</code>. Tudo o que estiver dentro dessas marcas será completamente ignorado pelo navegador, o que significa que o jogador nunca verá esses textos na tela do site ou do jogo.</p>
        <p>Eles são ferramentas poderosas de organização e depuração (debug). Você pode usar comentários para marcar onde começa a seção do HUD, para lembrar de corrigir um bug mais tarde ou para "esconder" temporariamente uma parte do código que você ainda não quer que apareça, mas que também não quer apagar definitivamente do arquivo.</p>
        <p>No desenvolvimento de jogos complexos, os comentários funcionam como o "mapa da mina". Um código bem comentado é muito mais fácil de manter meses depois que você o escreveu. No entanto, lembre-se: qualquer pessoa que clicar em "Ver código fonte" no navegador poderá ler seus comentários, então nunca coloque senhas ou informações sensíveis neles!</p>
        <pre style="${codeStyle}">&lt;!-- TODO: Adicionar sistema de partículas aqui --&gt;</pre>
    `,
    "Formulários": `
        <p>A tag <code>&lt;form&gt;</code> serve para criar áreas de interação onde o usuário pode inserir dados. Dentro dela, usamos a tag <code>&lt;input&gt;</code> para criar campos de texto, botões de seleção ou caixas de senha. É a principal forma de coletar informações do jogador e enviá-las para processamento, como em telas de login ou de criação de personagens.</p>
        <p>Em um jogo, os formulários são usados para que o jogador digite seu "Nickname", escolha a cor do seu traje em um menu de customização ou ajuste configurações de volume. Cada campo de entrada deve ser acompanhado de um <code>&lt;label&gt;</code>, que é o texto explicativo que diz ao usuário o que ele deve digitar naquele campo específico, melhorando a usabilidade.</p>
        <p>Validar o que o usuário digita (como impedir nomes curtos demais) pode ser feito de forma simples com atributos como <code>required</code> diretamente no HTML. Os formulários transformam o jogador de um espectador passivo em um participante ativo, permitindo que ele insira suas preferências e dados que o JavaScript usará para personalizar a aventura em tempo real.</p>
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
    manualLog("Sistema de Enciclopédia Pronto.");
    renderEncGrid();
});
