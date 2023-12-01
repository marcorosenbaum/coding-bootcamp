"use strict";
// The zipStrings function should return one string where the
// characters of both parameters are merged using the zip procedure

function zipStrings(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length + str2.length; i++) {
    result +=
      (str1[i] !== undefined ? str1[i] : "") +
      (str2[i] !== undefined ? str2[i] : "");
  }
  return result;
}

console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"
