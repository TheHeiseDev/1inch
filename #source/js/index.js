//@prepros-append header.js
//@prepros-append script.js
//@prepros-append animation.js

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
