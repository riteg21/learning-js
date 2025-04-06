"use strict";

console.log("... Способы объявления функции ...");
console.log("... Function Declaration ...");
function showHelloUser(name) {
  console.log(`Hello, ${name} !`);
}

showHelloUser("Alex");

console.log("... Function Expression ...");
const showHelloUser2 = function (name) {
  console.log(`Hello ${name}`);
};

showHelloUser2("Dasha");

console.log("... Arrow Function Expression ...");
const showHelloUser3 = (name) => console.log(`Hello ${name};`);
showHelloUser3("Pete");

console.log("... Hoisting ...");
console.log("... Функции Function Declaration всплывают ...");
console.log(calcTwice(2));

function calcTwice(num) {
  return num * 2;
}

console.log("... Переменные var всплывают без значения ...");

console.log("var до объявления, до присвоения значения =", num1);
num1 = 10;

console.log("var до объявления, после присвоения значения =", num1);
var num1;
// далее я вычитал что нельзя обращаться к переменной функции, пока сама функция не объвлена - SYNTAX ERROR

console.log("IIFE"); // довольно старая архитектура которая сейчас не встречается но тоже пожалуй рассмотрю
var K = 3.5;

//сторонний скрипт
(function () {
  var K = 10;
  console.log(2 * K);
})();

console.log(K);

console.log(" .... CALLBACK FUNCTION ....");
function getResult(expresion, callback) {
  if (expresion) callback();
}

function showTrueResult() {
  console.log(true);
}

getResult(2 > 1, showTrueResult);
