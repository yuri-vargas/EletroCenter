document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleMenu");
  const sideMenu = document.getElementById("sideMenu");

  toggleButton.addEventListener("click", function () {
    sideMenu.classList.toggle("open");
  });
});
