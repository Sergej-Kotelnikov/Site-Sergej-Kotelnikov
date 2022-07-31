`use strict`;

//Preloader
const preloaderEl = document.querySelector(`.preloader`);
const bodyEl = document.querySelector(`body`);
window.onload = setTimeout(function () {
  bodyEl.classList.remove("prebody");
  preloaderEl.style.display = `none`;
}, 2000);

// Active page ~Main~
const ul = document.querySelector(`ul`);
const li = document.querySelectorAll(`nav li a`);

li.forEach((liActive) => {
  liActive.addEventListener(`click`, function () {
    ul.querySelector(`.active`).classList.remove(`active`);
    liActive.classList.add(`active`);
  });
});

// menu scroll
const header = document.querySelector(`.first-container`);

window.addEventListener(`scroll`, function () {
  header.classList.toggle(`sticky`, window.scrollY > 0);
});
