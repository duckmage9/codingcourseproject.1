window.conteudosHTML = {
    // === NÍVEL INICIANTE ===
    "Conceito de Tags": `
        <p>As tags são a base da linguagem HTML e funcionam como comandos que informam o navegador sobre como o conteúdo deve ser estruturado. No desenvolvimento de jogos, são usadas para definir desde a área onde o jogo será exibido até aos botões de menu e textos de interface. Cada tag é envolvida por parênteses angulares, como <code>&lt;html&gt;</code>.</p>
        <p>A maioria das tags trabalha em pares: uma de abertura e uma de fecho (que possui uma barra), como em <code>&lt;p&gt;Texto&lt;/p&gt;</code>. Esta estrutura permite organizar a hierarquia visual da página de forma lógica.</p>
        <div class="code-block"><pre><code>&lt;h1&gt;Meu Primeiro Jogo&lt;/h1&gt;
&lt;p&gt;Pressione Start para começar.&lt;/p&gt;</code></pre></div>`,

    "Estrutura Global": `
        <p>Todo o documento HTML5 profissional precisa de seguir uma estrutura global obrigatória. Isto garante que o navegador identifique o arquivo como um site moderno e aplique as regras de renderização corretamente. Esta estrutura começa sempre com a declaração <code>&lt;!DOCTYPE html&gt;</code>.</p>
        <p>Dentro da tag principal <code>&lt;html&gt;</code>, dividimos o código em duas grandes áreas: o <code>&lt;head&gt;</code> e o <code>&lt;body&gt;</code>. No cabeçalho (head) ficam as configurações invisíveis, como o título da aba e links CSS. No corpo (body) fica tudo o que o jogador realmente vê na tela.</p>
        <div class="code-block"><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Game Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- O jogo entra aqui --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div>`,

    "Tags de Texto": `
        <p>As tags de texto são usadas para exibir informações escritas, como diálogos de NPCs, pontuação ou descrições de itens. As tags mais comuns são os títulos (<code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code>) e os parágrafos (<code>&lt;p&gt;</code>).</p>
        <div class="code-block"><pre><code>&lt;h2&gt;Missão Principal&lt;/h2&gt;
&lt;p&gt;Encontre a &lt;strong&gt;Chave de Ouro&lt;/strong&gt; no calabouço.&lt;/p&gt;</code></pre></div>`,

    "Meta Tags Técnicas": `
        <p>As meta tags ficam localizadas dentro do cabeçalho do documento e fornecem instruções técnicas essenciais para o navegador. A tag <code>charset="UTF-8"</code>, por exemplo, é obrigatória para que caracteres especiais e acentos funcionem corretamente.</p>
        <div class="code-block"><pre><code>&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre></div>`,

    "Atributos e IDs": `
        <p>Atributos são propriedades que adicionamos às tags para modificar o seu comportamento ou identificá-las. O atributo <code>id</code> funciona como um nome exclusivo, permitindo que o JavaScript o encontre para alterar propriedades em tempo real.</p>
        <div class="code-block"><pre><code>&lt;div id="jogador-um" class="status-box"&gt;&lt;/div&gt;
&lt;div id="jogador-dois" class="status-box"&gt;&lt;/div&gt;</code></pre></div>`,

    "Links e Navegação": `
        <p>A tag <code>&lt;a&gt;</code> (âncora) é utilizada para criar links que conectam diferentes páginas ou recursos. Num portal de jogos, pode ser usada para levar o jogador do menu principal para a página de créditos.</p>
        <div class="code-block"><pre><code>&lt;a href="creditos.html"&gt;Ver Créditos&lt;/a&gt;</code></pre></div>`,

    "Listas de Inventário": `
        <p>As listas são a melhor forma de organizar conjuntos de informações relacionadas. Em jogos, estas tags são perfeitas para estruturar inventários ou listas de missões ativas.</p>
        <div class="code-block"><pre><code>&lt;ul&gt;
    &lt;li&gt;Poção de Cura&lt;/li&gt;
    &lt;li&gt;Espada de Ferro&lt;/li&gt;
&lt;/ul&gt;</code></pre></div>`,

    "Inserção de Mídia": `
        <p>As tags de média permitem inserir arquivos visuais e sonoros no projeto. A tag de imagem utiliza o atributo <code>src</code> para localizar o arquivo do sprite ou background.</p>
        <div class="code-block"><pre><code>&lt;img src="hero.png" alt="Herói do Jogo"&gt;
&lt;audio src="tema.mp3" controls&gt;&lt;/audio&gt;</code></pre></div>`,

    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> é um container genérico. Funciona como uma "caixa" invisível que ajuda a organizar o layout do jogo em blocos separados, facilitando o posicionamento com CSS.</p>
        <div class="code-block"><pre><code>&lt;div class="menu-pausa"&gt;
    &lt;button&gt;Continuar&lt;/button&gt;
&lt;/div&gt;</code></pre></div>`,

    "Comentários de Código": `
        <p>Comentários no HTML não aparecem no ecrã para o jogador. São feitos usando a sintaxe <code>&lt;!-- --&gt;</code> e servem para o desenvolvedor organizar as suas notas.</p>
        <div class="code-block"><pre><code>&lt;!-- Seção do Canvas --&gt;</code></pre></div>`,

    // === NÍVEL INTERMEDIÁRIO ===
    "Elementos Semânticos (Header, Nav, Footer)": `
        <p>Tags semânticas indicam claramente ao navegador qual é a função de cada parte da página, organizando melhor a estrutura do código do que o uso repetitivo de divs simples.</p>
        <div class="code-block"><pre><code>&lt;header&gt;
    &lt;h1&gt;Dragon Quest&lt;/h1&gt;
&lt;/header&gt;</code></pre></div>`,

    "Seções de Conteúdo (Section, Article, Aside)": `
        <p>Estas tags dividem o conteúdo de forma específica. Numa página de perfil do jogador, uma section poderia conter as conquistas, enquanto o aside conteria a lista de amigos online.</p>
        <div class="code-block"><pre><code>&lt;section id="conquistas"&gt;&lt;/section&gt;</code></pre></div>`,

    "Estrutura de Tabelas Simples (Table, Tr, Td)": `
        <p>Tabelas são usadas para organizar dados. Usamos <code>&lt;table&gt;</code> como container, <code>&lt;tr&gt;</code> para criar linhas e <code>&lt;td&gt;</code> para as células.</p>
        <div class="code-block"><pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Espada&lt;/td&gt;
        &lt;td&gt;Dano: 10&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre></div>`,

    "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": `
        <p>Para tabelas complexas, usamos tags de agrupamento. Ideal para painéis de liderança (Leaderboards).</p>
        <div class="code-block"><pre><code>&lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Player&lt;/th&gt;&lt;th&gt;Score&lt;/th&gt;&lt;/tr&gt;
&lt;/thead&gt;</code></pre></div>`,

    "Formulários Básicos (Form, Input, Label)": `
        <p>Formulários coletam informações. A tag <code>&lt;form&gt;</code> agrupa os campos, o <code>&lt;input&gt;</code> cria o campo de preenchimento e o <code>&lt;label&gt;</code> dá nome ao campo.</p>
        <div class="code-block"><pre><code>&lt;form&gt;
    &lt;label&gt;Nome:&lt;/label&gt;
    &lt;input type="text"&gt;
&lt;/form&gt;</code></pre></div>`,

    "Tipos de Input (Text, Password, Email, Button)": `
        <p>O atributo <code>type</code> da tag input muda completamente a sua função (texto, senha segura, botões, etc).</p>
        <div class="code-block"><pre><code>&lt;input type="password" placeholder="Senha"&gt;</code></pre></div>`,

    "Seleções em Formulários (Radio, Checkbox, Select)": `
        <p>Permitem opções pré-definidas para seleção de classes de personagens ou servidores.</p>
        <div class="code-block"><pre><code>&lt;select&gt;
    &lt;option&gt;Servidor BR&lt;/option&gt;
&lt;/select&gt;</code></pre></div>`,

    "Validação Nativa de Formulários": `
        <p>O HTML5 valida dados antes do envio usando atributos como <code>required</code> ou <code>minlength</code>.</p>
        <div class="code-block"><pre><code>&lt;input type="text" required minlength="3"&gt;</code></pre></div>`,

    "Introdução à Acessibilidade (Atributos ARIA)": `
        <p>Atributos ARIA fornecem informações extras para tecnologias assistivas sobre ícones do jogo.</p>
        <div class="code-block"><pre><code>&lt;div role="progressbar" aria-valuenow="70"&gt;&lt;/div&gt;</code></pre></div>`,

    "A tag <dialog> (Modais Nativos)": `
        <p>A tag <code>&lt;dialog&gt;</code> cria janelas modais nativas para menus de pausa.</p>
        <div class="code-block"><pre><code>&lt;dialog id="meuModal"&gt;
    &lt;p&gt;Jogo Pausado&lt;/p&gt;
    &lt;button onclick="this.parentNode.close()"&gt;Voltar&lt;/button&gt;
&lt;/dialog&gt;</code></pre></div>`,

    // === NÍVEL AVANÇADO ===
    "A tag <canvas> (O Palco dos Jogos)": `
        <p>A tag <code>&lt;canvas&gt;</code> funciona como uma área de desenho vazia onde o JavaScript pode renderizar gráficos e sprites. É o coração de qualquer jogo HTML5 moderno.</p>
        <div class="code-block"><pre><code>&lt;canvas id="tela" width="800" height="400"&gt;&lt;/canvas&gt;</code></pre></div>`,

    "SVG inline (<svg> e <path>)": `<p>O SVG permite desenhar formas vetoriais nítidas baseadas em matemática em vez de pixels, perfeito para interfaces futuristas.</p>`,
    "Imagens Responsivas (<picture> e srcset)": `<p>Permite alternar entre imagens HD ou comprimidas automaticamente dependendo da tela do jogador.</p>`,
    "Áudios Avançados (Atributos e Eventos de <audio>)": `<p>Manipulação avançada de som contínuo e loops lógicos pelo JS.</p>`,
    "Pré-carregamento de Assets (preload e prefetch)": `<p>Instrui a barra de Loading a baixar as texturas pesadas antes que o motor de física rode.</p>`,
    "Iframe Avançado (<iframe> e Sandbox)": `<p>Encapsula componentes externos com barreiras de segurança nativas.</p>`,
    "Manipulação de Templates (<template> e <slot>)": `<p>HTML fantasma que só aparece quando clonado para dentro de inventários ou tabelas pelo JS.</p>`,
    "Armazenamento no Navegador (O papel técnico do HTML5)": `<p>O suporte arquitetural que permite salvar jogos localmente (Saves) sem banco de dados na nuvem.</p>`,
    "Componentes Web Nativos (Custom Elements)": `<p>Criação de tags totalmente novas no ecossistema (como <barra-vida>).</p>`,
    "Acessibilidade de Teclado Avançada (tabindex e Foco)": `<p>Ordenação lógica de menus para jogadores usarem apenas botões direcionais e setas de tabulação.</p>`
};
