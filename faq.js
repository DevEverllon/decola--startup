const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordions => {
    accordions.addEventListener('click', () =>{
        const body = accordions.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})