window.conteudosJS = {
    // === NÍVEL INICIANTE ===
    "Variáveis e Constantes (let e const)": `
        <p>Variáveis (<code>let</code>) e Constantes (<code>const</code>) funcionam como os blocos de memória. Usamos constantes para regras fixas (Gravidade) e let para coisas que mudam (Posição do Player).</p>
        <div class="code-block"><pre><code>const GRAVIDADE = 0.6;
let playerY = 100;</code></pre></div>`,
        
    "Tipos de Dados Essenciais": `
        <p>Números para física, Textos para falas e Booleanos (true/false) para detectar vida ou morte.</p>
        <div class="code-block"><pre><code>let estaNoChao = true;</code></pre></div>`,

    "Operadores Matemáticos e Lógicos": `
        <p>Símbolos como + e - cuidam da movimentação. Símbolos lógicos (&& e ||) garantem regras justas, como "Pule APENAS SE tiver no chão E apertar botão".</p>
        <div class="code-block"><pre><code>if (botaoApertado && estaNoChao) { pular(); }</code></pre></div>`,

    "Estruturas Condicionais (if, else, else if)": `
        <p>As bifurcações que fazem o jogo "pensar" se é Game Over ou Vitória.</p>
        <div class="code-block"><pre><code>if (vida <= 0) { mostrarGameOver(); }</code></pre></div>`,

    "Estruturas de Repetição (for e while)": `
        <p>Geram múltiplos inimigos na tela com poucas linhas de código em vez de desenhá-los um por um.</p>
        <div class="code-block"><pre><code>for (let i = 0; i < 5; i++) { criarZumbi(); }</code></pre></div>`,

    "Introdução às Funções": `
        <p>Pacotes de código nomeados que podem ser chamados sempre que precisarmos aplicar um dano ou tocar um som.</p>`,
    "Arrays Simples (Listas)": `
        <p>O "inventário" de variáveis que guarda listas ordenadas de itens do seu personagem.</p>`,
    "Objetos Básicos (Chave e Valor)": `
        <p>Estrutura profissional para agrupar tudo de um vilão num único lugar (nome, dano, sprites).</p>`,
    "Manipulação Básica do DOM (getElementById)": `
        <p>O JavaScript agarrando a barra HTML para diminuir o tamanho dela ao tomar golpe.</p>`,
    "Eventos de Teclado e Mouse (addEventListener)": `
        <p>Os radares do jogo que dizem pro personagem correr pra direita ao pressionar 'D'.</p>`,

    // === NÍVEL AVANÇADO ===
    "Callbacks e Event Loop": `
        <p>O Event Loop é como um maestro invisível que gerencia uma fila de tarefas secundárias, permitindo que temporizadores (como abrir uma porta após 3s) rodem sem congelar o jogo todo.</p>
        <div class="code-block"><pre><code>setTimeout(() => {
    console.log("SHHINK! A porta abriu!");
}, 2000);</code></pre></div>`,

    "Promises (Promessas)": `
        <p>Garante que o seu jogo de fato carregue texturas pesadas antes do mapa iniciar, sem "Callback Hell".</p>
        <div class="code-block"><pre><code>carregarMapa().then(() => { console.log("Pronto!"); });</code></pre></div>`,

    "Async / Await": `
        <p>A magia limpa de escrever funções que pausam pontualmente apenas a sua tela de Loading, sem travar as animações.</p>
        <div class="code-block"><pre><code>async function iniciarJogo() {
    const passos = await carregarConta();
    console.log("Iniciando aventura: " + passos);
}</code></pre></div>`,

    "Recursividade": `
        <p>Funções que ativam a si mesmas para gerar mapas proceduralmente ou buscar rotas num labirinto.</p>
        <div class="code-block"><pre><code>function buscar(corredor) {
    if (corredor === 5) return true; // Fim!
    return buscar(corredor + 1); // Chama ela mesma!
}</code></pre></div>`,

    "Manipulação Avançada de Objetos": `
        <p>O uso do Object.assign para forjar armaduras combinadas num RPG num estalar de dedos.</p>
        <div class="code-block"><pre><code>const final = Object.assign({}, base, gemaFogo);</code></pre></div>`,

    "APIs e Fetch": `
        <p>A ferramenta de rede que faz a sua pontuação ser enviada para um Leaderboard global no servidor do mundo inteiro.</p>
        <div class="code-block"><pre><code>const resposta = await fetch("https://api.meujogo.com/rank");
const rank = await resposta.json();
console.log("Líder atual: " + rank[0].nome);</code></pre></div>`,

    "Bitwise Operators (Operadores de Bit)": `
        <p>Escovação pesada de transistores binários para aplicar combos de 15 status negativos em zumbis usando um micro-cálculo e economizando 99% da memória RAM.</p>
        <div class="code-block"><pre><code>if (status & CONGELADO) { pararMovimento(); }</code></pre></div>`,

    "Regular Expressions (Regex)": `
        <p>Fatiamento brutal de textos que sanitiza o chat online para evitar que Hackers quebrem o código, além de traduzir senhas em comandos puros.</p>
        <div class="code-block"><pre><code>const regex = /^\\/([a-zA-Z]+)\\s+(\\d+)$/;</code></pre></div>`,

    "Memory Management (Garbage Collector)": `
        <p>As rotinas de anulamento (null) exigidas para limpar 10.000 imagens da memória ao passar de fase e evitar que a aba do PC caia e trave.</p>
        <div class="code-block"><pre><code>bossMap = null; // O devorador de memória limpa a ram</code></pre></div>`,

    "Design Patterns (Padrões de Projeto)": `
        <p>O isolamento modular de Estados de Animação para que o código de Pulo não corrompa o código de Defesa nunca.</p>
        <div class="code-block"><pre><code>estadoAtual.executarLogicaFisica();</code></pre></div>`
};
