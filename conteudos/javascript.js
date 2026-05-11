/**
 * BANCO DE DADOS DE TEXTOS - JAVASCRIPT (V BETA 0.2)
 */

// Garante que o objeto global exista
window.conteudos = window.conteudos || {};

// O sistema busca por 'js' (minúsculo) e depois pelo nível 'iniciante'
window.conteudos.js = {
    "iniciante": {

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
}</code></pre></div>`

        // ... continue aqui com os outros 8 temas que passamos, sempre fechando com chaves e vírgulas!
    },
    
    "intermediario": {
        // Reservado para a v0.3
    },
    
    "avancado": {
        // Reservado para a v0.4
    }
};
