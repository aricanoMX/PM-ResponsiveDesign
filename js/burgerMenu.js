// console.log("Hola mundo es mi primera linea en JS");
// console.log(window.matchMedia("screen and (max-width: 767px)"));
const menu = document.querySelector(".menu");
// console.log(menu);
// console.log(burgerButton);
// querys
const responsive = window.matchMedia("screen and (max-width: 767px)");

const burgerButton = document.querySelector("#burger__menu");

responsive.addListener(burgerMenu_Movile);

function burgerMenu_Movile(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", showMenu);
  } else {
    burgerButton.removeEventListener("click", showMenu);
  }
}
burgerMenu_Movile(responsive);

function showMenu() {
  if (menu.classList.contains("activo")) {
    menu.classList.remove("activo");
  } else {
    menu.classList.add("activo");
  }
}
