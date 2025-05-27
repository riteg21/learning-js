"use strict";

// выбор элементов
const taskForm = document.forms["tasks"];
const taskInput = taskForm.querySelector(".form-control");
const addTaskBtn = taskForm.querySelector(".btn-success");
const deleteBtn = taskForm.querySelector(".btn-danger");
const sortBtn = taskForm.querySelector(".btn-warning");

const taskArrayInfo = document.querySelector(".list-group");

// для начала разберемся с полем ввода инпут
addTaskBtn.addEventListener("click", printDataIntoArray);

// создали массив
const taskArray = [];
// заносим данные в массив
function printDataIntoArray(event) {
  taskArray.sort((item1, item2) => item1.id - item2.id);
  event.preventDefault();
  const taskValue = taskInput.value;
  if (taskValue.trim() === "") {
    return;
  } else {
    taskArray.push(taskValue);
    addTaskPush(taskValue);
    taskInput.value = "";
  }
}

function addTaskPush(taskValue) {
  const info = document.createElement("li");
  info.className = "list-group-item";
  info.innerHTML = taskValue;
  taskArrayInfo.append(info);
}

deleteBtn.addEventListener("click", deleteBtnHandler);

function deleteBtnHandler() {
  taskArray.pop();
  taskArrayInfo.removeChild(taskArrayInfo.lastChild);
}

sortBtn.addEventListener("click", sortBtnHandler);

function sortBtnHandler() {
  // Создаем копию массива, чтобы не изменять исходный taskArray
  const sortedTasks = [...taskArray].sort((item1, item2) =>
    item1.localeCompare(item2)
  );

  // Очищаем список задач, чтобы добавить отсортированные задачи
  while (taskArrayInfo.firstChild) {
    taskArrayInfo.removeChild(taskArrayInfo.firstChild);
  }
  sortedTasks.forEach((task) => {
    const info = document.createElement("li");
    info.className = "list-group-item";
    info.innerHTML = task;
    taskArrayInfo.append(info);
  });
}
