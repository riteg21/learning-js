"use strict";

const pet = {
  name: "Bobik",
  "born year": 2020,
  color: "black",
};
console.log("name" in pet);
console.log("born year" in pet);

console.log(".............");

for (let key in pet) {
  console.log(`${key} : ${pet[key]}`);
}
console.log(".............");

console.log(pet.name);
console.log(pet["born year"]);

console.log(".............");

console.log(pet);

console.log(".............");

const car = {
  name: "Ford",
  caseType: "sedan",
  color: "black",
};
car.getName = function () {
  console.log("Manufactured:", car.name);
};
car.getName();
car.getColor = function () {
  console.log("Color:", car.color);
};
car.getColor();
