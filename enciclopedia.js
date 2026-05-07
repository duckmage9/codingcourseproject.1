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

// Estilo embutido para os blocos de código
const codeStyle = "background: #020617; padding: 15px; border-radius: 8px; border: 1px solid #334155; overflow-x: auto; font-family: monospace; color: #38bdf8; margin-top: 15px;";

// Banco de dados com conteúdos escritos à mão para os fundamentos
const conteudosManuais = {
    // ==========================================
    // HTML - INICIANTE (Todas as 10 caixas)
    // ==========================================
    "Tags Básicas": `
        <p>O HTML funciona através de <strong>Tags</strong>. Pense nas tags como etiquetas de organização que dizem ao navegador o que cada pedaço de texto significa na sua página, seja um título, um parágrafo ou um botão para o seu jogo.</p>
        <p>A imensa maioria das tags possui uma estrutura de abertura (usando os sinais <code>&lt; &gt;</code>) e uma de fechamento (adicionando uma barra <code>&lt;/ &gt;</code>). Todo o conteúdo que você deseja formatar deve ser colocado exatamente entre essas duas etiquetas.</p>
        <p>Para dar o seu primeiro passo prático, você pode testar a criação de um título principal acompanhado de um texto simples. Copie o código abaixo e cole no seu editor:</p>
        <pre style="${codeStyle}">&lt;h1&gt;Bem-vindo ao meu Jogo&lt;/h1&gt;\n&lt;p&gt;Esta é a tela inicial do meu projeto incrível.&lt;/p&gt;</pre>
    `,
    "Estrutura Global": `
        <p>Todo arquivo HTML precisa de um esqueleto invisível para funcionar corretamente. Essa estrutura global é o que o navegador lê primeiro para entender que tipo de documento ele está prestes a renderizar.</p>
        <p>A estrutura é dividida em duas partes principais: o <code>&lt;head&gt;</code> (cabeça), onde colocamos as configurações, links de CSS e título da aba; e o <code>&lt;body&gt;</code> (corpo), onde vai tudo o que o usuário realmente vê e interage.</p>
        <p>Abaixo está o código essencial que você deve colocar em todo arquivo <code>.html</code> que criar antes de começar a programar o conteúdo visual:</p>
        <pre style="${codeStyle}">&lt;!DOCTYPE html&gt;\n&lt;html lang="pt-br"&gt;\n&lt;head&gt;\n   &lt;meta charset="UTF-8"&gt;\n   &lt;title&gt;Meu Jogo Base&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n   &lt;!-- O visual e as tags vão aqui dentro do body --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>
    `,
    "Atributos": `
        <p>Os <strong>Atributos</strong> são informações extras que adicionamos dentro da tag de abertura para modificar o seu comportamento ou dar características a ela. Eles são a principal forma de conectar o HTML com o CSS e o JavaScript.</p>
        <p>Geralmente, eles funcionam no formato <code>nome="valor"</code>. Os atributos mais comuns são o <code>class</code> (que agrupa vários elementos com o mesmo estilo) e o <code>id</code> (que é uma identificação única para um elemento específico, muito usado pelo JavaScript).</p>
        <p>No exemplo abaixo, criamos uma caixa (div) que representa o jogador. Demos a ela um ID único e duas classes para estilizá-la posteriormente:</p>
        <pre style="${codeStyle}">&lt;div id="player-1" class="personagem jogavel verde"&gt;\n   &lt;p&gt;Herói Principal&lt;/p&gt;\n&lt;/div&gt;</pre>
    `,
    "Títulos (H1-H6)": `
        <p>A web precisa de hierarquia para que tanto os usuários quanto os motores de busca (como o Google) entendam a importância da informação. É para isso que usamos as tags de título, que vão do <strong>H1</strong> até o <strong>H6</strong>.</p>
        <p>O <code>&lt;h1&gt;</code> é o mais importante e deve ser usado apenas uma vez por página, geralmente para o nome do site ou título principal. O <code>&lt;h2&gt;</code> serve para subtítulos, e assim por diante. Quanto maior o número da tag, menor o tamanho visual padrão do texto.</p>
        <p>Veja como estruturar os níveis de importância de um menu ou de um painel de informações:</p>
        <pre style="${codeStyle}">&lt;h1&gt;Menu Principal&lt;/h1&gt;\n&lt;h2&gt;Configurações&lt;/h2&gt;\n&lt;h3&gt;Áudio&lt;/h3&gt;\n&lt;h3&gt;Gráficos&lt;/h3&gt;</pre>
    `,
    "Parágrafos": `
        <p>A tag <code>&lt;p&gt;</code> é a ferramenta base para escrever blocos de texto comuns. O navegador automaticamente cria uma margem antes e depois de cada parágrafo, garantindo que o texto não fique espremido.</p>
        <p>Se você precisar quebrar uma linha dentro do mesmo parágrafo (como em um poema ou diálogo de personagem), você não pode simplesmente apertar "Enter" no código, pois o HTML ignora espaços extras. Para isso, usamos a tag <code>&lt;br&gt;</code>, que não precisa ser fechada.</p>
        <p>No código a seguir, criamos um parágrafo longo e mostramos como fazer uma quebra forçada de linha no meio da frase:</p>
        <pre style="${codeStyle}">&lt;p&gt;Olá, aventureiro! Bem-vindo à vila inicial.&lt;br&gt;\nTenha cuidado, pois os monstros lá fora estão perigosos.&lt;/p&gt;</pre>
    `,
    "Links": `
        <p>Os <strong>Links</strong> são a espinha dorsal da internet, permitindo pular de uma página para outra. Em HTML, criamos links usando a tag <code>&lt;a&gt;</code> (de <em>anchor</em>, ou âncora).</p>
        <p>Para o link funcionar, ele obrigatoriamente precisa do atributo <code>href</code>, que indica o endereço de destino. Se você quiser que o link abra em uma nova aba para não tirar o jogador da tela atual, basta adicionar o atributo <code>target="_blank"</code>.</p>
        <p>Abaixo temos um link que aponta para o Google e abre em uma nova aba. Tente alterar o link para o endereço do seu repositório!</p>
        <pre style="${codeStyle}">&lt;a href="https://www.google.com" target="_blank"&gt;\n   Clique aqui para abrir o Google em outra aba\n&lt;/a&gt;</pre>
    `,
    "Listas": `
        <p>Para agrupar itens relacionados, como um inventário de jogo ou um menu de navegação, utilizamos as <strong>Listas</strong>. Existem dois tipos principais: as não-ordenadas <code>&lt;ul&gt;</code> (com bolinhas) e as ordenadas <code>&lt;ol&gt;</code> (numeradas).</p>
        <p>Dentro da tag principal da lista, cada item individual deve ser envolvido pela tag <code>&lt;li&gt;</code> (list item). Isso diz ao navegador que aquele texto específico é uma linha da lista.</p>
        <p>Aqui está a estrutura de uma lista não-ordenada simples, ideal para construir um pequeno inventário de personagem:</p>
        <pre style="${codeStyle}">&lt;ul&gt;\n   &lt;li&gt;10x Poções de Cura&lt;/li&gt;\n   &lt;li&gt;1x Espada Longa&lt;/li&gt;\n   &lt;li&gt;Mapa do Tesouro&lt;/li&gt;\n&lt;/ul&gt;</pre>
    `,
    "Imagens": `
        <p>Para trazer gráficos, sprites e fotos para a sua página, usamos a tag <code>&lt;img&gt;</code>. Esta é uma daquelas raras tags HTML que não possuem uma tag de fechamento correspondente.</p>
        <p>Ela depende de dois atributos críticos: o <code>src</code> (source), que aponta o caminho ou a URL de onde a imagem está salva, e o <code>alt</code> (texto alternativo), que descreve a imagem para leitores de tela ou para caso a imagem falhe ao carregar.</p>
        <p>Veja como inserir um sprite de personagem fictício diretamente da web:</p>
        <pre style="${codeStyle}">&lt;img src="https://seusite.com/sprite_heroi.png" alt="Herói principal em posição de ataque" width="100"&gt;</pre>
    `,
    "Comentários": `
        <p>Os <strong>Comentários</strong> são mensagens ocultas no seu código. O navegador ignora tudo o que estiver dentro de um comentário, o que significa que isso não aparecerá na tela final do usuário ou jogador.</p>
        <p>Eles são vitais para duas coisas: deixar anotações para você mesmo (ou para outros programadores da equipe) explicando o que um bloco de código faz, ou para desativar temporariamente um pedaço de código defeituoso sem apagá-lo.</p>
        <p>Tudo o que estiver entre <code>&lt;!--</code> e <code>--&gt;</code> será ignorado. Experimente no código abaixo:</p>
        <pre style="${codeStyle}">&lt;!-- Esta div representa o inimigo chefe da fase --&gt;\n&lt;div class="boss"&gt;Dragão&lt;/div&gt;\n\n&lt;!-- \n&lt;div class="bug"&gt;Este código estava quebrando o jogo, então eu comentei&lt;/div&gt; \n--&gt;</pre>
    `,
    "Formulários": `
        <p>Os <strong>Formulários</strong> permitem que os usuários enviem informações, como o nome de login, senhas ou configurações de jogo. O elemento pai de tudo isso é a tag <code>&lt;form&gt;</code>.</p>
        <p>Dentro do form, usamos a tag <code>&lt;input&gt;</code> para criar os campos de digitação. O atributo <code>type</code> define se é uma caixa de texto, uma senha ou um botão de seleção. Por fim, precisamos de um <code>&lt;button&gt;</code> para enviar os dados.</p>
        <p>Este é o código básico de um painel de login. O atributo placeholder cria um texto de dica que some quando o usuário começa a digitar:</p>
        <pre style="${codeStyle}">&lt;form&gt;\n   &lt;label&gt;Nome do Jogador:&lt;/label&gt;\n   &lt;input type="text" placeholder="Digite seu nick..."&gt;\n   &lt;button type="button"&gt;Entrar no Jogo&lt;/button&gt;\n&lt;/form&gt;</pre>
    `,

    // ==========================================
    // MANTIDO: CSS e JS Básicos para demonstração
    // ==========================================
    "Seletores": `
        <p>No CSS, os <strong>Seletores</strong> são a forma como nós "miramos" em um elemento do HTML para mudar o visual dele. Sem eles, o CSS não saberia quem pintar, redimensionar ou animar.</p>
        <p>Você pode selecionar elementos pelo nome da tag (ex: <code>p</code>), pela classe usando um ponto (ex: <code>.minha-classe</code>), ou pelo ID usando uma hashtag (ex: <code>#meu-id</code>). A classe é a mais recomendada, pois pode ser repetida em vários elementos.</p>
        <p>Veja no exemplo abaixo como criamos uma regra para mudar a cor de todos os botões que tiverem a classe "btn-start":</p>
        <pre style="${codeStyle}">.btn-start {\n   background-color: #10b981;\n   color: white;\n   padding: 10px 20px;\n   border-radius: 5px;\n}</pre>
    `,
    "Cores": `
        <p>Trabalhar com cores no CSS vai muito além de digitar "red" ou "blue". Para ter um design profissional, utilizamos sistemas de cores precisos, como códigos Hexadecimais ou RGB, que nos dão acesso a milhões de tons.</p>
        <p>Existem duas propriedades principais que você mais vai usar: <code>color</code> (que muda a cor do texto ou da fonte) e <code>background-color</code> (que muda a cor do fundo da caixa inteira do elemento).</p>
        <p>No código abaixo, estilizamos uma caixa com um fundo escuro e o texto em um tom de azul claro usando o sistema Hexadecimal:</p>
        <pre style="${codeStyle}">.caixa-escura {\n   background-color: #0f172a;\n   color: #38bdf8;\n}</pre>
    `,
    "Variáveis": `
        <p>Em JavaScript, as <strong>Variáveis</strong> são como pequenas caixas ou gavetas na memória do computador onde guardamos informações para usar mais tarde. Sem elas, seu jogo não lembraria a pontuação do jogador ou o nome do personagem.</p>
        <p>Hoje em dia, usamos principalmente duas palavras-chave para criar essas caixas: <code>let</code> (para valores que vão mudar com o tempo, como a vida do jogador) e <code>const</code> (para valores fixos que nunca mudam, como o limite máximo de tempo).</p>
        <p>Experimente criar as suas primeiras variáveis e exibi-las no console do navegador com o código abaixo:</p>
        <pre style="${codeStyle}">const nomeJogador = "duckmage9";\nlet pontuacao = 0;\n\n// Ganhando pontos...\npontuacao = pontuacao + 10;\n\nconsole.log(nomeJogador + " tem " + pontuacao + " pontos!");</pre>
    `,
    "Funções": `
        <p>As <strong>Funções</strong> são blocos de código que empacotam uma série de comandos. Elas servem para que você não precise reescrever o mesmo código várias vezes. Pense nelas como uma receita de bolo: você escreve os passos uma vez, e depois é só "chamar" a receita para o bolo ser feito.</p>
        <p>Você pode passar informações para dentro de uma função (chamadas de parâmetros) e ela pode devolver um resultado. Isso é essencial para organizar a lógica de movimentação, ataques ou cálculos matemáticos do seu projeto.</p>
        <p>Aqui está como você cria uma função simples que soma dois números e depois pede para o JavaScript executá-la:</p>
        <pre style="${codeStyle}">function curarJogador(vidaAtual, pocao) {\n   let novaVida = vidaAtual + pocao;\n   return novaVida;\n}\n\nlet minhaVida = curarJogador(50, 25);\nconsole.log("Vida atualizada: " + minhaVida);</pre>
    `
};

// Motor dinâmico
function getTopicContent(tech, level, topic) {
    if (conteudosManuais[topic]) {
        return conteudosManuais[topic];
    }

    const nomesTech = { html: 'HTML5', css: 'CSS3', js: 'JavaScript' };
    const techNome = nomesTech[tech];

    return `
        <p>Você está explorando o conceito de <strong>${topic}</strong> dentro da arquitetura do ${techNome}. Compreender este fundamento no nível <strong>${level}</strong> é um passo muito importante para expandir o que você consegue construir na web e no desenvolvimento de jogos.</p>
        <p>Na prática, o uso correto de ${topic} permite que o seu código fique mais organizado, performático e capaz de lidar com lógicas mais complexas. Ao aplicar este recurso, o seu foco deve ser sempre entender como ele interage com o restante dos elementos da tela e do motor do jogo.</p>
        <p>Para começar a testar este conceito hoje mesmo, prepare a estrutura abaixo no seu editor de código e comece a adicionar a sua própria lógica dentro dela:</p>
        <pre style="${codeStyle}">/* Estrutura base para praticar ${topic} em ${techNome} */\n\n// 1. Declare seus elementos ou seletores aqui\n// 2. Aplique a lógica de ${topic}\n// 3. Teste o resultado visual ou no console\n\nconsole.log("Sistema de ${topic} inicializado com sucesso!");</pre>
    `;
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
            const htmlContent = `
                <h2>${topic}</h2>
                ${getTopicContent(currentTech, currentLevel, topic)}
            `;
            openModal('reader', htmlContent);
        };
        
        grid.appendChild(card);
    });
}

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('#modo-enciclopedia .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    document.getElementById(`btn-${tech}`).classList.add(`active-${tech}`);
    renderEncGrid();
}

function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    event.currentTarget.classList.add('active-lvl');
    renderEncGrid();
}

// Inicializar ao carregar
window.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('topics-grid')) renderEncGrid();
});
