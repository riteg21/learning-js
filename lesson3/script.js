"use strict";

// Недопустимые имена переменных
// const user1 = "John";
// const function = "My function"

// Регистр символов в названии переменных имеет явное значение. Нельзя использовать цифры в начале кода, а также названия существующих в языке функций в в названии элемента.

let notuser = "Alex";
console.log(notuser);

// как элементы названы так к ним и обращайся

const fruit = "apple";
// fruit = "orange";
console.log(fruit);

// Базовые константы предиктом неизменны

const PI = 3.14;
let radius = 2;
let circleLength = 2 * PI * radius;
console.log("circle length:", circleLength);

// итак let - это изменное, const - неизменное

let age;
console.log("age:", age);
age = 18;
console.log(age);

// объявление переменной без присваивания

let username1 = "Sanek",
  username2 = "Dasha",
  username3 = "Nya";
console.log("usernames:", username1, username2, username3);

// объявление нескольких переменных с присваиванием

// почему var какашка? переменные var доступны за пределами блоков

{
  var a = 10;
}
console.log("a=", a);
{
  let b = 20;
}
// console.log("b=", b);

var a = 20;
var a = 40;
console.log("a=", a);

let b = 25;
// let b = 45;
console.log(b);

// переменные var становятся частью глобального объекта
console.log("global a:", window.a);
console.log("global b:", window.b);
