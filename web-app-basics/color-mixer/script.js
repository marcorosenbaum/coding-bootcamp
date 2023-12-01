"use strict";

const sliderRed = document.querySelector("#slider-red");
const sliderGreen = document.querySelector("#slider-green");
const sliderBlue = document.querySelector("#slider-blue");
const rgbCode = document.querySelector("#rgb-code");

const main = document.querySelector("#main");

// rgb to hex
const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

rgbCode.innerText = rgbToHex(
  Number(sliderRed.value),
  Number(sliderGreen.value),
  Number(sliderBlue.value)
);

function changeColor() {
  // change color
  main.style.setProperty(
    "--color",
    "rgb(" +
      sliderRed.value +
      "," +
      sliderGreen.value +
      "," +
      sliderBlue.value +
      ")"
  );

  /*   main.style.backgroundColor =
    "rgb(" +
    sliderRed.value +
    "," +
    sliderGreen.value +
    "," +
    sliderBlue.value +
    ")"; */

  // change code
  rgbCode.innerText = rgbToHex(
    Number(sliderRed.value),
    Number(sliderGreen.value),
    Number(sliderBlue.value)
  );
}

document.querySelector("#header").addEventListener("input", changeColor);

/* sliderRed.addEventListener("input", () => {
  changeColor();
});

sliderGreen.addEventListener("input", () => {
  changeColor();
});

sliderBlue.addEventListener("input", () => {
  changeColor();
}); */
