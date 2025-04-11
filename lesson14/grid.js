"use strict";

const head1 = document.querySelector("h1");
console.log("head1 : ", head1);

const liItem = document.getElementsByTagName("li");
console.log(liItem);

function checkAllLiHaveClass(className) {
  const liItems = document.getElementsByTagName("li");

  for (let i = 0; i < liItems.length; i++) {
    if (!liItems[i].matches(`.${className}`)) {
      return `${i + 1}th element has another class`;
    }
  }

  return "success";
}

console.log(checkAllLiHaveClass("list-group-item"));

// function asd(classMame) {
//   const element_number = document.getElementsByTagName("li");
//   for (let i = 0; i < element_number.length; i++) {
//     if (!element_number[i].matches(`.${classMame}`)) {
//       return `${i + 1}th element has another class`;
//     }
//   }
//   return "success";
// }
// console.log(asd("list-group-item"));
