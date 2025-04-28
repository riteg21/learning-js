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
  const p = document.createElement(p);
  p.className = "mb-1";
  p.innerHTML = `<span class="fw-bold"> ${name}</span>: ${value}`;
  alert.append(p);
}

// Offset - ьетрики (относительно родительского элемента с позиционированием)
function offsetMetricsHandler() {}

// Client - метрики(внутрениие метрики элемента)
function clientMetricsHandler() {}

// Scroll - метрики(прокрутка элемента)
function scrollMetricsHandler() {}

// Метрики окна браузера и документа
function windowMetricsHandler() {}

// Координаты жлемента относительно окна браузера (Window-метрики)
function windowCoordsHandler() {}

// Координаты элемента относительно документа (page-метрики)
function pageCoordsHandler() {}
