"use strict";

let p = 0;

for (p; p <= 10; p++) {
  if (p % 3 == 0) {
    console.log(p);
  }
}

let sum = 0;

for (let i = 1; i <= 3; i++) {
  //цикл будет повторяться 3 раза

  sum += Number(prompt("введите" + i + "число"));
}
alert(sum);
// let i = 1;
// while (i <= 3) {
//   let input = Number(prompt("Enter" + i + "number"));
//   sum += +input;
//   i++;
// }
// alert(sum);
