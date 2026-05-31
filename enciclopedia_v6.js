/* * ARQUIVO: enciclopedia.js 
 * Este arquivo controla a lógica de exibição dos conteúdos
 */
console.log("O FICHEIRO ESTÁ A SER LIDO PELO NAVEGADOR!");

const db = {
    html: {
        iniciante: ["Conceito de Tags", "Estrutura Global", "Tags de Texto", "Meta Tags Técnicas", "Atributos e IDs", "Links e Navegação", "Listas de Inventário", "Inserção de Mídia", "Containers Div", "Comentários de Código"],
        intermediario: ["Elementos Semânticos (Header, Nav, Footer)", "Seções de Conteúdo (Section, Article, Aside)", "Estrutura de Tabelas Simples (Table, Tr, Td)", "Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)", "Formulários Básicos (Form, Input, Label)", "Tipos de Input (Text, Password, Email, Button)", "Seleções em Formulários (Radio, Checkbox, Select)", "Validação Nativa de Formulários", "Introdução à Acessibilidade (Atributos ARIA)", "A tag <dialog> (Modais Nativos)"],
        avancado: ["A tag <canvas> (O Palco dos Jogos)", "SVG inline (<svg> e <path>)", "Imagens Responsivas (<picture> e srcset)", "Áudios Avançados (Atributos e Eventos de <audio>)", "Pré-carregamento de Assets (preload e prefetch)", "Iframe Avançado (<iframe> e Sandbox)", "Manipulação de Templates (<template> e <slot>)", "Armazenamento no Navegador (O papel técnico do HTML5)", "Componentes Web Nativos (Custom Elements)", "Acessibilidade de Teclado Avançada (tabindex e Foco)"]
    },
    js: { 
        iniciante: ["Variáveis e Constantes (let e const)", "Tipos de Dados Essenciais", "Operadores Matemáticos e Lógicos", "Estruturas Condicionais (if, else, else if)", "Estruturas de Repetição (for e while)", "Introdução às Funções", "Arrays Simples (Listas)", "Objetos Básicos (Chave e Valor)", "Manipulação Básica do DOM (getElementById)", "Eventos de Teclado e Mouse (addEventListener)"], 
        intermediario: ["O Game Loop e requestAnimationFrame", "Delta Time (Movimento Suave)", "Classes e Construtores (POO)", "Física de Pulo e Gravidade", "Colisão Retangular (AABB)", "Animação e Spritesheets", "Controle de Estados Simples", "Vetores e Movimentação 2D", "Arrays e Gerenciamento de Entidades", "Modularização (Módulos JS)"], 
        avancado: ["Callbacks e Event Loop", "Promises (Promessas)", "Async / Await", "Recursividade", "Manipulação Avançada de Objetos", "APIs e Fetch", "Bitwise Operators (Operadores de Bit)", "Regular Expressions (Regex)", "Memory Management (Garbage Collector)", "Design Patterns (Padrões de Projeto)"] 
    }
};

// Função principal de renderização
function renderizarConteudo(tecnologia, nivel, topico) {
    const container = document.getElementById("conteudo-principal");
    if (!container) return;

    let dados = (tecnologia === 'html') ? window.conteudosHTML : window.conteudosJS;
    
    if (dados && dados[topico]) {
        container.innerHTML = `<h2>${topico}</h2>${dados[topico]}`;
    } else {
        container.innerHTML = `<h2>Erro</h2><p>Conteúdo não encontrado para: ${topico}</p>`;
    }
}

// Função para gerar o menu lateral ou grid
function renderGrid(tecnologia, nivel) {
    const grid = document.getElementById("grid-conteudos");
    if (!grid) return;

    grid.innerHTML = ""; // Limpa anterior
    const lista = db[tecnologia][nivel];

    lista.forEach(topico => {
        const card = document.createElement("div");
        card.className = "card-topico";
        card.innerText = topico;
        card.onclick = () => renderizarConteudo(tecnologia, nivel, topico);
        grid.appendChild(card);
    });
}

// Sistema de segurança: Espera os dados carregarem antes de rodar
function iniciarMotor() {
    console.log("Verificando dados...");
    
    // Verifica se os objetos globais existem
    const dadosCarregados = (typeof window.conteudosHTML !== 'undefined') && 
                            (typeof window.conteudosJS !== 'undefined');

    if (dadosCarregados) {
        console.log("Dados encontrados! Montando interface...");
        // Exemplo: Carrega o primeiro tópico do JS Iniciante por padrão
        renderGrid('js', 'iniciante');
    } else {
        console.warn("Dados ainda não carregaram. Retentando...");
        setTimeout(iniciarMotor, 200); // Tenta novamente em 200ms
    }
}

// Inicia assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', iniciarMotor);
