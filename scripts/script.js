const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  if (menu.style.left === "-250px") {
    menu.style.left = "0";
  } else {
    menu.style.left = "-250px";
  }
});

// Adicione um ouvinte de evento de clique ao documento inteiro
document.addEventListener("click", (e) => {
  const target = e.target;
  if (target !== menuButton && target !== menu && !menu.contains(target)) {
    // Se o clique não foi no botão do menu, no menu ou em qualquer elemento filho do menu, oculte o menu
    menu.style.left = "-250px";
  }
});
