"use strict";

// Выбор элементов
const sections = document.querySelectorAll("section");
const btnObserverDisconnect = document.querySelector(".top-btn");

// для задания выберем InterSections Observer
// конфиг обсервера
const sectionObserverConfig = {
  root: null,
  threshold: 0.2,
};

// callBack обсервера
function sectionsCallBack(records, observer) {
  for (let record of records) {
    if (record.isIntersecting) {
      if (record.target) {
        record.target.classList.add("animated");
      }
    } else {
      record.target.classList.remove("animated");
    }
  }
}

btnObserverDisconnect.addEventListener("click", btnObserverDisconnectHandler);

function btnObserverDisconnectHandler() {
  const sectionObserver = new IntersectionObserver(
    sectionsCallBack,
    sectionObserverConfig
  );
  const sectionNodes = sections;
  if (this.classList.contains("btn-warning")) {
    for (let node of sectionNodes) {
      sectionObserver.observe(node);
    }
    this.classList.remove("btn-warning");
    this.innerText = "Start intersecting observe";
    this.classList.add("btn-danger");
    //   } else {
    //     sectionObserver.disconnect();
    //     this.classList.remove("btn-danger");
    //     this.classList.add("btn-warning");
    //     this.innerText = "Stop intersecting observe";
    //   }
  }
}
