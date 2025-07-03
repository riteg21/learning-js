"use strict";

// Выбор элементов
const form = document.forms.form;
const alert = document.getElementById("alert-content");

// Определение константы PI
const PI = Math.PI;

// обработчик отправки формы
form.addEventListener("submit", formSubmitHandler);

// Плохой стиль написания кода
// function formSubmitHandler(event) {
//   event.preventDefault();
//   const radius = form.radius.value;
//   alert.innerHTML = "";
//   const circleLength = 2 * PI * radius;
//   const circleArea = PI * radius ** 2;
//   const div1 = document.createElement("div");
//   div1.className = "mb-2";
//   div1.innerText = `Length: ${circleLength}`;
//   const div2 = document.createElement("div");
//   div2.className = "mb-2";
//   div2.innerText = `Area: ${circleArea}`;
//   alert.append(div1);
//   alert.append(div2);
// }

// Хороший стиль написания кода
function formSubmitHandler(event) {
  event.preventDefault();
  const radius = +form.radius.value;
  alert.innerHTML = "";
  addParameter("Length", calcCircleLength(radius, PI));
  addParameter("Area", calcCircleArea(radius, PI));
}

// Добавление характеристик окружности в alert
function addParameter(name, value) {
  const div = document.createElement("div");
  div.className = "mb-2";
  div.innerText = `${name} : ${value}`;
  alert.append(div);
}

// Определение характеристик окружности
function calcCircleLength(radius, PI) {
  return (2 * PI * radius).toFixed(2);
}

function calcCircleArea(radius, PI) {
  return (PI * radius ** 2).toFixed(2);
}

// Именованное функциональное выражение
const calcRandom = function calc(max) {
  if (!max) calc(10);
  else {
    const random = Math.random() * (max + 1);
    console.log("random =", Math.floor(random));
  }
};
calcRandom();
calcRandom(100);

// Конструктор new Function
const calcPerimeter = new Function("a", "b = a", "return 2*(a + b)");

console.log("perimeter1 = ", calcPerimeter(4));
console.log("perimeter2 = ", calcPerimeter(2, 3));

function calcSum(num1, num2, ...args) {
  // обычные аргументы функции
  console.log("common arguments length :", calcSum.length);
  // дополнительные аргументы
  console.log("rest arguments :", args.length);
  // все переданные аргументы функции
  console.log("all arguments :", arguments.length);
  // сумма всех аргументов
  return num1 + num2 + args.reduce((prev, curr) => prev + curr, 0);
}

console.log("sum1 = ", calcSum(2, 3));
console.log("sum2 = ", calcSum(3, 4, 5, 7, 8, 9, 10));
