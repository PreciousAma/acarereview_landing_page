const navBarLinks = document.querySelector(".navbar__items .navbar__links");
const menuButton = document.querySelector(
  ".navbar__items .navbar__menu-button"
);

const navBar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("d-flex");
  navBar.classList.toggle("bg-white");
});
