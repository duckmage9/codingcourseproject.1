window.conteudosJS = {
    // ==========================================
    // === NÍVEL INICIANTE ===
    // ==========================================

    "Variáveis e Constantes (let e const)": `
        <p>As variáveis e constantes são os alicerces de qualquer jogo, funcionando como recipientes na memória do computador para armazenar informações que mudam ou permanecem fixas. No JavaScript moderno, utilizamos o <code>let</code> para dados voláteis, como a posição atual de um herói que corre pelo cenário, e o <code>const</code> para valores que definem as regras imutáveis do universo do seu jogo. Imagine que o computador precisa de um endereço para consultar, a cada fração de segundo, onde o jogador está ou quanta munição ele ainda possui.</p>
        <p>No fluxo de desenvolvimento de um jogo web, você declarará essas variáveis geralmente no topo do seu arquivo JS para configurar o estado inicial da cena. O <code>const</code> deve ser sua primeira escolha para definir parâmetros globais, como a força da gravidade que puxa os objetos para baixo ou o caminho da pasta onde estão guardadas as imagens dos sprites. Já o <code>let</code> será usado exaustivamente dentro do seu "Game Loop" para atualizar coordenadas matemáticas dinamicamente.</p>
        <p>A importância real deste tema reside no controle absoluto sobre a física e a lógica de tempo do seu projeto. Se você definir a gravidade como uma variável comum e, por erro, o código alterá-la no meio da partida, seu personagem pode sair flutuando sem controle, quebrando a experiência. Ao usar <code>const</code>, você garante que o jogo mantenha a mesma cadência visual do início ao fim.</p>
        <div class="code-block"><pre><code>// Definindo regras fixas do mundo (Constantes)
const GRAVIDADE = 0.8; 
const VELOCIDADE_SALTO = -15; 

// Armazenando estados que mudam (Variáveis)
let personagemX = 100; 
let personagemY = 500; 
let vidaAtual = 3; 

// O jogador sofre dano
vidaAtual = vidaAtual - 1; 
console.log("Restam: " + vidaAtual);</code></pre></div>`,

    "Tipos de Dados Essenciais": `
        <p>Os tipos de dados são as diferentes naturezas de informação que o JavaScript consegue processar. Os Numbers cuidam de toda a parte matemática, desde a velocidade de um projétil até o ângulo de rotação de uma nave. As Strings são sequências de caracteres usadas para toda a comunicação textual, como o nome que o jogador escolhe. Por fim, os Booleans são os tipos mais simples e poderosos, assumindo apenas <code>true</code> (verdadeiro) ou <code>false</code> (falso), funcionando como interruptores lógicos.</p>
        <p>Na prática, você utilizará Numbers para calcular colisões e pontuações, garantindo que o placar suba quando um inimigo é derrotado. As Strings serão enviadas para a interface para exibir mensagens de "Level Up!" ou carregar nomes de arquivos. Os Booleans são indispensáveis para controlar os estados do personagem, como <code>estaNoChao</code>, para impedir pulos duplos infinitos.</p>
        <p>Entender a diferença entre esses tipos evita bugs catastróficos, como tentar somar um número a um texto. A precisão dos Numbers permite animações corretas, Strings permitem internacionalização, e Booleans conectam a percepção visual do jogador com a execução lógica da máquina.</p>
        <div class="code-block"><pre><code>let pontuacao = 0; // Number
let nomeJogador = "Arqueiro Verde"; // String
let estaNoChao = true; // Boolean

if (estaNoChao === true) {
    console.log(nomeJogador + " pode pular!");
}</code></pre></div>`,

    "Operadores Matemáticos e Lógicos": `
        <p>Operadores são os símbolos que permitem realizar cálculos e comparações, agindo como o motor que processa as regras de movimento. Os matemáticos (+, -, *, /) atualizam coordenadas a cada milissegundo. Já os operadores lógicos, como o && (E) e o || (OU), servem para combinar múltiplas perguntas em uma única instrução complexa, avaliando contextos inteiros.</p>
        <p>A matemática está em toda parte: soma para mover para a direita e subtração para a esquerda. Para um "pulo duplo", você usaria && para verificar se o botão foi pressionado E se o contador de pulos é maior que zero. O || verifica se o jogador tocou em um espinho OU caiu em um buraco.</p>
        <p>Sem eles, o cenário seria estático e as regras do jogo seriam limitadas. É através dessa combinação que você cria um mundo sólido, onde ações só produzem resultados se obedecerem a critérios rigorosos de gameplay e justiça.</p>
        <div class="code-block"><pre><code>let playerX = 50;
let velocidade = 5;
playerX = playerX + velocidade; // Soma

let apertouPulo = true;
let estaNoChao = true;

if (apertouPulo && estaNoChao) {
    console.log("Pulo realizado com sucesso!");
}</code></pre></div>`,

    "Estruturas Condicionais (if, else, else if)": `
        <p>Estruturas condicionais são bifurcações lógicas que permitem ao jogo "pensar". O código faz uma pergunta e, caso seja verdadeira, executa um bloco específico de instruções. Sem elas, o jogo seria incapaz de processar interatividade, pois não haveria como distinguir entre estar parado ou atacando.</p>
        <p>Se o jogador pressionar "D", a condicional detecta e move o personagem; caso contrário, se for "A", move para a esquerda. Elas também monitoram a vida constantemente: se cair abaixo de um, dispara a animação de morte e reseta o nível.</p>
        <p>A relevância é vital, pois definem as fronteiras virtuais. Decidem se deve exibir a animação de corrida ou pulo com base na velocidade. Sem o poder de decisão do if, o jogo não conseguiria validar se o jogador atingiu a pontuação para passar de fase.</p>
        <div class="code-block"><pre><code>let vidaHeroi = 50;
let entrada = "DIREITA";
let posicaoX = 100;

if (entrada === "DIREITA") {
    posicaoX += 5; 
} else if (entrada === "ESQUERDA") {
    posicaoX -= 5; 
}

if (vidaHeroi <= 0) {
    console.log("Game Over!");
}</code></pre></div>`,

    "Estruturas de Repetição (for e while)": `
        <p>Loops são mecanismos que executam o mesmo bloco de código múltiplas vezes de forma automatizada. Em vez de escrever cem linhas para criar cem estrelas no fundo, um loop for repete a ação. O while repete enquanto uma condição for verdadeira, ideal para filas de efeitos.</p>
        <p>Eles são fundamentais para gerenciar grandes coleções de elementos na tela. Você usará para percorrer uma lista de inimigos e atualizar suas posições, ou para desenhar blocos de um tilemap. Em sistemas de partículas, um loop processa cada faísca de explosão individualmente.</p>
        <p>A importância real está na escalabilidade. Eles permitem verificar colisões de uma horda inteira sem tratar zumbi por zumbi, mantendo a taxa de quadros estável. São o coração da automação procedural.</p>
        <div class="code-block"><pre><code>let totalInimigos = 5;
let posicoes = [];

for (let i = 0; i < totalInimigos; i++) {
    posicoes.push(Math.random() * 800);
}

let escudo = 100;
while (escudo > 0) {
    escudo -= 25;
}</code></pre></div>`,

    "Introdução às Funções": `
        <p>Funções são blocos de construção modulares que agrupam comandos sob um nome, permitindo reutilizar lógica. São como "receitas": define-se uma vez como calcular dano de explosão e apenas se invoca a função quando necessário. Podem receber parâmetros e devolver resultados.</p>
        <p>No fluxo do jogo, separam as responsabilidades. Você terá funções como aplicarGravidade(), verificarColeta() e renderizarMapa(), evitando o "código espaguete". Quando precisar ajustar o pulo, saberá exatamente onde mexer.</p>
        <p>Permitem criar comportamentos genéricos. Uma função sofrerDano() serve tanto para o herói quanto para os monstros. Dominar funções é o segredo para transformar um script simples em um motor de jogo robusto.</p>
        <div class="code-block"><pre><code>function calcularMovimento(posicao, velocidade) {
    return posicao + velocidade;
}

function dispararAlerta(mensagem) {
    console.log("[JOGO] " + mensagem);
}

let x = 50;
x = calcularMovimento(x, 10);
dispararAlerta("Moveu para: " + x);</code></pre></div>`,

    "Arrays Simples (Listas)": `
        <p>Arrays permitem armazenar múltiplos valores em uma única variável, organizados por índices. Imagine um inventário: em vez de uma variável por item, um Array guarda todos. O acesso é rápido, e pode-se adicionar ou remover elementos dinamicamente.</p>
        <p>São ferramentas indispensáveis para gerenciar coleções, como os nomes dos arquivos de imagem (sprites) de uma animação de corrida, percorrendo a lista para gerar movimento. Perfeitos para camadas de cenário e inventários.</p>
        <p>A importância real é lidar com conteúdos que mudam. Sem eles, seria difícil gerenciar inimigos que nascem e morrem. Facilitam o processamento de colisões em massa, trazendo ordem ao caos para que o jogo cresça em complexidade.</p>
        <div class="code-block"><pre><code>let inventario = ["Espada", "Escudo"];
console.log("Equipado: " + inventario[0]);

inventario.push("Poção"); // Adiciona ao final

const frames = ["run1.png", "run2.png", "run3.png"];
console.log("Próximo frame: " + frames[1]);</code></pre></div>`,

    "Objetos Básicos (Chave e Valor)": `
        <p>Objetos agrupam propriedades e comportamentos relacionados a uma entidade, através de "chave" e "valor". Enquanto o Array é uma lista, o Objeto é uma ficha completa, guardando nome, vida e velocidade. Eles permitem tratar elementos como seres complexos e individuais.</p>
        <p>Em vez de variáveis soltas (playerX, playerY), cria-se um objeto. Isso torna o código intuitivo, passando o "pacote completo" para funções de física facilmente. Excelentes para configurar níveis inteiros com suas trilhas sonoras e dificuldades.</p>
        <p>Eles refletem a realidade do jogo. Gerenciam estados complexos de forma organizada. Se adicionar "stamina", basta incluir a nova chave no objeto, garantindo a evolução segura sem alterar a estrutura global.</p>
        <div class="code-block"><pre><code>const heroi = {
    nome: "Valente",
    vida: 100,
    x: 50,
    y: 300,
    receberDano: function(qtd) {
        this.vida -= qtd;
    }
};

heroi.receberDano(20);
heroi.x += 10;</code></pre></div>`,

    "Manipulação Básica do DOM (getElementById)": `
        <p>O DOM é a ponte de comunicação do JavaScript com o HTML. Como seu projeto usa pastas separadas, o JS precisa encontrar os elementos específicos, como o Canvas ou o placar. O método getElementById captura elementos usando seus IDs exclusivos.</p>
        <p>Usado principalmente para gerenciar a Interface de Usuário (UI). Você capturará a tag &lt;canvas&gt; para desenhar a mágica visual, e atualizará parágrafos de texto para exibir pontuações ou mensagens de Game Over em tempo real.</p>
        <p>É a conexão vital entre a lógica invisível e o feedback visual. Sem isso, o jogador não saberia sua vida. Permite criar menus responsivos e alertas que tornam o jogo web uma aplicação integrada ao navegador.</p>
        <div class="code-block"><pre><code>const canvas = document.getElementById("tela-jogo");
const placar = document.getElementById("placar");

let pontos = 0;
function ganharPonto() {
    pontos += 10;
    placar.innerText = pontos; 
}</code></pre></div>`,

    "Eventos de Teclado e Mouse (addEventListener)": `
        <p>Eventos são sinais de que o usuário interagiu. O addEventListener funciona como um vigia: observa um evento e dispara uma função. Eventos de keydown e keyup transformam intenções físicas em movimento virtual instantâneo.</p>
        <p>Configurando ouvintes contínuos, ao detectar keydown no espaço, a função de pulo roda. No keyup, o personagem para de andar, evitando deslizes infinitos. A resposta precisa ser imediata para controles responsivos.</p>
        <p>Sem eles, o jogo é um vídeo estático. Garantem a jogabilidade, permitindo esquivas no último segundo. Evitam travamentos de teclas e permitem combinações (correr e pular), elevando a diversão técnica.</p>
        <div class="code-block"><pre><code>const teclas = { direita: false };

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") teclas.direita = true;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") teclas.direita = false;
});</code></pre></div>`,

    // ==========================================
    // === NÍVEL INTERMEDIÁRIO (NOVO!) ===
    // ==========================================

    "O Game Loop e requestAnimationFrame": `
        <p>O Game Loop é o coração pulsante de qualquer motor de jogo. Diferente de um site tradicional que reage apenas quando você clica em algo, um jogo precisa recalcular a gravidade, os tiros e os movimentos dos inimigos dezenas de vezes por segundo, mesmo que você solte o controle. É esse ciclo contínuo de "Atualizar Física -> Limpar a Tela -> Desenhar Tudo de Novo" que cria a ilusão fluida de que o seu cenário de plataforma está vivo e respirando no navegador.</p>
        <p>Antigamente, usava-se o <code>setInterval</code> para forçar essa repetição, mas ele causava travamentos terríveis e "screen tearing" (cortes na imagem). A solução moderna é a função nativa <code>requestAnimationFrame</code>. Ela avisa o navegador que você deseja realizar uma animação e pede para que ele chame a função de atualização no exato momento em que o monitor do jogador estiver pronto para pintar o próximo quadro, sincronizando perfeitamente com a taxa de atualização (geralmente 60 FPS).</p>
        <p>A maior vantagem do <code>requestAnimationFrame</code>, além da extrema fluidez visual, é a otimização de bateria e performance em projetos separados em pastas de arquitetura web. Se o jogador minimizar a aba do seu jogo para olhar o WhatsApp, o navegador pausa automaticamente o Game Loop. Isso impede que a CPU frite processando física de colisões em segundo plano e evita que o seu personagem morra enquanto o usuário não estava olhando.</p>
        <div class="code-block"><pre><code>function gameLoop() {
    // 1. Atualiza as variáveis matemáticas e posições
    updateFisica(); 
    
    // 2. Apaga o frame anterior e desenha o novo no Canvas
    drawGraficos(); 
    
    // 3. Pede ao navegador para repetir o ciclo no próximo frame
    requestAnimationFrame(gameLoop);
}

// Dando o "Start" no motor pela primeira vez
requestAnimationFrame(gameLoop);</code></pre></div>`,

    "Delta Time (Movimento Suave)": `
        <p>O Delta Time é o conceito matemático mais crucial para garantir que o seu jogo seja justo para todos os jogadores. Ele representa a diferença de tempo em milissegundos que se passou entre o desenho de um frame e o próximo. Como os computadores têm potências diferentes, um PC Gamer vai rodar seu código a 144 frames por segundo, enquanto um celular antigo pode sofrer para manter 30 frames. Sem o Delta Time, o herói do celular correria em câmera lenta, e o do PC Gamer voaria para fora da tela.</p>
        <p>Para corrigir essa injustiça física, nós paramos de dizer ao código "mova o personagem 5 pixels por frame" e começamos a dizer "mova o personagem 50 pixels POR SEGUNDO". Ao multiplicar a velocidade base do personagem pelo Delta Time dentro da sua função de atualização, a distância percorrida se adapta dinamicamente: se o PC atrasar e demorar o dobro do tempo para renderizar o quadro, o personagem será teleportado o dobro da distância naquele ciclo compensando o lag perfeitamente.</p>
        <p>Aplicar essa arquitetura no seu projeto de 9° ano vai dar a ele um polimento profissional absurdo. Você passará o tempo acumulado (timestamp) capturado pelo próprio <code>requestAnimationFrame</code> e calculará a subtração do tempo antigo. É essa técnica que garante que os seus timings de 0.1 segundos para animação das sprites e a força da gravidade funcionem identicamente, independente do hardware de quem estiver jogando a sua obra.</p>
        <div class="code-block"><pre><code>let tempoAnterior = 0;
let posX = 10;
const velocidadePorSegundo = 100; // Pixels por segundo

function loop(tempoAtual) {
    // Converte a diferença de milissegundos para segundos puros (ex: 0.016s)
    let deltaTime = (tempoAtual - tempoAnterior) / 1000;
    tempoAnterior = tempoAtual;

    // A física agora é multiplicada pelo tempo decorrido!
    // Se houve lentidão, o deltaTime será maior, empurrando o jogador mais longe
    posX += velocidadePorSegundo * deltaTime;

    requestAnimationFrame(loop);
}</code></pre></div>`,

    "Classes e Construtores (POO)": `
        <p>Quando o seu jogo crescer e você precisar de 50 moedas espalhadas pelo mapa ou 10 inimigos patrulhando, criar variáveis individuais para cada um deles seria um pesadelo arquitetônico. As Classes resolvem isso: elas funcionam como a "planta baixa" de uma casa. Você escreve o molde de como um "Inimigo" deve se comportar uma única vez, e depois usa esse molde para gerar dezenas de clones independentes na tela, cada um com sua própria vida, posição e velocidade.</p>
        <p>O método <code>constructor()</code> é a primeira coisa executada quando você invoca o comando mágico <code>new</code>. Ele é o responsável por inicializar as características básicas daquele clone assim que ele nasce no jogo. Além das propriedades (como x e y), a Classe abriga as funções de comportamento daquele objeto, chamadas de métodos, como <code>desenhar()</code> ou <code>tomarDano()</code>. Isso mantém o seu arquivo principal extremamente limpo, encapsulando a complexidade do monstro dentro do seu próprio módulo.</p>
        <p>Essa é a base da Programação Orientada a Objetos (POO). Adotar essa organização em arquivos separados (exportando a Classe de um arquivo Inimigo.js e importando no seu Core) facilita absurdamente a manutenção. Se você quiser que todos os inimigos do jogo passem a piscar em vermelho ao levar dano, você altera apenas três linhas dentro da Classe matriz, e todos os clones gerados automaticamente herdarão essa nova mecânica de luz no próximo frame.</p>
        <div class="code-block"><pre><code>class Inimigo {
    // O construtor define como o objeto "nasce"
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.vida = 100;
    }

    // Método embutido no molde
    moverParaEsquerda() {
        this.x -= 2;
    }
}

// Usando o molde para criar clones na memória!
const orc1 = new Inimigo(500, 200);
const orc2 = new Inimigo(800, 200);

orc1.moverParaEsquerda(); // Move só o Orc 1!</code></pre></div>`,

    "Física de Pulo e Gravidade": `
        <p>Criar um pulo responsivo exige um controle rigoroso sobre os vetores de força e um entendimento afiado sobre o chão. A gravidade não é um puxão único, mas sim uma aceleração constante: a cada quadro do jogo, uma variável de <code>velocidadeY</code> é somada à posição vertical do herói, e a força da gravidade é somada a essa velocidade. Isso cria o efeito parabólico realista onde o pulo perde força no ar, chega no ápice (velocidade zero) e depois o personagem começa a cair cada vez mais rápido.</p>
        <p>O maior inimigo dos jogos de plataforma indies é o infame bug do "personagem flutuando". Isso ocorre quando o sistema de colisão atualiza as sprites de altura diferente e detecta o chão muito cedo, parando a gravidade antes dos pés tocarem no solo, ou permitindo que o usuário aperte espaço repetidamente no ar. Para resolver isso com precisão militar, você precisa de uma variável booleana essencial: <code>isGrounded</code> (está no chão).</p>
        <p>Sempre que o personagem colide com o tile do chão, você zera a <code>velocidadeY</code> (para interromper a aceleração de queda), alinha fisicamente o pé da sprite exatamente no limite do piso, e liga a chave <code>isGrounded = true</code>. A lógica do pulo só deve responder se essa chave for verdadeira, aplicando uma força instantânea e negativa no vetor Y (pois no Canvas, o eixo Y cresce para baixo), e imediatamente desligando a chave de contato com o chão.</p>
        <div class="code-block"><pre><code>let gravidade = 0.5;
let velocidadeY = 0;
let forcaPulo = -12; // Valor negativo joga pra cima!
let isGrounded = false;

function atualizarFisica() {
    // A gravidade puxa o vetor constantemente
    velocidadeY += gravidade;
    jogador.y += velocidadeY;

    // Simulando colisão com o chão duro (y = 400)
    if (jogador.y >= 400) {
        jogador.y = 400; // Crava o pé no chão, evitando "flutuação"
        velocidadeY = 0; // Para de cair
        isGrounded = true; // Libera o pulo
    }
}

function acionarPulo() {
    if (isGrounded === true) {
        velocidadeY = forcaPulo;
        isGrounded = false;
    }
}</code></pre></div>`,

    "Colisão Retangular (AABB)": `
        <p>A sigla AABB significa "Axis-Aligned Bounding Box" (Caixa Delimitadora Alinhada aos Eixos) e é o algoritmo matemático mais famoso, leve e eficiente para detectar colisões em jogos 2D. Em vez de calcular contornos curvos complexos de pixels que fritariam o processador do navegador, nós imaginamos um retângulo perfeitamente reto e invisível em volta do jogador, e outro em volta da parede ou do inimigo.</p>
        <p>O truque desse algoritmo de quatro vias é testar onde as duas caixas NÃO estão colidindo. A matemática avalia simultaneamente: "O lado direito da caixa A cruzou o lado esquerdo da caixa B? E o lado esquerdo da A cruzou o direito da B? O topo cruzou a base?". Apenas se TODAS essas quatro afirmações espaciais sobrepostas no eixo X e Y forem simultaneamente verdadeiras, significa que um retângulo invadiu o território físico do outro.</p>
        <p>Essa verificação brutalmente simples é tão leve que você pode rodá-la centenas de vezes por frame (varrendo o cenário inteiro e projéteis) sem causar lentidão. Quando a função AABB retornar `true`, o seu sistema principal de física deve assumir o controle imediatamente, empurrando o jogador alguns pixels para trás (Resolução de Colisão) para evitar que ele atravesse a parede e caia no vazio negro da fase.</p>
        <div class="code-block"><pre><code>// O algoritmo AABB clássico e definitivo para 2D
function verificarColisao(retanguloA, retanguloB) {
    return (
        retanguloA.x < retanguloB.x + retanguloB.largura &&
        retanguloA.x + retanguloA.largura > retanguloB.x &&
        retanguloA.y < retanguloB.y + retanguloB.altura &&
        retanguloA.y + retanguloA.altura > retanguloB.y
    );
}

// Exemplo em ação no Game Loop
if (verificarColisao(jogador, espinhoMagico)) {
    jogador.sofrerDano();
    console.log("Dano computado através do AABB!");
}</code></pre></div>`,

    "Animação e Spritesheets": `
        <p>Ao invés de carregar 20 arquivos de imagem separados (o que mataria a conexão da internet no pré-load), jogos profissionais usam uma Spritesheet: uma única imagem grande que contém todos os quadros da animação enfileirados. A magia acontece utilizando os atributos de corte da função <code>drawImage</code> do Canvas HTML5, onde o JavaScript desenha apenas um pequeno quadrado (recorte) daquela imagem gigante na tela por vez.</p>
        <p>A complexidade surge ao tentar controlar a velocidade dessa ilusão de ótica independentemente da velocidade do jogo. Se o Game Loop roda a 60 FPS e você trocar a sprite a cada frame, o seu personagem vai bater as pernas numa velocidade epiléptica irreconhecível. É aqui que entra o seu temporizador clássico: estipular que cada quadro fique na tela por exatamente "0.1 segundos", somando os milissegundos do delta time e só avançando a imagem numerada quando esse contador bater a marca.</p>
        <p>Ter os sprites já numerados e todas as partes do corpo na mesma altura e alinhadas ao pé da imagem é o segredo para corrigir o erro de flutuação ao trocar as poses. Quando o índice da animação atinge o último quadro do ciclo da corrida, o código simplesmente reseta o valor para zero, gerando um loop visual infinito perfeitamente encaixado com o ritmo dos passos do herói.</p>
        <div class="code-block"><pre><code>let frameAtual = 0;
let tempoAcumulado = 0;
const tempoPorQuadro = 0.1; // Segundos

function animarSprite(deltaTime) {
    tempoAcumulado += deltaTime;

    // Se passou 0.1s, avança para o próximo desenho!
    if (tempoAcumulado >= tempoPorQuadro) {
        frameAtual++;
        tempoAcumulado = 0; // Zera o relógio do frame

        // Se chegou no limite da animação (ex: 6 quadros de corrida), volta ao zero
        if (frameAtual > 5) {
            frameAtual = 0;
        }
    }
    
    // Calcula o corte em X na spritesheet (ex: cada quadro tem 32 pixels de largura)
    let corteX = frameAtual * 32;
    // drawImage(imagem, corteX, 0, 32, 32, posX, posY, 32, 32);
}</code></pre></div>`,

    "Controle de Estados Simples": `
        <p>Muitos bugs iniciantes acontecem quando o jogador aperta múltiplos botões ao mesmo tempo, fazendo o personagem tocar a animação de bater espada enquanto voa pelo ar na pose de corrida. Para blindar o seu código, usamos uma Máquina de Estados Finita (FSM). Em essência, é uma variável de controle que dita rigidamente o que o personagem está fazendo naquele exato milissegundo: "PARADO", "CORRENDO", "PULANDO" ou "MORTO".</p>
        <p>Em vez de verificar diretamente quais botões estão pressionados para trocar os sprites gráficos, você checa os botões para trocar o ESTADO lógico. A sua função de renderização gráfica vai simplesmente olhar para a string do estado atual e desenhar o respectivo recorte da Spritesheet. Um estado blinda o outro: se o estado atual for "ATACANDO", o jogo temporariamente ignora a leitura das setas direcionais, prendendo o personagem no chão até o golpe terminar.</p>
        <p>Adotar esse modelo em um projeto fatiado por pastas facilita a construção do seu banco de animações detalhadas de 0.1 segundos. Cada estado gerencia a sua própria lista de sprites numerados e regras de física, eliminando para sempre as transições bizarras ou os famosos "glitches" visuais em jogos de plataforma, tornando o fluxo de ação e reação perfeitamente nítido para quem segura o teclado.</p>
        <div class="code-block"><pre><code>const ESTADOS = {
    PARADO: 0,
    CORRENDO: 1,
    PULANDO: 2
};

let estadoAtual = ESTADOS.PARADO;

function atualizarAcao() {
    if (velocidadeY < 0 || velocidadeY > 0) {
        // Se há movimento vertical, força o estado de ar
        estadoAtual = ESTADOS.PULANDO;
    } else if (velocidadeX !== 0) {
        // Se está no chão e se movendo pros lados
        estadoAtual = ESTADOS.CORRENDO;
    } else {
        estadoAtual = ESTADOS.PARADO;
    }
}</code></pre></div>`,

    "Vetores e Movimentação 2D": `
        <p>Em jogos que quebram as barreiras da gravidade, como jogos espaciais com visão de topo ou Twin-stick shooters, nós abandonamos a movimentação dura em eixos travados e abraçamos os vetores direcionais. Um vetor é composto por duas partes cruciais: Direção (um ângulo apontando para onde você vai) e Magnitude (a velocidade bruta que você está imprimindo nesse ângulo).</p>
        <p>Mover-se na diagonal é um grande desafio matemático escondido. Se você somar 5 pixels pra Direita e 5 para Cima usando comandos separados tradicionais do teclado, a velocidade resultante em diagonal através do Teorema de Pitágoras vaza para quase 7.1 pixels! O personagem corre muito mais rápido na diagonal do que em linha reta. Normalizar o vetor de entrada usando as funções <code>Math.sin()</code> e <code>Math.cos()</code> corrige essa disparidade física milenar do desenvolvimento 2D.</p>
        <p>Ao converter o ângulo do mouse no centro da tela e aplicar Seno e Cosseno a uma velocidade fixa máxima, o seu código gera distribuições perfeitas para `velocidadeX` e `velocidadeY`. O projeto ganha um controle cinético suave e profissional, onde um asteroide rebater numa nave obedece as leis da inércia realísticas de conservação de momento angular baseados nestes eixos destrinchados.</p>
        <div class="code-block"><pre><code>// Calculando movimento diagonal exato para um projétil apontado pro mouse
let anguloRadianos = Math.atan2(alvoY - origemY, alvoX - origemX);
let velocidadeMax = 10;

// O Cosseno extrai a fatia do eixo X
let velocidadeX = Math.cos(anguloRadianos) * velocidadeMax;

// O Seno extrai a fatia do eixo Y
let velocidadeY = Math.sin(anguloRadianos) * velocidadeMax;

// Agora o projétil viaja na angulação perfeita da linha desenhada
projetil.x += velocidadeX;
projetil.y += velocidadeY;</code></pre></div>`,

    "Arrays e Gerenciamento de Entidades": `
        <p>Um mapa vazio sem interação não é um jogo. O ambiente ganha vida quando introduzimos "Entidades", um termo que abrange projéteis voando, poções flutuando, inimigos patrulhando ou moedas girando. Para manter a estabilidade do motor lógico e ter controle total, todo esse volume gigantesco de instâncias instáveis é unificado e gerenciado dinamicamente dentro de gigantescos Arrays centrais.</p>
        <p>Quando você pressiona o botão de tiro, o código simplesmente executa um <code>push()</code> inserindo um recém-nascido objeto "Bala" com posições locais dentro da matriz global de <code>listaProjeteis</code>. No cerne do Game Loop, um loop <code>for</code> reverso itera incessantemente sobre esta matriz ordenando que todas avancem. Operar a matriz de forma invertida é a técnica de ouro: isso impede que pular elementos cause bugs desastrosos quando apagamos ou fatiamos (`splice`) um projétil destruído da lista por ter colidido com a parede.</p>
        <p>Seja em uma arquitetura complexa em pastas isoladas ou em arquivos monolíticos iniciais, essa orquestração separa logicamente quem "manda" de quem "obedece". A engine percorre array de vilões checando colisão com o array de golpes. É graças a essa esteira mecânica que podemos ter chuvas imensas de "Bullet Hell" (Chuva de Balas) sendo calculadas na tela de jogo principal sem causar instabilidade fatal na CPU do navegador rodando o Canvas.</p>
        <div class="code-block"><pre><code>let tirosAtivos = [];

// Jogador aperta gatilho
tirosAtivos.push({ x: 100, y: 150, vivo: true });

// Game loop processando do ÚLTIMO para o PRIMEIRO índice
for (let i = tirosAtivos.length - 1; i >= 0; i--) {
    let tiro = tirosAtivos[i];
    
    tiro.x += 15; // Move o tiro para frente

    if (tiro.x > 800) {
        tiro.vivo = false; // Tiro saiu da tela
    }

    // Se o projétil morreu, retira da matriz com 'splice' seguro
    if (!tiro.vivo) {
        tirosAtivos.splice(i, 1); 
    }
}</code></pre></div>`,

    "Modularização (Módulos JS)": `
        <p>Você atingiu a epifania do design de software ao separar o seu projeto com HTML, CSS e JS em pastas organizadas. Mas o JavaScript moderno vai muito além de um único arquivo monolítico de milhares de linhas: o poder real está na Modularização ES6 (Export / Import). Ela permite que o seu código matemático de física resida tranquilamente isolado no arquivo `Fisica.js`, enquanto a captação das teclas direcionais more isolada no `Inputs.js`.</p>
        <p>No arquivo raiz (o Entry Point do Game Loop), usamos a sintaxe <code>import { aplicarGravidade } from './Fisica.js';</code> para construir nosso monstro de Frankenstein da melhor maneira possível. Ao acoplar arquivos modulares nas tags HTML utilizando obrigatoriamente <code>&lt;script type="module" src="main.js"&gt;&lt;/script&gt;</code>, o navegador barra a poluição e os vazamentos do escopo global de variáveis para que um "let pontuacao" num arquivo de HUD jamais esmague acidentalmente os pontos de atributo num arquivo do inimigo.</p>
        <p>Até novembro, a medida em que o escopo inflacionar implementando as animações mais detalhadas e chefes extras, esse método importativo defenderá o seu projeto contra quebras encadeadas. Trabalhar com módulos blinda os sistemas para que bugs isolados contidos na Inteligência Artificial permaneçam enclausurados apenas e estritamente no arquivo do chefe do mapa, assegurando que o resto do menu e controle responsivo que compõem o pilar intocável continuem operacionais garantindo o controle total sobre o andamento limpo de testes e publicações web.</p>
        <div class="code-block"><pre><code>// Dentro do arquivo 'Inimigo.js' em outra pasta
export class ZumbiFisica {
    constructor() { this.nome = "Infectado"; }
    andar() { return "Andando lento"; }
}

// ------------------------------------
// Dentro do seu arquivo principal 'main.js' (Game Loop)
import { ZumbiFisica } from './classes/Inimigo.js';

let horda = [];
horda.push(new ZumbiFisica()); // Instanciando com perfeição isolada!
</code></pre></div>`,


    // ==========================================
    // === NÍVEL AVANÇADO ===
    // ==========================================

    "Callbacks e Event Loop": `
        <p>O JavaScript funciona em uma única via principal (single-threaded), o que significa que ele executa apenas um comando por vez, como um trem em um trilho único. Para não congelar a tela inteira enquanto espera uma tarefa longa terminar, ele utiliza o brilhante sistema do Event Loop aliado aos Callbacks. O Event Loop é um maestro que gerencia uma fila de tarefas secundárias, empurrando processos demorados para o fundo do palco e permitindo que o show principal continue. Quando a tarefa acaba, o maestro chama de volta a função (o Callback), inserindo-a no fluxo principal.</p>
        <p>Na arquitetura de um jogo web, você aplicará Callbacks ao aguardar um temporizador longo. Se o herói aciona um botão que leva três segundos para abrir uma pesada porta, você não pode fazer o código parar e esperar, senão as animações congelariam no ar. Em vez disso, você delega esse atraso e fornece um Callback dizendo: "assim que os três segundos passarem, execute a abertura da porta". O Event Loop garante que a tela continue sendo desenhada a 60 FPS sem engasgos.</p>
        <p>Sem ele, criar jogos fluidos no navegador seria tecnicamente impossível. Entender esse fluxo assíncrono impede armadilhas de código travado ou animações piscando erraticamente. Ele permite que múltiplos sistemas funcionem em perfeita harmonia aparente, criando a ilusão perfeita de paralelismo que mantém o dinamismo da sua obra.</p>
        <div class="code-block"><pre><code>function pisarNaArmadilha() {
    console.log("Clique! Um mecanismo foi ativado...");
    
    // Delega o tempo ao Event Loop com Callback
    setTimeout(() => {
        console.log("Os espinhos saíram do chão!");
        jogador.sofrerDano(50);
    }, 2000); 

    // Executa imediatamente, o jogo NÃO congelou!
    console.log("O herói pode correr por 2 segundos!");
}</code></pre></div>`,

    "Promises (Promessas)": `
        <p>Uma Promise é a evolução organizada dos Callbacks, atuando como um contrato digital de que uma informação demorada será entregue no futuro, com sucesso (resolvida) ou falha (rejeitada). Enquanto espera o recurso ficar pronto, o jogo pode interagir com o menu sem ficar paralisado. Quando o recurso fica pronto, devolve os dados, ou caso a rede falhe, permite lidar com o erro de forma elegante.</p>
        <p>O uso primordial no desenvolvimento acontece na tela de "Loading". Você precisa buscar pesadas imagens (spritesheets) antes da fase começar. Em vez de iniciar a partida com o personagem invisível, você cria um array de Promises e manda o jogo aguardar. Somente quando a última imagem resolver a promessa, o motor apaga a barra de loading e libera o jogo.</p>
        <p>As Promises substituem a terrível arquitetura do passado chamada de "Callback Hell". Com canais limpos de sintaxe como .then() e .catch(), garantem que se o som da explosão não existir, você consiga tratá-lo facilmente, mantendo a estabilidade da engine sem que o projeto desmorone por arquivos ausentes.</p>
        <div class="code-block"><pre><code>function carregarTextura(nome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let redeOk = true;
            if (redeOk) resolve("Textura " + nome + " baixada!");
            else reject("Erro 404 - Textura falhou.");
        }, 1500);
    });
}

carregarTextura("cenario.png")
    .then((sucesso) => console.log(sucesso))
    .catch((erro) => console.error(erro));</code></pre></div>`,

    "Async / Await": `
        <p>O conjunto de palavras-chave async e await faz um código que lida com Promises parecer e se comportar de forma linear e síncrona. Quando declara a função como async, avisa ao interpretador que eventos atrelados ao tempo vão acontecer. O await age como um botão de pausa pontual na frente de uma Promise, suspendendo apenas aquela linha sem congelar as animações do resto da página.</p>
        <p>Na sua fábrica de jogos, essa dupla é usada para coreografar cenas dramáticas ou inicializações complexas. Se o jogo precisa logar o jogador no servidor, depois baixar baús e depois injetar IA, o await coloca essas tarefas empilhadas de forma super legível: "espere logar, espere fase, toque som", reduzindo a complexidade mental.</p>
        <p>Transformou drasticamente a legibilidade e manutenção. Quando você retorna ao projeto meses depois, ler uma sequência de "awaits" é infinitamente mais seguro. Garante de maneira absoluta que a lógica de carregamento rode sempre na ordem correta, banindo o risco do jogador tentar equipar uma espada que ainda não terminou o download.</p>
        <div class="code-block"><pre><code>const carregarConta = () => new Promise(res => setTimeout(() => res("Logado!"), 1000));
const gerarMapa = () => new Promise(res => setTimeout(() => res("Mapa OK!"), 1000));

async function startJogo() {
    console.log("Loading...");
    
    const passo1 = await carregarConta();
    console.log(passo1); 
    
    const passo2 = await gerarMapa();
    console.log(passo2);
    
    console.log("GAME LOOP COMEÇOU!");
}</code></pre></div>`,

    "Recursividade": `
        <p>A recursividade é um conceito onde uma função resolve um problema chamando a si mesma repetidas vezes. É como colocar espelhos frente a frente criando um túnel infinito, mas exigindo uma "condição de parada" muito bem pensada. Sem esse freio, a função estourará a RAM até o navegador causar o letal "Stack Overflow".</p>
        <p>No gamedev, é a ferramenta divina para algoritmos de Geração Procedural de fases. Se em um Campo Minado o jogador toca um quadrado liso, a recursividade abre os oito vizinhos, que se lisos, chamam a própria função, limpando o mapa num clique. Algoritmos de "Pathfinding" (busca de rotas por IA) usam isso para testar corredores num labirinto.</p>
        <p>Substitui laços convencionais que demandariam centenas de blocos condicionais sujos. A Inteligência Artificial projeta turnos simulados no futuro mergulhando recursivamente, adotando um processamento comportamental tático que eleva muito o desafio do jogo sem pesar as linhas de texto do código.</p>
        <div class="code-block"><pre><code>function buscarSaida(corredorAtual) {
    // 1. CONDIÇÃO DE PARADA
    if (corredorAtual === 5) {
        console.log("Saída localizada!");
        return true; 
    }
    
    // 2. A CHAMADA RECURSIVA: Função invoca a si mesma
    let proximo = corredorAtual + 1;
    return buscarSaida(proximo); 
}

buscarSaida(1);</code></pre></div>`,

    "Manipulação Avançada de Objetos": `
        <p>Manipulação avançada abre o DNA dos Protótipos do JavaScript, invocando métodos mestres como Object.assign e Object.keys. Nativos como o assign conseguem costurar múltiplos objetos em uma simbiose de atributos. O keys converte propriedades em listas ágeis prontas para iterações velozes no código visual.</p>
        <p>No balanceamento do jogo, o Object.assign é o milagre produtivo para construir "Crafting" e fundir "Espada Larga" com "Magia de Fogo" instantaneamente. O Object.keys atua em interfaces: ao puxar as chaves de controle (A para Atacar, B para Esquivar), desenha o menu inteiro dinamicamente, não importa quantas mecânicas sejam adicionadas depois.</p>
        <p>Sustenta cenários populados por entidades dinâmicas de atributos evolutivos sem penalizar a performance. Evita hardcode e dezenas de laços replicados, comprimindo a carga iterativa da engine central para focar na arquitetura Data-Driven (Dirigida a Dados).</p>
        <div class="code-block"><pre><code>const baseArmadura = { defesa: 40, peso: 10 };
const gemaFogo = { magia: 25, resistencia: "Queimadura" };

// FUNDINDO os itens!
const armaduraFinal = Object.assign({}, baseArmadura, gemaFogo);
console.log(armaduraFinal);

// Puxando as chaves num Array
const listaAtributos = Object.keys(armaduraFinal);
console.log("Melhorias visíveis: " + listaAtributos.length);</code></pre></div>`,

    "APIs e Fetch": `
        <p>A API com o comando nativo fetch permite ao navegador conversar através de redes HTTPS com servidores mundiais. Quebra o paradigma offline local, convertendo-o para arquiteturas gigantes com processamento em nuvem, Rankings em tempo real e multiplayer dinâmico.</p>
        <p>Usado no envio do "Leaderboard" Online: o herói trucidou o vilão, o fetch acoplado usa POST salvando a pontuação absurda na nuvem. Imediatamente faz um GET puxando os dez melhores do mundo e montando a majestosa tela HTML final do jogador.</p>
        <p>Eleva a experiência a campanhas e missões semanais comunitárias controladas pelo banco central. Além disso, transfere cálculos complexos pro lado seguro blindando contra trapaceiros locais ("hackers de client-side") alterando pontos na aba do navegador.</p>
        <div class="code-block"><pre><code>async function buscarMelhoresDoMundo() {
    try {
        const resposta = await fetch("https://api.meujogo.com/rank");
        const rank = await resposta.json();
        
        console.log("Top 1: " + rank[0].nomeHeroi);
    } catch (erroNaRede) {
        console.warn("Modo Offline! Rankings não carregados.");
    }
}</code></pre></div>`,

    "Bitwise Operators (Operadores de Bit)": `
        <p>Os Operadores Bitwise são as chaves de intervenções puras nas representações de transistores de zeros e uns. Símbolos como AND (&) e OR (|) escovam o DNA do fluxo numérico de inteiros comprimindo-os diretamente sem laços matemáticos pesados em base dez.</p>
        <p>Utilizados intensivamente em "Collision Masks" e controle de debuffs sobre chefões. Em vez de criar quinze variáveis true/false de status ("cego, envenenado, lento"), a condensação permite checar de forma infalível cruzando if (estado & MASCARA) e anulando a movimentação vetorial do milissegundo de forma cruel e rápida.</p>
        <p>É inegociável a aplicação destas manipulações para otimização terminal em navegadores de pouca potência gráfica suportando mil entidades conjuntas. Aniquila lentidão garantindo sessenta FPS eternos limpando totalmente estresse térmico em celulares e computadores modestos.</p>
        <div class="code-block"><pre><code>const F_NADA = 0;       
const F_VENENO = 1;     // 0001
const F_CONGELADO = 2;  // 0010

let estado = F_NADA;
estado = F_CONGELADO | F_VENENO; // Juntando status no mesmo byte!

if (estado & F_CONGELADO) {
    console.log("Movimento cortado. Preso no gelo!");
}</code></pre></div>`,

    "Regular Expressions (Regex)": `
        <p>Regex, as Expressões Regulares, formam padrões de sublinguagem que operam intensivamente para caçar e fatiar padrões textuais em textos massivos. Localizam magicamente sequências de fadas ou códigos sem consumir preciosos milissegundos dos frames, diferentemente do if encadeado buscando letra por letra.</p>
        <p>Usados na sanitização de Chat Multiplayer em arenas MMOs: o Hacker injeta comandos perversos <script> e a Regex silenciosamente esmaga a injeção devolvendo formato higienizado. E permite que no painel de trapaça a barra detecte "/Cheat Gold 5000" perfeitamente retalhando as palavras pros comandos corretos instantaneamente.</p>
        <p>Provém defesa impecável a engine central e atua traduzindo tráfegos da "Localization" complexas encriptadas das lógicas textuais. Garantindo as estruturas não sejam corrompidas por hackers e fluidez total na execução lúdica analítica.</p>
        <div class="code-block"><pre><code>const comandoTxt = "/invocar Dragao 50";
const engineRegex = /^\\/([a-zA-Z]+)\\s+([a-zA-Z]+)\\s+(\\d+)$/;

const fatiado = comandoTxt.match(engineRegex);

if (fatiado) {
    console.log(\`Ação: \${fatiado[1]} Entidade: \${fatiado[2]} Qtd: \${fatiado[3]}\`);
}</code></pre></div>`,

    "Memory Management (Garbage Collector)": `
        <p>Gerenciamento da Memória RAM no cenário nativo oculta um formidável vigia cognominado de Garbage Collector (Coletor de Lixo do JS). Quando instâncias inflam a RAM, caso nenhum método global aponte mais pro zumbi decapitado esquecido da tela, o limpador o rastreia e derrete seus gráficos reconectando a RAM devolvida pro cenário da fase dois.</p>
        <p>O ponto trágico é o Memory Leak contínuo: inimigos mortos mas com seus listenings de colisão travados continuam ativos parasitando sem permissão a renderização. Após dez minutos de partida a ignição na memória causa Crash Fatal e encerra a aba impiedosamente na tela principal arruinando o Save do jogador final.</p>
        <p>Despedaçar ativamente estâncias com a anulação via destrutor (= null) ao terminar telagens grandes garante oxigênio ininterrupto nos motores das engines de navegadores que sofrem abalos sob carga imensa nas partículas massivas, provendo tranquilidade estamental as arquiteturas imponentes nas transações.</p>
        <div class="code-block"><pre><code>let bossLevel1 = {
    graficosGigaHD: new Array(50000).fill("pixelsPesados.png"), 
};

function aniquilarBossFisicamente() {
    // Só esconder a imagem não basta! A ligação com a RAM continua
    // ANULAMOS as referências de forma forçada:
    bossLevel1 = null; 
    console.log("O Garbage Collector assumiu e a RAM foi libertada!");
}</code></pre></div>`,

    "Design Patterns (Padrões de Projeto)": `
        <p>O cume da Engenharia Arquitetural não reside em criar linhas descontroladas do nada e sim respeitar os Sagrados Design Patterns. Representam formas de aço forjado mantendo seus construtos limpos para classes, módulos se conectando logicamente contra colisões das imensas arquiteturas sob DLCs novas adicionadas meses à frente da estrutura.</p>
        <p>O State Pattern encapsula os comportamentos dinâmicos pesados. Pular, Correr e Cair saem de if gigantescos enraizados juntos na função física para habitarem arquivos únicos autônomos. Quando "Pulando" inicia o "EstadoChao" e o resto de suas variáveis lógicas trancam sem colidir jamais permitindo Dashing ou Planagem limpa empilhando mecânicas separadas com glórias inquebráveis de testes isolados.</p>
        <p>Outros moldes robustos (Observer / Singleton) elevam a patamares magistrais sua inteligência de isolar as esferas comunicantes e emitir sinais. Um soco avisa a renderização HTML do Dano de modo desacoplado transmutando seu jogo rudimentar à motor de estúdios operantes robusto de alto polimento industrial infalível para mercado profissional sem medo.</p>
        <div class="code-block"><pre><code>const ESTADOS = {
    CORRENDO: {
        update: () => console.log("Lógica limpa da Animação isolada da Corrida")
    },
    PULANDO: {
        update: () => console.log("Trava vetor vertical limpo do pulo livre")
    }
};

const maquinaJogador = {
    estado: ESTADOS.CORRENDO,
    loop: function() { this.estado.update(); }
};

maquinaJogador.loop();</code></pre></div>`
};
