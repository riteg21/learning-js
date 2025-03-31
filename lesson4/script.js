"use strict";

console.log("*** Числа (number) ***");
let num = 10;
const PI = 3.14;
const devByZero = 45 / 0;
const calcError = "Not a number" / 4;
console.log("num - ", num);
console.log("PI - ", PI);
console.log("devByZero - ", devByZero);
console.log("calcError - ", calcError);

console.log("*** Большие Числа (BigInt) ***");
const BigInt = 123345678n;
console.log(BigInt);

console.log("*** Строки (string) ***");
const str1 = "Я люблю Дашу";
const str2 = "Я очень люблю Дашу";
const str3 = `I am ${2025 - 2005} years old`;
console.log(str1);
console.log(str2);
console.log(str3);
const quotes1 = '"Titanic" ship';
const quotes2 = "I' am your father";
console.log("quotes1 = ", quotes1);
console.log("quotes2 = ", quotes2);
const esc1 = "Total \\ 250";
const esc2 = "line1 \nline2";
const esc3 = "\t start string";
const esc4 = "Inicode symbol: \u00A9";
const esc5 = `line1
    line2
    line3`;
console.log(esc1);
console.log(esc2);
console.log(esc3);
console.log(esc4);
console.log(esc5);

console.log("*** Логические значения (boolean) ***");
const logic1 = true;
const logic2 = 5 > 10;
console.log("logic1 = ", logic1);
console.log("logic2 = ", logic2);

console.log("*** Специальные значения (null and undefined) ***");
const nothing = null;
console.log("nothing = ", nothing);
// null - пустое значение, undefined - значение не присвоено
let notDefined = 23;
notDefined = undefined;
console.log(notDefined);

console.log("*** Символьные пременные (symb) ***");
const symbolId = Symbol();
console.log(symbolId);

console.log("*** Object (object) ***");
const object = window;
console.log(object);

console.log("*** Проверка типа данных (typeof) ***");
console.log("type of 20 = ", typeof 20);
console.log("type of string = ", typeof "string");
