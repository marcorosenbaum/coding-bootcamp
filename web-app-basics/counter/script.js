"use strict";

// add a eventlistener for key: space and key: enter and click on white area (main)
// on click: count +1 and width of "-process-bar" +1%
// if count reaches 100: width of "-process-bar" = 0%
// if click on reset button: reset "count" and width of "process-bar"

const btnReset = document.querySelector(".btn-reset");
const main = document.querySelector("#main");
const number = document.querySelector("#number");
const processBar = document.querySelector(".process-bar");

const elementForKeys = document.querySelector("body"); // variable für Key interaction

let count = 0; // variable für die nummer
let countBar = 0; // variable zum ändern der background-color

// press space or enter
elementForKeys.addEventListener("keydown", (event) => {
  const key = event.key; // key bekommt den Key der gedrückt wird
  if (key === "Enter" || key === " ") {
    // enter oder space gedrückt
    countBar++; // background-color erweitern
    processBar.style.width = countBar + "%"; // Erhöhung der width von dem background-color div
    count++;
    number.innerText = count;
    if (countBar === 100) {
      countBar = 0;
    }
  }
});

// mouse click
main.addEventListener("click", () => {
  countBar++;
  processBar.style.width = countBar + "%";
  count++;
  number.innerText = count;
  if (countBar === 100) {
    countBar = 0;
  }
});

// reset
btnReset.addEventListener("click", () => {
  count = 0;
  countBar = 0;
  number.innerText = 0;
  processBar.style.width = "0%";
});

//
//
//
// ist auch über pseudo klassen --var zu lösen
