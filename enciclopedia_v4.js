/**
 * ENCICLOPÉDIA GAMEDEV - VERSÃO V4
 * Status: Textos Completos e Exemplos de Código
 */

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
        <p>As tags são os blocos fundamentais do HTML e funcionam como instruções que dizem ao navegador como cada parte da página deve ser exibida. A maioria das tags possui uma estrutura de abertura e fechamento, como <code>&lt;p&gt;</code> e <code>&lt;/p&gt;</code>, envolvendo o conteúdo que será interpretado. Existem também tags sem fechamento, como <code>&lt;img&gt;</code>, usadas para inserir elementos específicos na tela. Cada tag possui uma função própria, podendo representar textos, imagens, divisões de interface ou áreas interativas. Sem as tags, o navegador não conseguiria entender como organizar os elementos de um jogo web.</p>
        <p>Na prática, as tags são usadas para montar toda a estrutura visual do jogo dentro do navegador. Um menu principal pode ser criado com títulos, botões e imagens organizados através dessas marcações. Em jogos de navegador, é comum usar tags para definir painéis de informações, telas de pausa, caixas de diálogo e elementos do HUD. Além disso, as tags permitem integrar arquivos CSS e JavaScript que controlam a aparência e o comportamento do jogo. Cada parte da interface depende diretamente da forma como essas marcações são organizadas.</p>
        <p>No desenvolvimento de jogos web, entender tags é importante porque praticamente toda a interface do jogador depende delas. Uma tela de “Game Over”, por exemplo, precisa de títulos, textos e botões estruturados corretamente para funcionar bem. Quando o HTML é organizado de forma correta, fica mais fácil modificar a aparência do jogo usando CSS e adicionar interatividade usando JavaScript.</p>
        <div class="code-block">
            <pre><code>&lt;h1&gt;Game Over&lt;/h1&gt;
&lt;p&gt;Você perdeu todas as vidas.&lt;/p&gt;
&lt;button&gt;Reiniciar Fase&lt;/button&gt;</code></pre>
        </div>`,
    
    "Estrutura Global": `
        <p>A estrutura global do HTML representa a base obrigatória de qualquer página web e define como o navegador deve interpretar o documento. As principais divisões são as tags <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> e <code>&lt;body&gt;</code>. A tag <code>&lt;html&gt;</code> envolve todo o conteúdo da página, funcionando como o container principal. Dentro dela, o <strong>head</strong> armazena configurações técnicas e conexões com arquivos externos, enquanto o <strong>body</strong> contém tudo o que será exibido visualmente ao jogador. Essa organização garante que o navegador carregue o jogo corretamente.</p>
        <p>Na prática, essa estrutura funciona como a fundação de um projeto de jogo web. O <code>&lt;head&gt;</code> normalmente recebe links para arquivos CSS responsáveis pelo visual da interface e scripts JavaScript que controlam mecânicas do jogo. Já o <code>&lt;body&gt;</code> abriga elementos como menus, canvas do jogo, placares e barras de energia. Sem essa separação, o código ficaria desorganizado e difícil de manter. Mesmo projetos pequenos precisam dessa estrutura para funcionar corretamente em diferentes navegadores.</p>
        <div class="code-block">
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Jogo de Plataforma&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Aventura Espacial&lt;/h1&gt;
    &lt;canvas id="game"&gt;&lt;/canvas&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>`,
    
    "Tags de Texto": `
        <p>As tags de texto são usadas para exibir conteúdos escritos dentro da página e ajudam a organizar informações de maneira hierárquica. As tags <code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code> representam títulos de diferentes níveis de importância, enquanto a tag <code>&lt;p&gt;</code> define parágrafos comuns. Essas marcações ajudam o navegador a entender a estrutura do conteúdo textual da interface. Além disso, tornam a leitura mais clara tanto para usuários quanto para desenvolvedores. Em jogos, os textos são fundamentais para menus, diálogos, objetivos e mensagens de sistema.</p>
        <p>Na prática, as tags de texto aparecem constantemente em interfaces de jogos web. Um título principal pode representar o nome do jogo na tela inicial, enquanto parágrafos exibem instruções ou histórias do personagem. Também é comum usar headings para indicar capítulos, fases ou áreas específicas do jogo. Durante a gameplay, mensagens de vitória, derrota ou tutorial geralmente utilizam essas marcações.</p>
        <div class="code-block">
            <pre><code>&lt;h1&gt;Missão Completa&lt;/h1&gt;
&lt;h2&gt;Próxima Área Desbloqueada&lt;/h2&gt;
&lt;p&gt;Você encontrou a chave dourada da fortaleza.&lt;/p&gt;</code></pre>
        </div>`,

    "Meta Tags Técnicas": `
        <p>As meta tags são configurações especiais colocadas dentro do <code>&lt;head&gt;</code> para fornecer informações importantes ao navegador. Elas não aparecem diretamente para o jogador, mas influenciam no comportamento da página. Algumas meta tags definem codificação de caracteres, compatibilidade e dimensionamento em dispositivos móveis. Uma das mais importantes é a <strong>viewport</strong>, responsável pela adaptação da interface em diferentes tamanhos de tela. Essas configurações garantem que o jogo funcione corretamente em celulares, tablets e computadores.</p>
        <div class="code-block">
            <pre><code>&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Corrida Urbana&lt;/title&gt;
&lt;/head&gt;</code></pre>
        </div>`,

    "Atributos e IDs": `
        <p>Os atributos são informações extras adicionadas às tags HTML para modificar seu comportamento ou fornecer identificações específicas. Eles aparecem dentro da tag de abertura e normalmente seguem o formato <code>nome="valor"</code>. Um dos atributos mais importantes é o <strong>id</strong>, usado para identificar elementos únicos dentro da página. Também existem atributos como class, src, href e alt, cada um com funções diferentes. Esses recursos tornam os elementos mais controláveis pelo CSS e JavaScript.</p>
        <div class="code-block">
            <pre><code>&lt;div id="vidaJogador"&gt;Vida: 100&lt;/div&gt;
&lt;img src="sprite.png" alt="Personagem Principal"&gt;</code></pre>
        </div>`,

    "Links e Navegação": `
        <p>A tag <code>&lt;a&gt;</code> é usada para criar links e permitir navegação entre páginas ou recursos externos. O principal atributo dessa tag é o <strong>href</strong>, responsável por indicar o destino do link. Os links podem levar para outras páginas do próprio jogo, arquivos, redes sociais ou sites externos. Eles são fundamentais para criar sistemas de navegação dentro de aplicações web.</p>
        <div class="code-block">
            <pre><code>&lt;a href="jogo.html"&gt;Iniciar Jogo&lt;/a&gt;
&lt;a href="creditos.html"&gt;Créditos&lt;/a&gt;</code></pre>
        </div>`,

    "Listas de Inventário": `
        <p>As listas em HTML servem para organizar conjuntos de informações em sequência e podem ser ordenadas ou não ordenadas. A tag <code>&lt;ul&gt;</code> cria listas sem ordem numérica, enquanto <code>&lt;ol&gt;</code> cria listas numeradas automaticamente. Dentro delas, cada item é definido pela tag <code>&lt;li&gt;</code>. Em jogos, listas podem representar inventários, missões, equipamentos ou rankings.</p>
        <div class="code-block">
            <pre><code>&lt;h2&gt;Inventário&lt;/h2&gt;
&lt;ul&gt;
    &lt;li&gt;Espada de Ferro&lt;/li&gt;
    &lt;li&gt;Poção de Vida&lt;/li&gt;
    &lt;li&gt;Escudo de Madeira&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>`,

    "Inserção de Mídia": `
        <p>O HTML possui tags específicas para inserir imagens, áudios e vídeos dentro da página. A tag <code>&lt;img&gt;</code> é usada para imagens, <code>&lt;audio&gt;</code> para sons e <code>&lt;video&gt;</code> para vídeos. Esses elementos permitem carregar arquivos externos diretamente na interface do jogo. Recursos visuais e sonoros são extremamente importantes para criar imersão.</p>
        <div class="code-block">
            <pre><code>&lt;img src="enemy.png" alt="Inimigo"&gt;
&lt;audio controls&gt;
    &lt;source src="battle-theme.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;</code></pre>
        </div>`,

    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> funciona como um container genérico usado para agrupar elementos dentro da página. Ela não possui significado visual próprio, mas serve para organizar e separar áreas da interface. Desenvolvedores utilizam divs para criar blocos independentes que podem receber estilos e comportamentos específicos via CSS e JavaScript.</p>
        <div class="code-block">
            <pre><code>&lt;div id="hud"&gt;
    &lt;div id="vida"&gt;Vida: 80&lt;/div&gt;
    &lt;div id="moedas"&gt;Moedas: 150&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>`,

    "Comentários de Código": `
        <p>Os comentários em HTML são anotações invisíveis usadas para documentar o código sem interferir na renderização da página. Eles são escritos utilizando a estrutura <code>&lt;!-- comentário --&gt;</code>. Comentários ajudam desenvolvedores a explicar partes importantes do projeto e organizar melhor a lógica da interface.</p>
        <div class="code-block">
            <pre><code>&lt;!-- Área do HUD do jogador --&gt;
&lt;div id="hud"&gt;
    &lt;p&gt;Vida: 100&lt;/p&gt;
&lt;/div&gt;</code></pre>
        </div>`
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

renderEncGrid();
