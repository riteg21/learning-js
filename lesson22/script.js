"use strict";

// Выбор элементов
const text = document.querySelector(".text");
const alert = document.querySelector(".alert");

// Кнопки вывода метрик и координат
const offsetMetricsBtn = document.querySelector(".btn-primary");
const clientMetricsBtn = document.querySelector(".btn-secondary");
const scrollMetricsBtn = document.querySelector(".btn-dark");

const windowMetricsBtn = document.querySelector(".btn-outline-primary");
const windowCoordsBtn = document.querySelector(".btn-outline-secondary");
const pageCoordsBtn = document.querySelector(".btn-outline-dark");

// Доабвление обработчиков событий click
offsetMetricsBtn.addEventListener("click", offsetMetricsHandler);
clientMetricsBtn.addEventListener("click", clientMetricsHandler);
scrollMetricsBtn.addEventListener("click", scrollMetricsHandler);
windowMetricsBtn.addEventListener("click", windowMetricsHandler);
windowCoordsBtn.addEventListener("click", windowCoordsHandler);
pageCoordsBtn.addEventListener("click", pageCoordsHandler);

// Функция добавления метрики
function addMetric(name, value) {
  const p = document.createElement("p");
  p.className = "mb-1";
  p.innerHTML = `<span class="fw-bold"> ${name}</span>: ${value}`;
  alert.append(p);
}

// Offset - метрики (относительно родительского элемента с позиционированием)
function offsetMetricsHandler() {
  alert.innerHTML = " ";
  addMetric(
    "offsetParent",
    `${text.offsetParent.tagName} (${text.offsetParent.className})` //к text мы общаемся как к css-элементу
  );
  addMetric("offsetTop", `${text.offsetTop}px`);
  addMetric("offsetLeft", `${text.offsetLeft}px`);
  addMetric("offsetWidth", `${text.offsetWidth}px`);
  addMetric("offsetHeight", `${text.offsetHeight}px`);
}

// Client - метрики(внутрениие метрики элемента) - метрики отступов внутри выбранного элемента
function clientMetricsHandler() {
  alert.innerHTML = " ";
  addMetric("clientTop", `${text.clientTop}px`);
  addMetric("clientLeft", `${text.clientLeft}px`);
  addMetric("clientWidth", `${text.clientWidth}px`);
  addMetric("clientHeight", `${text.clientHeight}px`);
}

// Scroll - метрики(прокрутка элемента) - метрика прокрутки
function scrollMetricsHandler() {
  alert.innerHTML = " ";
  addMetric("scrollTop", `${text.scrollTop}px`);
  addMetric("scrollLeft", `${text.scrollLeft}px`);
  addMetric("scrollWidth", `${text.scrollWidth}px`); //полная высота элемента прокрутки
  addMetric("scrollHeight", `${text.scrollHeight}px`); //полная ширина элемента прокрутки
}

// Метрики окна браузера и документа
const scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

function windowMetricsHandler() {
  alert.innerHTML = "";
  addMetric(
    "documentElement.clientWidth",
    `${document.documentElement.clientWidth}px` //полезная площадь окна браузера
  );
  addMetric(
    "documentElement.clientHeight",
    `${document.documentElement.clientHeight}px` //полезная площадь окна браузера
  );
  addMetric(
    "documentElement.scrollWidth",
    `${document.documentElement.scrollWidth}px` //размеры документа с учетом прокрутки
  );
  addMetric("documentElement.scrollHeigth", `${scrollHeight}`); //размеры документа с учетом прокрутки
  addMetric("window.pageYOffset", `${window.pageYOffset}px`); //!!!!УСТАРЕВШИЙ ВАРИАНТ - использовать scrollY !!!! значение вертикальной прокрутки
  addMetric("window.pageXOffset", `${window.pageXOffset}px`); //!!!!УСТАРЕВШИЙ ВАРИАНТ - использовать scrollX !!!! значение горизонтальной прокрутки
}

// Координаты жлемента относительно окна браузера (Window-метрики)
function windowCoordsHandler() {
  alert.innerHTML = "";
  const elemCoords = text.getBoundingClientRect(); //получение координат элемента относительно окна браузера(DOMRect)
  addMetric("x (left)", `${elemCoords.x}px (${elemCoords.left}px)`);
  addMetric("y (left)", `${elemCoords.y}px (${elemCoords.top}px)`);
  addMetric("width", `${elemCoords.width}px`);
  addMetric("height", `${elemCoords.height}px`);
  addMetric("bottom", `${elemCoords.bottom}px`);
  addMetric("right", `${elemCoords.right}px`);
}
// здесь координаты изменяются относительно прокрутки

// Координаты элемента относительно документа (page-метрики)
function getpageCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function pageCoordsHandler() {
  alert.innerHTML = "";
  const elemCoords = getpageCoords(text);
  addMetric("x (left)", `${elemCoords.left}px`);
  addMetric("y (top)", `${elemCoords.top}px`);
  // right и bottom аналогично
}
// здесь координаты не изменяются относительно прокрутки страницы

// координаты курсора и определение целевого элемента по координатам
document.onpointerup = function (event) {
  if (event.target.tagName != "BUTTON") {
    console.log(
      ` clientX : ${event.clientX}; clientY : ${event.clientY} \n pageX :${event.pageX}; pageY : ${event.pageY}`
    );
    const elem = document.elementFromPoint(event.clientX, event.clientY); //elementFromPoint нужен для определения самого грубокого элемента в окне на который в данном случае кликнули по координатам х у
    if (elem) console.log(` Element: ${elem.className}`);
  }
};

// Относительное позиционирование элементов
const list = document.querySelector(".list-group");
list.addEventListener("click", listClickHandler);
function listClickHandler(event) {
  if (event.target.tagName != "SPAN") {
    if (event.target.querySelector("span") == null) {
      const currentLi = event.target;
      const span = document.createElement("span");
      span.className = "position-absolute fs-4";
      span.innerHTML = "&#9745;";
      span.style.right = "20px";
      currentLi.append(span);
      span.style.top = (currentLi.clientHeight - span.clientHeight) / 2 + "px";
    }
  } else event.target.remove();
}
