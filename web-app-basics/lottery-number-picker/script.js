"use strict";

const btnRandomNumber = document.querySelector("#btn-random-number");
const btnReset = document.querySelector("#btn-reset");
const pickedNumbers = document.querySelector("#picked-numbers");

let numberArray = [];

// ***** RELOAD FROM LOCAL STORAGE *****
if (localStorage.getItem("numbers") !== null) {
  let storageNumbers = JSON.parse(localStorage.getItem("numbers"));
  numberArray = storageNumbers;
  for (let i of storageNumbers) {
    // create a span element for every number (value in numberArray)
    const newNumber = document.createElement("span");
    const newNumberText = document.createTextNode(i);
    newNumber.appendChild(newNumberText);
    pickedNumbers.appendChild(newNumber);
  }
}
if (numberArray.length === 6) {
  btnRandomNumber.disabled = "disabled";
  btnReset.removeAttribute("disabled");
}

//  ***** GET RANDOM NUMBER *****
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// ***** PICK RANDOM NUMBER *****
btnRandomNumber.addEventListener("click", () => {
  let currentNumber = "";
  do {
    // loop that executes a specified statement until the test condition evaluates to false
    currentNumber = getRandomIntInclusive(1, 49); //execute function to get random number
  } while (numberArray.includes(currentNumber)); // stop executing when "numberArray" does not include "currentNumber"
  numberArray.push(currentNumber);
  numberArray.sort((a, b) => {
    return a - b;
  });

  // ***** DISPLAY NUMBERS IN BROWSER *****
  pickedNumbers.innerText = ""; // delete all created span elements
  for (let i of numberArray) {
    // create a span element for every number (value in numberArray)
    const newNumber = document.createElement("span");
    const newNumberText = document.createTextNode(i);
    newNumber.appendChild(newNumberText);
    pickedNumbers.appendChild(newNumber);
  }

  // set in local storage
  localStorage.setItem("numbers", JSON.stringify(numberArray));

  // enable/disable buttons when 6 numbers are picked
  if (numberArray.length > 5) {
    btnReset.removeAttribute("disabled");
    btnRandomNumber.disabled = "disabled";
  }
});

// ***** RESET NUMBERS *****
btnReset.addEventListener("click", () => {
  pickedNumbers.innerText = "";
  numberArray = [];
  localStorage.clear();
  btnReset.disabled = "disabled";
  btnRandomNumber.removeAttribute("disabled");
});
