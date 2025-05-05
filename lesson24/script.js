"use strict";
// Выбор элементов
const page = document.documentElement;
const homeSection = document.querySelector(".home");
const nav = document.querySelector("nav");

const btnChangeTitle = document.querySelector(".btn-dark");
const btnStopWatching = document.querySelector(".btn-outline-secondary");

const sections = document.querySelectorAll("section");
const images = document.querySelectorAll(".image");

const topBtn = document.querySelector(".top-btn");

// MUTATION OBSERVER
// 1 Объект настроек
const mutationConfig = {
  clildList: true,
  subtree: true,
  attributes: true, // следить за целевым элементом и всеми его потомками включая атрибуты
};

// 2 функция CallBack

function mutationCallBack(records, observer) {
  for (let record of records) {
    console.log("Change element:", record.target);
    console.log("Change type: ", record.type);
  }
}

// 3 Наблюдатель

const mutationObserver = new MutationObserver(mutationCallBack);

// 4 Наблюдаемые элементы
const mutationNode = homeSection;

// 5 Привязка элементов к наблюдателю
mutationObserver.observe(mutationNode, mutationConfig);

// Изменение наблюдаемых элементов
btnChangeTitle.onclick = function () {
  const h1 = mutationNode.querySelector("h1");
  h1.textContent = "New Text";
  h1.classList.add("text-success");
};

// Остановка наблюдения
btnStopWatching.onclick = function () {
  mutationObserver.disconnect();
};

// INTERSECTION OBSERVER
// 1 Объект настроек
const intersectionConfig = {
  root: null,
  threshold: 0.5, // анимация появится когда объект будет виден не менее чем на половину
};

// 2 функция callBack

function intersectionCallBack(records, observer) {
  for (let record of records) {
    if (record.isIntersecting) {
      if (record.target.tagName != "SECTION") {
        record.target.classList.add("animated");
        // прекращение наблюдения
        observer.unobserve(record.target);
      } else {
        const currentSectionID = record.target.id;
        document.querySelector(".active").classList.remove("active");
        document
          .querySelector(`a[href= "#${currentSectionID}"]`)
          .classList.add("active");
      }
    }
  }
}

// 3 наблюдатель
const intersectionObserver = new IntersectionObserver(
  intersectionCallBack,
  intersectionConfig
);

// 4 наблюдаемые элементы

const intersectionNodes = images;

// 5 привязка элементов к наблюдателю
for (let node of intersectionNodes) {
  intersectionObserver.observe(node);
}

// Добавление новых элементов в IntervSection Observer
const intersectionNodes2 = sections;
for (let node of intersectionNodes2) {
  intersectionObserver.observe(node);
}

// RESIZE OBSERVER
// 1 Объект настроек
const resizeConfig = {};

// 2 Функция callBack
function resizeCallBack(records, observer) {
  for (let record of records) {
    console.log(
      `width : ${page.clientWidth}px: height: ${page.clientHeight}px `
    );
    console.log(`width : ${record.contentRect.width}px `);
  }
}

// 3 наблюдатель

const resizeObserver = new ResizeObserver(resizeCallBack);

// 4 наблюдаемые элементы

const resizeNode = page;

// 5  привязка элементов к наблюдателю
resizeObserver.observe(resizeNode, resizeConfig);

// итак MutationObserver - наблюдает за изменением атрибутов, текстового содержимого целевого элемента и его потомков;
// IntersectionObserver - наблюдает за пересечением целевого элемента с родительским элементом или областью просмотра страницы (viewport); ResizeObserver - наблюдает за изменением размеров целевого элемента.

// Общими методами наблюдателей являются: observe(target) - запускает наблюдение за целевым элементом; unobserve(target) - останавливает наблюдение за целевым элементом; disconnect() - останавливает наблюдение за всеми элементами; takeRecords() - получает список необработанных изменений, которые произошли, но колбэк для них еще не выполнился.
