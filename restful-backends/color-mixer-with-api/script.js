"use strict";

const sliderRed = document.querySelector("#slider-red");
const sliderGreen = document.querySelector("#slider-green");
const sliderBlue = document.querySelector("#slider-blue");
const rgbCode = document.querySelector("#rgb-code");

const btnRandomColor = document.querySelector("#btn-random-color");

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

  // change code
  rgbCode.innerText = rgbToHex(
    Number(sliderRed.value),
    Number(sliderGreen.value),
    Number(sliderBlue.value)
  );
}

document.querySelector("#header").addEventListener("input", changeColor);

// choose random color via api
btnRandomColor.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const newColor = data.rgb;
      sliderRed.value = newColor.r;
      sliderGreen.value = newColor.g;
      sliderBlue.value = newColor.r;
      changeColor();
    });
});
