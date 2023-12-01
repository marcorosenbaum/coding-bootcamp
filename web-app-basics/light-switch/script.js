"use strict";

const btnLight = document.querySelector("#btn-light");
const body = document.querySelector("body");

btnLight.addEventListener("click", () => {
  btnLight.classList.toggle("btn-light-on");
  body.classList.toggle("body-dark");
});
