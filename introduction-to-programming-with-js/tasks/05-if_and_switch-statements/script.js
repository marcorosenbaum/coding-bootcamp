"use strict";

// task 05-01 if and switch statements

const size = 21;
let result;

if (size < 10) {
  result = "lower than 10";
} else if (size < 20) {
  result = "Greater than 10";
} else {
  result = "Greater than 20";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

console.log("=========with % ==================");
// task 05-02 oddEven function

// TODO: Implement the oddEven function

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  }
  return "odd";
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even
console.log("==========with Number.isInteger()=================");

function oddEven2(num) {
  if (Number.isInteger(num / 2)) {
    return "even";
  }
  return "odd";
}

console.log(oddEven2(4));
// result should be even

console.log(oddEven2(3));
// result should be odd

console.log(oddEven2(-1));
// result should be odd

console.log(oddEven2(10));
// result should be even

console.log("===========================");

// task 05-03 oldYoung function

// TODO: Implement the oldYoung function

function oldYoung(age) {
  if (age < 0 || typeof age !== typeof 0) {
    return "invalid parameter";
  }

  if (age < 16) {
    return "children";
  }
  if (age < 50) {
    return "young person";
  } else return "elder person";
}

console.log(oldYoung(27.6));
// result should be young person

console.log(oldYoung(15));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

console.log(oldYoung("77"));
// result should be elder person
