const divBtnMenu = document.querySelector(".btn-menu-mobile");
const nav = document.querySelector(".nav-conteiner");
const headerConteiner = document.querySelector(".header-conteiner");

divBtnMenu.addEventListener("click", () => {
  nav.classList.toggle("ativo");
  headerConteiner.classList.toggle("ativo");
});
