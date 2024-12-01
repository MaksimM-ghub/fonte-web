let burgerBtn = document.getElementById("burger");
let burgerMenu = document.getElementById("burger-menu");
let bodyLock = document.body;

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("open");
  burgerMenu.classList.toggle("burger-menu");
  bodyLock.classList.toggle("body-lock");
});

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", function () {
    burgerBtn.classList.remove("open");
    burgerMenu.classList.remove("burger-menu");
  });
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    burgerBtn.classList.remove("open");
    burgerMenu.classList.remove("burger-menu");
  }
});
