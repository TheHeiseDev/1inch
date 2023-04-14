
// Функционал работы табов  
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


ScrollReveal().reveal(".app-bellow", {
  distance: "50px",
  duration: 1500,
  opacity: 0.5,
  viewFactor: 0.3,
});
ScrollReveal().reveal(".app-bellow-mobile", {
  distance: "50px",
  duration: 1500,
  desktop: true,
  mobile: false,
  viewFactor: 0.5,
});

// Animation module news.html
ScrollReveal().reveal(".up", {
  easing: "ease-in",
});

ScrollReveal().reveal(".up1", {
  easing: "ease-in",
  duration: 200,
});
ScrollReveal().reveal(".up2", {
  easing: "ease-in",
  duration: 300,
});
ScrollReveal().reveal(".up3", {
  easing: "ease-in",
  duration: 400,
});
ScrollReveal().reveal(".up4", {
  easing: "ease-in",
  duration: 500,
});
ScrollReveal().reveal(".up5", {
  easing: "ease-in",
  duration: 600,
});
ScrollReveal().reveal(".up6", {
  easing: "ease-in",
  duration: 700,
});
ScrollReveal().reveal(".up7", {
  easing: "ease-in",
  duration: 800,
});
ScrollReveal().reveal(".up8", {
  easing: "ease-in",
  duration: 900,
});
ScrollReveal().reveal(".up9", {
  easing: "ease-in",
  duration: 1000,
});
ScrollReveal().reveal(".up10", {
  easing: "ease-in",
  duration: 1100,
});

// Animation module wallet.html
ScrollReveal().reveal(".rigth-in", {
  delay: 0,
  distance: "-100%",
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0.4,
  origin: "right",
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: 1,
  cleanup: false,
  container: document.documentElement,
  desktop: false,
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor: 0.3,
});
ScrollReveal().reveal(".left-in", {
  delay: 0,
  distance: "-100%",
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0.4,
  origin: "left",
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: 1,
  cleanup: false,
  container: document.documentElement,
  desktop: false,
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor: 0.3,
});
ScrollReveal().reveal(".bottom-in", {
  delay: 0,
  distance: "-50%",
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0.5,
  origin: "top",
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: 1,
  cleanup: false,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor: 0.5,
});

// Animation module products-block.html
ScrollReveal().reveal(".upp1", {
  easing: "ease-in",
  duration: 300,
  viewFactor: 0.3,
});
ScrollReveal().reveal(".upp2", {
  easing: "ease-in",
  duration: 300,
  viewFactor: 0.3,
});
ScrollReveal().reveal(".upp3", {
  easing: "ease-in",
  duration: 300,
  viewFactor: 0.3,
});
ScrollReveal().reveal(".upp4", {
  easing: "ease-in",
  duration: 300,
  viewFactor: 0.3,
});
