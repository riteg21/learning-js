"use strict";

// Выбор элементов
const table = document.querySelector(".table");
const tableBody = table.tBodies[0];
const alertWrapper = document.querySelector(".col-4");
const alert = alertWrapper.querySelector(".alert");

const users = [
  {
    name: "John Smith",
    age: 25,
    adress: {
      zip: 1245,
      city: "New York",
      street: "5th Avenu, 56/45",
    },
  },
];

// Копирование объектов
// Копирование ссылки на объект
// const user2 = users[0];

// Поверхностное клонирование объекта
// const user2 = Object.assign({}, users[0]); //{} - создание нового объекта куда будет осуществляться клонирование, 2 аргумент - то что мы клонируем

// глубокое клонирование объекта
//const user2 = structuredClone(users[0]);
const user2 = JSON.parse(JSON.stringify(users[0]));
user2.name = "Jake Smith";
user2.adress.street = "Stone str, 57";
users.push(user2);

// Отображение пользваотелей в таблице
showUsers(users);

// клонирование дом-объектов
const alert2 = alert.cloneNode(true);
alert2.innerText = "Element 2";
alertWrapper.append(alert2);

// Свойства объекта Object
console.log("user2 entries :", Object.entries(user2));
console.log("user2 keys :", Object.keys(user2));
console.log("user2 values:", Object.values(user2));

// Функции конструкторы объектов
function User(name, age, adress) {
  this.name = name;
  this.age = age;
  this.adress = adress;
}

function Adress(zip, city, street) {
  this.zip = zip;
  this.city = city;
  this.street = street;
}

users.push(
  new User("Mary Brown", 35, new Adress(2545, "Las-Vegas", "Brick str, 56"))
);
users.push(
  new User(
    "Alex Marshall",
    35,
    new Adress(1378, "Washington", "13th Avenu 21/564")
  )
);

showUsers(users);

// Функция отображения пользователей в таблице
function showUsers(users) {
  tableBody.innerHTML = "";
  users.forEach((user) => createRow(user));
}

// Вспомогательная функция создания строки таблицы с данными введенного пользователя
function createRow(user) {
  const rowElement = document.createElement("tr");
  for (let i = 0; i < 6; i++) {
    const tdElement = document.createElement("td");
    let tdText;
    switch (i) {
      case 0:
        tdText = tableBody.rows.length + 1;
        break;
      case 1:
        tdText = user.name.split(" ")[0];
        break;
      case 2:
        tdText = user.name.split(" ")[1];
        break;
      case 3:
        tdText = user.age;
        break;
      case 4:
        tdText = user.adress.city;
        break;
      case 5:
        tdText = user.adress.street;
        break;
    }
    tdElement.innerText = tdText;
    rowElement.append(tdElement);
  }
  tableBody.append(rowElement);
}
