// "use strict"; - модульная архитектура и так использует строгий режим разработки

// Подключение модулей
import { premiumUsers as users } from "./users.js";
import { showUsers } from "./showUsers.js";
import { getLastUser } from "./getLastUser.js";
import { addInfoItem } from "./addInfoItem.js";
import getAvgAge from "./getAvgAge.js";

// Выбор элементов
const tBody = document.getElementById("tBody");
const infoMsg = document.getElementById("infoMsg");

showUsers(users, tBody);

// Добавление пользователя
users.push({
  id: 3000,
  name: "Maria Light",
  age: 25,
  address: "New York, Flower road, 30",
});

// Получение последнего пользователя
const lastUser = getLastUser(users);
addInfoItem("Last user name", lastUser.name, infoMsg);

// Получение среднего возраста пользователей
const AvgAge = getAvgAge(users);
addInfoItem("Average users age: ", AvgAge, infoMsg);
