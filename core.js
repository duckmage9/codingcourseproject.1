function switchMode(mode) {
    document.querySelectorAll('.mode-view').forEach(view => {
        view.classList.remove('active-view');
    });
    document.querySelectorAll('.master-btn').forEach(btn => {
        btn.classList.remove('active-master');
    });
    const targetView = document.getElementById(`modo-${mode}`);
    const targetBtn = document.getElementById(`nav-${mode}`);
    if (targetView && targetBtn) {
        targetView.classList.add('active-view');
        targetBtn.classList.add('active-master');
    }
}

function openModal(id, content) {
    const modal = document.getElementById(id);
    const body = document.getElementById(`${id}-body`);
    if (body) body.innerHTML = content;
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Única forma de sair: Clicando na área escura (overlay)
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal(event.target.id);
    }
}
