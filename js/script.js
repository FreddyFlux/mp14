// TOGGLE NAVIGATION
const btnNavEl = document.querySelector('.navigation__button');
const navBG = document.querySelector('.navigation__background');
const navLinks = document.querySelector('.navigation__nav');

btnNavEl.addEventListener('click', function () {
  navBG.classList.toggle('navigation__background--inactive');
  navLinks.classList.toggle('navigation__nav--inactive');
});

/////////////////////////////
// FAQ ACCORDIONS
/////////////

const toggles = document.querySelectorAll('.info__faq--toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('info__faq--active');
  });
});

/////////////
// OPTIMIZING FOR PHONE
