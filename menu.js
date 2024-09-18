const btnMobile = document.querySelector('.menu-mobile');
const content = document.querySelector('.link-menu');
const cartMenu = document.querySelector('.cart-menu');


// const btnMobile = document.querySelector('.menu-mobile');
// const content = document.querySelector('.menu-links');
// const cartMenu = document.querySelector('.cart-modal');

// Abre ou fecha o menu
function toggleMenu() {
    const isMenuOpen = content.classList.contains('active');

    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

// Abre o menu
function openMenu() {
    content.classList.add('active');
    cartMenu.classList.add('active');
}

// Fecha o menu
function closeMenu() {
    content.classList.remove('active');
    cartMenu.classList.remove('active');
}

// Fecha o menu ao clicar fora do conteúdo
function closeMenuOnClickOutside(event) {
    if (event.target === cartMenu) {
        closeMenu();
    }
}

// Evitar fechamento ao clicar dentro do conteúdo do modal
cartMenu.addEventListener('click', (event) => {
    event.stopPropagation();  // Evita fechamento ao clicar dentro do modal
});

btnMobile.addEventListener('click', toggleMenu);
cartMenu.addEventListener('click', closeMenuOnClickOutside);
