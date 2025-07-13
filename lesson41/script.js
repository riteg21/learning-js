"use strict";

// Выбор элементов
const form = document.forms.userForm;
const submitAlert = document.querySelector("#form-status");
const userInfo = document.querySelector("#user-salary");

// 1. перехват ошибки
// Обработчик отправки формы
form.onsubmit = function (event) {
  event.preventDefault();
  // Валидация введенных данных
  const result = validateForm(this);
  try {
    if (result) {
      showSubmitAlert("success");
    } else {
      showSubmitAlert("danger");
      return false;
    }
  } catch (error) {
    console.log("validation failed");
    showCaughtError(error);
  }

  //   Симуляция отправки формы
  console.log("form has been submitted");
  form.reset();
};

function validateForm(form) {
  let result = true;
  if (
    !validateField(form.name.value, "[a-zA-Z]*$") ||
    !validateField(form.email.value, "^(.+)@(.+)$") ||
    !validateField(form.age.value, "^[\\d]{1,2}$")
  )
    result = false;
  return result;
}

function validateField(field, mask) {
  return field.match(mask); //проверка на совместимость введенных данных с маском
}

function showSubmitAlert(status) {
  submitAlert.classList.remove("alert-danger", "alert-success");
  submitAlert.classList.add(`alert-${status}`);
  submitAlert.innerText =
    status == "success" ? "form has been submitted" : "form contains errors";
}

function showCaughtError(error) {
  console.warn(`${error.name}: ${error.message}`);
}

// 2. Генерация и проброс ошибки
const user1 = {
  name: "Alex Stone",
  position: "manager",
  salaries: [400, 500, 450],
};
const user2 = {
  name: "Mary Brown",
  position: "designer",
};
const user3 = {
  name: "Tom Rider",
  salaries: "fired",
};

function calcMedianSalary() {
  let result = true;
  try {
    // Генерация ошибки
    if (!this.salaries) {
      throw new SyntaxError(`for user ${this.name} salaries are absent`);
    }
    return (
      "$" +
      this.salaries.reduce((prev, curr) => prev + curr, 0) /
        this.salaries.length
    );
  } catch (error) {
    result = false;
    if (error.name == "SyntaxError") {
      showCaughtError(error);
    }
    // проброс ошибки
    else {
      throw error;
    }
    return "unavailable";
  } finally {
    //   блок finally
    console.log(`logged ${this.name} : ${result}`);
  }
}

function addUserInfo(user) {
  const div = document.createElement("div");
  div.className = "alert alert-light";
  div.innerText = `User ${user.name} median salary: ${calcMedianSalary.call(
    user
  )}`;
  userInfo.append(div);
}

try {
  addUserInfo(user1);
  addUserInfo(user2);
  addUserInfo(user3);
} catch (error) {
  showCaughtError(error);
}

// 3. Пользовательские ошибки
const testElement = document.querySelector("#test-element");
const myElement = document.querySelector("#my-element");

class ElementError extends TypeError {
  constructor(message) {
    super(message);
    this.message = "Element not found";
    this.name = "ElementError";
  }
}

function addText(element, content) {
  if (element == null) {
    throw new ElementError();
  }
  element.innerText = content;
}

try {
  addText(testElement, "Test example");
  addText(myElement, "Test example");
} catch (error) {
  if (error instanceof ElementError) {
    showCaughtError(error);
  } else {
    // Неизвестная ошибка, проброс исключения
    throw error;
  }
}
