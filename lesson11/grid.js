"use strict";

const getCar = function (country) {
  if (country == "USA") return "Tesla";
  if (country == "Germany") return "BMW";
  if (country == "Japan") return "Toyota";
  else return "unnown country";
};

console.log(getCar(prompt("Enter a country name for listing a car brand")));

const checkNumber = function (x) {
  if (x % 2 == 0) return "Число четное";
  return "Число нечетное";
};
console.log(checkNumber(prompt("Enter your cheakable number")));

const calcExpronent = function (x, y) {
  console.log(x ** y);
};
console.log(calcExpronent(2, 3));
