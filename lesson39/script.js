"use strict";

// Выбор элементов
const listEl = document.getElementById("list-1");
const form = document.forms.pow;

// Рекурсия
// Пример 1. Сумма чисел
// Решение с использованием цикла
function loopSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log("loopSum(4) =", loopSum(4));

// Решение через рекурсию
function recursionSum(n) {
  if (n == 1) return 1;
  return n + recursionSum(n - 1);
}

console.log("recursionSum(4) =", recursionSum(4));

// Пример 2. Рекурсивный обход
const list = [
  { title: "Item 1", link: "item1.html" },
  {
    title: "Item 2",
    link: "item2.html",
    subitems: [
      { title: "Item 2.1", link: "item21.html" },
      { title: "Item 2.2", link: "item22.html" },
    ],
  },
  {
    title: "Item 3",
    link: "item2.html",
    subitems: [
      { title: "Item 3.1", link: "item31.html" },
      { title: "Item 3.2", link: "item32.html" },
      {
        title: "Item 3.3",
        link: "item33.html",
        subitems: [
          { title: "Item 3.3.1", link: "item331.html" },
          { title: "Item 3.3.2", link: "item332.html" },
        ],
      },
      { title: "Item 3.4", link: "item34.html" },
    ],
  },
  { title: "Item 4", link: "item4.html" },
];

function makeNewList(wrapEl, list) {
  list.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = item.title;
    a.href = item.link;
    li.append(a);
    wrapEl.append(li);
    if (item.subitems) {
      const ul = document.createElement("ul");
      li.append(ul);
      makeNewList(ul, item.subitems);
    }
  });
}

makeNewList(listEl, list);

// Декораторы
console.log("ДЕКОРАТОРЫ");
// Произвольная функция
const pow = function (x, y) {
  return x ** y;
};

// console.log("result form initial function: ", pow(2, 3));

// Функция-декоратор кеширования
function cacheDecorator(func) {
  const cache = new Map();
  return function (...args) {
    const key = args.join("-"); //все аргументы будут через дефис
    let result;
    if (cache.has(key)) {
      result = cache.get(key);
      console.log("from cache");
    } else {
      result = func.apply(this, args); //разворачивает массив в отдельные аргументы
      cache.set(key, result);
      console.log("result is cached");
    }
    return result;
  };
}

const cachedPow = cacheDecorator(pow);

form.calc.onclick = function () {
  const base = form.base.value;
  const pow = form.pow.value;
  form.result.value = cachedPow(base, pow);
};

// Заимствование метода
console.log("Заимствование метода");

const car = {
  model: "unknown",
  getModel() {
    return this.model;
  },
};

const car1 = {
  model: "BMW X5",
};

console.log("car model : ", car.getModel.call(car1));
//
//
//
//
//
//
//
// Метод concat() используется для объединения массивов или значений в новый массив.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = arr1.concat(arr2);
// result: [1, 2, 3, 4, 5, 6]
// arr1 и arr2 остаются без изменений

//что call, что apply пеёозволяют явно установить this - но call принимает аргументы по отдельности, а apply - массивом
// пример call
function greet(name, age) {
  console.log(`Привет, ${name}! Тебе ${age} лет. Контекст:`, this);
}

const context = { id: 123 };

greet.call(context, "Анна", 25);
// Выведет: Привет, Анна! Тебе 25 лет. Контекст: {id: 123}

// пример apply
function greet(name, age) {
  console.log(`Привет, ${name}! Тебе ${age} лет. Контекст:`, this);
}

const contextO = { id: 123 };
const args = ["Анна", 25];

greet.apply(contextO, args);
// Выведет то же самое, что и в call
