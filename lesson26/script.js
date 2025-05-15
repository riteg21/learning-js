"use strict";

// Методы у примитивов
let num = 10;
console.log(num, typeof num);
num = num.toString();
console.log(num, typeof num);

// Выбор элементов
const numResults = document.getElementById("num-results");

// формы записей чисел
const million1 = 1000000;
const million2 = 1_000_000;
const million3 = 1e6;

document.getElementById("print-million").onclick = function () {
  numResults.innerHTML = `
    million1: ${million1} <br> 
    million2: ${million2} <br>
    million3: ${million3} 
    `; //<br>  - переход к новой строке
};

// Различные системы счисления
document.getElementById("number-systems").onclick = function () {
  numResults.innerHTML = `
    0b100: ${0b100} <br>
    0o100: ${0o100} <br>
    0x100: ${0x100} <br>
    4..toString(2): ${(4).toString(2)} <br>
    64..toString(8): ${(64).toString(8)} <br>
    256..toString(16): ${(256).toString(16)} <br>
    `;
};

// Преобразование строки в число
const parseStr = "4.5rem";

document.getElementById("parse-string").onclick = function () {
  numResults.innerHTML = `
    Number("${parseStr}"): ${Number(parseStr)} <br>
    Number.parseInt("${parseStr}"): ${Number.parseInt(parseStr)} <br>
    Number.parseFloat("${parseStr}"): ${Number.parseFloat(parseStr)} <br>
    Number.isFinite("${parseStr}"): ${Number.isFinite(parseStr)} <br>
    Number.isNan("${parseStr}"): ${Number.isNaN(parseStr)}
    `;
};

// Свойства и методы объекта Math
document.getElementById("math-methods").onclick = function () {
  numResults.innerHTML = `
    Math.min(3, 7, 2, 1.5): ${Math.min(3, 7, 2, 1.5)} <br>
    Math.max(3, 7, 2, 1.5): ${Math.max(3, 7, 2, 1.5)} <br>
    Math.pow(2, 3): ${Math.pow(2, 3)} <br>
    Math.sqrt(64): ${Math.sqrt(64)} <br>
    Math.sin(30deg): ${Math.sin((Math.PI * 30) / 180)} <br>
    Math.sin(60deg): ${Math.cos((Math.PI * 60) / 180)} <br>
    '5.4 == 5.4' ${5.1 + 0.3 == 5.4} <br>
    '5.4 == 5.4' ${Number((5.1 + 0.3).toFixed(1) == 5.4)}
    `;
  //min- минимальное число списка; max- максимальное; pow- возвращает 2 в 3 степени; sqrt - положительный квадратный корень числа;
};

// округление чисел
document.getElementById("math-round").onclick = function () {
  const num = 13 / 3;
  numResults.innerHTML = `
    num: ${num} <br>
    Math.floor(): ${Math.floor(num)} <br>
    Math.ceil(): ${Math.ceil(num)} <br>
    Math.round(): ${Math.round(num)} <br>
    Math.trunc(): ${Math.trunc(num)} <br>
    `;
};
// Генерация случайных чисел
document.getElementById("math-random").onclick = function () {
  const min = 3;
  const max = 13;
  numResults.innerHTML = `
    Math.random: ${Math.random()} <br>
    Math.random(min-max): ${Math.floor(min + Math.random() * (max + 1 - min))}

    `;
};
