"use strict";

// События мыши, связанные с кликом
const btnPrimary = document.querySelector(".btn-primary");

const list1Items = document.querySelectorAll("#list-1 .list-group-item");

btnPrimary.onmousedown = function (event) {
  console.log(`Event type : ${event.type} \n Mouse button : ${event.button}`);
  switch (event.button) {
    case 0:
      list1Items[0].classList.toggle("bg-primary-subtle");
      break;
    case 1:
      list1Items[1].classList.toggle("bg-primary-subtle");
      break;
    case 2:
      list1Items[2].classList.toggle("bg-primary-subtle");
      break;
    case 3:
      list1Items[3].classList.toggle("bg-primary-subtle");
      break;
    case 4:
      list1Items[4].classList.toggle("bg-primary-subtle");
      break;
  }
};
// // 0: Левая кнопка мыши.
// 1: Средняя кнопка мыши (колесико).
// 2: Правая кнопка мыши.
// 3: Кнопка “Назад” (обычно на боковой панели мыши).
// 4: Кнопка “Вперед” (обычно на боковой панели мыши).

btnPrimary.onmouseup = function (event) {
  console.log(`Event type : ${event.type} \n Mouse button : ${event.button}`);
};

btnPrimary.onclick = function (event) {
  console.log(`Event type : ${event.type} \n Mouse button : ${event.button}`);
};

btnPrimary.ondblclick = function (event) {
  console.log(`Event type : ${event.type} \n Mouse button : ${event.button}`);
};

btnPrimary.oncontextmenu = function (event) {
  console.log(`Event type : ${event.type} \n Mouse button : ${event.button}`);
};

// События возникающие при нажатии кнопки мыши вместе с клавишами-модификаторами
const btnSecondary = document.querySelector(".btn-secondary");
// const list1Items = document.querySelectorAll("#list-1 .list-group-item");
btnSecondary.onclick = function (event) {
  if (event.shiftKey) {
    alert(` Event shiftKey : ${event.shiftKey}`);
  }
};

// События мыши, связанные с перемещением курсора
// mouseover/mouseout
const list2 = document.getElementById("list-2");

list2.onmouseover = function (event) {
  if (event.target.closest("ul").id == "list-2") {
    event.target.classList.add("bg-primary", "text-white");
  }
};
list2.onmouseout = function (event) {
  if (event.target.closest("ul").id == "list-2") {
    event.target.classList.remove("bg-primary", "text-white");
  }
};

// mouseenter/mouseleave
list2.onmouseenter = function (event) {
  console.log("Inside list");
  console.log(`Event target tag : ${event.target.tagName}`);
  console.log(`Event relatedTarget tag : ${event.relatedTarget.tagName}`);
};

list2.onmouseleave = function (event) {
  console.log("Outside list");
  console.log(`Event target tag : ${event.target.tagName}`);
  console.log(`Event relatedTarget tag : ${event.relatedTarget.tagName}`);
};

// События клавиатуры
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyZ") {
    alert(` Event key : ${event.key} \n Event code : ${event.code}`);
  }
});

// События указателя - дествия с сенсорных экранов
const list3 = document.getElementById("list-3");
const list3Items = list3.getElementsByClassName("list-group-item");
const nextBtn = document.querySelector(".btn-success");
const prevBtn = document.querySelector(".btn-warning");
let currentIndex = 0;

nextBtn.addEventListener("pointerup", nextBtnHandler);
prevBtn.addEventListener("pointerup", prevBtnHandler);

function nextBtnHandler(event) {
  list3Items[currentIndex].classList.remove("bg-success-subtle");
  console.log(`Event pointer type : ${event.pointerType}`);
  if (++currentIndex > 4) currentIndex = 0;
  list3Items[currentIndex].classList.add("bg-success-subtle");
}

function prevBtnHandler(event) {
  list3Items[currentIndex].classList.remove("bg-success-subtle");
  console.log(`Event pointer type : ${event.pointerType}`);
  if (--currentIndex < 0) currentIndex = 4;
  list3Items[currentIndex].classList.add("bg-success-subtle");
}
