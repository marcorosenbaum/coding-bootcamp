"use strict";
/* 
Ich brauche einen State mit dem gesuchten wort und dem failcount
das wort in dem state ist ein array bestehend aus den buchstaben des wortes

jeder buchstabe in dem array ist ein objekt mit dem buchstaben und visibility hidden/false

Ich brauche einen eventlistener für den footer mit einem switch der überprüft ob der 
gedrückte buchstabe im wort enthalten ist. If yes, make the letter visible
if No fail count + 1

ich brauche eine if condition zur kontrolle der fails

ich brauche einen reset/new game button

*/

const letterFooter = document.querySelector("#letter-footer");
const currentWord = document.querySelector("#main");
const btnNewGame = document.querySelector("#btn-new-game");
const failCount = document.querySelector("#fail-count");

const state = {
  word: [
    { letter: "t", visibility: "hidden" },
    { letter: "e", visibility: "hidden" },
    { letter: "s", visibility: "hidden" },
    { letter: "t", visibility: "hidden" },
  ],
  fails: 0,
  _buttons: [],
};

function renderState() {
  currentWord.innerHTML = "";
  failCount.innerText = "fails: " + `${state.fails.toString()}` + "/10";

  state.word.forEach((item) => {
    const newSpan = document.createElement("span");
    if (item.visibility === "visible") {
      newSpan.style.visibility = "visible";
      newSpan.innerText = item.letter;
    } else newSpan.innerText = "_";
    // style in class tun und hier class zu weisen
    newSpan.style.margin = "1rem";
    currentWord.appendChild(newSpan);
  });
}

// select letter
letterFooter.addEventListener("click", (event) => {
  event.target.disabled = "true";

  if (state.fails < 10) {
    let result = false;
    // fals der gewählte Buchstabe vorhanden ist, result true
    state.word.some((element) => {
      if (element.letter === event.target.innerText) {
        return (result = true);
      }
    });
    // wenn result false, fails +1
    if (!result) {
      state.fails += 1;
    }
    changeVisibilty(event.target.innerText);
    renderState();
  }
  // Display "solved" and "failed" state with colors
  let solved = false;
  state.word.every((letter) =>
    letter.visibility === "hidden" ? (solved = false) : (solved = true)
  );
  solved === true ? (currentWord.style.backgroundColor = "green") : "";
  console.log(solved);
  if (state.fails === 10) {
    currentWord.style.backgroundColor = "red";
    currentWord.innerText = "F A I L";
  }
});

// function change visibilty of letter
function changeVisibilty(letter) {
  state.word.forEach((item) => {
    if (item.letter === letter) {
      item.visibility = "visible";
    }
  });
}

// * * * * NEW GAME * * * *
btnNewGame.addEventListener("click", () => {
  // get an ARRAY of all buttons in the document
  const buttons = document.querySelectorAll("button");
  // remove all disabled attributes
  buttons.forEach((button) => {
    button.removeAttribute("disabled");
  });

  getRandomWord();
  state.fails = 0;
  renderState();
  currentWord.style.backgroundColor = "";
});

// * * * * RANDOM WORDS * * * *
function getRandomWord() {
  const words = [
    "flexbox",
    "test",
    "homework",
    "short",
    "coding",
    "bootcamp",
    "europe",
  ];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomWord = words[getRandomInt(7)];

  state.word = [];

  const splittedWord = randomWord.split("");
  splittedWord.forEach((item) => {
    state.word.push({ letter: item, visibility: "hidden" });
  });
  console.log(state);
}

// get random word by refresh
getRandomWord();
renderState();
