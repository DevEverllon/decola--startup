document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("footer");
  
    if (footerContainer) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "foottter.html", true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          footerContainer.innerHTML = xhr.responseText;
        } else {
          console.error("Erro ao carregar o rodapé:", xhr.statusText);
        }
      };
      xhr.onerror = function () {
        console.error("Erro ao tentar carregar o rodapé.");
      };
      xhr.send();
    }
  });
  