"use strict";

// not all checkboxes can be checked at the same time
// if the third checkbox is checked, you have to uncheck the one that got checked before

// I need something to store the last checked checkbox ===> "lastChecked"
// how it works (start: nothing checked)
// click first box, clicked box ist the lastChecked
// click box: if already checked, uncheck, if unchecked: uncheck the box inside "lastChecked"

const btnFast = document.querySelector("#fast");
const btnCheap = document.querySelector("#cheap");
const btnGood = document.querySelector("#good");

let lastChecked;

btnFast.addEventListener("click", () => {
  if (btnCheap.checked && btnGood.checked) {
    lastChecked.checked = false;
  }
  lastChecked = btnFast;
});

btnCheap.addEventListener("click", () => {
  if (btnFast.checked && btnGood.checked) {
    lastChecked.checked = false;
  }
  lastChecked = btnCheap;
});

btnGood.addEventListener("click", () => {
  if (btnCheap.checked && btnFast.checked) {
    lastChecked.checked = false;
  }
  lastChecked = btnGood;
});
