window.exerciciosHTML = {
    iniciante: {
        "Conceito de Tags": `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #38bdf8;">Enunciado 1</h3>
                <p>Identifique a sintaxe correta utilizada para abrir e fechar um elemento em um documento HTML.</p>
                <p><strong>Qual das alternativas abaixo representa corretamente a abertura e o fechamento de uma tag HTML?</strong></p>
                <ul class="lista-opcoes">
                    <li><input type="radio" name="q1"> a) [p]Meu parágrafo[/p]</li>
                    <li><input type="radio" name="q1"> b) &lt;p&gt;Meu parágrafo&lt;p&gt;</li>
                    <li><input type="radio" name="q1"> c) {p}Meu parágrafo{/p}</li>
                    <li><input type="radio" name="q1"> d) &lt;p&gt;Meu parágrafo&lt;/p&gt;</li>
                    <li><input type="radio" name="q1"> e) &lt;/p&gt;Meu parágrafo&lt;p&gt;</li>
                </ul>
            </div>
            <hr style="border-color: #1e293b; margin: 30px 0;">
            <div>
                <h3 style="color: #38bdf8;">Enunciado 2</h3>
                <p>Lembre-se de que a linguagem HTML utiliza sinais de "menor que" e "maior que" para definir o início de um elemento. O fechamento do elemento é idêntico à abertura, mas exige um caractere especial de barra oblíqua (/) logo após o sinal de "menor que".</p>
                <p><strong>Questão Principal:</strong> Um desenvolvedor iniciante tentou criar um botão e um parágrafo na tela, mas o layout quebrou e o navegador não está interpretando o final dos elementos corretamente. Analise o código base abaixo e reescreva da maneira correta:</p>
                <div class="code-block"><pre><code>&lt;button&gt;Clique em mim&lt;button&gt;&lt;p&gt;Este é um texto de aviso importante.&lt;p&gt;</code></pre></div>
                <textarea class="caixa-resposta" placeholder="Digite seu código corrigido aqui..."></textarea>
                <button class="btn-verificar">Verificar Resposta</button>
            </div>`,

        "Estrutura Global": `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #38bdf8;">Enunciado 1</h3>
                <p>Reconheça as tags fundamentais que compõem o "esqueleto" básico obrigatório de qualquer página web.</p>
                <p><strong>Qual é a tag raiz que envolve todo o conteúdo de uma página HTML (tanto as configurações invisíveis quanto o conteúdo visível)?</strong></p>
                <ul class="lista-opcoes">
                    <li><input type="radio" name="q2"> a) &lt;head&gt;</li>
                    <li><input type="radio" name="q2"> b) &lt;body&gt;</li>
                    <li><input type="radio" name="q2"> c) &lt;html&gt;</li>
                    <li><input type="radio" name="q2"> d) &lt;main&gt;</li>
                    <li><input type="radio" name="q2"> e) &lt;!DOCTYPE html&gt;</li>
                </ul>
            </div>
            <hr style="border-color: #1e293b; margin: 30px 0;">
            <div>
                <h3 style="color: #38bdf8;">Enunciado 2</h3>
                <p>As configurações invisíveis (como título da aba e links de estilo) ficam no "topo" da estrutura, enquanto tudo o que o usuário efetivamente vê na tela deve ficar dentro do "corpo".</p>
                <p><strong>Questão Principal:</strong> Você recebeu o código abaixo de um colega. O texto aparece na tela, mas a página está mal estruturada, misturando a área de configurações com a área visível. Corrija a estrutura global:</p>
                <div class="code-block"><pre><code>&lt;!DOCTYPE html&gt;&lt;html&gt;
  &lt;body&gt;
    &lt;title&gt;Minha Primeira Página&lt;/title&gt;
  &lt;/body&gt;
  &lt;head&gt;
    &lt;h1&gt;Bem-vindo ao meu site!&lt;/h1&gt;
    &lt;p&gt;Aqui você encontrará meu portfólio.&lt;/p&gt;
  &lt;/head&gt;&lt;/html&gt;</code></pre></div>
                <textarea class="caixa-resposta" placeholder="Reescreva a estrutura correta aqui..."></textarea>
                <button class="btn-verificar">Verificar Resposta</button>
            </div>`,

        "Tags de Texto": `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #38bdf8;">Enunciado 1</h3>
                <p>Selecione a tag mais apropriada para criar o título principal de uma página ou seção.</p>
                <p><strong>Para definir o título de maior importância (nível 1) em um documento HTML, qual tag deve ser utilizada?</strong></p>
                <ul class="lista-opcoes">
                    <li><input type="radio" name="q3"> a) &lt;title&gt;</li>
                    <li><input type="radio" name="q3"> b) &lt;header&gt;</li>
                    <li><input type="radio" name="q3"> c) &lt;strong&gt;</li>
                    <li><input type="radio" name="q3"> d) &lt;h1&gt;</li>
                    <li><input type="radio" name="q3"> e) &lt;h6&gt;</li>
                </ul>
            </div>
            <hr style="border-color: #1e293b; margin: 30px 0;">
            <div>
                <h3 style="color: #38bdf8;">Enunciado 2</h3>
                <p>A hierarquia de texto é crucial para a acessibilidade e para os motores de busca (SEO). Os títulos vão de nível 1 a 6.</p>
                <p><strong>Questão Principal:</strong> O código abaixo tem a intenção de exibir um título secundário (nível 2) e um parágrafo logo abaixo. No entanto, o programador cometeu um erro de cruzamento de tags. Reescreva fechando na ordem correta:</p>
                <div class="code-block"><pre><code>&lt;h2&gt;O que é o Universo?&lt;p&gt;O universo é tudo o que existe, incluindo espaço, tempo e matéria.&lt;/h2&gt;&lt;/p&gt;</code></pre></div>
                <textarea class="caixa-resposta" placeholder="Digite o código corrigido..."></textarea>
                <button class="btn-verificar">Verificar Resposta</button>
            </div>`,

        "Meta Tags Técnicas": `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #38bdf8;">Enunciado 1</h3>
                <p>Defina o propósito principal da tag usada para configurar a codificação de caracteres do documento.</p>
                <p><strong>Qual é a tag correta para garantir que caracteres especiais e acentos (como ç, á, ã) sejam exibidos corretamente?</strong></p>
                <ul class="lista-opcoes">
                    <li><input type="radio" name="q4"> a) &lt;meta name="viewport" content="width=device-width"&gt;</li>
                    <li><input type="radio" name="q4"> b) &lt;meta charset="UTF-8"&gt;</li>
                    <li><input type="radio" name="q4"> c) &lt;meta language="pt-br"&gt;</li>
                    <li><input type="radio" name="q4"> d) &lt;link rel="charset" href="UTF-8"&gt;</li>
                    <li><input type="radio" name="q4"> e) &lt;title charset="UTF-8"&gt;</li>
                </ul>
            </div>
            <hr style="border-color: #1e293b; margin: 30px 0;">
            <div>
                <h3 style="color: #38bdf8;">Enunciado 2</h3>
                <p>Para evitar que letras com acentos apareçam como símbolos estranhos, informamos ao HTML o padrão de codificação na seção invisível.</p>
                <p><strong>Questão Principal:</strong> Um desenvolvedor criou uma página, mas a palavra "Configurações" está aparecendo como "ConfiguraÃ§Ãµes". Adicione a linha de código exata que está faltando:</p>
                <div class="code-block"><pre><code>&lt;!DOCTYPE html&gt;&lt;html lang="pt-BR"&gt;&lt;head&gt;
    &lt;title&gt;Painel de Controle&lt;/title&gt;
    &lt;/head&gt;&lt;body&gt;
    &lt;h1&gt;Configurações do Usuário&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;</code></pre></div>
                <textarea class="caixa-resposta" placeholder="Reescreva o cabeçalho corrigido..."></textarea>
                <button class="btn-verificar">Verificar Resposta</button>
            </div>`,

        "Atributos e IDs": `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #38bdf8;">Enunciado 1</h3>
                <p>Escolha a alternativa que descreve corretamente a principal regra de uso do atributo id no HTML.</p>
                <p><strong>Sobre o atributo id, é correto afirmar que:</strong></p>
                <ul class="lista-opcoes">
                    <li><input type="radio" name="q5"> a) Ele pode ser usado múltiplas vezes com o mesmo valor na mesma página.</li>
                    <li><input type="radio" name="q5"> b) Ele serve exclusivamente para mudar a cor do texto.</li>
                    <li><input type="radio" name="q5"> c) Seu valor deve ser único e não pode se repetir em nenhum outro elemento da página.</li>
                    <li><input type="radio" name="q5"> d) Ele é obrigatório em todas as tags do HTML5.</li>
                    <li><input type="radio" name="q5"> e) Ele substitui a necessidade de usar classes.</li>
                </ul>
            </div>
            <hr style="border-color: #1e293b; margin: 30px 0;">
            <div>
                <h3 style="color: #38bdf8;">Enunciado 2</h3>
                <p>Atributos fornecem informações ou comportamentos adicionais. O atributo id funciona como o "CPF" de um elemento na página e deve ser exclusivo.</p>
                <p><strong>Questão Principal:</strong> No sistema abaixo, o desenvolvedor tentou dar identificadores para as caixas, mas cometeu um erro lógico grave. Corrija o código atribuindo IDs únicos ou substituindo por atributos de classe:</p>
                <div class="code-block"><pre><code>&lt;div id="caixa-alerta"&gt;
  &lt;p&gt;Sucesso: Usuário cadastrado!&lt;/p&gt;&lt;/div&gt;&lt;div id="caixa-alerta"&gt;
  &lt;p&gt;Aviso: Verifique seu e-mail.&lt;/p&gt;&lt;/div&gt;&lt;div id="caixa-alerta"&gt;
  &lt;p&gt;Erro: Senha incorreta.&lt;/p&gt;&lt;/div&gt;</code></pre></div>
                <textarea class="caixa-resposta" placeholder="Digite as tags corrigidas..."></textarea>
                <button class="btn-verificar">Verificar Resposta</button>
            </div>`,

        "Links e Navegação": `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #38bdf8;">Enunciado 1</h3>
                <p>Identifique a tag e o atributo necessários para criar um link clicável que direciona para outra página web.</p>
                <p><strong>Qual combinação de tag e atributo é utilizada para criar um hiperlink em HTML?</strong></p>
                <ul class="lista-opcoes">
                    <li><input type="radio" name="q6"> a) &lt;link src="url"&gt;</li>
                    <li><input type="radio" name="q6"> b) &lt;a href="url"&gt;</li>
                    <li><input type="radio" name="q6"> c) &lt;nav link="url"&gt;</li>
                    <li><input type="radio" name="q6"> d) &lt;href url="url"&gt;</li>
                    <li><input type="radio" name="q6"> e) &lt;a src="url"&gt;</li>
                </ul>
            </div>
            <hr style="border-color: #1e293b; margin: 30px 0;">
            <div>
                <h3 style="color: #38bdf8;">Enunciado 2</h3>
                <p>Para criar hiperlinks, usamos a tag âncora. A URL de destino é passada como valor de um atributo específico.</p>
                <p><strong>Questão Principal:</strong> O texto abaixo está aparecendo, mas não é clicável e não leva a lugar nenhum. Altere a tag para transformá-la em um link funcional para https://www.google.com:</p>
                <div class="code-block"><pre><code>&lt;p&gt;Para fazer uma pesquisa, visite o &lt;a&gt;Google&lt;/a&gt;.&lt;/p&gt;</code></pre></div>
                <textarea class="caixa-resposta" placeholder="Escreva a âncora correta..."></textarea>
                <button class="btn-verificar">Verificar Resposta</button>
            </div>`,

        "Listas de Inventário": `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #38bdf8;">Enunciado 1</h3>
                <p>Marque a opção correta que indica as tags utilizadas para criar uma lista com marcadores (lista não ordenada).</p>
                <p><strong>Para criar uma lista onde a ordem não tem importância (com "bolinhas" ao lado), utilizamos:</strong></p>
                <ul class="lista-opcoes">
                    <li><input type="radio" name="q7"> a) &lt;ol&gt; com filhos &lt;li&gt;</li>
                    <li><input type="radio" name="q7"> b) &lt;list&gt; com filhos &lt;item&gt;</li>
                    <li><input type="radio" name="q7"> c) &lt;ul&gt; com filhos &lt;ol&gt;</li>
                    <li><input type="radio" name="q7"> d) &lt;ul&gt; com filhos &lt;li&gt;</li>
                    <li><input type="radio" name="q7"> e) &lt;li&gt; com filhos &lt;ul&gt;</li>
                </ul>
            </div>
            <hr style="border-color: #1e293b; margin: 30px 0;">
            <div>
                <h3 style="color: #38bdf8;">Enunciado 2</h3>
                <p>O texto não deve ser jogado diretamente dentro da tag de lista; cada item individual deve ser envolvido por uma tag de item.</p>
                <p><strong>Questão Principal:</strong> O programador usou a tag que gera números em vez de pontos, e esqueceu de envolver os itens de texto com a tag correta, causando um erro. Corrija:</p>
                <div class="code-block"><pre><code>&lt;h3&gt;Inventário do Herói:&lt;/h3&gt;&lt;ol&gt;
  Espada de Ferro
  Escudo de Madeira
  Poção de Vida&lt;/ol&gt;</code></pre></div>
                <textarea class="caixa-resposta" placeholder="Monte a lista correta aqui..."></textarea>
                <button class="btn-verificar">Verificar Resposta</button>
            </div>`,

        "Inserção de Mídia": `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #38bdf8;">Enunciado 1</h3>
                <p>Determine qual é o atributo essencial para acessibilidade que deve acompanhar a inserção de imagens.</p>
                <p><strong>Qual atributo é obrigatório para fornecer um texto alternativo caso a imagem quebre ou para leitores de tela?</strong></p>
                <ul class="lista-opcoes">
                    <li><input type="radio" name="q8"> a) title</li>
                    <li><input type="radio" name="q8"> b) desc</li>
                    <li><input type="radio" name="q8"> c) caption</li>
                    <li><input type="radio" name="q8"> d) alt</li>
                    <li><input type="radio" name="q8"> e) src</li>
                </ul>
            </div>
            <hr style="border-color: #1e293b; margin: 30px 0;">
            <div>
                <h3 style="color: #38bdf8;">Enunciado 2</h3>
                <p>A tag de imagem é vazia e depende inteiramente de atributos para funcionar, precisando do caminho do arquivo e da acessibilidade.</p>
                <p><strong>Questão Principal:</strong> O programador confundiu o atributo de puxar o arquivo e esqueceu do texto alternativo. Corrija a tag da imagem:</p>
                <div class="code-block"><pre><code>&lt;div class="perfil"&gt;
  &lt;h2&gt;Foto de Perfil&lt;/h2&gt;
  &lt;img href="foto-usuario-01.jpg" title="Foto do Usuário"&gt;&lt;/div&gt;</code></pre></div>
                <textarea class="caixa-resposta" placeholder="Corrija a tag de imagem..."></textarea>
                <button class="btn-verificar">Verificar Resposta</button>
            </div>`,

        "Containers Div": `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #38bdf8;">Enunciado 1</h3>
                <p>Qual é a função primária e o comportamento padrão da tag &lt;div&gt; no HTML5?</p>
                <p><strong>A tag &lt;div&gt; é utilizada principalmente para:</strong></p>
                <ul class="lista-opcoes">
                    <li><input type="radio" name="q9"> a) Criar links de navegação horizontais.</li>
                    <li><input type="radio" name="q9"> b) Agrupar elementos em bloco para criar seções lógicas e aplicar estilos CSS.</li>
                    <li><input type="radio" name="q9"> c) Destacar um texto importante colocando-o em negrito.</li>
                    <li><input type="radio" name="q9"> d) Exibir caixas de diálogo interativas.</li>
                    <li><input type="radio" name="q9"> e) Substituir a tag form na coleta de dados.</li>
                </ul>
            </div>
            <hr style="border-color: #1e293b; margin: 30px 0;">
            <div>
                <h3 style="color: #38bdf8;">Enunciado 2</h3>
                <p>A tag de divisão é a "caixa" mais versátil do HTML, útil para agrupar outros elementos HTML (como imagens e botões) construindo o layout (bloco).</p>
                <p><strong>Questão Principal:</strong> O programador utilizou a tag genérica span (inline), que quebra ao tentar abraçar elementos de bloco grandes como h2. Substitua pela tag correta:</p>
                <div class="code-block"><pre><code>&lt;span class="cartao-equipe"&gt;
  &lt;img src="membro.png" alt="Foto do membro"&gt;
  &lt;h2&gt;Carlos Silva&lt;/h2&gt;
  &lt;p&gt;Desenvolvedor Front-end&lt;/p&gt;&lt;/span&gt;</code></pre></div>
                <textarea class="caixa-resposta" placeholder="Arrume o contêiner..."></textarea>
                <button class="btn-verificar">Verificar Resposta</button>
            </div>`,

        "Comentários de Código": `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #38bdf8;">Enunciado 1</h3>
                <p>Reconheça a sintaxe correta para esconder um texto ou desativar temporariamente um bloco de código no HTML.</p>
                <p><strong>Qual das opções abaixo representa um comentário válido na linguagem HTML?</strong></p>
                <ul class="lista-opcoes">
                    <li><input type="radio" name="q10"> a) // Este é um comentário</li>
                    <li><input type="radio" name="q10"> b) /* Este é um comentário */</li>
                    <li><input type="radio" name="q10"> c) # Este é um comentário</li>
                    <li><input type="radio" name="q10"> d) &lt;!-- Este é um comentário --&gt;</li>
                    <li><input type="radio" name="q10"> e) &lt;comment&gt; Este é um comentário &lt;/comment&gt;</li>
                </ul>
            </div>
            <hr style="border-color: #1e293b; margin: 30px 0;">
            <div>
                <h3 style="color: #38bdf8;">Enunciado 2</h3>
                <p>O navegador ignora tudo o que estiver envolto na sintaxe específica de comentário do HTML.</p>
                <p><strong>Questão Principal:</strong> Um botão estava causando erro. O desenvolvedor tentou comentar o código usando a sintaxe JavaScript, resultando nas barras aparecendo na tela. Aplique a sintaxe correta:</p>
                <div class="code-block"><pre><code>&lt;div class="configuracoes-perigo"&gt;
  &lt;h3&gt;Zona de Perigo&lt;/h3&gt;
  // &lt;button class="btn-vermelho"&gt;Deletar Conta&lt;/button&gt;&lt;/div&gt;</code></pre></div>
                <textarea class="caixa-resposta" placeholder="Faça o comentário correto do HTML..."></textarea>
                <button class="btn-verificar">Verificar Resposta</button>
            </div>`
    },
    intermediario: {},
    avancado: {}
};
