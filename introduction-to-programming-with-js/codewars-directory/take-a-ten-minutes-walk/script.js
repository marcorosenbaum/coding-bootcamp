"use strict";

const array = ["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"];

function isValidWalk(walk) {
  let count1 = 0;
  let count2 = 0;

  walk.forEach((element) => {
    if (element === "n") {
      count1++;
    }
    if (element === "s") {
      count1--;
    }
    if (element === "e") {
      count2++;
    }
    if (element === "w") {
      count2--;
    }
  });

  return count1 === 0 && count2 === 0 && walk.length === 10 ? true : false;
}

console.log(isValidWalk(array));
