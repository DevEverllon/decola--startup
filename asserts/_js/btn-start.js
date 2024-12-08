// Pegar o botão
const btnStart = document.getElementById("btnStart");

// Função para voltar ao topo quando o botão é clicado
btnStart.addEventListener("click", function () {
    window.scrollTo({
        top: 950,
        behavior: "smooth" // Suave
    });
});