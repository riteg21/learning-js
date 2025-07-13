"use strict";

// Выбор жлементов
const row1Lists = document.querySelectorAll("#row-1 ul");
const row2Lists = document.querySelectorAll("#row-2 ul");

// Функция создания списка
function addItems(listEl, obj, objName) {
  listEl.append(addItem("object", objName, true));
  for (let key in obj) {
    listEl.append(addItem(key, obj[key]));
  }
}

function addItem(key, value, title) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = `${key} : ${value}`;
  if (title) li.classList.add("active");
  return li;
}

// Прототипный подход

// 1. Установка прототипа свойством __proto__
const pc = {
  processor: "Intel",
  "processor model": "Core i3",
  ram: "16GB",
  ssd: "512GB",
  "video card": "integrated",
};

const pc1 = {
  ram: "32GB",
  __proto__: pc,
};

addItems(row1Lists[0], pc1, "PC 1");

// 2. Установка прототипа конструктору (свойство prototype)
function Pc(processor, processorModel) {
  this.processor = processor;
  this["processor model"] = processorModel;
}

Pc.prototype = pc; //существующие объекты сохранят старые значения а те что были переписаны в функции выше изменятся

const pc2 = new Pc("AMD", "Ryzen 3");

addItems(row1Lists[1], pc2, "PC 2");

// 3. Использование методов объекта Object
const pc3 = Object.create(pc, {
  //создаем новый объект на основе имеющегося
  "processor model": {
    // изменяем модель процессора
    value: "Core i5", // и есть возможность тут же регулировать дескриторы
    enumerable: true,
  },
});

addItems(row1Lists[2], pc3, "PC 3");

console.log("pc3 prototype : ", Object.getPrototypeOf(pc3)); //прототип наследования

// класс-ориентированный подход

//1. Родительский базовый класс
class PC {
  "video card" = "integrated";

  constructor(processor, processorModel, ram, ssd) {
    this.processor = processor;
    this.processorModel = processorModel;
    this.ram = ram;
    this.ssd = ssd;
  }

  getInfo() {
    return `processor: ${this.processor} ${this.processorModel}; ram: ${this.ram}; ssd: ${this.ssd}; video card: ${this["video card"]}`;
  }
}

const pc4 = new PC("AMD", "Ryzen 5", "32GB", "1TB");

addItems(row2Lists[0], pc4, "PC 4");

// 2. Наследование класса
class Desktop extends PC {
  constructor(processor, processorModel, ram, ssd, videoCard) {
    super(processor, processorModel, ram, ssd); //вызов родительского конструктора чтобы перенять параметры
    this["video card"] = videoCard;
  }
}

const pc5 = new Desktop("Intel", "Core i3", "16GB", "500GB", "ATI Radeon");

addItems(row2Lists[1], pc5, "PC 5");
console.log("pc5 insranceOf PC : ", pc5 instanceof PC);

//3. Свойства и методы класса
class Animal {
  static animalTypes = []; //куда будет все записываться
  #clinic = "PetsFriend";

  constructor(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;

    Animal.addAnimal(type);
  }

  set type(type) {
    this["animal type"] = type;
  }

  get type() {
    return this["animal type"];
  }

  getClinic() {
    return this.#clinic;
  }

  static addAnimal(type) {
    if (!this.animalTypes.includes(type)) this.animalTypes.push(type);
  }
}

const pet1 = new Animal("cat", "Tom", 5);
addItems(row2Lists[2], pet1, "Pet 1");

const pet2 = new Animal("dog", "Rex", 2);
const pet3 = new Animal("dog", "boy", 1);

console.log("animal types: ", Animal.animalTypes);

console.log("pet3 clinic", pet3.getClinic());
