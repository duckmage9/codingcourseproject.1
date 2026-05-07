function manualLog(msg) {
    const consoleEl = document.getElementById('debug-console');
    if (consoleEl) {
        const line = document.createElement('div');
        line.className = 'log-line';
        line.innerHTML = `<span class="log-v">v0.2.1:</span> ${msg}`;
        consoleEl.prepend(line);
    }
}

manualLog("Banco de dados v0.2.1 (Long-Form) carregado.");

const db = {
    html: {
        iniciante: ["Tags Básicas", "Estrutura Global", "Atributos", "Títulos (H1-H6)", "Parágrafos", "Links", "Listas", "Imagens", "Comentários", "Formulários"],
        intermediario: ["Semântica", "Áudio e Vídeo", "Canvas Básico", "SVG", "Data Attributes", "Tabelas", "Iframes", "Meta Tags", "SEO Base", "Inputs Avançados"],
        avancado: ["Web Workers", "WebSockets", "Offscreen Canvas", "Service Workers", "Gamepad API", "Web Audio", "Shadow DOM", "Templates", "IndexedDB", "WebAssembly"]
    },
    css: { iniciante: ["Seletores", "Box Model"], intermediario: [], avancado: [] },
    js: { iniciante: ["Variáveis", "Loops"], intermediario: [], avancado: [] }
};

const codeStyle = "background: #020617; padding: 15px; border-radius: 8px; border: 1px solid #334155; overflow-x: auto; font-family: monospace; color: #38bdf8; margin-top: 15px; display: block; white-space: pre-wrap; line-height: 1.5;";

const conteudosManuais = {
    "Tags Básicas": `
        <p>As tags são os blocos fundamentais de construção de qualquer interface web, funcionando como marcadores que definem a natureza do conteúdo. Cada tag comunica ao navegador se o que ele está processando é um texto simples, um botão de ação, uma seção de cabeçalho ou um container de dados complexos. Sem a utilização correta dessas etiquetas, o navegador trataria todo o código como uma massa única de texto sem formatação, impossibilitando a criação de layouts estruturados ou sistemas funcionais que dependem da organização lógica de elementos na tela.</p>
        <p>A anatomia de uma tag padrão geralmente envolve um par de chaves angulares que envolvem o nome do elemento, criando a tag de abertura e a tag de fechamento correspondente. É crucial entender que a tag de fechamento deve conter uma barra diagonal antes do nome do elemento para sinalizar ao motor de renderização que aquele bloco específico de conteúdo chegou ao fim. Esse sistema de emparelhamento permite que desenvolvedores criem estruturas aninhadas, onde uma tag pode conter várias outras dentro de si, estabelecendo uma hierarquia de "pai e filho" que é a base do DOM (Document Object Model).</p>
        <p>Dominar as tags básicas é o primeiro passo para garantir que o seu projeto seja acessível e bem interpretado por diferentes motores de busca e tecnologias assistivas. Além da função visual, as tags carregam um significado semântico que ajuda o computador a entender a importância relativa de cada informação apresentada ao usuário final. Erros simples, como esquecer de fechar uma tag, podem resultar em "vazamentos" de estilo onde a formatação de um elemento acaba afetando todo o restante da página de maneira imprevisível e difícil de depurar em projetos maiores.</p>
        <pre style="${codeStyle}">&lt;section&gt;\n  &lt;h1&gt;Título da Seção&lt;/h1&gt;\n  &lt;p&gt;Conteúdo aninhado dentro da tag section.&lt;/p&gt;\n&lt;/section&gt;</pre>
    `,
    "Estrutura Global": `
        <p>A estrutura global de um documento HTML funciona como o esqueleto rígido que sustenta todos os outros sistemas de uma aplicação web moderna. No topo desse arquivo, o comando DOCTYPE html serve como uma instrução crítica para que o navegador opere no modo de renderização mais recente, evitando comportamentos de compatibilidade legada que poderiam quebrar funcionalidades modernas. Abaixo dessa instrução, a tag principal HTML envolve todo o código, servindo como a raiz de uma árvore lógica que se ramificará em seções de configuração invisíveis e seções de visualização direta.</p>
        <p>Dentro desse esqueleto, a seção HEAD atua como o cérebro do documento, onde são definidas configurações que o usuário raramente vê, mas que são vitais para o funcionamento do site. É aqui que inserimos o conjunto de caracteres UTF-8 para garantir que acentos e símbolos sejam exibidos corretamente em qualquer idioma do mundo, além de links para arquivos externos de estilo e scripts de lógica. Sem um cabeçalho bem configurado, o site pode carregar sem estilos, apresentar erros de codificação de texto ou falhar em ser encontrado por motores de busca devido à falta de metadados essenciais para o SEO.</p>
        <p>Por fim, a seção BODY é o espaço reservado para tudo o que é realmente visível e interativo para o jogador ou usuário que acessa a sua ferramenta. É dentro do corpo que organizamos a interface do usuário, os botões, os menus de navegação e as áreas de exibição de dados dinâmicos que serão manipulados via JavaScript posteriormente. Manter uma separação clara entre o que é configuração no topo e o que é conteúdo no corpo é uma prática fundamental para qualquer desenvolvedor que pretenda manter códigos limpos, escaláveis e fáceis de sofrer manutenção em longo prazo.</p>
        <pre style="${codeStyle}">&lt;!DOCTYPE html&gt;\n&lt;html lang="pt-br"&gt;\n&lt;head&gt;\n  &lt;meta charset="UTF-8"&gt;\n  &lt;title&gt;Mastery Hub&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;!-- O mundo visível começa aqui --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>
    `,
    "Atributos": `
        <p>Atributos são modificadores poderosos que permitem estender a funcionalidade padrão de uma tag, fornecendo informações adicionais ou configurações específicas que alteram seu comportamento. Eles são sempre declarados dentro da tag de abertura do elemento e geralmente seguem uma sintaxe de nome seguido por um valor entre aspas, criando um par chave-valor que o navegador interpreta durante a carga. Através de atributos, podemos definir desde o endereço de um link até o nome de uma classe que será usada pelo motor de CSS para aplicar cores, fontes e animações complexas.</p>
        <p>Existem atributos globais que podem ser aplicados a virtualmente qualquer elemento HTML, como o 'id', que identifica um componente de forma única em toda a página, ou a 'class', que permite agrupar múltiplos elementos sob o mesmo estilo. Outros atributos são altamente específicos para certos tipos de tags, como o 'src' para carregar arquivos de imagem ou o 'href' para definir destinos de navegação em links de âncora. Compreender quais atributos usar em cada contexto é essencial para construir uma estrutura de dados rica que possa ser facilmente manipulada por scripts de lógica ou seletores de estilo.</p>
        <p>Além dos atributos padrão, o HTML5 introduziu a capacidade de criarmos nossos próprios atributos personalizados através do prefixo 'data-', o que abriu portas para armazenar estados e informações internas diretamente no código. Isso é particularmente útil para sistemas de interface que precisam guardar valores como o ID de um personagem ou o nível de um progresso sem poluir a lógica de exibição visual. Saber gerenciar esses atributos de forma organizada permite que o desenvolvedor crie uma ponte sólida entre a marcação estática da página e a lógica dinâmica que roda nos bastidores da aplicação.</p>
        <pre style="${codeStyle}">&lt;div class="player-card" id="slot-01" data-level="15"&gt;\n  Interface do Jogador\n&lt;/div&gt;</pre>
    `,
    "Títulos (H1-H6)": `
        <p>Os títulos em HTML, que variam do nível H1 ao H6, representam a hierarquia de importância e a organização lógica do conteúdo textual de uma página web. O H1 é o título mais importante, geralmente reservado para o nome principal da aplicação ou o tópico central daquela visualização específica, funcionando como o ponto de entrada visual. Conforme o número da tag aumenta, a importância visual e semântica diminui, permitindo que subtópicos e seções secundárias sejam organizados de forma clara e estruturada para quem está consumindo as informações apresentadas.</p>
        <p>Para motores de busca como o Google, a utilização correta desses níveis de título é um dos fatores mais importantes para entender sobre o que o seu site realmente trata e como os dados estão relacionados entre si. Um documento que possui múltiplos títulos H1 pode confundir os algoritmos de busca e prejudicar a posição do site nos resultados, enquanto uma hierarquia bem saltada de H1 para H2 e depois H3 demonstra profissionalismo técnico. Além disso, tecnologias de leitura de tela para pessoas com deficiência visual utilizam essas tags para criar um índice navegável, permitindo que o usuário pule rapidamente para a seção que deseja.</p>
        <p>Na prática do design de interfaces, os títulos não servem apenas para aumentar o tamanho da fonte, mas para criar um fluxo de leitura que guie o olhar do usuário através das partes mais relevantes do sistema. É perfeitamente possível usar CSS para fazer um H3 parecer maior que um H1, mas isso quebraria a semântica lógica do documento, o que deve ser evitado a todo custo por desenvolvedores experientes. Manter a coerência entre o que a tag significa e como ela é apresentada garante que o seu projeto seja robusto tanto visualmente quanto tecnicamente, funcionando bem em qualquer dispositivo ou navegador.</p>
        <pre style="${codeStyle}">&lt;h1&gt;Painel de Controle&lt;/h1&gt;\n&lt;h2&gt;Configurações de Áudio&lt;/h2&gt;\n&lt;h3&gt;Volume Geral&lt;/h3&gt;</pre>
    `,
    "Parágrafos": `
        <p>A tag de parágrafo é utilizada para envolver blocos de texto corrido, garantindo que o conteúdo seja exibido com um espaçamento automático entre outros elementos, o que melhora significativamente a legibilidade. Diferente de apenas digitar texto solto dentro do corpo do arquivo, o parágrafo isola a informação e permite que o navegador aplique margens padrão que evitam que as linhas de texto fiquem coladas umas nas outras. Isso cria uma experiência de leitura muito mais confortável, essencial para documentações extensas ou interfaces que dependem de explicações claras para o usuário final.</p>
        <p>Dentro de um parágrafo, o navegador ignora múltiplos espaços em branco ou quebras de linha feitas diretamente no código fonte, tratando tudo como um fluxo contínuo de caracteres. Se você precisar forçar uma quebra de linha em um ponto específico sem iniciar um novo bloco de texto, deve utilizar a tag 'br', que é um elemento vazio sem necessidade de fechamento. No entanto, o uso excessivo de quebras de linha manuais é considerado uma prática ruim, pois o design responsivo deve permitir que o texto se ajuste automaticamente ao tamanho da tela do dispositivo usado pelo usuário.</p>
        <p>O alinhamento e a estilização dos parágrafos são geralmente delegados ao CSS, onde podemos definir o espaçamento entre linhas, o recuo da primeira frase e a justificação do texto para criar layouts elegantes. Ao organizar seu conteúdo em parágrafos semânticos, você facilita a vida de outros desenvolvedores que podem precisar aplicar estilos globais a todos os blocos de texto de uma só vez. Um código limpo e bem parágrafado é o sinal de um desenvolvedor que se preocupa não apenas com a funcionalidade do código, mas também com a experiência de quem vai ler e manter esse sistema no futuro.</p>
        <pre style="${codeStyle}">&lt;p&gt;Este é um bloco de texto bem estruturado.&lt;br&gt;\nLinha quebrada manualmente aqui.&lt;/p&gt;</pre>
    `,
    "Links": `
        <p>Links são a cola que une a rede mundial de computadores, permitindo que usuários naveguem entre diferentes documentos, seções de uma mesma página ou até arquivos para download. Criados através da tag de âncora 'a', os links dependem quase inteiramente do atributo 'href', que especifica o caminho de destino para onde o navegador deve direcionar o usuário após o clique. Sem esse atributo, a tag de âncora perde sua função interativa primária e passa a se comportar como um texto estático, frustrando as expectativas de navegação de quem interage com a interface.</p>
        <p>Existem dois tipos principais de caminhos que podem ser usados em um link: os caminhos absolutos, que apontam para endereços completos na internet incluindo o protocolo 'https', e os caminhos relativos, que buscam arquivos dentro do seu próprio projeto. Saber quando usar cada um é vital para a portabilidade do seu código, especialmente quando você move o site de um servidor de testes para um servidor de produção. Além disso, links podem ser usados para disparar ações especiais no sistema do usuário, como abrir o cliente de e-mail padrão ou realizar uma chamada telefônica através de prefixos como 'mailto:' ou 'tel:'.</p>
        <p>Um detalhe técnico importante na criação de links é o uso do atributo 'target', que define se a nova página será aberta na mesma aba ou em uma aba separada do navegador. Usar 'target="_blank"' é uma prática comum para manter o usuário no seu site principal enquanto ele consulta um recurso externo, mas deve ser feito com cautela para não sobrecarregar o dispositivo do usuário com janelas desnecessárias. Links bem estruturados, com textos descritivos que fazem sentido mesmo fora de contexto, são fundamentais para a acessibilidade, permitindo que usuários de leitores de tela entendam para onde serão levados.</p>
        <pre style="${codeStyle}">&lt;a href="https://github.com" target="_blank"&gt;Ver Repositório Externo&lt;/a&gt;</pre>
    `,
    "Listas": `
        <p>As listas em HTML são ferramentas fundamentais para organizar itens que possuem uma relação lógica entre si, como menus de navegação, inventários de itens ou passos de um tutorial técnico. Existem dois tipos principais: a lista não ordenada (UL), que utiliza marcadores como bolinhas por padrão, e a lista ordenada (OL), que gera automaticamente uma numeração sequencial para cada item inserido. Escolher entre uma ou outra depende inteiramente se a ordem dos elementos apresentados é um fator crítico para o entendimento daquela informação específica pelo usuário final.</p>
        <p>Independente do tipo de lista escolhido, cada elemento individual dentro delas deve ser obrigatoriamente envolvido pela tag LI (List Item) para ser reconhecido corretamente pelo navegador e pelos estilos CSS. Colocar texto diretamente dentro de uma tag UL sem envolver em um LI é um erro comum de sintaxe que pode causar falhas de renderização e problemas de acessibilidade em diversos dispositivos móveis. A estrutura de listas é tão versátil que desenvolvedores costumam usá-las para criar menus horizontais complexos, transformando visualmente as listas verticais padrão em barras de navegação modernas através de código CSS.</p>
        <p>Além das listas simples, o HTML permite o aninhamento de listas dentro de listas, o que é ideal para criar menus com subcategorias ou sistemas de diretórios com múltiplos níveis de profundidade. Ao aninhar uma nova lista dentro de um item da lista pai, você cria uma estrutura ramificada que mantém a relação hierárquica clara tanto para o motor de busca quanto para o design visual da página. Manter suas listas bem organizadas e com nomes de classes apropriados facilita a manutenção de interfaces que precisam lidar com grandes quantidades de dados repetitivos de forma eficiente e elegante.</p>
        <pre style="${codeStyle}">&lt;ul&gt;\n  &lt;li&gt;Espada de Ferro&lt;/li&gt;\n  &lt;li&gt;Escudo de Madeira&lt;/li&gt;\n&lt;/ul&gt;</pre>
    `,
    "Imagens": `
        <p>Integrar imagens em uma página web vai muito além de apenas decorar a interface, tratando-se de um processo técnico que envolve o carregamento de recursos externos e a garantia de que o site permaneça rápido e acessível. A tag 'img' é um elemento que não possui fechamento e depende do atributo 'src' para localizar o arquivo visual, que pode estar armazenado localmente nas pastas do seu projeto ou em um servidor remoto na nuvem. Gerenciar corretamente esses caminhos é o que garante que os sprites e ícones do seu sistema de gamedev apareçam corretamente para todos os usuários em diferentes condições de rede.</p>
        <p>Um dos atributos mais ignorados, porém mais vitais, é o 'alt', que fornece uma descrição textual da imagem para ser lida por softwares de acessibilidade ou exibida caso o link da imagem se quebre por algum motivo. Além da questão de inclusão, o atributo 'alt' ajuda os motores de busca a entender o conteúdo visual da sua página, o que pode aumentar significativamente a visibilidade do seu projeto na internet. Definir as dimensões de largura e altura diretamente na tag também ajuda o navegador a reservar o espaço correto na tela antes mesmo da imagem terminar de carregar, evitando que o layout "pule" bruscamente durante o carregamento.</p>
        <p>No desenvolvimento web moderno, também lidamos com diferentes formatos de imagem, como o leve WebP para fotos e o SVG para ícones que nunca perdem a qualidade ao serem redimensionados em telas de alta resolução. Saber escolher o formato correto para cada elemento visual é o que diferencia um site amador de uma plataforma profissional de alto desempenho que carrega quase instantaneamente. Otimizar suas imagens e usar tags de carregamento preguiçoso (lazy loading) garante que o usuário não gaste dados desnecessários carregando arquivos que ainda não estão visíveis na área de visualização da tela.</p>
        <pre style="${codeStyle}">&lt;img src="sprite_hero.png" alt="Herói correndo" width="64" height="64"&gt;</pre>
    `,
    "Comentários": `
        <p>Os comentários em HTML são ferramentas de documentação interna que permitem ao desenvolvedor deixar anotações, explicações ou lembretes diretamente no código sem que eles interfiram na visualização final do site. Iniciados pela sequência de caracteres menor-que-exclamação-traço-traço e encerrados pelo seu inverso, os comentários são ignorados pelo motor de renderização do navegador durante o processamento da página. Isso os torna ideais para organizar arquivos grandes, separando visualmente seções de cabeçalho, conteúdo principal e rodapé para que outros membros da equipe entendam a estrutura rapidamente.</p>
        <p>Além da documentação, os comentários são amplamente utilizados durante a fase de depuração e testes de um projeto para desativar temporariamente blocos de código sem a necessidade de excluí-los permanentemente. Se um elemento da interface está causando um erro visual ou um bug de lógica, o desenvolvedor pode "comentar" aquela seção inteira para isolar o problema e verificar como o restante do sistema se comporta sem aquela parte específica. Essa técnica economiza tempo precioso de desenvolvimento e evita a perda acidental de lógicas complexas que ainda estão sendo refinadas ou que podem ser reaproveitadas no futuro.</p>
        <p>No entanto, é importante lembrar que, embora os comentários não apareçam na interface visual, eles ainda são enviados para o navegador do usuário e podem ser lidos por qualquer pessoa que decida inspecionar o código fonte da página. Por essa razão, nunca se deve deixar informações sensíveis, senhas, dados pessoais ou comentários depreciativos dentro do código HTML, pois isso representa uma falha de segurança e profissionalismo. Use os comentários de forma estratégica para explicar "por que" uma decisão técnica foi tomada em vez de apenas descrever "o que" o código está fazendo, o que é muito mais valioso para quem mantiver o sistema depois.</p>
        <pre style="${codeStyle}">&lt;!-- Seção: Barra de Vida do Jogador --&gt;\n&lt;div id="hp-bar"&gt;&lt;/div&gt;</pre>
    `,
    "Formulários": `
        <p>Formulários representam a ponte de interação mais complexa e direta entre o usuário e o servidor, permitindo a coleta de dados, o cadastro de novos perfis e o envio de configurações personalizadas. A tag 'form' atua como um container que agrupa diversos tipos de elementos de entrada, como caixas de texto, botões de seleção única, listas suspensas e campos de senha protegidos. Para que um formulário funcione corretamente, ele precisa de atributos que definam para onde os dados serão enviados e qual método de comunicação será utilizado, garantindo a segurança e a integridade das informações trafegadas.</p>
        <p>Dentro de um formulário, a tag 'input' é a estrela principal, mudando radicalmente de função baseada no seu atributo 'type', podendo se transformar em um campo de data, um seletor de cores ou um botão de upload de arquivos. É fundamental associar cada campo de entrada a uma tag 'label', o que não apenas melhora o design visual, mas permite que o usuário clique no texto para ativar o campo correspondente, algo essencial para a usabilidade em dispositivos móveis. Validar os dados no lado do cliente usando atributos como 'required' ou 'pattern' ajuda a evitar erros antes mesmo do formulário ser submetido, proporcionando um feedback imediato ao usuário.</p>
        <p>Desenvolver formulários acessíveis e fáceis de usar é um desafio que exige atenção aos detalhes, como o uso de 'placeholders' claros que orientem o preenchimento sem substituir a necessidade de rótulos permanentes. Em sistemas de jogos ou ferramentas de autoria, formulários bem desenhados garantem que o jogador possa ajustar suas preferências sem frustração, mantendo a imersão na experiência geral da plataforma. Dominar a estrutura de formulários é um pré-requisito para qualquer desenvolvedor que pretenda criar aplicações web interativas que vão além da simples exibição estática de informações na tela.</p>
        <pre style="${codeStyle}">&lt;form action="/save-game" method="POST"&gt;\n  &lt;label&gt;Nome do Herói:&lt;/label&gt;\n  &lt;input type="text" name="p_name" required&gt;\n  &lt;button&gt;Iniciar Aventura&lt;/button&gt;\n&lt;/form&gt;</pre>
    `
};

function getTopicContent(topic) {
    const limpo = topic.trim();
    manualLog(`Acessando tópico: ${limpo}`);
    return conteudosManuais[limpo] || `<p>Este conteúdo ainda está sendo redigido para a versão expandida v0.2.1.</p>`;
}

let currentTech = 'html';
let currentLevel = 'iniciante';

function renderEncGrid() {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    db[currentTech][currentLevel].forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `<h3>${topic}</h3>`;
        card.onclick = () => {
            const htmlContent = `<h2>${topic}</h2>${getTopicContent(topic)}`;
            openModal('reader', htmlContent);
        };
        grid.appendChild(card);
    });
}

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('#modo-enciclopedia .main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    const btn = document.getElementById(`btn-${tech}`);
    if(btn) btn.classList.add(`active-${tech}`);
    renderEncGrid();
}

function setLevel(lvl, element) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    if(element) element.classList.add('active-lvl');
    renderEncGrid();
}

window.addEventListener('DOMContentLoaded', () => {
    manualLog("Interface v0.2.1 Inicializada.");
    renderEncGrid();
});
