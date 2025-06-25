"use strict";

// Выбор элементов
const workerSelect = document.getElementById("worker-select");
const fireWorkerBtn = document.getElementById("fire-worker-btn");
const getAvSalaryBtn = document.getElementById("get-salary-btn");
const showCacheBtn = document.getElementById("show-cache-btn");
const workerSalaryInfo = document.getElementById("worker-salary-info");
const cacheStatusInfo = document.getElementById("cache-status");
const infoPage = document.querySelector(".alert");

// Массив работников
const workers = [
  {
    id: 1,
    name: "John Smith",
    salary: [1200, 1100, 2000, 1400],
  },
  {
    id: 2,
    name: "Mike Kelvin",
    salary: [1000, 1000, 1100, 1000],
  },
  {
    id: 3,
    name: "Sahra Connor",
    salary: [1600, 1500, 1500, 1700],
  },
  {
    id: 4,
    name: "Jake Winsent",
    salary: [1300, 1450, 1300, 1200],
  },
  {
    id: 5,
    name: "Dana Williams",
    salary: [1100, 1200, 1100, 1200],
  },
  {
    id: 6,
    name: "Berty Brown",
    salary: [1500, 1500, 1500, 1500],
  },
  {
    id: 7,
    name: "Alice Tornee",
    salary: [1600, 1400, 1500, 1500],
  },
];

// Добавление работников в раскрывающийся список
fillWorkerSelect(workerSelect, workers);

function fillWorkerSelect(select, workers) {
  workers.forEach((worker) => {
    const option = new Option(worker.name, worker.id); // создаёт новый элемент <option> с: text (отображаемый текст) = worker.name (имя работника).value (значение) = worker.id (уникальный идентификатор).
    select.append(option);
  });
}

// Получение информации о средней зарплате
// Коллекиця данных WeakMap
const averageSalaries = new WeakMap();
getAvSalaryBtn.addEventListener("click", getAvSalary);

function getAvSalary() {
  const worker = getWorker();
  if (worker) {
    workerSalaryInfo.innerText = `Average salary: $${calcAvSalary(worker)}`;
  } else {
    workerSalaryInfo = "Worker is fired";
  }
}

function getWorker() {
  const workerId = +workerSelect.value;
  const worker = workers.find((item) => item.id == workerId);
  return worker ?? null;
}

function calcAvSalary(worker) {
  if (!averageSalaries.has(worker)) {
    const averageSalary =
      worker.salary.reduce((prev, curr) => prev + curr, 0) /
      worker.salary.length; //reduce() проходит по массиву worker.salary и накапливает сумму.prev (аккумулятор) хранит промежуточную сумму.curr — текущий элемент массива (одна из зарплат).0 — начальное значение аккумулятора.
    averageSalaries.set(worker, averageSalary);
    cacheStatusInfo.innerText = "cached";
  } else {
    cacheStatusInfo.innerText = "from cache";
  }

  return averageSalaries.get(worker);
}

// Отображение статуса работника при изменении в списке
workerSelect.onchange = function () {
  if (getWorker()) {
    workerSalaryInfo.innerText = "Information about worker salary";
  } else {
    workerSalaryInfo.innerText = "Worker is fired";
  }
  cacheStatusInfo.innerText = "";
};

// Отображение содержимого кеша
showCacheBtn.onclick = function () {
  console.log(averageSalaries);
};

// Увольнение работника
fireWorkerBtn.addEventListener("click", fireWorker);

function fireWorker() {
  const worker = getWorker();
  if (worker) {
    const workerIndex = workers.findIndex((item) => item.id == worker.id);
    workers.splice(workerIndex, 1); //удаляет 1 элемент из массива workers на позиции workerIndex.
    workerSalaryInfo.innerText = "Worker was successfully fired";
    cacheStatusInfo.innerText = "";
  }
}

// const activeUsers = new WeakSet();

// function addActiveUser(user) {
//     activeUsers.add(user);
// }
