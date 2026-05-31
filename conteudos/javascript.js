// ==========================================
// 1. BANCO DE DADOS: HTML
// ==========================================
const conteudosHTML = {
    "Conceito de Tags": `
        <p>As tags são a base da linguagem HTML e funcionam como comandos que informam ao navegador como o conteúdo deve ser estruturado. No desenvolvimento de jogos, elas são usadas para definir desde a área onde o jogo será exibido até os botões de menu e textos de interface. Cada tag é envolvida por colchetes angulares.</p>
        <p>A maioria das tags trabalha em pares: uma de abertura e uma de fechamento (que possui uma barra), como em <code>&lt;p&gt;Texto&lt;/p&gt;</code>. Essa estrutura em "cascata" permite que o desenvolvedor organize a hierarquia visual da página de forma lógica. Tags bem utilizadas garantem que o navegador interprete o código sem erros.</p>
        <p>Entender o conceito de tags é o primeiro passo para criar qualquer projeto web. Elas permitem separar o que é um título, o que é um parágrafo e o que é um script de lógica do jogo. Sem as tags, o navegador veria apenas um bloco de texto sem formatação ou funcionalidade.</p>
        <div class="code-block"><pre><code>&lt;h1&gt;Meu Primeiro Jogo&lt;/h1&gt;\n&lt;p&gt;Pressione Start para começar.&lt;/p&gt;</code></pre></div>`,

    "Estrutura Global": `
        <p>Todo documento HTML5 profissional precisa seguir uma estrutura global obrigatória. Isso garante que o navegador identifique o arquivo como um site moderno e aplique as regras de renderização corretamente. Essa estrutura começa sempre com a declaração <code>&lt;!DOCTYPE html&gt;</code>.</p>
        <p>Dentro da tag principal <code>&lt;html&gt;</code>, dividimos o código em duas grandes áreas: o <code>&lt;head&gt;</code> e o <code>&lt;body&gt;</code>. No cabeçalho ficam as configurações invisíveis ao usuário. No corpo fica tudo o que o jogador realmente vê na tela.</p>
        <p>Manter essa organização é fundamental para evitar conflitos de carregamento de scripts. Em jogos web, geralmente chamamos o motor do jogo no final do body para garantir que todos os elementos visuais já tenham sido carregados pelo navegador.</p>
        <div class="code-block"><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Game Page&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;!-- O jogo entra aqui --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre></div>`,

    "Tags de Texto": `
        <p>As tags de texto são usadas para exibir informações escritas, como diálogos de NPCs, pontuação ou descrições de itens. As tags mais comuns são os títulos (<code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code>) e os parágrafos (<code>&lt;p&gt;</code>).</p>
        <p>Além das básicas, existem tags para destacar partes do texto, como <code>&lt;strong&gt;</code> para negrito ou <code>&lt;em&gt;</code> para itálico. Em interfaces de jogos, isso é útil para destacar nomes de itens lendários ou valores críticos de dano.</p>
        <p>Usar as tags corretas não apenas melhora o visual, mas também ajuda na acessibilidade e no SEO do projeto. O navegador entende automaticamente a hierarquia e o espaçamento padrão entre esses elementos.</p>
        <div class="code-block"><pre><code>&lt;h2&gt;Missão Principal&lt;/h2&gt;\n&lt;p&gt;Encontre a &lt;strong&gt;Chave de Ouro&lt;/strong&gt; no calabouço.&lt;/p&gt;</code></pre></div>`,

    "Meta Tags Técnicas": `
        <p>As meta tags ficam localizadas dentro do cabeçalho do documento e fornecem instruções técnicas essenciais para o navegador. A tag <code>charset="UTF-8"</code> é obrigatória para que caracteres especiais funcionem corretamente.</p>
        <p>Outra meta tag crucial para jogos web é a <code>viewport</code>. Ela configura como a página deve se comportar em telas de celulares e tablets, garantindo que o jogo não fique com zoom exagerado.</p>
        <p>Embora sejam invisíveis para o jogador, essas tags ditam a compatibilidade do projeto e ajudam na divulgação do jogo para novos usuários.</p>
        <div class="code-block"><pre><code>&lt;meta charset="UTF-8"&gt;\n&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre></div>`,

    "Atributos e IDs": `
        <p>Atributos são propriedades que adicionamos às tags para modificar seu comportamento ou identificá-las. O atributo <code>id</code> funciona como um nome exclusivo para um elemento, permitindo que o JavaScript o encontre rapidamente.</p>
        <p>Enquanto o <code>id</code> deve ser único, o atributo <code>class</code> pode ser usado em vários elementos ao mesmo tempo, aplicando o mesmo estilo visual simultaneamente.</p>
        <p>IDs são usados para elementos de controle (como a tela de Canvas), enquanto classes são usadas para elementos de design que se repetem na interface.</p>
        <div class="code-block"><pre><code>&lt;div id="jogador-um" class="status-box"&gt;&lt;/div&gt;\n&lt;div id="jogador-dois" class="status-box"&gt;&lt;/div&gt;</code></pre></div>`,

    "Links e Navegação": `
        <p>A tag <code>&lt;a&gt;</code> (âncora) é utilizada para criar links que conectam diferentes páginas. Em um portal de jogos, pode levar o jogador do menu principal para a página de créditos.</p>
        <p>O atributo principal é o <code>href</code>, que indica o destino. É comum usar o atributo <code>target="_blank"</code> para que o link abra em uma nova aba, mantendo o jogo aberto.</p>
        <p>Links também podem ser usados para navegar dentro da mesma página (âncoras internas), o que é útil em wikis de jogos longas.</p>
        <div class="code-block"><pre><code>&lt;a href="creditos.html"&gt;Ver Créditos&lt;/a&gt;\n&lt;a href="https://wiki.com" target="_blank"&gt;Wiki do Jogo&lt;/a&gt;</code></pre></div>`,

    "Listas de Inventário": `
        <p>As listas são a melhor forma de organizar conjuntos de informações. Existem listas não ordenadas (<code>&lt;ul&gt;</code>) com marcadores, e ordenadas (<code>&lt;ol&gt;</code>) com números.</p>
        <p>Usamos a tag <code>&lt;li&gt;</code> para cada item. Em jogos, essas tags são perfeitas para estruturar inventários, listas de missões ativas ou logs de combate.</p>
        <p>O uso de listas facilita muito a estilização com CSS e garante a leitura correta por tecnologias assistivas.</p>
        <div class="code-block"><pre><code>&lt;ul&gt;\n    &lt;li&gt;Poção de Cura&lt;/li&gt;\n    &lt;li&gt;Espada de Ferro&lt;/li&gt;\n&lt;/ul&gt;</code></pre></div>`,

    "Inserção de Mídia": `
        <p>Tags como <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code> e <code>&lt;video&gt;</code> inserem arquivos visuais e sonoros. A tag de imagem utiliza o atributo <code>src</code> para localizar o arquivo do sprite.</p>
        <p>Sempre devemos utilizar o atributo <code>alt</code> em imagens para fornecer uma descrição textual de emergência.</p>
        <p>Para áudio, o HTML5 oferece controles nativos, mas em jogos, ocultamos esses controles visuais e comandamos o som direto pelo JavaScript.</p>
        <div class="code-block"><pre><code>&lt;img src="hero.png" alt="Herói do Jogo"&gt;\n&lt;audio src="tema.mp3" controls&gt;&lt;/audio&gt;</code></pre></div>`,

    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> é um container genérico invisível que ajuda a organizar o layout do jogo em blocos separados, facilitando a vida do CSS.</p>
        <p>Você pode colocar toda a interface do usuário (HUD) dentro de uma div chamada "hud-container", movendo todos os elementos de uma vez.</p>
        <p>É a ferramenta mais versátil para estruturar layouts complexos e criar camadas sobrepostas.</p>
        <div class="code-block"><pre><code>&lt;div class="menu-pausa"&gt;\n    &lt;button&gt;Continuar&lt;/button&gt;\n    &lt;button&gt;Sair&lt;/button&gt;\n&lt;/div&gt;</code></pre></div>`,

    "Comentários de Código": `
        <p>Comentários no HTML não são processados pelo navegador e não aparecem na tela. Servem para o programador organizar as notas lógicas.</p>
        <p>Em projetos grandes, os comentários marcam onde começa e termina cada seção da interface.</p>
        <p>Ajudam a desativar temporariamente blocos de código sem a necessidade de apagá-los.</p>
        <div class="code-block"><pre><code>&lt;!-- Início da Seção de Inventário --&gt;\n&lt;div id="inv"&gt;&lt;/div&gt;\n&lt;!-- Fim da Seção de Inventário --&gt;</code></pre></div>`,

    "Elementos Semânticos (Header, Nav, Footer)": `<p>Tags semânticas indicam claramente a função de cada parte da página, organizando melhor a estrutura do código.</p><div class="code-block"><pre><code>&lt;header&gt;\n    &lt;h1&gt;Dragon Quest&lt;/h1&gt;\n&lt;/header&gt;</code></pre></div>`,
    "Seções de Conteúdo (Section, Article, Aside)": `<p>Dividem o conteúdo tematicamente. Ótimas para separar perfil, conquistas e lista de amigos em abas isoladas.</p><div class="code-block"><pre><code>&lt;section id="conquistas"&gt;&lt;/section&gt;</code></pre></div>`,
    "Estrutura de Tabelas Simples (Table, Tr, Td)": `<p>Organizam estatísticas e lojas de itens em colunas perfeitas que não quebram a estética da interface.</p><div class="code-block"><pre><code>&lt;table&gt;\n    &lt;tr&gt;\n        &lt;td&gt;Espada&lt;/td&gt;\n        &lt;td&gt;Dano: 10&lt;/td&gt;\n    &lt;/tr&gt;\n&lt;/table&gt;</code></pre></div>`,
    "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": `<p>Protegem o título da tabela para que ele não suma ao rolar um longo Leaderboard mundial para baixo.</p><div class="code-block"><pre><code>&lt;thead&gt;\n    &lt;tr&gt;&lt;th&gt;Posição&lt;/th&gt;&lt;th&gt;Kills&lt;/th&gt;&lt;/tr&gt;\n&lt;/thead&gt;</code></pre></div>`,
    "Formulários Básicos (Form, Input, Label)": `<p>Coletam textos do usuário, como o nome do herói. Labels garantem que clicar no nome selecione a caixa de texto automaticamente.</p><div class="code-block"><pre><code>&lt;form&gt;\n    &lt;label&gt;Nome:&lt;/label&gt;\n    &lt;input type="text"&gt;\n&lt;/form&gt;</code></pre></div>`,
    "Tipos de Input (Text, Password, Email, Button)": `<p>Mudar o tipo de input força o teclado do celular a se adaptar (exibindo símbolo de arroba ou escondendo a senha).</p><div class="code-block"><pre><code>&lt;input type="password" placeholder="Senha"&gt;</code></pre></div>`,
    "Seleções em Formulários (Radio, Checkbox, Select)": `<p>Criam menus de configurações, escolha de idiomas ou opções gráficas essenciais nos menus do game.</p><div class="code-block"><pre><code>&lt;select&gt;\n    &lt;option&gt;Servidor BR&lt;/option&gt;\n&lt;/select&gt;</code></pre></div>`,
    "Validação Nativa de Formulários": `<p>Usa atributos 'required' ou 'minlength' para barrar lixo enviado pro servidor antes mesmo do JavaScript agir.</p><div class="code-block"><pre><code>&lt;input type="text" required minlength="4"&gt;</code></pre></div>`,
    "Introdução à Acessibilidade (Atributos ARIA)": `<p>Injeta legendas ocultas em ícones gráficos para garantir que softwares de leitura leiam a interface para jogadores cegos.</p><div class="code-block"><pre><code>&lt;div role="progressbar" aria-valuenow="50"&gt;&lt;/div&gt;</code></pre></div>`,
    "A tag <dialog> (Modais Nativos)": `<p>Gera pop-ups perfeitos (Telas de Pausa) que bloqueiam os cliques no fundo automaticamente com total estabilidade visual.</p><div class="code-block"><pre><code>&lt;dialog id="lojaModal"&gt;\n    &lt;button onclick="this.parentNode.close()"&gt;Fechar&lt;/button&gt;\n&lt;/dialog&gt;</code></pre></div>`,
    
    "A tag <canvas> (O Palco dos Jogos)": `<p>A área sagrada do rendering 2D e 3D. A tela final gráfica controlada linha por linha pelo Javascript.</p><div class="code-block"><pre><code>&lt;canvas id="tela" width="800" height="400"&gt;&lt;/canvas&gt;</code></pre></div>`,
    "SVG inline (<svg> e <path>)": `<p>Gráficos em código matemático puro, perfeitos para HUDs limpas que não borram com o zoom da tela.</p>`,
    "Imagens Responsivas (<picture> e srcset)": `<p>Entrega sprites grandes para PCs e imagens comprimidas para celulares automaticamente, salvando banda e RAM.</p>`,
    "Áudios Avançados (Atributos e Eventos de <audio>)": `<p>Controle preciso de repetições (loops) e separação de faixas para efeitos (tiros) e trilhas sonoras independentes.</p>`,
    "Pré-carregamento de Assets (preload e prefetch)": `<p>Instruções no cabeçalho que baixam gigabytes gráficos ocultamente enquanto a barra de Loading avança.</p>`,
    "Iframe Avançado (<iframe> e Sandbox)": `<p>Embutir portais paralelos sem o risco de scripts invasores hackearem a aba principal.</p>`,
    "Manipulação de Templates (<template> e <slot>)": `<p>Fábricas de clonagem em HTML para multiplicar 100 poções no inventário sem repetir código bruto manualmente.</p>`,
    "Armazenamento no Navegador (O papel técnico do HTML5)": `<p>Cria Saves locais via LocalStorage para jogadores manterem seu progresso travado offline no HD da própria máquina.</p>`,
    "Componentes Web Nativos (Custom Elements)": `<p>Tags 100% próprias (&lt;vida-heroi&gt;) criadas do zero para modularizar lógicas isoladas da interface sem quebrar o CSS raiz.</p>`,
    "Acessibilidade de Teclado Avançada (tabindex e Foco)": `<p>Permite navegar no inventário complexo unicamente pelas setas numéricas fluindo pelo foco sem mouse ativo.</p>`
};

// ==========================================
// 2. BANCO DE DADOS: JAVASCRIPT
// ==========================================
const conteudosJS = {
    "Variáveis e Constantes (let e const)": `
        <p>As variáveis e constantes são os alicerces, recipientes na memória para armazenar informações. Usamos <code>let</code> para dados voláteis, como posição, e <code>const</code> para valores imutáveis (gravidade).</p>
        <p>Declaramos no topo para configurar a cena. O <code>const</code> define parâmetros globais. Já o <code>let</code> é usado no Game Loop para atualizar coordenadas continuamente.</p>
        <p>Se definir a gravidade como variável comum e alterá-la, o personagem flutua descontrolado. O <code>const</code> garante que a cadência visual se mantenha firme do início ao fim.</p>
        <div class="code-block"><pre><code>const GRAVIDADE = 0.8;\nlet personagemX = 100;\nlet vidaAtual = 3;</code></pre></div>`,

    "Tipos de Dados Essenciais": `
        <p>Os Numbers cuidam da matemática (velocidade, ângulo). Strings são sequências textuais (nome, diálogos). Booleans assumem true/false, funcionando como interruptores.</p>
        <p>Numbers calculam colisões. Strings exibem mensagens de "Level Up!". Booleans controlam estados, impedindo pulos duplos infinitos se o herói não estiver no chão.</p>
        <p>Entender a diferença evita tentar somar textos com números, garantindo que animações e inteligências artificiais operem com lógica de decisão humana perfeita.</p>
        <div class="code-block"><pre><code>let pontuacao = 0;\nlet nomeJogador = "Arqueiro";\nlet estaNoChao = true;</code></pre></div>`,

    "Operadores Matemáticos e Lógicos": `
        <p>Matemáticos (+, -) atualizam coordenadas. Lógicos (&&, ||) combinam perguntas, simulando tomadas de decisão complexas antes de permitir um disparo ou pulo.</p>
        <p>Para um pulo duplo, usamos && (Botão Pressionado E Contador Maior que zero). O || checa se caiu no buraco OU tocou no espinho para matar o herói.</p>
        <p>É essa combinação que assegura que o mundo virtual tenha leis rígidas, tornando o jogo desafiador e mantendo a jogabilidade perfeitamente justa pro usuário.</p>
        <div class="code-block"><pre><code>let apertouPulo = true;\nif (apertouPulo && estaNoChao) {\n    pular();\n}</code></pre></div>`,

    "Estruturas Condicionais (if, else, else if)": `
        <p>As bifurcações que fazem o jogo "pensar". O código pergunta e, se verdadeiro, executa um bloco. Sem isso, não há interatividade entre atacar ou fugir.</p>
        <p>Controlam a vida constantemente: se cair abaixo de um, o else dispara a animação de morte. Decidem quando mostrar o menu de pausa ou efeitos visuais.</p>
        <p>Definem as consequências reais dentro do seu mundo virtual. Conectam a física aos visuais dependendo puramente da entrada do usuário logado.</p>
        <div class="code-block"><pre><code>if (vidaHeroi <= 0) {\n    console.log("Game Over!");\n} else {\n    console.log("Continuar lutando!");\n}</code></pre></div>`,

    "Estruturas de Repetição (for e while)": `
        <p>Loops executam o mesmo código de forma automatizada dezenas de vezes. Geram cem estrelas de cenário num milissegundo. O while repete lógicas temporais.</p>
        <p>Fundamentais para varrer listas de inimigos, desenhar blocos do chão ou aplicar física em cem partículas de explosão simultaneamente sem redigir linhas repetidas.</p>
        <p>Garantem que a performance não caia e que grandes multidões de entidades operem de forma organizada nos mapas gigantes com baixíssimo custo do código.</p>
        <div class="code-block"><pre><code>for (let i = 0; i < 5; i++) {\n    criarZumbiAleatorio();\n}</code></pre></div>`,

    "Introdução às Funções": `
        <p>Blocos modulares que agrupam comandos. "Receitas" prontas: define-se o cálculo de dano uma vez, e sempre que a granada estourar, a função é invocada pela engine.</p>
        <p>Evitam "código espaguete". Ter uma aplicarGravidade() separada assegura que mexer no pulo não quebre acidentalmente a lógica do placar geral de vitórias.</p>
        <p>Transformam scripts amadores em motores robustos, aplicando lógicas universais tanto a heróis quanto aos monstros num estalar de dedos.</p>
        <div class="code-block"><pre><code>function causarDano(entidade, valor) {\n    entidade.vida -= valor;\n}</code></pre></div>`,

    "Arrays Simples (Listas)": `
        <p>Arrays guardam múltiplos valores sequenciais (inventários). O acesso é rápido, e você pode adicionar itens coletados ao final da fila automaticamente (push).</p>
        <p>Perfeitos para guardar nomes de arquivos (sprites) de uma animação, percorrendo-a para criar a ilusão gráfica, ou para checar a colisão contra mil objetos agrupados.</p>
        <p>Lidam com o caos dos conteúdos dinâmicos que nascem e morrem, ordenando toda a informação caótica na memória RAM do PC durante a jogatina de longo prazo.</p>
        <div class="code-block"><pre><code>let inventario = ["Espada", "Escudo"];\ninventario.push("Poção");</code></pre></div>`,

    "Objetos Básicos (Chave e Valor)": `
        <p>Objetos tratam personagens como entidades complexas de ficha unida: Vida, Força e Velocidade guardados juntos. Diferente do array, cada valor tem uma "chave" nomeada.</p>
        <p>Em vez de criar playerX e playerY soltos, criamos um bloco fechado que viaja pelo sistema. Fundamental para definir chefões, NPCs e engrenagens estáticas do mapa.</p>
        <p>Garantem a evolução escalável. Adicionar um atributo de "Mana" não quebra a estrutura, pois tudo fica arrumado internamente na gaveta correta do vilão.</p>
        <div class="code-block"><pre><code>const heroi = { nome: "Bárbaro", vida: 100, forca: 15 };\nheroi.vida -= 10;</code></pre></div>`,

    "Manipulação Básica do DOM (getElementById)": `
        <p>O DOM é a ponte do JS alterando o HTML. O getElementById acha a barra de vida ou a tela do jogo e modifica seus tamanhos, cores ou imagens programaticamente.</p>
        <p>Controla toda a interface do usuário (UI). Mostra telas de Vitória ou Derrota trocando textos dinâmicos de pontuação a cada milissegundo de acertos no jogo.</p>
        <p>É o que mantém o jogador ciente do próprio estado, acoplando a matemática fria aos visuais quentes integrados perfeitos na aba limpa do navegador.</p>
        <div class="code-block"><pre><code>const placar = document.getElementById("placar-ui");\nplacar.innerText = "Pontos: 1500";</code></pre></div>`,

    "Eventos de Teclado e Mouse (addEventListener)": `
        <p>Radares absolutos de interação! addEventListener escuta o keydown e converte a intenção física do dedo em pulo imediato ou disparo bélico das armas na mão.</p>
        <p>Sem eles o jogo seria vídeo passivo. Respondem as reações em timing cirúrgico, interrompendo corridas caso as teclas sejam soltas, devolvendo inércia realística.</p>
        <p>Implementação precisa elimina travamento de botões no momento crucial da batalha exigindo precisão e reflexos dos hardwares traduzidos aos softwares.</p>
        <div class="code-block"><pre><code>document.addEventListener("keydown", (evento) => {\n    if (evento.key === " ") pular();\n});</code></pre></div>`,

    // INTERMEDIÁRIOS E AVANÇADOS...
    "O Game Loop e requestAnimationFrame": `<p>A engrenagem do jogo. requestAnimationFrame repete o cálculo 60 vezes por segundo com fluidez perfeita sem engasgar o monitor, travando a leitura quando o jogador minimiza a aba poupando RAM.</p><div class="code-block"><pre><code>function loop() { \n  atualizar(); \n  requestAnimationFrame(loop); \n}\nloop();</code></pre></div>`,
    "Delta Time (Movimento Suave)": `<p>Multiplica as posições pelo tempo corrido. Garante que um PC potente de 144Hz e um celular lento movam o personagem exatamente na mesma velocidade física sem dar vantagens.</p><div class="code-block"><pre><code>jogador.x += velocidade * deltaTime;</code></pre></div>`,
    "Classes e Construtores (POO)": `<p>A planta baixa para clonar 50 inimigos rapidamente através do comando 'new Inimigo()', cada um possuindo sua própria vida encapsulada no chassi sem poluir o código global solto.</p><div class="code-block"><pre><code>const zumbi1 = new Zumbi();\nconst zumbi2 = new Zumbi();</code></pre></div>`,
    "Física de Pulo e Gravidade": `<p>Aplicação de vetores decrescentes parabólicos (isGrounded) cravando os pés na altura da sprite correta impedindo a falha do boneco voar travado sem descer no eixo.</p><div class="code-block"><pre><code>velocidadeY += gravidade; \nif(y >= chao) isGrounded = true;</code></pre></div>`,
    "Colisão Retangular (AABB)": `<p>Matemática de caixa delimitadora extremamente leve varrendo quem cruzou as linhas laterais um do outro processando o dano letal antes da imagem transpassar o corpo inimigo de fato.</p><div class="code-block"><pre><code>if (a.x < b.x + b.largura) { colidiu(); }</code></pre></div>`,
    "Animação e Spritesheets": `<p>Corte metódico de imagens gigantes somando 0.1 segundos do Delta Time pulando quadro a quadro (frame++) gerando ciclos de caminhada perfeitos nos recortes 32x32px.</p><div class="code-block"><pre><code>tempo += delta; \nif(tempo > 0.1) frameAtual++;</code></pre></div>`,
    "Controle de Estados Simples": `<p>Usa a Máquina de Estados blindando ações (Se estado == "MORTO", ignora teclado) impedindo que o boneco deslize batendo a espada flutuando de forma errada e amadora.</p><div class="code-block"><pre><code>if (estado === "MORTO") return;</code></pre></div>`,
    "Vetores e Movimentação 2D": `<p>Cálculo de Pitágoras com Seno e Cosseno impedindo o herói correr mais rápido pela linha diagonal, estabilizando a cinemática bidirecional fluida dos 360 graus puros.</p><div class="code-block"><pre><code>x += Math.cos(angulo) * velMax;</code></pre></div>`,
    "Arrays e Gerenciamento de Entidades": `<p>Acomodar os tiros ativos em listas (Arrays) lidos de trás pra frente no For, deletando apagados (splice) gerindo centenas de balas na cena sem travar ou bugar posições indexadas.</p><div class="code-block"><pre><code>arrayBalas.splice(index, 1);</code></pre></div>`,
    "Modularização (Módulos JS)": `<p>Isolar IA inimiga do código físico em arquivos puros puxando apenas via "Import", livrando a dor de cabeça arquitetural gigantesca quando a expansão engolir proporções indies massivas.</p><div class="code-block"><pre><code>import { Inimigo } from './enemy.js';</code></pre></div>`,

    "Callbacks e Event Loop": `<p>Delega contadores demorados aos bastidores (setTimeout), para porta abrir após 3 segundos sem congelar o loop e a fluidez das animações dos NPCs presentes.</p>`,
    "Promises (Promessas)": `<p>Blindam os pacotes pesados garantindo que texturas colossais foram absorvidas pela rede antes da Engine iniciar os frames visuais cortando falhas e imagens pretas na partida.</p>`,
    "Async / Await": `<p>Limpeza cronológica das promises em código, ordenando Loading de contas antes de mapas, construindo roteiros legíveis puros do fluxo temporal sem teias infernais cegas lógicas.</p>`,
    "Recursividade": `<p>As funções automáticas refratadas invocam a si mesmas gerando túneis imensos testados pelas IA varrendo algoritmos profundos procurando rotas em micro-segundos absolutos táticos.</p>`,
    "Manipulação Avançada de Objetos": `<p>Fundem dezenas de magias em Armaduras Bases (Object.assign) num choque instantâneo gerindo metadados extensivos de craft limitando blocos inteiros redigidos manuais inúteis na fábrica.</p>`,
    "APIs e Fetch": `<p>Ponte ao mundo global transferindo recordes absurdos direto pra AWS conectando pontuação isolada ao pódio de heróis mundiais online via requisições de servidor externas em nuvem.</p>`,
    "Bitwise Operators (Operadores de Bit)": `<p>Ataques duplos compactam os debuffs da dor numa pancada inteira varrida com OR (|) cruzando status por bit escovando poder letal direto pro transistor poupando processamento máximo RAM.</p>`,
    "Regular Expressions (Regex)": `<p>A foice detectora de invasões. Lâminas invisíveis rastreiam códigos e higienizam digitações de script impedindo corrupção nos chats e liberando trapaças formatadas no terminal local puro.</p>`,
    "Memory Management (Garbage Collector)": `<p>Assassinos de referências inativas (= null) devolvem a memória ao ceifar o chefe derrotado extinguindo o monstro que sugava 2GB invisíveis arrastando o cache do computador inteiro.</p>`,
    "Design Patterns (Padrões de Projeto)": `<p>Fôrmas de arquiteturas limpas sagradas estacando lógicas Observer e Singleton assegurando que seu programa cresça para além do infinito protegendo o núcleo original com blindagem arquitetural extrema.</p>`
};

// ==========================================
// 3. ESTRUTURA DO MOTOR E GRELHA
// ==========================================
const db = {
    html: {
        iniciante: ["Conceito de Tags", "Estrutura Global", "Tags de Texto", "Meta Tags Técnicas", "Atributos e IDs", "Links e Navegação", "Listas de Inventário", "Inserção de Mídia", "Containers Div", "Comentários de Código"],
        intermediario: ["Elementos Semânticos (Header, Nav, Footer)", "Seções de Conteúdo (Section, Article, Aside)", "Estrutura de Tabelas Simples (Table, Tr, Td)", "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)", "Formulários Básicos (Form, Input, Label)", "Tipos de Input (Text, Password, Email, Button)", "Seleções em Formulários (Radio, Checkbox, Select)", "Validação Nativa de Formulários", "Introdução à Acessibilidade (Atributos ARIA)", "A tag <dialog> (Modais Nativos)"],
        avancado: ["A tag <canvas> (O Palco dos Jogos)", "SVG inline (<svg> e <path>)", "Imagens Responsivas (<picture> e srcset)", "Áudios Avançados (Atributos e Eventos de <audio>)", "Pré-carregamento de Assets (preload e prefetch)", "Iframe Avançado (<iframe> e Sandbox)", "Manipulação de Templates (<template> e <slot>)", "Armazenamento no Navegador (O papel técnico do HTML5)", "Componentes Web Nativos (Custom Elements)", "Acessibilidade de Teclado Avançada (tabindex e Foco)"]
    },
    css: { 
        iniciante: [], intermediario: [], avancado: [] 
    },
    js: { 
        iniciante: ["Variáveis e Constantes (let e const)", "Tipos de Dados Essenciais", "Operadores Matemáticos e Lógicos", "Estruturas Condicionais (if, else, else if)", "Estruturas de Repetição (for e while)", "Introdução às Funções", "Arrays Simples (Listas)", "Objetos Básicos (Chave e Valor)", "Manipulação Básica do DOM (getElementById)", "Eventos de Teclado e Mouse (addEventListener)"], 
        intermediario: ["O Game Loop e requestAnimationFrame", "Delta Time (Movimento Suave)", "Classes e Construtores (POO)", "Física de Pulo e Gravidade", "Colisão Retangular (AABB)", "Animação e Spritesheets", "Controle de Estados Simples", "Vetores e Movimentação 2D", "Arrays e Gerenciamento de Entidades", "Modularização (Módulos JS)"], 
        avancado: ["Callbacks e Event Loop", "Promises (Promessas)", "Async / Await", "Recursividade", "Manipulação Avançada de Objetos", "APIs e Fetch", "Bitwise Operators (Operadores de Bit)", "Regular Expressions (Regex)", "Memory Management (Garbage Collector)", "Design Patterns (Padrões de Projeto)"] 
    }
};

let currentTech = 'html';
let currentLevel = 'iniciante';

function setTech(tech) {
    currentTech = tech;
    document.querySelectorAll('.main-btn').forEach(b => b.classList.remove('active-html', 'active-css', 'active-js'));
    const btn = document.getElementById('btn-' + tech);
    if (btn) btn.classList.add('active-' + tech);
    if (currentTech === 'js' && currentLevel === 'intermediario') currentLevel = 'iniciante'; 
    setLevel(currentLevel);
}

function setLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active-lvl'));
    const btn = document.getElementById('lvl-' + lvl);
    if (btn) btn.classList.add('active-lvl');
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
        const safeTitle = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        card.innerHTML = `<h3>${safeTitle}</h3>`;
        card.onclick = () => openModal(topic);
        grid.appendChild(card);
    });
}

function openModal(topic) {
    const overlay = document.getElementById('reader');
    const container = document.getElementById('reader-body');
    let content = "<p>Conteúdo em fase de produção.</p>";

    if (currentTech === 'html' && conteudosHTML[topic]) {
        content = conteudosHTML[topic];
    } else if (currentTech === 'js' && conteudosJS[topic]) {
        content = conteudosJS[topic];
    }
    
    if (overlay && container) {
        const safeTitle = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        container.innerHTML = `<h2>${safeTitle}</h2>${content}`;
        overlay.style.display = 'flex';
        setTimeout(() => overlay.classList.add('active'), 10);
        document.body.style.overflow = 'hidden'; 
    }
}

function closeModal() {
    const overlay = document.getElementById('reader');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        }, 200);
    }
}

window.addEventListener('click', (e) => {
    const overlay = document.getElementById('reader');
    if (e.target === overlay) closeModal();
});

// A VANTAGEM DE TER TUDO JUNTO: Não precisa esperar a internet!
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    renderEncGrid();
} else {
    document.addEventListener('DOMContentLoaded', renderEncGrid);
}
