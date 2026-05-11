/**
 * BANCO DE DADOS DE TEXTOS - JAVASCRIPT INICIANTE (V BETA 0.2)
 */

window.conteudosJS = {
    // === NÍVEL INICIANTE ===

    "Variáveis e Constantes (let e const)": `
        <p>As variáveis e constantes são os alicerces de qualquer jogo, funcionando como recipientes na memória do computador para armazenar informações que mudam ou permanecem fixas. No JavaScript moderno, utilizamos o <code>let</code> para dados voláteis, como a posição atual de um herói que corre pelo cenário, e o <code>const</code> para valores que definem as regras imutáveis do universo do seu jogo. Imagine que o computador precisa de um endereço para consultar, a cada fração de segundo, onde o jogador está ou quanta munição ele ainda possui.</p>
        <p>No fluxo de desenvolvimento de um jogo web, você declarará essas variáveis geralmente no topo do seu arquivo JS para configurar o estado inicial da cena. O <code>const</code> deve ser sua primeira escolha para definir parâmetros globais, como a força da gravidade que puxa os objetos para baixo ou o caminho da pasta onde estão guardadas as imagens dos sprites. Já o <code>let</code> será usado exaustivamente dentro do seu "Game Loop" para atualizar coordenadas matemáticas.</p>
        <p>A importância real deste tema reside no controle absoluto sobre a física e a lógica de tempo do seu projeto. Se você definir a gravidade como uma variável comum e, por erro, o código alterá-la no meio da partida, seu personagem pode sair flutuando sem controle. Ao usar <code>const</code> para a taxa de quadros (como 0.1 segundos para cada frame de animação), você garante que o jogo mantenha a mesma cadência visual do início ao fim.</p>
        <div class="code-block"><pre><code>// Regras fixas (Constantes)
const GRAVIDADE = 0.8;
const VELOCIDADE_SALTO = -15;

// Estados que mudam (Variáveis)
let personagemX = 100;
let personagemY = 500;
let vidaAtual = 3;

// O herói perde uma vida
vidaAtual = vidaAtual - 1;
console.log("Vida restante: " + vidaAtual);</code></pre></div>`,

    "Tipos de Dados Essenciais": `
        <p>Os tipos de dados são as diferentes naturezas de informação que o JavaScript consegue processar para dar vida ao seu jogo. Os <b>Numbers</b> cuidam de toda a parte matemática, desde a velocidade de um projétil até o ângulo de rotação de uma nave espacial. As <b>Strings</b> são sequências de caracteres usadas para toda a comunicação textual, como o nome do avatar ou diálogos de NPCs. Por fim, os <b>Booleans</b> assumem apenas <code>true</code> ou <code>false</code>.</p>
        <p>Na prática, você utilizará Numbers para calcular colisões e pontuações. As Strings serão enviadas para os elementos da interface (UI) para exibir mensagens de "Level Up!". Os Booleans são indispensáveis para controlar os estados do personagem: você criará variáveis como <code>estaNoChao</code> para impedir que o jogador pule infinitamente no ar.</p>
        <p>Entender a diferença entre esses tipos evita bugs catastróficos, como tentar somar um número a um texto e acabar com um erro de cálculo na pontuação. A precisão técnica dos Numbers permite que as animações de sprites ocorram na velocidade correta, enquanto os Booleans gerenciam a inteligência artificial básica de um inimigo.</p>
        <div class="code-block"><pre><code>let pontuacao = 0; // Number
let nomeJogador = "Arqueiro Verde"; // String
let estaNoChao = true; // Boolean

if (estaNoChao === true) {
    console.log(nomeJogador + " pode pular!");
}</code></pre></div>`,

    "Operadores Matemáticos e Lógicos": `
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
}</code></pre></div>`,

    "Estruturas Condicionais (if, else, else if)": `
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
}</code></pre></div>`,

    "Estruturas de Repetição (for e while)": `
        <p>Estruturas de repetição, ou loops, permitem executar o mesmo bloco de código múltiplas vezes de forma automática. Em vez de escrever cem linhas para criar cem estrelas, você usa um loop <code>for</code>. O loop <code>while</code> funciona de forma similar, mas continua repetindo enquanto uma condição específica for verdadeira, ideal para filas de efeitos sonoros.</p>
        <p>Nos jogos, loops gerenciam coleções de elementos na tela. Você usará o <code>for</code> para percorrer uma lista de inimigos e atualizar a posição de cada um, ou para desenhar cada bloco do chão. Se houver um sistema de partículas para explosões, um loop processará cada pequena faísca individualmente, aplicando física e transparência.</p>
        <p>A importância deste conceito está na escalabilidade e performance. Eles permitem processar sistemas complexos, como a colisão entre uma horda de zumbis e as paredes, sem tratar cada um manualmente. Os loops garantem a renderização de animações complexas mantendo a taxa de quadros estável.</p>
        <div class="code-block"><pre><code>for (let i = 0; i < 5; i++) {
    let x = Math.random() * 800;
    console.log("Inimigo " + i + " em: " + x);
}

let energia = 100;
while (energia > 0) {
    energia -= 25;
    console.log("Escudo: " + energia);
}</code></pre></div>`,

    "Introdução às Funções": `
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
alerta("Posição: " + x);</code></pre></div>`,

    "Arrays Simples (Listas)": `
        <p>Arrays são listas que armazenam múltiplos valores em uma única variável, organizados por um índice numérico. Em vez de criar uma variável para cada bala no pente, você cria um Array. O acesso é rápido e você pode adicionar itens no final (push) ou remover conforme o jogador os utiliza.</p>
        <p>Na prática, Arrays gerenciam coleções e sequências de animação. Você usará um Array para guardar os nomes dos arquivos de imagem (sprites) de uma caminhada, percorrendo a lista para criar o movimento. Também são perfeitos para inventários e para gerenciar as camadas do seu cenário.</p>
        <p>A importância real é a capacidade de lidar com conteúdos dinâmicos. Sem eles, você teria dificuldade em gerenciar hordas de inimigos, pois teria que prever quantos nasceriam. Com Arrays, você simplesmente "empurra" um novo inimigo para a lista. Eles trazem ordem ao caos.</p>
        <div class="code-block"><pre><code>let inventario = ["Espada", "Escudo", "Poção"];
inventario.push("Amuleto");

console.log("Usando: " + inventario[0]);
console.log("Total itens: " + inventario.length);

const sprites = ["run_1.png", "run_2.png", "run_3.png"];</code></pre></div>`,

    "Objetos Básicos (Chave e Valor)": `
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
heroi.receberDano(20);</code></pre></div>`,

    "Manipulação Básica do DOM (getElementById)": `
        <p>O DOM é a ponte que permite ao JavaScript interagir com o HTML. Como seu projeto usa pastas separadas, o JS precisa encontrar os elementos na página, como onde o jogo é desenhado. O método <code>getElementById</code> é a ferramenta de busca: através de um ID único, o JS altera conteúdo, cores ou visibilidade.</p>
        <p>Nos jogos, o DOM gerencia a Interface de Usuário (UI). Você usará <code>getElementById</code> para capturar o <code>&lt;canvas&gt;</code>, a tela onde a mágica acontece. Também atualizará a barra de vida e o placar em tempo real, mudando o texto de um parágrafo HTML para mostrar a pontuação atualizada.</p>
        <p>A relevância é a conexão vital entre a lógica invisível e o feedback visual. Sem isso, o jogador não saberia sua vida ou pontos. Conectar variáveis a elementos de texto cria uma experiência informativa. Permite criar menus responsivos e botões de inventário profissionais integrados ao navegador.</p>
        <div class="code-block"><pre><code>const canvas = document.getElementById("tela-jogo");
const elementoPlacar = document.getElementById("placar");

let pontos = 0;
function ganharPonto() {
    pontos += 10;
    elementoPlacar.innerText = pontos;
}</code></pre></div>`,

    "Eventos de Teclado e Mouse (addEventListener)": `
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
});</code></pre></div>`
};
