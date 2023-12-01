"use strict";

/* Given a mixed array of number and string representations of integers, 
add up the non-string integers and subtract the total of the string integers.

Return as a number. */

function divCon(x) {
  let num = 0;
  let str = 0;
  for (let currentValue of x) {
    if (typeof currentValue === typeof 0) {
      num += currentValue;
    } else if (typeof currentValue !== 0) {
      str += Number(currentValue);
    }
  }
  return num - str;
}

console.log(divCon([12, 3, "7", "3"]));
