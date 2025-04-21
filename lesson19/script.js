"use strict";

// СВОЙСТВА dom-ОБЪЕКТОВ ТАБЛИЦЫ
const table1 = document.getElementById("table-1");

document.querySelector(".btn-primary").onclick = function () {
  alert(table1.caption.innerText);
};
document.querySelector(".btn-secondary").onclick = function () {
  alert(table1.tHead.innerHTML);
};

// ФАЗЫ ЖИЗНЕННОГО ЦИКЛА СОБЫТИЯ
// Переменные для текущих элементов ячейки и строки
let currentCell;
let currentRow;

// Стадия обработки события
// false - bubble(всплытие)
// true - capture(погружение)
const eventPhase = true;

// остановка погружения
const stopPropagation = true;

// Добавление обработчиков строкам и ячейкам таблицы

const table1Body = table1.tBodies[0];

for (let tr of table1Body.rows) {
  //строки
  tr.addEventListener("click", trClickHandler, eventPhase);
  for (let cell of tr.cells) {
    //ячейки
    cell.addEventListener("click", cellClickHandler, eventPhase);
  }
}

// Добавление обработчика таблице
table1.addEventListener("click", tableClickHandler, eventPhase);
function trClickHandler(event) {
  console.log(`Click on Row : ${this.sectionRowIndex + 1}`);
  console.log(`Event Phase : ${event.eventPhase}`);
  if (currentRow) currentRow.classList.remove("border-secondary");
  currentRow = this;
  currentRow.classList.add("border-secondary");
}

function cellClickHandler(event) {
  console.log(`Click on cell : ${this.cellIndex + 1}`);
  console.log(`Event Phase : ${event.eventPhase}`);
  if (currentCell) currentCell.classList.remove("bg-secondary", "text-white");
  currentCell = this;
  currentCell.classList.add("bg-secondary", "text-white");
}

function tableClickHandler(event) {
  console.log("Click on table1");
  console.log(`Event Phase : ${event.eventPhase}`);
  console.log(`Event Target Text : ${event.target.innerText}`);
  //   if (stopPropagation) event.stopPropagation();
}

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ - ЛУЧШЕЕ РЕШЕНИЕ ОПТИМИЗАЦИИ ОБРАБОТЧИКОВ СОБЫТИЙ
const table2 = document.getElementById("table-2");

function table2ClickHandler(event) {
  console.log("Click on Table 2");
  console.log(`Event Phase : ${event.eventPhase}`);
  console.log(`Event Target Text : ${event.target.innerText}`);

  let cell = event.target;
  let row = cell.closest("tr");

  console.log(`Click on cell : ${cell.cellIndex + 1}`);
  if (currentCell) currentCell.classList.remove("bg-secondary", "text-white");
  currentCell = cell;
  currentCell.classList.add("bg-secondary", "text-white");

  console.log(`Click on row : ${row.sectionRowIndex + 1}`);
  if (currentRow) currentRow.classList.remove("border-secondary");
  currentRow = row;
  currentRow.classList.add("border-secondary");
}

// Удаление - добавление обработчика события
const btnTrack = document.querySelector(".btn-success");
btnTrack.addEventListener("click", btnTrackHandler);

function btnTrackHandler() {
  if (this.classList.contains("btn-success")) {
    table2.addEventListener("click", table2ClickHandler);
    this.classList.remove("btn-success");
    this.classList.add("btn-danger");
    this.innerText = "Disabled Tracking";
  } else {
    table2.removeEventListener("click", table2ClickHandler);

    this.classList.remove("btn-danger");
    this.classList.add("btn-success");
    this.innerText = "Enabled tracking";
  }
}
