window.conteudosHTML = {
    // ==========================================
    // === NÍVEL INICIANTE ===
    // ==========================================
    
    "Conceito de Tags": `
        <p>As tags são a base da linguagem HTML e funcionam como comandos que informam ao navegador como o conteúdo deve ser estruturado. No desenvolvimento de jogos, elas são usadas para definir desde a área onde o jogo será exibido até os botões de menu e textos de interface. Cada tag é envolvida por colchetes angulares.</p>
        <p>A maioria das tags trabalha em pares: uma de abertura e uma de fechamento (que possui uma barra), como em <code>&lt;p&gt;Texto&lt;/p&gt;</code>. Essa estrutura em "cascata" permite que o desenvolvedor organize a hierarquia visual da página de forma lógica. Tags bem utilizadas garantem que o navegador interprete o código sem erros.</p>
        <p>Entender o conceito de tags é o primeiro passo para criar qualquer projeto web. Elas permitem separar o que é um título, o que é um parágrafo e o que é um script de lógica do jogo. Sem as tags, o navegador veria apenas um bloco de texto sem formatação ou funcionalidade.</p>
        <div class="code-block"><pre><code>&lt;h1&gt;Meu Primeiro Jogo&lt;/h1&gt;\n&lt;p&gt;Pressione Start para começar.&lt;/p&gt;</code></pre></div>`,

    "Estrutura Global": `
        <p>Todo documento HTML5 profissional precisa seguir uma estrutura global obrigatória. Isso garante que o navegador identifique o arquivo como um site moderno e aplique as regras de renderização corretamente. Essa estrutura começa sempre com a declaração <code>&lt;!DOCTYPE html&gt;</code>.</p>
        <p>Dentro da tag principal <code>&lt;html&gt;</code>, dividimos o código em duas grandes áreas: o <code>&lt;head&gt;</code> e o <code>&lt;body&gt;</code>. No cabeçalho (head) ficam as configurações invisíveis ao usuário, como o título da aba e links para arquivos CSS. No corpo (body) fica tudo o que o jogador realmente vê na tela.</p>
        <p>Manter essa organização é fundamental para evitar conflitos de carregamento de scripts. Em jogos web, geralmente chamamos o motor do jogo no final do body para garantir que todos os elementos visuais já tenham sido carregados pelo navegador antes do código começar a rodar.</p>
        <div class="code-block"><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Game Page&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;!-- O jogo entra aqui --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre></div>`,

    "Tags de Texto": `
        <p>As tags de texto são usadas para exibir informações escritas, como diálogos de NPCs, pontuação ou descrições de itens. As tags mais comuns são os títulos (<code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code>) e os parágrafos (<code>&lt;p&gt;</code>). Elas ajudam a definir a importância visual de cada informação.</p>
        <p>Além das básicas, existem tags para destacar partes do texto, como <code>&lt;strong&gt;</code> para negrito ou <code>&lt;em&gt;</code> para itálico. Em interfaces de jogos, isso é útil para destacar nomes de itens lendários ou valores críticos de dano dentro de uma frase.</p>
        <p>Usar as tags corretas de texto não apenas melhora o visual, mas também ajuda na acessibilidade e no SEO do projeto. O navegador entende automaticamente a hierarquia e o espaçamento padrão entre esses elementos, facilitando o design inicial.</p>
        <div class="code-block"><pre><code>&lt;h2&gt;Missão Principal&lt;/h2&gt;\n&lt;p&gt;Encontre a &lt;strong&gt;Chave de Ouro&lt;/strong&gt; no calabouço.&lt;/p&gt;</code></pre></div>`,

    "Meta Tags Técnicas": `
        <p>As meta tags ficam localizadas dentro do cabeçalho do documento e fornecem instruções técnicas essenciais para o navegador. A tag <code>charset="UTF-8"</code>, por exemplo, é obrigatória para que caracteres especiais e acentos do português funcionem corretamente sem erros de exibição.</p>
        <p>Outra meta tag crucial para jogos web é a <code>viewport</code>. Ela configura como a página deve se comportar em telas de celulares e tablets, garantindo que o jogo não fique com zoom exagerado ou minúsculo ao ser aberto em dispositivos diferentes.</p>
        <p>Embora sejam invisíveis para o jogador, essas tags ditam a compatibilidade do projeto. Elas também são usadas para definir a descrição do site que aparece em buscas do Google, ajudando na divulgação do jogo para novos usuários.</p>
        <div class="code-block"><pre><code>&lt;meta charset="UTF-8"&gt;\n&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre></div>`,

    "Atributos e IDs": `
        <p>Atributos são propriedades que adicionamos às tags para modificar seu comportamento ou identificá-las. O atributo <code>id</code> é um dos mais importantes: ele funciona como um nome exclusivo para um elemento, permitindo que o JavaScript o encontre para alterar a vida ou a posição de um objeto.</p>
        <p>Enquanto o <code>id</code> deve ser único, o atributo <code>class</code> pode ser usado em vários elementos ao mesmo tempo. Isso permite que você aplique o mesmo estilo visual de "botão de menu" ou "card de item" para diversos componentes simultaneamente usando CSS.</p>
        <p>Entender a diferença entre IDs e classes é vital para a organização do código. IDs são usados para elementos de controle (como a tela do jogo), enquanto classes são usadas para elementos de design que se repetem na interface.</p>
        <div class="code-block"><pre><code>&lt;div id="jogador-um" class="status-box"&gt;&lt;/div&gt;\n&lt;div id="jogador-dois" class="status-box"&gt;&lt;/div&gt;</code></pre></div>`,

    "Links e Navegação": `
        <p>A tag <code>&lt;a&gt;</code> (âncora) é utilizada para criar links que conectam diferentes páginas ou recursos. Em um portal de jogos, ela pode ser usada para levar o jogador do menu principal para a página de créditos ou para o manual de instruções externo.</p>
        <p>O atributo principal dessa tag é o <code>href</code>, que indica o destino do link. Também é comum usar o atributo <code>target="_blank"</code> quando queremos que o link abra em uma nova aba, mantendo o jogador com a aba do jogo aberta simultaneamente.</p>
        <p>Links também podem ser usados para navegar dentro da mesma página (âncoras internas). Isso é útil em documentos longos de termos de uso ou em wikis de jogos, onde o jogador clica em um tema e a página desliza automaticamente para aquela seção.</p>
        <div class="code-block"><pre><code>&lt;a href="creditos.html"&gt;Ver Créditos&lt;/a&gt;\n&lt;a href="https://wiki.com" target="_blank"&gt;Wiki do Jogo&lt;/a&gt;</code></pre></div>`,

    "Listas de Inventário": `
        <p>As listas são a melhor forma de organizar conjuntos de informações relacionadas no HTML. Existem dois tipos principais: as listas não ordenadas (<code>&lt;ul&gt;</code>), que usam marcadores como pontos, e as listas ordenadas (<code>&lt;ol&gt;</code>), que utilizam números automáticos.</p>
        <p>Dentro de cada lista, usamos a tag <code>&lt;li&gt;</code> (list item) para cada item individual. Em jogos, essas tags são perfeitas para estruturar inventários, listas de missões ativas, logs de combate ou tabelas de classificação simples.</p>
        <p>O uso de listas facilita muito a estilização com CSS, permitindo criar menus horizontais ou verticais de forma limpa. Elas também são semanticamente corretas, o que significa que tecnologias assistivas conseguem ler os itens de forma organizada.</p>
        <div class="code-block"><pre><code>&lt;ul&gt;\n    &lt;li&gt;Poção de Cura&lt;/li&gt;\n    &lt;li&gt;Espada de Ferro&lt;/li&gt;\n&lt;/ul&gt;</code></pre></div>`,

    "Inserção de Mídia": `
        <p>As tags de mídia, como <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code> e <code>&lt;video&gt;</code>, permitem inserir arquivos visuais e sonoros no projeto. A tag de imagem é especial pois não precisa de fechamento e utiliza o atributo <code>src</code> para localizar o arquivo do sprite ou background.</p>
        <p>Sempre devemos utilizar o atributo <code>alt</code> em imagens. Ele fornece uma descrição textual que aparece caso a imagem falhe ao carregar e é lida por leitores de tela, garantindo que saibam o que aquele gráfico representa.</p>
        <p>Para áudio e vídeo, o HTML5 oferece controles nativos (play, pause, volume) através do atributo <code>controls</code>. No entanto, em jogos, geralmente ocultamos esses controles e comandamos o som via JavaScript para disparar efeitos no momento exato.</p>
        <div class="code-block"><pre><code>&lt;img src="hero.png" alt="Herói do Jogo"&gt;\n&lt;audio src="tema.mp3" controls&gt;&lt;/audio&gt;</code></pre></div>`,

    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> é um container genérico sem significado semântico, mas que serve para agrupar outros elementos. Ela funciona como uma "caixa" invisível que ajuda a organizar o layout do jogo em blocos separados, facilitando o posicionamento com CSS.</p>
        <p>Por exemplo, você pode colocar toda a interface do usuário (HUD) dentro de uma div chamada "hud-container". Isso permite que você mova, oculte ou altere todos os elementos da interface de uma só vez apenas manipulando a caixa principal.</p>
        <p>Embora existam tags mais específicas hoje em dia, a div continua sendo a ferramenta mais versátil para estruturar layouts complexos e criar camadas sobrepostas, como menus que aparecem sobre a tela do jogo durante uma pausa.</p>
        <div class="code-block"><pre><code>&lt;div class="menu-pausa"&gt;\n    &lt;button&gt;Continuar&lt;/button&gt;\n    &lt;button&gt;Sair&lt;/button&gt;\n&lt;/div&gt;</code></pre></div>`,

    "Comentários de Código": `
        <p>Comentários no HTML são trechos de texto que não são processados pelo navegador e não aparecem na tela para o jogador. Eles são feitos usando a sintaxe <code>&lt;!-- comentário --&gt;</code> e servem exclusivamente para o desenvolvedor organizar suas notas.</p>
        <p>Em projetos de jogos, os comentários são fundamentais para marcar onde começa e termina cada seção, como o cabeçalho, a área do canvas ou o footer. Isso ajuda muito quando você precisa voltar ao código meses depois para fazer uma manutenção.</p>
        <p>Também usamos comentários para desativar temporariamente uma parte do código sem precisar apagá-lo. Se você estiver testando uma nova interface mas não quer excluir a antiga, basta comentar o bloco antigo até decidir qual versão usar.</p>
        <div class="code-block"><pre><code>&lt;!-- Início da Seção de Inventário --&gt;\n&lt;div id="inv"&gt;&lt;/div&gt;\n&lt;!-- Fim da Seção de Inventário --&gt;</code></pre></div>`,

    // ==========================================
    // === NÍVEL INTERMEDIÁRIO ===
    // ==========================================

    "Elementos Semânticos (Header, Nav, Footer)": `
        <p>Tags semânticas como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> e <code>&lt;footer&gt;</code> indicam claramente ao navegador qual é a função de cada parte da página. O header costuma conter o título e logo do jogo, o nav os links de navegação e o footer as informações de copyright.</p>
        <p>Diferente de usar apenas div, essas tags ajudam motores de busca e ferramentas de acessibilidade a entenderem a estrutura do site. Em um site de games, isso melhora o ranqueamento no Google, facilitando que novos jogadores encontrem seu projeto.</p>
        <p>Usar semântica é uma prática de desenvolvimento profissional que torna o código mais legível para outros programadores. Elas funcionam visualmente como divs, mas carregam um significado lógico importante para a arquitetura da web.</p>
        <div class="code-block"><pre><code>&lt;header&gt;\n    &lt;h1&gt;Dragon Quest&lt;/h1&gt;\n&lt;/header&gt;</code></pre></div>`,

    "Seções de Conteúdo (Section, Article, Aside)": `
        <p>As tags <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> e <code>&lt;aside&gt;</code> servem para dividir o conteúdo principal de forma mais específica. A section agrupa temas relacionados, o article define um conteúdo independente e o aside é usado para barras laterais.</p>
        <p>Em uma página de perfil de jogador, por exemplo, a section poderia conter as conquistas, enquanto o aside conteria a lista de amigos online. Essa divisão ajuda a organizar o layout de forma que o conteúdo faça sentido hierarquicamente.</p>
        <p>Essas tags são fundamentais para layouts modernos. Elas permitem que o CSS e o JavaScript interajam com grandes blocos de informação de maneira mais precisa, garantindo que o design se mantenha estruturado em diferentes tamanhos de tela.</p>
        <div class="code-block"><pre><code>&lt;section id="conquistas"&gt;\n    &lt;article&gt;Mestre das Sombras&lt;/article&gt;\n&lt;/section&gt;</code></pre></div>`,

    "Estrutura de Tabelas Simples (Table, Tr, Td)": `
        <p>Tabelas são usadas para organizar dados em linhas e colunas. No HTML, usamos <code>&lt;table&gt;</code> como container principal, <code>&lt;tr&gt;</code> para criar linhas (table rows) e <code>&lt;td&gt;</code> para as células de dados (table data).</p>
        <p>Em jogos, as tabelas são ideais para exibir estatísticas detalhadas de personagens, listas de preços em lojas de NPCs ou comparativos de atributos entre diferentes armas e equipamentos.</p>
        <p>Embora não sejam recomendadas para criar layouts inteiros de sites, as tabelas continuam sendo a melhor escolha para exibir dados tabulares de forma clara e organizada para o jogador.</p>
        <div class="code-block"><pre><code>&lt;table&gt;\n    &lt;tr&gt;\n        &lt;td&gt;Espada&lt;/td&gt;\n        &lt;td&gt;Dano: 10&lt;/td&gt;\n    &lt;/tr&gt;\n&lt;/table&gt;</code></pre></div>`,

    "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": `
        <p>Para tabelas mais profissionais e complexas, usamos tags de agrupamento: <code>&lt;thead&gt;</code> para o cabeçalho (nomes das colunas), <code>&lt;tbody&gt;</code> para o corpo dos dados e <code>&lt;tfoot&gt;</code> para o rodapé ou totais.</p>
        <p>Essa estrutura é muito comum em sistemas de Ranking (Leaderboards). O head mostra "Posição", "Nome" e "Pontos", o body lista os jogadores e o foot pode mostrar a posição atual do usuário logado.</p>
        <p>Além de organizar o código, o uso de thead e tbody permite que o navegador aplique comportamentos específicos, como manter o cabeçalho visível enquanto o usuário rola uma lista muito longa de dados.</p>
        <div class="code-block"><pre><code>&lt;thead&gt;\n    &lt;tr&gt;&lt;th&gt;Player&lt;/th&gt;&lt;th&gt;Score&lt;/th&gt;&lt;/tr&gt;\n&lt;/thead&gt;</code></pre></div>`,

    "Formulários Básicos (Form, Input, Label)": `
        <p>Formulários são essenciais para coletar informações dos jogadores. A tag <code>&lt;form&gt;</code> agrupa os campos, o <code>&lt;input&gt;</code> cria o campo de preenchimento e o <code>&lt;label&gt;</code> serve para dar nome ao que deve ser digitado.</p>
        <p>O uso de labels é obrigatório para uma boa acessibilidade. Quando um jogador clica no texto de um label, o navegador foca automaticamente no campo de entrada correspondente, facilitando a interação.</p>
        <p>Em jogos, usamos formulários principalmente em telas de Login, Cadastro de novos jogadores ou no campo de chat, onde o texto digitado é enviado para o servidor ou para outros participantes da partida.</p>
        <div class="code-block"><pre><code>&lt;form&gt;\n    &lt;label&gt;Nome do Herói:&lt;/label&gt;\n    &lt;input type="text"&gt;\n&lt;/form&gt;</code></pre></div>`,

    "Tipos de Input (Text, Password, Email, Button)": `
        <p>O atributo <code>type</code> da tag input muda completamente sua função. <code>text</code> é para nomes comuns, <code>password</code> oculta os caracteres digitados por segurança e <code>email</code> valida se o formato do endereço está correto.</p>
        <p>Também existe o tipo <code>button</code> e <code>submit</code>. Em jogos, usamos muitos botões para ações rápidas, como "Equipar", "Vender" ou "Iniciar Partida". O tipo correto ajuda o navegador a entender o propósito do elemento.</p>
        <p>Escolher o tipo de input adequado melhora a experiência em dispositivos móveis, pois o teclado do celular muda automaticamente (mostrando a tecla @ para e-mails ou teclado numérico), facilitando a vida do jogador.</p>
        <div class="code-block"><pre><code>&lt;input type="password" placeholder="Senha"&gt;\n&lt;input type="submit" value="Entrar"&gt;</code></pre></div>`,

    "Seleções em Formulários (Radio, Checkbox, Select)": `
        <p>Para permitir que o jogador escolha entre opções pré-definidas, usamos <code>radio</code> (apenas uma escolha entre várias), <code>checkbox</code> (várias escolhas permitidas) e <code>&lt;select&gt;</code> para listas suspensas (dropdowns).</p>
        <p>Inputs do tipo radio são perfeitos para escolha de classe de personagem (Guerreiro OU Mago). Checkboxes funcionam bem para configurações gráficas, como "Ativar Som" e "Modo Tela Cheia" simultaneamente.</p>
        <p>A tag select é ideal para economizar espaço na tela, permitindo que o jogador escolha o idioma do jogo ou o servidor de uma lista longa sem poluir o visual da interface.</p>
        <div class="code-block"><pre><code>&lt;select&gt;\n    &lt;option&gt;Servidor BR&lt;/option&gt;\n    &lt;option&gt;Servidor US&lt;/option&gt;\n&lt;/select&gt;</code></pre></div>`,

    "Validação Nativa de Formulários": `
        <p>O HTML5 permite validar se os dados digitados estão corretos antes mesmo de enviá-los para o JavaScript. Atributos como <code>required</code> (obrigatório), <code>minlength</code> (mínimo de caracteres) e <code>max</code> facilitam esse controle.</p>
        <p>Em um sistema de criação de personagem, você pode usar <code>required</code> no nome para evitar que o jogador comece sem identidade, ou atributos em um campo de distribuição de pontos de força.</p>
        <p>Essa validação nativa é rápida e já vem com mensagens de erro padrão do navegador, o que economiza tempo de desenvolvimento e garante que o banco de dados receba apenas informações válidas.</p>
        <div class="code-block"><pre><code>&lt;input type="text" required minlength="3"&gt;</code></pre></div>`,

    "Introdução à Acessibilidade (Atributos ARIA)": `
        <p>Atributos ARIA (Accessible Rich Internet Applications) fornecem informações extras para tecnologias assistivas. O atributo <code>aria-label</code>, por exemplo, descreve o que um botão faz mesmo que ele contenha apenas um ícone visual.</p>
        <p>Em jogos, a acessibilidade é fundamental para incluir jogadores com diferentes necessidades. Usar <code>role="button"</code> em elementos que não são botões nativos ajuda leitores de tela a entenderem a interatividade.</p>
        <p>Práticas de acessibilidade garantem que seu jogo possa ser jogado por um público muito maior. Pequenos ajustes no código HTML tornam a experiência mais democrática e profissional.</p>
        <div class="code-block"><pre><code>&lt;div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;</code></pre></div>`,

    "A tag <dialog> (Modais Nativos)": `
        <p>A tag <code>&lt;dialog&gt;</code> é uma adição moderna ao HTML que facilita a criação de janelas modais (pop-ups). Ela possui comportamentos nativos para abrir e fechar, além de bloquear a interação com o resto da página.</p>
        <p>No desenvolvimento de jogos, ela é perfeita para criar telas de Pause, Inventários rápidos ou caixas de diálogo de NPCs. Por ser nativa, ela lida muito bem com o foco do teclado e acessibilidade automaticamente.</p>
        <p>Usar o método via JavaScript faz com que o dialog apareça no centro da tela com um fundo escurecido (backdrop), criando um visual profissional de interface sem bibliotecas externas complexas.</p>
        <div class="code-block"><pre><code>&lt;dialog id="meuModal"&gt;\n    &lt;p&gt;Jogo Pausado&lt;/p&gt;\n    &lt;button onclick="this.parentNode.close()"&gt;Voltar&lt;/button&gt;\n&lt;/dialog&gt;</code></pre></div>`,

    // ==========================================
    // === NÍVEL AVANÇADO ===
    // ==========================================

    "A tag <canvas> (O Palco dos Jogos)": `
        <p>A tag <code>&lt;canvas&gt;</code> é um dos elementos mais importantes do desenvolvimento de jogos web modernos. Ela funciona como uma área de desenho dentro da página HTML onde o JavaScript renderiza gráficos, animações e cenários em tempo real. Diferente de elementos HTML tradicionais, o canvas não possui conteúdo visual próprio; tudo é desenhado dinamicamente.</p>
        <p>Na prática, é usado junto da API Canvas do JavaScript para acessar seu contexto gráfico usando <code>getContext("2d")</code>. Esse contexto permite desenhar sprites, HUDs, barras de vida e mapas inteiros. Em engines próprias, o canvas também é responsável pelo sistema de atualização de frames. Jogos em estilo arcade frequentemente utilizam essa técnica.</p>
        <p>A importância do canvas nos jogos é enorme porque oferece controle total sobre os gráficos. Enquanto elementos comuns são mais indicados para menus, o canvas permite desenhar centenas de objetos rapidamente em uma única área da tela, melhorando a organização e performance.</p>
        <div class="code-block"><pre><code>&lt;canvas id="telaJogo" width="800" height="400"&gt;&lt;/canvas&gt;\n\n&lt;script&gt;\nconst canvas = document.getElementById("telaJogo");\nconst ctx = canvas.getContext("2d");\n\nctx.fillStyle = "green";\nctx.fillRect(50, 50, 100, 100);\n&lt;/script&gt;</code></pre></div>`,

    "SVG inline (<svg> e <path>)": `
        <p>O SVG (Scalable Vector Graphics) é uma tecnologia que permite criar gráficos vetoriais diretamente dentro do HTML. Diferente de imagens comuns, os gráficos SVG não perdem qualidade ao serem ampliados, pois são desenhados matematicamente. Em jogos web, SVGs são muito úteis para criar interfaces modernas e elementos gráficos leves.</p>
        <p>Na prática, SVG inline é usado diretamente no HTML sem precisar carregar arquivos externos. O desenvolvedor pode criar ícones de inventário, minimapas e barras de energia. A tag <code>&lt;path&gt;</code> define formatos personalizados usando coordenadas matemáticas, podendo ser animados com CSS.</p>
        <p>O uso de SVG é importante para interfaces responsivas. Em resoluções diferentes, os gráficos continuam nítidos sem carregar múltiplas versões da mesma imagem. Isso reduz o peso do projeto e melhora a performance em celulares.</p>
        <div class="code-block"><pre><code>&lt;svg width="100" height="100"&gt;\n    &lt;circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /&gt;\n&lt;/svg&gt;</code></pre></div>`,

    "Imagens Responsivas (<picture> e srcset)": `
        <p>As imagens responsivas permitem carregar arquivos diferentes dependendo do tamanho da tela ou da capacidade do dispositivo do jogador. A tag <code>&lt;picture&gt;</code> e o atributo <code>srcset</code> ajudam o navegador a escolher automaticamente a melhor imagem, otimizando o carregamento de sprites sem perder qualidade.</p>
        <p>O desenvolvedor cria várias versões da mesma imagem com tamanhos diferentes. O navegador decide qual arquivo carregar: um smartphone recebe um background comprimido e leve, enquanto um PC gamer recebe textura em alta resolução. Isso reduz consumo de memória.</p>
        <p>Esse recurso é extremamente importante em jogos modernos porque performance influencia diretamente a experiência. O uso de imagens responsivas permite equilibrar qualidade visual e velocidade, evitando travamentos em dispositivos simples.</p>
        <div class="code-block"><pre><code>&lt;picture&gt;\n  &lt;source media="(max-width: 600px)" srcset="bg-mobile.png"&gt;\n  &lt;source media="(min-width: 601px)" srcset="bg-pc.png"&gt;\n  &lt;img src="bg-pc.png" alt="Cenário do jogo"&gt;\n&lt;/picture&gt;</code></pre></div>`,

    "Áudios Avançados (Atributos e Eventos de <audio>)": `
        <p>A tag <code>&lt;audio&gt;</code> permite inserir sons diretamente em jogos web para reproduzir músicas de fundo, efeitos sonoros e falas. O HTML5 trouxe suporte nativo a áudio. Atributos como <code>loop</code>, <code>autoplay</code> e <code>preload</code> oferecem controle adicional sobre o comportamento do som.</p>
        <p>O desenvolvedor pode controlar o áudio pelo HTML e JavaScript. O atributo loop faz a música repetir, enquanto preload tenta carregar o som antes. Eventos JavaScript permitem detectar quando um áudio terminou para disparar a próxima faixa de música dinamicamente.</p>
        <p>A importância do áudio em jogos é enorme porque melhora a sensação de impacto e resposta. Um sistema de áudio bem organizado facilita a manutenção do projeto e melhora a experiência. Jogos sem áudio parecem incompletos ou menos envolventes.</p>
        <div class="code-block"><pre><code>&lt;audio id="musicaFundo" loop preload="auto"&gt;\n  &lt;source src="musica.mp3" type="audio/mpeg"&gt;\n&lt;/audio&gt;</code></pre></div>`,

    "Pré-carregamento de Assets (preload e prefetch)": `
        <p>O pré-carregamento de assets é uma técnica usada para baixar arquivos importantes antes de eles serem necessários. Os atributos <code>preload</code> e <code>prefetch</code> ajudam o navegador a antecipar downloads de imagens, músicas e fontes, reduzindo atrasos durante a jogatina.</p>
        <p>O preload é usado para arquivos necessários imediatamente, enquanto prefetch prepara recursos para fases futuras. O navegador interpreta essas instruções no head do HTML e começa os downloads em segundo plano. Isso permite que sprites estejam prontos antes da partida começar.</p>
        <p>Esse recurso é importante porque jogos dependem muito de carregamento rápido. O pré-carregamento reduz falhas visuais, evita telas vazias e melhora a percepção de qualidade do projeto. Em jogos online, isso ajuda a criar uma experiência responsiva.</p>
        <div class="code-block"><pre><code>&lt;head&gt;\n&lt;link rel="preload" href="player.png" as="image"&gt;\n&lt;link rel="prefetch" href="fase2.png"&gt;\n&lt;/head&gt;</code></pre></div>`,

    "Iframe Avançado (<iframe> e Sandbox)": `
        <p>A tag <code>&lt;iframe&gt;</code> permite incorporar outra página HTML dentro da principal. Isso pode incluir mini-jogos, rankings online ou mapas externos. O atributo <code>sandbox</code> adiciona camadas extras de segurança, limitando o que o conteúdo incorporado pode fazer no jogo matriz.</p>
        <p>Desenvolvedores usam iframes para incluir conteúdos independentes sem misturar códigos. O sandbox pode bloquear scripts perigosos, impedir downloads automáticos ou restringir formulários, reduzindo riscos de segurança caso o conteúdo incorporado seja externo.</p>
        <p>O uso correto é vital em plataformas de jogos online e hubs de mini-games. Eles ajudam a modularizar sistemas e facilitam manutenção. Em ambientes multiplayer, o sandbox evita que conteúdos maliciosos interfiram no jogo principal.</p>
        <div class="code-block"><pre><code>&lt;iframe \n  src="minigame.html"\n  width="800"\n  height="400"\n  sandbox="allow-scripts"&gt;\n&lt;/iframe&gt;</code></pre></div>`,

    "Manipulação de Templates (<template> e <slot>)": `
        <p>A tag <code>&lt;template&gt;</code> serve para armazenar estruturas HTML que não devem aparecer imediatamente na tela. Ficam “guardados” na memória até serem clonados via JavaScript. O <code>&lt;slot&gt;</code> define áreas onde conteúdos externos podem ser inseridos nos componentes.</p>
        <p>O desenvolvedor cria modelos prontos visuais usando template. Depois, o JavaScript duplica essas estruturas, evitando repetir código HTML dezenas de vezes. O slot é usado para tornar componentes reutilizáveis, compartilhando estrutura visual com conteúdos personalizados.</p>
        <p>Esse sistema é importante porque jogos possuem elementos repetidos. Inventários podem conter cem itens, e criar cada elemento manualmente seria ineficiente. Templates melhoram organização, reaproveitamento e reduzem processamento inicial da página.</p>
        <div class="code-block"><pre><code>&lt;template id="itemInventario"&gt;\n  &lt;div class="item"&gt;\n    &lt;p&gt;Poção de Vida&lt;/p&gt;\n  &lt;/div&gt;\n&lt;/template&gt;</code></pre></div>`,

    "Armazenamento no Navegador (O papel técnico do HTML5)": `
        <p>O HTML5 trouxe suporte para armazenamento local através das APIs LocalStorage e SessionStorage. Elas permitem salvar informações diretamente no dispositivo do jogador sem servidor, usadas para guardar progresso, configurações gráficas e pontuações de save state.</p>
        <p>O LocalStorage salva dados de forma permanente. Já o SessionStorage mantém informações apenas enquanto a aba estiver aberta. Os dados são em formato de chave/valor. Um jogo pode salvar o nível atual e moedas acumuladas para continuar a partida posteriormente.</p>
        <p>Esse recurso melhora a experiência offline. Reduz custos de infraestrutura e facilita prototipagem de projetos. Mesmo jogos online frequentemente usam armazenamento local para cache e preferências temporárias, tornando a navegação mais rápida.</p>
        <div class="code-block"><pre><code>&lt;script&gt;\nlocalStorage.setItem("faseAtual", "3");\nconst fase = localStorage.getItem("faseAtual");\nconsole.log("Fase salva:", fase);\n&lt;/script&gt;</code></pre></div>`,

    "Componentes Web Nativos (Custom Elements)": `
        <p>Os Custom Elements permitem criar tags HTML personalizadas definidas pelo desenvolvedor (Web Components). Em vez de usar apenas divs, é possível criar elementos como <code>&lt;barra-vida&gt;</code>, encapsulando estrutura, estilo e comportamento em um único elemento reutilizável.</p>
        <p>Cria-se uma classe JavaScript que herda de HTMLElement, registrando a tag usando <code>customElements.define()</code>. A partir desse momento, a tag personalizada pode ser usada normalmente no HTML. Em jogos, isso ajuda a separar HUD, minimapa e inventário em módulos.</p>
        <p>A importância está na escalabilidade. Jogos grandes possuem interfaces complexas, e organizar tudo com divs vira um caos. Custom Elements facilitam manutenção, aproximando o web moderno da arquitetura usada em engines profissionais.</p>
        <div class="code-block"><pre><code>&lt;hud-jogador&gt;&lt;/hud-jogador&gt;\n\n&lt;script&gt;\nclass HudJogador extends HTMLElement {\n  connectedCallback() {\n    this.innerHTML = "&lt;h2&gt;Vida: 100&lt;/h2&gt;";\n  }\n}\ncustomElements.define("hud-jogador", HudJogador);\n&lt;/script&gt;</code></pre></div>`,

    "Acessibilidade de Teclado Avançada (tabindex e Foco)": `
        <p>A acessibilidade de teclado permite que jogadores naveguem pela interface sem usar mouse. O atributo <code>tabindex</code> controla a ordem de foco dos elementos. Isso é muito importante em menus e inventários. Muitos jogadores preferem navegar usando teclado ou controle adaptado.</p>
        <p>Elementos com tabindex podem receber foco usando a tecla TAB. O JavaScript também pode mover o foco automaticamente. Menus de pausa e seletores de itens utilizam esse sistema. Estilos CSS podem destacar visualmente o item focado, melhorando o feedback.</p>
        <p>Esse recurso aumenta a usabilidade. Pessoas com limitações dependem de navegação por teclado. Em jogos rápidos, menus acessíveis também tornam a experiência mais eficiente. Sistemas de foco organizados deixam interfaces mais profissionais.</p>
        <div class="code-block"><pre><code>&lt;button tabindex="1"&gt;Jogar&lt;/button&gt;\n&lt;button tabindex="2"&gt;Configurações&lt;/button&gt;\n&lt;button tabindex="3"&gt;Sair&lt;/button&gt;</code></pre></div>`
};
