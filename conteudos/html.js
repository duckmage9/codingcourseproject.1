/**
 * BANCO DE DADOS: HTML - NÍVEL INICIANTE
 * Este arquivo contém apenas os textos detalhados.
 */

window.conteudosHTML = {
    // === NÍVEL INICIANTE (10 TÓPICOS) ===

    "Conceito de Tags": `
        <p>As tags são os blocos fundamentais do HTML e funcionam como instruções que dizem ao navegador como cada parte da página deve ser exibida. A maioria das tags possui uma estrutura de abertura e fechamento, como <code>&lt;p&gt;</code> e <code>&lt;/p&gt;</code>, envolvendo o conteúdo que será interpretado. Existem também tags sem fechamento, como <code>&lt;img&gt;</code>, usadas para inserir elementos específicos na tela. Cada tag possui uma função própria, podendo representar textos, imagens, divisões de interface ou áreas interativas. Sem as tags, o navegador não conseguiria entender como organizar os elementos de um jogo web.</p>
        <p>Na prática, as tags são usadas para montar toda a estrutura visual do jogo dentro do navegador. Um menu principal pode ser criado com títulos, botões e imagens organizados através dessas marcações. Em jogos de navegador, é comum usar tags para definir painéis de informações, telas de pausa, caixas de diálogo e elementos do HUD. Além disso, as tags permitem integrar arquivos CSS e JavaScript que controlam a aparência e o comportamento do jogo. Cada parte da interface depende diretamente da forma como essas marcações são organizadas.</p>
        <p>No desenvolvimento de jogos web, entender tags é importante porque praticamente toda a interface do jogador depende delas. Uma tela de “Game Over”, por exemplo, precisa de títulos, textos e botões estruturados corretamente para funcionar bem. Quando o HTML é organizado de forma correta, fica mais fácil modificar a aparência do jogo usando CSS e adicionar interatividade usando JavaScript. Isso ajuda a manter o projeto limpo e organizado conforme ele cresce. Jogos maiores costumam ter dezenas de elementos diferentes, e as tags permitem controlar cada um deles com clareza.</p>
        <div class="code-block"><pre><code>&lt;h1&gt;Game Over&lt;/h1&gt;
&lt;p&gt;Você perdeu todas as vidas.&lt;/p&gt;
&lt;button&gt;Reiniciar Fase&lt;/button&gt;</code></pre></div>`,

    "Estrutura Global": `
        <p>A estrutura global do HTML representa a base obrigatória de qualquer página web e define como o navegador deve interpretar o documento. As principais divisões são as tags <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> e <code>&lt;body&gt;</code>. A tag <code>&lt;html&gt;</code> envolve todo o conteúdo da página, funcionando como o container principal. Dentro dela, o <code>&lt;head&gt;</code> armazena configurações técnicas e conexões com arquivos externos, enquanto o <code>&lt;body&gt;</code> contém tudo o que será exibido visualmente ao jogador. Essa organização garante que o navegador carregue o jogo corretamente.</p>
        <p>Na prática, essa estrutura funciona como a fundação de um projeto de jogo web. O <code>&lt;head&gt;</code> normalmente recebe links para arquivos CSS responsáveis pelo visual da interface e scripts JavaScript que controlam mecânicas do jogo. Já o <code>&lt;body&gt;</code> abriga elements como menus, canvas do jogo, placares e barras de energia. Sem essa separação, o código ficaria desorganizado e difícil de manter. Mesmo projetos pequenos precisam dessa estrutura para funcionar corretamente em diferentes navegadores.</p>
        <p>Para jogos web, a estrutura global é importante porque ajuda a separar responsabilidades dentro do projeto. O HTML cuida da organização da interface, o CSS da aparência visual e o JavaScript da lógica e da movimentação do jogo. Essa divisão facilita atualizações futuras e permite que diferentes pessoas trabalhem no mesmo projeto sem conflitos. Em projetos maiores, a organização correta evita erros e melhora o desempenho do desenvolvimento. Além disso, muitos frameworks e bibliotecas dependem dessa estrutura para funcionar corretamente.</p>
        <div class="code-block"><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Jogo de Plataforma&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Aventura Espacial&lt;/h1&gt;
    &lt;canvas id="game"&gt;&lt;/canvas&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div>`,

    "Tags de Texto": `
        <p>As tags de texto são usadas para exibir conteúdos escritos dentro da página e ajudam a organizar informações de maneira hierárquica. As tags <code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code> representam títulos de diferentes níveis de importância, enquanto a tag <code>&lt;p&gt;</code> define parágrafos comuns. Essas marcações ajudam o navegador a entender a estrutura do conteúdo textual da interface. Além disso, tornam a leitura mais clara tanto para usuários quanto para desenvolvedores. Em jogos, os textos são fundamentais para menus, diálogos, objetivos e mensagens de sistema.</p>
        <p>Na prática, as tags de texto aparecem constantemente em interfaces de jogos web. Um título principal pode representar o nome do jogo na tela inicial, enquanto parágrafos exibem instruções ou histórias do personagem. Também é comum usar headings para indicar capítulos, fases ou áreas específicas do jogo. Durante a gameplay, mensagens de vitória, derrota ou tutorial geralmente utilizam essas marcações. O HTML facilita bastante a organização visual dessas informações.</p>
        <p>No contexto de desenvolvimento de jogos, textos bem estruturados melhoram a experiência do jogador e tornam a interface mais intuitiva. Jogos com menus confusos ou mensagens desorganizadas podem causar dificuldade de navegação. Além disso, as tags de texto ajudam o CSS a aplicar estilos diferentes em cada parte da interface. Isso permite criar títulos grandes para menus e textos menores para diálogos ou descrições. Uma boa estrutura textual também facilita traduções futuras do jogo para outros idiomas.</p>
        <div class="code-block"><pre><code>&lt;h1&gt;Missão Completa&lt;/h1&gt;
&lt;h2&gt;Próxima Área Desbloqueada&lt;/h2&gt;
&lt;p&gt;Você encontrou a chave dourada da fortaleza.&lt;/p&gt;</code></pre></div>`,

    "Meta Tags Técnicas": `
        <p>As meta tags são configurações especiais colocadas dentro do <code>&lt;head&gt;</code> para fornecer informações importantes ao navegador. Elas não aparecem diretamente para o jogador, mas influenciam no comportamento da página. Algumas meta tags definem codificação de caracteres, compatibilidade e dimensionamento em dispositivos móveis. Uma das mais importantes é a <strong>viewport</strong>, responsável pela adaptação da interface em diferentes tamanhos de tela. Essas configurações garantem que o jogo funcione corretamente em celulares, tablets e computadores.</p>
        <p>Na prática, desenvolvedores utilizam meta tags para melhorar a experiência do usuário e evitar problemas de exibição. Jogos web modernos precisam funcionar em diversas resoluções e dispositivos, principalmente em telas mobile. Sem a configuração correta da viewport, elementos podem aparecer cortados ou desproporcionais. Também é comum utilizar meta tags para definir o idioma da página e otimizar o carregamento. Mesmo que sejam invisíveis, essas configurações possuem grande impacto técnico.</p>
        <p>Em jogos web, as meta tags são importantes porque muitos jogadores acessam conteúdos diretamente pelo celular. Um jogo que não se adapta corretamente à tela perde qualidade visual e pode ficar difícil de controlar. Além disso, configurações adequadas ajudam no desempenho e evitam erros relacionados à compatibilidade. Projetos profissionais utilizam essas configurações desde o início para garantir estabilidade. Isso se torna ainda mais importante em jogos multiplayer ou interfaces complexas.</p>
        <div class="code-block"><pre><code>&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Corrida Urbana&lt;/title&gt;
&lt;/head&gt;</code></pre></div>`,

    "Atributos e IDs": `
        <p>Os atributos são informações extras adicionadas às tags HTML para modificar seu comportamento ou fornecer identificações específicas. Eles aparecem dentro da tag de abertura e normalmente seguem o formato <code>nome="valor"</code>. Um dos atributos mais importantes é o <strong>id</strong>, usado para identificar elementos únicos dentro da página. Também existem atributos como class, src, href e alt, cada um com funções diferentes. Esses recursos tornam os elementos mais controláveis pelo CSS e JavaScript.</p>
        <p>Na prática, IDs são muito usados para localizar partes específicas da interface do jogo. Um contador de pontos pode receber um id para que o JavaScript atualize seu valor em tempo real durante a partida. Já atributos como src permitem carregar imagens de personagens ou sons do jogo. Classes também ajudam a aplicar estilos semelhantes em vários elementos diferentes. Esta combinação facilita a construção de interfaces organizadas e dinâmicas.</p>
        <p>No desenvolvimento de jogos web, atributos e IDs são essenciais porque permitem manipular elementos individualmente. Sistemas de HUD, barras de vida e temporizadores normalmente dependem de IDs para receber atualizações constantes. Sem identificadores corretos, scripts teriam dificuldade para localizar componentes específicos da tela. Além disso, o uso organizado desses atributos melhora a manutenção do projeto. Em jogos maiores, isso evita confusão e reduz erros durante o desenvolvimento.</p>
        <div class="code-block"><pre><code>&lt;div id="vidaJogador"&gt;Vida: 100&lt;/div&gt;
&lt;img src="sprite.png" alt="Personagem Principal"&gt;</code></pre></div>`,

    "Links e Navegação": `
        <p>A tag <code>&lt;a&gt;</code> é usada para criar links e permitir navegação entre páginas ou recursos externos. O principal atributo dessa tag é o <strong>href</strong>, responsável por indicar o destino do link. Os links podem levar para outras páginas do próprio jogo, arquivos, redes sociais ou sites externos. Eles são fundamentais para criar sistemas de navegação dentro de aplicações web. Sem eles, o jogador teria dificuldade para acessar diferentes seções do projeto.</p>
        <p>Na prática, jogos web utilizam links para conectar menus, créditos, rankings e páginas adicionais. Um botão de “Iniciar Jogo” pode levar o jogador para outra página contendo a gameplay principal. Também é comum usar links para páginas de suporte ou tutoriais externos. Alguns jogos adicionam créditos clicáveis para artistas, programadores e trilhas sonoras. Tudo isso é feito utilizando a mesma estrutura básica da tag <code>&lt;a&gt;</code>.</p>
        <p>No contexto de desenvolvimento de jogos, a navegação organizada melhora bastante a experiência do usuário. Menus claros ajudam o jogador a encontrar rapidamente opções importantes sem confusão. Além disso, links bem definidos permitem separar diferentes partes do projeto em páginas independentes. Isso ajuda na organização do código e facilita atualizações futuras. Jogos online frequentemente utilizam sistemas completos de navegação para conectar modos de jogo e rankings.</p>
        <div class="code-block"><pre><code>&lt;a href="jogo.html"&gt;Iniciar Jogo&lt;/a&gt;
&lt;a href="creditos.html"&gt;Créditos&lt;/a&gt;</code></pre></div>`,

    "Listas de Inventário": `
        <p>As listas em HTML servem para organizar conjuntos de informações em sequência e podem ser ordenadas ou não ordenadas. A tag <code>&lt;ul&gt;</code> cria listas sem ordem numérica, enquanto <code>&lt;ol&gt;</code> cria listas numeradas automaticamente. Dentro delas, cada item é definido pela tag <code>&lt;li&gt;</code>. Essas estruturas ajudam a apresentar conteúdos de forma clara e organizada na interface. Em jogos, listas podem representar inventários, missões, equipamentos ou rankings.</p>
        <p>Na prática, listas são muito úteis para organizar elementos repetitivos dentro de sistemas de jogo. Um inventário pode exibir armas, poções e armaduras utilizando itens de lista. Também é possível criar rankings de pontuação usando listas ordenadas. Menus laterais e listas de objetivos de missões frequentemente utilizam essa estrutura. Isso facilita tanto a leitura do jogador quanto a organização do código.</p>
        <p>No desenvolvimento de jogos web, listas são importantes porque ajudam a estruturar informações dinâmicas de forma eficiente. Inventários geralmente crescem conforme o jogador coleta novos itens, e as listas facilitam esse gerenciamento. Além disso, JavaScript consegue adicionar ou remover itens automaticamente durante a execução do jogo. Isso permite criar sistemas interativos sem precisar reconstruir toda a interface manualmente. Em projetos maiores, listas bem organizadas tornam o código muito mais limpo.</p>
        <div class="code-block"><pre><code>&lt;h2&gt;Inventário&lt;/h2&gt;
&lt;ul&gt;
    &lt;li&gt;Espada de Ferro&lt;/li&gt;
    &lt;li&gt;Poção de Vida&lt;/li&gt;
    &lt;li&gt;Escudo de Madeira&lt;/li&gt;
&lt;/ul&gt;</code></pre></div>`,

    "Inserção de Mídia": `
        <p>O HTML possui tags específicas para inserir imagens, áudios e vídeos dentro da página. A tag <code>&lt;img&gt;</code> é usada para imagens, <code>&lt;audio&gt;</code> para sons e <code>&lt;video&gt;</code> para vídeos. Esses elementos permitem carregar arquivos externos diretamente na interface do jogo. Recursos visuais e sonoros são extremamente importantes para criar imersão e melhorar a experiência do jogador. Sem mídia, um jogo web ficaria limitado apenas a texto.</p>
        <p>Na prática, desenvolvedores utilizam imagens para sprites, cenários, ícones e menus do jogo. Sons podem representar efeitos de ataque, passos, explosões ou músicas de fundo. Vídeos também podem ser usados em cenas de introdução ou animações especiais. O HTML permite controlar atributos como tamanho, repetição e reprodução automática desses recursos. Isso ajuda a criar interfaces mais vivas e interativas.</p>
        <p>No desenvolvimento de jogos web, a inserção de mídia é essencial porque grande parte da experiência depende de elementos audiovisuais. Um jogo sem sons ou imagens geralmente parece incompleto e menos envolvente. Além disso, a organização correta desses arquivos facilita o carregamento e melhora o desempenho do projeto. Jogos modernos utilizam muitos recursos multimídia simultaneamente, exigindo uma boa estrutura de HTML. Saber integrar mídia corretamente é uma habilidade fundamental.</p>
        <div class="code-block"><pre><code>&lt;img src="enemy.png" alt="Inimigo"&gt;
&lt;audio controls&gt;
    &lt;source src="battle-theme.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;</code></pre></div>`,

    "Containers Div": `
        <p>A tag <code>&lt;div&gt;</code> funciona como um container genérico usado para agrupar elementos dentro da página. Ela não possui significado visual próprio, mas serve para organizar e separar áreas da interface. Desenvolvedores utilizam divs para criar blocos independentes que podem receber estilos e comportamentos específicos. Isso facilita bastante a construção de layouts complexos em jogos web. Quase toda interface moderna utiliza múltiplas divs.</p>
        <p>Na prática, as divs são usadas para criar menus, barras de vida, painéis de inventário e janelas flutuantes. Cada parte da interface pode ficar dentro de uma div diferente para facilitar a estilização com CSS. Também é comum usar divs para separar áreas do jogo, como HUD e gameplay. Scripts em JavaScript conseguem alterar essas áreas dinamicamente durante a execução. Isso torna a interface mais organizada e flexível.</p>
        <p>No desenvolvimento de jogos, containers div são importantes porque ajudam a estruturar interfaces complexas sem confusão. Jogos possuem muitos elementos simultâneos na tela, e agrupar componentes evita bagunça no código. Além disso, divs permitem controlar posições, tamanhos e animações com facilidade. Sistemas de pausa, menus rápidos e notificações geralmente dependem desse tipo de organização. Projetos bem estruturados costumam utilizar divs em praticamente toda a interface.</p>
        <div class="code-block"><pre><code>&lt;div id="hud"&gt;
    &lt;div id="vida"&gt;Vida: 80&lt;/div&gt;
    &lt;div id="moedas"&gt;Moedas: 150&lt;/div&gt;
&lt;/div&gt;</code></pre></div>`,

    "Comentários de Código": `
        <p>Os comentários em HTML são anotações invisíveis usadas para documentar o código sem interferir na renderização da página. Eles são escritos utilizando a estrutura <code>&lt;!-- comentário --&gt;</code>. Comentários ajudam desenvolvedores a explicar partes importantes do projeto e organizar melhor a lógica da interface. O navegador ignora completamente esse conteúdo durante a exibição da página. Isso torna os comentários úteis para planejamento e manutenção.</p>
        <p>Na prática, comentários são usados para identificar seções específicas do layout e facilitar futuras alterações. Um desenvolvedor pode marcar áreas relacionadas ao menu principal, HUD ou tela de inventário. Também é comum utilizar comentários para separar blocos grandes de código durante o desenvolvimento. Em equipes, isso ajuda outros programadores a entender rapidamente a estrutura do projeto. Mesmo em projetos pequenos, comentários bem feitos economizam tempo.</p>
        <p>No desenvolvimento de jogos web, comentários são importantes porque projetos costumam crescer rapidamente e ganhar muitos elementos diferentes. Sem documentação básica, o código pode ficar difícil de entender depois de algum tempo. Comentários ajudam a localizar partes específicas da interface sem precisar analisar cada linha manualmente. Além disso, eles facilitam correções de bugs e futuras expansões do jogo. Uma boa organização torna o desenvolvimento mais profissional e eficiente.</p>
        <div class="code-block"><pre><code>&lt;!-- Área do HUD do jogador --&gt;
&lt;div id="hud"&gt;
    &lt;p&gt;Vida: 100&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Menu de pausa --&gt;
&lt;div id="pauseMenu"&gt;
    &lt;button&gt;Continuar&lt;/button&gt;
&lt;/div&gt;</code></pre></div>`
};
