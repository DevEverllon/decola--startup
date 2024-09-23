const wrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
const paginationDots = document.querySelectorAll('.pagination-dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const slidesPerView = 3;
const totalSlides = slides.length;
let currentIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

function updateCarousel() {
    const offset = currentIndex * (100 / slidesPerView);
    wrapper.style.transform = `translateX(-${offset}%)`;

    paginationDots.forEach(dot => dot.classList.remove('active'));
    paginationDots[Math.floor(currentIndex / slidesPerView)].classList.add('active');
}

paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index * slidesPerView;
        updateCarousel();
    });
});

wrapper.addEventListener('mousedown', dragStart);
wrapper.addEventListener('touchstart', dragStart);
wrapper.addEventListener('mouseup', dragEnd);
wrapper.addEventListener('mouseleave', dragEnd);
wrapper.addEventListener('touchend', dragEnd);
wrapper.addEventListener('mousemove', dragMove);
wrapper.addEventListener('touchmove', dragMove);

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function dragStart(event) {
    isDragging = true;
    startPos = getPositionX(event);
    wrapper.classList.add('grabbing');
}

function dragMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
        wrapper.style.transform = `translateX(${currentTranslate}px)`;
    }
}

function dragEnd() {
    isDragging = false;
    wrapper.classList.remove('grabbing');

    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < totalSlides - slidesPerView) {
        currentIndex++;
    } else if (movedBy > 100 && currentIndex > 0) {
        currentIndex--;
    }

    setPositionByIndex();
}

function setPositionByIndex() {
    currentTranslate = currentIndex * (-window.innerWidth / slidesPerView);
    prevTranslate = currentTranslate;
    updateCarousel();
}

nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - slidesPerView) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - slidesPerView;
    }
    updateCarousel();
});

updateCarousel();

// const wrapper = document.querySelector('.carousel-wrapper');
// const slides = document.querySelectorAll('.carousel-slide');
// const paginationDots = document.querySelectorAll('.pagination-dot');

// const slidesPerView = 3;
// const totalSlides = slides.length;
// let currentIndex = 0;
// let isDragging = false;
// let startPos = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;
let animationID;

// Função otimizada de drag (movimento ao arrastar)
function dragStart(event) {
    isDragging = true;
    startPos = getPositionX(event);
    wrapper.classList.add('grabbing');
    animationID = requestAnimationFrame(animation); // Anima o movimento enquanto o mouse está sendo arrastado
}

function dragMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;

        // Limita o arraste ao início e fim dos slides
        const maxTranslate = -(totalSlides - slidesPerView) * (window.innerWidth / slidesPerView);
        currentTranslate = Math.max(Math.min(currentTranslate, 0), maxTranslate);
    }
}

function dragEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID); // Cancela a animação ao soltar o mouse
    wrapper.classList.remove('grabbing');

    // Verifica o quanto o usuário arrastou para mudar de slide (se for suficiente, muda de slide)
    const movedBy = currentTranslate - prevTranslate;

    const slideWidth = window.innerWidth / slidesPerView;
    if (movedBy < -slideWidth / 4 && currentIndex < totalSlides - slidesPerView) {
        currentIndex++;
    } else if (movedBy > slideWidth / 4 && currentIndex > 0) {
        currentIndex--;
    }

    setPositionByIndex(); // Atualiza a posição do slide
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -(window.innerWidth / slidesPerView);
    prevTranslate = currentTranslate;
    wrapper.style.transition = 'transform 0.3s ease'; // Transição mais suave ao soltar o mouse
    wrapper.style.transform = `translateX(${currentTranslate}px)`;

    updatePagination();
}

function animation() {
    if (isDragging) {
        wrapper.style.transform = `translateX(${currentTranslate}px)`;
        requestAnimationFrame(animation); // Continua animando enquanto arrasta
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function updatePagination() {
    paginationDots.forEach(dot => dot.classList.remove('active'));
    paginationDots[Math.floor(currentIndex / slidesPerView)].classList.add('active');
}

// Eventos de mouse e touch para arrastar
wrapper.addEventListener('mousedown', dragStart);
wrapper.addEventListener('touchstart', dragStart);

wrapper.addEventListener('mousemove', dragMove);
wrapper.addEventListener('touchmove', dragMove);

wrapper.addEventListener('mouseup', dragEnd);
wrapper.addEventListener('mouseleave', dragEnd);
wrapper.addEventListener('touchend', dragEnd);

updatePagination(); // Atualiza o estado inicial da paginação