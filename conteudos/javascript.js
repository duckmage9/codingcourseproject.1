/**
 * BANCO DE DADOS DE TEXTOS - JAVASCRIPT COMPLETO (V BETA 0.4)
 * AUTO-PATCH: Injeta Iniciante, Intermediário e Avançado
 */

window.conteudosJS = window.conteudosJS || {};

const applyPatch = setInterval(() => {
    if (typeof db !== 'undefined' && typeof renderEncGrid === 'function' && typeof openModal === 'function') {
        clearInterval(applyPatch); 

        // --- CORREÇÃO 1: Injeta os títulos na const 'db' para as três categorias ---
        
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

        db.js.avancado = [
            "Callbacks e Event Loop",
            "Promises (Promessas)",
            "Async / Await",
            "Recursividade",
            "Manipulação Avançada de Objetos",
            "APIs e Fetch",
            "Bitwise Operators (Operadores de Bit)",
            "Regular Expressions (Regex)",
            "Memory Management (Garbage Collector)",
            "Design Patterns (Padrões de Projeto)"
        ];

        // Força renderização se o usuário já estiver na aba JS
        if (typeof currentTech !== 'undefined' && currentTech === 'js') {
            renderEncGrid();
        }

        // --- CORREÇÃO 2: Patch do openModal para ler window.conteudosJS ---
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
// NÍVEL INICIANTE (1-10)
// =========================================================

window.conteudosJS["Variáveis e Constantes (let e const)"] = `
    <p>As variáveis e constantes são os alicerces de qualquer jogo, funcionando como recipientes na memória do computador para armazenar informações que mudam ou permanecem fixas. No JavaScript moderno, utilizamos o <code>let</code> para dados voláteis, como a posição atual de um herói que corre pelo cenário, e o <code>const</code> para valores que definem as regras imutáveis do universo do seu jogo.</p>
    <div class="code-block"><pre><code>const GRAVIDADE = 0.8;
let personagemY = 500;
personagemY -= 10;</code></pre></div>`;

window.conteudosJS["Tipos de Dados Essenciais"] = `
    <p>Os tipos de dados são as diferentes naturezas de informação: Numbers para matemática de física, Strings para diálogos e Booleans para estados como <code>estaNoChao</code>.</p>
    <div class="code-block"><pre><code>let nome = "Heroi"; // String
let vida = 100; // Number
let vivo = true; // Boolean</code></pre></div>`;

window.conteudosJS["Operadores Matemáticos e Lógicos"] = `
    <p>Operadores matemáticos (+, -, *, /) movem o personagem, enquanto lógicos (&&, ||) verificam condições complexas, como "pressionou pulo E está no chão".</p>
    <div class="code-block"><pre><code>if (pulo && estaNoChao) { saltar(); }</code></pre></div>`;

window.conteudosJS["Estruturas Condicionais (if, else, else if)"] = `
    <p>Bifurcações lógicas que permitem ao jogo reagir. Se a vida for zero, o jogo acaba; caso contrário, a partida continua.</p>
    <div class="code-block"><pre><code>if (vida <= 0) { gameOver(); } else { continua(); }</code></pre></div>`;

window.conteudosJS["Estruturas de Repetição (for e while)"] = `
    <p>Permitem executar o mesmo bloco de código múltiplas vezes, como para atualizar a posição de 100 inimigos simultaneamente.</p>
    <div class="code-block"><pre><code>for (let i=0; i<10; i++) { criarInimigo(); }</code></pre></div>`;

window.conteudosJS["Introdução às Funções"] = `
    <p>Blocos reutilizáveis de lógica. Você define a "receita" de como calcular o dano uma vez e a chama sempre que necessário.</p>
    <div class="code-block"><pre><code>function aplicarDano(alvo, qtd) { alvo.vida -= qtd; }</code></pre></div>`;

window.conteudosJS["Arrays Simples (Listas)"] = `
    <p>Listas que armazenam múltiplos valores, como um inventário de itens ou a lista de sprites de uma animação.</p>
    <div class="code-block"><pre><code>let itens = ["Espada", "Escudo", "Poção"];</code></pre></div>`;

window.conteudosJS["Objetos Básicos (Chave e Valor)"] = `
    <p>Agrupam propriedades de uma entidade. Um objeto "Jogador" pode ter vida, nome e coordenadas x/y.</p>
    <div class="code-block"><pre><code>const player = { nome: "Link", hp: 3 };</code></pre></div>`;

window.conteudosJS["Manipulação Básica do DOM (getElementById)"] = `
    <p>A ponte entre o JS e o HTML. Usado para capturar o Canvas ou atualizar o texto do placar na tela.</p>
    <div class="code-block"><pre><code>document.getElementById("score").innerText = pontos;</code></pre></div>`;

window.conteudosJS["Eventos de Teclado e Mouse (addEventListener)"] = `
    <p>Captura as entradas do jogador. Sem isso, o jogo não saberia quando você clicou ou apertou uma tecla.</p>
    <div class="code-block"><pre><code>window.addEventListener("keydown", mover);</code></pre></div>`;

// =========================================================
// NÍVEL INTERMEDIÁRIO (11-20)
// =========================================================

window.conteudosJS["Arrow Functions"] = `
    <p>As Arrow Functions representam a evolução moderna e elegante na forma de escrever funções no JavaScript. O verdadeiro superpoder delas é a forma inteligente como lidam com o "escopo" da palavra <code>this</code>, garantindo que o seu objeto não sofra amnésia no meio da execução.</p>
    <div class="code-block"><pre><code>const atacar = () => { console.log("Ataque!"); };</code></pre></div>`;

window.conteudosJS["Classes e POO (Programação Orientada a Objetos)"] = `
    <p>A POO estruturada através de Classes funciona como a "fábrica" de onde nascem as entidades do seu mundo. Você constrói uma Classe chamada Inimigo que dita as regras universais de movimento e dano.</p>
    <div class="code-block"><pre><code>class Inimigo { constructor(hp) { this.hp = hp; } }</code></pre></div>`;

window.conteudosJS["Métodos de Array (Parte 1: map e filter)"] = `
    <p>O <code>filter</code> atua como uma peneira para remover inimigos mortos, enquanto o <code>map</code> pode ser usado para dobrar a velocidade de todos os monstros no modo difícil.</p>
    <div class="code-block"><pre><code>const vivos = inimigos.filter(e => e.hp > 0);</code></pre></div>`;

window.conteudosJS["Métodos de Array (Parte 2: reduce e find)"] = `
    <p>O <code>find</code> localiza um item específico no inventário, e o <code>reduce</code> pode somar o peso total de todos os itens carregados pelo herói.</p>
    <div class="code-block"><pre><code>const item = mochila.find(i => i.id === "chave");</code></pre></div>`;

window.conteudosJS["Desestruturação (Destructuring)"] = `
    <p>Permite extrair valores de Objetos ou Arrays complexos para variáveis independentes em uma única linha. Ideal para extrair coordenadas x e y de um objeto de posição.</p>
    <div class="code-block"><pre><code>const { x, y } = player.position;</code></pre></div>`;

window.conteudosJS["Operadores Spread e Rest (...)"] = `
    <p>O Spread (...) clona objetos ou mescla listas sem alterar o original. O Rest agrupa infinitos argumentos em um array, útil para magias que atingem vários alvos.</p>
    <div class="code-block"><pre><code>const novoPlayer = { ...player, skin: "dourada" };</code></pre></div>`;

window.conteudosJS["Escopo e Closures"] = `
    <p>Closures permitem que uma função se "lembre" do ambiente onde foi criada. Essencial para criar sistemas de Cooldown (recarga) impossíveis de serem hackeados.</p>
    <div class="code-block"><pre><code>function cooldown() { let timer = 0; return () => timer; }</code></pre></div>`;

window.conteudosJS["JSON e LocalStorage"] = `
    <p>JSON converte objetos em texto para salvar no LocalStorage do navegador. É assim que o jogo "lembra" do seu progresso no dia seguinte.</p>
    <div class="code-block"><pre><code>localStorage.setItem("save", JSON.stringify(dados));</code></pre></div>`;

window.conteudosJS["Módulos (Import / Export)"] = `
    <p>Permite fatiar o código em múltiplos arquivos organizados (ex: fisica.js, combate.js). Evita o "código espaguete" de dez mil linhas.</p>
    <div class="code-block"><pre><code>import { physics } from './engine.js';</code></pre></div>`;

window.conteudosJS["Tratamento de Erros (Try / Catch)"] = `
    <p>O airbag do seu código. Garante que se um arquivo de som falhar, o jogo continue rodando em vez de travar com uma tela branca.</p>
    <div class="code-block"><pre><code>try { carregarMapa(); } catch (e) { erro(); }</code></pre></div>`;

// =========================================================
// NÍVEL AVANÇADO (21-30) - NOVOS CONTEÚDOS
// =========================================================

window.conteudosJS["Callbacks e Event Loop"] = `
    <p>O JavaScript executa um comando por vez (single-threaded). O Event Loop é o maestro que gerencia tarefas demoradas no fundo do palco, enquanto o show principal (renderização do jogo) continua a 60 FPS.</p>
    <p>Na arquitetura de um jogo web, você aplicará Callbacks sempre que interagir com o teclado ou ao aguardar um temporizador. O Event Loop garante que os inimigos continuem se movendo enquanto o jogo espera 2 segundos para abrir uma porta de pedra.</p>
    <div class="code-block"><pre><code>function pisarNaArmadilha() {
    console.log("Mecanismo ativado...");
    setTimeout(() => {
        console.log("Dano causado após 2 segundos!");
    }, 2000); 
}</code></pre></div>`;

window.conteudosJS["Promises (Promessas)"] = `
    <p>Uma Promise é um contrato de que uma informação demorada será entregue no futuro. É a malha de proteção que impede o jogo de desmoronar se uma textura demorar para baixar.</p>
    <p>O uso primordial é na tela de Loading. Você cria promessas para cada sprite e só libera o botão de "Start" quando todos os arquivos declararem sucesso.</p>
    <div class="code-block"><pre><code>const carregar = (file) => new Promise((res, rej) => {
    // Lógica de download aqui
    res("Sucesso!");
});</code></pre></div>`;

window.conteudosJS["Async / Await"] = `
    <p>Faz o código assíncrono parecer linear e fácil de ler. A palavra <code>await</code> pausa a execução de uma linha específica até que o recurso chegue, mas sem congelar as animações da página.</p>
    <p>É usado para coreografar cutscenes ou inicializações que precisam seguir uma ordem rígida: "espere logar, espere gerar a fase, toque o som de abertura".</p>
    <div class="code-block"><pre><code>async function iniciar() {
    await carregarConta();
    await gerarMapa();
    console.log("Jogo pronto!");
}</code></pre></div>`;

window.conteudosJS["Recursividade"] = `
    <p>Ocorre quando uma função chama a si mesma. É a ferramenta divina para Geração Procedural de fases e algoritmos de Pathfinding (como o inimigo achando o caminho no labirinto).</p>
    <p>Toda função recursiva precisa de um "Base Case" (condição de parada) para não causar um Stack Overflow e travar o computador do jogador.</p>
    <div class="code-block"><pre><code>function busca(sala) {
    if (sala === "Saida") return true;
    return busca(proximaSala);
}</code></pre></div>`;

window.conteudosJS["Manipulação Avançada de Objetos"] = `
    <p>Envolve o uso de Protótipos (o DNA oculto do JS) e métodos como <code>Object.assign</code> para fundir atributos de itens em sistemas de "Crafting".</p>
    <p>O <code>Object.keys</code> permite criar menus de remapeamento de teclas dinâmicos, listando todas as configurações de controle disponíveis automaticamente.</p>
    <div class="code-block"><pre><code>const itemFinal = Object.assign({}, base, buff);</code></pre></div>`;

window.conteudosJS["APIs e Fetch"] = `
    <p>O <code>fetch</code> permite que seu jogo converse com servidores na nuvem. Ele converte o jogo local em uma experiência conectada com rankings mundiais e missões globais.</p>
    <p>Ao vencer, o jogo envia um "POST" com seus pontos para o servidor e faz um "GET" para mostrar os Top 10 recordistas mundiais na tela.</p>
    <div class="code-block"><pre><code>fetch("https://api.game.com/rank").then(res => res.json());</code></pre></div>`;

window.conteudosJS["Bitwise Operators (Operadores de Bit)"] = `
    <p>Operam diretamente nos zeros e uns (bits) do hardware. Usados para Collision Masks e estados de status (Buffs/Debuffs) de altíssima performance.</p>
    <p>Permite condensar 32 estados diferentes (envenenado, lento, cego, etc.) em um único número inteiro, economizando processamento bruto no Game Loop.</p>
    <div class="code-block"><pre><code>if (estado & FLAG_CONGELADO) { pararMovimento(); }</code></pre></div>`;

window.conteudosJS["Regular Expressions (Regex)"] = `
    <p>Sublinguagem para caçar padrões em textos. Essencial para blindar o chat contra hackers ou interpretar comandos no console de desenvolvedor (Cheats).</p>
    <p>Sanitiza o input do jogador, removendo tags perigosas e garantindo que os comandos de trapaça sejam processados corretamente.</p>
    <div class="code-block"><pre><code>const regex = /^\/invocar\s+([a-z]+)/i;</code></pre></div>`;

window.conteudosJS["Memory Management (Garbage Collector)"] = `
    <p>O Garbage Collector limpa objetos da RAM que não são mais usados. O perigo são os "Memory Leaks": objetos que morrem na tela mas continuam presos na memória por conexões mal limpas.</p>
    <p>Anular referências explicitamente (<code>null</code>) ao mudar de fase garante que o jogo rode por horas em celulares sem travar por falta de memória.</p>
    <div class="code-block"><pre><code>inimigo = null; // Libera para coleta</code></pre></div>`;

window.conteudosJS["Design Patterns (Padrões de Projeto)"] = `
    <p>Soluções universais para problemas de arquitetura. O <b>State Pattern</b> (Padrão de Estado) é o mais vital: gerencia se o herói está parado, correndo ou pulando.</p>
    <p>Ele isola a lógica de cada estado, permitindo que você adicione novas mecânicas sem criar um emaranhado de <code>if/else</code> que quebra a cada atualização.</p>
    <div class="code-block"><pre><code>const estados = { PULANDO: { update: () => {...} } };</code></pre></div>`;
