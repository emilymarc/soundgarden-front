

// modal
var modal = document.getElementById("modal-rsv");

// botão para abrir
var btn = document.getElementById("modal-btn");

// elemento para fehcar o modal
var span = document.getElementsByClassName("close")[0];

// quando clicar no botão abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// quando clicar no (X) fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// quando o usuario clicar fora do modal, ele fecha
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}