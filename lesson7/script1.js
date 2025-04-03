"use strict";

console.log(" ... Операторы сравнения ...");
console.log(5 > 1);
console.log(5 <= 10);
console.log(5 == 5);
console.log(5 === "5");
console.log(5 != 1);

console.log("сравнение строк");
// сравнение строк
const str1 = "Cat";
const str2 = "Dog";
const str3 = "Cats";
const str4 = "cat";
console.log(str1 < str2);
console.log(`C code = ${str1.codePointAt(0)}, D code = ${str2.codePointAt(0)}`);
console.log(str1 > str3);
console.log(str1 == str4);

console.log("сравнение разных типов");
//  сравнения разных типов
console.log(5 > true);
console.log(2 == {});
console.log(null == 0);
console.log(null == undefined);

console.log("логические операторы");
// оператор или ||
console.log(2 || 3);
console.log(4 < 1 || 5 == 3 || 5 > 4);
console.log(null || undefined || false);

console.log("оператор И");
console.log(2 && 3);
console.log(4 < 1 && 5 == 3 && 5 > 4);

console.log(false && true);
console.log(null && undefined && false);

console.log("логический оператор НЕ");

console.log(!true);
console.log(!null);

console.log("оператор нулевого состояния");
console.log(null ?? 1);
console.log(null ?? "Alex" ?? "Misha");
console.log(null ?? undefined);

console.log("оператор логическиого присваивания ИЛИ");
let age = null;
age ||= 18;
console.log(age);

console.log("оператор логическиого присваивания И");
let age1 = null;
age &&= 18;
console.log(age1);

console.log("оператор логическиого нулевого присваивания");
let age2 = null;
age2 ??= 18;
console.log(age2);

console.log("приоритет операторов");
let height;
let width;
let area = (height ?? 10) * (width ?? 20);
console.log(area);
