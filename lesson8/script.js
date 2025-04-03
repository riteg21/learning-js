"use strict";

console.log(" ... Условное ветвление ...");
const str = "hello";
if (str == "hello") console.log("Hello");
else console.log("By");

console.log(" ... Несколько условий if else ... ");
const num = 10;
if (num < 10) {
  console.log("num < 10");
} else if (num == 10) {
  console.log("num == 10");
} else {
  console.log("num > 10");
}

console.log(" ... Оператор условного ветвления ?(тернальный оператор) ...");

const logic = 0 > 1;
console.log(logic ? true : false);

console.log(" ... Несколько условных операторов ? ...");

console.log(num < 10 ? "num > 10" : num == 10 ? "num = 10" : "num > 10");

console.log(" ... Инстуркция switch ...");

const fruit = "apple";
switch (fruit) {
  case "orange":
    console.log("orange");
    break;
  case "apple":
    console.log("apple");
    break;
  case "pear":
    console.log("pear");
    break;
  default:
    console.log("unknown fruit");
}

console.log(" ... Инстуркция switch без ключевого слова break...");

const nyama = "apple";
switch (nyama) {
  case "orange":
    console.log("orange");
    break;
  case "apple":
    console.log("apple");

  case "pear":
    console.log("pear");
  default:
    console.log("unknown fruit");
}
console.log(" ... Инстуркция switch группировка вариантов...");
const numCheck = 4;
switch (numCheck) {
  case 2:
  case 4:
  case 6:
  case 8:
    console.log("четное");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
    console.log("нечетное");
    break;
  default:
    console.log("unknown");
}

console.log(" ... Все инструкции switch через if ... else...");
if (numCheck == 2 || numCheck == 4) {
  console.log(" chetnoe");
} else if (numCheck == 1 || numCheck == 3) {
  console.log(" ne chetnoe");
} else {
  console.log("unlnown");
}
