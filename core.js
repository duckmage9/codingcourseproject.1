// Gerenciador de Abas (Enciclopédia / Treinamento)
function switchMode(mode) {
    // Esconde todas as visualizações
    document.querySelectorAll('.mode-view').forEach(view => {
        view.classList.remove('active-view');
    });

    // Desativa todos os botões mestres
    document.querySelectorAll('.master-btn').forEach(btn => {
        btn.classList.remove('active-master');
    });

    // Ativa a visualização e o botão selecionado
    const targetView = document.getElementById(`modo-${mode}`);
    const targetBtn = document.getElementById(`nav-${mode}`);
    
    if (targetView && targetBtn) {
        targetView.classList.add('active-view');
        targetBtn.classList.add('active-master');
    }
}

// Funções de Modal (Pop-up)
function openModal(id, content) {
    const modal = document.getElementById(id);
    const body = document.getElementById(`${id}-body`);
    
    if (body) body.innerHTML = content;
    
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Impede o scroll do fundo
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Reativa o scroll
    }
}

// Única forma de sair: Clicando na área escura (overlay)
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal(event.target.id);
    }
}
