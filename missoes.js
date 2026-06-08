window.missoesProjetos = [
    {
        titulo: "Missão 1: Calculadora",
        instrucoes: `<b>Arquivo: index.html</b><br>
        1. <b>A Tela da Calculadora:</b> Procure as tags &lt;body&gt; e &lt;/body&gt;. Digite <code>&lt;input id="visor" readonly&gt;</code>.<br>
        2. <b>Os Botões de Número:</b> Logo abaixo do input, crie os botões de 0 a 9 seguindo o padrão: <code>&lt;button onclick="acrescentar('7')"&gt;7&lt;/button&gt;</code>.<br>
        3. <b>Os Botões de Matemática:</b> Crie botões para as operações (+, -, *, /) seguindo o padrão: <code>&lt;button onclick="acrescentar('+')"&gt;+&lt;/button&gt;</code>.<br>
        4. <b>Os Botões de Controle:</b> Crie o botão de limpar com <code>&lt;button onclick="limpar()"&gt;C&lt;/button&gt;</code> e o de resultado com <code>&lt;button onclick="calcular()"&gt;=&lt;/button&gt;</code>.<br><br>
        <b>Arquivo: script.js (O Cérebro)</b><br>
        5. <b>Função acrescentar:</b> Crie <code>function acrescentar(valor) { ... }</code>.<br>
        6. <b>Capturando e Atualizando a Tela:</b> Dentro dela, digite <code>let tela = document.getElementById('visor');</code> e na linha abaixo <code>tela.value = tela.value + valor;</code>.<br>
        7. <b>A Função Limpar:</b> Crie <code>function limpar() { ... }</code>. Dentro dela faça <code>let tela = document.getElementById('visor'); tela.value = "";</code>.<br>
        8. <b>A Função Calcular:</b> Crie <code>function calcular() { ... }</code>. Dentro faça <code>let tela = document.getElementById('visor'); tela.value = eval(tela.value);</code>.`,
        codigoInicial: `\n<input id="visor" readonly>\n`,
        correta: `<input id="visor" readonly><button onclick="acrescentar('7')">7</button><button onclick="acrescentar('+')">+</button><button onclick="limpar()">C</button><button onclick="calcular()">=</button>function acrescentar(valor){let tela = document.getElementById('visor');tela.value = tela.value + valor;}function limpar(){let tela = document.getElementById('visor');tela.value = "";}function calcular(){let tela = document.getElementById('visor');tela.value = eval(tela.value);}`
    },
    {
        titulo: "Missão 2: Jogo da Velha",
        instrucoes: `<b>Arquivo index.html</b><br>
        1. <b>O Tabuleiro:</b> Crie uma estrutura de 9 botões com IDs de 0 a 8: <code>&lt;button id="0" onclick="jogar(0)"&gt;&lt;/button&gt;</code>. Crie uma tag <code>&lt;h1 id="status"&gt;</code> para avisar de quem é a vez.<br><br>
        <b>Arquivo script.js</b><br>
        2. <b>Estado do Jogo:</b> Crie uma lista com 9 textos vazios: <code>let tabuleiro = ["", "", "", "", "", "", "", "", ""];</code> e rastreie o turno: <code>let turno = "X";</code>.<br>
        3. <b>A Função Jogar:</b> Crie a <code>function jogar(id_botao)</code>. Use um <code>if</code> para checar se <code>tabuleiro[id_botao] === ""</code>. Se não estiver vazia, dê um <code>return</code>.<br>
        4. <b>Marcar o Ponto:</b> Mude o valor na lista: <code>tabuleiro[id_botao] = turno;</code>. Altere o HTML do botão usando <code>document.getElementById(id_botao).innerText = turno;</code>.<br>
        5. <b>Verificar Vitória:</b> Crie as combinações possíveis: <code>[[0,1,2], [3,4,5], [6,7,8]...]</code>. Faça um loop e cheque se as três posições no array possuem o mesmo símbolo.<br>
        6. <b>Alternar Turno:</b> Se ninguém venceu, mude a variável turno de "X" para "O" ou vice-versa, e atualize o texto do status.`,
        codigoInicial: `\n`,
        correta: `let tabuleiro=["","","","","","","","",""];let turno="x";function jogar(id_botao){if(tabuleiro[id_botao]!==""){return;}tabuleiro[id_botao]=turno;document.getElementById(id_botao).innerText=turno;}`
    },
    {
        titulo: "Missão 3: Jogo da Memória",
        instrucoes: `<b>Arquivo index.html</b><br>
        1. <b>O Painel:</b> Crie uma tag <code>&lt;div id="grade"&gt;</code> com 8 botões vazios dentro.<br><br>
        <b>Arquivo script.js</b><br>
        2. <b>Ícones e Embaralhar:</b> Crie a lista <code>let cartas = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍒", "🍒"];</code> e embaralhe usando <code>cartas.sort(() => Math.random() - 0.5);</code>.<br>
        3. <b>Distribuir Valores:</b> Faça um loop pelos botões adicionando <code>botao.dataset.valor = cartas[i]</code> e configure <code>onclick="virarCarta(this)"</code>.<br>
        4. <b>Rastreamento:</b> Crie <code>let cartasEscolhidas = [];</code> e <code>let botoesEscolhidos = [];</code>.<br>
        5. <b>Função Virar Carta:</b> No clique, mude <code>botao.innerText = botao.dataset.valor</code>. Salve o valor e o botão nas listas.<br>
        6. <b>Checar o Par:</b> Quando <code>cartasEscolhidas.length === 2</code>, compare se são iguais. Se forem diferentes, use um <code>setTimeout</code> de 1 segundo para ocultar o texto novamente.`,
        codigoInicial: `\n`,
        correta: `let cartas=["🍎","🍎","🍌","🍌","🍇","🍇","🍒","🍒"];cartas.sort(()=>math.random()-0.5);let cartasEscolhidas=[];let botoesEscolhidos=[];`
    },
    {
        titulo: "Missão 4: Pong",
        instrucoes: `<b>Arquivo index.html</b><br>
        1. <b>O Campo:</b> Crie uma tag <code>&lt;canvas id="campo" width="800" height="400"&gt;&lt;/canvas&gt;</code>.<br><br>
        <b>Arquivo script.js</b><br>
        2. <b>Pincel e Placar:</b> Pegue o canvas e crie o contexto 2D (ctx). Inicie <code>let pontosP1 = 0; let pontosP2 = 0;</code>.<br>
        3. <b>Posição das Raquetes:</b> Defina <code>let jogador1Y = 150; let jogador2Y = 150;</code>.<br>
        4. <b>A Bola:</b> Defina <code>bolaX = 400, bolaY = 200, velocidadeX = 4, velocidadeY = 4</code>.<br>
        5. <b>Movimentação:</b> Adicione um ouvinte <code>keydown</code>. A tecla 'w' e 's' movem o jogador 1, e as setas direcionais movem o jogador 2.<br>
        6. <b>Loop de Física:</b> Use <code>setInterval(atualizarJogo, 1000/60);</code>. Limpe a tela e some as velocidades à bola.<br>
        7. <b>Rebatidas:</b> Inverta a <code>velocidadeY</code> ao bater no teto/chão. Inverta a <code>velocidadeX</code> ao interceptar as raquetes.<br>
        8. <b>Desenhar:</b> Use <code>ctx.fillRect</code> para desenhar as raquetes, a bola e os pontos.`,
        codigoInicial: `\n`,
        correta: `let pontosP1=0;let pontosP2=0;let jogador1Y=150;let jogador2Y=150;let bolaX=400;let bolaY=200;let velocidadeX=4;let velocidadeY=4;`
    },
    {
        titulo: "Missão 5: Jogo da Cobra",
        instrucoes: `<b>Arquivo: index.html (O Palco)</b><br>
        1. <b>Criando o Quadro:</b> Dentro da tag &lt;body&gt;, digite <code>&lt;canvas id="jogo" width="400" height="400"&gt;&lt;/canvas&gt;</code>.<br><br>
        <b>Arquivo: script.js (As Regras e Desenhos)</b><br>
        2. <b>Pegando os Pincéis:</b> Crie as variáveis para o canvas e para o pincel: <code>let ctx = canvas.getContext('2d');</code>.<br>
        3. <b>Criando a Cobra:</b> Defina a lista inicial da cobra: <code>let cobra = [ {x: 10, y: 10} ];</code>.<br>
        4. <b>Velocidade da Cobra:</b> Crie a direção inicial: <code>let dx = 1; let dy = 0;</code>.<br>
        5. <b>Escutando o Teclado:</b> Digite <code>document.addEventListener('keydown', mudarDirecao);</code>.<br>
        6. <b>Função de Direção:</b> Mude dx e dy conforme a tecla clicada (ArrowUp, ArrowDown, ArrowLeft, ArrowRight).<br>
        7. <b>O Motor do Jogo:</b> Use <code>setInterval(atualizarJogo, 100);</code> para atualizar o loop.<br>
        8. <b>Função Atualizar:</b> Limpe o canvas com <code>ctx.clearRect(0, 0, 400, 400);</code>.<br>
        9. <b>Movendo e Desenhando:</b> Crie a nova cabeça adicionando dx e dy, insira-a no início do array com <code>unshift</code> e remova a cauda com <code>pop</code>. Desenhe com <code>ctx.fillRect</code>.`,
        codigoInicial: `\n`,
        correta: `let canvas=document.getElementById('jogo');let ctx=canvas.getContext('2d');let cobra=[{x:10,y:10}];let dx=1;let dy=0;`
    },
    {
        titulo: "Missão 6: Breakout",
        instrucoes: `<b>Arquivo index.html</b><br>
        1. <b>A Parede:</b> Crie uma tag <code>&lt;canvas id="breakout" width="400" height="400"&gt;&lt;/canvas&gt;</code>.<br><br>
        <b>Arquivo script.js</b><br>
        2. <b>Raquete e Bola:</b> Defina <code>raqueteX = 150, largura = 80, altura = 10, e bolaX = 200, bolaY = 200, dx = 2, dy = -2</code>.<br>
        3. <b>Os Tijolos:</b> Crie uma lista contendo objetos para os tijolos com propriedades <code>x, y, ativo: true</code>.<br>
        4. <b>Controle da Barra:</b> Controle a posição do <code>raqueteX</code> usando as setas esquerda (-15) e direita (+15).<br>
        5. <b>Física:</b> Atualize a bola a 60fps. Inverta os sentidos de <code>dx</code> e <code>dy</code> ao colidir nas bordas ou na raquete.<br>
        6. <b>Quebrar Tijolos:</b> Cheque se a posição da bola intercepta um tijolo ativo. Se sim, mude <code>ativo = false</code> e inverta <code>dy</code>.<br>
        7. <b>Pintura:</b> Limpe a tela e desenhe tudo usando <code>ctx.fillRect</code> apenas para os elementos ativos.`,
        codigoInicial: `\n`,
        correta: `let raqueteX=150;let largura=80;let altura=10;let bolaX=200;let bolaY=200;let dx=2;let dy=-2;`
    },
    {
        titulo: "Missão 7: Flappy Bird",
        instrucoes: `<b>Arquivo index.html</b><br>
        1. <b>O Céu:</b> Crie o elemento <code>&lt;canvas id="flappy" width="400" height="500"&gt;&lt;/canvas&gt;</code>.<br><br>
        <b>Arquivo script.js</b><br>
        2. <b>O Pássaro:</b> Crie as variáveis <code>passaroY = 250, gravidade = 0.6, velocidade = 0</code>.<br>
        3. <b>Os Canos:</b> Crie a lista <code>let canos = [];</code> onde cada cano possui <code>x: 400, topo: 150, fundo: 300</code>.<br>
        4. <b>O Pulo:</b> No clique ou barra de espaço, mude instantaneamente a <code>velocidade = -9</code>.<br>
        5. <b>Loop de Movimento:</b> Aplique a aceleração da gravidade e reduza o X dos canos gradativamente para movê-los à esquerda.<br>
        6. <b>Gerar Canos:</b> A cada 100 iterações do loop principal, dê um <code>canos.push({...})</code> com alturas randômicas.<br>
        7. <b>Colisões:</b> Interrompa o loop se o <code>passaroY</code> tocar o chão ou entrar no perímetro de qualquer cano ativo.<br>
        8. <b>Renderizar:</b> Pinte o pássaro e os canos em tela.`,
        codigoInicial: `\n`,
        correta: `let passaroY=250;let gravidade=0.6;let velocidade=0;let canos=[];`
    },
    {
        titulo: "Missão 8: Space Invaders Simplificado",
        instrucoes: `<b>Arquivo index.html</b><br>
        1. <b>O Espaço:</b> Adicione o elemento <code>&lt;canvas id="espaco" width="400" height="400"&gt;&lt;/canvas&gt;</code>.<br><br>
        <b>Arquivo script.js</b><br>
        2. <b>Defensores e Invasores:</b> Configure <code>naveX = 180, inimigoX = 0, inimigoY = 20, direcaoInimigo = 1</code>.<br>
        3. <b>O Laser:</b> Crie o estado do projétil: <code>tiroX = 0, tiroY = 0, tiroAtivo = false</code>.<br>
        4. <b>Gatilho:</b> Ao pressionar Espaço, caso <code>tiroAtivo === false</code>, mude-o para true e alinhe o <code>tiroX</code> ao centro da nave.<br>
        5. <b>Movimento do Inimigo:</b> Incremente o <code>inimigoX</code>. Ao bater nas bordas laterais, inverta o sentido e aumente o <code>inimigoY</code> em 10.<br>
        6. <b>Movimento do Laser:</b> Se ativo, reduza <code>tiroY -= 5</code>. Se ultrapassar o teto, retorne <code>tiroAtivo = false</code>.<br>
        7. <b>Impacto:</b> Se o laser colidir com a caixa do inimigo, exiba um alerta de vitória.<br>
        8. <b>Ilustrar:</b> Desenhe os retângulos de todos os objetos atualizados em tempo de execução.`,
        codigoInicial: `\n`,
        correta: `let naveX=180;let inimigoX=0;let inimigoY=20;let direcaoInimigo=1;let tiroX=0;let tiroY=0;let tiroAtivo=false;`
    },
    {
        titulo: "Missão 9: Jogo da Vida",
        instrucoes: `<b>Arquivo: index.html</b><br>
        1. <b>O Quadro da Ciência:</b> Crie o elemento <code>&lt;canvas id="tabuleiro" width="400" height="400"&gt;&lt;/canvas&gt;</code>.<br><br>
        <b>Arquivo: script.js</b><br>
        2. <b>Preparação:</b> Obtenha o canvas, o contexto 2D e instancie uma lista global: <code>let grade = [];</code>.<br>
        3. <b>Gerar Mundo Inicial:</b> Crie a <code>function gerarMundo()</code>. Monte loops aninhados para criar uma matriz 40x40.<br>
        4. <b>Células Aleatórias:</b> Use <code>Math.random() > 0.5</code> para preencher a matriz com 1 (viva) ou 0 (morta).<br>
        5. <b>Contando Vizinhos:</b> Crie a <code>function contarVizinhos(x, y)</code>. Retorne a soma dos 8 blocos adjacentes.<br>
        6. <b>Atualizar:</b> Crie a <code>function atualizar()</code>, limpe a tela e itere por toda a matriz principal.<br>
        7. <b>Regras da Vida:</b> Aplique as condições de sobrevivência e reprodução da regra clássica salvando os dados em uma grade temporária.<br>
        8. <b>Desenho das Vivas:</b> Se a célula for igual a 1, pinte-a usando <code>ctx.fillRect(x * 10, y * 10, 9, 9);</code>.<br>
        9. <b>Iniciar:</b> Chame <code>gerarMundo()</code> e ligue o cronômetro com <code>setInterval(atualizar, 300);</code>.`,
        codigoInicial: `\n`,
        correta: `let canvas=document.getElementById('tabuleiro');let ctx=canvas.getContext('2d');let grade=[];function gerarMundo(){}`
    },
    {
        titulo: "Missão 10: Tetris",
        instrucoes: `<b>Arquivo index.html</b><br>
        1. <b>O Tubo:</b> Crie a tag <code>&lt;canvas id="tetris" width="240" height="400"&gt;&lt;/canvas&gt;</code>.<br><br>
        <b>Arquivo script.js</b><br>
        2. <b>Tabuleiro Interno:</b> Construa uma matriz bidimensional de 16 linhas por 10 colunas populada inteiramente por zeros (0).<br>
        3. <b>Peça Atual:</b> Instancie um objeto para a peça ativa com propriedades <code>x: 4, y: 0</code> e uma matriz de formato 2x2: <code>[[1,1],[1,1]]</code>.<br>
        4. <b>A Gravidade:</b> Incremente o valor Y da peça ativa de segundo em segundo usando um loop de tempo regular.<br>
        5. <b>Controle Lateral:</b> Use listeners no teclado para mudar a coordenada X ao pressionar as setas laterais.<br>
        6. <b>Colisão com o Chão:</b> Se a peça tocar o fundo ou outra peça consolidada, mapeie seus dados na matriz e resete uma nova peça no topo.<br>
        7. <b>Pintar Jogo:</b> Varra o tabuleiro. Onde encontrar 1, desenhe blocos sólidos escalados usando <code>ctx.fillRect(coluna * 24, linha * 24, 22, 22);</code>.`,
        codigoInicial: `\n`,
        correta: `let tabuleiro=Array(16).fill().map(()=>Array(10).fill(0));let peca={x:4,y:0,formato:[[1,1],[1,1]]};`
    }
];
