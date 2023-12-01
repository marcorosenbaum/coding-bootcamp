"use strict";
// task 06-01 using loops

function oddNumbers(a, b) {
  let numbers = "";
  if (a < 0 || b < 0) {
    return (numbers = "negative number");
  }

  for (let index = a; index <= b; index++) {
    if (index % 2 !== 0 && numbers === "") {
      numbers += index;
    } else if (index % 2 !== 0) {
      numbers += ", " + index;
    }
  }

  return numbers;
}

// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

console.log("===================");
// TEST TEST TEST TEST

function findFirstCharacterPosition(word, char) {
  let result;

  for (let index = 0; index < word.length; index++) {
    const currentChar = word[index];
    if (currentChar === char) {
      result = index;
    }
  }
  return result;
}

console.log(findFirstCharacterPosition("Hallo", "o"));
// TEST TEST TEST TEST
console.log("===================");

// task 06-02 charCount function

function charCount(word, filter) {
  let quit = 0;
  if (filter.length > 1) {
    return (quit = "to many characters");
  }
  for (let index = 0; index < word.length; index += 1) {
    /* const count = word[index]; */
    if (word[index] === filter) {
      quit += 1;
    }
  }
  return quit + " " + filter;
}

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
