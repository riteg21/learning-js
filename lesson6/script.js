"use strict";

console.log(" ... Арифметические операторы ... ");
// Операторы сложения
console.log("2 + 4 = ", 2 + 4);
// вычитание
console.log("5 - 2 = ", 5 - 2);
// умножение
console.log(" 5 * 2 = ", 5 * 2);
// деление
console.log(" 5 / 2 = ", 5 / 2);
// возведение в степень
console.log(" 5 ** 2 = ", 5 ** 2);

console.log(" ... Унарные + и - ...");
console.log("-2 = ", -2);
console.log("+ 2 =", +2);

console.log('+"4" = ', +"4");
console.log('+"null" = ', +null);
console.log('+"string" = ', +"string");

console.log(" ... Операторы присваивания ...");
// обычное присваивание
let num1 = 35;
console.log(num1);
// присваивание с вычитанием
let num2 = 35;
num2 += 5;
console.log(num2);
// присваивание с вычитанием
let num3 = 45;
num3 -= 25;
console.log(num3);
// присваивание с умножением
let num4 = 5;
num4 *= 2;
console.log(num4);
// присваивание с делением
let num5 = 100;
num5 /= 2;
console.log(num5);
// присваивание с возведением в степень
let num6 = 5;
num6 **= 2;
console.log(num6);
// присваивание с нахождением процента
let num7 = 100;
num7 %= 15;
console.log(num7);

console.log(" ... Инкримент и дикремент ...");
let num8 = 10;
num8++;
console.log(num8);
let num9 = 10;
num9--;
console.log(num9);

// постфиксная форма
let count1 = 1;
console.log(count1++);
console.log(count1);

// префиксная форма
let count2 = 1;
console.log(++count2);
console.log(count2);
