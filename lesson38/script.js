"use strict";

// Выбор жлементов
const lightEl = document.querySelector(".light");
const counter1Btn = document.querySelector(".btn-success");
const counter2Btn = document.querySelector(".btn-danger");

// Определение цвета светофора
const light = "springgreen";

function changeLight() {
  const light = "tomato";
  console.log(light);
  fireLight();
}

function fireLight() {
  lightEl.style.backgroundColor = light;
}

changeLight();

// Область видимости переменных
// scope: global(window)

const variable = "global";

function block1() {
  // scope: block1
  console.log("variable form block1 : ", variable);

  function block2() {
    // scope: block 2
    const variable = "block 2";
    console.log("variable form block2 : ", variable);
    {
      // scope: block 3
      const variable = "block 3";
      console.log("variable from block 3 : ", variable);
      if (true) {
        // scope: block 4
        const variable = "block 4";
        console.log("variable form block 4 : ", variable);
      }
    }
  }
  block2();
}
block1();

// ЗАмыкание

function getCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

const count1 = getCounter();
counter1Btn.onclick = function () {
  this.previousElementSibling.innerText = count1();
};

const count2 = getCounter();
counter2Btn.onclick = function () {
  this.previousElementSibling.innerText = count2();
};

// Контекст выполения
const user = {
  name: "Alex",
  age: 32,
  getAge() {
    console.log("Age : ", this.age);
  },
};

function getName() {
  console.log("Name : ", this.name);
}

// Глобальный контекст: this = window
console.log("this : ", this);

// Контекст внутри функции: this = undefined (с строгом режиме) или window в не строгом
// getName();

// Контекст функции-метода объекта: this = obj
user.getAge();

// Привязка контекста
// 1. Точечная нотация
user.getName = getName;

console.log("*** DOt notation ***");
user.getName();

// 2. Bind()
const car = {
  name: "Toyota",
  productionYear: 2020,
};

const getCarName = getName.bind(car);
console.log("*** Метод Bind() ***");
getCarName();

// 3. Call
function getInfo(methodName) {
  console.log(`*** Method: ${methodName} ***`);
  this.getName();
  this.getAge();
}

getInfo.call(user, "call");

// 4. Apply()
getInfo.apply(user, ["aplly"]);
