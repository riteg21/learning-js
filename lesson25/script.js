"use strict";
// HTML Drag && Drop: DOM.API

// Выбор списков
const taskList1 = document.querySelector(".task-list-1");
const taskList1Items = taskList1.querySelectorAll(".list-group-item");
const taskList2 = document.querySelector(".task-list-2");

// Добавление элементам списка 1 атрибута-свойства draggable
for (let task of taskList1Items) {
  task.draggable = true; //добавляем возможность перетаскивания всем элементам цикла for of
}

// Начало перетаскивания из списка 1
taskList1.addEventListener("dragstart", (event) => {
  event.target.classList.add("shadow-sm");
  event.dataTransfer.setData("text", "custom data");
});

taskList2.addEventListener("dragstart", function (event) {
  event.target.classList.add("shadow-sm");
});

// Попадание элемента в цель перетаскивания
taskList2.addEventListener("dragover", (event) => {
  const backEl = document.elementFromPoint(event.clientX, event.clientY);
  if (backEl) event.preventDefault();
});

// Сброс элемента в цель перетаскивания
taskList2.addEventListener("drop", (event) => {
  console.log(event.dataTransfer.getData("text"));
  const currentEl = document.querySelector(".shadow-sm");
  const prevEl = document.elementFromPoint(
    event.clientX,
    event.clientY - currentEl.offsetHeight / 2
  );
  prevEl.tagName == "LI"
    ? taskList2.insertBefore(currentEl, prevEl.nextElementSibling)
    : taskList2.append(currentEl);
});

// Конец перетаскивания
taskList2.addEventListener("dragend", (event) => {
  event.target.classList.remove("shadow-sm");
});

//

//

//

//
// PointerIvents API - более усовершенствованный метод drag&drop
// Выбор списков
const jsTaskList1 = document.querySelector(".js-task-list-1");
const jsTaskList1Items = jsTaskList1.querySelectorAll(".list-group-item");
const jsTaskList2 = document.querySelector(".js-task-list-2");

// Добавление фукнкциональности drag&drop
for (let item of jsTaskList1Items) {
  // отключение обработки события dragstart
  item.ondragstart = function () {
    return false;
  };
  // Добавление обработчиков событий pionterdown
  item.addEventListener("pointerdown", onPointerDown);
}

// Обработчик события onpointerdown
function onPointerDown(event) {
  document.addEventListener("pointerup", dropElement);
  document.addEventListener("pointermove", onPointerMove);
  // определение перетаскиваемоего элемента
  const dragElement = this;
  // определение начального положения перетаскиваемого элемента
  let shiftX = event.clientX - dragElement.getBoundingClientRect().left;
  let shiftY = event.clientY - dragElement.getBoundingClientRect().top;
  // корректировка стилей перетаскиваемого элемента
  dragElement.style.width = `${event.target.offsetWidth}px`;
  dragElement.style.position = "absolute";
  dragElement.style.zIndex = 1000;
  // переменные элементов, расположенных над и выше перетаскиваемого
  let backElement;
  let previousElement;

  // обработчик события pointermove
  function onPointerMove(event) {
    dragElement.hidden = true;
    backElement = document.elementFromPoint(event.clientX, event.clientY);
    previousElement = document.elementFromPoint(
      event.clientX,
      event.clientY - dragElement.offsetHeight / 2
    );
    dragElement.hidden = false;
    moveAt(event.pageX, event.pageY);
  }

  // функция перемещения перетаскиваемого элемента
  function moveAt(pageX, pageY) {
    dragElement.style.left = pageX - shiftX + "px";
    dragElement.style.top = pageY - shiftY + "px";
  }

  //   функция сброса перетаскиваемого элемента
  function dropElement(event) {
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", dropElement);
    if (backElement.classList.contains("js-task-list-2")) {
      jsTaskList2.append(dragElement);
    } else if (
      previousElement.tagName == "LI" &&
      backElement.parentElement.classList.contains("js-task-list-2")
    ) {
      jsTaskList2.insertBefore(dragElement, previousElement);
    }
    dragElement.style = " ";
  }
}
