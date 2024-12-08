const btnVoltar = document.querySelector(".policy-btn-voltar");

function voltar(){
    window.history.back();
}
btnVoltar.addEventListener('click', voltar);