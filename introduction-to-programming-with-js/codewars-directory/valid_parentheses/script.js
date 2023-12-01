"use strict";

function validParentheses(parenStr) {
  let result = 0;

  if (parenStr.startsWith(")") || parenStr.length > 100) {
    return false;
  }
  for (let index = 0; index <= parenStr.length; index++) {
    if (parenStr[index] === "(") {
      result += 1;
    } else if (parenStr[index] === ")") {
      result -= 1;
    }
    if (result < 0) {
      return false;
    }
  }

  if (result === 0) {
    return true;
  } else return false;
}
console.log(validParentheses("())"));

const array = [2, 3, 5, 7, 11];
const find = (a, e) => (a.includes(e) ? a.indexOf(e) : "Not found");

console.log(find(array));

function sum(numbers) {
  return numbers.reduce((a, c) => a + c, 0);
}

console.log(sum([]));
