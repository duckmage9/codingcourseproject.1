// 1. Banco de dados com os 10 tópicos de HTML Iniciante
const db = {
    html: {
        iniciante: [
            "Conceito de Tags", "Estrutura Global", "Tags de Texto", 
            "Meta Tags Técnicas", "Atributos e IDs", "Listas de Inventário", 
            "Links e Navegação", "Inserção de Mídia", "Containers Div", "Comentários de Código"
        ],
        intermediario: ["Conteúdo em breve..."],
        avancado: ["Conteúdo em breve..."]
    },
    css: { iniciante: [], intermediario: [], avancado: [] },
    js: { iniciante: [], intermediario: [], avancado: [] }
};

const codeStyle = "background: #020617; padding: 15px; border-radius: 8px; border: 1px solid #334155; color: #38bdf8; display: block; white-space: pre-wrap; margin: 15px 0; font-family: monospace; border-left: 4px solid #38bdf8; line-height: 1.5;";

// 2. Conteúdos Expandidos (Mínimo 3 parágrafos longos por tópico)
const conteudosManuais = {
    "Conceito de Tags": `
        <p>As <strong>Tags</strong> servem para dar mais informações sobre o código para o programa ou navegador. Elas funcionam como etiquetas que classificam cada elemento. As tags são abertas com o sinal de menor e fechadas com o sinal de maior. Na grande maioria das vezes, você precisará abrir uma tag no início do elemento e fechá-la no final usando uma barra, garantindo que o navegador saiba exatamente onde aquela instrução específica termina e onde a próxima começa dentro do fluxo do seu documento.</p>
        <p>No desenvolvimento de jogos para web, as tags são fundamentais para criar a interface e a fundação do projeto. Elas classificam cada elemento visual, permitindo que o navegador entenda o que é um botão de comando, um título de menu ou uma descrição de item no inventário. Sem o uso correto das tags, o seu código se tornaria apenas um amontoado de texto sem sentido, impossibilitando que o motor do navegador processe as ordens de renderização necessárias para exibir os gráficos e textos que compõem a experiência do jogador durante a partida.</p>
        <p>Imagine que você está montando um manual de instruções para um robô: as tags seriam as marcações que dizem ao robô o que é uma peça vital e o que é apenas um detalhe estético. Ao utilizar tags como botões ou divisões, você prepara o terreno para que o JavaScript consiga identificar esses objetos mais tarde. É essa marcação semântica que permite a interatividade, pois cada etiqueta HTML atua como um endereço fixo que o código de lógica usará para modificar o estado do jogo, como diminuir a vida ou alterar a cor de um ícone de status.</p>
    `,
    "Estrutura Global": `
        <p>As <strong>Tags de Estrutura</strong> organizam o seu código em áreas lógicas e fundamentais. Elas separam cada parte do documento e informam ao navegador o que cada seção está fazendo e que tipo de dados ela armazena. A estrutura básica começa sempre com a declaração do tipo de documento, seguida pela abertura da tag principal que envelopa todo o projeto. Manter essa hierarquia é crucial para que o navegador não se perca ao tentar interpretar as milhares de linhas de código que um sistema de jogo complexo pode vir a ter no futuro.</p>
        <p>As duas divisões mais importantes em qualquer projeto são a <code>&lt;head&gt;</code> e a <code>&lt;body&gt;</code>. A área da Head serve como o cérebro invisível do jogo, guardando links para fontes externas, arquivos de estilos CSS e metadados de configuração. Já a área da Body é o palco onde o espetáculo acontece, sendo o local onde inserimos tudo o que o jogador verá na tela, desde o canvas onde o personagem se move até os botões da interface de usuário que respondem aos cliques e toques realizados durante a gameplay.</p>
        <p>Ao construir essa base, você garante que o jogo seja carregado de forma eficiente e organizada. Uma estrutura global bem definida evita conflitos de renderização e erros de carregamento que poderiam quebrar a experiência do usuário. Pense na estrutura HTML como a planta arquitetônica de um prédio: se os fundamentos não estiverem no lugar certo, as paredes de JavaScript e o acabamento de CSS não terão suporte para se sustentar. É através desta organização inicial que o navegador estabelece a árvore de elementos que será manipulada em tempo real pelo seu motor de jogo.</p>
    `,
    "Tags de Texto": `
        <p>As tags de texto como <code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code> e <code>&lt;p&gt;</code> são a voz do seu jogo. Elas permitem que você apresente diálogos de personagens, sistemas de pontuação e instruções de missões de forma legível. Usar a hierarquia correta de títulos é vital não apenas para a organização visual, mas também para a acessibilidade, permitindo que leitores de tela e outros sistemas entendam qual informação é mais importante dentro da interface do usuário, como o nome do jogo ou o alerta de fim de partida.</p>
        <p>Em um contexto de Game Design, o texto é uma ferramenta de imersão narrativa poderosa. Tags de parágrafo bem distribuídas podem contar a história do mundo através de livros encontrados nos cenários ou logs de missões no menu principal. Além disso, tags de destaque como negrito e itálico ajudam a enfatizar termos importantes, como nomes de itens lendários ou dicas cruciais para resolver um quebra-cabeça. A formatação correta do texto garante que o jogador processe as informações rapidamente sem se sentir sobrecarregado por blocos densos de informação desorganizada.</p>
        <p>Ao utilizar tags de texto, você também facilita a estilização futura com CSS, permitindo que todos os diálogos tenham uma fonte específica e todos os títulos tenham uma cor neon, por exemplo. Cada tag de texto atua como um recipiente que pode ser animado ou alterado dinamicamente via código. Se você deseja que a pontuação brilhe quando o jogador ganha pontos, ter essa pontuação dentro de uma tag específica de título é o primeiro passo para conseguir aplicar esse efeito visual de forma isolada e profissional sem afetar o resto do texto informativo do site.</p>
    `,
    "Meta Tags Técnicas": `
        <p>As <strong>Meta Tags</strong> operam nos bastidores e são localizadas dentro da seção Head do seu arquivo HTML. Elas não são visíveis para o jogador comum, mas são essenciais para que o navegador saiba como lidar com o jogo em diferentes ambientes. A meta tag de charset, por exemplo, garante que caracteres especiais e acentos em português apareçam corretamente, evitando que seus diálogos de jogo fiquem cheios de símbolos estranhos e erros de leitura que prejudicam a qualidade profissional do seu projeto finalizado.</p>
        <p>Uma das meta tags mais críticas para desenvolvedores modernos é a de viewport. Ela controla como o jogo é exibido em dispositivos móveis, como smartphones e tablets, ajustando a largura da tela e o nível de zoom inicial. Sem essa configuração, o seu jogo pode aparecer minúsculo em um celular ou com as bordas cortadas, o que destruiria a jogabilidade. Ao configurar o viewport corretamente, você assegura que a interface de toque e os botões do jogo sejam dimensionados proporcionalmente ao tamanho físico da tela do dispositivo que o jogador está utilizando no momento.</p>
        <p>Além das configurações de tela, existem meta tags voltadas para SEO e redes sociais que ajudam na divulgação do seu jogo. Elas definem a descrição que aparece nos resultados de busca do Google e a imagem que surge quando alguém compartilha o link do seu jogo no Discord ou WhatsApp. Investir tempo na configuração dessas tags invisíveis é o que diferencia um projeto amador de um produto de jogo polido, pois garante que a primeira impressão técnica do navegador e dos sistemas externos seja de total compatibilidade e organização profissional do código.</p>
    `,
    "Atributos e IDs": `
        <p><strong>Atributos</strong> são propriedades especiais inseridas dentro das tags para modificar seu comportamento ou fornecer identificação única. O atributo <code>id</code> é como o CPF de um elemento: ele deve ser único em toda a página. Em um jogo, você daria um ID único para a barra de vida do herói e outro para a barra de vida do chefe. Isso permite que, no JavaScript, você envie comandos específicos para reduzir apenas a vida do inimigo quando ele for atingido, sem afetar acidentalmente outros elementos que usam o mesmo estilo visual.</p>
        <p>Outro atributo muito comum é a <code>class</code>, que funciona como um grupo ou categoria. Você pode criar uma classe chamada "item-coletavel" e aplicá-la em dez tags diferentes de imagens. Enquanto o ID é para um indivíduo único, a classe é para um exército de elementos que compartilham as mesmas características visuais. Isso economiza centenas de linhas de código, pois você pode dizer ao CSS que todos os elementos da classe "item-coletavel" devem ter uma borda dourada e brilhar suavemente, aplicando o efeito em massa de forma muito eficiente.</p>
        <p>Entender a diferença entre atributos de identificação e atributos funcionais é o que permite criar mecânicas complexas. Atributos como <code>src</code> para imagens ou <code>href</code> para links dizem ao elemento de onde ele deve buscar os dados externos para funcionar. No gamedev, você pode até criar atributos personalizados usando o prefixo "data-" para guardar informações secretas dentro da tag, como o valor de dano que aquela arma causa. Dominar o uso de atributos transforma tags HTML estáticas em objetos de jogo inteligentes que carregam dados vitais para a lógica de programação.</p>
    `,
    "Listas de Inventário": `
        <p>As listas em HTML, criadas com as tags <code>&lt;ul&gt;</code> para listas não ordenadas e <code>&lt;ol&gt;</code> para listas numeradas, são perfeitas para sistemas de RPG. Cada item da lista é definido pela tag <code>&lt;li&gt;</code>, criando uma estrutura organizada para exibir os itens que o jogador coletou. Usar listas garante que o navegador agrupe esses elementos de forma lógica, facilitando a navegação tanto visual quanto por teclado, o que é um padrão de organização essencial para qualquer menu de opções ou lista de conquistas dentro do seu jogo.</p>
        <p>No desenvolvimento de interfaces de jogo, as listas permitem que você gere conteúdo dinamicamente conforme o progresso do jogador. Se o herói ganha uma nova poção, o JavaScript pode simplesmente adicionar um novo "li" dentro da sua lista de inventário existente. Essa estrutura de árvore facilita muito a manutenção do código, pois você sabe exatamente onde os itens começam e terminam. Além disso, remover um item quando ele é consumido torna-se uma tarefa simples de manipulação de lista, mantendo a interface sempre atualizada com o estado real da mochila do personagem.</p>
        <p>Visualmente, as listas podem ser totalmente transformadas com CSS para não parecerem listas de texto comuns. Você pode remover os "pontinhos" padrão e transformar cada item em um slot quadrado com um ícone de item dentro. Ao usar a semântica de lista, você mantém o código limpo e compreensível para outros desenvolvedores. É muito melhor ter um inventário estruturado como uma lista real do que ter dezenas de divisões soltas pelo código que dificultam a organização e podem causar bugs de posicionamento quando a lista de itens crescer muito durante a aventura.</p>
    `,
    "Links e Navegação": `
        <p>A tag de link <code>&lt;a&gt;</code> é o portal que conecta seu jogo ao resto da internet ou a diferentes partes do próprio site. O atributo principal aqui é o <code>href</code>, que indica o destino para onde o jogador será enviado ao clicar no elemento. Em um menu principal, os links podem ser usados para levar o jogador para a página de créditos, para um manual de instruções externo ou até mesmo para baixar uma versão offline do projeto, servindo como a principal via de navegação fora da engine principal do jogo.</p>
        <p>No gamedev, os links também podem ser usados para criar sistemas de navegação interna através de âncoras. Você pode criar um link que, ao ser clicado, desliza a tela automaticamente para a seção de recordes ou para a loja do jogo. Além disso, é possível configurar links que abrem em novas abas para não fechar a partida atual do jogador. Essa flexibilidade é crucial para manter o usuário engajado, oferecendo informações adicionais sem interromper o fluxo da jogabilidade ou forçar o recarregamento total da página, o que faria o progresso ser perdido.</p>
        <p>Muitos desenvolvedores usam links de forma criativa dentro de interfaces narrativas, como em jogos no estilo "Aventura de Texto". Cada escolha do jogador pode ser um link que carrega um novo parágrafo de história ou altera variáveis globais. Quando bem estilizados, os links perdem aquela aparência azul sublinhada clássica e se tornam botões elegantes, portais mágicos ou opções de diálogo interativas. Entender como o navegador processa o redirecionamento de links é fundamental para garantir que a transição entre as páginas do seu ecossistema de jogo seja fluida e livre de erros de destino.</p>
    `,
    "Inserção de Mídia": `
        <p>As tags <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code> e <code>&lt;video&gt;</code> são os motores de imersão visual e sonora do HTML. A tag de imagem é usada para exibir sprites, fundos de cenário e ícones da interface, exigindo sempre o atributo "src" para localizar o arquivo e o "alt" para descrever a imagem em caso de falha. Sem essas tags, o seu jogo seria apenas uma tela de texto preto e branco, perdendo todo o apelo visual que atrai e mantém a atenção dos jogadores modernos que buscam experiências ricas em detalhes gráficos e animações.</p>
        <p>O som é metade da experiência de qualquer jogo, e as tags de áudio permitem inserir trilhas sonoras e efeitos de impacto de forma nativa. Você pode configurar o áudio para tocar em loop automaticamente ou para começar apenas quando o jogador clicar em "Start". No desenvolvimento web, lidar com mídia requer atenção aos formatos de arquivo para garantir que o som toque em todos os navegadores sem travamentos. O uso correto dessas tags permite que o jogo tenha uma atmosfera única, transmitindo emoções através da música de fundo e fornecendo feedback auditivo imediato para as ações do jogador.</p>
        <p>Trabalhar com mídia no HTML exige um cuidado especial com a performance e o tempo de carregamento. Imagens muito pesadas ou vídeos sem compressão podem fazer o jogo demorar minutos para abrir, afastando o usuário. Como desenvolvedor, você aprenderá a equilibrar a qualidade visual com o tamanho do arquivo, usando atributos para controlar as dimensões e o comportamento de carregamento. Dominar a inserção de mídia é o passo final para transformar um protótipo técnico em um produto real que possui identidade visual, trilha sonora cativante e uma apresentação profissional digna de grandes estúdios.</p>
    `,
    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> é o elemento mais versátil e utilizado na construção de layouts modernos. Ela funciona como uma caixa invisível que agrupa outros elementos, permitindo que você organize partes inteiras da interface como blocos únicos. Em um jogo, você usaria uma Div para envelopar todo o sistema de HUD, outra para o menu de configurações e outra para o container do jogo em si. Essa organização em "caixas" facilita imensamente a aplicação de layouts complexos com CSS, como posicionar a vida no topo esquerdo e o mapa no topo direito.</p>
        <p>Além da organização, as Divs são os alvos preferidos para manipulação via JavaScript. Por ser um container genérico, você pode alterar o conteúdo de uma Div inteira com um único comando de código. Por exemplo, quando o jogador abre o inventário, você pode dizer ao script para substituir todo o HTML interno daquela Div específica pelos itens atuais. Essa técnica de "injeção de conteúdo" é o que torna os jogos web dinâmicos e responsivos, permitindo trocas de tela rápidas sem que a página precise ser recarregada do zero, mantendo a fluidez da partida.</p>
        <p>Embora a Div não tenha um significado visual próprio, ela é a base para quase todos os efeitos de design avançados. Ao aplicar bordas, sombras e cores de fundo a uma Div, você cria painéis, janelas flutuantes e molduras para o seu jogo. Aprender a aninhar Divs dentro de outras Divs (o famoso "Box Model") é a habilidade que separa quem faz sites simples de quem constrói interfaces de jogos profissionais. É a estrutura de containers que mantém cada elemento no seu devido lugar, independentemente do tamanho da janela do navegador ou do dispositivo que está rodando o jogo.</p>
    `,
    "Comentários de Código": `
        <p>Comentários em HTML são trechos de texto que o navegador ignora completamente na hora de exibir o site, servindo exclusivamente para o desenvolvedor. Eles são criados usando uma sintaxe especial que abre com um sinal de menor e exclamação e fecha com traços e um sinal de maior. O uso de comentários é uma prática de higiene de código essencial, permitindo que você deixe notas para si mesmo ou para sua equipe explicando o que cada parte complexa daquele arquivo faz, facilitando muito a manutenção do projeto meses depois de ele ter sido criado.</p>
        <p>Em projetos de jogos, onde o código pode crescer para milhares de linhas, os comentários atuam como placas de sinalização em uma floresta densa. Você pode usar comentários para marcar o início e o fim de seções importantes, como "Área do Menu de Pausa" ou "Configurações Globais de Renderização". Isso evita que você apague partes vitais do código por acidente ao tentar fazer uma alteração rápida. Além disso, comentários são ótimos para desativar temporariamente uma funcionalidade que está causando erro sem precisar deletar o código permanentemente do arquivo principal.</p>
        <p>Aprender a comentar o código de forma estratégica é uma marca de maturidade profissional. Bons comentários não explicam o óbvio, mas sim o "porquê" de certas decisões técnicas terem sido tomadas. Ao trabalhar em grupo, os comentários são a principal forma de comunicação entre os programadores que mexem no mesmo arquivo HTML. Manter um código bem documentado garante que qualquer pessoa consiga entender a lógica da sua estrutura, permitindo que o desenvolvimento do jogo continue de forma suave e colaborativa, minimizando o tempo gasto tentando decifrar o que cada tag perdida está fazendo no projeto.</p>
    `
};

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
            const content = conteudosManuais[topic] || "<p>Conteúdo em fase de produção.</p>";
            if (typeof openModal === 'function') {
                openModal('reader', `<h2>${topic}</h2>${content}`);
            } else {
                // Fallback se o core.js não tiver carregado a tempo
                const modal = document.getElementById('reader');
                const body = document.getElementById('reader-body');
                if(modal && body) {
                    body.innerHTML = `<h2>${topic}</h2>${content}`;
                    modal.classList.add('active');
                }
            }
        };
        grid.appendChild(card);
    });
}

// Inicializa a grade ao carregar o script
renderEncGrid();
