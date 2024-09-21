// TOGGLE NAVIGATION
const btnNavEl = document.querySelector(".navigation__button");
const navBG = document.querySelector(".navigation__background");
const navLinks = document.querySelector(".navigation__nav");

btnNavEl.addEventListener("click", function () {
  navBG.classList.toggle("navigation__background--inactive");
  navLinks.classList.toggle("navigation__nav--inactive");
});
