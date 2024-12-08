// Seleciona o elemento da mensagem de cookies
const msgCookies = document.querySelector("#cookies_msg");

// Função para aceitar os cookies
function toAccept() {
  localStorage.setItem("lgpd", "yes"); // Salva a decisão no localStorage
  hideCookiesMessage(); // Esconde a mensagem
}

// Função para verificar e exibir/esconder a mensagem
function checkCookiesConsent() {
  if (localStorage.getItem("lgpd") === "yes") {
    hideCookiesMessage();
  } else {
    showCookiesMessage();
  }
}

// Função para mostrar a mensagem de cookies
function showCookiesMessage() {
  msgCookies.classList.add("show");
}

// Função para esconder a mensagem de cookies
function hideCookiesMessage() {
  msgCookies.classList.remove("show");
}

// Verifica o consentimento ao carregar a página
checkCookiesConsent();
