"use strict";

// Выбор элементов
const table1 = document.getElementById("table-1");
const table2 = document.getElementById("table-2");
const table3 = document.getElementById("table-3");

// Массив пользователей
const users = [
  {
    id: 2345,
    firstName: "Alex",
    lastName: "Dow",
    age: 34,
    address: "New-York, 5th avenue, 52",
  },
  {
    id: 1647,
    firstName: "Jane",
    lastName: "Stone",
    age: 46,
    address: "Boston, River Road, 9",
  },
  {
    id: 3648,
    firstName: "Barbara",
    lastName: "Maison",
    age: 37,
    address: "Chicago, Flower str, 74",
  },
  {
    id: 3795,
    firstName: "Mike",
    lastName: "Griffin",
    age: 27,
    address: "San-Fracisco, Howard str, 22",
  },
];

// Cкрытие свойства age в объекте пользователей
users.forEach((user) => {
  Object.defineProperty(user, "age", {
    // дескриптор - для работы с объектами
    writable: false, // флаг возможности изменения свойства
    enumerable: false, //флаг скрывает возможность нумирации свойства
  });
});

// Флаги - value (значение), writable (возможность записи), enumerable (возможность перечисления в циклах for...in) и configurable (возможность удаления или изменения дескриптора).

// Клонирование первого пользователя
const newUser = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(users[0])
); // {}: Это пустой объект. Он служит базой для создания клона

// Изменения свойств клона
Object.defineProperties(newUser, {
  id: { value: 4920, writable: false },
  firstName: { value: "Jane", writable: false },
  address: { value: "New-York, Forest str, 18", writable: false },
});

// Добавление клона в массив пользователей
users.push(newUser);

// Отображение массива пользователей в таблице 1
showUsers(users, table1);

function showUsers(users, table) {
  createRow(Object.keys(users[0]), table, "head");
  users.forEach((user, index) => {
    const values = Object.values(user); //массив значений свойств теккущего пользователя
    values.splictae(0, 1, index + 1);
    createRow(values, table);
  });
  s;
}

function createRow(values, table, tablePart = "body") {
  const tr = document.createElement("tr");
  const cellType = tablePart == "head" ? "th" : "td";
  const parent = tablePart == "head" ? table.tHead : table.tBodies[0];
  values.forEach((value) => {
    const cell = document.createElement(cellType);
    cell.innerText = value;
    tr.append(cell);
  });
  parent.append(tr);
}

showDescriptors(users[0]);

function showDescriptors(obj) {
  const props = Object.getOwnPropertyDescriptors(obj);
  const propNames = Object.keys(props);
  const descriptors = Object.values(props);

  const flagNames = Object.keys(descriptors[0]);
  flagNames.unshift("prop name"); //метод массива, который добавляет один или несколько элементов в начало массива и возвращает новую длину массива.
  console.log(flagNames);
  createRow(flagNames, table2, "head");

  descriptors.forEach((descriptor, index) => {
    const flagValues = Object.values(descriptor);
    flagValues.unshift(propNames[index]);
    createRow(flagValues, table2);
  });
}

// Добавление объектам пользователей геттеров
users.forEach((user) => {
  Object.defineProperties(user, {
    city: {
      get() {
        return this.address.split(",")[0];
      },
      enumerable: true,
    },
    street: {
      get() {
        return this.address.split(",")[1];
      },
      enumerable: true,
    },
    building: {
      get() {
        return this.address.split(",")[2];
      },
      enumerable: true,
    },
    address: {
      enumerable: false,
    },
  });
});
showUsers(users, table3);

// Приватные свойства объекта
const book = {
  _pages: 0,
  get pages() {
    return this._pages;
  },
  set pages(value) {
    if (typeof value != "number") {
      console.error("Pages must be a number!");
      return;
    }
    this._pages = value;
  },
};
