// Alterna entre Enciclopédia e Treinamento
function switchMode(mode) {
    // Esconder todas as seções
    document.querySelectorAll('.mode-view').forEach(view => {
        view.classList.remove('active-view');
    });

    // Resetar botões de navegação
    document.querySelectorAll('.master-btn').forEach(btn => {
        btn.classList.remove('active-master');
    });

    // Mostrar seção atual e ativar botão
    const targetView = document.getElementById(`modo-${mode}`);
    const targetBtn = document.getElementById(`nav-${mode}`);
    
    if (targetView && targetBtn) {
        targetView.classList.add('active-view');
        targetBtn.classList.add('active-master');
    }
}

// Funções de Modal Universais
function openModal(id, content) {
    const modal = document.getElementById(id);
    const body = document.getElementById(`${id}-body`);
    
    if (body) body.innerHTML = content;
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

// FECHAR COM A TECLA "ESC"
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        // Busca qualquer modal que esteja visível (display: block) e fecha
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                closeModal(modal.id);
            }
        });
    }
});

// Fechar modal ao clicar fora da caixa de conteúdo
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal(event.target.id);
    }
}
