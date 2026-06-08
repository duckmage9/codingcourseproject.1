window.exerciciosHTML = {
    iniciante: {
        "Conceito de Tags": {
            enunciado1: "Identifique a sintaxe correta utilizada para abrir e fechar um elemento em um documento HTML.",
            opcoes: [
                "a) [p]Meu parágrafo[/p]",
                "b) &lt;p&gt;Meu parágrafo&lt;p&gt;",
                "c) {p}Meu parágrafo{/p}",
                "d) &lt;p&gt;Meu parágrafo&lt;/p&gt;",
                "e) &lt;/p&gt;Meu parágrafo&lt;p&gt;"
            ],
            respostaMultipla: 3, // Letra D (O índice começa no 0)
            enunciado2: "Lembre-se de que a linguagem HTML utiliza sinais de 'menor que' e 'maior que' para definir o início de um elemento. O fechamento do elemento é idêntico à abertura, mas exige um caractere especial de barra oblíqua (/) logo após o sinal de 'menor que', indicando ao navegador que aquele elemento terminou.",
            questaoPratica: "Um desenvolvedor iniciante tentou criar um botão e um parágrafo na tela, mas o layout quebrou e o navegador não está interpretando o final dos elementos corretamente. Analise o código base abaixo, identifique o erro comum na sintaxe das tags e reescreva o código da maneira correta:",
            codigoInicial: "<button>Clique em mim<button>\n<p>Este é um texto de aviso importante.<p>",
            correta: "<button>Clique em mim</button>\n<p>Este é um texto de aviso importante.</p>"
        },
        "Estrutura Global": {
            enunciado1: "Qual é a tag raiz que envolve todo o conteúdo de uma página HTML (tanto as configurações invisíveis quanto o conteúdo visível)?",
            opcoes: [
                "a) &lt;head&gt;",
                "b) &lt;body&gt;",
                "c) &lt;html&gt;",
                "d) &lt;main&gt;",
                "e) &lt;!DOCTYPE html&gt;"
            ],
            respostaMultipla: 2, // Letra C
            enunciado2: "Todo documento web precisa começar declarando seu tipo para que o navegador entenda a versão do HTML. Logo depois, envolvemos tudo na tag raiz do documento. As configurações invisíveis (como título da aba e links de estilo) ficam no 'topo' da estrutura, enquanto tudo o que o usuário efetivamente vê na tela deve ficar dentro do 'corpo'.",
            questaoPratica: "Você recebeu o código abaixo de um colega que está aprendendo HTML. O texto está aparecendo na tela, mas a página está mal estruturada, misturando a área de configurações com a área visível, o que vai prejudicar o SEO e o carregamento de scripts no futuro. Corrija a estrutura global:",
            codigoInicial: "<!DOCTYPE html>\n<html>\n  <body>\n    <title>Minha Primeira Página</title>\n  </body>\n  <head>\n    <h1>Bem-vindo ao meu site!</h1>\n    <p>Aqui você encontrará meu portfólio.</p>\n  </head>\n</html>",
            correta: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Minha Primeira Página</title>\n  </head>\n  <body>\n    <h1>Bem-vindo ao meu site!</h1>\n    <p>Aqui você encontrará meu portfólio.</p>\n  </body>\n</html>"
        },
        "Tags de Texto": {
            enunciado1: "Para definir o título de maior importância (nível 1) em um documento HTML, qual tag deve ser utilizada?",
            opcoes: [
                "a) &lt;title&gt;",
                "b) &lt;header&gt;",
                "c) &lt;strong&gt;",
                "d) &lt;h1&gt;",
                "e) &lt;h6&gt;"
            ],
            respostaMultipla: 3, // Letra D
            enunciado2: "A hierarquia de texto é crucial para a acessibilidade e para os motores de busca (SEO). Os títulos vão de nível 1 a 6, sendo o nível 1 o mais importante (geralmente usado apenas uma vez por página). Para criar blocos de texto comuns, utilizamos uma tag diferente, focada em parágrafos.",
            questaoPratica: "O código abaixo tem a intenção de exibir um título secundário (nível 2) e um parágrafo logo abaixo dele. No entanto, o programador cometeu um erro de cruzamento de tags (fechando as tags na ordem errada). Reescreva o código fechando os elementos na ordem correta:",
            codigoInicial: "<h2>O que é o Universo?<p>O universo é tudo o que existe, incluindo espaço, tempo e matéria.</h2></p>",
            correta: "<h2>O que é o Universo?</h2>\n<p>O universo é tudo o que existe, incluindo espaço, tempo e matéria.</p>"
        },
        "Meta Tags Técnicas": {
            enunciado1: "Qual é a tag correta para garantir que caracteres especiais e acentos (como ç, á, ã) sejam exibidos corretamente no navegador?",
            opcoes: [
                "a) &lt;meta name=\"viewport\" content=\"width=device-width\"&gt;",
                "b) &lt;meta charset=\"UTF-8\"&gt;",
                "c) &lt;meta language=\"pt-br\"&gt;",
                "d) &lt;link rel=\"charset\" href=\"UTF-8\"&gt;",
                "e) &lt;title charset=\"UTF-8\"&gt;"
            ],
            respostaMultipla: 1, // Letra B
            enunciado2: "Para evitar que letras com acentos apareçam como símbolos estranhos no navegador de diferentes usuários, precisamos informar ao HTML qual padrão de codificação de caracteres estamos utilizando. Isso é feito utilizando uma tag vazia que fica localizada na seção invisível do documento.",
            questaoPratica: "Um desenvolvedor criou uma página simples em português, mas os usuários estão reclamando que a palavra 'Configurações' está aparecendo quebrada. Adicione a linha de código exata que está faltando dentro da estrutura apropriada para resolver este problema:",
            codigoInicial: "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n    <title>Painel de Controle</title>\n</head>\n<body>\n    <h1>Configurações do Usuário</h1>\n</body>\n</html>",
            correta: "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n    <title>Painel de Controle</title>\n    <meta charset=\"UTF-8\">\n</head>\n<body>\n    <h1>Configurações do Usuário</h1>\n</body>\n</html>"
        },
        "Atributos e IDs": {
            enunciado1: "Sobre o atributo id, é correto afirmar que:",
            opcoes: [
                "a) Ele pode ser usado múltiplas vezes com o mesmo valor na mesma página.",
                "b) Ele serve exclusivamente para mudar a cor do texto.",
                "c) Seu valor deve ser único e não pode se repetir em nenhum outro elemento da mesma página.",
                "d) Ele é obrigatório em todas as tags do HTML5.",
                "e) Ele substitui a necessidade de usar classes."
            ],
            respostaMultipla: 2, // Letra C
            enunciado2: "Atributos fornecem informações ou comportamentos adicionais aos elementos. O atributo id funciona como se fosse o 'CPF' de um elemento na página. Para que o CSS ou o JavaScript consigam encontrar um elemento específico com precisão, esse identificador deve ser exclusivo.",
            questaoPratica: "No sistema abaixo, temos três caixas de alerta diferentes. O desenvolvedor tentou dar identificadores para elas, mas cometeu um erro lógico conceitual grave sobre o uso de IDs. Corrija o código atribuindo IDs únicos:",
            codigoInicial: "<div id=\"caixa-alerta\">\n  <p>Sucesso: Usuário cadastrado!</p>\n</div>\n<div id=\"caixa-alerta\">\n  <p>Aviso: Verifique seu e-mail.</p>\n</div>\n<div id=\"caixa-alerta\">\n  <p>Erro: Senha incorreta.</p>\n</div>",
            correta: "<div id=\"alerta-sucesso\">\n  <p>Sucesso: Usuário cadastrado!</p>\n</div>\n<div id=\"alerta-aviso\">\n  <p>Aviso: Verifique seu e-mail.</p>\n</div>\n<div id=\"alerta-erro\">\n  <p>Erro: Senha incorreta.</p>\n</div>"
        },
        "Links e Navegação": {
            enunciado1: "Qual combinação de tag e atributo é utilizada para criar um hiperlink em HTML?",
            opcoes: [
                "a) &lt;link src=\"url\"&gt;",
                "b) &lt;a href=\"url\"&gt;",
                "c) &lt;nav link=\"url\"&gt;",
                "d) &lt;href url=\"url\"&gt;",
                "e) &lt;a src=\"url\"&gt;"
            ],
            respostaMultipla: 1, // Letra B
            enunciado2: "Para criar hiperlinks e conectar diferentes páginas, usamos a tag 'anchor' (âncora). A URL de destino desse link não vai solta dentro da tag, mas sim passada como o valor de um atributo específico chamado 'hypertext reference'. O texto que o usuário clica vai entre a abertura e o fechamento da tag.",
            questaoPratica: "Um iniciante quis colocar um link para o Google na sua página pessoal. O texto está aparecendo na tela, mas ele não é clicável e não leva a lugar nenhum porque o código base está incompleto. Altere a tag abaixo para transformá-la em um link funcional para https://www.google.com:",
            codigoInicial: "<p>Para fazer uma pesquisa, visite o <a>Google</a>.</p>",
            correta: "<p>Para fazer uma pesquisa, visite o <a href=\"https://www.google.com\">Google</a>.</p>"
        },
        "Listas de Inventário": {
            enunciado1: "Para criar uma lista onde a ordem dos itens não tem importância (com 'bolinhas' ao lado), utilizamos a estrutura:",
            opcoes: [
                "a) &lt;ol&gt; com filhos &lt;li&gt;",
                "b) &lt;list&gt; com filhos &lt;item&gt;",
                "c) &lt;ul&gt; com filhos &lt;ol&gt;",
                "d) &lt;ul&gt; com filhos &lt;li&gt;",
                "e) &lt;li&gt; com filhos &lt;ul&gt;"
            ],
            respostaMultipla: 3, // Letra D
            enunciado2: "Ao agrupar itens em que a ordem cronológica não importa, usamos 'unordered lists' (listas não ordenadas). É importante lembrar que o texto não deve ser jogado diretamente dentro da tag de lista; cada item individual deve ser envolvido por uma tag de 'list item' (item de lista).",
            questaoPratica: "O código abaixo deveria mostrar os equipamentos em forma de lista pontilhada. No entanto, o programador usou a tag que gera números em vez de pontos, e esqueceu de envolver os itens de texto com a tag correta. Corrija o código:",
            codigoInicial: "<h3>Inventário do Herói:</h3>\n<ol>\n  Espada de Ferro\n  Escudo de Madeira\n  Poção de Vida\n</ol>",
            correta: "<h3>Inventário do Herói:</h3>\n<ul>\n  <li>Espada de Ferro</li>\n  <li>Escudo de Madeira</li>\n  <li>Poção de Vida</li>\n</ul>"
        },
        "Inserção de Mídia": {
            enunciado1: "Além de informar o caminho da imagem, qual atributo é considerado obrigatório para fornecer um texto alternativo caso a imagem quebre ou para leitores de tela?",
            opcoes: [
                "a) title",
                "b) desc",
                "c) caption",
                "d) alt",
                "e) src"
            ],
            respostaMultipla: 3, // Letra D
            enunciado2: "A tag de imagem é vazia e depende inteiramente de atributos para funcionar. Além de dizer onde o arquivo está, é imprescindível pensar em acessibilidade. Existe um atributo que fornece um texto descrevendo visualmente a imagem, que será lido em voz alta para usuários com deficiência visual.",
            questaoPratica: "O trecho de código abaixo tenta carregar a foto do perfil. O programador confundiu o atributo usado para puxar o arquivo da imagem e também esqueceu de adicionar o texto alternativo essencial para acessibilidade. Identifique os erros e corrija a tag da imagem:",
            codigoInicial: "<div class=\"perfil\">\n  <h2>Foto de Perfil</h2>\n  <img href=\"foto-usuario-01.jpg\" title=\"Foto do Usuário\">\n</div>",
            correta: "<div class=\"perfil\">\n  <h2>Foto de Perfil</h2>\n  <img src=\"foto-usuario-01.jpg\" alt=\"Foto do Usuário\">\n</div>"
        },
        "Containers Div": {
            enunciado1: "A tag &lt;div&gt; é utilizada principalmente para:",
            opcoes: [
                "a) Criar links de navegação horizontais.",
                "b) Agrupar elementos em bloco para criar seções lógicas e aplicar estilos CSS.",
                "c) Destacar um texto importante colocando-o em negrito.",
                "d) Exibir caixas de diálogo interativas.",
                "e) Substituir a tag form na coleta de dados de usuários."
            ],
            respostaMultipla: 1, // Letra B
            enunciado2: "A tag de divisão (<div>) é um elemento genérico que ocupa toda a largura disponível (elemento de bloco). Embora não tenha valor semântico por si só, ela é a 'caixa' mais versátil do HTML, extremamente útil para agrupar outros elementos HTML construindo o layout da página.",
            questaoPratica: "O programador quer agrupar a foto, o nome e a profissão em um 'cartão' de bloco único. Ele utilizou a tag genérica <span>, que é um elemento em linha (inline), o que faz com que o layout quebre ao tentar abraçar elementos de bloco grandes. Substitua pela tag de container correta:",
            codigoInicial: "<span class=\"cartao-equipe\">\n  <img src=\"membro.png\" alt=\"Foto do membro\">\n  <h2>Carlos Silva</h2>\n  <p>Desenvolvedor Front-end</p>\n</span>",
            correta: "<div class=\"cartao-equipe\">\n  <img src=\"membro.png\" alt=\"Foto do membro\">\n  <h2>Carlos Silva</h2>\n  <p>Desenvolvedor Front-end</p>\n</div>"
        },
        "Comentários de Código": {
            enunciado1: "Qual das opções abaixo representa um comentário válido na linguagem HTML?",
            opcoes: [
                "a) // Este é um comentário",
                "b) &lt;!-- Este é um comentário --&gt;",
                "c) # Este é um comentário",
                "d) /* Este é um comentário */",
                "e) &lt;comment&gt; Este é um comentário &lt;/comment&gt;"
            ],
            respostaMultipla: 1, // Letra B
            enunciado2: "Comentar o código é vital para deixar anotações de manutenção ou desativar temporariamente uma funcionalidade. O navegador simplesmente ignora tudo o que estiver envolto na sintaxe específica de comentário do HTML.",
            questaoPratica: "Um botão de deletar conta estava causando um erro e o desenvolvedor quis desativá-lo temporariamente na interface. Ele tentou comentar o código HTML usando a sintaxe da linguagem JavaScript, o que resultou nas barras aparecendo na tela e o botão ainda funcionando. Aplique a sintaxe correta de comentário HTML no código base:",
            codigoInicial: "<div class=\"configuracoes-perigo\">\n  <h3>Zona de Perigo</h3>\n  // <button class=\"btn-vermelho\">Deletar Conta</button>\n</div>",
            correta: "<div class=\"configuracoes-perigo\">\n  <h3>Zona de Perigo</h3>\n  \n</div>"
        }
    },
    intermediario: {
        "Elementos Semânticos (Header, Nav, Footer)": {
            enunciado1: "Qual elemento semântico é especificamente desenhado para agrupar os principais links de navegação de um documento web?",
            opcoes: ["a) &lt;menu&gt;", "b) &lt;header&gt;", "c) &lt;nav&gt;", "d) &lt;footer&gt;", "e) &lt;links&gt;"],
            respostaMultipla: 2,
            enunciado2: "Elementos semânticos ajudam leitores de tela e motores de busca a entenderem a arquitetura da página. O topo (header), navegação (nav) e rodapé (footer) são cruciais.",
            questaoPratica: "Um iniciante tentou estruturar o topo do seu portfólio usando apenas caixas genéricas (<div>), perdendo todo o valor semântico para o SEO. Reescreva o código base abaixo substituindo as <div> pelas tags semânticas apropriadas para cabeçalho e navegação.",
            codigoInicial: "<div id=\"cabecalho\">\n  <h1>Meu Portfólio</h1>\n  <div id=\"menu-principal\">\n    <a href=\"/home\">Início</a>\n    <a href=\"/projetos\">Projetos</a>\n  </div>\n</div>",
            correta: "<header>\n  <h1>Meu Portfólio</h1>\n  <nav>\n    <a href=\"/home\">Início</a>\n    <a href=\"/projetos\">Projetos</a>\n  </nav>\n</header>"
        },
        "Seções de Conteúdo (Section, Article, Aside)": {
            enunciado1: "Qual tag semântica deve ser usada para encapsular um post de blog ou uma notícia que manteria seu sentido mesmo se fosse distribuída fora do contexto da página atual?",
            opcoes: ["a) &lt;section&gt;", "b) &lt;div&gt;", "c) &lt;aside&gt;", "d) &lt;main&gt;", "e) &lt;article&gt;"],
            respostaMultipla: 4,
            enunciado2: "Enquanto o <section> serve para agrupar conteúdos relacionados sob um mesmo tema, o <article> é para algo completamente independente. Já o <aside> é a ferramenta perfeita para conteúdos secundários e periféricos.",
            questaoPratica: "O layout tem a reportagem principal e uma barra lateral com cotações. O desenvolvedor usou a tag <section> para a barra lateral, o que não reflete seu papel de conteúdo secundário. Corrija o código usando a tag semântica correta para as cotações:",
            codigoInicial: "<main>\n  <article>\n    <h2>Mercado Cresce</h2>\n    <p>O setor impulsionou vagas.</p>\n  </article>\n  <section class=\"barra-lateral\">\n    <h3>Cotações do Dia</h3>\n    <p>Dólar: R$ 5,00</p>\n  </section>\n</main>",
            correta: "<main>\n  <article>\n    <h2>Mercado Cresce</h2>\n    <p>O setor impulsionou vagas.</p>\n  </article>\n  <aside class=\"barra-lateral\">\n    <h3>Cotações do Dia</h3>\n    <p>Dólar: R$ 5,00</p>\n  </aside>\n</main>"
        },
        "Estrutura de Tabelas Simples (Table, Tr, Td)": {
            enunciado1: "Para criar uma linha em uma tabela e, em seguida, inserir um dado dentro dessa linha, quais tags devemos usar aninhadas, respectivamente?",
            opcoes: ["a) &lt;tr&gt; e &lt;td&gt;", "b) &lt;table&gt; e &lt;row&gt;", "c) &lt;td&gt; e &lt;tr&gt;", "d) &lt;tbody&gt; e &lt;th&gt;", "e) &lt;row&gt; e &lt;cell&gt;"],
            respostaMultipla: 0,
            enunciado2: "As tabelas no HTML são construídas eixo por eixo, sendo formadas primeiramente pelas linhas. Usamos a tag de 'table row' para definir a horizontal, e dentro dela colocamos as tags de 'table data' para preencher as células individuais.",
            questaoPratica: "Um aluno tentou listar o nome e a idade de duas pessoas, mas esqueceu de separar os dados nas linhas apropriadas, jogando todas as células juntas. Reescreva o código, envolvendo os dados de cada pessoa em sua própria linha separada:",
            codigoInicial: "<table>\n  <td>Ana</td>\n  <td>25 anos</td>\n  <td>Carlos</td>\n  <td>30 anos</td>\n</table>",
            correta: "<table>\n  <tr>\n    <td>Ana</td>\n    <td>25 anos</td>\n  </tr>\n  <tr>\n    <td>Carlos</td>\n    <td>30 anos</td>\n  </tr>\n</table>"
        },
        "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": {
            enunciado1: "Dentro da linha de cabeçalho de uma tabela, qual tag substitui o tradicional &lt;td&gt; para indicar que aquela célula é um título?",
            opcoes: ["a) &lt;tt&gt;", "b) &lt;title&gt;", "c) &lt;th&gt;", "d) &lt;tc&gt;", "e) &lt;tr&gt;"],
            respostaMultipla: 2,
            enunciado2: "Para organizar tabelas maiores, podemos dividi-las em cabeça (thead), corpo (tbody) e rodapé (tfoot). Para garantir a acessibilidade as células que rotulam colunas devem usar a tag de 'table header'.",
            questaoPratica: "A tabela de estoque abaixo mistura os títulos e os dados comuns na mesma semântica. Organize o código adicionando o thead e o tbody, e também altere as células da primeira linha para as tags de título corretas.",
            codigoInicial: "<table>\n  <tr>\n    <td>Produto</td>\n    <td>Quantidade</td>\n  </tr>\n  <tr>\n    <td>Teclado Mecânico</td>\n    <td>15</td>\n  </tr>\n</table>",
            correta: "<table>\n  <thead>\n    <tr>\n      <th>Produto</th>\n      <th>Quantidade</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Teclado Mecânico</td>\n      <td>15</td>\n    </tr>\n  </tbody>\n</table>"
        },
        "Formulários Básicos (Form, Input, Label)": {
            enunciado1: "Qual é a maneira correta de associar um rótulo (&lt;label&gt;) a um campo (&lt;input&gt;) específico?",
            opcoes: [
                "a) Colocando o atributo name no input igual ao texto do label.",
                "b) Usando o atributo for no label com o mesmo valor do id do input.",
                "c) Aninhando o input e o label dentro da mesma &lt;div&gt;.",
                "d) Usando o atributo id no label e a class no input.",
                "e) O navegador associa os dois automaticamente."
            ],
            respostaMultipla: 1,
            enunciado2: "Os formulários precisam da tag <form> para empacotar os dados. Conectar um rótulo ao seu campo correspondente através de seus atributos aumenta a área de clique e é obrigatório para pessoas que navegam via leitores de tela.",
            questaoPratica: "O formulário de login abaixo está usando <p> em vez das tags semânticas adequadas de rótulo. Substitua os parágrafos pelas tags corretas e faça a conexão lógica exigida utilizando os atributos de ID existentes.",
            codigoInicial: "<form action=\"/login\">\n  <p>Usuário:</p>\n  <input type=\"text\" id=\"username\">\n  <p>Senha:</p>\n  <input type=\"password\" id=\"senha\">\n  <button type=\"submit\">Entrar</button>\n</form>",
            correta: "<form action=\"/login\">\n  <label for=\"username\">Usuário:</label>\n  <input type=\"text\" id=\"username\">\n  <label for=\"senha\">Senha:</label>\n  <input type=\"password\" id=\"senha\">\n  <button type=\"submit\">Entrar</button>\n</form>"
        },
        "Tipos de Input (Text, Password, Email, Button)": {
            enunciado1: "Qual atributo type do &lt;input&gt; deve ser utilizado para criar um campo onde os caracteres digitados são substituídos por pontos negros ou asteriscos?",
            opcoes: ["a) hidden", "b) secret", "c) text", "d) password", "e) secure"],
            respostaMultipla: 3,
            enunciado2: "A tag genérica <input> altera drasticamente sua aparência e comportamento com base no atributo type.",
            questaoPratica: "Um iniciante construiu a interface de cadastro abaixo, mas usou o tipo de texto padrão para tudo. Como resultado, a senha do usuário será exibida em texto plano na tela. Corrija o tipo dos inputs no código base:",
            codigoInicial: "<form>\n  <label for=\"email\">E-mail pessoal:</label>\n  <input type=\"text\" id=\"email\" name=\"email\">\n  <label for=\"pwd\">Defina uma senha forte:</label>\n  <input type=\"text\" id=\"pwd\" name=\"pwd\">\n</form>",
            correta: "<form>\n  <label for=\"email\">E-mail pessoal:</label>\n  <input type=\"email\" id=\"email\" name=\"email\">\n  <label for=\"pwd\">Defina uma senha forte:</label>\n  <input type=\"password\" id=\"pwd\" name=\"pwd\">\n</form>"
        },
        "Seleções em Formulários (Radio, Checkbox, Select)": {
            enunciado1: "Se você precisa que o usuário escolha apenas uma forma de pagamento visível entre três opções possíveis, qual tipo de &lt;input&gt; é o mais adequado?",
            opcoes: ["a) checkbox", "b) radio", "c) range", "d) select com multiple", "e) button"],
            respostaMultipla: 1,
            enunciado2: "Para escolhas mutuamente exclusivas, usamos o botão de opção circular (radio). O detalhe crucial do radio é que todos os itens concorrentes devem compartilhar exatamente o mesmo valor em seu atributo name para que o navegador entenda que são opções do mesmo grupo.",
            questaoPratica: "Abaixo, o desenvolvedor quer que o usuário escolha seu período preferido para estudar, mas atualmente é possível marcar Manhã e Noite ao mesmo tempo. Adicione o atributo que une essas opções em um grupo exclusivo (nome do grupo: 'turno'):",
            codigoInicial: "<p>Qual turno você prefere?</p>\n<input type=\"radio\" id=\"manha\" value=\"manha\">\n<label for=\"manha\">Manhã</label>\n<input type=\"radio\" id=\"noite\" value=\"noite\">\n<label for=\"noite\">Noite</label>",
            correta: "<p>Qual turno você prefere?</p>\n<input type=\"radio\" id=\"manha\" name=\"turno\" value=\"manha\">\n<label for=\"manha\">Manhã</label>\n<input type=\"radio\" id=\"noite\" name=\"turno\" value=\"noite\">\n<label for=\"noite\">Noite</label>"
        },
        "Validação Nativa de Formulários": {
            enunciado1: "Qual atributo booleano obriga o usuário a preencher um campo específico antes de permitir que o navegador envie os dados?",
            opcoes: ["a) mandatory", "b) validate", "c) required", "d) not-null", "e) important"],
            respostaMultipla: 2,
            enunciado2: "O HTML5 trouxe várias ferramentas para pré-validar os dados nativamente no navegador do cliente, poupando trabalho do JavaScript. Além de forçar o preenchimento, podemos definir limites de tamanho.",
            questaoPratica: "Um sistema solicita ao usuário um código que possui um limite estrito. Adicione atributos de validação nativa à tag input abaixo para torná-la de preenchimento obrigatório e com o tamanho máximo travado em 8 caracteres:",
            codigoInicial: "<form action=\"/aplicar-desconto\">\n  <label for=\"cupom\">Insira seu Cupom:</label>\n  <input type=\"text\" id=\"cupom\" name=\"cupom\">\n  <button type=\"submit\">Aplicar</button>\n</form>",
            correta: "<form action=\"/aplicar-desconto\">\n  <label for=\"cupom\">Insira seu Cupom:</label>\n  <input type=\"text\" id=\"cupom\" name=\"cupom\" required maxlength=\"8\">\n  <button type=\"submit\">Aplicar</button>\n</form>"
        },
        "Introdução à Acessibilidade (Atributos ARIA)": {
            enunciado1: "Qual é o objetivo central de adicionar atributos como aria-label ou aria-hidden aos elementos do HTML?",
            opcoes: [
                "a) Modificar a aparência visual complexa sem CSS.",
                "b) Aumentar a segurança contra invasões.",
                "c) Fornecer contexto adicional para tecnologias assistivas, como leitores de tela.",
                "d) Fazer com que os scripts carreguem de forma assíncrona.",
                "e) Forçar a retrocompatibilidade do layout."
            ],
            respostaMultipla: 2,
            enunciado2: "Os atributos ARIA atuam como 'legendas invisíveis'. Por exemplo, o atributo aria-label serve para dizer ao leitor de tela exatamente qual ação aquele botão faz quando o conteúdo interno dele não é texto explícito.",
            questaoPratica: "Foi criado um botão para fechar a aba usando apenas a letra 'X'. Contudo, um usuário cego ouvirá apenas 'botão xis'. Adicione o atributo ARIA que resolve este problema, dando a este botão o nome descritivo 'Fechar painel de avisos':",
            codigoInicial: "<div class=\"aviso-sistema\">\n  <p>Aviso: O sistema entrará em manutenção amanhã.</p>\n  <button class=\"btn-fechar\">X</button>\n</div>",
            correta: "<div class=\"aviso-sistema\">\n  <p>Aviso: O sistema entrará em manutenção amanhã.</p>\n  <button class=\"btn-fechar\" aria-label=\"Fechar painel de avisos\">X</button>\n</div>"
        },
        "A tag <dialog> (Modais Nativos)": {
            enunciado1: "Qual elemento do HTML5 foi criado especificamente para facilitar a construção de janelas modais nativas?",
            opcoes: ["a) &lt;popup&gt;", "b) &lt;modal&gt;", "c) &lt;window&gt;", "d) &lt;dialog&gt;", "e) &lt;alert&gt;"],
            respostaMultipla: 3,
            enunciado2: "A nova tag semântica de diálogo resolve o problema de criar modais. Durante o desenvolvimento, basta adicionar um atributo booleano diretamente no HTML para forçá-la a aparecer aberta na tela.",
            questaoPratica: "Um desenvolvedor escreveu a estrutura de um modal no código, mas o modal nem aparece na interface. Insira o atributo booleano correto na tag de abertura para que este elemento seja renderizado visível na tela sem a necessidade do JavaScript.",
            codigoInicial: "<dialog id=\"modal-confirmacao\">\n  <h2>Tem certeza?</h2>\n  <p>Esta ação não pode ser desfeita.</p>\n  <button>Cancelar</button>\n  <button>Sim, Excluir</button>\n</dialog>",
            correta: "<dialog id=\"modal-confirmacao\" open>\n  <h2>Tem certeza?</h2>\n  <p>Esta ação não pode ser desfeita.</p>\n  <button>Cancelar</button>\n  <button>Sim, Excluir</button>\n</dialog>"
        }
    },
    avancado: {}
};
