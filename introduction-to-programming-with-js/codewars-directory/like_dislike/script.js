"use strict";
const Like = "Like";
const Dislike = "Dislike";
const Nothing = "Nothing";
function likeOrDislike(buttons) {
  if (buttons < 1) {
    return Nothing;
  }
  const result = buttons.reduce((preValue, curValue) =>
    preValue === curValue ? Nothing : curValue
  );
  return result;
}

console.log(likeOrDislike([Like]));
// first try, doesnt pass attemptbut idk why

/* function likeOrDislike(buttons) {
  const buttonsReverse = buttons.reverse(); // turn the array so array[is allways the last input]

  if (buttons.length < 1) {
    return Nothing; // 1) No button is pushed
  } else if (buttonsReverse[1] && buttonsReverse[2] === buttonsReverse[0]) {
    return buttonsReverse[0]; // 3) same button is pushed three times
  } else if (
    buttonsReverse[0] === buttonsReverse[1] &&
    buttonsReverse[2] !== buttonsReverse[0]
  ) {
    return Nothing; // 2) same button is pushed twice
  } else if (buttonsReverse[0] !== buttonsReverse[1]) {
    return buttonsReverse[0]; // 4) different button is pushed
  }
} */
