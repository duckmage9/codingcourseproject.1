// Alterna entre Enciclopédia e Treinamento
function switchMode(mode) {
    // Esconde todas as views
    document.querySelectorAll('.mode-view').forEach(view => {
        view.classList.remove('active-view');
    });

    // Remove estado ativo dos botões mestres
    document.querySelectorAll('.master-btn').forEach(btn => {
        btn.classList.remove('active-master');
    });

    // Ativa a view e o botão selecionado
    document.getElementById(`modo-${mode}`).classList.add('active-view');
    document.getElementById(`nav-${mode}`).classList.add('active-master');
}

// Funções de Modal Universais
function openModal(id, content) {
    const modal = document.getElementById(id);
    const body = document.getElementById(`${id}-body`);
    
    if (body && content) {
        body.innerHTML = content;
    }
    
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Trava o scroll do fundo
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Destrava o scroll
    }
}

// Fecha modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
