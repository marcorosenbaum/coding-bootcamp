"use strict";

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case. */

// iterate over string and check if any letter occurs twice or more

function isIsogram(str) {
  let toArr = str.toLowerCase().split("").sort();
  let result = [];
  if (str < 1) {
    return true;
  }
  for (let i of toArr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }
  console.log(toArr);
  console.log(result);
  if (result.length === toArr.length) {
    return true;
  } else return false;
}

// convert to string and then compare !!!

console.log(isIsogram("mose"));
/* 
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */
