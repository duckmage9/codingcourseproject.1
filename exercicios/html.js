// ==========================================
// BANCO DE DADOS DE EXERCÍCIOS: HTML
// ==========================================
// Estrutura:
// enunciado: Texto e instruções que aparecem para o aluno.
// codigoInicial: O código preenchido na caixa de texto.
// correta: A string exata que o sistema usará para validar se o aluno acertou.

window.exerciciosHTML = {
    // ---------------------------------------------------------
    // NÍVEL INICIANTE
    // ---------------------------------------------------------
    iniciante: {
        "Conceito de Tags": {
            enunciado: "<p>Um desenvolvedor iniciante tentou criar um botão e um parágrafo na tela, mas o layout quebrou e o navegador não está interpretando o final dos elementos corretamente. Analise o código base abaixo, identifique o erro comum na sintaxe das tags e reescreva o código da maneira correta:</p>",
            codigoInicial: "<button>Clique em mim<button>\n<p>Este é um texto de aviso importante.<p>",
            correta: "<button>Clique em mim</button>\n<p>Este é um texto de aviso importante.</p>"
        },
        "Estrutura Global": {
            enunciado: "<p>Você recebeu o código abaixo de um colega que está aprendendo HTML. O texto está aparecendo na tela, mas a página está mal estruturada, misturando a área de configurações com a área visível, o que vai prejudicar o SEO e o carregamento de scripts no futuro. Corrija a estrutura global:</p>",
            codigoInicial: "<!DOCTYPE html>\n<html>\n  <body>\n    <title>Minha Primeira Página</title>\n  </body>\n  <head>\n    <h1>Bem-vindo ao meu site!</h1>\n    <p>Aqui você encontrará meu portfólio.</p>\n  </head>\n</html>",
            correta: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Minha Primeira Página</title>\n  </head>\n  <body>\n    <h1>Bem-vindo ao meu site!</h1>\n    <p>Aqui você encontrará meu portfólio.</p>\n  </body>\n</html>"
        },
        "Tags de Texto": {
            enunciado: "<p>O código abaixo tem a intenção de exibir um título secundário (nível 2) e um parágrafo logo abaixo dele. No entanto, o programador cometeu um erro de cruzamento de tags (fechando as tags na ordem errada), o que é um erro clássico. Reescreva o código fechando os elementos na ordem correta:</p>",
            codigoInicial: "<h2>O que é o Universo?<p>O universo é tudo o que existe, incluindo espaço, tempo e matéria.</h2></p>",
            correta: "<h2>O que é o Universo?</h2>\n<p>O universo é tudo o que existe, incluindo espaço, tempo e matéria.</p>"
        },
        "Meta Tags Técnicas": {
            enunciado: "<p>Um desenvolvedor criou uma página simples em português, mas os usuários estão reclamando que a palavra 'Configurações' está aparecendo como 'ConfiguraÃ§Ãµes'. O código base está incompleto. Adicione a linha de código exata (a meta tag de charset) que está faltando dentro da estrutura apropriada para resolver este problema:</p>",
            codigoInicial: "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n    <title>Painel de Controle</title>\n    \n</head>\n<body>\n    <h1>Configurações do Usuário</h1>\n</body>\n</html>",
            correta: "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n    <title>Painel de Controle</title>\n    <meta charset=\"UTF-8\">\n</head>\n<body>\n    <h1>Configurações do Usuário</h1>\n</body>\n</html>"
        },
        "Atributos e IDs": {
            enunciado: "<p>No sistema abaixo, temos três caixas de alerta diferentes. O desenvolvedor tentou dar identificadores para elas, mas cometeu um erro lógico conceitual grave sobre o uso de IDs, o que fará o JavaScript falhar. Corrija o código atribuindo IDs únicos para cada caixa de alerta (ex: alerta-sucesso, alerta-aviso, alerta-erro):</p>",
            codigoInicial: "<div id=\"caixa-alerta\">\n  <p>Sucesso: Usuário cadastrado!</p>\n</div>\n<div id=\"caixa-alerta\">\n  <p>Aviso: Verifique seu e-mail.</p>\n</div>\n<div id=\"caixa-alerta\">\n  <p>Erro: Senha incorreta.</p>\n</div>",
            correta: "<div id=\"alerta-sucesso\">\n  <p>Sucesso: Usuário cadastrado!</p>\n</div>\n<div id=\"alerta-aviso\">\n  <p>Aviso: Verifique seu e-mail.</p>\n</div>\n<div id=\"alerta-erro\">\n  <p>Erro: Senha incorreta.</p>\n</div>"
        },
        "Links e Navegação": {
            enunciado: "<p>Um iniciante quis colocar um link para o Google na sua página pessoal. O texto está aparecendo na tela, mas ele não é clicável e não leva a lugar nenhum porque o código base está incompleto. Altere a tag abaixo para transformá-la em um link funcional para <b>https://www.google.com</b>:</p>",
            codigoInicial: "<p>Para fazer uma pesquisa, visite o <a>Google</a>.</p>",
            correta: "<p>Para fazer uma pesquisa, visite o <a href=\"https://www.google.com\">Google</a>.</p>"
        },
        "Listas de Inventário": {
            enunciado: "<p>O código abaixo deveria mostrar os equipamentos do personagem em forma de lista pontilhada (não ordenada). No entanto, o programador usou a tag que gera números em vez de pontos, e esqueceu de envolver os itens de texto com a tag correta de lista. Corrija o código:</p>",
            codigoInicial: "<h3>Inventário do Herói:</h3>\n<ol>\n  Espada de Ferro\n  Escudo de Madeira\n  Poção de Vida\n</ol>",
            correta: "<h3>Inventário do Herói:</h3>\n<ul>\n  <li>Espada de Ferro</li>\n  <li>Escudo de Madeira</li>\n  <li>Poção de Vida</li>\n</ul>"
        },
        "Inserção de Mídia": {
            enunciado: "<p>O trecho de código abaixo tenta carregar a foto do perfil. O programador confundiu o atributo usado para puxar o arquivo da imagem e também esqueceu de adicionar o texto alternativo essencial para acessibilidade. Identifique os erros e corrija a tag da imagem:</p>",
            codigoInicial: "<div class=\"perfil\">\n  <h2>Foto de Perfil</h2>\n  <img href=\"foto-usuario-01.jpg\" title=\"Foto do Usuário\">\n</div>",
            correta: "<div class=\"perfil\">\n  <h2>Foto de Perfil</h2>\n  <img src=\"foto-usuario-01.jpg\" alt=\"Foto do Usuário\">\n</div>"
        },
        "Containers Div": {
            enunciado: "<p>O programador quer agrupar a foto e os dados de um membro da equipe em um bloco. Ele utilizou a tag genérica <code>&lt;span&gt;</code>, que é inline, o que faz com que o layout quebre. Substitua pela tag de container correta (de bloco):</p>",
            codigoInicial: "<span class=\"cartao-equipe\">\n  <img src=\"membro.png\" alt=\"Foto do membro\">\n  <h2>Carlos Silva</h2>\n  <p>Desenvolvedor Front-end</p>\n</span>",
            correta: "<div class=\"cartao-equipe\">\n  <img src=\"membro.png\" alt=\"Foto do membro\">\n  <h2>Carlos Silva</h2>\n  <p>Desenvolvedor Front-end</p>\n</div>"
        },
        "Comentários de Código": {
            enunciado: "<p>O desenvolvedor quis esconder o botão de deletar conta temporariamente. Ele tentou comentar o código HTML usando a sintaxe da linguagem JavaScript (//), o que resultou em erro na tela. Aplique a sintaxe correta de comentário HTML no botão:</p>",
            codigoInicial: "<div class=\"configuracoes-perigo\">\n  <h3>Zona de Perigo</h3>\n  // <button class=\"btn-vermelho\">Deletar Conta</button>\n</div>",
            correta: "<div class=\"configuracoes-perigo\">\n  <h3>Zona de Perigo</h3>\n  \n</div>"
        }
    },

    // ---------------------------------------------------------
    // NÍVEL INTERMEDIÁRIO
    // ---------------------------------------------------------
    intermediario: {
        "Elementos Semânticos (Header, Nav, Footer)": {
            enunciado: "<p>Um iniciante tentou estruturar o topo do seu portfólio usando apenas caixas genéricas (<div>), perdendo todo o valor semântico para o SEO. Reescreva o código base abaixo substituindo as <div> pelas tags semânticas apropriadas para cabeçalho e navegação.</p>",
            codigoInicial: "<div id=\"cabecalho\">\n  <h1>Meu Portfólio</h1>\n  <div id=\"menu-principal\">\n    <a href=\"/home\">Início</a>\n    <a href=\"/projetos\">Projetos</a>\n  </div>\n</div>",
            correta: "<header>\n  <h1>Meu Portfólio</h1>\n  <nav>\n    <a href=\"/home\">Início</a>\n    <a href=\"/projetos\">Projetos</a>\n  </nav>\n</header>"
        },
        "Seções de Conteúdo (Section, Article, Aside)": {
            enunciado: "<p>O layout de uma página tem a reportagem principal e uma barra lateral com cotações. O desenvolvedor usou a tag <code>&lt;section&gt;</code> para a barra lateral, o que não reflete seu papel de conteúdo secundário periférico. Corrija o código usando a tag semântica correta para as cotações:</p>",
            codigoInicial: "<main>\n  <article>\n    <h2>Mercado de Tecnologia Cresce</h2>\n    <p>O setor impulsionou vagas.</p>\n  </article>\n  \n  <section class=\"barra-lateral\">\n    <h3>Cotações do Dia</h3>\n    <p>Dólar: R$ 5,00</p>\n  </section>\n</main>",
            correta: "<main>\n  <article>\n    <h2>Mercado de Tecnologia Cresce</h2>\n    <p>O setor impulsionou vagas.</p>\n  </article>\n  \n  <aside class=\"barra-lateral\">\n    <h3>Cotações do Dia</h3>\n    <p>Dólar: R$ 5,00</p>\n  </aside>\n</main>"
        },
        "Estrutura de Tabelas Simples (Table, Tr, Td)": {
            enunciado: "<p>Um aluno tentou listar o nome e a idade de duas pessoas em uma tabela, mas esqueceu de separar os dados nas linhas apropriadas (Table Row), jogando todas as células juntas. Reescreva o código, envolvendo os dados de cada pessoa em sua própria linha separada:</p>",
            codigoInicial: "<table>\n  <td>Ana</td>\n  <td>25 anos</td>\n  <td>Carlos</td>\n  <td>30 anos</td>\n</table>",
            correta: "<table>\n  <tr>\n    <td>Ana</td>\n    <td>25 anos</td>\n  </tr>\n  <tr>\n    <td>Carlos</td>\n    <td>30 anos</td>\n  </tr>\n</table>"
        },
        "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)": {
            enunciado: "<p>A tabela de estoque abaixo mistura os títulos e os dados comuns na mesma semântica. Organize o código adicionando o grupo semântico de cabeçalho (<code>&lt;thead&gt;</code>) e o grupo de corpo (<code>&lt;tbody&gt;</code>), e altere as células da primeira linha para as tags de título corretas (<code>&lt;th&gt;</code>).</p>",
            codigoInicial: "<table>\n  <tr>\n    <td>Produto</td>\n    <td>Quantidade</td>\n  </tr>\n  <tr>\n    <td>Teclado Mecânico</td>\n    <td>15</td>\n  </tr>\n</table>",
            correta: "<table>\n  <thead>\n    <tr>\n      <th>Produto</th>\n      <th>Quantidade</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Teclado Mecânico</td>\n      <td>15</td>\n    </tr>\n  </tbody>\n</table>"
        },
        "Formulários Básicos (Form, Input, Label)": {
            enunciado: "<p>O formulário abaixo está usando <code>&lt;p&gt;</code> em vez das tags semânticas de rótulo (<code>&lt;label&gt;</code>). Substitua os parágrafos pelas tags corretas e faça a conexão lógica com os campos utilizando os atributos de ID existentes (usando o atributo for).</p>",
            codigoInicial: "<form action=\"/login\">\n  <p>Usuário:</p>\n  <input type=\"text\" id=\"username\">\n  \n  <p>Senha:</p>\n  <input type=\"password\" id=\"senha\">\n  \n  <button type=\"submit\">Entrar</button>\n</form>",
            correta: "<form action=\"/login\">\n  <label for=\"username\">Usuário:</label>\n  <input type=\"text\" id=\"username\">\n  \n  <label for=\"senha\">Senha:</label>\n  <input type=\"password\" id=\"senha\">\n  \n  <button type=\"submit\">Entrar</button>\n</form>"
        },
        "Tipos de Input (Text, Password, Email, Button)": {
            enunciado: "<p>Um iniciante construiu a interface abaixo, mas usou o tipo de texto padrão para tudo. Como resultado, a senha será exibida e o teclado de e-mail não será otimizado. Corrija os atributos type dos inputs:</p>",
            codigoInicial: "<form>\n  <label for=\"email\">E-mail pessoal:</label>\n  <input type=\"text\" id=\"email\" name=\"email\">\n  \n  <label for=\"pwd\">Defina uma senha forte:</label>\n  <input type=\"text\" id=\"pwd\" name=\"pwd\">\n</form>",
            correta: "<form>\n  <label for=\"email\">E-mail pessoal:</label>\n  <input type=\"email\" id=\"email\" name=\"email\">\n  \n  <label for=\"pwd\">Defina uma senha forte:</label>\n  <input type=\"password\" id=\"pwd\" name=\"pwd\">\n</form>"
        },
        "Seleções em Formulários (Radio, Checkbox, Select)": {
            enunciado: "<p>O desenvolvedor quer que o usuário escolha o turno preferido (opção única exclusiva), mas atualmente é possível marcar Manhã e Noite ao mesmo tempo. Adicione o atributo <code>name</code> (com o valor 'turno' para ambos) nos inputs para agrupar as opções.</p>",
            codigoInicial: "<p>Qual turno você prefere?</p>\n<input type=\"radio\" id=\"manha\" value=\"manha\">\n<label for=\"manha\">Manhã</label>\n<input type=\"radio\" id=\"noite\" value=\"noite\">\n<label for=\"noite\">Noite</label>",
            correta: "<p>Qual turno você prefere?</p>\n<input type=\"radio\" id=\"manha\" name=\"turno\" value=\"manha\">\n<label for=\"manha\">Manhã</label>\n<input type=\"radio\" id=\"noite\" name=\"turno\" value=\"noite\">\n<label for=\"noite\">Noite</label>"
        },
        "Validação Nativa de Formulários": {
            enunciado: "<p>Um sistema solicita um cupom que possui um limite, mas os usuários conseguem enviar vazio ou com textos enormes. Adicione os atributos de validação à tag input abaixo para torná-la de preenchimento obrigatório e com tamanho máximo de 8 caracteres.</p>",
            codigoInicial: "<form action=\"/aplicar\">\n  <label for=\"cupom\">Insira seu Cupom:</label>\n  <input type=\"text\" id=\"cupom\" name=\"cupom\">\n  <button type=\"submit\">Aplicar</button>\n</form>",
            correta: "<form action=\"/aplicar\">\n  <label for=\"cupom\">Insira seu Cupom:</label>\n  <input type=\"text\" id=\"cupom\" name=\"cupom\" required maxlength=\"8\">\n  <button type=\"submit\">Aplicar</button>\n</form>"
        },
        "Introdução à Acessibilidade (Atributos ARIA)": {
            enunciado: "<p>Foi criado um botão usando apenas 'X'. Um usuário cego ouvirá apenas 'botão xis'. Adicione o atributo ARIA adequado no botão (aria-label) dando a ele a instrução 'Fechar painel de avisos':</p>",
            codigoInicial: "<div class=\"aviso-sistema\">\n  <p>Aviso: O sistema entrará em manutenção amanhã.</p>\n  <button class=\"btn-fechar\">X</button>\n</div>",
            correta: "<div class=\"aviso-sistema\">\n  <p>Aviso: O sistema entrará em manutenção amanhã.</p>\n  <button class=\"btn-fechar\" aria-label=\"Fechar painel de avisos\">X</button>\n</div>"
        },
        "A tag <dialog> (Modais Nativos)": {
            enunciado: "<p>O desenvolvedor escreveu a estrutura de um modal (janela de confirmação). No entanto, o modal nem aparece. Insira o atributo booleano que o mantém permanentemente aberto diretamente na tag <code>&lt;dialog&gt;</code> para visualização e testes.</p>",
            codigoInicial: "<dialog id=\"modal-confirmacao\">\n  <h2>Tem certeza?</h2>\n  <p>Esta ação não pode ser desfeita.</p>\n  <button>Cancelar</button>\n  <button>Sim, Excluir</button>\n</dialog>",
            correta: "<dialog id=\"modal-confirmacao\" open>\n  <h2>Tem certeza?</h2>\n  <p>Esta ação não pode ser desfeita.</p>\n  <button>Cancelar</button>\n  <button>Sim, Excluir</button>\n</dialog>"
        }
    },

    // ---------------------------------------------------------
    // NÍVEL AVANÇADO (Trabalho em Progresso)
    // ---------------------------------------------------------
    avancado: {}
};
