"use strict";
// return the bandname with "The" + "Bandname" with the first letter capitalized
// when a noun STARTS and ENDS with the same letter, she likes to repeat the noun
// twice and connect them together with the first and last letter, combined into
// one word (WITHOUT "The" in front)

function bandNameGenerator(str) {
  if (str.at(0) === str.at(-1)) {
    return str[0].toUpperCase() + str.substring(1) + str.substring(1);
  }
  return "The " + str[0].toUpperCase() + str.substring(1);
}

console.log(bandNameGenerator("tart"));
