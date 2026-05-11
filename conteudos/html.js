/**
 * BANCO DE DADOS DE TEXTOS - HTML COMPLETO (INICIANTE, INTERMEDIÁRIO E AVANÇADO)
 */

window.conteudosHTML = {
    // ==========================================
    // === NÍVEL INICIANTE ===
    // ==========================================
    
    "Conceito de Tags": `
        <p>As tags são a base da linguagem HTML e funcionam como comandos que informam ao navegador como o conteúdo deve ser estruturado. No desenvolvimento de jogos, elas são usadas para definir desde a área onde o jogo será exibido até os botões de menu e textos de interface. Cada tag é envolvida por colchetes angulares, como <code>&lt;html&gt;</code>.</p>
        <p>A maioria das tags trabalha em pares: uma de abertura e uma de fechamento (que possui uma barra), como em <code>&lt;p&gt;Texto&lt;/p&gt;</code>. Essa estrutura em "cascata" permite que o desenvolvedor organize a hierarquia visual da página de forma lógica. Tags bem utilizadas garantem que o navegador interprete o código sem erros.</p>
        <p>Entender o conceito de tags é o primeiro passo para criar qualquer projeto web. Elas permitem separar o que é um título, o que é um parágrafo e o que é um script de lógica do jogo. Sem as tags, o navegador veria apenas um bloco de texto sem formatação ou funcionalidade.</p>
        <div class="code-block"><pre><code>&lt;h1&gt;Meu Primeiro Jogo&lt;/h1&gt;
&lt;p&gt;Pressione Start para começar.&lt;/p&gt;</code></pre></div>`,

    "Estrutura Global": `
        <p>Todo documento HTML5 profissional precisa seguir uma estrutura global obrigatória. Isso garante que o navegador identifique o arquivo como um site moderno e aplique as regras de renderização corretamente. Essa estrutura começa sempre com a declaração <code>&lt;!DOCTYPE html&gt;</code>.</p>
        <p>Dentro da tag principal <code>&lt;html&gt;</code>, dividimos o código em duas grandes áreas: o <code>&lt;head&gt;</code> e o <code>&lt;body&gt;</code>. No cabeçalho (head) ficam as configurações invisíveis ao usuário, como o título da aba e links para arquivos CSS. No corpo (body) fica tudo o que o jogador realmente vê na tela.</p>
        <p>Manter essa organização é fundamental para evitar conflitos de carregamento de scripts. Em jogos web, geralmente chamamos o motor do jogo no final do body para garantir que todos os elementos visuais já tenham sido carregados pelo navegador antes do código começar a rodar.</p>
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
        <p>As tags de texto são usadas para exibir informações escritas, como diálogos de NPCs, pontuação ou descrições de itens. As tags mais comuns são os títulos (<code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code>) e os parágrafos (<code>&lt;p&gt;</code>). Elas ajudam a definir a importância visual de cada informação.</p>
        <p>Além das básicas, existem tags para destacar partes do texto, como <code>&lt;strong&gt;</code> para negrito ou <code>&lt;em&gt;</code> para itálico. Em interfaces de jogos, isso é útil para destacar nomes de itens lendários ou valores críticos de dano dentro de uma frase.</p>
        <p>Usar as tags corretas de texto não apenas melhora o visual, mas também ajuda na acessibilidade e no SEO do projeto. O navegador entende automaticamente a hierarquia e o espaçamento padrão entre esses elementos, facilitando o design inicial.</p>
        <div class="code-block"><pre><code>&lt;h2&gt;Missão Principal&lt;/h2&gt;
&lt;p&gt;Encontre a &lt;strong&gt;Chave de Ouro&lt;/strong&gt; no calabouço.&lt;/p&gt;</code></pre></div>`,

    "Meta Tags Técnicas": `
        <p>As meta tags ficam localizadas dentro do cabeçalho do documento e fornecem instruções técnicas essenciais para o navegador. A tag <code>charset="UTF-8"</code>, por exemplo, é obrigatória para que caracteres especiais e acentos do português funcionem corretamente sem erros de exibição.</p>
        <p>Outra meta tag crucial para jogos web é a <code>viewport</code>. Ela configura como a página deve se comportar em telas de celulares e tablets, garantindo que o jogo não fique com zoom exagerado ou minúsculo ao ser aberto em dispositivos diferentes.</p>
        <p>Embora sejam invisíveis para o jogador, essas tags ditam a compatibilidade do projeto. Elas também são usadas para definir a descrição do site que aparece em buscas do Google, ajudando na divulgação do jogo para novos usuários.</p>
        <div class="code-block"><pre><code>&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre></div>`,

    "Atributos e IDs": `
        <p>Atributos são propriedades que adicionamos às tags para modificar seu comportamento ou identificá-las. O atributo <code>id</code> é um dos mais importantes: ele funciona como um nome exclusivo para um elemento, permitindo que o JavaScript o encontre para alterar a vida ou a posição de um objeto.</p>
        <p>Enquanto o <code>id</code> deve ser único, o atributo <code>class</code> pode ser usado em vários elementos ao mesmo tempo. Isso permite que você aplique o mesmo estilo visual de "botão de menu" ou "card de item" para diversos componentes simultaneamente usando CSS.</p>
        <p>Entender a diferença entre IDs e classes é vital para a organização do código. IDs são usados para elementos de controle (como a tela do jogo), enquanto classes são usadas para elementos de design que se repetem na interface.</p>
        <div class="code-block"><pre><code>&lt;div id="jogador-um" class="status-box"&gt;&lt;/div&gt;
&lt;div id="jogador-dois" class="status-box"&gt;&lt;/div&gt;</code></pre></div>`,

    "Links e Navegação": `
        <p>A tag <code>&lt;a&gt;</code> (âncora) é utilizada para criar links que conectam diferentes páginas ou recursos. Em um portal de jogos, ela pode ser usada para levar o jogador do menu principal para a página de créditos ou para o manual de instruções externo.</p>
        <p>O atributo principal dessa tag é o <code>href</code>, que indica o destino do link. Também é comum usar o atributo <code>target="_blank"</code> quando queremos que o link abra em uma nova aba, mantendo o jogador com a aba do jogo aberta simultaneamente.</p>
        <p>Links também podem ser usados para navegar dentro da mesma página (âncoras internas). Isso é útil em documentos longos de termos de uso ou em wikis de jogos, onde o jogador clica em um tema e a página desliza automaticamente para aquela seção.</p>
        <div class="code-block"><pre><code>&lt;a href="creditos.html"&gt;Ver Créditos&lt;/a&gt;
&lt;a href="https://wiki.com" target="_blank"&gt;Wiki do Jogo&lt;/a&gt;</code></pre></div>`,

    "Listas de Inventário": `
        <p>As listas são a melhor forma de organizar conjuntos de informações relacionadas no HTML. Existem dois tipos principais: as listas não ordenadas (<code>&lt;ul&gt;</code>), que usam marcadores como pontos, e as listas ordenadas (<code>&lt;ol&gt;</code>), que utilizam números automáticos.</p>
        <p>Dentro de cada lista, usamos a tag <code>&lt;li&gt;</code> (list item) para cada item individual. Em jogos, essas tags são perfeitas para estruturar inventários, listas de missões ativas, logs de combate ou tabelas de classificação simples.</p>
        <p>O uso de listas facilita muito a estilização com CSS, permitindo criar menus horizontais ou verticais de forma limpa. Elas também são semanticamente corretas, o que significa que tecnologias assistivas para deficientes visuais conseguem ler os itens de forma organizada.</p>
        <div class="code-block"><pre><code>&lt;ul&gt;
    &lt;li&gt;Poção de Cura&lt;/li&gt;
    &lt;li&gt;Espada de Ferro&lt;/li&gt;
&lt;/ul&gt;</code></pre></div>`,

    "Inserção de Mídia": `
        <p>As tags de mídia, como <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code> e <code>&lt;video&gt;</code>, permitem inserir arquivos visuais e sonoros no projeto. A tag de imagem é especial pois não precisa de fechamento e utiliza o atributo <code>src</code> para localizar o arquivo do sprite ou background.</p>
        <p>Sempre devemos utilizar o atributo <code>alt</code> em imagens. Ele fornece uma descrição textual que aparece caso a imagem falhe ao carregar e é lida por leitores de tela para jogadores com deficiência visual, garantindo que eles saibam o que aquele gráfico representa.</p>
        <p>Para áudio e vídeo, o HTML5 oferece controles nativos (play, pause, volume) através do atributo <code>controls</code>. No entanto, em jogos, geralmente ocultamos esses controles e comandamos o som via JavaScript para disparar efeitos no momento exato das ações.</p>
        <div class="code-block"><pre><code>&lt;img src="hero.png" alt="Herói do Jogo"&gt;
&lt;audio src="tema.mp3" controls&gt;&lt;/audio&gt;</code></pre></div>`,

    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> é um container genérico sem significado semântico, mas que serve para agrupar outros elementos. Ela funciona como uma "caixa" invisível que ajuda a organizar o layout do jogo em blocos separados, facilitando o posicionamento com CSS.</p>
        <p>Por exemplo, você pode colocar toda a interface do usuário (HUD) dentro de uma div chamada "hud-container". Isso permite que você mova, oculte ou altere todos os elementos da interface de uma só vez apenas manipulando a caixa principal.</p>
        <p>Embora existam tags mais específicas hoje em dia, a div continua sendo a ferramenta mais versátil para estruturar layouts complexos e criar camadas sobrepostas, como menus que aparecem sobre a tela do jogo durante uma pausa.</p>
        <div class="code-block"><pre><code>&lt;div class="menu-pausa"&gt;
    &lt;button&gt;Continuar&lt;/button&gt;
    &lt;button&gt;Sair&lt;/button&gt;
&lt;/div&gt;</code></pre></div>`,

    "Comentários de Código": `
        <p>Comentários no HTML são trechos de texto que não são processados pelo navegador e não aparecem na tela para o jogador. Eles são feitos usando a sintaxe <code>&lt;!-- comentário --&gt;</code> e servem exclusivamente para o desenvolvedor organizar suas notas.</p>
        <p>Em projetos de jogos, os comentários são fundamentais para marcar onde começa e termina cada seção, como o cabeçalho, a área do canvas ou o footer. Isso ajuda muito quando você precisa voltar ao código meses depois para fazer uma manutenção.</p>
        <p>Também usamos comentários para desativar temporariamente uma parte do código sem precisar apagá-lo. Se você estiver testando uma nova interface mas não quer excluir a antiga, basta "comentar" o bloco antigo até decidir qual versão usar.</p>
        <div class="code-block"><pre><code>&lt;!-- Início da Seção de Inventário --&gt;
&lt;div id="inv"&gt;&lt;/div&gt;
&lt;!-- Fim da Seção de Inventário --&gt;</code></pre></div>`,

    // ==========================================
    // === NÍVEL INTERMEDIÁRIO ===
    // ==========================================

    "Elementos Semânticos (Header, Nav, Footer)": `
        <p>Tags semânticas como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> e <code>&lt;footer&gt;</code> indicam claramente ao navegador qual é a função de cada parte da página. O header costuma conter o título e logo do jogo, o nav os links de navegação e o footer as informações de copyright.</p>
        <p>Diferente de usar apenas <code>&lt;div&gt;</code>, essas tags ajudam motores de busca e ferramentas de acessibilidade a entenderem a estrutura do site. Em um site de games, isso melhora o ranqueamento no Google, facilitando que novos jogadores encontrem seu projeto.</p>
        <p>Usar semântica é uma prática de desenvolvimento profissional que torna o código mais legível para outros programadores. Elas funcionam visualmente como divs, mas carregam um significado lógico importante para a arquitetura da web.</p>
        <div class="code-block"><pre><code>&lt;header&gt;
    &lt;h1&gt;Dragon Quest&lt;/h1&gt;
&lt;/header&gt;</code></pre></div>`,

    "Seções de Conteúdo (Section, Article, Aside)": `
        <p>As tags <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> e <code>&lt;aside&gt;</code> servem para dividir o conteúdo principal de forma mais específica. A section agrupa temas relacionados, o article define um conteúdo independente (como uma notícia de atualização) e o aside é usado para barras laterais.</p>
        <p>Em uma página de perfil de jogador, por exemplo, a <code>&lt;section&gt;</code> poderia conter as conquistas, enquanto o <code>&lt;aside&gt;</code> conteria a lista de amigos online. Essa divisão ajuda a organizar o layout de forma que o conteúdo faça sentido hierarquicamente.</p>
        <p>Essas tags são fundamentais para layouts modernos. Elas permitem que o CSS e o JavaScript interajam com grandes blocos de informação de maneira mais precisa, garantindo que o design se mantenha estruturado em diferentes tamanhos de tela.</p>
        <div class="code-block"><pre><code>&lt;section id="conquistas"&gt;
    &lt;article&gt;Mestre das Sombras&lt;/article&gt;
&lt;/section&gt;</code></pre></div>`,

    "Estrutura de Tabelas Simples (Table, Tr, Td)": `
        <p>Tabelas são usadas para organizar dados em linhas e colunas. No HTML, usamos <code>&lt;table&gt;</code> como container principal, <code>&lt;tr&gt;</code> para criar linhas (table rows) e <code>&lt;td&gt;</code> para as células de dados (table data).</p>
        <p>Em jogos, as tabelas são ideais para exibir estatísticas detalhadas de personagens, listas de preços em lojas de NPCs ou comparativos de atributos entre diferentes armas e equipamentos.</p>
        <p>Embora não sejam recomendadas para criar layouts inteiros de sites (como se fazia antigamente), as tabelas continuam sendo a melhor escolha para exibir dados tabulares de forma clara e organizada para o jogador.</p>
        <div class="code-block"><pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Espada&lt;/td&gt;
        &lt;td&gt;Dano: 10&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre></div>`,

    "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": `
        <p>Para tabelas mais profissionais e complexas, usamos tags de agrupamento: <code>&lt;thead&gt;</code> para o cabeçalho (nomes das colunas), <code>&lt;tbody&gt;</code> para o corpo dos dados e <code>&lt;tfoot&gt;</code> para o rodapé ou totais.</p>
        <p>Essa estrutura é muito comum em sistemas de Ranking (Leaderboards). O head mostra "Posição", "Nome" e "Pontos", o body lista os jogadores e o foot pode mostrar a posição atual do usuário logado.</p>
        <p>Além de organizar o código, o uso de thead e tbody permite que o navegador aplique comportamentos específicos, como manter o cabeçalho visível enquanto o usuário rola uma lista muito longa de dados.</p>
        <div class="code-block"><pre><code>&lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Player&lt;/th&gt;&lt;th&gt;Score&lt;/th&gt;&lt;/tr&gt;
&lt;/thead&gt;</code></pre></div>`,

    "Formulários Básicos (Form, Input, Label)": `
        <p>Formulários são essenciais para coletar informações dos jogadores. A tag <code>&lt;form&gt;</code> agrupa os campos, o <code>&lt;input&gt;</code> cria o campo de preenchimento e o <code>&lt;label&gt;</code> serve para dar nome ao que deve ser digitado.</p>
        <p>O uso de labels é obrigatório para uma boa acessibilidade. Quando um jogador clica no texto de um label, o navegador foca automaticamente no campo de entrada correspondente, facilitando a interação.</p>
        <p>Em jogos, usamos formulários principalmente em telas de Login, Cadastro de novos jogadores ou no campo de chat, onde o texto digitado é enviado para o servidor ou para outros participantes da partida.</p>
        <div class="code-block"><pre><code>&lt;form&gt;
    &lt;label&gt;Nome do Herói:&lt;/label&gt;
    &lt;input type="text"&gt;
&lt;/form&gt;</code></pre></div>`,

    "Tipos de Input (Text, Password, Email, Button)": `
        <p>O atributo <code>type</code> da tag input muda completamente sua função. <code>text</code> é para nomes comuns, <code>password</code> oculta os caracteres digitados por segurança e <code>email</code> valida se o formato do endereço está correto.</p>
        <p>Também existe o tipo <code>button</code> e <code>submit</code>. Em jogos, usamos muitos botões para ações rápidas, como "Equipar", "Vender" ou "Iniciar Partida". O tipo correto ajuda o navegador a entender o propósito do elemento.</p>
        <p>Escolher o tipo de input adequado melhora a experiência em dispositivos móveis, pois o teclado do celular muda automaticamente (mostrando a tecla @ para e-mails ou teclado numérico para quantidades), facilitando a vida do jogador.</p>
        <div class="code-block"><pre><code>&lt;input type="password" placeholder="Senha"&gt;
&lt;input type="submit" value="Entrar"&gt;</code></pre></div>`,

    "Seleções em Formulários (Radio, Checkbox, Select)": `
        <p>Para permitir que o jogador escolha entre opções pré-definidas, usamos <code>radio</code> (apenas uma escolha entre várias), <code>checkbox</code> (várias escolhas permitidas) e <code>&lt;select&gt;</code> para listas suspensas (dropdowns).</p>
        <p>Inputs do tipo radio são perfeitos para escolha de classe de personagem (Guerreiro OU Mago). Checkboxes funcionam bem para configurações gráficas, como "Ativar Som" e "Modo Tela Cheia" simultaneamente.</p>
        <p>A tag select é ideal para economizar espaço na tela, permitindo que o jogador escolha o idioma do jogo ou o servidor de uma lista longa sem poluir o visual da interface.</p>
        <div class="code-block"><pre><code>&lt;select&gt;
    &lt;option&gt;Servidor BR&lt;/option&gt;
    &lt;option&gt;Servidor US&lt;/option&gt;
&lt;/select&gt;</code></pre></div>`,

    "Validação Nativa de Formulários": `
        <p>O HTML5 permite validar se os dados digitados estão corretos antes mesmo de enviá-los para o JavaScript. Atributos como <code>required</code> (obrigatório), <code>minlength</code> (mínimo de caracteres) e <code>max</code> facilitam esse controle.</p>
        <p>Em um sistema de criação de personagem, você pode usar <code>required</code> no nome para evitar que o jogador comece sem uma identidade, ou <code>min="1" max="10"</code> em um campo de distribuição de pontos de força.</p>
        <p>Essa validação nativa é rápida e já vem com mensagens de erro padrão do navegador, o que economiza tempo de desenvolvimento e garante que o banco de dados do jogo receba apenas informações válidas.</p>
        <div class="code-block"><pre><code>&lt;input type="text" required minlength="3"&gt;</code></pre></div>`,

    "Introdução à Acessibilidade (Atributos ARIA)": `
        <p>Atributos ARIA (Accessible Rich Internet Applications) fornecem informações extras para tecnologias assistivas. O atributo <code>aria-label</code>, por exemplo, pode descrever o que um botão faz mesmo que ele contenha apenas um ícone visual.</p>
        <p>Em jogos, a acessibilidade é fundamental para incluir jogadores com diferentes necessidades. Usar <code>role="button"</code> em elementos que não são botões nativos ajuda leitores de tela a entenderem que aquele objeto é interativo.</p>
        <p>Práticas de acessibilidade garantem que seu jogo possa ser jogado por um público muito maior. Pequenos ajustes no código HTML tornam a experiência mais democrática e profissional.</p>
        <div class="code-block"><pre><code>&lt;div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;</code></pre></div>`,

    "A tag <dialog> (Modais Nativos)": `
        <p>A tag <code>&lt;dialog&gt;</code> é uma adição moderna ao HTML que facilita a criação de janelas modais (pop-ups). Ela possui comportamentos nativos para abrir e fechar, além de permitir o bloqueio da interação com o resto da página.</p>
        <p>No desenvolvimento de jogos, ela é perfeita para criar telas de Pause, Inventários rápidos ou caixas de diálogo de NPCs. Por ser nativa, ela lida muito bem com o foco do teclado e acessibilidade automaticamente.</p>
        <p>Usar o método <code>showModal()</code> via JavaScript faz com que o dialog apareça no centro da tela com um fundo escurecido (backdrop), criando um visual profissional de interface de jogo sem a necessidade de bibliotecas externas complexas.</p>
        <div class="code-block"><pre><code>&lt;dialog id="meuModal"&gt;
    &lt;p&gt;Jogo Pausado&lt;/p&gt;
    &lt;button onclick="this.parentNode.close()"&gt;Voltar&lt;/button&gt;
&lt;/dialog&gt;</code></pre></div>`,

    // ==========================================
    // === NÍVEL AVANÇADO ===
    // ==========================================

    "A tag <canvas> (O Palco dos Jogos)": `
        <p>A tag <code>&lt;canvas&gt;</code> é um dos elementos mais importantes do desenvolvimento de jogos web modernos. Ela funciona como uma área de desenho dentro da página HTML onde o JavaScript pode renderizar gráficos, animações, partículas, personagens e cenários em tempo real. Diferente de elementos HTML tradicionais, o <code>&lt;canvas&gt;</code> não possui conteúdo visual próprio; tudo o que aparece nele é desenhado dinamicamente através de código. Isso permite criar jogos 2D e até experiências 3D usando bibliotecas gráficas. Em projetos de jogos, o canvas geralmente representa literalmente a “tela do jogo”.</p>
        <p>Na prática, o <code>&lt;canvas&gt;</code> é usado junto da API Canvas do JavaScript para desenhar formas, imagens e animações continuamente. O desenvolvedor cria um elemento <code>&lt;canvas&gt;</code> no HTML e depois utiliza JavaScript para acessar seu contexto gráfico usando <code>getContext("2d")</code>. Esse contexto permite desenhar sprites, HUDs, barras de vida e mapas inteiros. Em engines próprias, o canvas também é responsável pelo sistema de colisão visual e atualização de frames. Jogos em estilo arcade, plataforma e RPG frequentemente utilizam essa técnica.</p>
        <p>A importância do <code>&lt;canvas&gt;</code> nos jogos é enorme porque ele oferece controle total sobre os gráficos exibidos. Enquanto elementos HTML comuns são mais indicados para menus e formulários, o canvas permite desenhar centenas de objetos rapidamente em uma única área da tela. Isso melhora a organização do projeto e facilita sistemas de câmera, efeitos de iluminação e movimentação contínua. Em jogos multiplayer ou com muitos efeitos visuais, o canvas ajuda a manter a performance estável. Ele também é muito usado em conjunto com bibliotecas como Phaser.js e engines próprias.</p>
        <div class="code-block"><pre><code>&lt;canvas id="telaJogo" width="800" height="400"&gt;&lt;/canvas&gt;

&lt;script&gt;
const canvas = document.getElementById("telaJogo");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(50, 50, 100, 100);

ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Jogador 1", 40, 40);
&lt;/script&gt;</code></pre></div>`,

    "SVG inline (<svg> e <path>)": `
        <p>O SVG (Scalable Vector Graphics) é uma tecnologia que permite criar gráficos vetoriais diretamente dentro do HTML. Diferente de imagens comuns como PNG ou JPG, os gráficos SVG não perdem qualidade ao serem ampliados. Isso acontece porque eles são desenhados matematicamente através de formas, linhas e curvas. As tags <code>&lt;svg&gt;</code> e <code>&lt;path&gt;</code> são usadas para construir esses desenhos vetoriais. Em jogos web, SVGs são muito úteis para criar interfaces modernas e elementos gráficos leves.</p>
        <p>Na prática, SVG inline é usado diretamente no HTML sem precisar carregar arquivos externos. O desenvolvedor pode criar ícones de inventário, escudos, minimapas, botões e barras de energia usando código vetorial. A tag <code>&lt;path&gt;</code> define formatos personalizados usando coordenadas e curvas matemáticas. Como os elementos SVG fazem parte do DOM, eles também podem ser animados com CSS e JavaScript. Isso permite criar menus animados, efeitos de brilho e indicadores dinâmicos de forma extremamente leve.</p>
        <p>O uso de SVG em jogos é importante principalmente para interfaces responsivas. Em resoluções diferentes, os gráficos continuam nítidos sem precisar carregar múltiplas versões da mesma imagem. Isso reduz o peso do projeto e melhora a performance em celulares. Jogos com visual futurista, RPGs com HUDs complexas e interfaces estilizadas costumam utilizar SVG para manter a qualidade gráfica. Além disso, SVG é excelente para elementos que precisam mudar de cor ou tamanho dinamicamente.</p>`,

    "Imagens Responsivas (<picture> e srcset)": `
        <p>As imagens responsivas permitem carregar arquivos diferentes dependendo do tamanho da tela ou da capacidade do dispositivo do jogador. As tags <code>&lt;picture&gt;</code> e o atributo <code>srcset</code> ajudam o navegador a escolher automaticamente qual imagem deve ser usada. Isso é muito importante em jogos web porque gráficos pesados podem prejudicar celulares mais fracos. Com essa técnica, é possível otimizar o carregamento de sprites, fundos e texturas sem perder qualidade visual em computadores potentes.</p>
        <p>Na prática, o desenvolvedor cria várias versões da mesma imagem com tamanhos diferentes. O navegador então decide qual arquivo carregar baseado na largura da tela ou densidade de pixels. Um smartphone pode receber um background comprimido e leve, enquanto um PC gamer recebe uma textura em alta resolução. Isso reduz consumo de memória, melhora o tempo de carregamento e evita travamentos em dispositivos mais simples. O sistema funciona automaticamente depois de configurado corretamente no HTML.</p>
        <p>Esse recurso é extremamente importante em jogos modernos porque performance influencia diretamente a experiência do jogador. Jogos com mapas grandes e muitas imagens podem ficar lentos caso todos os assets sejam carregados em qualidade máxima. O uso de imagens responsivas permite equilibrar qualidade visual e velocidade. Além disso, jogos web distribuídos online precisam carregar rapidamente para evitar abandono na tela inicial. Otimizações desse tipo fazem grande diferença em projetos profissionais.</p>
        <div class="code-block"><pre><code>&lt;picture&gt;
  &lt;source media="(max-width: 600px)" srcset="bg-mobile.png"&gt;
  &lt;source media="(min-width: 601px)" srcset="bg-pc.png"&gt;
  &lt;img src="bg-pc.png" alt="Cenário do jogo"&gt;
&lt;/picture&gt;</code></pre></div>`,

    "Áudios Avançados (Atributos e Eventos de <audio>)": `
        <p>A tag <code>&lt;audio&gt;</code> permite inserir sons diretamente em jogos web. Ela é usada para reproduzir músicas de fundo, efeitos sonoros, falas de personagens e alertas do sistema. O HTML5 trouxe suporte nativo a áudio sem necessidade de plugins externos. Além disso, atributos como <code>loop</code>, <code>autoplay</code> e <code>preload</code> oferecem controle adicional sobre o comportamento do som. Em jogos, o áudio é essencial para criar imersão e feedback para o jogador.</p>
        <p>Na prática, o desenvolvedor pode controlar o áudio tanto pelo HTML quanto pelo JavaScript. O atributo <code>loop</code> faz a música repetir automaticamente, enquanto <code>preload</code> tenta carregar o som antes de ser usado. Eventos JavaScript permitem detectar quando um áudio terminou ou começou a tocar. Também é possível controlar volume, pausar músicas em menus e alternar múltiplos canais de som. Jogos costumam separar trilha sonora, efeitos e falas em diferentes objetos de áudio.</p>
        <p>A importância do áudio em jogos é enorme porque ele melhora a sensação de impacto e resposta das ações. Sons de tiro, passos, explosões e menus ajudam o jogador a entender eventos rapidamente. Trilhas sonoras também influenciam diretamente o clima emocional da experiência. Um sistema de áudio bem organizado facilita a manutenção do projeto e melhora a experiência do usuário em diferentes dispositivos. Jogos sem áudio geralmente parecem incompletos ou menos envolventes.</p>
        <div class="code-block"><pre><code>&lt;audio id="musicaFundo" loop preload="auto"&gt;
  &lt;source src="musica.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;

&lt;button onclick="document.getElementById('musicaFundo').play()"&gt;
  Iniciar Música
&lt;/button&gt;</code></pre></div>`,

    "Pré-carregamento de Assets (preload e prefetch)": `
        <p>O pré-carregamento de assets é uma técnica usada para baixar arquivos importantes antes de eles serem necessários no jogo. Isso inclui imagens, músicas, fontes e scripts essenciais para a experiência inicial. Os atributos e links de <code>preload</code> e <code>prefetch</code> ajudam o navegador a antecipar downloads importantes. Em jogos web, isso reduz atrasos e evita que elementos apareçam lentamente durante a jogatina. Esse processo é muito usado em telas de loading.</p>
        <p>Na prática, <code>preload</code> é usado para arquivos necessários imediatamente, enquanto <code>prefetch</code> prepara recursos que poderão ser usados futuramente. O navegador interpreta essas instruções no <code>&lt;head&gt;</code> do HTML e começa os downloads em segundo plano. Isso permite que sprites, trilhas sonoras e mapas estejam prontos antes da partida começar. Em jogos grandes, essa técnica evita travamentos quando o jogador muda de fase. Também melhora a fluidez das animações iniciais.</p>
        <p>Esse recurso é importante porque jogos dependem muito de carregamento rápido e contínuo. Se um som ou textura demorar para carregar durante a ação, a experiência pode parecer quebrada. O pré-carregamento reduz falhas visuais, evita telas vazias e melhora a percepção de qualidade do projeto. Em jogos online, isso ajuda a criar uma experiência mais profissional e responsiva. Muitas engines utilizam sistemas automáticos de preload baseados nessas técnicas do HTML.</p>
        <div class="code-block"><pre><code>&lt;head&gt;
&lt;link rel="preload" href="player.png" as="image"&gt;
&lt;link rel="preload" href="fase1.mp3" as="audio"&gt;
&lt;link rel="prefetch" href="fase2.png"&gt;
&lt;/head&gt;</code></pre></div>`,

    "Iframe Avançado (<iframe> e Sandbox)": `
        <p>A tag <code>&lt;iframe&gt;</code> permite incorporar outra página HTML dentro da página principal do jogo. Isso pode incluir mini-jogos, rankings online, mapas externos ou dashboards administrativos. O atributo <code>sandbox</code> adiciona camadas extras de segurança, limitando o que o conteúdo incorporado pode fazer. Em desenvolvimento web moderno, segurança é fundamental, especialmente ao integrar conteúdos externos. O iframe ajuda a separar ambientes e evitar conflitos entre sistemas.</p>
        <p>Na prática, desenvolvedores usam iframes para incluir conteúdos independentes sem misturar diretamente os códigos. Um launcher de jogos pode carregar diferentes games em um único sistema usando iframes separados. O atributo <code>sandbox</code> pode bloquear scripts perigosos, impedir downloads automáticos ou restringir formulários. Isso reduz riscos de segurança caso o conteúdo incorporado seja externo. Também é possível usar iframes para testes isolados durante o desenvolvimento.</p>
        <p>O uso correto de iframes é importante em plataformas de jogos online, portais educacionais e hubs de mini-games. Eles ajudam a modularizar sistemas e facilitam manutenção de múltiplos projetos. Em ambientes multiplayer ou com integração de APIs externas, o sandbox evita que conteúdos maliciosos interfiram no jogo principal. Embora não seja usado para renderizar o jogo em si, o iframe é muito útil para sistemas auxiliares e integração segura de ferramentas.</p>
        <div class="code-block"><pre><code>&lt;iframe 
  src="minigame.html"
  width="800"
  height="400"
  sandbox="allow-scripts"&gt;
&lt;/iframe&gt;</code></pre></div>`,

    "Manipulação de Templates (<template> e <slot>)": `
        <p>A tag <code>&lt;template&gt;</code> serve para armazenar estruturas HTML que não devem aparecer imediatamente na tela. Esses elementos ficam “guardados” na memória até serem clonados via JavaScript. Já o <code>&lt;slot&gt;</code> é usado em componentes personalizados para definir áreas onde conteúdos externos podem ser inseridos. Em jogos web, essas ferramentas ajudam muito na criação de interfaces repetitivas e dinâmicas. Inventários, lojas e listas de personagens são exemplos comuns.</p>
        <p>Na prática, o desenvolvedor cria modelos prontos de elementos visuais usando <code>&lt;template&gt;</code>. Depois, o JavaScript duplica essas estruturas conforme necessário. Isso evita repetir código HTML manualmente dezenas de vezes. O <code>&lt;slot&gt;</code> é usado principalmente em Web Components para tornar componentes reutilizáveis e flexíveis. Assim, diferentes partes do jogo podem compartilhar a mesma estrutura visual com conteúdos personalizados.</p>
        <p>Esse sistema é importante porque jogos frequentemente possuem muitos elementos repetidos. Inventários podem conter centenas de itens, e criar cada elemento manualmente seria ineficiente. Templates melhoram organização, reaproveitamento e manutenção do código. Além disso, eles reduzem processamento inicial da página porque elementos só são renderizados quando realmente necessários. Isso contribui para performance e escalabilidade do projeto.</p>
        <div class="code-block"><pre><code>&lt;template id="itemInventario"&gt;
  &lt;div class="item"&gt;
    &lt;p&gt;Poção de Vida&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
const template = document.getElementById("itemInventario");
document.body.appendChild(template.content.cloneNode(true));
&lt;/script&gt;</code></pre></div>`,

    "Armazenamento no Navegador (O papel técnico do HTML5)": `
        <p>O HTML5 trouxe suporte moderno para armazenamento local no navegador através de APIs como LocalStorage e SessionStorage. Essas tecnologias permitem salvar informações diretamente no dispositivo do jogador sem necessidade de servidor. Jogos utilizam esse recurso para guardar progresso, configurações gráficas, pontuações e inventários. Embora o armazenamento seja controlado pelo JavaScript, o suporte faz parte da evolução do HTML5 como plataforma completa de aplicações web.</p>
        <p>Na prática, LocalStorage salva dados de forma permanente até que sejam apagados manualmente. Já SessionStorage mantém informações apenas enquanto a aba do navegador estiver aberta. Os dados são armazenados em formato de chave e valor. Um jogo pode salvar o nível atual do jogador, moedas acumuladas ou preferências de áudio. Isso permite continuar a partida posteriormente sem perder progresso.</p>
        <p>Esse recurso é extremamente importante porque melhora a experiência do usuário sem depender totalmente de servidores online. Jogos offline usam armazenamento local para criar sistemas de save state simples e rápidos. Além disso, ele reduz custos de infraestrutura e facilita prototipagem de projetos independentes. Mesmo jogos online frequentemente usam armazenamento local para cache e preferências temporárias. Isso torna a navegação mais rápida e personalizada.</p>
        <div class="code-block"><pre><code>&lt;script&gt;
localStorage.setItem("faseAtual", "3");
const fase = localStorage.getItem("faseAtual");
console.log("Fase salva:", fase);
&lt;/script&gt;</code></pre></div>`,

    "Componentes Web Nativos (Custom Elements)": `
        <p>Os Custom Elements permitem criar tags HTML personalizadas definidas pelo próprio desenvolvedor. Isso faz parte da tecnologia chamada Web Components. Em vez de usar apenas tags tradicionais como <code>&lt;div&gt;</code> ou <code>&lt;section&gt;</code>, é possível criar elementos como <code>&lt;barra-vida&gt;</code> ou <code>&lt;hud-jogador&gt;</code>. Esses componentes encapsulam estrutura, estilo e comportamento em um único elemento reutilizável. Isso ajuda muito na organização de jogos complexos.</p>
        <p>Na prática, o desenvolvedor cria uma classe JavaScript que herda de HTMLElement. Depois, registra a nova tag usando <code>customElements.define()</code>. A partir desse momento, a tag personalizada pode ser usada normalmente no HTML. Cada componente pode conter lógica própria, estilos internos e atualizações automáticas. Em jogos, isso ajuda a separar sistemas como HUD, minimapa e inventário em módulos independentes.</p>
        <p>A importância dos componentes web está na escalabilidade do projeto. Jogos grandes possuem muitas interfaces e elementos dinâmicos, e organizar tudo apenas com divs pode virar um caos rapidamente. Custom Elements facilitam manutenção, reaproveitamento e leitura do código. Eles também aproximam o desenvolvimento web moderno da arquitetura usada em engines profissionais e frameworks modernos. Isso melhora produtividade e clareza estrutural.</p>
        <div class="code-block"><pre><code>&lt;hud-jogador&gt;&lt;/hud-jogador&gt;

&lt;script&gt;
class HudJogador extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "&lt;h2&gt;Vida: 100&lt;/h2&gt;";
  }
}
customElements.define("hud-jogador", HudJogador);
&lt;/script&gt;</code></pre></div>`,

    "Acessibilidade de Teclado Avançada (tabindex e Foco)": `
        <p>A acessibilidade de teclado permite que jogadores naveguem pela interface sem precisar usar mouse. O atributo <code>tabindex</code> controla a ordem de foco dos elementos da página. Isso é muito importante em menus, inventários e telas de configuração. Jogos web modernos precisam considerar acessibilidade tanto por inclusão quanto por praticidade. Muitos jogadores preferem navegar rapidamente usando teclado ou controle adaptado.</p>
        <p>Na prática, elementos com <code>tabindex="0"</code> podem receber foco usando a tecla TAB. O JavaScript também pode mover o foco automaticamente entre elementos conforme ações do jogador. Menus de pausa, seletores de itens e telas de opções costumam utilizar esse sistema. Além disso, estilos CSS podem destacar visualmente o item atualmente focado. Isso melhora navegação e feedback visual.</p>
        <p>Esse recurso é essencial porque aumenta usabilidade e acessibilidade do jogo. Pessoas com limitações motoras dependem frequentemente de navegação por teclado. Em jogos rápidos, menus acessíveis também tornam a experiência mais eficiente para qualquer jogador. Além disso, sistemas de foco bem organizados deixam interfaces mais profissionais e intuitivas. Grandes jogos web e aplicações modernas sempre consideram acessibilidade como parte do desenvolvimento principal.</p>
        <div class="code-block"><pre><code>&lt;button tabindex="1"&gt;Jogar&lt;/button&gt;
&lt;button tabindex="2"&gt;Configurações&lt;/button&gt;
&lt;button tabindex="3"&gt;Sair&lt;/button&gt;

&lt;style&gt;
button:focus {
  border: 3px solid yellow;
}
&lt;/style&gt;</code></pre></div>`
};
