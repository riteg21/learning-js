"use strict";

console.log("... Циклы ...");

console.log("Цикл с параметром for");
for (let i = 1; i <= 5; i++) console.log(i);

let k = 0;
for (; k < 2; ) {
  console.log(Boolean(k));
  k++;
}

console.log("Цикл с предусловием while");
let n = 5;
while (n > 0) {
  console.log(n);
  n--;
}

console.log("... Цикл с послеусловием do...while ...");
let i = 1;
do {
  console.log(i);
  i++;
} while (i < 5);

console.log(" ...  Переход к следующей итерации - continue ...");
for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
}

console.log(" ...  Прерывание цикла - break ...");
let s = 0;
while (s < 5) {
  if (s == 2) break;
  console.log(s);
  s++;
}

console.log(" ...  Использование меток в циклах ...");
outher: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 3; j++) {
    if (j == 2) break outher;
    console.log(j);
  }
}

console.log(" ...  Префиксная форма инкримента в цикле ...");
let prefix = 0;
while (++prefix < 4) {
  console.log(prefix);
}

console.log(" ...  Постфиксная форма инкримента в цикле ...");
let postfix = 0;
while (postfix++ < 4) {
  console.log(postfix);
} // используй постфикс
