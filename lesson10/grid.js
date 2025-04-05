"use strict";

// function compare(a, b) {
//   if (a == b) return `Числа ${a} и ${b} равны.`;
//   if (a > b) return `Число ${a} больше числа ${b}`;
//   if (a < b) return `Число ${a} меньше числа ${b}`;
// }

// console.log(compare(prompt("Первое число", 0), prompt("Второе число", 0)));
// let d;
// let c = "апи";
// c = d;

function checkPass(pass) {
  let userPassword = "Dasha2006";
  switch (pass) {
    case userPassword:
      return "true";

    default:
      return "unknown password";
  }
}

console.log(checkPass(prompt("Enter your password")));
