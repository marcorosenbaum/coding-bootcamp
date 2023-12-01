"use strict";

/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y). */

// Iterate ober str to check if i is a vowel
// if i is a vowel increse count by 1
// return the number of counted vowel in str

function getCount(str) {
  let count = 0;
  for (let i of str.split("")) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count += 1;
    }
  }
  return count;
}

console.log(getCount("aeiusfgfadf"));
