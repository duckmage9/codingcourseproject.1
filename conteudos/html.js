/**
 * BANCO DE DADOS DE TEXTOS - HTML COMPLETO
 */

window.conteudosHTML = {
    // ==========================================
    // === NÍVEL INICIANTE ===
    // ==========================================
    
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
        <p>Além das básicas, existem tags para destacar partes do texto, como <code>&lt;strong&gt;</code> para negrito ou <code>&lt;em&gt;</code> para itálico. Em interfaces de jogos, isto é útil para destacar nomes de itens lendários ou valores críticos de dano.</p>
        <div class="code-block"><pre><code>&lt;h2&gt;Missão Principal&lt;/h2&gt;
&lt;p&gt;Encontre a &lt;strong&gt;Chave de Ouro&lt;/strong&gt; no calabouço.&lt;/p&gt;</code></pre></div>`,

    "Meta Tags Técnicas": `
        <p>As meta tags ficam localizadas dentro do cabeçalho do documento e fornecem instruções técnicas essenciais para o navegador. A tag <code>charset="UTF-8"</code>, por exemplo, é obrigatória para que caracteres especiais e acentos funcionem corretamente.</p>
        <p>Outra meta tag crucial para jogos web é a <code>viewport</code>. Ela configura como a página se deve comportar em ecrãs de telemóveis e tablets, garantindo que o jogo não fique com zoom exagerado ou minúsculo.</p>
        <div class="code-block"><pre><code>&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre></div>`,

    "Atributos e IDs": `
        <p>Atributos são propriedades que adicionamos às tags para modificar o seu comportamento ou identificá-las. O atributo <code>id</code> é um dos mais importantes: funciona como um nome exclusivo para um elemento, permitindo que o JavaScript o encontre para alterar propriedades em tempo real.</p>
        <p>Enquanto o <code>id</code> deve ser único na página, o atributo <code>class</code> pode ser usado em vários elementos ao mesmo tempo, permitindo aplicar o mesmo estilo visual de "botão de menu" a vários componentes.</p>
        <div class="code-block"><pre><code>&lt;div id="jogador-um" class="status-box"&gt;&lt;/div&gt;
&lt;div id="jogador-dois" class="status-box"&gt;&lt;/div&gt;</code></pre></div>`,

    "Links e Navegação": `
        <p>A tag <code>&lt;a&gt;</code> (âncora) é utilizada para criar links que conectam diferentes páginas ou recursos. Num portal de jogos, pode ser usada para levar o jogador do menu principal para a página de créditos ou para o manual de instruções externo.</p>
        <p>O atributo principal desta tag é o <code>href</code>, que indica o destino do link. Também é comum usar o atributo <code>target="_blank"</code> quando queremos que o link abra numa nova aba.</p>
        <div class="code-block"><pre><code>&lt;a href="creditos.html"&gt;Ver Créditos&lt;/a&gt;
&lt;a href="https://wiki.com" target="_blank"&gt;Wiki do Jogo&lt;/a&gt;</code></pre></div>`,

    "Listas de Inventário": `
        <p>As listas são a melhor forma de organizar conjuntos de informações relacionadas no HTML. Existem dois tipos principais: as listas não ordenadas (<code>&lt;ul&gt;</code>), que usam marcadores como pontos, e as listas ordenadas (<code>&lt;ol&gt;</code>), que utilizam números.</p>
        <p>Dentro de cada lista, usamos a tag <code>&lt;li&gt;</code> (list item) para cada item individual. Em jogos, estas tags são perfeitas para estruturar inventários, listas de missões ativas ou logs de combate.</p>
        <div class="code-block"><pre><code>&lt;ul&gt;
    &lt;li&gt;Poção de Cura&lt;/li&gt;
    &lt;li&gt;Espada de Ferro&lt;/li&gt;
&lt;/ul&gt;</code></pre></div>`,

    "Inserção de Mídia": `
        <p>As tags de média, como <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code> e <code>&lt;video&gt;</code>, permitem inserir arquivos visuais e sonoros no projeto. A tag de imagem utiliza o atributo <code>src</code> para localizar o arquivo do sprite ou background.</p>
        <p>Sempre que possível, deve utilizar-se o atributo <code>alt</code> em imagens para fornecer uma descrição textual caso o arquivo falhe em carregar, o que também ajuda na acessibilidade de leitores de ecrã.</p>
        <div class="code-block"><pre><code>&lt;img src="hero.png" alt="Herói do Jogo"&gt;
&lt;audio src="tema.mp3" controls&gt;&lt;/audio&gt;</code></pre></div>`,

    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> é um container genérico sem significado semântico, mas que serve para agrupar outros elementos. Funciona como uma "caixa" invisível que ajuda a organizar o layout do jogo em blocos separados, facilitando o posicionamento com CSS.</p>
        <p>Por exemplo, podes colocar toda a interface do utilizador (HUD) dentro de uma div com a classe "hud-container" para ocultar ou mover todos os elementos em simultâneo via código.</p>
        <div class="code-block"><pre><code>&lt;div class="menu-pausa"&gt;
    &lt;button&gt;Continuar&lt;/button&gt;
    &lt;button&gt;Sair&lt;/button&gt;
&lt;/div&gt;</code></pre></div>`,

    "Comentários de Código": `
        <p>Comentários no HTML são trechos de texto que não são processados pelo navegador e não aparecem no ecrã para o jogador. São feitos usando a sintaxe <code>&lt;!-- comentário --&gt;</code> e servem para o desenvolvedor organizar as suas notas.</p>
        <div class="code-block"><pre><code>&lt;!-- Início da Seção de Inventário --&gt;
&lt;div id="inv"&gt;&lt;/div&gt;
&lt;!-- Fim da Seção de Inventário --&gt;</code></pre></div>`,

    // ==========================================
    // === NÍVEL INTERMEDIÁRIO ===
    // ==========================================

    "Elementos Semânticos (Header, Nav, Footer)": `
        <p>Tags semânticas como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> e <code>&lt;footer&gt;</code> indicam claramente ao navegador qual é a função de cada parte da página, organizando melhor a estrutura do código do que o uso repetitivo de divs simples.</p>
        <div class="code-block"><pre><code>&lt;header&gt;
    &lt;h1&gt;Dragon Quest&lt;/h1&gt;
&lt;/header&gt;</code></pre></div>`,

    "Seções de Conteúdo (Section, Article, Aside)": `
        <p>As tags <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> e <code>&lt;aside&gt;</code> dividem o conteúdo de forma específica. Numa página de perfil do jogador, uma section poderia conter as conquistas, enquanto o aside conteria a lista de amigos online.</p>
        <div class="code-block"><pre><code>&lt;section id="conquistas"&gt;
    &lt;article&gt;Mestre das Sombras&lt;/article&gt;
&lt;/section&gt;</code></pre></div>`,

    "Estrutura de Tabelas Simples (Table, Tr, Td)": `
        <p>Tabelas são usadas para organizar dados em linhas e colunas. No HTML, usamos <code>&lt;table&gt;</code> como container principal, <code>&lt;tr&gt;</code> para criar linhas e <code>&lt;td&gt;</code> para as células de dados.</p>
        <div class="code-block"><pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Espada&lt;/td&gt;
        &lt;td&gt;Dano: 10&lt;/td>
    &lt;/tr&gt;
&lt;/table&gt;</code></pre></div>`,

    "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": `
        <p>Para tabelas complexas, usamos tags de agrupamento: <code>&lt;thead&gt;</code> para o cabeçalho (nomes das colunas), <code>&lt;tbody&gt;</code> para o corpo dos dados e <code>&lt;tfoot&gt;</code> para o rodapé ou totais. Ideal para painéis de liderança (Leaderboards).</p>
        <div class="code-block"><pre><code>&lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Player&lt;/th&gt;&lt;th&gt;Score&lt;/th&gt;&lt;/tr&gt;
&lt;/thead&gt;</code></pre></div>`,

    "Formulários Básicos (Form, Input, Label)": `
        <p>Formulários coletam informações do utilizador. A tag <code>&lt;form&gt;</code> agrupa os campos, o <code>&lt;input&gt;</code> cria o campo de preenchimento e o <code>&lt;label&gt;</code> dá nome ao campo, garantindo acessibilidade ao clique.</p>
        <div class="code-block"><pre><code>&lt;form&gt;
    &lt;label&gt;Nome do Herói:&lt;/label&gt;
    &lt;input type="text"&gt;
&lt;/form&gt;</code></pre></div>`,

    "Tipos de Input (Text, Password, Email, Button)": `
        <p>O atributo <code>type</code> da tag input muda completamente a sua função. O tipo <code>text</code> aceita caracteres gerais, <code>password</code> oculta o texto digitado por segurança, e <code>email</code> valida o formato básico do endereço.</p>
        <div class="code-block"><pre><code>&lt;input type="password" placeholder="Senha"&gt;
&lt;input type="submit" value="Entrar"&gt;</code></pre></div>`,

    "Seleções em Formulários (Radio, Checkbox, Select)": `
        <p>Permitem opções pré-definidas: <code>radio</code> (apenas uma escolha permitida), <code>checkbox</code> (múltiplas escolhas) e <code>&lt;select&gt;</code> para listas suspensas (dropdowns), ótimas para a seleção de idiomas ou servidores.</p>
        <div class="code-block"><pre><code>&lt;select&gt;
    &lt;option&gt;Servidor BR&lt;/option&gt;
    &lt;option&gt;Servidor EU&lt;/option&gt;
&lt;/select&gt;</code></pre></div>`,

    "Validação Nativa de Formulários": `
        <p>O HTML5 valida dados antes do envio para o JavaScript usando atributos como <code>required</code> (obrigatório), <code>minlength</code> (mínimo de caracteres) e parâmetros numéricos de limite.</p>
        <div class="code-block"><pre><code>&lt;input type="text" required minlength="3"&gt;</code></pre></div>`,

    "Introdução à Acessibilidade (Atributos ARIA)": `
        <p>Atributos ARIA fornecem informações extras para tecnologias assistivas. O atributo <code>aria-label</code> descreve o que um elemento faz quando este contém apenas ícones visuais na interface do jogo.</p>
        <div class="code-block"><pre><code>&lt;div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;</code></pre></div>`,

    "A tag <dialog> (Modais Nativos)": `
        <p>A tag <code>&lt;dialog&gt;</code> cria janelas modais nativas (pop-ups) com funções próprias de abertura/fecho. Excelente para menus de pausa ou caixas de diálogo de NPCs sem depender de grandes estruturas artificiais no CSS.</p>
        <div class="code-block"><pre><code>&lt;dialog id="meuModal"&gt;
    &lt;p&gt;Jogo Pausado&lt;/p>
    &lt;button onclick="this.parentNode.close()"&gt;Voltar&lt;/button>
&lt;/dialog&gt;</code></pre></div>`,

    // ==========================================
    // === NÍVEL AVANÇADO ===
    // ==========================================

    "A tag <canvas> (O Palco dos Jogos)": `
        <p>A tag <code>&lt;canvas&gt;</code> funciona como uma área de desenho vazia onde o JavaScript pode renderizar gráficos, sprites e animações frame por frame em tempo real. É literalmente o palco de renderização física da maioria dos jogos web 2D modernos.</p>
        <div class="code-block"><pre><code>&lt;canvas id="telaJogo" width="800" height="400"&gt;&lt;/canvas&gt;
&lt;script&gt;
  const canvas = document.getElementById("telaJogo");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 50, 50);
&lt;/script&gt;</code></pre></div>`,

    "SVG inline (<svg> e <path>)": `
        <p>O SVG permite desenhar formas vetoriais diretamente no documento HTML. Como são baseados em fórmulas matemáticas em vez de matrizes de pixels固定, os elementos gráficos criados com <code>&lt;path&gt;</code> não perdem nitidez quando escalados para ecrãs de alta resolução.</p>`,

    "Imagens Responsivas (<picture> e srcset)": `
        <p>A tag <code>&lt;picture&gt;</code> permite alternar entre arquivos gráficos totalmente diferentes com base no tamanho do monitor ou telemóvel do jogador, poupando largura de banda e memória em dispositivos móveis.</p>
        <div class="code-block"><pre><code>&lt;picture&gt;
  &lt;source media="(max-width: 600px)" srcset="sprite-pequeno.png"&gt;
  &lt;img src="sprite-alta-res.png" alt="Assets"&gt;
&lt;/picture&gt;</code></pre></div>`,

    "Áudios Avançados (Atributos e Eventos de <audio>)": `
        <p>Controlar áudio nativo em jogos exige o uso avançado de propriedades como <code>loop</code> e manipulação de eventos para detetar o fim de um efeito sonoro antes de descarregar o arquivo da memória.</p>`,

    "Pré-carregamento de Assets (preload e prefetch)": `
        <p>Otimizar telas de carregamento (*Loading Screens*) envolve instruir o navegador a baixar imagens pesadas e trilhas sonoras antes que o loop do jogo comece, utilizando as configurações de meta-relacionamento no cabeçalho.</p>
        <div class="code-block"><pre><code>&lt;link rel="preload" href="spritesheet.png" as="image"&gt;</code></pre></div>`,

    "Iframe Avançado (<iframe> e Sandbox)": `
        <p>O uso de <code>&lt;iframe&gt;</code> com o atributo restritivo <code>sandbox</code> permite encapsular jogos ou tabelas de pontuação externas dentro do teu domínio principal com total segurança contra injeções de scripts maliciosos.</p>`,

    "Manipulação de Templates (<template> e <slot>)": `
        <p>A tag <code>&lt;template&gt;</code> armazena blocos de HTML que permanecem inertes (não renderizados) até serem clonados programaticamente pelo JavaScript. Perfeito para gerar dinamicamente slots preenchidos do inventário.</p>
        <div class="code-block"><pre><code>&lt;template id="slot-item"&gt;
  &lt;div class="grid-slot"&gt;&lt;span class="item-name"&gt;&lt;/span&gt;&lt;/div&gt;
&lt;/template&gt;</code></pre></div>`,

    "Armazenamento no Navegador (O papel técnico do HTML5)": `
        <p>O HTML5 padronizou o ecossistema que permite ao JavaScript aceder a APIs como o <code>LocalStorage</code> para gravar dados persistentes do jogador (como saves, configurações e recordes) diretamente no navegador do cliente.</p>`,

    "Componentes Web Nativos (Custom Elements)": `
        <p>Esta tecnologia permite criar as tuas próprias tags HTML, como por exemplo, declarar um componente funcional <code>&lt;barra-vida&gt;&lt;/barra-vida&gt;</code> que possui isolamento e lógica interna encapsulada.</p>`,

    "Acessibilidade de Teclado Avançada (tabindex e Foco)": `
        <p>A ordenação lógica através do atributo <code>tabindex</code> garante que interfaces complexas de inventários, menus e opções possam ser navegadas inteiramente utilizando apenas teclados ou comandos adaptados.</p>`
};
