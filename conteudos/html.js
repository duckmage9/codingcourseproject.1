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
        <p>As tags de texto são usadas para exibir informações escritas, como diálogos de NPCs, pontuação ou descrições de itens. As mais comuns são os títulos (<code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code>) e os parágrafos (<code>&lt;p&gt;</code>). Elas ajudam a definir a importância visual de cada informação.</p>
        <p>Além das básicas, existem tags para destacar partes do texto, como <code>&lt;strong&gt;</code> para negrito ou <code>&lt;em&gt;</code> para itálico. Em interfaces de jogos, isso é útil para destacar nomes de itens lendários ou valores críticos de dano dentro de uma frase.</p>
        <p>Usar as tags corretas de texto não apenas melhora o visual, mas também ajuda na acessibilidade e no SEO do projeto. O navegador entende automaticamente a hierarquia e o espaçamento padrão entre esses elementos, facilitando o design inicial.</p>
        <div class="code-block"><pre><code>&lt;h2&gt;Missão Principal&lt;/h2&gt;\n&lt;p&gt;Encontre a &lt;strong&gt;Chave de Ouro&lt;/strong&gt; no calabouço.&lt;/p&gt;</code></pre></div>`,

    "Meta Tags Técnicas": `
        <p>As meta tags ficam localizadas dentro do cabeçalho do documento e fornecem instruções técnicas essenciais para o navegador. A tag <code>charset="UTF-8"</code>, por exemplo, é obrigatória para que caracteres especiais e acentos do português funcionem corretamente sem erros de exibição.</p>
        <p>Outra meta tag crucial para jogos web é a <code>viewport</code>. Ela configura como a página deve se comportar em telas de celulares e tablets, garantindo que o jogo não fique com zoom exagerado ou minúsculo ao ser aberto em dispositivos diferentes.</p>
        <p>Embora sejam invisíveis para o jogador, essas tags ditam a compatibilidade do projeto. Elas também são usadas para definir a descrição do site que aparece em buscas do Google, helping na divulgação do jogo para novos usuários.</p>
        <div class="code-block"><pre><code>&lt;meta charset="UTF-8"&gt;\n&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre></div>`,

    "Atributos e IDs": `
        <p>Atributos são propriedades que adicionamos às tags para modificar seu comportamento ou identificá-las. O atributo <code>id</code> é um dos mais importantes: ele funciona como um nome exclusivo para um elemento, permitindo que o JavaScript o encontre para alterar a vida ou a posição de um objeto.</p>
        <p>Enquanto o <code>id</code> deve ser único, o atributo <code>class</code> pode ser usado em vários elements ao mesmo tempo. Isso permite que você aplique o mesmo estilo visual de "botão de menu" ou "card de item" para diversos componentes simultaneamente usando CSS.</p>
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
        <p>Comentários no HTML são trechos de texto que não são processados pelo navegador e não aparecem na tela para o jogador. Eles são feitos usando a sintaxe especial e servem exclusivamente para o desenvolvedor organizar suas notas.</p>
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
        <p>Para permitir que o jogador escolha entre opções pré-definidas, usamos <code>radio</code> (apenas uma escolha), <code>checkbox</code> (várias escolhas permitidas) e <code>&lt;select&gt;</code> para listas suspensas (dropdowns).</p>
        <p>Inputs do tipo radio são perfeitos para escolha de classe de personagem (Guerreiro OU Mago). Checkboxes funcionam bem para configurações gráficas, como "Ativar Som" e "Modo Tela Cheia" simultaneamente.</p>
        <p>A tag select é ideal para economizar espaço na tela, permitindo que o jogador escolha o idioma do jogo ou o servidor de uma lista longa sem poluir o visual da interface principal.</p>
        <div class="code-block"><pre><code>&lt;select&gt;\n    &lt;option&gt;Servidor BR&lt;/option&gt;\n    &lt;option&gt;Servidor US&lt;/option&gt;\n&lt;/select&gt;</code></pre></div>`,

    "Validação Nativa de Formulários": `
        <p>O HTML5 permite validar se os dados digitados estão corretos antes mesmo de enviá-los para o JavaScript. Atributos como <code>required</code> (obrigatório), <code>minlength</code> (mínimo de caracteres) e <code>max</code> facilitam esse controle.</p>
        <p>Em um sistema de criação de personagem, você pode usar <code>required</code> no nome para evitar que o jogador comece sem identidade, ou atributos numéricos para limitar a distribuição de pontos de força.</p>
        <p>Essa validação nativa é rápida e já vem com mensagens de erro padrão do navegador, o que economiza tempo de desenvolvimento e garante que o banco de dados receba apenas informações válidas.</p>
        <div class="code-block"><pre><code>&lt;input type="text" required minlength="3"&gt;</code></pre></div>`,

    "Introdução à Acessibilidade (Atributos ARIA)": `
        <p>Atributos ARIA (Accessible Rich Internet Applications) fornecem informações extras para tecnologias assistivas. O atributo <code>aria-label</code>, por exemplo, descreve o que um botão faz mesmo que ele contenha apenas um ícone visual.</p>
        <p>Em jogos, a acessibilidade é fundamental para incluir jogadores com diferentes necessidades. Usar <code>role="button"</code> em elementos que não são botões nativos ajuda leitores de tela a entenderem a interatividade.</p>
        <p>Práticas de acessibilidade garantem que seu jogo possa ser jogado por um público muito maior. Pequenos ajustes no código HTML tornam a experiência mais democrática e profissional para todos.</p>
        <div class="code-block"><pre><code>&lt;div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;</code></pre></div>`,

    "A tag <dialog> (Modais Nativos)": `
        <p>A tag <code>&lt;dialog&gt;</code> é uma adição moderna ao HTML que facilita a criação de janelas modais (pop-ups). Ela possui comportamentos nativos para abrir e fechar, além de bloquear a interação com o resto da página.</p>
        <p>No desenvolvimento de jogos, ela é perfeita para criar telas de Pause, Inventários rápidos ou caixas de diálogo de NPCs. Por ser nativa, ela lida muito bem com o foco do teclado e acessibilidade automaticamente.</p>
        <p>Usar o método via JavaScript faz com que o dialog apareça no centro da tela com um fundo escurecido (backdrop), criando um visual profissional de interface sem precisar de bibliotecas externas complexas.</p>
        <div class="code-block"><pre><code>&lt;dialog id="meuModal"&gt;\n    &lt;p&gt;Jogo Pausado&lt;/p&gt;\n    &lt;button onclick="this.parentNode.close()"&gt;Voltar&lt;/button&gt;\n&lt;/dialog&gt;</code></pre></div>`,

    // ==========================================
    // === NÍVEL AVANÇADO ===
    // ==========================================
    "A tag <canvas> (O Palco dos Jogos)": `
        <p>A tag <code>&lt;canvas&gt;</code> é um dos elementos mais importantes do desenvolvimento de jogos web modernos. Ela funciona como uma área de desenho vazia dentro da página HTML onde o JavaScript pode renderizar gráficos, animações, partículas e cenários em tempo real. Diferente de elementos HTML tradicionais, o canvas não possui conteúdo visual próprio; tudo é desenhado dinamicamente frame a frame.</p>
        <p>Na prática, o <code>&lt;canvas&gt;</code> é usado junto da API Canvas usando o método <code>getContext("2d")</code>. Esse contexto permite desenhar sprites, HUDs, barras de vida e mapas inteiros. Em engines criadas do zero, o canvas é responsável por refletir toda a matemática e a física processadas no Game Loop para os olhos do jogador.</p>
        <p>A importância do <code>&lt;canvas&gt;</code> é colossal porque ele oferece controle absoluto pixel por pixel. Ele permite desenhar centenas de inimigos, projéteis e explosões rapidamente em uma única área, garantindo que o jogo mantenha os essenciais 60 quadros por segundo (FPS) sem sobrecarregar a memória do navegador.</p>
        <div class="code-block"><pre><code>&lt;canvas id="telaJogo" width="800" height="400"&gt;&lt;/canvas&gt;\n\n&lt;script&gt;\nconst canvas = document.getElementById("telaJogo");\nconst ctx = canvas.getContext("2d");\nctx.fillStyle = "black";\nctx.fillRect(0, 0, 800, 400);\n&lt;/script&gt;</code></pre></div>`,

    "SVG inline (<svg> e <path>)": `
        <p>O SVG (Scalable Vector Graphics) é uma tecnologia de imagem que permite criar gráficos vetoriais diretamente dentro do código HTML. Diferente de imagens PNG ou JPG que são formadas por pixels, os SVGs não perdem qualidade ao serem ampliados, pois são desenhados através de fórmulas matemáticas. São perfeitos para criar interfaces futuristas, miras de armas e ícones de inventário.</p>
        <p>Usado de forma inline (direto no HTML), o desenvolvedor pode alterar a cor, o tamanho e a espessura da linha do desenho usando simples comandos de CSS ou JavaScript em tempo real. A tag principal abriga o <code>&lt;path&gt;</code>, que dita o caminho exato que a "caneta invisível" deve percorrer para desenhar o escudo ou a espada.</p>
        <p>O grande triunfo do SVG é a economia de banda. Ele substitui imagens pesadas por meras linhas de texto no código. Isso garante que o HUD do seu jogo carregue instantaneamente e permaneça afiado como uma navalha em monitores 4K ou nas telas pequenas e densas dos telemóveis de última geração.</p>
        <div class="code-block"><pre><code>&lt;svg width="100" height="100"&gt;\n    &lt;circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /&gt;\n&lt;/svg&gt;</code></pre></div>`,

    "Imagens Responsivas (<picture> e srcset)": `
        <p>As imagens responsivas resolvem um dos maiores dilemas da web: entregar o ficheiro certo para o ecrã certo. A tag <code>&lt;picture&gt;</code> e o atributo <code>srcset</code> atuam como um cérebro que analisa o dispositivo do jogador e decide qual versão de um sprite ou ecrã de carregamento deve descarregar do servidor.</p>
        <p>Em vez de forçar um smartphone a descarregar um fundo de ecrã gigante em 4K (o que esgotaria os dados móveis e a memória RAM), o desenvolvedor fornece três ou quatro opções da mesma imagem. O navegador avalia a largura do ecrã e escolhe silenciosamente a versão mais leve e adequada para aquele momento específico.</p>
        <p>Isso eleva a otimização de jogos em HTML5 para outro patamar. Reduz o tempo de "Loading" para os jogadores mobile, diminui os engasgos (stuttering) causados pela descompressão de imagens gigantes e garante que a performance do seu projeto se mantenha estável numa vasta gama de hardwares diferentes.</p>
        <div class="code-block"><pre><code>&lt;picture&gt;\n  &lt;source media="(max-width: 600px)" srcset="fase1-mobile.png"&gt;\n  &lt;source media="(min-width: 601px)" srcset="fase1-pc.png"&gt;\n  &lt;img src="fase1-pc.png" alt="Cenário de Fundo"&gt;\n&lt;/picture&gt;</code></pre></div>`,

    "Áudios Avançados (Atributos e Eventos de <audio>)": `
        <p>A tag <code>&lt;audio&gt;</code> libertou os desenvolvedores da dependência de plugins antigos como o Flash. Ela permite injetar efeitos sonoros (SFX) e bandas sonoras épicas diretamente no motor do jogo com suporte nativo em todos os navegadores. Atributos embutidos como <code>loop</code> e <code>autoplay</code> oferecem um controlo limpo da sonorização de fundo logo no arranque do nível.</p>
        <p>No desenvolvimento avançado, os sons são desatrelados da interface HTML e controlados estritamente pelo JavaScript. É possível ter múltiplos canais de áudio ocultos a rodar simultaneamente: um para os passos do personagem, outro para o vento do cenário e outro para os disparos das armas, sem que um interrompa o outro.</p>
        <p>A imersão sonora é metade da experiência de um jogo. Dominar os eventos da tag áudio (como saber o exato milissegundo em que uma música terminou para iniciar a faixa do boss final) garante transições perfeitas, feedback tátil nas ações do jogador e um polimento digno de estúdios AAA no teu projeto web.</p>
        <div class="code-block"><pre><code>&lt;audio id="musicaBoss" loop preload="auto"&gt;\n  &lt;source src="temaFinal.mp3" type="audio/mpeg"&gt;\n&lt;/audio&gt;</code></pre></div>`,

    "Pré-carregamento de Assets (preload e prefetch)": `
        <p>O pré-carregamento é a técnica secreta para acabar com os ecrãs pretos e modelos invisíveis no início de uma fase. Usando as diretrizes <code>preload</code> e <code>prefetch</code> dentro da tag <code>&lt;head&gt;</code>, o desenvolvedor ordena ao navegador que baixe de forma agressiva e antecipada os assets (texturas, sons, fontes) essenciais antes de construir o resto da página.</p>
        <p>O <code>preload</code> é usado para a fase atual (ex: baixar a spritesheet do herói com urgência máxima). O <code>prefetch</code> é uma técnica mais subtil: ele baixa os ficheiros da fase 2 enquanto o jogador ainda está a jogar a fase 1, aproveitando a internet ociosa nos bastidores para que a transição de níveis seja absolutamente instantânea.</p>
        <p>Esta arquitetura garante que a experiência lúdica nunca seja interrompida por quebras de download. Manter os ficheiros pesados já alocados no cache da máquina antes que a lógica de física precisa deles é o que separa um jogo web amador de uma verdadeira aplicação gráfica profissional.</p>
        <div class="code-block"><pre><code>&lt;head&gt;\n&lt;link rel="preload" href="spritesheet.png" as="image"&gt;\n&lt;link rel="preload" href="explosao.mp3" as="audio"&gt;\n&lt;/head&gt;</code></pre></div>`,

    "Iframe Avançado (<iframe> e Sandbox)": `
        <p>A tag <code>&lt;iframe&gt;</code> atua como uma "janela" que permite carregar outra página web inteiramente diferente dentro do teu projeto HTML principal. No ecossistema de jogos, é muito utilizada para integrar mini-jogos independentes, portais de classificação global (Leaderboards) externos ou sistemas de anúncios, mantendo as engrenagens visuais perfeitamente separadas.</p>
        <p>Para garantir que o código que corre dentro do Iframe não interfira, trave ou roube variáveis do jogo principal, utiliza-se o poderoso atributo <code>sandbox</code>. Ele engaiola a execução secundária, bloqueando alertas pop-up intrusivos, impedindo o acesso ao armazenamento local principal e travando redirecionamentos furtivos.</p>
        <p>Dominar os Iframes isolados permite que o teu jogo sirva como um "Hub" ou "Arcade Virtual" seguro. Podes hospedar dezenas de experiências secundárias sem o medo de que um erro de sintaxe noutro ficheiro contamine ou quebre a estabilidade da tua página mestre.</p>
        <div class="code-block"><pre><code>&lt;iframe \n  src="portalRanking.html"\n  width="400"\n  height="600"\n  sandbox="allow-scripts"&gt;\n&lt;/iframe&gt;</code></pre></div>`,

    "Manipulação de Templates (<template> e <slot>)": `
        <p>A tag fantasma <code>&lt;template&gt;</code> é uma estrutura HTML revolucionária que é lida pelo navegador, mas que não é desenhada no ecrã. Ela serve como um "molde" ou carimbo. O Javascript apropria-se deste molde e duplica-o centenas de vezes de forma otimizada para popular a interface em tempo real.</p>
        <p>Se o teu herói abrir um baú com 50 itens diferentes, escrever 50 blocos de código manual para cada cartão de item seria terrível. Com o template, escreves o design da caixa do item apenas uma vez. O JS clona esse molde, preenche os <code>&lt;slot&gt;</code> dinâmicos com o nome e a imagem correta da poção, e injeta tudo na grelha do inventário num abrir e fechar de olhos.</p>
        <p>Esta tecnologia fundamenta o design moderno baseado em componentes. Reduz drasticamente o peso do ficheiro HTML base, mantém o código impecavelmente limpo e transfere a responsabilidade da criação massiva de interfaces repetitivas para o motor lógico, onde deve estar.</p>
        <div class="code-block"><pre><code>&lt;template id="moldeInimigo"&gt;\n  &lt;div class="inimigo-card"&gt;\n    &lt;h3 class="nome"&gt;&lt;/h3&gt;\n    &lt;p class="vida"&gt;&lt;/p&gt;\n  &lt;/div&gt;\n&lt;/template&gt;</code></pre></div>`,

    "Armazenamento no Navegador (O papel técnico do HTML5)": `
        <p>O HTML5 abriu as portas para que os navegadores funcionassem como verdadeiros discos rígidos graças ao LocalStorage e ao SessionStorage. Estas APIs permitem gravar ficheiros de texto (JSON) na própria máquina do utilizador. É esta magia que permite salvar o progresso do jogador sem necessitar de servidores em nuvem ou bancos de dados caros.</p>
        <p>O <code>localStorage</code> grava os dados de forma permanente. Se o jogador fechar a aba, desligar o PC e voltar no dia seguinte, os seus níveis desbloqueados, configurações de volume e inventário continuarão exatamente onde os deixou. Já o <code>sessionStorage</code> é volátil, ideal para guardar estados rápidos de transição entre ecrãs (como o Loading) que se limpam ao fechar o jogo.</p>
        <p>Abraçar a persistência local é o primeiro grande passo para criar jogos Single-Player comerciais completos na web. Protege a experiência do jogador contra quedas de internet e proporciona a conveniência de jogar offline sem limites de infraestrutura.</p>
        <div class="code-block"><pre><code>&lt;script&gt;\n// Salvando progresso\nlocalStorage.setItem("ultimoNivel", "Fase 5");\n\n// Carregando ao reabrir o jogo\nconst save = localStorage.getItem("ultimoNivel");\nconsole.log("Bem-vindo de volta à: " + save);\n&lt;/script&gt;</code></pre></div>`,

    "Componentes Web Nativos (Custom Elements)": `
        <p>Os Web Components Nativos permitem ao desenvolvedor criar as suas próprias tags HTML personalizadas. Em vez de usar milhares de <code>&lt;div&gt;</code> difíceis de ler, podes criar uma tag real chamada <code>&lt;barra-vida&gt;</code> ou <code>&lt;menu-inventario&gt;</code>. A engine passa a reconhecer e a respeitar esses novos vocabulários.</p>
        <p>Através de Classes JavaScript que herdam o comportamento do HTMLElement padrão, podes acoplar lógicas exclusivas e estilos CSS trancados (Shadow DOM) que nunca vão interagir mal ou quebrar o resto do design da página. O componente ganha vida e gere a sua própria autonomia mecânica.</p>
        <p>Isolar sistemas desta forma é a garantia de que o projeto pode crescer infinitamente sem desmoronar. Um menu de atributos customizado, por exemplo, pode ser partilhado e usado em dez páginas diferentes do jogo mantendo a mesma estabilidade intocável.</p>
        <div class="code-block"><pre><code>&lt;vida-heroi&gt;&lt;/vida-heroi&gt;\n\n&lt;script&gt;\nclass VidaHeroi extends HTMLElement {\n  connectedCallback() {\n    this.innerHTML = "&lt;div style='color:red;'&gt;Vida [100/100]&lt;/div&gt;";\n  }\n}\ncustomElements.define("vida-heroi", VidaHeroi);\n&lt;/script&gt;</code></pre></div>`,

    "Acessibilidade de Teclado Avançada (tabindex e Foco)": `
        <p>A acessibilidade técnica é o que garante que interfaces complexas, como ecrãs de lojas de itens ou inventários densos, possam ser navegadas totalmente sem o uso do rato. O atributo <code>tabindex</code> dita a ordem rigorosa em que o "foco" viaja quando o utilizador pressiona a tecla TAB ou as setas direcionais.</p>
        <p>No calor de um jogo, o jogador pode querer usar atalhos rápidos para vender poções. Gerir o foco (via <code>element.focus()</code>) empurra a atenção da página exatamente para a espada que o utilizador acabou de apanhar. Com o auxílio visual do CSS (<code>:focus</code>), cria-se a sensação limpa de caixas destacadas a brilhar, típicas dos grandes RPGs de consolas.</p>
        <p>Implementar caminhos de tabulação eleva a usabilidade para padrões ouro. Permite que jogadores com deficiências motoras desfrutem da experiência, e entrega fluidez e responsividade imediata para quem domina os atalhos ágeis no teclado.</p>
        <div class="code-block"><pre><code>&lt;button tabindex="1"&gt;Iniciar Partida&lt;/button&gt;\n&lt;button tabindex="2"&gt;Carregar Save&lt;/button&gt;\n&lt;button tabindex="3"&gt;Opções&lt;/button&gt;\n\n&lt;style&gt;\nbutton:focus { border: 2px solid cyan; transform: scale(1.1); }\n&lt;/style&gt;</code></pre></div>`
};
