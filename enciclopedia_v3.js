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
        <p>As tags são os blocos fundamentais do HTML e funcionam como instruções que dizem ao navegador como cada parte da página deve ser exibida. A maioria das tags possui uma estrutura de abertura e fechamento, como <code>&lt;p&gt;</code> e <code>&lt;/p&gt;</code>, envolvendo o conteúdo que será interpretado.</p>
        <p>Existem também tags sem fechamento, como <code>&lt;img&gt;</code>, usadas para inserir elementos específicos na tela. Cada tag possui uma função própria, podendo representar textos, imagens, divisões de interface ou áreas interativas. Sem as tags, o navegador não conseguiria entender como organizar os elementos de um jogo web.</p>
        <p>Na prática, as tags são usadas para montar toda a estrutura visual do jogo dentro do navegador. Um menu principal pode ser criado com títulos, botões e imagens organizados através dessas marcações. Em jogos de navegador, é comum usar tags para definir painéis de informações, telas de pausa, caixas de diálogo e elementos do HUD.</p>
        <div class="code-block">
            <pre><code>&lt;h1&gt;Game Over&lt;/h1&gt;
&lt;p&gt;Você perdeu todas as vidas.&lt;/p&gt;
&lt;button&gt;Reiniciar Fase&lt;/button&gt;</code></pre>
        </div>`,
    
    "Estrutura Global": `
        <p>A estrutura global do HTML representa a base obrigatória de qualquer página web e define como o navegador deve interpretar o documento. As principais divisões são as tags <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> e <code>&lt;body&gt;</code>.</p>
        <p>A tag <code>&lt;html&gt;</code> envolve todo o conteúdo da página, funcionando como o container principal. Dentro dela, o <strong>head</strong> armazena configurações técnicas e conexões com arquivos externos, enquanto o <strong>body</strong> contém tudo o que será exibido visualmente ao jogador.</p>
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
        <p>As tags de texto são usadas para exibir conteúdos escritos dentro da página e ajudam a organizar informações de maneira hierárquica. As tags <code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code> representam títulos de diferentes níveis de importância, enquanto a tag <code>&lt;p&gt;</code> define parágrafos comuns.</p>
        <p>No contexto de desenvolvimento de jogos, textos bem estruturados melhoram a experiência do jogador e tornam a interface mais intuitiva. Isso permite criar títulos grandes para menus e textos menores para diálogos ou descrições.</p>
        <div class="code-block">
            <pre><code>&lt;h1&gt;Missão Completa&lt;/h1&gt;
&lt;h2&gt;Próxima Área Desbloqueada&lt;/h2&gt;
&lt;p&gt;Você encontrou a chave dourada da fortaleza.&lt;/p&gt;</code></pre>
        </div>`,

    "Meta Tags Técnicas": `
        <p>As meta tags são configurações especiais colocadas dentro do <code>&lt;head&gt;</code> para fornecer informações importantes ao navegador. Elas não aparecem diretamente para o jogador, mas influenciam no comportamento da página.</p>
        <p>Uma das mais importantes é a <strong>viewport</strong>, responsável pela adaptação da interface em diferentes tamanhos de tela. Essas configurações garantem que o jogo funcione corretamente em celulares, tablets e computadores.</p>
        <div class="code-block">
            <pre><code>&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Corrida Urbana&lt;/title&gt;
&lt;/head&gt;</code></pre>
        </div>`,

    "Atributos e IDs": `
        <p>Os atributos são informações extras adicionadas às tags HTML para modificar seu comportamento ou fornecer identificações específicas. Eles aparecem dentro da tag de abertura e normalmente seguem o formato <code>nome="valor"</code>.</p>
        <p>Um dos atributos mais importantes é o <strong>id</strong>, usado para identificar elementos únicos dentro da página. Isso permite que scripts em JavaScript localizem e manipulem componentes específicos da tela, como barras de vida.</p>
        <div class="code-block">
            <pre><code>&lt;div id="vidaJogador"&gt;Vida: 100&lt;/div&gt;
&lt;img src="sprite.png" alt="Personagem Principal"&gt;</code></pre>
        </div>`,

    "Links e Navegação": `
        <p>A tag <code>&lt;a&gt;</code> é usada para criar links e permitir navegação entre páginas ou recursos externos. O principal atributo dessa tag é o <strong>href</strong>, responsável por indicar o destino do link.</p>
        <p>Jogos web utilizam links para conectar menus, créditos, rankings e páginas adicionais. Um botão de “Iniciar Jogo” pode levar o jogador para outra página contendo a gameplay principal.</p>
        <div class="code-block">
            <pre><code>&lt;a href="jogo.html"&gt;Iniciar Jogo&lt;/a&gt;
&lt;a href="creditos.html"&gt;Créditos&lt;/a&gt;</code></pre>
        </div>`,

    "Listas de Inventário": `
        <p>As listas em HTML servem para organizar conjuntos de informações em sequência. A tag <code>&lt;ul&gt;</code> cria listas sem ordem numérica, enquanto <code>&lt;ol&gt;</code> cria listas numeradas automaticamente. Dentro delas, cada item é definido pela tag <code>&lt;li&gt;</code>.</p>
        <p>No desenvolvimento de jogos web, listas são importantes porque ajudam a estruturar informações dinâmicas de forma eficiente, como itens coletados pelo jogador.</p>
        <div class="code-block">
            <pre><code>&lt;h2&gt;Inventário&lt;/h2&gt;
&lt;ul&gt;
    &lt;li&gt;Espada de Ferro&lt;/li&gt;
    &lt;li&gt;Poção de Vida&lt;/li&gt;
    &lt;li&gt;Escudo de Madeira&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>`,

    "Inserção de Mídia": `
        <p>O HTML possui tags específicas para inserir imagens, áudios e vídeos. A tag <code>&lt;img&gt;</code> é usada para imagens, <code>&lt;audio&gt;</code> para sons e <code>&lt;video&gt;</code> para vídeos.</p>
        <p>Esses elementos permitem carregar arquivos externos diretamente na interface do jogo. Saber integrar mídia corretamente é uma habilidade fundamental para criar imersão.</p>
        <div class="code-block">
            <pre><code>&lt;img src="enemy.png" alt="Inimigo"&gt;
&lt;audio controls&gt;
    &lt;source src="battle-theme.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;</code></pre>
        </div>`,

    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> funciona como um container genérico usado para agrupar elementos. Ela não possui significado visual próprio, mas serve para organizar e separar áreas da interface.</p>
        <p>As divs são usadas para criar menus, barras de vida e painéis. Agrupar componentes evita bagunça no código e facilita o controle de posições e animações com CSS.</p>
        <div class="code-block">
            <pre><code>&lt;div id="hud"&gt;
    &lt;div id="vida"&gt;Vida: 80&lt;/div&gt;
    &lt;div id="moedas"&gt;Moedas: 150&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>`,

    "Comentários de Código": `
        <p>Os comentários em HTML são anotações invisíveis usadas para documentar o código sem interferir na renderização da página. Eles são escritos utilizando a estrutura <code>&lt;!-- comentário --&gt;</code>.</p>
        <p>Eles ajudam a localizar partes específicas da interface sem precisar analisar cada linha manualmente, facilitando correções de bugs e futuras expansões.</p>
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
