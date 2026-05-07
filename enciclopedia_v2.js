const db = {
    html: {
        iniciante: ["Tags Básicas", "Estrutura Global", "Tags de Conteúdo", "Meta Tags", "Atributos"],
        intermediario: [], avancado: []
    },
    css: { iniciante: [], intermediario: [], avancado: [] },
    js: { iniciante: [], intermediario: [], avancado: [] }
};

const codeStyle = "background: #020617; padding: 15px; border-radius: 8px; border: 1px solid #334155; color: #38bdf8; display: block; white-space: pre-wrap; margin-top: 10px; font-family: monospace; border-left: 4px solid #38bdf8;";

const conteudosManuais = {
    "Tags Básicas": `
        <p>As <strong>Tags</strong> servem para dar mais informações sobre o código para o programa ou navegador. Elas funcionam como etiquetas fundamentais que classificam cada elemento, dizendo ao navegador exatamente o que cada pedaço de informação representa.</p>
        <p>As tags são abertas com <code>&lt;tag&gt;</code> e a maioria é fechada com <code>&lt;/tag&gt;</code>. Um exemplo clássico é a tag <code>&lt;p&gt;</code>, usada para criar parágrafos. No desenvolvimento de jogos, as tags são os containers da sua interface (HUD), permitindo distinguir uma barra de vida de um botão de inventário.</p>
        <pre style="${codeStyle}">&lt;p&gt;Este é um parágrafo básico.&lt;/p&gt;</pre>
    `,
    "Estrutura Global": `
        <p>As <strong>Tags de Estrutura</strong> servem para organizar o seu código de forma lógica. Elas separam cada área do projeto e indicam ao navegador o que cada parte está fazendo. Funcionam como o esqueleto do site ou jogo.</p>
        <p>As duas tags vitais são a <code>&lt;head&gt;</code> e a <code>&lt;body&gt;</code>. A <strong>Head</strong> guarda configurações e metadados que não aparecem para o usuário. A <strong>Body</strong> é onde reside o conteúdo visível: sprites, textos de HUD e elementos interativos do jogo.</p>
        <pre style="${codeStyle}">&lt;html&gt;\n  &lt;head&gt; (Configurações) &lt;/head&gt;\n  &lt;body&gt; (O Jogo) &lt;/body&gt;\n&lt;/html&gt;</pre>
    `,
    "Tags de Conteúdo": `
        <p>As <strong>Tags de Conteúdo</strong> são utilizadas para a criação de textos ou a inserção de imagens e áudio. Elas residem obrigatoriamente dentro da <code>&lt;body&gt;</code> e dão corpo ao que o jogador interage.</p>
        <p>No gamedev, essas tags servem para inserir o Canvas (onde o jogo roda), imagens de fundo e sons. É importante notar que o HTML apenas <strong>insere</strong> os elementos; a lógica de movimento e colisão é feita no JavaScript.</p>
        <pre style="${codeStyle}">&lt;img src="hero.png"&gt;\n&lt;h1&gt;Level 1&lt;/h1&gt;</pre>
    `,
    "Meta Tags": `
        <p><strong>Meta tags</strong> ficam na parte <code>&lt;head&gt;</code>. Elas não são visíveis, mas informam ao navegador dados técnicos como o conjunto de caracteres (UTF-8) e o ajuste de tela (viewport).</p>
        <p>Em jogos web, elas garantem que a tela não fique "tremida" ou com zoom errado em dispositivos móveis, preparando o ambiente para que o Canvas do jogo ocupe o espaço correto.</p>
        <pre style="${codeStyle}">&lt;meta charset="UTF-8"&gt;\n&lt;meta name="viewport" content="width=device-width"&gt;</pre>
    `,
    "Atributos": `
        <p><strong>Atributos</strong> são propriedades extras adicionadas dentro da tag de abertura. O atributo mais vital é o <code>id</code>, que dá um nome único para o elemento, permitindo que o JavaScript o encontre para alterar sua vida, posição ou estado.</p>
        <pre style="${codeStyle}">&lt;div id="player" class="active-entity"&gt;&lt;/div&gt;</pre>
    `
};

function getTopicContent(topic) {
    return conteudosManuais[topic.trim()] || "Conteúdo atualizando...";
}

function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;
    grid.innerHTML = '';
    db.html.iniciante.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `<h3>${topic}</h3>`;
        card.onclick = () => {
            const html = `<h2>${topic}</h2>${getTopicContent(topic)}`;
            if (typeof openModal === 'function') openModal('reader', html);
        };
        grid.appendChild(card);
    });
}
