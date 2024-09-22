var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,  // Exibe 3 slides em telas maiores
    spaceBetween: 30,  // Espaço entre os slides
    grabCursor: true,  // Cursor de "mãozinha" ao arrastar
    pagination: {
        el: ".swiper-pagination",  // Paginação
        clickable: true,
    },
    breakpoints: {
        // Quando a tela for menor que 920px, exibe apenas 2 slides
        920: {
            slidesPerView: 3,  // Exibe 2 slides em dispositivos menores
            spaceBetween: 20,  // Espaço entre os slides reduzido
        },
        // Quando a tela for menor que 600px, exibe apenas 1 slide
        600: {
            slidesPerView: 2,  // Exibe 1 slide em telas pequenas
            spaceBetween: 10,  // Espaço entre os slides reduzido ainda mais
        }
    }
});