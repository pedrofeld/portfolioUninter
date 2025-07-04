// função para alternar menu na versão mobile
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
    console.log('Menu toggled');
}

/*
// função para abrir e fechar modais
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
*/