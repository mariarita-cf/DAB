// ABRIR MODAL
document.querySelectorAll(".card-noticia").forEach(card => {
  card.addEventListener("click", () => {
    const modalID = card.dataset.modal;
    document.getElementById(modalID).style.display = "flex";
  });
});

// FECHAR MODAL
document.querySelectorAll(".fechar-modal").forEach(botao => {
  botao.addEventListener("click", () => {
    botao.parentElement.parentElement.style.display = "none";
  });
});

// FECHAR CLICANDO FORA DO MODAL
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});
