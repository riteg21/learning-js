"use strict";

console.log(" ... Динамическая типизация данных ...");
let someVar = 40;
console.log("type of someVar = ", typeof someVar);
someVar = "string";
console.log("type of someVar = ", typeof someVar);
someVar = true;
console.log("type of someVar = ", typeof someVar);
// значение переменной someVar изменяется динамически

console.log(" ... Пользовательское преобразование типов данных ...");
// const num1 = Number(prompt("Enter number 1", 0));
// const num2 = Number(prompt("Enter number 2", 0));
// console.log(typeof num1);
// console.log(typeof num2);
// console.log("sum = ", num1 + num2);

// Числовые преобразования
console.log("true to number:", Number(true));
console.log("null to number:", Number(null));
console.log("undefined to number:", Number(undefined));
console.log("string to number:", Number("string"));

// Строковые преобразования
console.log("true to string:", String(true));
console.log("null to string:", String(null));
console.log("undefined to string:", String(undefined));
console.log("string to string:", String(20));

// Логические преобразования
console.log("true to boolean:", Boolean(40));
console.log("null to boolean:", Boolean("string"));
console.log("undefined to boolean:", Boolean(undefined));
console.log("string to boolean:", Boolean(null));

// итого строковые преобразования выводят в консоль разрабочика значения в строковом формате, числовые в числовом, логические в логическом

console.log(" ... Автоматическое преобразование типов ...");
const num = 10;
const logic = true;
const divide = num / logic;
console.log(typeof num);
console.log(typeof logic);
console.log(typeof divide);
console.log("divide", divide);
