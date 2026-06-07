window.conteudos = window.conteudos || {};

window.conteudos.css = {
    iniciante: [
        {
            titulo: "1. Seletores Básicos e Combinadores",
            conteudo: `
                <p>Os seletores e combinadores são os sistemas de mira cirúrgica do CSS. O navegador interpreta a árvore do documento (DOM) de forma hierárquica, e os seletores determinam com precisão matemática quais as caixas que vão receber as diretivas de estilo. Os seletores básicos miram diretamente em Tags globais (como div ou button), em .classes reutilizáveis (perfeitas para múltiplos botões de inventário) ou em #ids únicos e absolutos (reservados para elementos soberanos como a barra de vida principal do herói). No entanto, a verdadeira engenharia surge com os combinadores: o combinador descendente (um espaço simples) e o combinador de filhos diretos (>). Eles permitem-lhe ditar regras estruturais profundas, garantindo que o texto dentro de uma janela de diálogo seja afetado, mas que o mesmo texto fora desse contêiner permaneça intocado.</p>
                <p>Na arquitetura de um jogo, o uso correto de seletores e combinadores evita que polua o seu código HTML com milhares de classes repetidas e redundantes. Imagine que tem uma secção dedicada à loja de itens (<code>&lt;section class="loja-itens"&gt;</code>) e lá dentro possui dezenas de cartões de armas, cada um com um título <code>&lt;h3&gt;</code>. Em vez de dar uma classe específica para cada título de cada arma, utiliza o combinador descendente <code>.loja-itens h3</code>. Isso centraliza todo o controlo estético num único bloco de código.</p>
                <p>A relevância teórica deste conceito reside no peso de processamento que o motor do navegador enfrenta. O CSS é lido da direita para a esquerda; por isso, seletores excessivamente genéricos ou mal encadeados obrigam o interpretador a fazer varreduras exaustivas na memória para descobrir quem deve ser pintado.</p>
<pre><code>/* Seletor de Tag Global: Define a fonte base para todas as caixas de texto */
p {
  color: #cccccc;
}

/* Seletor de ID Único: Alvo absoluto e prioritário da interface */
#painel-game-over {
  background-color: #0c0c0c;
}

/* Seletor de Classe Reutilizável: Aplicável a qualquer botão do menu */
.botao-menu {
  color: #ffffff;
}

/* Combinador de Filho Direto (>): Mira APENAS nos ícones que estão IMEDIATAMENTE */
/* dentro da barra de ação rápida (Hotbar), ignorando ícones dentro de submenus. */
.hotbar-acoes > .icone-item {
  width: 48px;
  height: 48px;
}

/* Combinador Descendente (Espaço): Mira em qualquer parágrafo dentro de uma janela */
/* de chat, não importa o quão profundo ele esteja aninhado no HTML. */
.janela-chat p {
  font-family: monospace;
}</code></pre>`
        },
        {
            titulo: "2. O Box Model (Modelo de Caixa)",
            conteudo: `
                <p>O Box Model é o pilar gravitacional absoluto de toda a renderização na web. Absolutamente tudo o que vê num ecrã de computador ou telemóvel é processado como uma caixa retangular composta por quatro camadas concêntricas e interdependentes: o conteúdo real (content), o preenchimento interno (padding), a borda física (border) e a margem externa de afastamento (margin). Por padrão histórico, o CSS calcula o tamanho de um elemento somando a largura estipulada mais o padding e a border, o que causava um caos geométrico onde uma caixa de 100px expandia para 140px se lhe adicionasse preenchimento.</p>
                <p>A salvação moderna para este pesadelo arquitetónico é a propriedade <code>box-sizing: border-box</code>. No desenvolvimento de jogos web, ela é obrigatória e inegociável. Quando desenha os slots do inventário do seu herói e estipula que cada quadrado deve ter exatamente 64px de largura, a propriedade border-box garante que, se adicionar um padding de 8px e uma borda dourada de 2px, o elemento continuará a ter exatamente 64px de largura total. O navegador esmaga o espaço interno de forma inteligente.</p>
                <p>Compreender o Box Model impede que a sua interface sofra de quebras estruturais catastróficas em tempo de execução. O domínio do Modelo de Caixa confere estabilidade tectónica ao layout do jogo, garantindo que cada caixa ocupe exatamente o espaço físico planeado na sua RAM visual.</p>
<pre><code>/* O Reset Universal: Aplicado a todas as entidades do jogo para banir */
/* o cálculo caótico do tamanho padrão do navegador antigo. */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Construção de um Slot de Item usando o Box Model estrito */
.slot-inventario {
  width: 70px;
  height: 70px;
  
  /* Padding: Afasta o ícone do item interno para não tocar na borda */
  padding: 6px;
  
  /* Border: A moldura visível do slot */
  border: 3px solid #4a3f35;
  
  /* Margin: Garante que o slot vizinho fique a 10px de distância dele */
  margin: 10px;
  
  background-color: #1e1a15;
}</code></pre>`
        },
        {
            titulo: "3. Cores e Backgrounds",
            conteudo: `
                <p>Trabalhar com cores e backgrounds no CSS é o ato de pintar a atmosfera e a identidade cromática do seu universo digital. O CSS permite expressar matizes através de vários sistemas: Hexadecimal (#ff0000), RGB e o seu irmão vital, o RGBA, que introduz o canal Alpha para opacidade e transparência (variando de 0 a 1). Para além das cores sólidas, o motor gráfico aceita imagens de fundo pesadas através da diretiva <code>url()</code>. É aqui que entra em cena a propriedade monumental <code>background-size: cover</code>, que instrui o navegador a redimensionar a imagem de fundo de forma inteligente para que ela preencha cem por cento da área disponível sem distorcer o aspeto original.</p>
                <p>A aplicação prática deste conceito em jogos web dita a imersão total do ecrã de carregamento ou das arenas de combate. Ao erguer um jogo de estratégia, usará uma imagem massiva no background, fixada com cover. Para as caixas de texto flutuantes e painéis, usará fundos em <code>rgba(0, 0, 0, 0.75)</code>. Esta transparência calculada cria um efeito de sobreposição profissional espetacular, permitindo que as estrelas do fundo continuem visíveis por trás das janelas de texto.</p>
                <p>Dominar backgrounds e transparências liberta o programador de depender excessivamente de softwares de edição gráfica externa para criar cartazes estáticos. Compreender como o navegador posiciona a imagem garante que o ponto principal da sua arte conceitual estará sempre centralizado e perfeitamente renderizado.</p>
<pre><code>/* Cenário de Fundo da Tela Inicial do Jogo */
.tela-menu-principal {
  width: 100vw;
  height: 100vh;
  
  /* Carrega a arte conceitual, centraliza-a e força o preenchimento total */
  background-image: url('assets/texturas/fundo_castelo.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Painel de Diálogo translúcido com RGBA */
.caixa-dialogo-npc {
  /* Cor preta sólida com 80% de opacidade (20% transparente) */
  background-color: rgba(12, 14, 20, 0.8);
  
  /* Borda sutil vermelha para indicar perigo ou alerta */
  border: 1px solid rgba(233, 69, 96, 0.4);
  padding: 20px;
}</code></pre>`
        },
        {
            titulo: "4. Tipografia Web",
            conteudo: `
                <p>A Tipografia Web é a voz do seu jogo manifestada através de vetores de texto. Estilizar texto no CSS transcende a mera escolha de fontes; envolve o ajuste micrométrico do peso visual (<code>font-weight</code>), o tamanho proporcional (<code>font-size</code>) e a distância vertical exata entre as linhas (<code>line-height</code>). Podemos quebrar as limitações de fontes padrão utilizando o Google Fonts através da diretiva <code>@import</code>, descarregando fontes temáticas medievais, futuristas ou pixel-art diretamente para a memória volátil do jogador.</p>
                <p>Num RPG de fantasia, a tipografia é uma ferramenta narrativa crucial. Usará uma fonte gótica imponente para os títulos das missões. Já para o registo de combate flutuante (onde dezenas de linhas de dano surgem por segundo), optará por uma fonte monospace, ajustando o line-height para garantir que os números críticos de dano não fiquem encavalitados e sejam legíveis num piscar de olhos.</p>
                <p>Ignorar as minúcias tipográficas destrói a estética e o acabamento profissional do seu jogo. Se o line-height for muito curto, os textos explicativos das habilidades vão colapsar uns sobre os outros. A tipografia correta cria a atmosfera psicológica ideal.</p>
<pre><code>/* Importação direta de uma fonte pixel-art e medieval do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Press+Start+2P&display=swap');

/* Título Principal do Jogo com a fonte Medieval */
.titulo-jogo {
  font-family: 'Cinzel', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffcc00;
  text-align: center;
}

/* Texto de Dano Flutuante Crítico (Pixel Art) */
.dano-critico {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  /* Line-height de 1 garante que a caixa ocupe apenas a altura exata da letra */
  line-height: 1;
  color: #ff3333;
}</code></pre>`
        },
        {
            titulo: "5. Unidades de Medida",
            conteudo: `
                <p>Compreender as Unidades de Medida no CSS é o divisor de águas entre interfaces rígidas e estáticas do passado e as interfaces modernas e maleáveis. O CSS divide as suas unidades em Absolutas (como Pixels <code>px</code>) e Relativas (Percentagens <code>%</code>, <code>vw</code> e <code>vh</code> para dimensões da janela, e <code>rem</code> para unidades tipográficas baseadas na raiz). A unidade <code>rem</code> é calculada com base no tamanho da fonte do elemento raiz, tornando-se a unidade de ouro para criar interfaces perfeitamente escaláveis.</p>
                <p>A aplicação industrial destas métricas na estruturação de um jogo dita a sua flexibilidade global. Para o tamanho de ícones de habilidades, os Pixels continuam a ser ideais. No entanto, para a barra de vida do inimigo montada no topo do ecrã, utilizará <code>width: 50vw</code> para garantir que ela ocupe exatamente a mesma proporção visual, quer o utilizador jogue num enorme monitor ou num telemóvel.</p>
                <p>Dominar o equilíbrio entre unidades absolutas e relativas confere elasticidade matemática ao código, permitindo que os seus painéis de jogo respirem e mantenham a proporção ideal em qualquer hardware de exibição.</p>
<pre><code>/* Configuração do Elemento Raiz para estabelecer a escala base global */
html {
  font-size: 16px; /* 1rem agora equivale matematicamente a 16px */
}

/* Painel de HUD Lateral que se adapta ao tamanho do ecrã */
.hud-lateral {
  /* Ocupa exatamente 25% de toda a largura do ecrã do navegador */
  width: 25vw;
  /* Ocupa exatamente 100% de toda a altura disponível do ecrã */
  height: 100vh;
  
  /* Espaçamentos e tamanhos baseados na escala tipográfica estável */
  padding: 1.5rem; /* 1.5 * 16px = 24px de preenchimento */
  background-color: #111118;
}

/* Ícone de Item com tamanho absoluto para não distorcer a arte */
.icone-item-fixo {
  width: 32px;
  height: 32px;
}</code></pre>`
        },
        {
            titulo: "6. Display Básico",
            conteudo: `
                <p>A propriedade display controla o comportamento ontológico das caixas no CSS, determinando as regras físicas de como elas se posicionam no fluxo natural. O nível básico divide as caixas em: <code>block</code>, <code>inline</code> e <code>inline-block</code>. Elementos block ocupam cem por cento da largura da linha, empurrando qualquer elemento seguinte para a linha de baixo. Elementos inline fluem lado a lado como palavras e recusam larguras. O híbrido <code>inline-block</code> permite que o elemento flua na mesma linha, mas retém o superpoder de aceitar configurações precisas de width, height e margins.</p>
                <p>Na engenharia do HUD, se deseja criar uma lista de modificadores de estado (ícones de buffs) um ao lado do outro acima da cabeça do personagem, mudará o display dessas caixas para inline-block. Se mantiver o display padrão como block, cada pequeno ícone criará uma quebra de linha massiva, destruindo o layout.</p>
                <p>O entendimento límpido do fluxo padrão impede que trave lutas desnecessárias contra o navegador utilizando margens negativas bizarras para forçar elementos a ficarem alinhados.</p>
<pre><code>/* Força a janela de Alerta a comportar-se como Bloco, isolando-se numa linha própria */
.alerta-sistema {
  display: block;
  width: 100%;
  background-color: #7f1d1d;
  padding: 10px;
}

/* Lista de Ícones de Buffs alinhados horizontalmente com inline-block */
.icone-buff {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  background-color: #16a34a;
}

/* Texto destacado inline que flui naturalmente dentro de uma frase */
.destaque-ouro {
  display: inline;
  color: #fbbf24;
  font-weight: bold;
}</code></pre>`
        },
        {
            titulo: "7. Bordas e Arredondamentos",
            conteudo: `
                <p>A propriedade <code>border</code> e o seu modificador <code>border-radius</code> são os responsáveis por ditar as texturas perimetrais e a suavidade orgânica das formas no CSS. A borda permite cercar qualquer elemento com linhas de espessuras e estilos variados. O border-radius revolucionou o web design, permitindo transformar uma caixa reta em cantos suavizados modernos ou em círculos perfeitos aplicando <code>border-radius: 50%</code> sobre uma caixa com largura e altura idênticas.</p>
                <p>No design de jogos, o retrato do herói no canto esquerdo da tela ganha um ar premium se for configurado como um círculo e emoldurado por uma borda dupla dourada. Da mesma forma, os botões das habilidades ganham um toque orgânico com cantos arredondados, quebrando a dureza geométrica.</p>
                <p>Utilizar curvas calculadas nativamente no CSS garante que os botões se adaptem instantaneamente a qualquer tamanho de texto ou tradução, mantendo as curvas limpas, nítidas e livres de pixelização em qualquer ecrã.</p>
<pre><code>/* Avatar Circular do Jogador */
.avatar-perfil-heroi {
  width: 80px;
  height: 80px;
  
  /* Força a caixa quadrada a transformar-se num círculo perfeito */
  border-radius: 50%;
  
  /* Borda dupla estilizada simulando uma moldura de metal antiga */
  border: 4px double #d4af37;
  background-image: url('assets/sprites/heroi_rosto.png');
  background-size: cover;
}

/* Botão de Menu com cantos suavizados modernos */
.botao-confirmar {
  padding: 12px 24px;
  border: 2px solid #22c55e;
  /* Cantos ligeiramente arredondados e orgânicos */
  border-radius: 6px;
  background-color: #052e16;
  color: #ffffff;
}</code></pre>`
        },
        {
            titulo: "8. Sombras Simples",
            conteudo: `
                <p>As propriedades de sombreamento <code>box-shadow</code> e <code>text-shadow</code> representam o primeiro passo na direção da profundidade e do tridimensionalismo virtual. Elas funcionam através de eixos cartesianos (deslocamento horizontal X e vertical Y), desfoque (blur) e cor. Ao projetar uma sombra, cria-se o efeito óptico de que aquele elemento está "flutuando" acima das camadas de fundo.</p>
                <p>No desenvolvimento de interfaces de jogos, garantir a legibilidade absoluta dos dados em ambientes em constante movimento é vital. Se o seu personagem caminhar sobre um cenário de neve, o texto branco das moedas desaparecerá. Ao aplicar um <code>text-shadow: 2px 2px 0px #000</code>, garante que os números estejam sempre perfeitamente visíveis.</p>
                <p>A importância teórica do sombreamento reside na hierarquia visual. Elementos com sombras pesadas e desfoques largos transmitem a sensação de janelas modais flutuantes e prioritárias, separando o plano de fundo dinâmico do plano estático da interface.</p>
<pre><code>/* Título de Jogo com contorno de alta legibilidade estilo Retrô */
.texto-hud-pontuacao {
  color: #ffffff;
  font-family: sans-serif;
  font-weight: bold;
  
  /* X: 2px, Y: 2px, Blur: 0px (Sombra dura de pixel-art), Cor: Preta */
  text-shadow: 2px 2px 0px #000000;
}

/* Janela de Inventário Flutuante com Sombra Suave */
.janela-mochila-modal {
  width: 300px;
  background-color: #1e293b;
  border: 1px solid #475569;
  
  /* X: 0px, Y: 10px (projetada para baixo), Blur: 25px (bem esfumada) */
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.6);
}</code></pre>`
        },
        {
            titulo: "9. Estados Básicos (Pseudo-classes)",
            conteudo: `
                <p>As pseudo-classes de estado permitem que a folha de estilos interaja diretamente com as ações e comportamentos em tempo real do utilizador, sem precisar de JavaScript. Os três reis da interatividade são o <code>:hover</code> (quando o ponteiro do rato paira sobre o elemento), o <code>:active</code> (no milissegundo em que há o clique) e o <code>:focus</code> (quando o elemento é selecionado via teclado).</p>
                <p>A aplicação destas ferramentas em menus de jogos é vital para criar feedback tátil visual. Quando o jogador passa o rato sobre o botão, a pseudo-classe :hover altera a cor de fundo, sinalizando que aquele elemento é clicável. No momento do clique, o :active empurra ligeiramente o elemento, simulando a compressão de um botão mecânico real.</p>
                <p>Dominar os estados básicos dota a interface de vida própria, criando transições intuitivas que guiam o utilizador através dos menus de opções de forma orgânica e altamente satisfatória.</p>
<pre><code>/* Estado Base do Botão de Compra da Loja */
.botao-comprar-item {
  background-color: #2563eb;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

/* Estado 1 - Hover: Rato posicionado em cima. Ilumina o botão. */
.botao-comprar-item:hover {
  background-color: #3b82f6;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

/* Estado 2 - Active: Momento do clique. Escurece e simula compressão. */
.botao-comprar-item:active {
  background-color: #1d4ed8;
}

/* Estado 3 - Focus: Navegabilidade por teclado para acessibilidade. */
.botao-comprar-item:focus {
  outline: 3px dashed #f59e0b; /* Cria uma linha de realce dourada ao redor */
}</code></pre>`
        },
        {
            titulo: "10. Variáveis CSS Nativas (Básico)",
            conteudo: `
                <p>As Variáveis CSS Nativas (Custom Properties) trouxeram a modularidade da lógica de programação para as folhas de estilo. Declaradas tradicionalmente dentro da pseudo-classe soberana <code>:root</code>, elas são definidas prefixando dois traços no nome (<code>--cor-primaria</code>) e consumidas através da função nativa <code>var(--nome-variavel)</code>. Isto permite criar um ponto centralizado de verdade para valores repetitivos de cores, fontes e tamanhos.</p>
                <p>Na engenharia de produção de jogos, as variáveis nativas são o alicerce para sistemas de Temas e Paletas de Cores. Se a equipa decidir que a cor dos itens Épicos está muito escura, altera o valor da variável uma única vez no bloco :root, e todo o jogo atualiza-se instantaneamente na velocidade da luz.</p>
                <p>A importância das variáveis nativas reside na eliminação total do código duplicado e na escalabilidade a longo prazo, preparando o terreno ideal para integrações em tempo real com o motor JavaScript que veremos nos níveis avançados.</p>
<pre><code>/* Declaração Centralizada de Variáveis Globais no Topo do Ficheiro */
:root {
  --cor-vida-cheia: #22c55e;
  --cor-mana-cheia: #06b6d4;
  --cor-fundo-paineis: #0f172a;
  --fonte-principal: 'Courier New', monospace;
  --borda-padrao-hud: 2px solid #334155;
}

/* Consumindo as variáveis em diferentes classes independentes */
.painel-status-jogador {
  background-color: var(--cor-fundo-paineis);
  border: var(--borda-padrao-hud);
  font-family: var(--fonte-principal);
}

.indicador-vida-barra {
  background-color: var(--cor-vida-cheia);
}

.indicador-mana-barra {
  background-color: var(--cor-mana-cheia);
}</code></pre>`
        }
    ],
    intermediario: [
        {
            titulo: "11. Posicionamento (Position) e z-index",
            conteudo: `
                <p>A propriedade <code>position</code> dita as regras de física espacial de uma caixa. O estado <code>relative</code> mantém o elemento no seu fluxo, mas permite que sirva de âncora. O <code>absolute</code> retira o elemento do fluxo, fazendo-o flutuar baseado em coordenadas. O <code>fixed</code> gruda a caixa estaticamente na janela do navegador, ignorando a rolagem. Aliado a isto, o <code>z-index</code> atua como o eixo Z tridimensional da tela, definindo a sobreposição visual.</p>
                <p>O contêiner pai da interface do utilizador (HUD) receberá position fixed e um z-index altíssimo. Isto garante que todo o painel flutue soberanamente por cima do Canvas do jogo. Dentro deste contêiner, o slot do minimapa receberá position absolute para cravar o radar no canto do ecrã.</p>
                <p>Compreender a trindade do Posicionamento e o empilhamento evita o colapso de elementos invisíveis ou de inputs bloqueados, garantindo que menus pop-up fiquem no topo da pirâmide visual.</p>
<pre><code>/* O Contêiner Mestre do HUD: Fixo por cima do Canvas do Jogo */
.hud-jogo-completo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* Z-Index Altíssimo garante que nada do jogo tape os dados da interface */
  z-index: 9000;
  /* Impede que o HUD intersete os cliques do rato direcionados ao mundo do jogo */
  pointer-events: none; 
}

/* Slot de Radar/Minimapa ancorado de forma absoluta no canto */
.minimapa-radar-hud {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 150px;
  height: 150px;
  background-color: #000000;
  border: 2px solid #555555;
  pointer-events: auto; 
}</code></pre>`
        },
        {
            titulo: "12. Fundamentos do Flexbox",
            conteudo: `
                <p>O Flexbox (Flexible Box Layout) é o rei indiscutível do alinhamento unidimensional. Ao declarar <code>display: flex</code>, o contêiner transforma-se num motor de distribuição espacial inteligente para as caixas filhas. Opera através do Eixo Principal e do Eixo Cruzado, controlados pela diretiva <code>flex-direction</code>. A propriedade <code>justify-content</code> alinha os elementos ao longo do eixo principal, enquanto a <code>align-items</code> faz o mesmo no eixo perpendicular.</p>
                <p>No design de jogos, o Flexbox resolve instantaneamente o desafio de centralizar perfeitamente caixas de texto e barras. Na tela de "Game Over", usará um contêiner configurado com coluna, justify-content: center e align-items: center. O título e os botões organizam-se numa linha vertical impecável, perfeitamente centralizada no meio do monitor.</p>
                <p>O Flexbox recalcula automaticamente os espaços e dimensões internas sempre que a janela sofre uma alteração de tamanho ou quando elementos são removidos da árvore do HTML em tempo real.</p>
<pre><code>/* Painel de Exibição de Game Over Centralizado com Flexbox */
.tela-game-over-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  
  /* Ativação do Motor Flexbox */
  display: flex;
  /* Alinha os filhos de cima para baixo como uma coluna vertical */
  flex-direction: column;
  /* Centraliza verticalmente no eixo principal da coluna */
  justify-content: center;
  /* Centraliza horizontalmente no eixo cruzado */
  align-items: center;
}

.subtitulo-recompensas-lista {
  margin-top: 20px;
  color: #ff3333;
}</code></pre>`
        },
        {
            titulo: "13. Flexbox Avançado",
            conteudo: `
                <p>Dominar as propriedades de comportamento interno é o próximo nível: <code>flex-grow</code> (taxa de crescimento), <code>flex-shrink</code> (capacidade de encolher) e <code>flex-wrap</code> (quebra de linha elástica). Somado a isto, a propriedade <code>order</code> confere o superpoder de alterar a ordem visual de exibição dos elementos na tela sem alterar uma única linha do HTML original.</p>
                <p>Na construção de um Inventário dinâmico, o Flexbox Avançado atua como o algoritmo organizacional perfeito. Ao configurar o contêiner com flex-wrap: wrap, os slots alinham-se horizontalmente. Quando a linha atinge a borda máxima, os novos slots quebram a linha sozinhos de forma automatizada e limpa.</p>
                <p>Isto confere ao programador um controlo dinâmico total sobre interfaces orientadas a dados, permitindo que os painéis redistribuam os seus sub-elementos com graciosidade orgânica em qualquer cenário de gameplay.</p>
<pre><code>/* Grade de Mochila de Itens Dinâmica */
.grade-mochila-conteiner {
  display: flex;
  /* Permite que os itens saltem para a linha de baixo se faltar espaço */
  flex-wrap: wrap;
  gap: 10px; /* Cria um espaçamento exato de 10px entre as caixas */
  width: 100%;
  padding: 15px;
}

/* Comportamento individual do Slot de Item dentro do Flexbox */
.slot-mochila-item {
  /* Não cresce (0), não encolhe além do limite (0), base fixa de 60px */
  flex: 0 0 60px;
  height: 60px;
  background-color: #2c2c2c;
}

/* Modificador de Destaque: Força este item específico a ir para o início da fila visual */
.item-lendario-destacado {
  order: -1; /* Valores negativos empurram o elemento para a frente na ordem visual */
  border: 2px solid #ffaa00;
}</code></pre>`
        },
        {
            titulo: "14. Fundamentos do CSS Grid",
            conteudo: `
                <p>O CSS Grid Layout é o arquiteto supremo bidimensional. Ao declarar <code>display: grid</code>, transforma-se o elemento num sistema matemático rígido de coordenadas. Através de <code>grid-template-columns</code> e <code>grid-template-rows</code>, define a anatomia da malha espacial. Com a propriedade <code>gap</code>, estipula o distanciamento exato entre as células da grelha.</p>
                <p>A aplicação primordial em jogos é a modelagem de tabuleiros complexos e ecrãs de seleção. Para criar um clone de Tetris ou uma mesa de RPG, configura oito colunas idênticas e simétricas que dividem o espaço disponível com precisão cirúrgica de pixels, criando o campo de jogo ideal.</p>
                <p>Dominar o CSS Grid poupa o processamento do jogo, delegando ao motor nativo do navegador a responsabilidade de calcular divisões espaciais complexas.</p>
<pre><code>/* Tabuleiro de Xadrez ou Campo Tático 8x8 com CSS Grid */
.tabuleiro-tatico-grid {
  display: grid;
  /* Cria 8 colunas verticais perfeitamente iguais usando a unidade de fração 'fr' */
  grid-template-columns: repeat(8, 1fr);
  /* Cria 8 linhas horizontais perfeitamente iguais */
  grid-template-rows: repeat(8, 1fr);
  
  width: 600px;
  height: 600px;
  border: 4px solid #3e2723;
  gap: 0px;
}

/* Estilização básica das células geradas */
.casa-tabuleiro {
  background-color: #d7ccc8;
}

/* Pseudo-classe avançada pintando as casas alternadas de forma matemática */
.casa-tabuleiro:nth-child(odd) {
  background-color: #5d4037;
}</code></pre>`
        },
        {
            titulo: "15. Pseudo-elementos (::before e ::after)",
            conteudo: `
                <p>Os pseudo-elementos <code>::before</code> e <code>::after</code> atuam como injetores de caixas visuais fantasmas através da folha de estilos, sem adicionar HTML extra. Exigem a propriedade <code>content: ""</code> para ganharem vida e podem ser transformados em blocos completos através de displays, cores e dimensões.</p>
                <p>Na otimização da interface do seu jogo, são vitais para decorações ricas. Numa etiqueta de preço na loja, pode utilizar o <code>::after</code> com content de um ícone de moeda. O ícone é injetado magicamente no final do texto. Pode também usar o <code>::before</code> para molduras decorativas ornamentadas.</p>
                <p>Isto elimina o vício terrível de criar centenas de tags divs vazias no HTML apenas para detalhes estéticos, acelerando a renderização e mantendo a marcação limpa.</p>
<pre><code>/* Indicador de Preço com Ícone Injetado por Pseudo-elemento */
.preco-moedas-ouro {
  font-family: sans-serif;
  font-weight: bold;
  color: #f59e0b;
}

/* Injeta dinamicamente o caractere da moeda antes do valor numérico */
.preco-moedas-ouro::before {
  content: "💰 ";
  font-size: 1.1rem;
}

/* Cria uma linha decorativa flutuante vermelha abaixo do nome de um Boss */
.nome-boss-titulo::after {
  content: "";
  display: block;
  width: 60%;
  height: 3px;
  background-color: #dc2626;
  margin: 5px auto 0 auto;
  border-radius: 2px;
}</code></pre>`
        },
        {
            titulo: "16. Transições Suaves (Transitions)",
            conteudo: `
                <p>A propriedade <code>transition</code> é o portal da animação e do tempo cronometrado. Permite que as alterações visuais ocorram de forma fluida. Uma transição exige o nome da propriedade, a duração exata e a função de temporização (a curva Bézier, como <code>ease</code> ou <code>linear</code>) que dita a aceleração mecânica.</p>
                <p>No HUD, se o herói perder vida, o JavaScript altera a largura da barra. Com uma transição aplicada, o indicador não desaparece de forma brusca, deslizando suavemente. Esta suavidade transmite ao cérebro do jogador um feedback muito mais realista do impacto sofrido.</p>
                <p>As transições do CSS são calculadas diretamente na GPU, garantindo uma taxa de frames impecável a 60 FPS ou superior, sem roubar recursos preciosos do loop lógico em JavaScript.</p>
<pre><code>/* Configuração Base da Barra de Vida Animada */
.preenchimento-vida-hud {
  width: 100%;
  height: 100%;
  background-color: #22c55e;
  
  /* TRANSICÃO: Monitoriza qualquer alteração na largura (width) */
  /* e suaviza o movimento em 400ms com uma curva de desaceleração suave */
  transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Exemplo de botão que muda de cor suavemente ao pararmos o rato */
.botao-habilidade-slot {
  background-color: #1e293b;
  border: 2px solid #475569;
  transition: background-color 0.2s linear, border-color 0.2s linear;
}

.botao-habilidade-slot:hover {
  background-color: #334155;
  border-color: #38bdf8;
}</code></pre>`
        },
        {
            titulo: "17. Transformações 2D (Transforms)",
            conteudo: `
                <p>A propriedade <code>transform</code> aciona manipulações geométricas vetoriais bidimensionais, alterando a escala, rotação e translação sem afetar os elementos vizinhos. Utiliza funções matemáticas nativas como <code>translate()</code>, <code>rotate()</code>, <code>scale()</code> e o modificador crucial <code>transform-origin</code>, que altera o ponto pivot de ancoragem da rotação.</p>
                <p>Em jogos de cartas colecionáveis, o estado :hover da carta usará a combinação translateY, scale e rotate. Num piscar de olhos, a carta salta para a frente do ecrã e inclina-se ligeiramente para o lado, simulando a interação física com uma mesa real.</p>
                <p>O grande triunfo do transform é que ele opera na camada de composição da GPU (sem causar Reflow e Repaint lentos no navegador), preservando a performance máxima mesmo com centenas de elementos na tela.</p>
<pre><code>/* Estado Base da Carta de Jogo */
.carta-monstro-slot {
  width: 140px;
  height: 200px;
  background-color: #4c1d95;
  border-radius: 8px;
  
  /* Define o ponto pivot de rotação na base inferior central da carta */
  transform-origin: bottom center;
  transition: transform 0.25s ease-out;
}

/* Transformação Espacial Complexa ao passar o rato na carta */
.carta-monstro-slot:hover {
  /* Move -25px para cima (Eixo Y), aumenta 15% o tamanho e roda 4 graus */
  transform: translateY(-25px) scale(1.15) rotate(4deg);
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}</code></pre>`
        },
        {
            titulo: "18. Design Responsivo (Media Queries)",
            conteudo: `
                <p>As Media Queries são as ferramentas de triagem condicional e inteligência adaptativa do CSS. Através de <code>@media screen</code> acoplada a restrições como <code>max-width</code>, o navegador avalia o hardware de exibição em tempo real. Se as condições forem cumpridas, um bloco de estilos exclusivos é injetado instantaneamente.</p>
                <p>Isto garante a portabilidade total do seu jogo. Em monitores largos, o HUD de ações pode ficar na base inferior. Assim que a Media Query detetar um telemóvel (ex: menor que 768px), o CSS empilha os botões verticalmente nos cantos laterais para ergonomia dos polegares.</p>
                <p>O mesmo código HTML e JavaScript rodam universalmente. O CSS encarrega-se autonomamente de redesenhar a interface, ocultar elementos não essenciais e entregar uma gameplay limpa em qualquer ecrã.</p>
<pre><code>/* Estilo Padrão (Desktop): Menu Lateral Amplo */
.menu-configuracoes-painel {
  width: 400px;
  display: flex;
  flex-direction: row;
  padding: 30px;
}

/* MEDIA QUERY: Ativada automaticamente se o ecrã for menor que 768px (Mobile) */
@media screen and (max-width: 768px) {
  .menu-configuracoes-painel {
    /* Encolhe a largura e altera para coluna vertical */
    width: 100vw;
    flex-direction: column;
    padding: 10px;
  }
  
  /* Oculta elementos estéticos secundários para economizar espaço de ecrã útil */
  .decoracao-borda-medieval {
    display: none;
  }
}</code></pre>`
        },
        {
            titulo: "19. Pseudo-classes Avançadas",
            conteudo: `
                <p>As pseudo-classes avançadas isolam elementos de forma cirúrgica na árvore do DOM: o <code>:nth-child(n)</code> (seleciona com base na posição exata), <code>:first-of-type</code>, <code>:not(seletor)</code> (negação lógica) e o <code>:checked</code> (ativado ao marcar checkboxes).</p>
                <p>Na arquitetura de Tabelas de Líderes do jogo, usará <code>:nth-child(1)</code> para pintar o grande campeão no topo com tom dourado. Usará a regra alternada <code>:nth-child(even)</code> para pintar linhas pares com fundo cinza escuro, criando um contraste confortável de leitura.</p>
                <p>Isto transfere o fardo do processamento estrutural e estético inteiramente para o motor CSS, libertando o JavaScript de ter de criar laços complexos apenas para injetar classes de design alternado nas listas do jogo.</p>
<pre><code>/* Tabela de Classificação: Aplica listras escuras apenas nas linhas PARES */
.linha-ranking:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}

/* Destaca com cor dourada exclusiva apenas o PRIMEIRO classificado da tabela */
.linha-ranking:nth-child(1) {
  color: #fbbf24;
  font-weight: bold;
}

/* Negação Lógica (:not): Aplica opacidade reduzida em todos os slots, */
/* EXCETO na habilidade que estiver com a classe '.desbloqueada'. */
.slot-habilidade:not(.desbloqueada) {
  opacity: 0.3;
  filter: grayscale(100%);
}</code></pre>`
        },
        {
            titulo: "20. Filtros Gráficos (Filters e Blend Modes)",
            conteudo: `
                <p>Os Filtros Gráficos e Modos de Mesclagem trazem a renderização do Photoshop para o navegador web em tempo real. Incluem <code>blur()</code>, <code>brightness()</code>, <code>grayscale()</code> e o poderoso <code>backdrop-filter</code> (que borra o fundo atrás do elemento). Modos de mesclagem como <code>mix-blend-mode</code> fundem os pixels de duas caixas sobrepostas de forma matemática.</p>
                <p>Quando o jogador abre o Menu de Pausa, aplicar <code>backdrop-filter: blur(8px)</code> na camada de fundo cria um desfoque fosco lindíssimo sobre o mundo 3D que continua a rodar atrás da janela de opções. Se o herói morrer, um filtro de tons de cinza na interface inteira dita a atmosfera dramática.</p>
                <p>Isso economiza memória RAM e banda, já que você aplica filtros diretamente numa imagem original única (dispensando a necessidade de imagens em preto-e-branco redundantes criadas previamente pelo artista 2D).</p>
<pre><code>/* Camada de Menu de Pausa com Efeito de Vidro Fosco Moderno */
.painel-pausa-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 23, 42, 0.5);
  
  /* FILTRO DE FUNDO: Borra em tempo real tudo o que estiver atrás desta div */
  backdrop-filter: blur(6px) saturate(150%);
}

/* Efeito de Dano Crítico na foto do perfil do herói */
.avatar-heroi.envenenado {
  filter: hue-rotate(90deg) contrast(120%);
}

/* Modos de Mesclagem: Textura scanlines simulando ecrã retro */
.textura-scanlines-retro {
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(rgba(0,0,0,0.1) 0px, transparent 2px, transparent 4px);
  mix-blend-mode: overlay;
}</code></pre>`
        }
    ],
    avancado: [
        {
            titulo: "21. Animações Complexas com Keyframes",
            conteudo: `
                <p>As animações com <code>@keyframes</code> transcendem as transições lineares, desenhando timelines completas divididas em percentagens (de 0% a 100%). Cada marco percentual é um keyframe onde se dita cor, rotação ou escala, e o navegador interpola a matemática. A animação final é ativada através da propriedade <code>animation</code>.</p>
                <p>Para uma moeda de ouro flutuante, a timeline aos 0% está normal; aos 50% sofre rotação no eixo Y de 180deg e eleva-se; aos 100% retorna à base original. O motor CSS roda este ciclo em loop infinito na GPU.</p>
                <p>O isolamento do gerenciamento do tempo decorativo da lógica principal do jogo (o motor JavaScript) evita o estrangulamento da CPU com micro-tarefas redundantes, garantindo a performance do sistema de física e inteligência artificial.</p>
<pre><code>/* DEFINIÇÃO DA TIMELINE: O ciclo de vida geométrico da moeda */
@keyframes girarEFlutuarMoeda {
  0% { transform: translateY(0px) rotateY(0deg); }
  50% {
    /* Sobe 8px e roda meia volta no espaço 3D com brilho extra */
    transform: translateY(-8px) rotateY(180deg);
    filter: brightness(130%);
  }
  100% { transform: translateY(0px) rotateY(360deg); }
}

/* Classe aplicada à moeda no HUD */
.moeda-ouro-animada {
  display: inline-block;
  width: 32px;
  height: 32px;
  background-image: url('assets/sprites/moeda_item.png');
  
  /* EXECUÇÃO: Timeline, ciclo de 1.5s, ritmo suave e laço INFINITO */
  animation: girarEFlutuarMoeda 1.5s ease-in-out infinite;
}</code></pre>`
        },
        {
            titulo: "22. Transformações 3D",
            conteudo: `
                <p>O CSS rompe a barreira bidimensional do navegador com a diretiva <code>perspective</code> num contêiner pai, estabelecendo uma distância focal virtual. Os filhos ganham acesso a modificadores espaciais absolutos no eixo Z (<code>rotateX</code>, <code>rotateY</code>, <code>translateZ</code>) e à propriedade central <code>transform-style: preserve-3d</code>, que impede que as caixas sejam achatadas.</p>
                <p>Para o Diário de Missões, quando o jogador abre o menu, o livro executa rotações no eixo Y de noventa graus, simulando folhas tridimensionais a tombarem em direção à câmara do monitor com perspetiva hiper-realista.</p>
                <p>As matrizes 3D do CSS separam os programadores casuais da elite do frontend, permitindo projetar interfaces inclinadas e menus flutuantes perfeitamente desenhados pela aceleração de hardware sem perda de frames.</p>
<pre><code>/* O Palco 3D: Estabelece a profundidade da lente da câmera virtual */
.palco-3d-menu-conteiner {
  perspective: 1000px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* O Painel que vai tombar no espaço como um holograma Sci-Fi */
.painel-holografico-status {
  width: 400px;
  height: 250px;
  background-color: rgba(6, 182, 212, 0.2);
  border: 2px solid #06b6d4;
  
  /* FORÇA A MANTER O ELEMENTO NO ESPAÇO TRIDIMENSIONAL REAL */
  transform-style: preserve-3d;
  
  /* Rotação inclinada no espaço */
  transform: rotateX(20deg) rotateY(-15deg) translateZ(50px);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease-out;
}

.painel-holografico-status:hover {
  transform: rotateX(0deg) rotateY(0deg) translateZ(100px); /* Aproxima-se da tela */
}</code></pre>`
        },
        {
            titulo: "23. CSS Grid Layout Avançado",
            conteudo: `
                <p>O Grid Avançado utiliza áreas nomeadas (<code>grid-template-areas</code>) e diretivas autônomas inteligentes como <code>minmax</code> e <code>auto-fit</code>. O navegador calcula matematicamente quantas colunas cabem na linha em tempo real, eliminando a dependência excessiva de Media Queries.</p>
                <p>Numa mochila de itens complexa, usar <code>repeat(auto-fit, minmax(64px, 1fr))</code> cria um sistema elástico formidável: ao expandir a janela, colunas de slots são injetadas instantaneamente; ao encolher a tela, as colunas contraem e descem, mantendo a geometria precisa dos slots em segurança total.</p>
                <p>Com as <code>grid-template-areas</code>, desenhamos graficamente o endereço das células do HUD em strings. Reposicionar uma área em telas pequenas é tão simples quanto reescrever essa string no bloco de Media Query, entregando uma modularidade inigualável.</p>
<pre><code>/* Layout Avançado de HUD usando Áreas Nomeadas */
.painel-status-grid-avancado {
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-template-rows: auto auto;
  
  /* MAPEAMENTO GRÁFICO: Desenha os endereços das células */
  grid-template-areas: 
    "avatar barras"
    "avatar atributos";
    
  gap: 15px;
  width: 350px;
  background-color: #111118;
  padding: 15px;
}

/* Vinculando as tags do HTML às zonas da string superior */
.hud-elemento-avatar { grid-area: avatar; background-color: #ff0055; }
.hud-elemento-barras { grid-area: barras; }
.hud-elemento-atributos { grid-area: atributos; }</code></pre>`
        },
        {
            titulo: "24. Funções Matemáticas",
            conteudo: `
                <p>O CSS atua como uma calculadora através de <code>calc()</code> (operações com unidades mistas), <code>min()</code>, <code>max()</code>, e o brutalmente poderoso <code>clamp(mínimo, ideal, máximo)</code>, que funciona como um sistema hidráulico de limitação fluida baseada no viewport do utilizador.</p>
                <p>Isto liberta a pontuação tipográfica e as caixas modais. Ao utilizar <code>clamp(1.5rem, 5vw, 3.5rem)</code> num título, o texto trava em letras de tamanho legível em ecrãs mínimos, cresce a 5% da largura da tela, mas congela majestosamente num limite absoluto de ecrãs monstruosos 4K.</p>
                <p>A autonomia na operação geométrica reduz o refactoring do JavaScript; <code>calc(100vh - 80px)</code> alinha o painel de chat sempre até ao limite exato da barra de interface de topo com uma precisão matemática indestrutível.</p>
<pre><code>/* Janela de Chat Global Dinâmica com Funções Matemáticas */
.janela-chat-scroll-conteiner {
  /* MATEMÁTICA: Altura do ecrã MENOS 80px do cabeçalho */
  height: calc(100vh - 80px);
  
  /* Largura Fluida: Ideal 40% da tela, cravado entre 280px e 450px */
  width: clamp(280px, 40vw, 450px);
  
  background-color: rgba(15, 23, 42, 0.95);
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
}</code></pre>`
        },
        {
            titulo: "25. Clip-path e Formas Complexas",
            conteudo: `
                <p>O <code>clip-path</code> é a lâmina cirúrgica vetorial para rasgar formatos retangulares básicos. Através da função matemática <code>polygon()</code>, traçamos coordenadas cartesianas exatas (0% a 100%) em formato XY. O navegador mascara instantaneamente o resto, cortando áreas perfeitamente clicáveis.</p>
                <p>Jogos de ficção científica dependem enormemente destas barras chanfradas e hexagonais. Cortamos uma barra de vida diagonal traçando um polígono de quatro extremidades inclinadas. Assim, não precisamos mais de importar e carregar dezenas de PNGs pesados como máscaras gráficas para botões de ângulos afiados.</p>
                <p>A resolução gerada será sempre infinitamente escalável, cristalina e hiperfocada porque o desenho é processado nativamente no acelerador gráfico, superando antigas metodologias caóticas com SVGs de fundo.</p>
<pre><code>/* Barra de Energia Sci-Fi Chanfrada */
.barra-energia-scifi-moldura {
  width: 300px;
  height: 35px;
  background-color: #1e293b;
  border-left: 4px solid #f43f5e;
  
  /* P1(0,0), P2(100,0), P3(88,100), P4(0,100) */
  clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);
}

/* Botão Hexagonal Futurista de Menu */
.botao-hexagonal-menu {
  width: 120px;
  height: 40px;
  background-color: #0ea5e9;
  
  /* Retângulo recortado para um hexágono central perfeito */
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  cursor: pointer;
}</code></pre>`
        },
        {
            titulo: "26. Scroll Snapping e Scrollbars Estilizadas",
            conteudo: `
                <p>O Scroll Snapping confere fricção mecânica e atração magnética em menus expansivos. <code>scroll-snap-type</code> define o eixo de rolagem da grelha pai, e <code>scroll-snap-align</code> dita como a célula filha sofre o "trancamento" de posição após a imantação, garantindo alinhamento automático no centro do viewport.</p>
                <p>Nos menus de Seleção de Personagens ou Loja de Skins de Armas, as cartas empilham-se horizontalmente com o overflow ativado. Ao deslisar o dedo ou o cursor, a interface puxa o herói exato para o centro matemático com um snapping hiper-realista, similar às consoles de videojogos das novas gerações.</p>
                <p>Esta maravilha natural dispensa as pesadas simulações de "Smooth Scroll" escritas em JavaScript por programadores novatos, mantendo o controle total, e junto à edição dos eixos de <code>::-webkit-scrollbar</code>, o motor gráfico entrega uma obra final puramente imersiva de UI nativa.</p>
<pre><code>/* Carrossel Magnético de Personagens */
.carrossel-selecao-herois {
  display: flex;
  overflow-x: auto;
  width: 500px;
  gap: 20px;
  
  /* FISICA SNAPPING: Imantação obrigatória no eixo Horizontal */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.cartao-heroi-item {
  flex: 0 0 300px;
  height: 400px;
  background-color: #1e1b4b;
  
  /* ANCORAGEM: Trava no CENTRO da tela ao rolar */
  scroll-snap-align: center;
}

/* Customizando a barra de rolagem cinza morta padrão */
.carrossel-selecao-herois::-webkit-scrollbar { height: 8px; }
.carrossel-selecao-herois::-webkit-scrollbar-track { background: #0f172a; }
.carrossel-selecao-herois::-webkit-scrollbar-thumb { background: #312e81; border-radius: 4px; }</code></pre>`
        },
        {
            titulo: "27. Container Queries (@container)",
            conteudo: `
                <p>A disrupção completa das velhas e universais Media Queries: O <code>@container</code> permite ditar o layout baseado no tamanho estrito da "Caixa Pai Local", em vez da "Tela Global inteira do dispositivo". Adicionando <code>container-type: inline-size</code> à estrutura mestre de um slot, o filho recalcula as propriedades perante o espaço restrito interno.</p>
                <p>Um componente "Carta de Espada" expande horizontalmente (Foto e Texto ao Lado) na montra larga do mercado. Se deslocarmos esse mesmo elemento sem alterar classe nenhuma para uma mochila apertada de inventário do Canto da Tela, o próprio <code>@container (max-width: 350px)</code> força o colapso vertical encolhendo os subtítulos autonomamente.</p>
                <p>O paradigma destrói as infinitas variáveis redundantes no código: componentes totalmente modulares reagem por osmose com o contêiner recipiente, transformando interfaces num mar de quebra-cabeças geométricos maleáveis.</p>
<pre><code>/* O CONTÊINER PAI: Declarado como ponto de monitoramento local */
.modulo-card-ancora {
  container-type: inline-size;
  width: 100%;
}

/* Componente Filho Padrão (Formato Horizontal) */
.card-detalhe-arma {
  display: flex;
  flex-direction: row;
  background-color: #1c1917;
  padding: 20px;
}

/* CONTAINER QUERY: Ativada se a caixa PAI for menor que 350px */
@container (max-width: 350px) {
  .card-detalhe-arma {
    /* Encolhe para formato Vertical automaticamente */
    flex-direction: column;
    padding: 8px;
  }
  .card-detalhe-arma h4 { font-size: 0.9rem; }
}</code></pre>`
        },
        {
            titulo: "28. Arquitetura CSS (Metodologia BEM)",
            conteudo: `
                <p>A BEM (Block, Element, Modifier) estabelece as fundações arquitetónicas puras para jogos de código estendido de longa duração. Separa logicamente o <strong>Bloco</strong> (A interface principal: <code>.hud-card</code>), o <strong>Elemento</strong> dependente com dois underlines (<code>.hud-card__avatar</code>) e o <strong>Modificador</strong> de estado estético com dois hifens (<code>.hud-card__barra--critica</code>).</p>
                <p>No desenvolvimento de jogos complexos com dezenas de painéis (Guildas, Mochilas, Missões e Conquistas), classes curtas e redundantes causariam a catástrofe de aniquilação paralela de estilos. A BEM isola a renderização num ambiente estanque de endereços linguísticos únicos de exclusão de especificidade da Engine.</p>
                <p>O programador tem o mapa completo perante o escopo dos blocos visuais, o que dita a escalabilidade perfeita nos grandes ecossistemas do projeto, isento de medo ao realizar manutenções estruturais passados meses do seu fecho original.</p>
<pre><code>/* 1. BLOCK: O contêiner pai mestre */
.hud-card-jogador {
  background-color: #0c0a09;
  border: 2px solid #292524;
}

/* 2. ELEMENT: Sub-elementos que só vivem dentro do Bloco */
.hud-card-jogador__avatar-foto {
  width: 64px;
  border-radius: 4px;
}

.hud-card-jogador__barra-vida {
  width: 100%;
  height: 12px;
  background-color: #44403c;
}

/* 3. MODIFIER: Variações estéticas de estado e perigo */
.hud-card-jogador__barra-vida--critica {
  background-color: #ef4444;
  box-shadow: 0 0 10px #ef4444;
}</code></pre>`
        },
        {
            titulo: "29. Efeitos Visuais Modernos (Glassmorphism e Neumorphism)",
            conteudo: `
                <p>O topo da engenharia óptica do UI contemporâneo web cruza sombras difusas e <code>backdrop-filter</code> com filtros modais intensos de fosqueamento (Glassmorphism), criando janelas translúcidas densas com finos rebordes iluminados. Em oposição, o Neumorphism escava chapa sólida monocromática emergindo os elementos como formas reais através de dupla reflexão (Sombras cruzadas invertidas de <code>box-shadow</code> de alta intensidade concêntrica).</p>
                <p>Painéis de gestão de frota estelar parecem de facto flutuar acima do espaço vazio cósmico, enquanto relógios intrincados steampunk exibem texturas espessas, sem a importação fatal de gigabytes em Spritesheets pesadíssimas pintadas e mapeadas.</p>
                <p>Tais efeitos mostram como a CSS engole e esmaga por completo motores arcaicos de render de interface de jogos, desenhando sombras e profundidades nativamente gerando interfaces cristalinas.</p>
<pre><code>/* EFEITO 1: GLASSMORPHISM (Painel Sci-Fi Translúcido) */
.painel-scifi-glassmorphism {
  background-color: rgba(15, 23, 42, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.12);
  
  /* Magia do Foco: Borra os pixels gráficos atrás da Div em 14px via GPU */
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37), inset 0 0 1px 1px rgba(255,255,255,0.05);
}

/* EFEITO 2: NEUMORPHISM (Botão Esculpido) */
.botao-neumorphic-tatil {
  width: 60px; height: 60px;
  background-color: #e0e0e0; /* Fundo idêntico à parede traseira do cenário */
  
  /* Sombra de luz no topo, sombra de profundidade em baixo */
  box-shadow: 9px 9px 16px #bebebe, -9px -9px 16px #ffffff;
  cursor: pointer;
}

/* Ação Tátil: Botão 'afunda' na parede invertendo eixes de iluminação e projeção */
.botao-neumorphic-tatil:active {
  box-shadow: inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff;
}</code></pre>`
        },
        {
            titulo: "30. Integração de Variáveis CSS com JavaScript",
            conteudo: `
                <p>A fusão terminal entre o estilo visual e a lógica do motor de jogo. Através do método cirúrgico do DOM <code>setProperty('--nome', valor)</code>, o JavaScript injeta strings em Custom Properties do CSS frame a frame. O JS opera unicamente os algoritmos estritos puros e o CSS comanda a matemática artística gráfica na GPU sem entraves em tempo real absoluto de alta atualização (60 FPS).</p>
                <p>Uma barra de HP recebe instantaneamente a string interpolada de % vinda do motor numérico do combate. Sem a criação grotesca de centenas de classes <code>.hp-90</code> ou manipulação desorganizada global, a interface ganha inteligência vital de ponta; a cor da barra entra em colapso e transiciona suavemente consoante as matrizes trigonométricas ou a física do JavaScript indicarem perda e perigo real iminente.</p>
                <p>É esta simbiose colossal, fluida e de engenharia isolada limpa que catapulta interfaces web interativas para o trono de performance majestoso supremo no cenário das consolas contemporâneas modernas interativas.</p>
<pre><code class="language-javascript">// JAVASCRIPT: Motor de Jogo Injetando Dados no CSS
function aplicarDanoNoGuerreiro(pontosDano) {
    guerreiro.vidaAtual -= pontosDano;
    let porcentagemCalculada = (guerreiro.vidaAtual / guerreiro.vidaMaxima) * 100;
    
    const elementoBarraVida = document.querySelector('.hud__barra-vida-scifi');
    
    // Injeta nativamente a string "45%" na Variável!
    elementoBarraVida.style.setProperty('--porcentagem-vida', porcentagemCalculada + '%');
    
    if (porcentagemCalculada <= 20) {
        elementoBarraVida.classList.add('hud__barra-vida-scifi--critica');
    }
}</code></pre>
<pre><code class="language-css">/* CSS: Consumo parametrizado da memória do JS */
.hud__barra-vida-scifi {
  --porcentagem-vida: 100%;
  width: 300px;
  height: 20px;
}

.hud__barra-vida-scifi__preenchimento {
  /* Largura regida eletronicamente pelo JS em Tempo Real */
  width: var(--porcentagem-vida);
  height: 100%;
  background: linear-gradient(90deg, #22c55e 0%, #4ade80 100%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes pulsarAlarmeSangue {
  0% { background: #ef4444; box-shadow: 0 0 4px #ef4444; }
  100% { background: #991b1b; box-shadow: 0 0 15px #ef4444; }
}

/* Ativa estado grave ao receber classe de Modificador injetado via JS */
.hud__barra-vida-scifi--critica .hud__barra-vida-scifi__preenchimento {
  animation: pulsarAlarmeSangue 0.5s infinite alternate;
}</code></pre>`
        }
    ]
};
