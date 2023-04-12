const body = document.querySelector("body");
const logo = document.querySelector(".header__logo");

// Добавлнеия blur эффекта к Хейдеру
const headerElement = document.querySelector(".header");

// if (window.scrollY > 100) {
// console.log(window.scrollY )
// } else {
//   headerElement.classList.remove("h-blur");
// }
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    headerElement.classList.add("h-blur");
  } else {
    headerElement.classList.remove("h-blur");
  }
});

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

// Закрывать бургер меню когда окно браузера больше 500
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
// function closeOnClick() {
//   burger.classList.remove("active");
//   menu.classList.remove("active");
//   bodyy.classList.remove("active");
// }
