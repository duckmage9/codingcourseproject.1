// 1. Definição dos 10 tópicos de HTML Iniciante
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

// 2. Conteúdo detalhado (Estilo Gamedev)
const conteudosManuais = {
    "Conceito de Tags": `
        <p>As <strong>Tags</strong> servem para dar mais informações sobre o código para o programa ou navegador. Elas funcionam como etiquetas que classificam cada elemento. As tags são abertas com o sinal de menor e fechadas com o sinal de maior. Na grande maioria das vezes, você precisará abrir uma tag no início do elemento e fechá-la no final usando uma barra, garantindo que o navegador saiba exatamente onde aquela instrução específica termina e onde a próxima começa dentro do fluxo do seu documento que está sendo processado em tempo real.</p>
        <p>No desenvolvimento de jogos para web, as tags são fundamentais para criar a interface e a fundação do projeto. Elas classificam cada elemento visual, permitindo que o navegador entenda o que é um botão de comando, um título de menu ou uma descrição de item no inventário. Sem o uso correto das tags, o seu código se tornaria apenas um amontoado de texto sem sentido, impossibilitando que o motor do navegador processe as ordens de renderização necessárias para exibir os gráficos e textos que compõem a experiência do jogador durante toda a sua jornada virtual na aplicação.</p>
        <p>Imagine que você está montando um manual de instruções para um robô: as tags seriam as marcações que dizem ao robô o que é uma peça vital e o que é apenas um detalhe estético. Ao utilizar tags como botões ou divisões, você prepara o terreno para que o JavaScript consiga identificar esses objetos mais tarde através da árvore de elementos. É essa marcação semântica e estrutural que permite a interatividade, pois cada etiqueta HTML atua como um endereço fixo que o código de lógica usará para modificar o estado interno do jogo, como diminuir a vida ou alterar a cor de um ícone de status dinamicamente.</p>
    `,
    "Estrutura Global": `
        <p>As <strong>Tags de Estrutura</strong> organizam o seu código em áreas lógicas e fundamentais. Elas separam cada parte do documento e informam ao navegador o que cada seção está fazendo e que tipo de dados ela armazena no momento. A estrutura básica começa sempre com a declaração do tipo de documento, seguida pela abertura da tag principal que envelopa todo o projeto. Manter essa hierarquia é crucial para que o navegador não se perca ao tentar interpretar as milhares de linhas de código que um sistema de jogo complexo pode vir a ter quando você adicionar mais funcionalidades e mecânicas.</p>
        <p>As duas divisões mais importantes em qualquer projeto são a <code>&lt;head&gt;</code> e a <code>&lt;body&gt;</code>. A área da Head serve como o cérebro invisível do jogo, guardando links para fontes externas, arquivos de estilos CSS e metadados de configuração vitais. Já a área da Body é o palco principal onde o espetáculo realmente acontece, sendo o local onde inserimos tudo o que o jogador verá na tela, desde o elemento canvas onde o personagem se move até os botões da interface de usuário (UI) que respondem aos cliques e toques realizados durante as sessões intensas de gameplay.</p>
        <p>Ao construir essa base sólida, você garante que o jogo seja carregado de forma eficiente e extremamente organizada em qualquer navegador moderno. Uma estrutura global bem definida evita conflitos de renderização e erros de carregamento que poderiam quebrar a imersão ou a experiência do usuário final. Pense na estrutura HTML como a planta arquitetônica detalhada de um prédio: se os fundamentos não estiverem no lugar certo, as paredes de JavaScript e o acabamento de CSS não terão suporte para se sustentar. É através desta organização inicial que o navegador estabelece o DOM que será manipulado em tempo real.</p>
    `,
    "Tags de Texto": `
        <p>As tags de texto como <code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code> e <code>&lt;p&gt;</code> são a voz narrativa do seu jogo. Elas permitem que você apresente diálogos de personagens, sistemas de pontuação e instruções de missões de forma totalmente legível e estruturada. Usar a hierarquia correta de títulos é vital não apenas para a organização visual, mas também para a acessibilidade técnica, permitindo que leitores de tela e outros sistemas entendam qual informação é mais importante dentro da interface, como o nome do jogo ou os alertas críticos de fim de partida ou de erro de conexão.</p>
        <p>Em um contexto profissional de Game Design, o texto é uma ferramenta de imersão narrativa extremamente poderosa. Tags de parágrafo bem distribuídas podem contar a história do mundo através de livros encontrados nos cenários ou logs de missões detalhados no menu principal de opções. Além disso, tags de destaque ajudam a enfatizar termos importantes para o jogador, como nomes de itens lendários, localizações secretas ou dicas cruciais para resolver um quebra-cabeça. A formatação correta do texto garante que o jogador processe as informações rapidamente sem se sentir sobrecarregado por blocos densos de informação.</p>
        <p>Ao utilizar tags de texto, você também facilita a estilização futura com CSS, permitindo que todos os diálogos tenham uma fonte específica e todos os títulos tenham uma cor neon ou um brilho especial. Cada tag de texto atua como um recipiente independente que pode ser animado ou alterado dinamicamente via código de programação. Se você deseja que a pontuação brilhe quando o jogador ganha pontos, ter essa informação dentro de uma tag específica é o primeiro passo para conseguir aplicar esse efeito visual de forma isolada sem afetar o resto do texto informativo do site do jogo.</p>
    `,
    "Meta Tags Técnicas": `
        <p>As <strong>Meta Tags</strong> operam nos bastidores da sua aplicação e são localizadas exclusivamente dentro da seção Head do seu arquivo HTML. Elas não são visíveis para o jogador comum durante a partida, mas são essenciais para que o navegador saiba como lidar com o jogo em diferentes ambientes e sistemas operacionais. A meta tag de charset, por exemplo, garante que caracteres especiais e acentos em português apareçam corretamente na tela, evitando que seus diálogos de jogo fiquem cheios de símbolos estranhos e erros de codificação que prejudicam a qualidade visual.</p>
        <p>Uma das meta tags mais críticas para desenvolvedores web modernos é a de viewport, que controla a escala do projeto. Ela controla como o jogo é exibido em dispositivos móveis, como smartphones e tablets, ajustando a largura da tela e o nível de zoom inicial do navegador. Sem essa configuração correta, o seu jogo pode aparecer minúsculo em um celular ou com as bordas totalmente cortadas, o que destruiria completamente a jogabilidade e a usabilidade. Ao configurar o viewport, você assegura que a interface de toque e os botões do jogo sejam dimensionados de forma proporcional ao dispositivo.</p>
        <p>Além das configurações de tela, existem meta tags voltadas para SEO e integração com redes sociais que ajudam muito na divulgação do seu jogo online. Elas definem a descrição que aparece nos resultados de busca do Google e a imagem em destaque que surge quando alguém compartilha o link do seu jogo em comunidades como o Discord ou o WhatsApp. Investir tempo na configuração correta dessas tags invisíveis é o que diferencia um projeto amador de um produto de jogo polido, pois garante que a primeira impressão técnica do navegador e dos sistemas externos seja de total profissionalismo.</p>
    `,
    "Atributos e IDs": `
        <p><strong>Atributos</strong> são propriedades especiais inseridas dentro das tags de abertura para modificar seu comportamento padrão ou fornecer identificação. O atributo <code>id</code> funciona exatamente como o CPF de um elemento: ele deve ser único em toda a página do seu projeto. Em um jogo, você daria um ID único para a barra de vida do herói e outro ID diferente para a barra de vida do inimigo. Isso permite que, no JavaScript, você envie comandos específicos para reduzir apenas a vida do alvo atingido, sem afetar acidentalmente outros elementos visuais.</p>
        <p>Outro atributo muito comum e útil é a <code>class</code>, que funciona como um grupo, categoria ou família de elementos. Você pode criar uma classe chamada "item-coletavel" e aplicá-la em dezenas de tags diferentes de imagens que representam itens no mapa. Enquanto o ID é para um indivíduo único e específico, a classe é para um exército de elementos que compartilham as mesmas características visuais e estilos. Isso economiza centenas de linhas de código, pois você pode dizer ao CSS que todos os elementos da classe devem ter uma borda dourada e brilhar suavemente.</p>
        <p>Entender a diferença entre atributos de identificação e atributos funcionais é o que permite criar mecânicas complexas e escaláveis. Atributos como <code>src</code> para imagens ou <code>href</code> para links dizem ao elemento de onde ele deve buscar os dados externos necessários para funcionar. No desenvolvimento de jogos, você pode até criar atributos personalizados usando o prefixo "data-" para guardar informações secretas dentro da tag, como o valor de dano que aquela arma específica causa. Dominar o uso de atributos transforma tags HTML estáticas em objetos de jogo inteligentes e funcionais.</p>
    `,
    "Listas de Inventário": `
        <p>As listas em HTML, criadas com as tags <code>&lt;ul&gt;</code> para listas não ordenadas e <code>&lt;ol&gt;</code> para listas numeradas, são perfeitas para sistemas de RPG e menus. Cada item da lista é definido individualmente pela tag <code>&lt;li&gt;</code>, criando uma estrutura organizada para exibir os itens que o jogador coletou durante a aventura. Usar listas garante que o navegador agrupe esses elementos de forma lógica e semântica, facilitando a navegação tanto visual quanto por teclado, o que é um padrão de organização essencial para qualquer menu de opções moderno.</p>
        <p>No desenvolvimento de interfaces de jogo, as listas permitem que você gere conteúdo de forma totalmente dinâmica conforme o progresso do jogador. Se o herói ganha uma nova poção ou equipamento, o JavaScript pode simplesmente adicionar um novo elemento "li" dentro da sua lista de inventário já existente no código. Essa estrutura de árvore facilita muito a manutenção e atualização do código, pois você sabe exatamente onde a coleção de itens começa e termina. Além disso, remover um item quando ele é consumido ou vendido torna-se uma tarefa simples e segura de manipulação.</p>
        <p>Visualmente, as listas podem ser totalmente transformadas com o uso de CSS para não parecerem listas de texto comuns com círculos. Você pode remover os marcadores padrão e transformar cada item em um slot quadrado com um ícone de item e um fundo personalizado. Ao usar a semântica correta de lista, você mantém o código limpo e compreensível para outros desenvolvedores da sua equipe. É muito melhor ter um inventário estruturado como uma lista real do que ter dezenas de divisões soltas que dificultam a organização e podem causar bugs de posicionamento.</p>
    `,
    "Links e Navegação": `
        <p>A tag de link <code>&lt;a&gt;</code> é o portal fundamental que conecta seu jogo ao resto da rede ou a diferentes partes do próprio projeto. O atributo principal e obrigatório aqui é o <code>href</code>, que indica o endereço de destino para onde o jogador será enviado ao interagir com o elemento na tela. Em um menu principal de jogo, os links podem ser usados para levar o jogador para a página de créditos, para um manual de instruções externo ou até mesmo para o site oficial do desenvolvedor, servindo como a principal via de navegação externa.</p>
        <p>No desenvolvimento de jogos web, os links também podem ser usados para criar sistemas de navegação interna através do uso de âncoras. Você pode criar um link que, ao ser clicado, faz a tela deslizar suavemente para a seção de recordes (High Scores) ou para a loja de microtransações do jogo. Além disso, é perfeitamente possível configurar links que abrem em novas abas para não fechar a partida atual do jogador. Essa flexibilidade técnica é crucial para manter o usuário engajado no seu ecossistema, oferecendo informações adicionais sem interromper o fluxo da jogabilidade.</p>
        <p>Muitos desenvolvedores utilizam links de forma criativa dentro de interfaces narrativas, como em jogos de aventura baseados em texto ou RPGs de escolhas. Cada decisão do jogador pode ser um link estilizado que carrega um novo bloco de história ou altera variáveis globais do motor do jogo. Quando bem estilizados com CSS, os links perdem aquela aparência azul clássica e se tornam botões elegantes, portais mágicos ou opções de diálogo altamente interativas. Entender como o navegador processa o redirecionamento é fundamental para garantir uma experiência de usuário sem atritos.</p>
    `,
    "Inserção de Mídia": `
        <p>As tags <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code> e <code>&lt;video&gt;</code> são os motores reais de imersão visual e sonora dentro do padrão HTML moderno. A tag de imagem é usada exaustivamente para exibir sprites de personagens, fundos de cenário e todos os ícones da interface, exigindo sempre o atributo "src" para localização e o "alt" para descrição de acessibilidade. Sem o uso correto dessas tags, o seu jogo seria apenas uma tela de texto estática, perdendo todo o apelo visual e comercial que atrai e mantém a atenção dos jogadores modernos que buscam gráficos detalhados.</p>
        <p>O som é metade da experiência imersiva de qualquer jogo eletrônico, e as tags de áudio permitem inserir trilhas sonoras e efeitos de impacto de forma nativa e leve. Você pode configurar o áudio para tocar em loop infinito ou para iniciar apenas após um comando específico do jogador, como clicar no botão de "Novo Jogo". No desenvolvimento web, lidar com mídia requer atenção redobrada aos formatos de arquivo para garantir compatibilidade entre todos os navegadores. O uso correto dessas tags permite que o jogo tenha uma atmosfera única, transmitindo emoções através da música ambiente.</p>
        <p>Trabalhar com mídia no ambiente HTML exige um cuidado especial com a otimização de performance e o tempo de carregamento inicial. Imagens muito pesadas ou arquivos de áudio sem a compressão adequada podem fazer o jogo demorar muito para carregar, afastando o jogador por impaciência. Como desenvolvedor, seu papel é equilibrar a fidelidade visual e sonora com o tamanho total dos arquivos, usando atributos para controlar o pré-carregamento e o comportamento de exibição. Dominar a mídia é o passo final para transformar um protótipo técnico em um produto de entretenimento real.</p>
    `,
    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> é o elemento mais versátil, poderoso e utilizado na construção de layouts de jogos modernos na web. Ela funciona como uma caixa invisível que agrupa diversos outros elementos, permitindo que você organize partes inteiras da interface como se fossem blocos independentes. Em um projeto de jogo, você usaria uma Div para envelopar todo o sistema de HUD, outra para o menu de pausa e uma terceira para o container principal onde o canvas do jogo reside. Essa organização facilita muito a aplicação de estilos complexos e posicionamentos precisos com CSS.</p>
        <p>Além da óbvia organização visual, as Divs são os alvos primordiais para qualquer tipo de manipulação via lógica de JavaScript. Por ser um container genérico sem estilo padrão, você pode alterar o conteúdo interno de uma Div inteira com um único comando de script de forma muito rápida. Por exemplo, quando o jogador abre o menu de inventário, você pode injetar todo o código dos itens dentro de uma Div específica. Essa técnica de manipulação dinâmica é o que torna os jogos web modernos tão ágeis e responsivos, permitindo trocas de tela sem a necessidade de recarregar a página.</p>
        <p>Embora a tag Div não tenha um significado visual ou semântico próprio, ela é a base estrutural para quase todos os sistemas de design avançados. Ao aplicar bordas, sombras, gradientes e cores de fundo a uma Div, você consegue criar painéis de interface, janelas de diálogo flutuantes e molduras temáticas para o seu jogo. Aprender a aninhar Divs dentro de outras Divs de forma lógica é a habilidade que separa iniciantes de desenvolvedores front-end seniores. É essa estrutura de containers aninhados que mantém todos os elementos no seu devido lugar em qualquer resolução de tela.</p>
    `,
    "Comentários de Código": `
        <p>Comentários em HTML são trechos de texto que o navegador ignora completamente durante o processo de renderização, servindo apenas para os olhos do desenvolvedor humano. Eles são criados usando uma sintaxe específica que abre com sinal de menor e exclamação e fecha com traços duplos e o sinal de maior. O uso frequente de comentários é uma prática de higiene de código essencial e obrigatória em projetos profissionais, permitindo que você deixe notas explicativas sobre o funcionamento de partes complexas do código, facilitando muito a manutenção futura do seu projeto.</p>
        <p>Em projetos de jogos, onde os arquivos HTML e JavaScript podem crescer para milhares de linhas de código, os comentários funcionam como placas de sinalização em uma estrada. Você pode usar comentários para marcar claramente onde começam e terminam as seções do seu projeto, como a "Seção de Configurações de Áudio" ou o "Container da Loja In-Game". Isso ajuda a evitar que você ou um colega de equipe apague partes vitais do sistema por puro descuido. Além disso, comentários são perfeitos para desativar temporariamente funcionalidades durante a fase de testes e depuração.</p>
        <p>Aprender a comentar o seu código de forma inteligente e estratégica é uma das maiores marcas de maturidade de um programador. Comentários úteis não explicam o que o código está fazendo (isso o próprio código já diz), mas sim o motivo pelo qual aquela solução específica foi escolhida. Ao trabalhar em projetos colaborativos, os comentários são a principal ponte de comunicação entre os membros da equipe. Manter um código bem documentado e comentado garante que o desenvolvimento do seu jogo continue de forma fluida, segura e organizada, minimizando o tempo perdido com retrabalho.</p>
    `
};

// 3. Lógica de Navegação e Renderização
let currentTech = 'html';
let currentLevel = 'iniciante';

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('.main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    const btn = document.getElementById('btn-' + tech);
    if(btn) btn.classList.add('active-' + tech);
    renderEncGrid();
}

function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    const btn = document.getElementById('lvl-' + lvl);
    if(btn) btn.classList.add('active-lvl');
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
        card.onclick = () => {
            const content = conteudosManuais[topic] || "<p>Conteúdo em breve...</p>";
            openModal(topic, content);
        };
        grid.appendChild(card);
    });
}

// 4. Função Global para abrir Modal (Caso o core.js falhe)
function openModal(title, bodyHtml) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    if(overlay && container) {
        container.innerHTML = `<h2>${title}</h2>${bodyHtml}`;
        overlay.classList.add('active');
        
        // Clique fora para fechar
        overlay.onclick = (e) => {
            if(e.target === overlay) overlay.classList.remove('active');
        };
    }
}

// Inicializa
renderEncGrid();
