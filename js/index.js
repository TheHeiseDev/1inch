
const tabItems = document.querySelectorAll(".wallet-block-tab");

tabItems.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabItems.forEach((tab) => tab.classList.remove("tabs__caption_active")); // удаляю класс активности у всех табов на странице
    tab.classList.add("tabs__caption_active"); // добавляю класс активности текущему табу
  });
});

function changeTab(src, text) {
  const welletTitle = document.querySelector(".wallet-block-text p");
  const imageBlock = document.querySelector(".image__wrap img");

  welletTitle.textContent = text;
  imageBlock.src = src;
}

const body = document.querySelector("body");
const logo = document.querySelector(".header__logo");

// БУРГЕР МЕНЮ
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const submenuLink = document.querySelector(".submenu-position");
const submenu = document.querySelector(".mobile-submenu__wrapper");

const bodyy = document.body;
const mainWidth = bodyy.clientWidth;

burger.addEventListener("click", menuFunc);

submenuLink.addEventListener("click", () => {
  submenu.classList.toggle("active");
});

function menuFunc() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  bodyy.classList.toggle("active");
}

// Закрывать бургер меню когда окно браузера больше 767
window.addEventListener("resize", function (e) {
  const size = e.currentTarget.outerWidth;

  if (size > 500) {
    burger.classList.remove("active");
    menu.classList.remove("active");
    // bodyy.classList.remove("active");
  }
});

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// Закрытие попапа при клике на меню
function closeOnClick() {
  burger.classList.remove("active");
  menu.classList.remove("active");
  bodyy.classList.remove("active");
}


// ScrollReveal().reveal(".up-amim", {
//   delay: 100,
//   duration: 1000,
// });

// ScrollReveal().reveal(".app", {
//   delay: 100,
//   duration: 1000,
// });

// ScrollReveal().reveal(".find", {
//   delay: 100,
//   duration: 1000,
// });
// ScrollReveal().reveal(".c1-anim", {
//   delay: 100,
//   duration: 1000,
// });

// ScrollReveal().reveal(".c2-anim", {
//   delay: 200,
//   duration: 1000,
// });

// ScrollReveal().reveal(".c3-anim", {
//   delay: 300,
//   duration: 1000,
// });
// ScrollReveal().reveal(".baner", {
//   delay: 100,
//   duration: 1000,
// });
