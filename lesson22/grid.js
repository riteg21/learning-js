"use strict";

const btnPrimaryCoords = document.querySelector(".btn-primary");

if (btnPrimaryCoords) {
  btnPrimaryCoords.addEventListener("pointerup", function (event) {
    if (event.target) {
      alert(
        `Event ClientX : ${event.clientX}, Event ClientY : ${event.clientY} \n Event PageX : ${event.pageX}, Event PageY : ${event.pageY}`
      );
    }
  });

  btnPrimaryCoords.addEventListener("click", btnPrimaryCoordsHandler);

  function btnPrimaryCoordsHandler(event) {
    // Передаем event
    const elemCoords = btnPrimaryCoords.getBoundingClientRect();
    alert(
      `X : ${elemCoords.x}, Y : ${elemCoords.y} \n Width : ${elemCoords.width}, Height : ${elemCoords.height}`
    );
  }
}
