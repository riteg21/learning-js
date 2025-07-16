"use strict";

//  Выбор элементов
const alert = document.querySelector(".alert");

// PROMISE
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    //возвращаем промис с результатом загрузки внешнего скрипта. resolve - если true, reject - если false
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(src);
    script.onerror = () => reject(new Error(`Error in script loading: ${src}`));

    document.head.append(script);
  });
}

// const promise = loadScript("one.js");
// promise.then(
//   //then работает так, что есть 2 события которые могут выполнится - для нашей ситуации если скрипт сработал
//   (script) => console.log(`${script} is loaded`), // то вот
//   (error) => console.log(`Error: ${error.message}`) //если нет то вот
// );

// Promise chaining
// Example 1
// loadScript("one.js")
//   .then((script) => loadScript("two.js"))
//   .then((script) => loadScript("three.js"))
//   .then((script) => {
//     // скрипты загружены, можно использовать объявленные в них функции
//     one();
//     two();
//     three();
//   });
//   Example 2
new Promise((resolve, reject) => {
  resolve("Result 1");
})
  .then((result) => {
    console.log("chaining :", result);
    return "Result 2";
  })
  .then((result) => {
    console.log("chaining: ", result);
  });

//   Promise API
// Example 1
Promise.all([
  //ВСЕ ИЛИ НИЧЕГО - либо все скрипты загрузятся успешно, либо, даже если хоть один не загрузится, никакой другой не отобразиться и выдаст ошибку
  loadScript("one.js"),
  loadScript("two.js"),
  loadScript("three.js"),
]).then((result) => {
  console.log("RESULT PROMISE API: ", result);
  one();
  two();
  three();
});

// Example 2
Promise.allSettled([
  // в отличии от метода all все выполнятся - даже если в каком-то из них была ошибка - все остальные выполнятся
  loadScript("one.js"),
  loadScript("two.js"),
  loadScript("three1.js"),
]).then((result) => {
  console.log(result);
  one();
  two();
  three();
});
// 0: {status: 'fulfilled', value: 'one.js'}1: {status: 'fulfilled', value: 'two.js'}2: {status: 'rejected', reason: Error: Error in script loading: three1.js

// async/await
async function loadSource(src) {
  // async ставится перед объявлением функции делает ее асинхронной и заставляет всегда возвращать промис
  try {
    await loadScript(src); // await ставится в асинхронной функции перед промисом. заставляет js дождать выполнения промиса после чего возвращает его результат
    alert.classList.add("alert-info");
    alert.innerText = str;
  } catch (error) {
    console.warn(`Error: ${error.message}`);
  }
}

loadSource("myscript.js");
