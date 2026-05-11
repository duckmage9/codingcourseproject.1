/**
 * BANCO DE DADOS DE TEXTOS - JAVASCRIPT COMPLETO (V BETA 0.3)
 * AUTO-PATCH: Injeta Iniciante e Intermediário
 */

window.conteudosJS = window.conteudosJS || {};

const applyPatch = setInterval(() => {
    if (typeof db !== 'undefined' && typeof renderEncGrid === 'function' && typeof openModal === 'function') {
        clearInterval(applyPatch); 

        // --- CORREÇÃO 1: Injeta os títulos na const 'db' ---
        
        // NÍVEL INICIANTE
        db.js.iniciante = [
            "Variáveis e Constantes (let e const)",
            "Tipos de Dados Essenciais",
            "Operadores Matemáticos e Lógicos",
            "Estruturas Condicionais (if, else, else if)",
            "Estruturas de Repetição (for e while)",
            "Introdução às Funções",
            "Arrays Simples (Listas)",
            "Objetos Básicos (Chave e Valor)",
            "Manipulação Básica do DOM (getElementById)",
            "Eventos de Teclado e Mouse (addEventListener)"
        ];

        // NÍVEL INTERMEDIÁRIO (NOVO!)
        db.js.intermediario = [
            "Arrow Functions",
            "Classes e POO (Programação Orientada a Objetos)",
            "Métodos de Array (Parte 1: map e filter)",
            "Métodos de Array (Parte 2: reduce e find)",
            "Desestruturação (Destructuring)",
            "Operadores Spread e Rest (...)",
            "Escopo e Closures",
            "JSON e LocalStorage",
            "Módulos (Import / Export)",
            "Tratamento de Erros (Try / Catch)"
        ];

        if (typeof currentTech !== 'undefined' && currentTech === 'js') {
            renderEncGrid();
        }

        // --- CORREÇÃO 2: Hackeia o openModal original ---
        window.openModal = function(topic) {
            const overlay = document.getElementById('reader');
            const container = document.getElementById('reader-body');
            let content = "<p>Conteúdo em fase de produção.</p>";

            if (currentTech === 'html' && typeof window.conteudosHTML !== 'undefined') {
                content = window.conteudosHTML[topic] || content;
            }
            else if (currentTech === 'js' && typeof window.conteudosJS !== 'undefined') {
                content = window.conteudosJS[topic] || content;
            }
            
            if (overlay && container) {
                const safeTitle = topic.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                container.innerHTML = `<h2>${safeTitle}</h2>${content}`;
                overlay.style.display = 'flex';
                setTimeout(() => overlay.classList.add('active'), 10);
                document.body.style.overflow = 'hidden';
            }
        };
    }
}, 50);

// =========================================================
// TEXTOS DE NÍVEL INICIANTE
// =========================================================

window.conteudosJS["Variáveis e Constantes (let e const)"] = `
    <p>As variáveis e constantes são os alicerces de qualquer jogo, funcionando como recipientes na memória do computador para armazenar informações que mudam ou permanecem fixas. No JavaScript moderno, utilizamos o <code>let</code> para dados voláteis, como a posição atual de um herói que corre pelo cenário, e o <code>const</code> para valores que definem as regras imutáveis do universo do seu jogo. Imagine que o computador precisa de um endereço para consultar, a cada fração de segundo, onde o jogador está ou quanta munição ele ainda possui.</p>
    <p>No fluxo de desenvolvimento de um jogo web, você declarará essas variáveis geralmente no topo do seu arquivo JS para configurar o estado inicial da cena. O <code>const</code> deve ser sua primeira escolha para definir parâmetros globais, como a força da gravidade que puxa os objetos para baixo ou o caminho da pasta onde estão guardadas as imagens dos sprites. Já o <code>let</code> será usado exaustivamente dentro do seu "Game Loop" para atualizar coordenadas matemáticas.</p>
    <p>A importância real deste tema reside no controle absoluto sobre a física e a lógica de tempo do seu projeto. Se você definir a gravidade como uma variável comum e, por erro, o código alterá-la no meio da partida, seu personagem pode sair flutuando sem controle. Ao usar <code>const</code> para a taxa de quadros (como 0.1 segundos para cada frame de animação), você garante que o jogo mantém a mesma cadência visual do início ao fim.</p>
    <div class="code-block"><pre><code>// Regras fixas (Constantes)
const GRAVIDADE = 0.8;
const VELOCIDADE_SALTO = -15;

// Estados que mudam (Variáveis)
let personagemX = 100;
let personagemY = 500;
let vidaAtual = 3;

// O herói perde uma vida
vidaAtual = vidaAtual - 1;
console.log("Vida restante: " + vidaAtual);</code></pre></div>`;

window.conteudosJS["Tipos de Dados Essenciais"] = `
    <p>Os tipos de dados são as diferentes naturezas de informação que o JavaScript consegue processar para dar vida ao seu jogo. Os <b>Numbers</b> cuidam de toda a parte matemática, desde a velocidade de um projétil até o ângulo de rotação de uma nave espacial. As <b>Strings</b> são sequências de caracteres usadas para toda a comunicação textual, como o nome do avatar ou diálogos de NPCs. Por fim, os <b>Booleans</b> assumem apenas <code>true</code> ou <code>false</code>.</p>
    <p>Na prática, você utilizará Numbers para calcular colisões e pontuações. As Strings serão enviadas para os elementos da interface (UI) para exibir mensagens de "Level Up!". Os Booleans são indispensáveis para controlar os estados do personagem: você criará variáveis como <code>estaNoChao</code> para impedir que o jogador pule infinitamente no ar.</p>
    <p>Entender a diferença entre esses tipos evita bugs catastróficos, como tentar somar um número a um texto e acabar com um erro de cálculo na pontuação. A precisão técnica dos Numbers permite que as animações de sprites ocorram na velocidade correta, enquanto os Booleans gerenciam a inteligência artificial básica de um inimigo.</p>
    <div class="code-block"><pre><code>let pontuacao = 0; // Number
let nomeJogador = "Arqueiro Verde"; // String
let estaNoChao = true; // Boolean

if (estaNoChao === true) {
    console.log(nomeJogador + " pode pular!");
}</code></pre></div>`;

window.conteudosJS["Operadores Matemáticos e Lógicos"] = `
    <p>Operadores são os símbolos que permitem realizar cálculos e comparações, agindo como o motor que processa as regras de movimento e decisão. Os operadores matemáticos (+, -, *, /) atualizam coordenadas e grandezas físicas a cada milissegundo. Já os operadores lógicos, como o <code>&&</code> (E) e o <code>||</code> (OU), servem para combinar múltiplas perguntas em uma única instrução complexa.</p>
    <p>No desenvolvimento de jogos, você usa a soma para mover o personagem (x + velocidade) e a subtração para reduzir a vida. Os operadores lógicos entram em cena em momentos críticos: para um "pulo duplo", você usaria <code>&&</code> para verificar se o botão foi pressionado E se o contador de pulos é maior que zero. O <code>||</code> poderia verificar se o jogador tocou em um espinho OU caiu em um buraco.</p>
    <p>A importância deste tema é a criação de mecânicas refinadas. Sem os operadores matemáticos, o cenário seria estático. Sem os operadores lógicos, as regras seriam limitadas. É através dessa combinação que você cria a sensação de um mundo sólido, onde as ações do jogador só produzem resultados se obedecerem a critérios rigorosos.</p>
    <div class="code-block"><pre><code>let playerX = 50;
let velocidade = 5;
playerX += velocidade; // Move para a direita

let apertouPulo = true;
let estaNoChao = true;

if (apertouPulo && estaNoChao) {
    console.log("Pulo realizado!");
}</code></pre></div>`;

window.conteudosJS["Estruturas Condicionais (if, else, else if)"] = `
    <p>Estruturas condicionais são bifurcações lógicas que permitem ao seu jogo "pensar" e reagir de forma diferente dependendo das circunstâncias. O código faz uma pergunta e, caso a resposta seja verdadeira, executa um bloco específico. Sem elas, o jogo seria linear e incapaz de distinguir entre um personagem parado e um personagem atacando.</p>
    <p>Na prática, as condicionais controlam quase todo o fluxo de entrada. Se o jogador pressionar "D", o <code>if</code> detecta e move o personagem para a direita. Elas também monitoram a vida: se cair abaixo de um, o bloco <code>else</code> pode disparar a animação de morte. Elas permitem gerenciar o "estado" do personagem, decidindo qual animação exibir.</p>
    <p>A relevância das condicionais é vital, pois elas definem as fronteiras e consequências do seu mundo virtual. Elas conectam a lógica interna com a interface visual, decidindo quando mostrar o menu de pausa ou tocar um som de vitória. Sem o poder de decisão do <code>if</code>, o jogo não validaria se o jogador atingiu a pontuação para passar de fase.</p>
    <div class="code-block"><pre><code>let entrada = "DIREITA";
let posicaoX = 100;

if (entrada === "DIREITA") {
    posicaoX += 5;
} else if (entrada === "ESQUERDA") {
    posicaoX -= 5;
} else {
    posicaoX += 0;
}</code></pre></div>`;

window.conteudosJS["Estruturas de Repetição (for e while)"] = `
    <p>Estruturas de repetição, ou loops, permitem executar o mesmo bloco de código múltiplas vezes de forma automática. Em vez de escrever cem linhas para criar cem estrelas, você usa um loop <code>for</code>. O loop <code>while</code> funciona de forma similar, mas continua repetindo enquanto uma condição específica for verdadeira, ideal para filas de efeitos sonoros.</p>
    <p>Nos jogos, loops gerenciam coleções de elementos na tela. Você usará o <code>for</code> para percorrer uma lista de inimigos e atualizar a posição de cada um, ou para desenhar cada bloco do chão. Se houver um sistema de partículas para explosões, um loop processará cada pequena faísca de forma individual, aplicando física e transparência.</p>
    <p>A importância deste conceito está na escalabilidade e performance. Eles permitem processar sistemas complexos, como a colisão entre uma horda de zumbis e as paredes, sem tratar cada um manualmente. Os loops garantem a renderização de animações complexas mantendo a taxa de quadros estável.</p>
    <div class="code-block"><pre><code>for (let i = 0; i < 5; i++) {
    let x = Math.random() * 800;
    console.log("Inimigo " + i + " em: " + x);
}

let javaScriptEscudo = 100;
while (javaScriptEscudo > 0) {
    javaScriptEscudo -= 25;
    console.log("Escudo: " + javaScriptEscudo);
}</code></pre></div>`;

window.conteudosJS["Introdução às Funções"] = `
    <p>Funções são blocos modulares que agrupam comandos sob um nome, permitindo reutilizar lógica. Pense nelas como "receitas": você define como se calcula o dano de uma explosão uma vez e apenas invoca essa função quando necessário. Elas podem receber parâmetros e devolver resultados, organizando a arquitetura do seu projeto.</p>
    <p>No jogo, funções separam responsabilidades: uma para <code>aplicarGravidade</code>, outra para <code>verificarColeta</code> e outra para <code>renderizarMapa</code>. Isso evita o "código espaguete". Quando precisar ajustar o pulo, você saberá exatamente onde mexer, sem risco de quebrar a lógica de pontuação.</p>
    <p>A importância reside na criação de um sistema modular. Funções como <code>sofrerDano()</code> podem ser aplicadas ao herói e aos monstros, economizando código. Elas facilitam a conexão entre a lógica matemática e o que acontece na tela, disparando animações e sons no momento exato das ações.</p>
    <div class="code-block"><pre><code>function calcularMovimento(pos, vel) {
    return pos + vel;
}

function alerta(msg) {
    console.log("--- AVISO ---");
    console.log(msg);
}

let x = 50;
x = calcularMovimento(x, 10);
alerta("Posição: " + x);</code></pre></div>`;

window.conteudosJS["Arrays Simples (Listas)"] = `
    <p>Arrays são listas que armazenam múltiplos valores em uma única variável, organizados por um índice numérico. Em vez de criar uma variável para cada bala no pente, você cria um Array. O acesso é rápido e você pode adicionar itens no final (push) ou remover conforme o jogador os utiliza.</p>
    <p>Na prática, Arrays gerenciam coleções e sequências de animação. Você usará um Array para guardar os nomes dos arquivos de imagem (sprites) de uma caminhada, percorrendo a lista para criar o movimento. Também são perfeitos para inventários e para gerenciar as camadas do seu cenário.</p>
    <p>A importância real é a capacidade de lidar com conteúdos dinâmicos. Sem eles, você teria dificuldade em gerenciar hordas de inimigos, pois teria que prever quantos nasceriam. Com Arrays, você simplesmente "empurra" um novo inimigo para a lista. Eles trazem ordem ao caos.</p>
    <div class="code-block"><pre><code>let inventario = ["Espada", "Escudo", "Poção"];
inventario.push("Amuleto");

console.log("Usando: " + inventario[0]);
console.log("Total itens: " + inventario.length);

const sprites = ["run_1.png", "run_2.png", "run_3.png"];</code></pre></div>`;

window.conteudosJS["Objetos Básicos (Chave e Valor)"] = `
    <p>Objetos agrupam propriedades e comportamentos relacionados a uma única entidade. Enquanto um Array é uma lista, um Objeto é como uma ficha de personagem completa: guarda nome, vida, velocidade e funções. Eles permitem tratar os elementos do jogo como seres individuais e complexos.</p>
    <p>Na criação de jogos, você usará objetos para definir "atores". Em vez de variáveis soltas, você criará <code>const jogador = { x: 100, y: 200 }</code>. Isso torna o código intuitivo, permitindo passar o "pacote completo" de informações para uma função de física com um único comando.</p>
    <p>A importância dos objetos é criar uma estrutura que reflete a realidade da tela. Eles permitem gerenciar estados complexos organizadamente. Se decidir adicionar "mana" ao personagem, basta incluir no objeto sem alterar toda a estrutura de variáveis globais, garantindo uma evolução segura.</p>
    <div class="code-block"><pre><code>const heroi = {
    nome: "Valente",
    vida: 100,
    x: 50,
    receberDano: function(qtd) {
        this.vida -= qtd;
        console.log(this.nome + " vida: " + this.vida);
    }
};

heroi.x += 10;
heroi.receberDano(20);</code></pre></div>`;

window.conteudosJS["Manipulação Básica do DOM (getElementById)"] = `
    <p>O DOM é a ponte que permite ao JavaScript interagir com o HTML. Como seu projeto usa pastas separadas, o JS precisa encontrar os elementos na página, como onde o jogo é desenhado. O método <code>getElementById</code> é a ferramenta de busca: através de um ID único, o JS altera conteúdo, cores ou visibilidade.</p>
    <p>Nos jogos, o DOM gerencia a Interface de Usuário (UI). Você usará <code>getElementById</code> para capturar o <code>&lt;canvas&gt;</code>, a tela onde a mágica acontece. Também atualizará a barra de vida e o placar em tempo real, mudando o texto de um parágrafo HTML para mostrar a pontuação atualizada.</p>
    <p>A relevância é a conexão vital entre a lógica invisível e o feedback visual. Sem isso, o jogador não saberia sua vida ou pontos. Conectar variáveis a elementos de texto cria uma experiência informativa. Permite criar menus responsivos e botões de inventário profissionais integrados ao navegador.</p>
    <div class="code-block"><pre><code>const canvas = document.getElementById("tela-jogo");
const elementoPlacar = document.getElementById("placar");

let pontos = 0;
function ganharPonto() {
    pontos += 10;
    elementoPlacar.innerText = pontos;
}</code></pre></div>`;

window.conteudosJS["Eventos de Teclado e Mouse (addEventListener)"] = `
    <p>Eventos são sinais do navegador informando que algo aconteceu, como um clique. O <code>addEventListener</code> funciona como um "vigia": você diz qual evento observar e qual função disparar. No contexto de jogos, <code>keydown</code>, <code>keyup</code> e <code>mousedown</code> são os canais de comunicação direta.</p>
    <p>Na prática, você configurará ouvintes para capturar entradas de forma contínua. Ao detectar <code>keydown</code> no espaço, dispara o pulo. No <code>keyup</code>, para o movimento. Isso permite criar controles responsivos com tempo de resposta quase instantâneo, além de ações de mouse para atirar.</p>
    <p>A importância real é a criação de interatividade e controle fluído. Sem eventos, o jogo seria uma animação assistida. Eles garantem jogabilidade dinâmica, permitindo ao jogador reagir a perigos no último segundo e criar combinações complexas (correr e pular ao mesmo tempo).</p>
    <div class="code-block"><pre><code>const teclas = { direita: false };

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") teclas.direita = true;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") teclas.direita = false;
});

document.addEventListener("mousedown", () => {
    console.log("Disparo!");
});</code></pre></div>`;


// =========================================================
// TEXTOS DE NÍVEL INTERMEDIÁRIO (NOVOS)
// =========================================================

window.conteudosJS["Arrow Functions"] = `
    <p>As Arrow Functions representam a evolução moderna e elegante na forma de escrever funções no JavaScript, oferecendo uma sintaxe muito mais limpa e enxuta do que a palavra-chave tradicional function. Mas o verdadeiro superpoder delas não é apenas a estética visual, e sim a forma inteligente e previsível como elas lidam com o "escopo" da palavra this, que é uma referência direta ao "dono" do código sendo executado. Nas funções antigas, o this costumava se perder ou mudar de dono quando usado dentro de atrasos de tempo ou eventos, quebrando o código misteriosamente. Com a Arrow Function (identificada pelo símbolo =>), o this fica cravado e herdado do contexto original onde a função foi criada, garantindo que o seu objeto não sofra amnésia no meio da execução.</p>
    <p>Na prática do desenvolvimento do seu jogo web, você usará as Arrow Functions em praticamente todos os "callbacks", que são aquelas funções passadas como argumento para outras ações. Elas brilham muito quando você precisa criar temporizadores com setTimeout para aplicar um atraso no ataque de um chefão, ou ao iterar sobre listas de itens no inventário. Por serem tão curtas, elas tornam a leitura do fluxo do jogo muito mais rápida, permitindo que você escreva lógicas rápidas de inteligência artificial ou cálculos matemáticos em uma única linha. É a ferramenta perfeita para manter seu arquivo JS moderno, profissional e totalmente à prova de bugs de referência cruzada.</p>
    <p>A importância vital das Arrow Functions para a mecânica de jogo está na manutenção da estabilidade do "estado" dos seus personagens durante ações assíncronas. Imagine que o seu herói possui uma habilidade especial que causa dano de veneno a cada segundo usando um intervalo de tempo; se você usar uma função tradicional, o código esquecerá de quem é a "vida" que deve ser reduzida e o jogo travará. Ao adotar a sintaxe de flecha, você garante que as propriedades de vida, velocidade e coordenadas do personagem continuem cem por cento acessíveis e seguras em qualquer momento do loop principal. Isso eleva a confiabilidade do seu motor, permitindo interações complexas sem dor de cabeça.</p>
    <div class="code-block"><pre><code>// Objeto representando um inimigo com ataque venenoso
const inimigoVenenoso = {
    nome: "Aranha Gigante",
    danoVeneno: 5,
    
    // Método tradicional para iniciar o ataque
    aplicarVeneno: function() {
        console.log(this.nome + " lançou veneno!");
        
        // Usando Arrow Function no temporizador para não perder o 'this'
        setTimeout(() => {
            // O 'this' aqui continua apontando para a Aranha Gigante
            console.log("O veneno de " + this.nome + " causou " + this.danoVeneno + " de dano!");
        }, 2000); // Executa após 2 segundos (2000 milissegundos)
    }
};

// Disparando o ataque para testar a funcionalidade
inimigoVenenoso.aplicarVeneno();</code></pre></div>`;

window.conteudosJS["Classes e POO (Programação Orientada a Objetos)"] = `
    <p>A Programação Orientada a Objetos (POO) estruturada através de Classes é o paradigma definitivo para organizar jogos complexos, funcionando como a "fábrica" ou a "planta baixa" de onde nascem as entidades do seu mundo. Em vez de copiar e colar variáveis repetidas para criar dez zumbis diferentes, você constrói uma Classe chamada Inimigo que dita as regras universais de como um zumbi deve andar, atacar e sofrer dano. Cada novo zumbi gerado a partir dessa classe é chamado de "instância", e todos eles herdam automaticamente as capacidades definidas na planta original. Isso transforma o código caótico em um sistema extremamente modular, onde os comportamentos são agrupados logicamente dentro de seus respectivos donos.</p>
    <p>No seu dia a dia programando as fases do jogo, você criará um arquivo dedicado apenas para a classe do Jogador e outro para os Monstros. Ao iniciar a partida, você usará a palavra-chave new para conjurar esses personagens na memória, passando atributos específicos como vida máxima e velocidade através de um método construtor. Se o design do seu jogo exigir hordas massivas de adversários, basta usar um loop de repetição aliado à classe para povoar a tela instantaneamente com clones que agem de forma independente. Caso você precise de um inimigo que voa, basta criar uma nova classe que "herda" as características terrestres e adiciona asas, economizando semanas de trabalho e reescrita.</p>
    <p>A POO é a espinha dorsal de qualquer jogo profissional porque resolve o problema do gerenciamento de estado em larga escala. Sem classes, coordenar a colisão entre uma bola de fogo e cinco goblins diferentes seria um pesadelo lógico cheio de falhas. Com classes, a bola de fogo sabe como explodir, e cada goblin tem um método interno chamado receberDano() que gerencia sua própria barra de vida de forma isolada e autossuficiente. Essa arquitetura garante que a destruição de um inimigo não afete os outros ao redor, mantendo a física, as animações e as regras de gameplay consistentes, seguras e extremamente fáceis de calibrar durante o balanceamento da dificuldade.</p>
    <div class="code-block"><pre><code>// Criando o "molde" universal para qualquer personagem
class Personagem {
    // O construtor é executado sempre que usamos 'new'
    constructor(nome, vidaBase, forcaAtaque) {
        this.nome = nome;
        this.vida = vidaBase;
        this.forca = forcaAtaque;
    }

    // Método que ensina o personagem a atacar
    atacar() {
        console.log(this.nome + " atacou com " + this.forca + " de força!");
    }

    // Método que ensina o personagem a sofrer ferimentos
    sofrerDano(danoRecebido) {
        this.vida -= danoRecebido;
        console.log(this.nome + " sofreu dano! Vida atual: " + this.vida);
    }
}

// Fabricando instâncias reais a partir do molde
const heroi = new Personagem("Cavaleiro", 100, 25);
const vilao = new Personagem("Orc Bruiser", 80, 15);

// Interagindo os objetos através de seus próprios métodos
heroi.atacar();
vilao.sofrerDano(25);</code></pre></div>`;

window.conteudosJS["Métodos de Array (Parte 1: map e filter)"] = `
    <p>Os métodos modernos de Array, especificamente o map e o filter, são como ferramentas de garimpo avançadas que permitem varrer listas de dados e transformá-las sem destruir a informação original. O filter, como o nome sugere, atua como uma peneira cirúrgica: ele testa cada elemento de uma lista com base em uma condição lógica e cria um array inteiramente novo contendo apenas aqueles que passaram no teste. O map funciona como uma esteira de fábrica: ele passa por cada item da lista original, aplica uma transformação matemática ou de formatação a ele, e devolve uma nova lista com os resultados atualizados. Ambos substituem os exaustivos e manuais loops for tradicionais em cenários de tratamento de dados puros.</p>
    <p>Durante a criação do seu jogo, essas duas funções serão as suas melhores amigas para gerenciar grandes volumes de entidades ativas na tela. Você usará o filter constantemente no seu Game Loop para fazer a "limpeza" do cenário, varrendo a lista de inimigos a cada quadro e removendo automaticamente aqueles cuja vida chegou a zero, fazendo-os desaparecer do jogo. O map, por sua vez, é perfeito para atualizar as configurações de dificuldade de hordas: se o jogador entrar no "Modo Difícil", você pode usar o mapa para multiplicar a velocidade e a vida de todos os monstros da lista de uma só vez. Eles mantêm o código declarativo, dizendo "o que" deve ser feito, em vez de focar no "como", reduzindo a chance de errar índices numéricos.</p>
    <p>A importância dessa dupla dinâmica para a performance e a estabilidade das regras do jogo é imensurável. Em um sistema de colisões, varrer centenas de projéteis e inimigos com loops imperativos pode causar travamentos na taxa de atualização (FPS) se não for bem feito. O filter otimiza esse processo de verificação, garantindo que a matemática de colisão só aconteça com elementos que realmente estão vivos e ativos no mapa. O conceito de retornar um "novo array" em vez de alterar o original é uma prática chamada imutabilidade, que evita bugs horríveis onde um tiro fantasma acerta um monstro que teoricamente já estava morto, tornando a lógica do jogo cristalina e blindada contra comportamentos imprevistos.</p>
    <div class="code-block"><pre><code>// Lista de objetos representando os inimigos na fase
const hordaZumbis = [
    { id: 1, tipo: "Lento", vida: 50, vivo: true },
    { id: 2, tipo: "Corredor", vida: 0, vivo: false }, // Este já foi derrotado
    { id: 3, tipo: "Gigante", vida: 150, vivo: true }
];

// Usando FILTER para limpar os mortos e manter apenas os vivos no jogo
const zumbisAtivos = hordaZumbis.filter((zumbi) => zumbi.vivo === true);
console.log("Inimigos ainda na tela:", zumbisAtivos.length);

// Usando MAP para criar um efeito de feitiço que dobra a vida dos vivos
const zumbisBuffados = zumbisAtivos.map((zumbi) => {
    return { 
        id: zumbi.id, 
        tipo: "Super " + zumbi.tipo, 
        vida: zumbi.vida * 2, // Dobra a vida original
        vivo: zumbi.vivo 
    };
});

// Verificando o resultado do feitiço
console.log("O gigante agora tem vida igual a: " + zumbisBuffados[1].vida);</code></pre></div>`;

window.conteudosJS["Métodos de Array (Parte 2: reduce e find)"] = `
    <p>Expandindo o nosso arsenal de manipulação de listas, o reduce e o find atacam os problemas mais complexos de totalização e busca imediata dentro das matrizes de dados do seu projeto. O método find atua como um detetive particular de altíssima eficiência: ele procura em uma lista gigante e retorna exatamente o primeiro item que bater com a descrição que você solicitou, parando a busca imediatamente para poupar memória. Já o método reduce é o grande contador mágico: ele espreme todos os valores de uma lista (como se a estivesse amassando) e os reduz a um único valor final, acumulando números, somando propriedades ou até mesmo montando uma String gigante a partir de pedaços pequenos.</p>
    <p>No coração do desenvolvimento das mecânicas do seu jogo web, você recorrerá ao find sempre que precisar de uma interação altamente específica, como quando o jogador tenta equipar um item do inventário. Se ele clicar na "Espada Longa", o find varre a mochila inteira e extrai rapidamente o objeto da arma com seus atributos de dano. O reduce, por outro lado, brilhará na tela final das partidas ou no painel de estatísticas: você o utilizará para somar instantaneamente todos os pontos de experiência que o herói ganhou matando dezenas de criaturas diferentes, ou para somar o peso de todos os itens da mochila e verificar se o personagem conseguiu ultrapassar seu limite de carga suportada.</p>
    <p>A importância central dessas ferramentas reside na elegância de extrair informações estratégicas sem precisar poluir o código com contadores numéricos ou lógicas de busca braçal. Ao utilizar o find, o seu código de "interação com NPCs" consegue identificar com precisão com qual lojista o jogador está falando com base na distância de colisão, garantindo que ele abra a loja correta. Com o reduce, calcular atributos complexos de jogos de RPG (como o dano total combinando força base, buffs de magia e multiplicadores de armas) se torna uma tarefa matemática limpa e agrupada em uma única instrução confiável. Juntos, eles conectam grandes bases de dados ao feedback imediato que a interface visual deve fornecer ao jogador.</p>
    <div class="code-block"><pre><code>// Inventário do jogador com vários itens coletados
const inventario = [
    { nome: "Poção Menor", peso: 1, tipo: "Consumível" },
    { nome: "Chave do Chefe", peso: 0.5, tipo: "Quest" },
    { nome: "Martelo Pesado", peso: 15, tipo: "Arma" }
];

// Usando FIND para pegar o item chave e abrir uma porta
const itemNecessario = inventario.find((item) => item.nome === "Chave do Chefe");
if (itemNecessario) {
    console.log("Porta destrancada usando: " + itemNecessario.nome);
}

// Usando REDUCE para calcular o peso total da mochila
// O acumulador (somaPeso) começa em 0, conforme definido no final do comando
const pesoTotalMochila = inventario.reduce((somaPeso, item) => {
    return somaPeso + item.peso;
}, 0); 
console.log("O personagem está carregando " + pesoTotalMochila + " quilos no momento.");</code></pre></div>`;

window.conteudosJS["Desestruturação (Destructuring)"] = `
    <p>A Desestruturação é um truque de sintaxe brilhante do JavaScript que permite extrair valores de dentro de Objetos ou Arrays complexos e transformá-los em variáveis independentes em uma única linha de código. Em vez de percorrer um longo caminho de pontos para acessar um dado específico (como ter que escrever irritantes jogador.status.posicao.x repetidas vezes), a desestruturação permite que você declare chaves correspondentes aos nomes originais e as "puxe" diretamente para fora da estrutura. É como abrir um baú de tesouros gigantesco e, com um único feitiço, sugar apenas as gemas de rubi que você precisa diretamente para o seu bolso, deixando o resto intocado.</p>
    <p>Na arquitetura do seu código de game dev, você usará isso ostensivamente para deixar a leitura das suas funções matemáticas incrivelmente limpas e diretas. Quando a função de física for calcular a gravidade, ela receberá o objeto inteiro do personagem como parâmetro; usando a desestruturação logo na entrada, você extrai instantaneamente as coordenadas de colisão, transformando-as nas variáveis x e y. O mesmo vale para processar um golpe sofrido: você desestrutura o pacote de dados do ataque inimigo, puxando apenas o valor do danoDesteGolpe e a chance de acertoCritico, ignorando todo o resto das animações ou efeitos visuais que vieram no mesmo pacote de informações do zumbi.</p>
    <p>A importância desta técnica para a construção de mecânicas flui através da extrema redução de redundância visual, evitando a fadiga mental durante horas de depuração de código (debugging). Ao desempacotar exatamente o que uma função precisa, você evita alterar as propriedades originais do objeto acidentalmente, garantindo a imutabilidade durante o processamento de regras temporárias. Além disso, a desestruturação elimina as falhas onde o programador esquece de digitar um "ponto" em caminhos de objeto muito profundos, quebrando as barreiras entre os sistemas de interface visual do jogo (que precisam de textos curtos) e os dados de retaguarda (que são armazenados em objetos pesados e complexos).</p>
    <div class="code-block"><pre><code>// Um objeto complexo simulando o estado de um chefe de fase
const chefaoFinal = {
    nome: "Lord Vazio",
    atributos: {
        forcaBruta: 99,
        defesaMagica: 50,
        velocidade: 12
    },
    coordenadas: { x: 450, y: 120 }
};

// Em vez de usar: let x = chefaoFinal.coordenadas.x;
// Usamos a DESESTRUTURAÇÃO para extrair x e y de uma vez só:
const { x, y } = chefaoFinal.coordenadas;

// Extraindo dados aninhados para facilitar o cálculo de batalha
const { forcaBruta, defesaMagica } = chefaoFinal.atributos;

// O código agora fica muito mais limpo e legível!
console.log("O chefe está na posição X: " + x + " e Y: " + y);
console.log("Poder total de combate: " + (forcaBruta + defesaMagica));</code></pre></div>`;

window.conteudosJS["Operadores Spread e Rest (...)"] = `
    <p>Os operadores Spread e Rest, simbolizados visualmente pelos famosos "três pontinhos" (...), são irmãos gêmeos que operam maravilhas no fluxo de dados, dependendo de onde são posicionados no código. O Spread (espalhar) pega as propriedades de um Objeto ou os itens de um Array e os "despeja" para fora de sua caixa, permitindo clonar estruturas ou mesclar listas gigantescas sem bagunçar a memória original. Já o Rest (resto) funciona ao contrário: ele é usado na assinatura de uma função para "engolir" e agrupar um número infinito de argumentos soltos que lhe foram enviados, empacotando-os em um Array novinho em folha para que possam ser processados coletivamente.</p>
    <p>No ecossistema de desenvolvimento do seu projeto web, o Spread salvará a sua vida ao criar os sistemas de inventário e os "Save States" do jogo. Quando um personagem herda equipamentos base e ganha um item lendário novo, você usa os três pontinhos para clonar os status originais e adicionar o bônus final por cima, sem sobrescrever ou destruir a armadura básica original na memória do computador. O operador Rest será essencial na construção de sistemas de feitiços complexos: imagine uma magia de área que atinge três, sete ou doze inimigos diferentes ao mesmo tempo. Com o Rest, sua função aplicarDanoEmMassa(...alvos) não se importa com a quantidade; ela simplesmente agrupa todos que foram atingidos e distribui o dano uniformemente em um loop for.</p>
    <p>A importância desta sintaxe para a mecânica de jogo está estritamente ligada à prevenção do pior tipo de erro na programação: a mutação acidental por referência. No JavaScript, se você diz que "Monstro B = Monstro A" e altera a cor do Monstro B, o Monstro A também mudará de cor inesperadamente, arruinando a fase inteira! O Spread Operator cria clones independentes verdadeiros, garantindo que se o jogador "Comprar" uma poção, ele adicione uma cópia dela na mochila, enquanto a original continua intocada na prateleira da loja. Esses três pontinhos aparentemente simples são os guardiões da estabilidade dos dados e do gerenciamento do inventário nas suas aventuras interativas.</p>
    <div class="code-block"><pre><code>// Atributos básicos (template) de um soldado genérico
const statusBase = { vida: 100, defesa: 20, classe: "Peão" };

// Usando o SPREAD (...) para CLONAR a base e adicionar novidades
// Isso evita que o soldado básico seja alterado por acidente!
const capitaoDeElite = { 
    ...statusBase, 
    classe: "Capitão", // Sobrescreve a classe básica
    habilidadeEspecial: "Grito de Guerra" // Adiciona algo novo
};

console.log("Vida do Capitão:", capitaoDeElite.vida); // Herdou 100
console.log("Classe do Capitão:", capitaoDeElite.classe); // Alterou para Capitão

// Usando REST (...) para capturar infinitos inimigos em uma função de explosão
function bombaArea(dano, ...inimigosAtingidos) {
    // O JS empacotou todos os nomes no array 'inimigosAtingidos'
    console.log("A bomba explodiu! Causou " + dano + " de dano nos seguintes alvos:");
    console.log(inimigosAtingidos); // Exibe a lista inteira de azarados
}

// Passando múltiplos argumentos separados por vírgula
bombaArea(50, "Goblin", "Orc", "Troll de Caverna", "Morcego");</code></pre></div>`;

window.conteudosJS["Escopo e Closures"] = `
    <p>O Escopo é a regra invisível do JavaScript que define os "muros" dentro dos quais as suas variáveis nascem, vivem e morrem; é ele quem diz quem pode enxergar ou usar qual informação. Variáveis criadas fora de tudo têm escopo global e podem ser vistas pelo jogo todo, enquanto as criadas dentro de funções estão presas lá dentro. Uma Closure (clausura), por sua vez, é um comportamento avançado e quase mágico que ocorre quando uma função que está dentro de outra função se "lembra" das variáveis que estavam ao seu redor no momento em que ela foi criada, mesmo depois que a função de fora já terminou o seu trabalho e foi encerrada pelo processador. Ela essencialmente cria uma memória privada e inviolável para as suas ações.</p>
    <p>No contexto de game design via código, dominar o escopo evita que o tiro do "Jogador 1" seja acidentalmente calculado usando a variável de dano do "Jogador 2", pois cada variável de cálculo rápido viverá isolada dentro do bloco da sua própria função de ataque. Já as Closures são a arma secreta para criar sistemas de "Cooldown" (tempo de recarga de habilidades) e pontuações impossíveis de serem trapaceadas (hackeadas). Você pode escrever uma função geradora de ataque especial que guarda a variável tempoDeRecarga escondida em seu escopo íntimo; o jogo consegue usar a habilidade e ativar o tempo, mas nenhum script externo malicioso ou linha solta do console do navegador conseguirá alterar esse tempo para zero forçadamente.</p>
    <p>A relevância teórica e prática deste tema assegura a integridade das mecânicas do seu universo interativo. Entender o escopo resolve os maiores mistérios de "por que a variável diz que está indefinida?" garantindo que você organize corretamente onde a posição do mouse deve ser capturada e onde ela deve ser aplicada no personagem. As Closures permitem uma arquitetura profissional de encapsulamento, onde lógicas vitais (como a contagem real de vidas de um jogo arcade) funcionam como os cofres de um banco central. Dessa maneira, as variáveis globais não poluem a memória do navegador, e os sistemas internos do jogo não interferem e não estragam o comportamento dos sistemas paralelos que rodam ao mesmo tempo.</p>
    <div class="code-block"><pre><code>// Função externa que cria uma habilidade com Cooldown (Closure)
function criarHabilidadeEspecial() {
    // Essa variável de 'tempoRestante' fica ESCONDIDA dentro do escopo
    // Ninguém de fora consegue alterar esse valor diretamente!
    let tempoRestante = 0; 

    // A função retornada (Closure) "lembra" da variável acima para sempre
    return function() {
        if (tempoRestante === 0) {
            console.log("Habilidade Suprema Disparada! BOOOM!");
            tempoRestante = 5; // Inicia o tempo de recarga de 5 segundos
            
            // Simula o tempo passando (reduzindo o recarregamento)
            const recarga = setInterval(() => {
                tempoRestante--;
                if (tempoRestante === 0) {
                    clearInterval(recarga);
                    console.log("Habilidade pronta novamente!");
                }
            }, 1000);
        } else {
            console.log("Aguarde! Recarregando em " + tempoRestante + "s...");
        }
    };
}

// Inicializando a magia no personagem
const lançarMeteoro = criarHabilidadeEspecial();

// Testando a Closure na prática
lançarMeteoro(); // Dispara com sucesso
lançarMeteoro(); // Falha, pois a variável escondida bloqueou o tiro repetido!</code></pre></div>`;

window.conteudosJS["JSON e LocalStorage"] = `
    <p>O JSON (JavaScript Object Notation) é o formato universal de texto utilizado para empacotar e transportar dados pela internet, transformando objetos complexos do JavaScript em longas "strings" (textos) puras que qualquer outro sistema ou linguagem consegue entender. O LocalStorage, por sua vez, é um "cofre" embutido diretamente no navegador do seu usuário que permite salvar e armazenar textos de forma permanente, mesmo que ele desligue o computador. Como o LocalStorage não entende estruturas lógicas, matrizes ou POO, o JSON entra como tradutor: você converte os estados do jogo para o formato texto com JSON.stringify(), guarda no navegador e, quando quiser jogar de novo, puxa o texto e o converte de volta à vida com o JSON.parse().</p>
    <p>Durante as etapas finais da construção do seu jogo web, essas ferramentas serão responsáveis exclusivamente por criar a tão desejada funcionalidade de "Salvar Jogo". Sempre que o jogador encostar em um ponto de salvamento na tela ou vencer a partida batendo o recorde (High Score), o código JS pegará o objeto gigante jogadorStatus, o transformará num pacote JSON amigável e o depositará no cofre do LocalStorage usando um nome de chave específico. Quando a página HTML for recarregada no dia seguinte, a primeira coisa que o seu Game Loop fará é checar o cofre; se encontrar um arquivo de salvamento anterior, ele puxa os dados do JSON, ressuscitando as coordenadas, pontos e níveis de vida no exato lugar onde a aventura havia parado.</p>
    <p>A importância desta integração é gigantesca para o engajamento e a qualidade do seu produto interativo. Jogos que não salvam o progresso afugentam os jogadores, especialmente em mecânicas de RPG duradouras ou "clickers" casuais que exigem retorno diário. Manipular o JSON e o LocalStorage liberta o seu jogo das limitações da memória volátil (RAM), oferecendo persistência contínua sem que você precise alugar um banco de dados caro, já que tudo fica hospedado diretamente na máquina de quem está jogando. A estrutura é simples de debugar e garante que o registro das grandes vitórias do usuário permaneçam cravadas no histórico de conquistas do seu jogo pelo tempo que for necessário.</p>
    <div class="code-block"><pre><code>// O progresso atual que o jogador alcançou antes de fechar a aba
const progressoParaSalvar = {
    faseAtual: 4,
    pontosXP: 15400,
    mochila: ["Poção", "Mapa do Tesouro"]
};

// 1. Transformando o Objeto JS em uma String de texto JSON (Preparando)
const dadosEmTexto = JSON.stringify(progressoParaSalvar);

// 2. Salvando o texto na memória permanente do navegador (Cofre)
localStorage.setItem("meuJogo_SaveSlot1", dadosEmTexto);
console.log("Jogo salvo com sucesso na memória do navegador!");

// ----- (Imaginando que o jogador fechou e abriu o jogo no dia seguinte) -----

// 3. Recuperando o texto do cofre do navegador
const saveResgatado = localStorage.getItem("meuJogo_SaveSlot1");

if (saveResgatado) {
    // 4. Convertendo o texto JSON de volta para um Objeto JS Vivo
    const progressoCarregado = JSON.parse(saveResgatado);
    console.log("Bem-vindo de volta! Você está na fase: " + progressoCarregado.faseAtual);
}</code></pre></div>`;

window.conteudosJS["Módulos (Import / Export)"] = `
    <p>Módulos são o sistema de engenharia moderno do JavaScript que permite fatiar um código-fonte colossal em múltiplos arquivos menores, focados e incrivelmente organizados, que se conectam entre si como peças de Lego. Antigamente, os criadores colocavam toda a matemática, colisão e lógica visual em um gigantesco arquivo jogo.js com dez mil linhas. Hoje, nós utilizamos as palavras-chave export em um arquivo para dizer ao navegador que uma função ou classe "pode ser usada por outras pessoas", e o import em outro arquivo para puxar essas funcionalidades para dentro. Essa estratégia é a quintessência de uma arquitetura limpa em projetos colaborativos.</p>
    <p>No seu diretório de arquivos web, você separará meticulosamente as responsabilidades: a física real do pulo vai morar em fisica.js, os cálculos de dano e itens vão para combate.js, e o arquivo central main.js atuará apenas como o regente da orquestra, importando os métodos de todos os outros arquivos para orquestrar o Game Loop visual. Caso ocorra um "bug" que faça a espada ficar invisível, você não precisará ler milhares de linhas perdidas, você irá imediatamente ao módulo graficos.js, que trata exclusivamente da renderização visual no elemento canvas HTML. Isso acelera o processo de atualização de versões (patching) e permite que vários desenvolvedores mexam no mesmo jogo sem quebrar o trabalho uns dos outros.</p>
    <p>Para as mecânicas, os módulos previnem um fenômeno caótico conhecido como "poluição do escopo global", onde o nome de uma variável de chefão acaba sobrescrevendo sem querer a variável de vida do herói principal porque tudo estava misturado no mesmo lugar. A modularização esconde a complexidade suja por trás de arquivos fechados, expondo para fora apenas os atalhos limpos que são necessários. Um jogo que usa Módulos corretamente é infinitamente escalável: quer criar uma expansão com dez novas armaduras e inimigos de gelo? Basta criar uma pasta nova de módulos expansaoInverno.js e importá-la com sucesso e segurança no motor do núcleo duro da sua engine.</p>
    <div class="code-block"><pre><code>// === ARQUIVO: matematica_jogo.js (Módulo Focado) ===
// O 'export' libera a função para ser puxada por outros arquivos do projeto
export function calcularDistancia(x1, y1, x2, y2) {
    let diferencaX = x2 - x1;
    let diferencaY = y2 - y1;
    // Teorema de Pitágoras para colisão circular e radar
    return Math.sqrt((diferencaX * diferencaX) + (diferencaY * diferencaY));
}

// === ARQUIVO: main_jogo.js (Cérebro Principal) ===
// Usamos 'import' para trazer a inteligência do outro arquivo sem copiar o código
import { calcularDistancia } from './matematica_jogo.js';

let posicaoHeroi = { x: 10, y: 10 };
let posicaoMonstro = { x: 50, y: 10 };

// Aplicando o módulo na lógica do loop de jogo principal
let distanciaAtual = calcularDistancia(posicaoHeroi.x, posicaoHeroi.y, posicaoMonstro.x, posicaoMonstro.y);

if (distanciaAtual <= 40) {
    console.log("Cuidado! O inimigo está muito próximo para o ataque de espada!");
}</code></pre></div>`;

window.conteudosJS["Tratamento de Erros (Try / Catch)"] = `
    <p>O bloco Try/Catch (Tente/Pegue) funciona como o sistema de airbag de segurança ou os amortecedores do seu código-fonte, garantindo que exceções brutais não levem ao colapso completo do programa. No mundo ideal da programação teórica, tudo dá certo; no mundo real da internet, arquivos de imagem corrompem e dados falham ao carregar. Em vez de permitir que o JavaScript interrompa violentamente a partida exibindo uma temida "Tela Branca" ou um erro fatal vermelho no console, você envolve as lógicas perigosas com a palavra try. Caso qualquer parte daquela instrução exploda, o JS ignora o pânico e pula graciosamente para o bloco catch, onde você programou um "Plano B" ou uma mensagem educada de reparação de danos.</p>
    <p>Você usará esse cinto de segurança no desenvolvimento web todas as vezes em que o jogo tentar "conversar" com forças fora de seu controle direto. Por exemplo, ao usar o método Fetch para baixar a tabela global de líderes do servidor, a internet do usuário pode cair exatamente naquele microssegundo; usando o try, você tenta puxar a tabela online, mas no catch você programa o jogo para simplesmente carregar uma tabela vazia de rankings locais para que a aventura não precise ser congelada. Outro caso crasso é carregar jogos salvos (JSON.parse): se o arquivo de progresso no navegador foi corrompido ou adulterado pelo jogador, o "try" identificará a falha de formato, e o "catch" enviará o jogador com segurança de volta para o menu principal de "Novo Jogo".</p>
    <p>A importância imensa dessa arquitetura de sobrevivência reflete na qualidade de acabamento do produto final do jogo (o Polimento). Usuários frustram-se facilmente com jogos travados e bugs que exigem "refresh" da página para voltar a funcionar. Lidar preventivamente com erros assíncronos e incertezas assegura que as mecânicas se curem sozinhas e que os sprites faltantes sejam ignorados em silêncio no processo de renderização. O tratamento try/catch é a barreira suprema entre o design amador e a programação web profissional que garante longevidade, confiança técnica e blindagem do software perante todas as imprevisibilidades tecnológicas do jogador moderno e das conexões de rede atuais.</p>
    <div class="code-block"><pre><code>// Simulando um sistema sensível: Carregar as configurações de som do usuário
function carregarConfiguracoes() {
    let dadosSalvos = localStorage.getItem("config_audio_jogo");

    // Tentamos (TRY) ler e converter as configurações que podem estar quebradas
    try {
        // Se a string 'dadosSalvos' estiver corrompida, o JSON.parse vai EXPLODIR o código!
        let config = JSON.parse(dadosSalvos); 
        console.log("Opções carregadas. Volume atual: " + config.volume);
        
    } catch (erroFatal) {
        // Se a explosão acontecer no bloco 'try', o 'CATCH' amortece a queda instantaneamente.
        // O jogo não trava e usamos as configurações padrão de emergência (Plano B)
        console.log("Erro ao carregar o arquivo de save! Restaurando configurações de fábrica...");
        
        let configPadraoEmergencia = { volume: 100, mutado: false };
        console.log("O jogo usará o volume " + configPadraoEmergencia.volume + " por precaução.");
    }
}

// Rodando a inicialização segura do áudio do menu principal
carregarConfiguracoes();</code></pre></div>`;
