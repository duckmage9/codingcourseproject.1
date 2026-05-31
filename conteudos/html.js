window.conteudosHTML = {
    // ==========================================
    // === NÍVEL INICIANTE ===
    // ==========================================

    "Conceito de Tags": `
        <p>As tags são a base da linguagem HTML e funcionam como comandos que informam ao navegador como o conteúdo deve ser estruturado. No desenvolvimento de jogos, elas são usadas para definir desde a área onde o jogo será exibido até os botões de menu e textos de interface. Cada tag é envolvida por colchetes angulares.</p>
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
        <p>As meta tags ficam localizadas dentro do cabeçalho do documento e fornecem instruções técnicas essenciais para o navegador. A tag <code>charset="UTF-8"</code>, por exemplo, é obrigatória para que caracteres especiais e acentos funcionem corretamente sem erros de exibição.</p>
        <p>Outra meta tag crucial para jogos web é a <code>viewport</code>. Ela configura como a página deve se comportar em telas de celulares e tablets, garantindo que o jogo não fique com zoom exagerado ou minúsculo ao ser aberto em dispositivos diferentes.</p>
        <p>Embora sejam invisíveis para o jogador, essas tags ditam a compatibilidade do projeto. Elas também são usadas para definir a descrição do site que aparece em buscas do Google, ajudando na divulgação do jogo para novos usuários.</p>
        <div class="code-block"><pre><code>&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre></div>`,

    "Atributos e IDs": `
        <p>Atributos são propriedades que adicionamos às tags para modificar seu comportamento ou identificá-las. O atributo <code>id</code> é um dos mais importantes: ele funciona como um nome exclusivo para um elemento, permitindo que o JavaScript o encontre para alterar a vida ou a posição de um objeto.</p>
        <p>Enquanto o <code>id</code> deve ser único, o atributo <code>class</code> pode ser usado em vários elementos ao mesmo tempo. Isso permite que você aplique o mesmo estilo visual de "botão de menu" ou "card de item" para diversos componentes simultaneamente usando CSS.</p>
        <p>Entender a diferença entre IDs e classes é vital para a organização do código. IDs são usados para elementos de controle, enquanto classes são usadas para elementos de design que se repetem na interface.</p>
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
        <p>Dentro de cada lista, usamos a tag <code>&lt;li&gt;</code> para cada item individual. Em jogos, essas tags são perfeitas para estruturar inventários, listas de missões ativas, logs de combate ou tabelas de classificação simples.</p>
        <p>O uso de listas facilita muito a estilização com CSS, permitindo criar menus horizontais ou verticais de forma limpa. Elas também são semanticamente corretas para leitores de tela e robôs de busca.</p>
        <div class="code-block"><pre><code>&lt;ul&gt;
    &lt;li&gt;Poção de Cura&lt;/li&gt;
    &lt;li&gt;Espada de Ferro&lt;/li&gt;
&lt;/ul&gt;</code></pre></div>`,

    "Inserção de Mídia": `
        <p>As tags de mídia, como <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code> e <code>&lt;video&gt;</code>, permitem inserir arquivos visuais e sonoros no projeto. A tag de imagem é especial pois não precisa de fechamento e utiliza o atributo <code>src</code> para localizar o arquivo do sprite ou background.</p>
        <p>Sempre devemos utilizar o atributo <code>alt</code> em imagens. Ele fornece uma descrição textual que aparece caso a imagem falhe ao carregar e ajuda jogadores com deficiência visual a entenderem os cenários e UI.</p>
        <p>Para áudio e vídeo, o HTML5 oferece controles nativos. No entanto, em jogos, geralmente ocultamos esses controles visuais do HTML e comandamos o som direto pelo JavaScript para tocar explosões instantaneamente.</p>
        <div class="code-block"><pre><code>&lt;img src="hero.png" alt="Herói do Jogo"&gt;
&lt;audio src="tema.mp3" controls&gt;&lt;/audio&gt;</code></pre></div>`,

    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> é um container genérico sem significado semântico, mas que serve para agrupar outros elementos. Ela funciona como uma "caixa" invisível que ajuda a organizar o layout do jogo em blocos separados, facilitando a vida do CSS.</p>
        <p>Por exemplo, você pode colocar toda a interface do usuário (HUD) dentro de uma div chamada "hud-container". Isso permite mover, ocultar ou alterar todos os elementos da interface de uma só vez alterando uma classe.</p>
        <p>A div continua sendo a ferramenta mais versátil para estruturar layouts complexos e criar camadas sobrepostas, como menus que aparecem por cima da tela de Canvas ao pausar a gameplay.</p>
        <div class="code-block"><pre><code>&lt;div class="menu-pausa"&gt;
    &lt;button&gt;Continuar&lt;/button&gt;
    &lt;button&gt;Sair&lt;/button&gt;
&lt;/div&gt;</code></pre></div>`,

    "Comentários de Código": `
        <p>Comentários no HTML são trechos de texto que não são processados pelo navegador e não aparecem na tela para o jogador. Eles são feitos usando uma sintaxe especial e servem para o programador organizar as notas lógicas.</p>
        <p>Em projetos grandes, os comentários marcam onde começa e termina cada seção da interface. Isso ajuda muito quando a equipe ou você retornar ao código meses depois procurando exatamente onde estava a div do inventário.</p>
        <p>Eles ativam o desativamento rápido ("comentar código") temporário para testar partes visuais ocultando as antigas sem excluí-las brutalmente do seu documento de código e perder trabalho suado feito antes.</p>
        <div class="code-block"><pre><code>&lt;!-- Início da Seção de Inventário --&gt;
&lt;div id="inv"&gt;&lt;/div&gt;
&lt;!-- Fim da Seção de Inventário --&gt;</code></pre></div>`,

    // ==========================================
    // === NÍVEL INTERMEDIÁRIO ===
    // ==========================================

    "Elementos Semânticos (Header, Nav, Footer)": `
        <p>Tags semânticas como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> e <code>&lt;footer&gt;</code> indicam claramente ao navegador qual é a função de cada parte da página. O header costuma conter o título e logo do jogo, o nav os links e o footer o copyright.</p>
        <p>Diferente de usar apenas div, essas tags ajudam motores de busca e ferramentas de acessibilidade a entenderem a estrutura do site. Em portais de jogos pesados isso melhora o ranqueamento SEO absurdamente.</p>
        <p>Prática profissional absoluta: funcionam visualmente como containers comuns mas entregam a máquina uma clareza hierárquica e limpa do escopo arquitetural da página lida em segundos sem erro interpretativo semântico.</p>
        <div class="code-block"><pre><code>&lt;header&gt;
    &lt;h1&gt;Dragon Quest&lt;/h1&gt;
&lt;/header&gt;</code></pre></div>`,

    "Seções de Conteúdo (Section, Article, Aside)": `
        <p>As tags <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> e <code>&lt;aside&gt;</code> dividem o conteúdo de forma temática e pontual. Section agrupa assuntos, article o conteúdo fechado autossuficiente como novidades do Patch de Atualização, Aside a coluna lateral para Leaderboard.</p>
        <p>Na página do perfil de jogador, uma section carrega as abas de conquistas do usuário e na lateral direta flutua um aside apontando lista dos amigos presentes simultaneamente no jogo baseados por hierarquia pura.</p>
        <p>Divisão e componentização front-end: o JavaScript opera perfeitamente com classes dessas seções bloqueadas e o CSS destrincha o comportamento responsivo perfeitamente quando a tela encolhe para um celular moderno.</p>
        <div class="code-block"><pre><code>&lt;section id="conquistas"&gt;
    &lt;article&gt;Mestre das Sombras&lt;/article&gt;
&lt;/section&gt;</code></pre></div>`,

    "Estrutura de Tabelas Simples (Table, Tr, Td)": `
        <p>Tabelas organizam dados pesados ordenados de linhas e colunas perfeitas. <code>&lt;table&gt;</code> abraça o contêiner e a <code>&lt;tr&gt;</code> (table row) empilha linhas sequenciais horizontalmente, enchendo por <code>&lt;td&gt;</code> de dados cruzados isolados e limpos.</p>
        <p>Ideais absolutos para mostrar de forma elegante painel de armamentos na sua loja do mercador RPG onde exibe nomes e preços lado a lado em exibições tabeladas sem desmoronar colunas e sem vazamento lateral visual de tamanhos de imagens de baús contidos nelas.</p>
        <p>Substituíram antigas gambiarras onde o programador ficava alinhando espaçamentos vazios a mão para deixar os quadros bonitos de status estatísticos quebravam imediatamente com mudanças e responsividades alheias de tela da aba no navegador do PC alheio ou do dispositivo.</p>
        <div class="code-block"><pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Espada Longa&lt;/td&gt;
        &lt;td&gt;Dano: 15&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre></div>`,

    "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": `
        <p>Para tabelas complexas do Leaderboard (Ranque Mundial), agrupamos Thead isolando "Rank, Nome e Kills" flutuando fixo em cima enquanto o corpo (Tbody) carrega os cem resultados dos jogadores que participaram em lista gigante infinita.</p>
        <p>Desta forma visual impecável a barra de título da coluna não some se você fizer o scroll (a rodagem pra baixo com o mouse do conteúdo em listas infindas). Mantendo o foco do jogador entendendo cada número da coluna que rolar pelos seus olhos nas consultas competitivas sem confundir vida com estamina.</p>
        <p>O Tfoot serve como base do contêiner onde é posicionado sua própria contagem isolada, mantendo o resumo da tabela trancado sempre como guia rápido na borda final inferior, elevando o primor logístico sem depender de complexidades em JS.</p>
        <div class="code-block"><pre><code>&lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Posição&lt;/th&gt;&lt;th&gt;Kills&lt;/th&gt;&lt;/tr&gt;
&lt;/thead&gt;</code></pre></div>`,

    "Formulários Básicos (Form, Input, Label)": `
        <p>O formulário é o pilar vital conectivo entre ação do jogador na tela e os servidores em nuvem aguardando a chegada da ação. Agrupados dentro de form, imputamos dados onde o teclado injeta e nomeados por rótulos (labels) para a leitura visual semântica.</p>
        <p>Label conectado por for: essa tecnologia permite clicar na palavra puramente de texto descritivo e ter instantaneamente e sem uso de programação, a seleção mágica automática focar no quadrado branco piscando pronto a aguardar e devorar sua digitação no exato campo correto e seguro referenciado por ele para comodidade total móvel.</p>
        <p>Usado fundamentalmente desde o Cadastro com Senha, passando até campos de códigos Promo do jogo resgatando moedas, até caixas de chat limpos sem risco de enviar falhas se o usuário clicar antes nos arredores.</p>
        <div class="code-block"><pre><code>&lt;form&gt;
    &lt;label&gt;Tag do Herói:&lt;/label&gt;
    &lt;input type="text"&gt;
&lt;/form&gt;</code></pre></div>`,

    "Tipos de Input (Text, Password, Email, Button)": `
        <p>A mutação de comportamento do Input opera alterando apenas um simples termo tipo: text abraça parágrafos; password oculta cada caractere instantaneamente por pontos cegos provendo blindagem; email força o mobile teclado erguer a tecla do "@" ao jogador focando-o com praticidade.</p>
        <p>O navegador sabe adaptar interfaces pelo type escolhido por você melhorando a resposta visual absurdamente da entrada tátil ao mobile provendo conforto sem programação massiva e maçante por debaixo dos panos re-trabalhando controles já entregues perfeitamente pelos browsers e sistemas integrados no mercado inteiro mundialmente atestados pelos criadores originais.</p>
        <p>Botão nativo e Input Submits reagem aos Enter disparando submits (eventos primordiais de disparo ao servidor acionando scripts para conectar ou banir falhas antes de subir a ação pro jogo real via base local) economizando a montagem dos botões HTML que não fossem feitos na engenharia correta estipulada global para essa missão.</p>
        <div class="code-block"><pre><code>&lt;input type="password" placeholder="Senha Forte"&gt;
&lt;input type="submit" value="Iniciar Login"&gt;</code></pre></div>`,

    "Seleções em Formulários (Radio, Checkbox, Select)": `
        <p>Decisões dicotômicas para o sistema de preferências de menu do usuário! Checkboxes formam painéis de multipla marcação ideais marcando o menu habilitando Efeitos de "Sangue", "Vibração de Tela" em conjunto. Radios barram escolhendo apenas "Servidor EUA" travando forçadamente os outros imediatamente pela mesma assinatura nome.</p>
        <p>Select engendra Dropdowns imensos com opções verticais (Rolagem de opções caindo sob o clique) guardando centenas de nações escolhendo línguas das legendas do jogo economizando telas e layouts condensando 50 linhas ocultamente num click de apenas um quadrado ocupando míseros dois centímetros da frente visual inteira polida em sua formatação limpa final sem poluir o Menu Principal estético.</p>
        <p>Organizar hierarquia fluida na tela do menu antes da primeira jogada inicial e sem confusão depende intrinsecamente do domínio dos formulários e de domar estes botões sem depender do Canvas para desenha-los o que consumiria matemática, física computacional e vetores em vez das próprias etiquetas web leves.</p>
        <div class="code-block"><pre><code>&lt;select&gt;
    &lt;option&gt;Espanhol&lt;/option&gt;
    &lt;option&gt;Português BR&lt;/option&gt;
&lt;/select&gt;</code></pre></div>`,

    "Validação Nativa de Formulários": `
        <p>O poder HTML moderno desvia lixos e dados estúpidos batendo os portões antes do envio ser validado e passar pelo servidor JavaScript processador de requisições de carga alta, aliviando o fluxo e barateando sua lógica. Os atributos puros Required cravam proibições, obrigando dados no envio de formulários sob pena de mensagens alertas pop-up nativas pulando aos olhos dos distraídos do teclado solto.</p>
        <p>Reguladores paramétricos de mínimo (minlength) controlam que criações de Heróis não tenham menos de 3 letras banindo de existirem contas chamadas somente de "A" estragando o visual dos balões de falas no mapa. Ou que pontos de atributos limite cheguem bloqueados ao forçar o teto máximo daquele status específico (max="99").</p>
        <p>Isso poupou dezenas de if/else gigantes da engenharia clássica programática no passado onde varríamos manualmente e devolvíamos dezenas de códigos dolorosos de interações em vez de confiar nos testes automáticos seguros validados incrustados de nascença da interface base para desenvolvedores de qualidade focar na física ao invés do tratamento de burradas fúteis nos campos do chat e perfis.</p>
        <div class="code-block"><pre><code>&lt;input type="text" required minlength="4" maxlength="12"&gt;</code></pre></div>`,

    "Introdução à Acessibilidade (Atributos ARIA)": `
        <p>ARIA injeta contextos mentais onde as luzes e desenhos faltam (Para softwares leitores de ecrã dos jogadores PcDs) com acessibilidade visual. Injeta comportamentos invisíveis descrevendo ícones soltos informando qual arma ou escudo aquele simples desenho PNG colorido significa verbalmente se passado a leitura na interface complexa da partida via máquina sem falhas.</p>
        <p>Muitos MMOS web e interfaces de botões customizadas onde "um circulo desenhado" assume lugar de um botão original devem usar role="button" injetando assim em sua arquitetura de leitura que se trata e funciona igual um clique nativo ativando as teclas da navegação por "Tab" do jogo com facilidade sem perdas responsivas lúdicas aos cegos.</p>
        <p>Tornar sua aplicação ética e universalmente apta, polida no esmero da empatia construtiva aprimora infinitamente qualidade. Sem eles ferramentas emudecem ante a beleza abstrata de seus desenhos sem poder verbalizar ao ouvinte e as mecânicas das interfaces tornam-se paredes intransponíveis de jogar sem o suporte de mouse perfeito no centro da tela.</p>
        <div class="code-block"><pre><code>&lt;div role="progressbar" aria-valuenow="50" aria-valuemax="100"&gt;&lt;/div&gt;</code></pre></div>`,

    "A tag <dialog> (Modais Nativos)": `
        <p>Nascida para ceifar centenas de montagens pesadas e bibliotecas imensas embutidas com truques (Gambiarra de Z-index
