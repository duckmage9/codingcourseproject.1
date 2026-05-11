/**
 * BANCO DE DADOS: HTML (Níveis Iniciante e Intermediário)
 */

window.conteudosHTML = {
    // ==========================================
    // === NÍVEL INICIANTE (10 TÓPICOS) ===
    // ==========================================

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
        <p>Para jogos web, a estrutura global é importante porque ajuda a separar responsabilidades dentro do projeto. O HTML cuida da organização da interface, o CSS da aparência visual e o JavaScript da lógica e da movimentação do jogo. Essa divisão facilita atualizações futures e permite que diferentes pessoas trabalhem no mesmo projeto sem conflitos. Em projetos maiores, a organização correta evita erros e melhora o desempenho do desenvolvimento. Além disso, muitos frameworks e bibliotecas dependem dessa estrutura para funcionar corretamente.</p>
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
        <p>No desenvolvimento de jogos, containers div são importantes porque ajudam a estruturar interfaces complexas sem confusão. Jogos possuem muitos elements simultâneos na tela, e agrupar componentes evita bagunça no código. Além disso, divs permitem controlar posições, tamanhos e animações com facilidade. Sistemas de pausa, menus rápidos e notificações geralmente dependem desse tipo de organização. Projetos bem estruturados costumam utilizar divs em praticamente toda a interface.</p>
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
&lt;/div&gt;</code></pre></div>`,


    // ==========================================
    // === NÍVEL INTERMEDIÁRIO (10 TÓPICOS) ===
    // ==========================================

    "Elementos Semânticos (Header, Nav, Footer)": `
        <p>Os elementos semânticos do HTML servem para organizar uma página de maneira lógica e compreensível tanto para os desenvolvedores quanto para os navegadores. As tags <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> e <code>&lt;footer&gt;</code> substituem o uso exagerado de <code>&lt;div&gt;</code>, deixando a estrutura mais clara e profissional. O <code>&lt;header&gt;</code> normalmente representa o topo da página, contendo o título, logotipo ou informações iniciais. O <code>&lt;nav&gt;</code> é utilizado para menus de navegação, enquanto o <code>&lt;footer&gt;</code> representa o rodapé com créditos, contatos ou informações finais. Essas tags ajudam os mecanismos de busca e tecnologias assistivas a entenderem melhor o conteúdo do site.</p>
        <p>Na prática, essas tags são extremamente úteis no desenvolvimento de jogos web. O <code>&lt;header&gt;</code> pode ser usado para mostrar o nome do jogo, a pontuação ou o menu principal. O <code>&lt;nav&gt;</code> pode conter botões como “Jogar”, “Configurações” e “Ranking”. Já o <code>&lt;footer&gt;</code> pode exibir informações do desenvolvedor, direitos autorais ou atalhos rápidos. Ao utilizar elementos semânticos, o código fica mais fácil de manter, principalmente em projetos maiores que possuem várias telas e funcionalidades diferentes.</p>
        <p>Outro ponto importante é a organização da equipe de desenvolvimento. Em projetos de jogos, normalmente existem arquivos separados para HTML, CSS e JavaScript. Quando o HTML está bem estruturado semanticamente, fica muito mais simples localizar cada área da interface e aplicar estilos ou comportamentos específicos. Isso evita confusão e reduz erros durante o desenvolvimento. Além disso, muitos frameworks modernos aproveitam essa estrutura semântica para melhorar desempenho e acessibilidade.</p>
        <div class="code-block"><pre><code>&lt;header&gt;
    &lt;h1&gt;Space Battle&lt;/h1&gt;
&lt;/header&gt;
&lt;nav&gt;
    &lt;a href="#"&gt;Jogar&lt;/a&gt;
    &lt;a href="#"&gt;Ranking&lt;/a&gt;
    &lt;a href="#"&gt;Configurações&lt;/a&gt;
&lt;/nav&gt;
&lt;footer&gt;
    &lt;p&gt;Desenvolvido por Indie Studio&lt;/p&gt;
&lt;/footer&gt;</code></pre></div>`,

    "Seções de Conteúdo (Section, Article, Aside)": `
        <p>As tags <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> e <code>&lt;aside&gt;</code> servem para dividir o conteúdo da página em áreas organizadas e independentes. A tag <code>&lt;section&gt;</code> representa uma parte temática do conteúdo, funcionando como um agrupamento lógico. O <code>&lt;article&gt;</code> é utilizado para conteúdos que fazem sentido sozinhos, como notícias, posts ou descrições de fases de um jogo. Já o <code>&lt;aside&gt;</code> representa conteúdos secundários, como anúncios, dicas ou widgets laterais.</p>
        <p>Em jogos web, essas tags ajudam bastante na criação de interfaces organizadas. Uma <code>&lt;section&gt;</code> pode representar a área principal do jogo, enquanto outra pode mostrar objetivos da missão. Um <code>&lt;article&gt;</code> pode ser usado em blogs internos do jogo, notícias de atualizações ou descrição de personagens. O <code>&lt;aside&gt;</code> funciona muito bem para exibir rankings, propagandas, dicas rápidas ou atalhos para redes sociais do jogo.</p>
        <p>A grande vantagem dessa divisão é a clareza estrutural. Em projetos grandes, é comum existirem muitas áreas diferentes na tela, e usar apenas <code>&lt;div&gt;</code> deixa tudo confuso. Com elementos semânticos, qualquer desenvolvedor consegue identificar rapidamente o propósito de cada parte do sistema. Isso melhora a manutenção, a acessibilidade e também facilita futuras expansões do projeto, como adicionar novas telas ou modos de jogo.</p>
        <div class="code-block"><pre><code>&lt;section&gt;
    &lt;h2&gt;Missão Atual&lt;/h2&gt;
    &lt;p&gt;Derrote todos os inimigos da arena.&lt;/p&gt;
&lt;/section&gt;
&lt;article&gt;
    &lt;h2&gt;Atualização 1.2&lt;/h2&gt;
    &lt;p&gt;Novo personagem desbloqueado.&lt;/p&gt;
&lt;/article&gt;
&lt;aside&gt;
    &lt;p&gt;Dica: Use escudo contra ataques mágicos.&lt;/p&gt;
&lt;/aside&gt;</code></pre></div>`,

    "Estrutura de Tabelas Simples (Table, Tr, Td)": `
        <p>As tabelas em HTML são usadas para organizar informações em linhas e colunas. A tag <code>&lt;table&gt;</code> cria a tabela principal, <code>&lt;tr&gt;</code> representa cada linha e <code>&lt;td&gt;</code> representa as células que armazenam os dados. Esse tipo de estrutura é muito útil quando os dados possuem relação organizada, como números, estatísticas ou classificações. Apesar de simples, as tabelas continuam sendo importantes em diversos tipos de aplicações web.</p>
        <p>No desenvolvimento de jogos, tabelas são bastante utilizadas para mostrar placares, rankings de jogadores, atributos de personagens ou inventários simples. Cada linha pode representar um jogador diferente, enquanto as colunas exibem informações como pontuação, nível e tempo de jogo. Isso permite apresentar grandes quantidades de dados de forma clara e fácil de entender pelo usuário.</p>
        <p>Além da aparência visual organizada, as tabelas também ajudam na manutenção do projeto. Quando os dados estão estruturados corretamente, fica mais simples atualizar informações usando JavaScript ou integrar sistemas de banco de dados futuramente. Em jogos online, por exemplo, rankings dinâmicos normalmente são montados utilizando estruturas tabulares no HTML combinadas com scripts que atualizam os valores automaticamente.</p>
        <div class="code-block"><pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Jogador&lt;/th&gt;
        &lt;th&gt;Pontos&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Ana&lt;/td&gt;
        &lt;td&gt;4500&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Carlos&lt;/td&gt;
        &lt;td&gt;3200&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre></div>`,

    "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": `
        <p>As tags <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> e <code>&lt;tfoot&gt;</code> servem para dividir tabelas em partes organizadas e semanticamente corretas. O <code>&lt;thead&gt;</code> representa o cabeçalho da tabela, contendo os títulos das colunas. O <code>&lt;tbody&gt;</code> agrupa os dados principais da tabela, enquanto o <code>&lt;tfoot&gt;</code> normalmente apresenta resultados finais, totais ou resumos. Essa separação melhora a leitura do código e facilita a manutenção de tabelas maiores.</p>
        <p>Em jogos web, tabelas organizadas dessa forma são muito úteis em sistemas de ranking, estatísticas de partidas ou inventários extensos. O <code>&lt;thead&gt;</code> pode mostrar os nomes das categorias como “Jogador”, “Vitórias” e “Derrotas”. O <code>&lt;tbody&gt;</code> exibe os dados reais de cada usuário. Já o <code>&lt;tfoot&gt;</code> pode apresentar informações gerais, como total de participantes ou média de pontos da competição.</p>
        <p>Outro benefício importante é a integração com CSS e JavaScript. Quando a tabela possui grupos bem definidos, fica mais fácil aplicar estilos específicos apenas no cabeçalho ou criar scripts que manipulem somente determinadas áreas da tabela. Isso torna o desenvolvimento mais organizado e melhora a escalabilidade do projeto, principalmente em jogos competitivos online que possuem muitos dados dinâmicos.</p>
        <div class="code-block"><pre><code>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Jogador&lt;/th&gt;
            &lt;th&gt;Pontos&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Lucas&lt;/td&gt;
            &lt;td&gt;9000&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Maria&lt;/td&gt;
            &lt;td&gt;8700&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
    &lt;tfoot&gt;
        &lt;tr&gt;
            &lt;td&gt;Total&lt;/td&gt;
            &lt;td&gt;2 jogadores&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
&lt;/table&gt;</code></pre></div>`,

    "Formulários Básicos (Form, Input, Label)": `
        <p>Os formulários são a principal forma de interação entre o usuário e o sistema dentro do HTML. A tag <code>&lt;form&gt;</code> cria a estrutura do formulário, <code>&lt;input&gt;</code> permite inserir informações e <code>&lt;label&gt;</code> identifica cada campo de maneira clara. Esses elementos são fundamentais para capturar dados do usuário, como nome, senha, e-mail ou preferências. Sem formulários, seria impossível criar sistemas de login, cadastro ou envio de informações.</p>
        <p>No contexto de jogos web, formulários aparecem em várias situações importantes. Eles podem ser usados para criar telas de login, registro de jogadores, envio de feedback ou configuração de personagens. Um campo <code>&lt;input&gt;</code> pode capturar o nickname do jogador, enquanto o <code>&lt;label&gt;</code> ajuda a identificar exatamente o que deve ser digitado. Isso melhora a experiência do usuário e evita confusões durante a utilização do sistema.</p>
        <p>Além da funcionalidade prática, formulários organizados corretamente também ajudam na acessibilidade e manutenção do projeto. O uso correto de <code>&lt;label&gt;</code> permite que leitores de tela entendam melhor os campos disponíveis. Em equipes de desenvolvimento, um HTML bem estruturado facilita futuras alterações e integração com bancos de dados ou APIs responsáveis pelo armazenamento das informações dos jogadores.</p>
        <div class="code-block"><pre><code>&lt;form&gt;
    &lt;label for="nome"&gt;Nome do Jogador:&lt;/label&gt;
    &lt;input type="text" id="nome"&gt;
    &lt;button type="submit"&gt;Entrar no Jogo&lt;/button&gt;
&lt;/form&gt;</code></pre></div>`,

    "Tipos de Input (Text, Password, Email, Button)": `
        <p>Os diferentes tipos de <code>&lt;input&gt;</code> permitem que o HTML trate cada informação de maneira específica. O tipo <strong>text</strong> é usado para textos comuns, <strong>password</strong> oculta caracteres digitados, <strong>email</strong> verifica automaticamente o formato de e-mails e <strong>button</strong> cria botões clicáveis. Esses tipos ajudam o navegador a entender qual tipo de dado está sendo solicitado ao usuário.</p>
        <p>Em jogos web, esses campos aparecem frequentemente em sistemas de autenticação e menus interativos. O text pode ser usado para o nickname do jogador, o password protege a senha da conta e o email é importante em cadastros online ou recuperação de senha. Já os botões permitem iniciar partidas, salvar configurações ou confirmar ações importantes dentro da interface.</p>
        <p>O uso correto dos tipos de input melhora a experiência do usuário e reduz erros de preenchimento. Além disso, navegadores modernos oferecem recursos automáticos baseados nesses tipos, como teclados específicos em celulares e validações básicas integradas. Isso diminui a necessidade de criar verificações extras com JavaScript e torna o desenvolvimento mais eficiente.</p>
        <div class="code-block"><pre><code>&lt;form&gt;
    &lt;input type="text" placeholder="Nickname"&gt;
    &lt;input type="password" placeholder="Senha"&gt;
    &lt;input type="email" placeholder="E-mail"&gt;
    &lt;input type="button" value="Iniciar Jogo"&gt;
&lt;/form&gt;</code></pre></div>`,

    "Seleções em Formulários (Radio, Checkbox, Select)": `
        <p>Os elementos <strong>radio</strong>, <strong>checkbox</strong> e <strong>select</strong> permitem criar opções de escolha dentro dos formulários. O radio serve para selecionar apenas uma opção entre várias disponíveis. O checkbox permite marcar múltiplas opções ao mesmo tempo. Já o <code>&lt;select&gt;</code> cria menus suspensos conhecidos como dropdowns, muito usados quando existem muitas opções disponíveis.</p>
        <p>Em jogos web, esses recursos aparecem em telas de configuração e personalização. Um grupo de radio pode permitir escolher o nível de dificuldade do jogo. Os checkboxes podem ativar ou desativar efeitos sonoros, legendas ou notificações. O <code>&lt;select&gt;</code> pode ser usado para escolher personagens, mapas ou idiomas disponíveis no sistema.</p>
        <p>Esses elementos tornam a interface mais organizada e intuitiva para o jogador. Em vez de exigir digitação manual, o usuário apenas escolhe opções prontas, reduzindo erros e agilizando a interação. Além disso, formulários com seleções estruturadas facilitam o processamento dos dados pelo JavaScript e pelos sistemas internos do jogo.</p>
        <div class="code-block"><pre><code>&lt;form&gt;
    &lt;p&gt;Dificuldade:&lt;/p&gt;
    <label>
        &lt;input type="radio" name="nivel" value="facil"&gt; Fácil
    </label>
    <label>
        &lt;input type="radio" name="nivel" value="dificil"&gt; Difícil
    </label>

    &lt;p&gt;Configurações:&lt;/p&gt;
    <label>
        &lt;input type="checkbox" name="musica"&gt; Música
    </label>
    <label>
        &lt;input type="checkbox" name="sfx"&gt; Efeitos Sonoros
    </label>

    &lt;select name="classe"&gt;
        &lt;option value="guerreiro"&gt;Guerreiro&lt;/option&gt;
        &lt;option value="mago"&gt;Mago&lt;/option&gt;
    &lt;/select&gt;
&lt;/form&gt;</code></pre></div>`,

    "Validação Nativa de Formulários": `
        <p>A validação nativa do HTML utiliza atributos especiais para impedir o envio de dados incorretos sem precisar de JavaScript. O atributo <strong>required</strong> obriga o preenchimento do campo. Os atributos <strong>min</strong> e <strong>max</strong> definem limites numéricos, enquanto <strong>pattern</strong> cria regras específicas usando expressões regulares. Esses recursos ajudam a garantir que os dados enviados sejam válidos antes mesmo de chegarem ao servidor.</p>
        <p>Em jogos web, isso é muito útil para formulários de cadastro, criação de personagens e sistemas online. O required pode impedir que o jogador entre sem informar um nickname. O min e max podem limitar a idade do usuário ou quantidade de personagens criados. Já o pattern pode impedir nomes inválidos contendo caracteres proibidos.</p>
        <p>Além de melhorar a segurança e qualidade dos dados, a validação nativa reduz a necessidade de scripts extras. Isso deixa o projeto mais leve e fácil de manter. O navegador já exibe mensagens automáticas de erro para o usuário, tornando a experiência mais prática e intuitiva, especialmente em sistemas simples ou jogos independentes feitos por iniciantes.</p>
        <div class="code-block"><pre><code>&lt;form&gt;
    &lt;input 
        type="text"
        placeholder="Nickname"
        required
        pattern="[A-Za-z0-9]{3,10}"
    &gt;
    &lt;input 
        type="number"
        min="1"
        max="99"
        placeholder="Idade"
    &gt;
    &lt;button type="submit"&gt;Cadastrar&lt;/button&gt;
&lt;/form&gt;</code></pre></div>`,

    "Introdução à Acessibilidade (Atributos ARIA)": `
        <p>Os atributos ARIA ajudam a tornar páginas e aplicações acessíveis para pessoas que utilizam leitores de tela ou outras tecnologias assistivas. ARIA significa <em>Accessible Rich Internet Applications</em>. Esses atributos fornecem informações extras para ferramentas de acessibilidade entenderem melhor o propósito dos elementos presentes na interface. Eles complementam o HTML semântico quando determinadas informações não ficam claras apenas pelas tags tradicionais.</p>
        <p>No desenvolvimento de jogos web, acessibilidade é extremamente importante para permitir que mais pessoas possam utilizar o sistema. Um botão de “Iniciar Jogo” pode receber um atributo ARIA descrevendo sua função de maneira mais detalhada. Menus, barras de vida e notificações também podem usar atributos especiais para que leitores de tela consigam informar corretamente o que está acontecendo durante a navegação.</p>
        <p>Além da inclusão social, acessibilidade melhora a qualidade geral do projeto. Interfaces acessíveis costumam ser mais organizadas, claras e bem estruturadas. Empresas grandes da indústria de jogos vêm investindo cada vez mais em acessibilidade para alcançar públicos maiores e cumprir padrões modernos de desenvolvimento web. Aprender ARIA desde cedo ajuda a criar projetos mais profissionais e completos.</p>
        <div class="code-block"><pre><code>&lt;button aria-label="Iniciar nova partida"&gt;
    Jogar
&lt;/button&gt;
&lt;div aria-live="polite"&gt;
    Vida do jogador: 80%
&lt;/div&gt;</code></pre></div>`,

    "A tag <dialog> (Modais Nativos)": `
        <p>A tag <code>&lt;dialog&gt;</code> é um recurso moderno do HTML usado para criar janelas modais e caixas de diálogo sem precisar de soluções improvisadas com várias <code>&lt;div&gt;</code> e muito JavaScript. Ela permite abrir e fechar pop-ups de maneira mais simples e organizada. Os navegadores modernos já oferecem suporte nativo para esse elemento, tornando sua utilização cada vez mais comum.</p>
        <p>Nos jogos web, modais são usados em diversas situações importantes. Eles podem mostrar mensagens de “Game Over”, menus de pausa, confirmações de saída ou avisos importantes para o jogador. Antes da existência do <code>&lt;dialog&gt;</code>, era necessário criar estruturas complexas usando CSS e scripts extras. Agora, o próprio HTML já fornece um componente preparado para esse tipo de interação.</p>
        <p>Outra vantagem importante é a acessibilidade automática. O <code>&lt;dialog&gt;</code> já possui comportamentos nativos que ajudam leitores de tela e navegação por teclado. Isso melhora a experiência do usuário e reduz a quantidade de código necessário no projeto. Em jogos independentes e projetos iniciantes, isso economiza tempo e deixa a interface mais moderna e profissional.</p>
        <div class="code-block"><pre><code>&lt;dialog open&gt;
    &lt;h2&gt;Game Over&lt;/h2&gt;
    &lt;p&gt;Você perdeu todas as vidas.&lt;/p&gt;
    &lt;button&gt;Reiniciar&lt;/button&gt;
&lt;/dialog&gt;</code></pre></div>`
};
