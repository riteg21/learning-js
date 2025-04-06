"use strict";

console.log("... Структура объекта ...");
const name = "Alex";
let age = 24;

const user = {
  name,
  age,
};

console.log(user);

console.log("... Свойство объекта из нескольких слов ...");
const car = {
  name: "Toyota",
  color: "black",
  "production year": 2020,
};

console.log(car);

console.log("... Доступ к свойствам объекта ...");
console.log("user name:", user.name);
console.log("user age:", user.age);
console.log("car production year:", car["production year"]);

console.log("... Добавление свойст после создания объекта ...");
const company = {};
company.name = "Dream Company";
company["foundation year"] = 2020;

console.log(company);

console.log("... Объект в объекте ...");
user.adress = {
  "zip code": 15325,
  city: "New York",
  street: "Kalinina 14",
  building: 24,
  apartment: 1234,
};

console.log(user);

console.log("... Изменение свойств объекта ...");
company.name = "Target company";
console.log(company.name);

console.log("... Удаление свойств объекта ...");
delete company["foundation year"];
console.log(company);

console.log("... Проверка наличия свойства с заданным ключом ...");
console.log("name" in user);
console.log("education" in user);
console.log(user.education);

console.log("... Перебор свойств объекта Циклом for...in ...");
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}

console.log("... Структура Методов Объекта ...");
const cat = {
  name: "Kitty",
  "born year": 2019,
  sayHello: function () {
    console.log("Meow > ~ <!");
  },
};
cat.sayHello();

const dog = {
  name: "Alex",
  age: 13,
  sayHello() {
    console.log("Woof");
  },
};
dog.sayHello();

console.log("... Добавление, изменение и удаление методов ...");
const person = {
  name: "Alex",
};

function sayHello() {
  console.log("Hello!");
}
person.sayHello = sayHello;
person.sayHello();

person.sayHello = function () {
  console.log("hi!");
};
person.sayHello();

delete person.sayHello;
console.log(person);

console.log("... вызов несуществующего метода приводит к ошибке ...");
// person.sayHello();

console.log("... Обращение к св-вам объекта из метода ...");
person.sayHello = function () {
  console.log(`Hello! My name is ${this.name}`);
};
person.sayHello();
