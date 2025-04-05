"use strict";

console.log("... fУнкция без параметров ...");
function showHelloMessage() {
  console.log("Hello");
}

showHelloMessage();

console.log("... Функция с параметрами ...");
function showUserInfo(name, age) {
  console.log(`Hello! My name is ${name}. I am ${age} years old.`);
}

showUserInfo("Alex", 22);
showUserInfo("Mary", 20);

console.log("... Функция без return ...");
console.log(showUserInfo("Jane", 24));

console.log("... Функиця с return ...");
function calcSum(num1, num2) {
  return num1 + num2;
}

let sum = calcSum(4, 5);
console.log("sum =", sum);

console.log("... Функция с несколькими return ...");
function checkParity(num) {
  if (num % 2 == 0) return "Четное";
  return "Нечетное";
}

console.log(checkParity(2));
console.log(checkParity(3));

console.log("... Функция с параметрами по умолчанию ...");
function showMassege(text = "empty text") {
  return `Message = ${text}`;
}

console.log(showMassege("example text"));
console.log(showMassege());

console.log(
  "... Внешний код не имеет доступа к локальным переменным функции ..."
);

function calcTotal(price, quantity) {
  let total = price * quantity;
  return total;
}

console.log(calcTotal(10, 3));
// console.log(total); приводит к ошибки потому что мы не можем извне обращаться к переменным находящимся в теле функции.
// но если мы вне тела функции объявим переменную total, то код сработает без всяких ошибок
let total;
console.log(total);

console.log(" ... Функция имеет доступ обращаться к внешним переменнным ... ");
let userName = "Дашуля";
function showHelloUser() {
  console.log(`Hello ${userName}`);
}

showHelloUser();

console.log(
  "... Фцнкция с параметром вместо использования внешних переменных ..."
);
function showHelloUser2(userName) {
  console.log(`Hello, ${userName} !`);
}

showHelloUser2("sasha");
