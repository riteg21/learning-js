"use strict";

// Выбор элементов
const header = document.querySelector("header");
const banner = document.querySelector(".banner");
const bannerBtn = banner.querySelector(".btn");
const topBtn = document.querySelector(".btn-top");
const images = document.querySelectorAll(".image");
const sections = document.querySelectorAll("section");

// Смещение баннера наверх
const headerHeight = header.offsetHeight;
banner.style.marginTop = `-${headerHeight}px`;

// Прокрутка к секции Section 1 (свойство scrollTop)
bannerBtn.onclick = function () {
  const scrollHeight = sections[1].getBoundingClientRect().top + window.scrollY; //sections[1].getBoundingClientRect().top(выбираем sections[1] далее getBoundingClientRect().top(возвращает объект, который содержит информацию о размерах элемента и его позиции относительно видимой области браузера а значение top содержит расстояние от верхней границы элемента sections[1] до верхней границы видимой области браузера)) далее + window.scrollY свойство, которое содержит текущую вертикальную позицию прокрутки страницы. Это расстояние в пикселях от верхней границы документа до верхней границы видимой области.

  document.documentElement.scrollTop = scrollHeight; // использовать scrollTop можно только с documentElement
};

// и альтернативный способ прокрутки страницы
bannerBtn.onclick = function () {
  sections[1].scrollIntoView(top);
};

// Прокрутка к началу страницы (метод window.scrollTo)
topBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// Cобытие scroll
window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  const scrollY = window.scrollY;
  changeNavStyle(scrollY);
  showTopBtn(scrollY);
  animateImageOnScroll();
  scrollSpy(scrollY);
}

// Изменение стилей панелей меню
function changeNavStyle(scrollY) {
  if (scrollY > headerHeight) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-success");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("bg-success");
  }
}

// Скрытие - отображение кнопки Top
function showTopBtn(scrollY) {
  topBtn.hidden = scrollY < document.documentElement.clientHeight; // скрываем элемент если величина scrollY меньше размера страницы, но когда мы опускаемся на максимально допустимую величину страницы кнопка будет отображаться
}

// Отображение изображений при прокрутке
function animateImageOnScroll() {
  for (let image of images) {
    if (
      image.getBoundingClientRect().top + 150 <
      document.documentElement.clientHeight
    ) {
      image.classList.add("animated");
    } else {
      image.classList.remove("animated");
    }
  }
}
// взаимодействие с navbar - когда страница прокручивается до нужной секции навбар этой секции подсвечивается соответсвующим цветом
function scrollSpy(scrollY) {
  for (let section of sections) {
    if (section.offsetTop <= scrollY) {
      document.querySelector(".active").classList.remove("active");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.add("active");
    }
  }
}

// запрет прокрутки

document.onkeyup = function (event) {
  const windowWidth = window.innerWidth;
  const documentWidth = document.documentElement.clientWidth;
  if (event.code == "KeyA" && document.body.style.overflow != "hidden") {
    document.body.style.overflow = "hidden"; // запрещаем прокрутку
    document.body.style.paddingRight = `${windowWidth - documentWidth}px`;
  } else if (event.code == "KeyS") {
    document.body.style.overflow = "auto"; // разрешаем прокрутку
    document.body.style.paddingRight = 0;
  }
};
