// Pegar o botão
const btnTop = document.getElementById("btnTop");

// Mostrar o botão quando o usuário rolar 100px para baixo
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

// Função para voltar ao topo quando o botão é clicado
btnTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Suave
    });
});
