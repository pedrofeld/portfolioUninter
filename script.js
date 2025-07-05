// função para alternar menu na versão mobile
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
    console.log('Menu toggled');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block'; // mostra o modal
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none'; // esconde o modal
}

// fecha o modal quando clicar fora do conteúdo do modal
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none'; // esconde o modal
        }
    }
}